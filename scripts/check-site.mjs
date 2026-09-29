import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = 'out';
if (!existsSync(root)) throw new Error('Build output missing. Run npm run build first.');
function collect(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? collect(path) : [path];
  });
}
const files = collect(root);
const htmlFiles = files.filter(file => extname(file) === '.html');
const failures = [];
const canonicalUrls = new Set();
for (const file of files.filter(path => extname(path).toLowerCase() === '.webp')) {
  const image = readFileSync(file);
  if (image.length < 12 || image.toString('ascii', 0, 4) !== 'RIFF' || image.toString('ascii', 8, 12) !== 'WEBP') {
    failures.push(`${file}: invalid WebP image`);
  }
  if (file.includes('/thumbs/large/') && image.length > 48 * 1024) failures.push(`${file}: card thumbnail exceeds 48 KiB`);
  if (file.includes('/thumbs/small/') && image.length > 8 * 1024) failures.push(`${file}: icon thumbnail exceeds 8 KiB`);
}
for (const file of files.filter(path => path.startsWith('out/products/') && extname(path) === '.webp')) {
  const name = file.slice('out/products/'.length);
  for (const size of ['large', 'small']) {
    if (!existsSync(join(root, 'thumbs', size, name))) failures.push(`${file}: missing ${size} thumbnail`);
  }
}
function localFile(url) {
  const clean = decodeURIComponent(url.split(/[?#]/)[0]);
  const relative = clean.replace(/^\//, '');
  if (!relative || relative.endsWith('/')) return join(root, relative, 'index.html');
  const direct = join(root, relative);
  if (existsSync(direct)) return direct;
  if (existsSync(`${direct}.html`)) return `${direct}.html`;
  return join(root, relative, 'index.html');
}
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if (!canonical && !file.endsWith('404.html')) failures.push(`${file}: missing canonical`);
  if (canonical && !file.endsWith('404.html')) {
    const route = file === 'out/index.html' ? '' : file.slice(3, -5);
    const expected = `https://advanced-fifthaxis.com${route}`;
    if (canonical !== expected) failures.push(`${file}: unexpected canonical ${canonical}`);
    const expectedLang = route.startsWith('/ar') ? 'ar' : 'en';
    if (!html.includes(`<html lang=\"${expectedLang}\"`)) failures.push(`${file}: incorrect document language`);
    if (canonicalUrls.has(canonical)) failures.push(`${file}: duplicate canonical ${canonical}`);
    canonicalUrls.add(canonical);
  }
  if (!/<h1(?:\s|>)/i.test(html) && !file.endsWith('404.html')) failures.push(`${file}: missing H1`);
  for (const match of html.matchAll(/<(?:a|img|link|script)\b[^>]*?\b(?:href|src)="([^"]+)"/gi)) {
    const value = match[1];
    if (!value.startsWith('/') || value.startsWith('//')) continue;
    if (!existsSync(localFile(value))) failures.push(`${file}: broken asset or route ${value}`);
  }
}
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const url = new URL(match[1]);
  if (!existsSync(localFile(url.pathname))) failures.push(`sitemap: missing route ${url.pathname}`);
}
const robots = readFileSync(join(root, 'robots.txt'), 'utf8');
if (!robots.includes('https://advanced-fifthaxis.com/sitemap.xml')) failures.push('robots.txt: sitemap missing');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else console.log(`Checked ${htmlFiles.length} HTML files, ${[...sitemap.matchAll(/<loc>/g)].length} sitemap URLs, local links, assets, canonicals, and H1s.`);
