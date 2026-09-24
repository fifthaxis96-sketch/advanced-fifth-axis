import type { Metadata } from "next";
import { CapabilitiesPage } from "@/components/LocalizedSite";
export const metadata: Metadata = {
  title: "قدرات تصنيع وتوريد معدات حفر الأساسات",
  description: "أدوات حفر الأساسات والتصنيع المخصص ومواسير التغليف وقطع الاستبدال للمشاريع في المملكة العربية السعودية.",
  alternates:{canonical:"https://advanced-fifthaxis.com/ar/capabilities",languages:{en:"https://advanced-fifthaxis.com/capabilities",ar:"https://advanced-fifthaxis.com/ar/capabilities"}}
};
export default function Page(){return <CapabilitiesPage lang="ar"/>;}