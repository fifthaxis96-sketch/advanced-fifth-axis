import type { Metadata } from "next";
import { PrivacyPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: 'Privacy | Advanced Fifth Axis',
  description: 'How Advanced Fifth Axis handles the information you share when making an inquiry.',
  alternates: { canonical: "https://advanced-fifthaxis.com/privacy", languages: { en: "https://advanced-fifthaxis.com/privacy", ar: "https://advanced-fifthaxis.com/ar/privacy" } },
  openGraph: { title: 'Privacy | Advanced Fifth Axis', description: 'How Advanced Fifth Axis handles the information you share when making an inquiry.', url: "https://advanced-fifthaxis.com/privacy" }
};
export default function Page() { return <PrivacyPage lang="en"/>; }
