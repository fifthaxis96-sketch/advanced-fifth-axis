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
  const base = "https://advanced-fifthaxis.com", url = `${base}/ar/guides/${slug}`;
  const product = products.find(p => p.slug === g.productSlug);
  const images = product?.images?.map(src => ({ url: `${base}${src}`, alt: product.nameAr }));
  return withSEO(`/ar/guides/${slug}`, { title: `${g.ar.title} | المحور الخامس المتقدمة للصناعة`, description: g.ar.description, alternates: { canonical: url, languages: { en: `${base}/guides/${slug}`, ar: url } }, openGraph: { title: g.ar.title, description: g.ar.description, url, type: "article", ...(images?.length ? { images } : {}) } });
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params, g = guides.find(item => item.slug === slug);
  if (!g) notFound();
  const base = "https://advanced-fifthaxis.com", url = `${base}/ar/guides/${slug}`;
  const product = products.find(p => p.slug === g.productSlug);
  const editorial = (seoSettings as Record<string, { title: string; description: string }>)[`/ar/guides/${slug}`];
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", ...(product ? { about: { "@id": `${base}/products/${product.slug}#product`, "@type": "Product", name: product.nameAr }, image: product.images?.map(src => `${base}${src}`) } : {}), headline: editorial?.title || g.ar.title, description: editorial?.description || g.ar.description, inLanguage: "ar", mainEntityOfPage: url, author: { "@id": `${base}/#organization`, "@type": "Organization", name: "Advanced Fifth Axis", url: base }, publisher: { "@id": `${base}/#organization`, "@type": "Organization", name: "Advanced Fifth Axis", url: base } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: `${base}/ar` }, { "@type": "ListItem", position: 2, name: "الأدلة الفنية", item: `${base}/ar/guides` }, { "@type": "ListItem", position: 3, name: g.ar.title, item: url }] }
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}/><GuideView lang="ar" guide={g}/></>;
}
