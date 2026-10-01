import { withSEO } from "@/lib/seo";
import type { Metadata } from "next";
import { ToolFinderPage } from "@/components/LocalizedSite";

export const metadata: Metadata = withSEO("/tool-finder", {
  title: "Find Foundation Drilling Tools",
  description: "Explore drilling tool families by application and send your rig, diameter and ground conditions for technical review in Saudi Arabia.",
  alternates: { canonical: "https://advanced-fifthaxis.com/tool-finder", languages: { en: "https://advanced-fifthaxis.com/tool-finder", ar: "https://advanced-fifthaxis.com/ar/tool-finder" } }
});
export default function Page() { return <ToolFinderPage lang="en"/>; }
