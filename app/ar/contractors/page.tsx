import type { Metadata } from "next";
import { ContractorOverview } from "@/components/ContractorOverview";

export const metadata: Metadata = {
  title: "معدات حفر الأساسات للمقاولين | Advanced Fifth Axis",
  description: "استعرض أدوات حفر الأساسات ومواسير التغليف وقطع التآكل والمقاسات المدرجة لطلبات عروض الأسعار في السعودية.",
  alternates: { canonical: "https://advanced-fifthaxis.com/ar/contractors", languages: { en: "https://advanced-fifthaxis.com/contractors", ar: "https://advanced-fifthaxis.com/ar/contractors" } },
  openGraph: { title: "معدات حفر الأساسات للمقاولين | Advanced Fifth Axis", description: "أدوات حفر الأساسات ومواسير التغليف والمكونات المصنعة لطلبات المقاولين في السعودية.", url: "https://advanced-fifthaxis.com/ar/contractors", type: "website" },
};

export default function Page() {
  const data = { "@context": "https://schema.org", "@type": "WebPage", name: "معدات حفر الأساسات للمقاولين", url: "https://advanced-fifthaxis.com/ar/contractors", inLanguage: "ar-SA" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /><ContractorOverview lang="ar" /></>;
}
