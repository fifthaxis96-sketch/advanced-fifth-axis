import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const origin = 'https://advanced-fifthaxis.com';
const seo = JSON.parse(readFileSync('content/seo.json', 'utf8'));
const guidance = JSON.parse(readFileSync('content/product-guidance.json', 'utf8'));
const translations = JSON.parse(readFileSync('content/variants-ar.json', 'utf8'));
const read = path => readFileSync(`out${path === '/' ? '/index' : path}.html`, 'utf8');
const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const paths = Object.keys(seo);
const sitemap = readFileSync('out/sitemap.xml', 'utf8');
let productCount = 0;
for (const path of paths) {
  const html = read(path);
  for (const [, raw] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const url = new URL(decode(raw), origin + path);
    if (url.origin !== origin || !url.hash || url.hash === '#') continue;
    const targetPath = url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
    if (!seo[targetPath]) continue;
    const id = decodeURIComponent(url.hash.slice(1));
    assert.ok(read(targetPath).includes(`id="${id}"`), `${path}: broken fragment ${raw}`);
  }
  const ar = /^\/ar(?:\/|$)/.test(path);
  const english = path.replace(/^\/ar(?=\/|$)/, '') || '/';
  const counterpart = ar ? english : `/ar${path === '/' ? '' : path}`;
  assert.ok(seo[counterpart], `${path}: missing translation`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: exactly one H1`);
  assert.ok(!/<section[^>]*\shidden(?:[\s=>])/.test(html), `${path}: hidden content section`);
  assert.ok(!/المحور الخامس المتقدم(?!ة للصناعة)/.test(html), `${path}: outdated Arabic company name`);
  assert.ok(!/quotation list|product tables on this site|جداول المنتجات في الموقع|قائمة عرض السعر/.test(html), `${path}: obsolete interface instructions`);
  assert.ok(!/shown in the supplied product photo|كما يظهر في صورة المنتج|كما تظهر في صورة المنتج/.test(html), `${path}: photo-reference filler`);
  const alternates = Object.fromEntries([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)].map(m => [m[1], m[2]]));
  const expectedEn = origin + (english === '/' ? '' : english);
  const expectedAr = `${origin}/ar${english === '/' ? '' : english}`;
  assert.equal(alternates.en?.replace(/\/$/, ''), expectedEn, `${path}: English alternate`);
  assert.equal(alternates.ar, expectedAr, `${path}: Arabic alternate`);
  assert.equal(alternates['x-default']?.replace(/\/$/, ''), expectedEn, `${path}: x-default`);
  const block = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(m => m[1].includes(`<loc>${origin}${path === '/' ? '' : path}</loc>`))?.[1];
  assert.ok(block?.includes('hreflang="x-default"'), `${path}: sitemap alternates`);
  const meta = Object.fromEntries([...html.matchAll(/<meta (?:name|property)="([^"]+)" content="([^"]*)"/g)].map(m => [m[1], decode(m[2])]));
  assert.ok(!/noindex|nofollow/.test(meta.robots || ''), `${path}: indexability`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(m => { const s = JSON.parse(m[1]); return s['@graph'] || [s]; });
  assert.ok(schemas.some(n => n['@type'] === 'Organization' && n.alternateName === 'المحور الخامس المتقدمة للصناعة'), `${path}: confirmed business identity`);
  assert.ok(!schemas.some(n => n['@type'] === 'FAQPage'), `${path}: redundant FAQ markup`);
  if (path.includes('/products/')) {
    productCount++;
    const slug = path.split('/').pop();
    const product = schemas.find(n => n['@type'] === 'Product');
    assert.ok(product, `${path}: Product entity`);
    assert.ok(!product.offers && !product.review && !product.aggregateRating, `${path}: unverified commerce claims`);
    assert.ok(html.includes(guidance[slug][ar ? 'ar' : 'en'].question), `${path}: product-specific selection question`);
    assert.equal(meta['og:image'], meta['twitter:image'], `${path}: sharing image consistency`);
    if (product.image?.length) assert.equal(meta['og:image'], product.image[0], `${path}: actual product sharing image`);
    const variants = html.match(/<ul class="variantList">([\s\S]*?)<\/ul>/)?.[1] || '';
    if (ar) for (const option of Object.keys(translations)) assert.ok(!variants.includes(`>${option} `), `${path}: untranslated option ${option}`);
    if (slug === 'roller-bits') {
      assert.equal((variants.match(/<li>/g) || []).length, 1);
      assert.ok(variants.includes('8-1/2'));
    }
    if (['c30-holders', 'hq-round-holders', 'casing'].includes(slug)) assert.equal((variants.match(/<li>/g) || []).length, 2, `${path}: approved options`);
    if (['rock-augers','drilling-buckets','core-barrels','cleaning-buckets'].includes(slug)) {
      assert.ok(!/<table/.test(html), `${path}: removed specification tables must stay removed`);
      assert.ok(html.includes(ar ? 'المواصفات حسب طلب العميل' : 'Specifications available upon customer request'));
    }
    if (slug === 'pile-testing-reaction-beam') {
      assert.ok(html.includes('/products/pile-testing-reaction-beam-blue.webp'), `${path}: approved beam image must display`);
      assert.ok(html.includes(ar ? 'صورة توضيحية مرجعية' : 'Reference illustration'), `${path}: illustration must be identified`);
      assert.ok(!html.includes('Product image being added'), `${path}: obsolete image placeholder`);
    }
  }
}
const redirects = readFileSync('public/_redirects', 'utf8').split('\n').filter(l => l.startsWith('/')).map(l => l.trim().split(/\s+/));
for (const [source, target, code] of redirects) {
  assert.equal(code, '301');
  assert.ok(existsSync(`out${target}.html`), `${source}: missing redirect destination`);
  assert.ok(!redirects.some(([from]) => from === target), `${source}: redirect chain`);
}
const missing = readFileSync('out/404.html', 'utf8');
assert.ok(/name="robots" content="[^"]*noindex/.test(missing));
assert.ok(!/rel="canonical"/.test(missing));
console.log(`Indexing checks passed: ${paths.length} pages, ${productCount} localized product pages, ${redirects.length} redirect rules, and excluded 404.`);
