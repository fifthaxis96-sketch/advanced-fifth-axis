import { withSEO } from "@/lib/seo";
import type { Metadata } from "next";
import { PrivacyPage } from "@/components/LocalizedSite";

export const metadata: Metadata = withSEO("/ar/privacy", {
  title: 'الخصوصية | المحور الخامس المتقدمة للصناعة',
  description: 'كيفية استخدام المعلومات التي ترسلها عند التواصل مع شركة المحور الخامس المتقدمة للصناعة.',
  alternates: { canonical: "https://advanced-fifthaxis.com/ar/privacy", languages: { en: "https://advanced-fifthaxis.com/privacy", ar: "https://advanced-fifthaxis.com/ar/privacy" } },
  openGraph: { title: 'الخصوصية | المحور الخامس المتقدمة للصناعة', description: 'كيفية استخدام المعلومات التي ترسلها عند التواصل مع شركة المحور الخامس المتقدمة للصناعة.', url: "https://advanced-fifthaxis.com/ar/privacy" }
});
export default function Page() { return <PrivacyPage lang="ar"/>; }
