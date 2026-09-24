import type { Metadata } from "next";
import { FAQPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Foundation Drilling',
  description: 'Answers about foundation drilling tools, custom dimensions and quotation requests in Saudi Arabia.',
  alternates: { canonical: "https://advanced-fifthaxis.com/faq", languages: { en: "https://advanced-fifthaxis.com/faq", ar: "https://advanced-fifthaxis.com/ar/faq" } },
  openGraph: { title: 'Frequently Asked Questions | Foundation Drilling', description: 'Answers about foundation drilling tools, custom dimensions and quotation requests in Saudi Arabia.', url: "https://advanced-fifthaxis.com/faq" }
};
export default function Page() { return <FAQPage lang="en"/>; }
