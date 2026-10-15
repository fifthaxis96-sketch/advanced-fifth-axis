"""Audit an exported site or HTTP deployment without third-party dependencies.

python scripts/audit-seo.py --output /tmp/audit.json
python scripts/audit-seo.py --base https://advanced-fifthaxis.com --output /tmp/live.json
HTTP mode preserves failures rather than treating the local export as production evidence.
"""
import argparse
import concurrent.futures
import json
import re
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urljoin, urlsplit
from urllib.request import urlopen
import xml.etree.ElementTree as ET

ORIGIN = "https://advanced-fifthaxis.com"


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.meta, self.alternates, self.links, self.images, self.ids = {}, {}, [], [], set()
        self.title, self.h1, self.schemas, self.canonical = [], [], [], ""
        self.language, self.direction, self.active, self.buffer = "", "", "", []
        self.hidden_sections = 0
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"): self.ids.add(a["id"])
        if tag == "html": self.language, self.direction = a.get("lang", ""), a.get("dir", "ltr")
        if tag == "meta": self.meta[a.get("name", a.get("property", ""))] = a.get("content", "")
        if tag == "link" and a.get("rel") == "canonical": self.canonical = a.get("href", "")
        if tag == "link" and a.get("hreflang"): self.alternates[a["hreflang"]] = a.get("href", "")
        if tag == "a" and a.get("href"): self.links.append(a["href"])
        if tag == "img": self.images.append(a)
        if tag == "section" and "hidden" in a: self.hidden_sections += 1
        if tag in ("title", "h1") or (tag == "script" and a.get("type") == "application/ld+json"):
            self.active, self.buffer = tag, []

    def handle_data(self, value):
        if self.active: self.buffer.append(value)

    def handle_endtag(self, tag):
        if self.active == tag:
            value = "".join(self.buffer)
            if tag == "title": self.title.append(value)
            elif tag == "h1": self.h1.append(value)
            elif tag == "script":
                try: self.schemas.append(json.loads(value))
                except ValueError: self.schemas.append({"invalid_json": True})
            self.active = ""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base")
    ap.add_argument("--output", required=True)
    args = ap.parse_args()
    remote = bool(args.base) and urlsplit(args.base).hostname not in ("127.0.0.1", "localhost", "::1")
    scope = "production" if remote else "local HTTP server" if args.base else "local static export"
    root = Path(__file__).resolve().parent.parent
    settings = json.loads((root / "content/seo.json").read_text())
    export = root / "out"
    sitemap = ET.fromstring((export / "sitemap.xml").read_text())
    local_sitemap_count = len(sitemap.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url"))
    sitemap_fetch_error = None
    if args.base:
        try:
            with urlopen(args.base.rstrip("/") + "/sitemap.xml", timeout=25) as response:
                sitemap = ET.fromstring(response.read())
        except Exception as e:
            sitemap_fetch_error = str(e)
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    paths = {urlsplit(n.text).path or "/" for n in sitemap.findall("s:url/s:loc", ns)}
    paths |= set(settings)
    for file in export.rglob("*.html"):
        if file.name != "404.html": paths.add("/" if file.name == "index.html" else "/" + file.relative_to(export).as_posix()[:-5])

    def read(path):
        if not args.base:
            f = export / ("index.html" if path == "/" else path.lstrip("/") + ".html")
            return path, (f.read_text() if f.exists() else ""), None, {}, None
        try:
            with urlopen(args.base.rstrip("/") + path, timeout=25) as r:
                return path, r.read().decode(), r.status, {k.lower(): v for k,v in r.headers.items()}, None
        except Exception as e:
            return path, "", getattr(e, "code", None), {}, str(e)

    responses = list(concurrent.futures.ThreadPoolExecutor(max_workers=5).map(read, sorted(paths)))
    pages = {path: Page(body) for path, body, status, headers, err in responses if body}
    inbound = Counter()
    discovered = set(paths)
    query_variants = {}
    for page in pages.values():
        for href in set(page.links):
            u = urlsplit(urljoin(ORIGIN, href))
            if u.netloc == urlsplit(ORIGIN).netloc:
                inbound[u.path or "/"] += 1
                if not Path(u.path).suffix: discovered.add(u.path or "/")
                if u.query:
                    query_variants[u.path + "?" + u.query] = {"path": u.path + "?" + u.query, "canonical_path": u.path, "disposition": "intentionally exclude as a separate search page; retain functional state and canonicalize to clean URL", "production_verification": "not run"}
    titles = Counter(p.title[0] for p in pages.values() if p.title)
    rows = []
    for path, body, status, headers, error in responses:
        ar = path == "/ar" or path.startswith("/ar/")
        enpath = re.sub(r"^/ar(?=/|$)", "", path) or "/"
        counterpart = enpath if ar else "/ar" + ("" if path == "/" else path)
        row = {"path": path, "language": "ar" if ar else "en", "disposition": "retain and improve", "scope": scope, "http_status": status, "http_error": error, "production_verification": "blocked: network proxy denies destination" if remote and error and "403" in error else ("verified HTTP response" if remote and not error else "not run"), "counterpart": counterpart}
        if path in pages:
            p = pages[path]
            nodes = [n for schema in p.schemas for n in schema.get("@graph", [schema])]
            row.update(canonical=p.canonical, robots=p.meta.get("robots", ""), x_robots_tag=headers.get("x-robots-tag", ""), title=p.title, description=p.meta.get("description", ""), h1=p.h1, alternates=p.alternates, inbound_links=inbound[path], images=len(p.images), schema_types=[n.get("@type") for n in nodes])
            counterpart_page = pages.get(counterpart)
            checks = {
                "self_canonical": p.canonical == ORIGIN + ("" if path == "/" else path),
                "indexable": "noindex" not in (p.meta.get("robots", "") + p.meta.get("googlebot", "") + row["x_robots_tag"]).lower(),
                "language_relationship": p.language == row["language"] and (not ar or p.direction == "rtl") and p.alternates.get("ar" if not ar else "en", "").rstrip("/") == (ORIGIN+counterpart).rstrip("/") and counterpart_page is not None and counterpart_page.alternates.get(row["language"], "").rstrip("/") == (ORIGIN+path).rstrip("/"),
                "unique_metadata": len(p.title) == 1 and titles[p.title[0]] == 1 and bool(p.meta.get("description")) and p.title[0] == settings.get(path, {}).get("title"),
                "single_h1": len(p.h1) == 1 and bool(p.h1[0]),
                "sharing": p.meta.get("og:title") == (p.title or [""])[0] and p.meta.get("twitter:title") == (p.title or [""])[0] and p.meta.get("og:description") == p.meta.get("description") and p.meta.get("twitter:description") == p.meta.get("description") and (not "/products/" in path or p.meta.get("og:image") == p.meta.get("twitter:image")),
                "crawlable_internal_discovery": inbound[path] > 0 and len(p.links) > 0,
                "images_and_schema": all(i.get("alt") and i.get("width") and i.get("height") for i in p.images if i.get("aria-hidden") != "true") and bool(nodes) and not any(n.get("invalid_json") for n in nodes),
                "visible_honest_content": p.hidden_sections == 0 and not re.search(r'shown in the supplied product photo|كما يظهر في صورة المنتج|كما تظهر في صورة المنتج', body),
                "current_localized_copy": not re.search(r'quotation list|product tables on this site|جداول المنتجات في الموقع|قائمة عرض السعر|المحور الخامس المتقدم(?!ة للصناعة)', body) and (not ar or not re.search(r'>\s*(Square holder|Round holder|With carbide buttons|Without carbide buttons|Customer-requested size and drilling rig|Custom sizes)\s*<', body)),
            }
            row["checks"] = checks
            row["readiness_score"] = sum(checks.values()) * 10
            row["required_improvements"] = [k for k,v in checks.items() if not v]
        rows.append(row)
    redirects = []
    for line in (root / "public/_redirects").read_text().splitlines():
        if line.startswith("/"):
            source,target,code = line.split()
            redirects.append({"path": source, "destination": target, "expected_status": int(code), "disposition": "redirect", "target_exists_in_export": target in paths, "production_verification": "not run"})
    scores = {lang: round(sum(r["readiness_score"] for r in rows if r["language"] == lang and "readiness_score" in r) / max(1,sum(r["language"] == lang and "readiness_score" in r for r in rows)),1) for lang in ("en", "ar")}
    result = {"scope": scope, "origin": args.base or ORIGIN, "sitemap_count": None if sitemap_fetch_error else len(sitemap.findall("s:url", ns)), "sitemap_fetch_error": sitemap_fetch_error, "repository_sitemap_count": local_sitemap_count, "page_count": len(rows), "language_counts": dict(Counter(r["language"] for r in rows)), "readiness_scores": scores if pages else None, "rubric": "Ten binary source-readiness checks per page, 10 points each; language score is the mean. Editorial and technical assessment, not a Google or performance score. See checks in each row.", "urls": rows, "redirects": redirects, "query_variants": list(query_variants.values()), "other_internal_paths": sorted(discovered-paths)}
    Path(args.output).parent.mkdir(parents=True, exist_ok=True)
    Path(args.output).write_text(json.dumps(result, ensure_ascii=False, indent=2)+"\n")
    print(json.dumps({k:v for k,v in result.items() if k not in ("urls", "redirects", "query_variants")}, ensure_ascii=False))


if __name__ == "__main__": main()
