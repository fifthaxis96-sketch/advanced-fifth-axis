import type { Metadata } from "next";
import { FAQPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة | معدات حفر الأساسات',
  description: 'إجابات عن معدات حفر الأساسات والتوافق وطلبات عروض الأسعار في السعودية.',
  alternates: { canonical: "https://advanced-fifthaxis.com/ar/faq", languages: { en: "https://advanced-fifthaxis.com/faq", ar: "https://advanced-fifthaxis.com/ar/faq" } },
  openGraph: { title: 'الأسئلة الشائعة | معدات حفر الأساسات', description: 'إجابات عن معدات حفر الأساسات والتوافق وطلبات عروض الأسعار في السعودية.', url: "https://advanced-fifthaxis.com/ar/faq" }
};
export default function Page() { return <FAQPage lang="ar"/>; }
