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
  if (route.includes('/products/')) assert.ok(block.includes('<image:loc>'), `${route}: missing image discovery`);
}
for (const match of directory.matchAll(/\]\(https:\/\/advanced-fifthaxis.com([^)]*)\)/g)) {
  const route = match[1];
  assert.ok(route === '/sitemap.xml' || settings[route], `llms.txt: invalid link ${route}`);
}
console.log(`SEO checks passed for ${titles.size} editable pages, sitemap language/image entries, and AI directory links.`);
