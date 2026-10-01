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
  return withSEO(`/guides/${slug}`, { title: g.en.title, description: g.en.description, alternates: { canonical: url, languages: { en: url, ar: `${base}/ar/guides/${slug}` } }, openGraph: { title: g.en.title, description: g.en.description, url, type: "article" } });
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params, g = guides.find(item => item.slug === slug);
  if (!g) notFound();
  const base = "https://advanced-fifthaxis.com", url = `${base}/guides/${slug}`;
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: g.en.title, description: g.en.description, inLanguage: "en", mainEntityOfPage: url, author: { "@type": "Organization", name: "Advanced Fifth Axis", url: base }, publisher: { "@type": "Organization", name: "Advanced Fifth Axis", url: base } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: base }, { "@type": "ListItem", position: 2, name: "Guides", item: `${base}/guides` }, { "@type": "ListItem", position: 3, name: g.en.title, item: url }] }
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}/><GuideView lang="en" guide={g}/></>;
}
