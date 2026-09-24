import type { Metadata } from "next";
import { ContactPage } from "@/components/LocalizedSite";
export const metadata: Metadata = {
  title: "Contact & Request a Quote | Advanced Fifth Axis",
  description: "Contact Advanced Fifth Axis in Jeddah for foundation drilling tools, casing, Kelly systems, wear parts and custom fabrication quotations.",
  alternates:{canonical:"https://advanced-fifthaxis.com/contact",languages:{en:"https://advanced-fifthaxis.com/contact",ar:"https://advanced-fifthaxis.com/ar/contact"}}
};
export default function Page(){return <ContactPage lang="en"/>;}