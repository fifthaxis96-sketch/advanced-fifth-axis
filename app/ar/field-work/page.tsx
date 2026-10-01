import { withSEO } from "@/lib/seo";
import type { Metadata } from "next";
import { FieldWorkPage } from "@/components/FieldWorkPage";
export const metadata: Metadata = withSEO("/ar/field-work", {
  title: "معرض مشاريع العملاء",
  description: "استكشف صورًا شاركها عملاؤنا من مشاريع حفر الأساسات، تعرض أدواتنا ومعداتنا أثناء العمل.",
  alternates: {canonical: "https://advanced-fifthaxis.com/ar/field-work", languages: {en: "https://advanced-fifthaxis.com/field-work", ar: "https://advanced-fifthaxis.com/ar/field-work"}},
  openGraph: {type: "website", title: "معرض مشاريع العملاء", description: "استكشف صورًا شاركها عملاؤنا من مشاريع حفر الأساسات، تعرض أدواتنا ومعداتنا أثناء العمل.", url: "https://advanced-fifthaxis.com/ar/field-work", images: [{url: "/projects/tool-on-rig.webp", alt: "أداة حفر أساسات في موقع عمل"}]}
});
export default function Page(){ return <FieldWorkPage lang="ar"/>; }
