import type { Metadata } from "next";
import { PrivacyPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: 'الخصوصية | المحور الخامس المتقدم',
  description: 'كيفية استخدام المعلومات التي ترسلها عند التواصل مع شركة المحور الخامس المتقدم.',
  alternates: { canonical: "https://advanced-fifthaxis.com/ar/privacy", languages: { en: "https://advanced-fifthaxis.com/privacy", ar: "https://advanced-fifthaxis.com/ar/privacy" } },
  openGraph: { title: 'الخصوصية | المحور الخامس المتقدم', description: 'كيفية استخدام المعلومات التي ترسلها عند التواصل مع شركة المحور الخامس المتقدم.', url: "https://advanced-fifthaxis.com/ar/privacy" }
};
export default function Page() { return <PrivacyPage lang="ar"/>; }
