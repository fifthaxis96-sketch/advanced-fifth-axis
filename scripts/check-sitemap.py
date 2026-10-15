"""Validate the built sitemap against exported pages, language pairs and visible images."""
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

root = Path(__file__).resolve().parent.parent
output = root / "out"
origin = "https://advanced-fifthaxis.com"
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "x": "http://www.w3.org/1999/xhtml", "i": "http://www.google.com/schemas/sitemap-image/1.1"}
seo = json.loads((root / "content/seo.json").read_text())
dates = json.loads((root / "content/sitemap-dates.json").read_text())
canonical = lambda path: origin + ("" if path == "/" else path)


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.canonical, self.images, self.robots = "", set(), ""
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "link" and a.get("rel") == "canonical": self.canonical = a.get("href")
        if tag == "meta" and a.get("name") == "robots": self.robots = a.get("content", "")
        if tag in ("img", "source"):
            candidates = [a.get("src", "")] + [s.strip().split(" ")[0] for s in a.get("srcset", "").split(",")]
            for src in candidates:
                if src:
                    self.images.add(src)
                    self.images.add(re.sub(r"^/thumbs/(?:small|large)/", "/products/", src))


nodes = ET.parse(output / "sitemap.xml").getroot().findall("s:url", ns)
entries = {node.findtext("s:loc", namespaces=ns): node for node in nodes}
assert len(entries) == len(nodes), "Duplicate sitemap URLs"
assert set(entries) == {canonical(path) for path in seo}, "Sitemap and editable page inventory differ"
exported = {canonical("/" if p.name == "index.html" else "/" + p.relative_to(output).as_posix()[:-5]) for p in output.rglob("*.html") if p.name != "404.html"}
assert set(entries) == exported, "Sitemap must cover every exported canonical HTML page"
assert set(dates) <= set(seo), "Modification dates refer to removed pages"
image_count = 0
for path in seo:
    url = canonical(path)
    node = entries[url]
    assert urlsplit(url).scheme == "https" and not urlsplit(url).query and not urlsplit(url).fragment
    page = Page((output / ("index.html" if path == "/" else path.lstrip("/") + ".html")).read_text())
    assert page.canonical == url, f"{path}: canonical disagrees with sitemap"
    assert "noindex" not in page.robots.lower(), f"{path}: excluded page in sitemap"
    english_path = re.sub(r"^/ar(?=/|$)", "", path) or "/"
    expected = {"en": canonical(english_path), "ar": origin + "/ar" + ("" if english_path == "/" else english_path), "x-default": canonical(english_path)}
    alternates = {a.attrib["hreflang"]: a.attrib["href"] for a in node.findall("x:link", ns)}
    assert alternates == expected, f"{path}: incorrect language alternatives"
    for target in alternates.values():
        assert target in entries, f"{path}: missing language target"
        assert {a.attrib["hreflang"]: a.attrib["href"] for a in entries[target].findall("x:link", ns)} == expected, f"{path}: nonreciprocal language target"
    date = node.findtext("s:lastmod", namespaces=ns)
    assert date == dates.get(path), f"{path}: modification date differs from recorded content date"
    if date: assert datetime.fromisoformat(date.replace("Z", "+00:00")) <= datetime.now(timezone.utc), f"{path}: future modification date"
    images = [i.text for i in node.findall("i:image/i:loc", ns)]
    assert len(images) == len(set(images)), f"{path}: duplicate image locations"
    for image in images:
        parsed = urlsplit(image)
        assert parsed.scheme == "https" and parsed.netloc == "advanced-fifthaxis.com", f"{path}: image must use canonical HTTPS host"
        image_path = unquote(parsed.path)
        assert (output / image_path.lstrip("/")).is_file(), f"{path}: missing exported image {image_path}"
        assert image_path in page.images, f"{path}: image does not appear on the page (or as its thumbnail)"
        assert not image_path.endswith("pile-testing-reaction-beam-blue.webp"), "Concept image must not be listed as a product photograph"
    image_count += len(images)
    if path in ("/field-work", "/ar/field-work"):
        assert set(images) == {origin + src for src in page.images if src.startswith("/projects/")}, "Gallery image coverage"
    if path in ("/products", "/ar/products") or ("/guides/" in path and path.endswith("-guide")):
        assert set(images) == {origin + src for src in page.images if src.startswith("/products/")}, f"{path}: visible catalog/guide photo coverage"

robots = (output / "robots.txt").read_text()
assert "Sitemap: " + origin + "/sitemap.xml" in robots
print(f"Sitemap verified: {len(entries)} canonical URLs, {len(entries)//2} reciprocal language pairs, {image_count} image references, and recorded content dates.")
