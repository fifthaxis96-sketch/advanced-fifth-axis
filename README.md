# Advanced Fifth Axis Website

Bilingual (English / Arabic) industrial website for Advanced Fifth Axis, focused on foundation drilling tools, casing, wear parts, Kelly systems, and custom fabrication in Saudi Arabia.

## Stack
- Next.js static export
- React + TypeScript
- Cloudflare Workers static assets
- GitHub Actions quality checks

## Quality gates
Every push to `main` runs:
- TypeScript type checking
- Production static build
- Exported route, asset, sitemap, canonical and language checks

## Main routes
- `/` and `/ar`
- `/products` and `/ar/products`
- `/collections` and `/ar/collections`
- `/capabilities` and `/ar/capabilities`
- `/about` and `/ar/about`
- `/contact` and `/ar/contact`
- `/faq` and `/ar/faq`
- `/privacy` and `/ar/privacy`

Product and collection detail pages are statically generated from `lib/site.ts`.

Run `node scripts/check-indexing.mjs` after the build to verify language relationships, product options, schema, and redirect targets. `python scripts/audit-seo.py --output /tmp/seo-audit.json` produces a URL-level local report. Add `--base https://advanced-fifthaxis.com` to check production responses; network failures remain failures in that report.

## Content management
Product names, bilingual descriptions, variants, image paths, collections, and company details are currently managed in `lib/site.ts`. Product images belong in `public/products/`. After adding or replacing a product image, run `python scripts/generate-thumbnails.py` (requires Pillow) and commit the generated `public/thumbs/` files. Cards use 480 px images and compact icons use 160 px images; detail pages retain the original. The site check verifies image format, thumbnail presence, and size budgets.

## SEO

See the [15 October implementation report](docs/seo-implementation-2026-10-15.md) for current local verification, the URL inventory and keyword map, and explicitly blocked production/account checks. Older audit documents are historical snapshots.

Product-specific selection questions are in `content/product-guidance.json`; Arabic option labels are in `content/variants-ar.json`. After changing real images or regenerating thumbnails, run `python scripts/generate-image-metadata.py` to refresh intrinsic dimensions. Preserve original photographs; optimized hero and logo files are compressed/resized derivatives of the existing assets.
The site includes canonical URLs, language alternates, sitemap, robots metadata, Open Graph metadata, Organization/WebSite/Product/Collection structured data, breadcrumbs, and product FAQ structured data.

Edit bilingual page titles and descriptions in [`content/seo.json`](content/seo.json). See [SEO editing and indexing instructions](docs/seo-editing.md) for the direct editor link, field guidance and Search Console checks.

## Deployment
The Next.js build exports to `./out`. `wrangler.jsonc` serves that directory through Cloudflare static assets.

See [site audit](docs/site-audit.md) for verified findings and [launch operations](docs/launch-operations.md) for production checks, redirects, ownership and rollback.
