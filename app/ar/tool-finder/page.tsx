import type { Metadata } from "next";
import { ToolFinderPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: "مساعد اختيار أدوات حفر الأساسات",
  description: "تصفح فئات أدوات الحفر حسب الاستخدام وأرسل موديل المعدة والقطر وطبيعة التربة للمراجعة الفنية في السعودية.",
  alternates: { canonical: "https://advanced-fifthaxis.com/ar/tool-finder", languages: { en: "https://advanced-fifthaxis.com/tool-finder", ar: "https://advanced-fifthaxis.com/ar/tool-finder" } }
};
export default function Page() { return <ToolFinderPage lang="ar"/>; }
