import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideView } from "@/components/GuidePages";
import { guides } from "@/lib/guides";
export function generateStaticParams() { return guides.map(g => ({ slug: g.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params, g = guides.find(item => item.slug === slug);
  if (!g) return {};
  const base = "https://advanced-fifthaxis.com", url = `${base}/ar/guides/${slug}`;
  return { title: `${g.ar.title} | أدفانسد فيفث أكسس`, description: g.ar.description, alternates: { canonical: url, languages: { en: `${base}/guides/${slug}`, ar: url } }, openGraph: { title: g.ar.title, description: g.ar.description, url, type: "article" } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params, g = guides.find(item => item.slug === slug);
  if (!g) notFound();
  const base = "https://advanced-fifthaxis.com", url = `${base}/ar/guides/${slug}`;
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: g.ar.title, description: g.ar.description, inLanguage: "ar", mainEntityOfPage: url, author: { "@type": "Organization", name: "Advanced Fifth Axis", url: base }, publisher: { "@type": "Organization", name: "Advanced Fifth Axis", url: base } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: `${base}/ar` }, { "@type": "ListItem", position: 2, name: "الأدلة الفنية", item: `${base}/ar/guides` }, { "@type": "ListItem", position: 3, name: g.ar.title, item: url }] }
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}/><GuideView lang="ar" guide={g}/></>;
}
