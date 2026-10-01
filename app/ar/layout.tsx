import { organization, website } from "@/lib/organization";
import { withSEO } from "@/lib/seo";
import "../globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = withSEO("/ar", {
  metadataBase: new URL("https://advanced-fifthaxis.com"),
  title: "معدات حفر الأساسات في السعودية | المحور الخامس المتقدم",
  description: "بكيتات وأوجرات الحفر والكور بارل ومواسير التغليف وأسنان القطع في جدة، السعودية. اطلب عرض سعر حسب الموديل والمواصفات.",
  openGraph: { type: "website", locale: "ar_SA", alternateLocale: ["en_SA"], siteName: "Advanced Fifth Axis", title: "معدات حفر الأساسات في السعودية | المحور الخامس المتقدم", description: "أدوات ومعدات حفر الأساسات ومواسير التغليف والمكونات المصنعة في جدة، المملكة العربية السعودية.", url: "/ar", images: [{ url: "/home/foundation-drilling-showcase.webp", alt: "مكونات حفر الأساسات من المحور الخامس المتقدم" }] },
  twitter: { card: "summary_large_image", title: "المحور الخامس المتقدم", description: "معدات حفر الأساسات ومكونات الحفر في السعودية.", images: ["/home/foundation-drilling-showcase.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: { canonical: "https://advanced-fifthaxis.com/ar", languages: { en: "https://advanced-fifthaxis.com/", ar: "https://advanced-fifthaxis.com/ar" } },
});
export default function ArabicLayout({ children }: { children: React.ReactNode }) { return <html lang="ar" dir="rtl"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(website)}}/><a className="skipLink" href="#main-content">الانتقال إلى المحتوى</a>{children}</body></html>; }
