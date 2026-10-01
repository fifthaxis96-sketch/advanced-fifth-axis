# Editing search titles and descriptions

Edit `content/seo.json` in GitHub. Each key is the exact page path, such as `/products/drilling-buckets` or `/ar/products/drilling-buckets`. Change the `title` and `description` values, preserve valid JSON, and commit. The normal website deployment publishes the changes. Titles are used exactly as entered; a brand suffix is not added automatically. Open Graph and Twitter titles/descriptions follow the same values.

Use concise, accurate and unique titles in the page's language. Summarize what that specific page offers in its description. Mention Saudi Arabia or Jeddah where relevant; avoid repeated keyword lists. Google has no fixed character limit and may generate a different search title or snippet. Metadata affects the browser tab and source HTML; it does not change the visible page heading or product descriptions.

New pages use their existing metadata as a fallback until their path is added to this file. Empty configured titles or descriptions fail the build.

## What matters for discovery

- Every page should have a descriptive HTML title. Meta descriptions help describe search snippets; they are not a guaranteed ranking boost.
- Canonical URLs and English/Arabic hreflang links identify preferred pages and language alternatives. The sitemap includes matching language alternatives and product images.
- Public pages permit indexing and crawling. The wildcard robots rule allows search and AI crawlers that honor robots.txt. Hosting/CDN bot policies must also permit access.
- Product, breadcrumb, article and company structured data must describe real visible content. Quote-only products must not use invented prices, availability or reviews to obtain rich results.
- Meta keywords are ignored by Google. Open Graph and Twitter tags support link previews; they are not mandatory Google ranking fields.
- `llms.txt` is an optional site directory, not a Google requirement or a guarantee of AI citations. This website does not expose an agent API, so no fabricated agent manifest is provided.

## Search Console verification

In the verified property for advanced-fifthaxis.com, submit `https://advanced-fifthaxis.com/sitemap.xml` in Sitemaps. Check the last read date, processing status and discovered URLs. Use URL Inspection on the homepage and representative English/Arabic product pages to check indexing and the Google-selected canonical. A working sitemap does not guarantee indexing.

The GSC Wizard connector returned payment_required during this audit. GSC indexing status and sitemap submission could not be verified through that connector. No verification token was fabricated.

Official guidance:
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/crawling-indexing/special-tags
- https://developers.google.com/search/docs/appearance/ai-features
