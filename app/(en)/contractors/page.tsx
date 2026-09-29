import type { Metadata } from "next";
import { ContractorOverview } from "@/components/ContractorOverview";

export const metadata: Metadata = {
  title: "Foundation Drilling Equipment for Contractors",
  description: "Review foundation drilling tools, casing, wear parts and verified catalog sizes for contractor quotation requests in Saudi Arabia.",
  alternates: { canonical: "https://advanced-fifthaxis.com/contractors", languages: { en: "https://advanced-fifthaxis.com/contractors", ar: "https://advanced-fifthaxis.com/ar/contractors" } },
  openGraph: { title: "Foundation Drilling Equipment for Contractors | Advanced Fifth Axis", description: "Foundation drilling tools, casing and fabricated components for contractor project inquiries in Saudi Arabia.", url: "https://advanced-fifthaxis.com/contractors", type: "website" },
};

export default function Page() {
  const data = { "@context": "https://schema.org", "@type": "WebPage", name: "Foundation Drilling Equipment for Contractors", url: "https://advanced-fifthaxis.com/contractors", inLanguage: "en-SA" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /><ContractorOverview lang="en" /></>;
}
