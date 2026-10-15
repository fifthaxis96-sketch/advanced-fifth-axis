# SEO and functional audit — 16 October 2026 (Saudi time)

## Live baseline

- Crawled all 142 canonical English/Arabic pages with an explicitly identified audit client. All returned HTTP 200; no failures in the checks recorded in `live-summary.json`.
- robots.txt, sitemap.xml and the optional llms.txt directory returned HTTP 200 with appropriate content types. robots.txt allows crawling and references the canonical sitemap.
- An intentionally nonexistent URL returned HTTP 404 (expected).
- HTTP redirects to HTTPS; www redirects to the canonical hostname while preserving path/query. Old casing-twister redirects to casing-drive. Cloudflare normalizes trailing slashes and .html paths with 307 redirects.
- No duplicate or missing configured titles/descriptions. Export checks cover all local routes/assets, reciprocal language pairs, canonicals, robots directives, one H1 per page, schema syntax and sitemap image coverage.
- Browser checks: English and Arabic homepages show no failed images, desktop document overflow or website-origin console errors. Header quotation link reaches the form; empty description validation works; product/quantity controls work. No WhatsApp message was sent. A browser-extension console error was excluded from website findings.

## Corrections

1. Product guides explicitly set their real catalog images for Open Graph and Twitter sharing, instead of relying on inherited layout metadata.
2. Guide Article headlines/descriptions use the editable SEO settings so manual editorial changes stay consistent with structured data.
3. English and Arabic product pages define stable Product entity IDs matching the guide references; guide publisher/author references connect to the existing Organization entity.
4. Homepage quotation requests identify the homepage as the source rather than always identifying the contact page. Contact-page requests retain the contact-page source.
5. The 404 page exposes the main-content target used by the keyboard skip link.
6. Sitemap modification dates for the homepage/contact pages reflect this functional form update.
7. SEO checks now verify article metadata, defined Product references and article social images.
8. Header and guide quotation buttons retain the selected product, matching the main product quotation button.

## Validation and limits

Type check, production build, site checks, SEO checks, indexing checks, sitemap checks and diff whitespace checks. Live post-deployment checks cover changed guide/product metadata, the 404 target and sitemap dates.

GSC Wizard site-list access still returned `payment_required`. This response does not establish the owner's subscription status. Google indexing, impressions, ranking positions and Search Console enhancement reports could not be inspected. No Google indexing/ranking guarantee or Lighthouse/Core Web Vitals score is claimed. Browser rendering was inspected at the available desktop viewport; device-lab/mobile performance testing is outside this result. Cloudflare security protections were left unchanged.

Official guidance consulted:
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
