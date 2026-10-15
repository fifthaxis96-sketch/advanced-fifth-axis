import seoSettings from "@/content/seo.json";
import { products } from "@/lib/site";
import { withSEO } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideView } from "@/components/GuidePages";
import { guides } from "@/lib/guides";
export function generateStaticParams() { return guides.map(g => ({ slug: g.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params, g = guides.find(item => item.slug === slug);
  if (!g) return {};
  const base = "https://advanced-fifthaxis.com", url = `${base}/guides/${slug}`;
  const product = products.find(p => p.slug === g.productSlug);
  const images = product?.images?.map(src => ({ url: `${base}${src}`, alt: product.name }));
  return withSEO(`/guides/${slug}`, { title: g.en.title, description: g.en.description, alternates: { canonical: url, languages: { en: url, ar: `${base}/ar/guides/${slug}` } }, openGraph: { title: g.en.title, description: g.en.description, url, type: "article", ...(images?.length ? { images } : {}) } });
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params, g = guides.find(item => item.slug === slug);
  if (!g) notFound();
  const base = "https://advanced-fifthaxis.com", url = `${base}/guides/${slug}`;
  const product = products.find(p => p.slug === g.productSlug);
  const editorial = (seoSettings as Record<string, { title: string; description: string }>)[`/guides/${slug}`];
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", ...(product ? { about: { "@id": `${base}/products/${product.slug}#product`, "@type": "Product", name: product.name }, image: product.images?.map(src => `${base}${src}`) } : {}), headline: editorial?.title || g.en.title, description: editorial?.description || g.en.description, inLanguage: "en", mainEntityOfPage: url, author: { "@id": `${base}/#organization`, "@type": "Organization", name: "Advanced Fifth Axis", url: base }, publisher: { "@id": `${base}/#organization`, "@type": "Organization", name: "Advanced Fifth Axis", url: base } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: base }, { "@type": "ListItem", position: 2, name: "Guides", item: `${base}/guides` }, { "@type": "ListItem", position: 3, name: g.en.title, item: url }] }
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}/><GuideView lang="en" guide={g}/></>;
}
