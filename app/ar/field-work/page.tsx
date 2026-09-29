import type { Metadata } from "next";
import { FieldWorkPage } from "@/components/FieldWorkPage";
export const metadata: Metadata = {
  title: "صور من مواقع حفر الأساسات",
  description: "صور ميدانية لأدوات حفر الأساسات ومناولة المكونات الأنبوبية وظروف الحفر. تصفح الاستخدامات واطلب عرض سعر وفق مشروعك.",
  alternates: {canonical: "https://advanced-fifthaxis.com/ar/field-work", languages: {en: "https://advanced-fifthaxis.com/field-work", ar: "https://advanced-fifthaxis.com/ar/field-work"}},
  openGraph: {type: "website", title: "صور من مواقع حفر الأساسات", description: "صور ميدانية لأدوات حفر الأساسات وظروف العمل.", url: "https://advanced-fifthaxis.com/ar/field-work", images: [{url: "/projects/tool-on-rig.webp", alt: "أداة حفر أساسات في موقع عمل"}]}
};
export default function Page(){ return <FieldWorkPage lang="ar"/>; }
