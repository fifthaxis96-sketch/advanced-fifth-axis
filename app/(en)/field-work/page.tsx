import type { Metadata } from "next";
import { FieldWorkPage } from "@/components/FieldWorkPage";
export const metadata: Metadata = {
  title: "Foundation Drilling Field Work",
  description: "Field photographs of foundation drilling tools, tubular component handling and bore conditions. Explore applications and request a project-specific quotation.",
  alternates: {canonical: "https://advanced-fifthaxis.com/field-work", languages: {en: "https://advanced-fifthaxis.com/field-work", ar: "https://advanced-fifthaxis.com/ar/field-work"}},
  openGraph: {type: "website", title: "Foundation Drilling Field Work", description: "Foundation drilling tools and site conditions in real field photographs.", url: "https://advanced-fifthaxis.com/field-work", images: [{url: "/projects/tool-on-rig.webp", alt: "Foundation drilling tool at a work site"}]}
};
export default function Page(){ return <FieldWorkPage lang="en"/>; }
