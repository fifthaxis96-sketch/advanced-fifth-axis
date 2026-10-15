# Sitemap update — 15 October 2026

The sitemap covers the current 142 canonical pages (71 English and 71 Arabic), including all 26 recently added bilingual product-selection guides. This inventory supersedes the earlier 90-page audit snapshot; the product-guide content from commit `be05747` was preserved.

- Each page has reciprocal English, Arabic and English-fallback `x-default` alternatives.
- 248 image references cover visible product photos, catalog/collection images, product-guide images, the home hero and all 12 gallery photos. The conceptual reaction-beam image stays excluded.
- Modification dates are recorded from verified content changes. Their provenance and maintenance rules are in [SEO editing](seo-editing.md#sitemap-coverage-and-modification-dates); rebuilds do not refresh them automatically.
- Canonical page URLs derive from `content/seo.json`. Missing language counterparts fail the build. Redirects, query states, 404 pages and support files stay outside the page sitemap.
- Gallery scene data is shared between the page and sitemap to keep image discovery aligned with visible photos.
- An incomplete Arabic brand name in the newly added guides caused the existing indexing check to fail. The shared guide takeaway and 26 descriptions now use the owner's confirmed company name. Other product-guide content was preserved.

Local validation passed: TypeScript, production build, site checks across 143 HTML files, SEO checks across 142 pages, indexing checks for all pages and 24 legacy redirect rules, and the new `python3 scripts/check-sitemap.py` gate. That gate validates XML, exact exported-page coverage, unique URLs, actual canonicals/indexability, reciprocal language targets, recorded dates, real visible images and robots sitemap discovery. It is included in GitHub CI.

The generated `out/sitemap.xml` is the deployment artifact. A copy is saved at `/workspace/advanced-fifth-axis-sitemap.xml` for download. Git push and CI do not establish that Cloudflare has deployed it or that Google has processed it; production access and Search Console status need separate verification.
