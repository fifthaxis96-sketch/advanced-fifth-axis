import type { Metadata } from "next";
import { FieldWorkPage } from "@/components/FieldWorkPage";
export const metadata: Metadata = {
  title: "Client Projects Showcase",
  description: "Explore photos shared by our clients from foundation drilling projects, showcasing our tools and equipment in action.",
  alternates: {canonical: "https://advanced-fifthaxis.com/field-work", languages: {en: "https://advanced-fifthaxis.com/field-work", ar: "https://advanced-fifthaxis.com/ar/field-work"}},
  openGraph: {type: "website", title: "Client Projects Showcase", description: "Explore photos shared by our clients from foundation drilling projects, showcasing our tools and equipment in action.", url: "https://advanced-fifthaxis.com/field-work", images: [{url: "/projects/tool-on-rig.webp", alt: "Foundation drilling tool at a work site"}]}
};
export default function Page(){ return <FieldWorkPage lang="en"/>; }
