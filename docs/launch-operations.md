# Launch operations — Advanced Fifth Axis

## Production sources

- GitHub repository: `fifthaxis96-sketch/advanced-fifth-axis`, production branch `main`.
- Static export: `npm ci && npm run typecheck && npm run build && npm run check:site`.
- Cloudflare Worker: `advanced-fifth-axis`, deployed from `main` with `npx wrangler deploy`; domain: `https://advanced-fifthaxis.com`.
- Canonical host: apex (`advanced-fifthaxis.com`). English and Arabic pages have distinct URLs and language alternates.

## Before and after each deployment

1. Confirm the GitHub quality workflow passes and the Cloudflare build reports success for the same commit.
2. Open the homepage, `/ar`, `/products`, `/contact`, and `/ar/contact` over HTTPS.
3. Check a product page and both guide languages, then verify `/robots.txt` and `/sitemap.xml` are reachable.
4. Confirm the old Kelly adapter URL redirects permanently to `/products/kelly-boxes` (and the Arabic equivalent to `/ar/products/kelly-boxes`).
5. Confirm `https://www.advanced-fifthaxis.com/products` redirects in one 301 hop to `https://advanced-fifthaxis.com/products`, preserving the path and any query string. This requires a Cloudflare zone redirect rule; Worker static `_redirects` cannot match hostnames.
6. Build a sample quotation with two product sizes and inspect the generated WhatsApp/email links without sending it; remove the sample list afterward.

## Cloudflare hostname rule — verified live on 29 September 2026

The WWW-to-apex redirect is active. Browser checks of `/products?test=1` and `/ar/products/kelly-boxes?source=check` reached the corresponding apex URLs with paths and query strings intact. Keep the WWW hostname proxied in Cloudflare DNS and recheck the rule after future zone changes. The existing `Always Use HTTPS` setting handles HTTP first.

## Search Console status — 29 September 2026

- The local production build passes typecheck and site checks (87 HTML files, 86 sitemap URLs). The browser used for this audit could not inspect the live `/robots.txt` and `/sitemap.xml` responses because its client blocked those XML/text navigations; check their public responses in an ordinary browser or Search Console before treating crawler access as verified.
- The verified Google Search Console domain property `sc-domain:advanced-fifthaxis.com` is connected with site-owner access. `https://advanced-fifthaxis.com/sitemap.xml` was accepted on 29 September and is pending its first Google download. Recheck the Sitemaps report for download, errors, and discovered URLs after Google processes it.
- URL Inspection for the homepage, English and Arabic rock bucket pages, and `/field-work` currently says **URL is unknown to Google**, with no recorded crawl. Reinspect after Google downloads the sitemap; submission alone does not guarantee indexing.
- Bing Webmaster Tools is not connected to the available account integration; verify the domain there and check its sitemap and URL inspection/indexing reports.
- Confirm that company-controlled accounts own the domain registrar, Cloudflare zone and Worker, GitHub repository, Search Console and Bing Webmaster Tools. Use named company administrators and recovery methods; do not put credentials or ownership tokens in this repository.

## Rollback

If a release breaks the site, revert the offending commit(s) on `main` and confirm the automatic Cloudflare build deploys the previous working content. In a time-critical outage, a Cloudflare administrator can roll back the Worker deployment in **Workers & Pages → advanced-fifth-axis → Deployments**; then revert the GitHub change as well so the next push does not reintroduce it. Re-run the production checks above after rollback. A DNS or zone-rule change is separate from the Worker deployment and must be reversed in Cloudflare if that change caused the issue.
