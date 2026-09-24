import "../globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "معدات حفر الأساسات في السعودية | المحور الخامس المتقدم",
  description: "بكيتات وأوجرات الحفر والكور بارل ومواسير التغليف وأسنان القطع في جدة، السعودية. اطلب عرض سعر حسب الموديل والمواصفات.",
  alternates: { canonical: "https://advanced-fifthaxis.com/ar", languages: { en: "https://advanced-fifthaxis.com/", ar: "https://advanced-fifthaxis.com/ar" } },
};
export default function ArabicLayout({ children }: { children: React.ReactNode }) { return <html lang="ar" dir="rtl"><body><a className="skipLink" href="#main-content">الانتقال إلى المحتوى</a>{children}</body></html>; }
