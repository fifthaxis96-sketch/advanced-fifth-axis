# Website audit — 24 September 2026

## Scope and verified state

- Repository: `fifthaxis96-sketch/advanced-fifth-axis`; Next.js static export to Cloudflare Workers assets.
- 16 product families, five collections, two languages. Product slugs are unique. Each product belongs to exactly one collection; no repeated product image path is assigned to separate products in the catalog.
- The production domain responded successfully over HTTPS during the audit. The repository has a typecheck/build workflow but no deployment workflow; Cloudflare's external Git connection and zone settings cannot be inferred from this repository.
- The live response already included `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `X-Frame-Options` headers. Domain-level settings, analytics ownership, Search Console indexing, and Web Vitals field data require account access.

## Issues addressed

1. Arabic pages inherited `<html lang="en">`. They now have their own root layout with `<html lang="ar" dir="rtl">` in exported HTML.
2. The 404 page inherited the homepage canonical and indexable metadata. It now has no canonical and explicitly requests no indexing.
3. The footer had no privacy or FAQ destinations. Both now have English and Arabic pages, distinct metadata, language alternates, and sitemap entries.
4. CI configured npm caching without a lockfile and used `npm install`, which could vary dependency versions. A lockfile is committed and CI uses `npm ci`.
5. Three unused packages were removed. The product search now tolerates common Arabic orthographic differences and selected English/Arabic trade terms.
6. A post-build check validates exported internal links, assets, canonical URLs, document language, H1s, sitemap routes, and robots sitemap reference.

## Remaining work requiring verified inputs

- Nine catalog product families have no product-specific photograph. Obtain verified owner photographs rather than reusing an unrelated item's image. The current page deliberately indicates when an image is pending.
- Individual dimensions, capacities, material grades, certifications, lead times, prices, and machine compatibility are not substantiated for every model. Confirm against drawings and factory records before publishing precise claims or offers.
- Confirm the exact legal privacy language, retention procedure, business email, and any shipping or sales terms before expanding those sections.
- Check Search Console and Bing indexing, analytics goals, Cloudflare deployment logs, DNS and security settings with their respective account access. No measurement score is claimed without a real performance run.

## Verification

Run `npm ci && npm run typecheck && npm run build && npm run check:site`. The export check covers 59 HTML pages and 58 sitemap URLs at this revision.
