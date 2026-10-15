import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const settings = JSON.parse(readFileSync('content/seo.json', 'utf8'));
const decode = value => value.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const titles = new Set();
const sitemap = readFileSync('out/sitemap.xml', 'utf8');
const directory = readFileSync('out/llms.txt', 'utf8');
const blocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m => m[1]);
assert.equal(blocks.length, Object.keys(settings).length, 'Sitemap/config coverage');
for (const [route, entry] of Object.entries(settings)) {
  const html = readFileSync(`out${route === '/' ? '/index' : route}.html`, 'utf8');
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? '');
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? '');
  assert.equal(title, entry.title, `${route}: configured title must render exactly`);
  assert.equal(description, entry.description, `${route}: configured description must render exactly`);
  assert.ok(title && description, `${route}: empty SEO fields`);
  assert.ok(!titles.has(title), `${route}: duplicate title`); titles.add(title);
  for (const tag of ['og:title', 'twitter:title']) {
    const escaped = tag.replace(':', ':');
    const match = html.match(new RegExp(`<meta (?:property|name)="${escaped}" content="([^\"]*)"`));
    assert.equal(decode(match?.[1] ?? ''), entry.title, `${route}: ${tag} must match editable title`);
  }
  const url = `https://advanced-fifthaxis.com${route === '/' ? '' : route}`;
  const block = blocks.find(b => b.includes(`<loc>${url}</loc>`));
  assert.ok(block, `${route}: missing sitemap URL`);
  for (const lang of ['en', 'ar', 'x-default']) assert.ok(block.includes(`hreflang="${lang}"`), `${route}: missing sitemap language ${lang}`);
  if (route.includes('/guides/')) {
    const entities = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .flatMap(m => { const data = JSON.parse(m[1]); return data['@graph'] || [data]; });
    const article = entities.find(n => n['@type'] === 'Article');
    assert.ok(article, `${route}: missing Article entity`);
    assert.equal(article.headline, entry.title, `${route}: Article headline must match editable title`);
    assert.equal(article.description, entry.description, `${route}: Article description must match editable description`);
    if (article.about?.['@id']) {
      const target = new URL(article.about['@id']);
      const productHtml = readFileSync(`out${target.pathname}.html`, 'utf8');
      assert.ok(productHtml.includes(`"@id":"${article.about['@id']}"`), `${route}: undefined product entity reference`);
    }
    if (article.image?.length) {
      const social = html.match(/<meta property="og:image" content="([^"]*)"/)?.[1];
      const twitter = html.match(/<meta name="twitter:image" content="([^"]*)"/)?.[1];
      assert.equal(social, article.image[0], `${route}: use article product image for sharing`);
      assert.equal(twitter, article.image[0], `${route}: consistent Twitter article image`);
    }
  }
  if (route.includes('/products/')) {
    const product = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .flatMap(m => { const data = JSON.parse(m[1]); return data['@graph'] || [data]; })
      .find(data => data['@type'] === 'Product');
    assert.ok(product, `${route}: missing Product entity`);
    for (const image of product.image || []) assert.ok(block.includes(`<image:loc>${image}</image:loc>`), `${route}: missing actual product image discovery`);
    assert.equal(block.includes('<image:loc>'), !!product.image?.length, `${route}: sitemap images must match verified product photographs`);
  }
}
for (const match of directory.matchAll(/\]\(https:\/\/advanced-fifthaxis.com([^)]*)\)/g)) {
  const route = match[1];
  assert.ok(route === '/sitemap.xml' || settings[route], `llms.txt: invalid link ${route}`);
}
console.log(`SEO checks passed for ${titles.size} editable pages, sitemap language/image entries, and AI directory links.`);
