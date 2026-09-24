import type { Metadata } from "next";
import { AboutPage } from "@/components/LocalizedSite";
export const metadata: Metadata = {
  title: "About Advanced Fifth Axis | Foundation Drilling Saudi Arabia",
  description: "Learn about Advanced Fifth Axis, a Jeddah-based supplier and fabricator of foundation drilling tools, casing solutions, wear parts and custom components.",
  alternates:{canonical:"https://advanced-fifthaxis.com/about",languages:{en:"https://advanced-fifthaxis.com/about",ar:"https://advanced-fifthaxis.com/ar/about"}}
};
export default function Page(){return <AboutPage lang="en"/>;}