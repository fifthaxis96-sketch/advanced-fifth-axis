# Bilingual indexing and SEO implementation — 15 October 2026

The repository implementation is complete and verified locally for 90 canonical pages: 45 English and 45 Arabic. Production deployment and indexing verification are **blocked**, not complete. Network access initially denied public/API requests. Later GitHub API and official Google docs became reachable. The website itself now responds HTTP 403 with Cloudflare error 1010 to all 90 known page requests, while Wrangler reports no authenticated Cloudflare account. A successful Git push or local score must not be described as a successful deployment or indexing improvement.

## Changes and factual boundaries

- Reviewed and edited all 90 central SEO entries individually. Product titles have one brand suffix, and collection, product, guide and contact pages have distinct intents.
- Standardized the owner's confirmed Arabic business name, **المحور الخامس المتقدمة للصناعة**, in visible identity, metadata and Organization alternateName. Existing public phone, email, VAT and registration values were retained; independent legal/profile verification remains unavailable.
- Centralized self-canonicals, reciprocal English/Arabic alternates and English x-default. Arabic pages retain Arabic canonicals and RTL. Open Graph and Twitter product images now agree with the actual catalog photograph.
- Removed the hidden English keyword section from both homepages. Removed unsupported 25+ years / 50+ clients statistics rather than repeat unsubstantiated numbers.
- Reviewed all 26 product families. Added product-specific bilingual selection answers, localized all 27 option labels, corrected photo-reference descriptions, and linked every product to its collection and an appropriate guide. Specific BFZ70, Kelly, casing and core-barrel/roller relationships are links for review, not compatibility guarantees.
- Preserved the single Roller Bits 8-1/2-inch option, combined C30/HQ families and their approved options, Single Wall Casing/Casing Shoe, Casing Drive rename and all old redirects. Drilling specification tables remain removed; specifications stay available upon customer request.
- Kept the simple quotation form. Corrected obsolete guides that referenced removed tables or a quotation list. WhatsApp handoffs retain one preview link and a concise request, without reference-code or separate photo-URL blocks.
- Removed redundant generic product FAQ schema while keeping useful product-specific visible questions. Product, Organization, WebSite, Article, collection and breadcrumb JSON remain factual. No prices, offers, ratings, reviews, manufactured dates or rich-result eligibility claims were added.
- The reaction-beam source explicitly labelled its image a concept visualization. That asset is no longer used as a product photograph, in gallery cards, sharing or product-image discovery. The original file is retained for provenance; a verified real photograph is requested. Existing other photographs were not replaced with invented products.
- Gallery text now describes visible scenes without unverified client, location, supplied-SKU or outcome attribution. Existing photos link to broad relevant collections. No fictional case studies were published.
- Fixed measured text contrast failures and added keyboard focus styling. Screenshot review found mobile contact shortcuts obscuring headings; they now stay in normal page flow on small screens. No horizontal overflow or page runtime errors were detected at the tested sizes.
- Added real intrinsic image dimensions and responsive product image candidates. Existing hero/logo assets were recompressed/resized into derivatives, preserving the originals: desktop hero 308,522 → 204,094 bytes; mobile hero 127,718 → 97,446; logo 32,436 → 13,912. This is a byte reduction, not proof of improved real-user speed.
- Deferred the existing GA tag and added `inquiry_intent` with channel, language, known product slug and source. Custom payloads exclude requirement text, city, email/phone values, query parameters and message body. A handoff/click is intent, not a sent inquiry or sale. Actual GA ingestion and enhanced-measurement settings need account access.

## Inventory and dispositions

[Complete URL audit](seo-audit-2026-10-15/url-audit.csv) contains 175 entries: 90 canonical pages, 24 legacy redirect variants, 52 discovered product-selection query URLs, five support/excluded URLs and four slash/HTML variants. Every entry has a disposition and verification scope. Probe URLs used to test 404 behavior are recorded separately in the HTTP evidence.

The 90 canonical pages comprise 52 localized product pages, ten collection details, six guide details, and 22 home/hub/service/information pages. There are no orphan canonical paths in the exported navigation or missing language counterparts. This recount is repository/export evidence: the live sitemap and Search Console might expose a different inventory, and those sources could not be fetched.

- Canonical pages: retain and improve; all served local HTTP 200.
- Former Kelly adapter, Casing Twister, C30 square/round and HQ model URLs, with EN/AR and slash variants: preserve one-hop 301 redirects to HTTP 200 destinations.
- Product-selection contact parameters: retain form state; canonicalize to clean contact pages and omit from sitemap. No search/filter combination pages were created. Representative UTM/filter variants also consolidate to clean URLs.
- Slash and `.html` catalog variants: existing Cloudflare asset handling gives 307 redirects to extensionless URLs. No redundant broad redirect was added.
- 404 document and nonexistent route probes: noindex, no canonical, actual local HTTP 404 for nonexistent routes. Robots/sitemap/directory/manifest are support files, not landing pages.
- All exported local assets and links, including fragments, passed checks. A production HTTPS www probe returned 301 to the corresponding apex path with query preserved. Apex HTTP/HTTPS returns Cloudflare error 1010; full consolidation, application edge headers and verified-searchbot access remain unverified.

## Before/after source-readiness scores

These are **local checklist scores**, not Google scores, rankings, semantic content quality ratings, live indexing eligibility or guarantees. The same ten binary checks are used per page: self-canonical; no noindex; correct document language/RTL plus reciprocal counterpart; distinct editable metadata; one H1; matching social metadata/images; crawlable inbound links; image alt/dimensions plus parseable entities; no hidden keyword/photo-reference filler; and current localized copy without obsolete instructions. Each check contributes ten points; each language score is the mean across 45 pages. Full boolean results are saved in the source JSON files.

| Language | Before | After | Scope |
| --- | ---: | ---: | --- |
| English | 87.1/100 | 100/100 | Repository/export checklist only |
| Arabic | 85.3/100 | 100/100 | Repository/export checklist only |

Passing all scoped checks does not resolve the missing reaction-beam photograph, project evidence, account checks, live deployment or Google indexing. Those are listed as blocked rather than hidden in the score.

## Validation and measured tool results

Node.js 22.23.3, Next.js 15.5.26, TypeScript 5.9.3, Chromium 154.0.8037.57, axe-core 4.14.0, Lighthouse 13.5.0, Wrangler 4.151.0.

Passed locally: typecheck; production static build; route/asset/site check across 91 HTML files; SEO checks across 90 editable pages; new indexing regression check across 90 routes, 52 localized product pages and 24 redirects; and `git diff --check`. The existing GitHub quality workflow now runs the new indexing check.

Cloudflare Workers emulation: all 90 canonical pages HTTP 200; all 24 legacy rules one-hop 301 to 200; robots and sitemap HTTP 200; four nonexistent page/product URLs correctly HTTP 404 with noindex. No fabricated lastmod was added. Rebuilding the export invalidated the running emulator asset index during one intermediate run; restarting the emulator resolved it, and the final HTTP/browser suites were rerun. Failed intermediate attempts are not counted as passes.

Browser QA: EN/AR home, catalog, Kelly product, Kelly guide and contact at 390×844 and 1440×844. Twenty cases had zero tested axe WCAG A/AA violations, no horizontal overflow, no page runtime errors and loaded visible images. Automated accessibility is not certification or a complete manual audit. Bilingual filtering/comparison, language counterpart links, tool-finder casing results, product form prefill/starter changes, concise handoff URL and one contextual inquiry event were verified. External sending was stubbed; no messages were sent.

Measured Lighthouse results and run conditions are recorded in [performance summary](seo-audit-2026-10-15/performance-summary.json). Baseline mobile home lab scores were English 90 performance / 96 accessibility / 100 SEO, and Arabic 92 / 100 / 100. Concurrent final homepage runs varied sharply while browser QA and a cold emulator were active, so sequential isolated reruns were performed for diagnosis; both sets are retained. Other tested template lab scores are listed in the summary. These scores do not establish a production speed improvement. Real-user Core Web Vitals and actual Google tag ingestion are unavailable. The external PageSpeed API returned HTTP 429; no score was fabricated from that failed request. External Chromium requests also fail certificate trust; TLS verification was not disabled.

| Sequential local mobile home run | Performance | Accessibility | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: |
| English | 95 | 100 | 100 | 2.7 s | 0 |
| Arabic | 92 | 100 | 100 | 2.8 s | 0 |

Other final catalog/product/guide/contact lab runs scored 94–97 for performance, 100 for automated accessibility and 100 for the Lighthouse SEO checklist, with CLS 0. These remain local observations; LCP above 2.5 seconds in some simulations remains a useful optimization lead, not a real-user Core Web Vitals verdict.

## Webmaster tools, references and deployment

No Search Console, Bing or Analytics account connector is exposed in this session. The available Google credential file is an empty JSON object and cannot authenticate API access. No current property, permission, sitemap processing, selected canonical, coverage reason, manual-action/security result or Saudi query/page data can be established. Earlier documentation's subscription problem and indexing counts are historical, not repeated as current findings. No sitemap resubmission, indexing request or IndexNow submission was made. No IndexNow key exists in the inspected configuration/repository. Google's restricted Indexing API was not used for ordinary catalog pages.

Required public/API hostnames were added to the environment draft, preserving package-manager presets. GitHub API and official Google documentation later became reachable; a draft save itself does not prove runtime application. Cloudflare `whoami` remains unauthenticated. Source commit **`1a21c4907aa2a61c4c6e24d38dbc3a3ecc596393`** was pushed to `main`, and the remote ref was confirmed. [GitHub quality run 38763936275](https://github.com/fifthaxis96-sketch/advanced-fifth-axis/actions/runs/38763936275) completed successfully for that exact SHA. No Cloudflare deployment ID or deployed Worker version was observed. [Deployment status](seo-audit-2026-10-15/deployment-status.json) distinguishes these results. The post-push [production audit](seo-audit-2026-10-15/production-audit.json) records HTTP 403 / Cloudflare error 1010 and a CF-Ray for each of the 90 known canonical URLs. The live sitemap could not be read, so its current page count is unknown. Production changed content is **not verified**; these denials do not establish whether verified Googlebot is denied.

The following official Google documents were fetched successfully after access changed. [Saved excerpts and final URLs](seo-audit-2026-10-15/official-docs.json) support the technical decisions. The FAQ URL redirects to the current changelog: Google stopped showing FAQ rich results on **May 7, 2026**. Product snippets require a name plus at least one of offers/review/aggregateRating, so quote-only catalog entities are not claimed eligible. Google confirms no special AI text files/schema are required, hreflang variants must self-reference and reciprocate, canonical redirects/link elements are signals, and lastmod must be verifiably accurate.

- [Localized versions and hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Canonical consolidation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Product snippets](https://developers.google.com/search/docs/appearance/structured-data/product-snippet)
- [FAQ feature documentation](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [AI search features](https://developers.google.com/search/docs/appearance/ai-features)

Local JSON/consistency assertions are not an official Schema.org validator or Google Rich Results Test. Quote-only Product entities without the required commerce/review data do not establish Google rich-result eligibility. FAQ/AI files are not presented as ranking mechanisms.

## Exact remaining actions and owner inputs

1. Have the Cloudflare administrator review **error 1010** events for this audit client; CF-Ray values are saved per URL, including robots. Verify the intended handling of ordinary users and verified search crawlers. The current 403 is an observed Cloudflare edge response, distinct from the initial proxy CONNECT denial; it is not proof Googlebot is blocked. Do not disable security or bypass restrictions merely to make the audit pass.
2. Use environment settings to supply existing authorized Cloudflare API access and account ID. Requirements were saved securely as `CLOUDFLARE_API_TOKEN` (destination `api.cloudflare.com`) and `CLOUDFLARE_ACCOUNT_ID`; no secret values were requested in chat. Confirm the automatic Worker build deployed the source SHA, then rerun every live sitemap page, redirects, robots, canonicals/languages and changed templates. GitHub CI has already passed. Draft saving does not apply values or publish the environment; review/save the cloud environment configuration and publish it when appropriate. This is separate from publishing the website.
3. Connect the company's Search Console property, Analytics and any existing Bing account. A `GSC_ACCESS_TOKEN` secure requirement was saved for `www.googleapis.com` and `searchconsole.googleapis.com`, plus `GSC_PROPERTY` suggested as `sc-domain:advanced-fifthaxis.com` for review. Use an existing authorized token; no account permissions were changed. The present Google credential file is empty. Recheck property permissions/subscription, both languages/templates, exclusions, selected canonicals, security/manual actions and Saudi/language performance. Submit the verified production sitemap and supported recrawl requests once access works.
4. Confirm `inquiry_intent` arrives in GA. Review property enhanced measurement and disable automatic form/outbound URL collection where enabled: message-bearing external URLs may contain typed information. The custom event payload is clean; inaccessible account-level automatic behavior cannot be guaranteed. Configure key events only with the understanding that clicks are intent.
5. Supply a verified real reaction-beam photograph. Technical expansion for all 26 products requires drawings/revisions, confirmed dimensions/interfaces and genuine specifications; no stock, lead-time, material/certification or load claims will be invented. See [product input register](seo-audit-2026-10-15/product-inputs.csv).
6. Confirm current public contact/legal records, partner-logo permissions and company-controlled profile URLs before external entity/profile assertions. Verify years/client-count claims before restoring them.
7. Provide project publishing permissions, approved attribution/location/dates, actual supplied scope and evidenced outcomes before case studies. See the [unpublished bilingual structure](seo-audit-2026-10-15/case-study-input-template.md).

[Requirement-by-requirement reconciliation](seo-audit-2026-10-15/requirements.md) records completed, already-correct, blocked and not-applicable items. [Bilingual keyword-to-page map](seo-audit-2026-10-15/keyword-map.csv) covers all 45 language pairs: suggested themes only, with no fabricated demand or volumes. Raw local test evidence, scripts and screenshots are also saved in `/workspace/seo-evidence`; a shareable archive is produced at completion. Google controls indexing and rankings; neither an improvement nor first-place ranking is claimed.

## Browser trust restriction

Chromium production requests failed `ERR_CERT_AUTHORITY_INVALID`. A narrowly approved import of an already system-trusted proxy CA did not resolve that browser error. Automatic approval review rejected a broader proposal to import all local CA certificates because that would expand SSL trust beyond this QA task. No broad import or certificate-verification bypass was performed. Existing verified-TLS HTTP requests established the Cloudflare 1010 denial; secure external browser validation remains unavailable.

## Requested Cloudflare plugin

The owner subsequently requested the Cloudflare plugin. Its link was received, but no callable Cloudflare tools appeared in the session tool inventory, so no plugin-backed account read or write was possible. The plugin is the preferred route for the remaining Worker deployment and security-event checks once its tools are exposed. Secure environment credential requirements were saved before that request as a fallback; if plugin authorization supplies the necessary access, the redundant requirements can be removed in environment settings rather than adding duplicate credentials.
