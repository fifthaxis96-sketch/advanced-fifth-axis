import "../globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://advanced-fifthaxis.com"),
  title: "معدات حفر الأساسات في السعودية | المحور الخامس المتقدم",
  description: "بكيتات وأوجرات الحفر والكور بارل ومواسير التغليف وأسنان القطع في جدة، السعودية. اطلب عرض سعر حسب الموديل والمواصفات.",
  openGraph: { type: "website", locale: "ar_SA", alternateLocale: ["en_SA"], siteName: "Advanced Fifth Axis", title: "معدات حفر الأساسات في السعودية | المحور الخامس المتقدم", description: "أدوات ومعدات حفر الأساسات ومواسير التغليف والمكونات المصنعة في جدة، المملكة العربية السعودية.", url: "/ar", images: [{ url: "/products/owner-blue-toothed-casing.webp", alt: "مكونات حفر الأساسات من المحور الخامس المتقدم" }] },
  twitter: { card: "summary_large_image", title: "المحور الخامس المتقدم", description: "معدات حفر الأساسات ومكونات الحفر في السعودية.", images: ["/products/owner-blue-toothed-casing.webp"] },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://advanced-fifthaxis.com/ar", languages: { en: "https://advanced-fifthaxis.com/", ar: "https://advanced-fifthaxis.com/ar" } },
};
export default function ArabicLayout({ children }: { children: React.ReactNode }) { return <html lang="ar" dir="rtl"><body><a className="skipLink" href="#main-content">الانتقال إلى المحتوى</a>{children}</body></html>; }
