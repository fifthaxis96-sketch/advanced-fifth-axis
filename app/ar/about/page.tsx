import type { Metadata } from "next";
import { AboutPage } from "@/components/LocalizedSite";
export const metadata: Metadata = {
  title: "عن أدفانسد فيفث أكسس | معدات حفر الأساسات",
  description: "تعرف على أدفانسد فيفث أكسس في جدة لتوريد وتصنيع أدوات حفر الأساسات ومواسير التغليف وقطع التآكل والمكونات المخصصة.",
  alternates:{canonical:"https://advanced-fifthaxis.com/ar/about",languages:{en:"https://advanced-fifthaxis.com/about",ar:"https://advanced-fifthaxis.com/ar/about"}}
};
export default function Page(){return <AboutPage lang="ar"/>;}