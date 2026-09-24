import type { Metadata } from "next";
import { CapabilitiesPage } from "@/components/LocalizedSite";
export const metadata: Metadata = {
  title: "Foundation Drilling Capabilities | Advanced Fifth Axis",
  description: "Foundation drilling tools, custom fabrication, casing and replacement components for projects in Saudi Arabia.",
  alternates:{canonical:"https://advanced-fifthaxis.com/capabilities",languages:{en:"https://advanced-fifthaxis.com/capabilities",ar:"https://advanced-fifthaxis.com/ar/capabilities"}}
};
export default function Page(){return <CapabilitiesPage lang="en"/>;}