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

## Main routes
- `/` and `/ar`
- `/products` and `/ar/products`
- `/collections` and `/ar/collections`
- `/capabilities` and `/ar/capabilities`
- `/about` and `/ar/about`
- `/contact` and `/ar/contact`

Product and collection detail pages are statically generated from `lib/site.ts`.

## Content management
Product names, bilingual descriptions, variants, image paths, collections, and company details are currently managed in `lib/site.ts`. Product images belong in `public/products/`.

## SEO
The site includes canonical URLs, language alternates, sitemap, robots metadata, Open Graph metadata, Organization/WebSite/Product/Collection structured data, breadcrumbs, and product FAQ structured data.

## Deployment
The Next.js build exports to `./out`. `wrangler.jsonc` serves that directory through Cloudflare static assets.
