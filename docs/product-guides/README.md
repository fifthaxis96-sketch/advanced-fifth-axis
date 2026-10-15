# Product selection guides

Adds a dedicated guide for each of the 26 current catalog entries in English and Arabic (52 routes), alongside the three existing general guides. Each guide answers an informational selection question and links to the transactional catalog page, avoiding additional duplicate product listings.

## Editorial sources and boundaries

- Product names, photos, variants and commercial claims: `lib/site.ts`.
- Reference dimension tables: `lib/product-specifications.ts`, rendered through the existing table components.
- Existing product questions: `content/product-guidance.json`.
- New product-specific editorial text: `content/product-articles.json`.
- SEO titles and descriptions remain owner-editable in `content/seo.json`.
- No invented stock, certifications, capacities, rig compatibility or material grades. The owner-approved blue reaction beam illustration is restored with a reference-illustration label. Structural and test components require engineered project inputs.

General background references consulted (not specifications or endorsements of our products):

- https://equipment.bauer.de/en/drilling-tools-casings
- https://equipment.bauer.de/en/drilling-tools-and-wear-parts
- https://www.ensingerplastics.com/en-gb/thermoplastic-materials/pom-acetal
- https://machinery.leffer.de/en/machines/betonierrohre-und-zubehoer/
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content

## Keyword evidence

`keyword-map.tsv` maps one informational topic to each product. Topics use precise product names, applications, sizing and fit questions. These are relevance-based editorial targets, not measured search-volume leaders. GSC Wizard site-list and account-info requests returned `payment_required` on 2026-10-15 despite the owner reporting an active subscription; account status could not be verified. When access is restored, compare query impressions/clicks, country, landing page and conversions before changing priorities. GSC impressions are site visibility, not total market search volume.

## Validation

`npm run typecheck`, `npm run build`, `npm run check:site`, `npm run check:seo` and `git diff --check`. Check guide rendering in English desktop and Arabic mobile, including specification-table scrolling and image sizing. Sitemap and the optional llms.txt directory derive from the guide registry; no special AI indexing or ranking guarantee is implied.
