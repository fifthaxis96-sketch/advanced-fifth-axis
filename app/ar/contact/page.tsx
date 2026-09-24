import type { Metadata } from "next";
import { ContactPage } from "@/components/LocalizedSite";
export const metadata: Metadata = {
  title: "تواصل معنا واطلب عرض سعر | أدفانسد فيفث أكسس",
  description: "تواصل مع أدفانسد فيفث أكسس في جدة لطلبات أسعار معدات حفر الأساسات ومواسير التغليف وأنظمة كيلي وقطع التآكل والتصنيع المخصص.",
  alternates:{canonical:"https://advanced-fifthaxis.com/ar/contact",languages:{en:"https://advanced-fifthaxis.com/contact",ar:"https://advanced-fifthaxis.com/ar/contact"}}
};
export default function Page(){return <ContactPage lang="ar"/>;}