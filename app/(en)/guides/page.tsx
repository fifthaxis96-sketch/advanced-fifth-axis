import type { Metadata } from "next";
import { GuideIndex } from "@/components/GuidePages";
export const metadata: Metadata = {
  title: "Foundation Drilling Technical Guides | Advanced Fifth Axis",
  description: "Practical buyer guidance on drilling tools, Kelly connections and the information needed for a foundation equipment quotation.",
  alternates: { canonical: "https://advanced-fifthaxis.com/guides", languages: { en: "https://advanced-fifthaxis.com/guides", ar: "https://advanced-fifthaxis.com/ar/guides" } }
};
export default function Page() { return <GuideIndex lang="en"/>; }
