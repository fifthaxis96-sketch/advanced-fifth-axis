import type { Metadata } from "next";
import { GuideIndex } from "@/components/GuidePages";
export const metadata: Metadata = {
  title: "الأدلة الفنية لمعدات حفر الأساسات | أدفانسد فيفث أكسس",
  description: "أدلة عملية حول أدوات الحفر ووصلات الكيلي والمعلومات المطلوبة لطلب عرض سعر معدات الأساسات.",
  alternates: { canonical: "https://advanced-fifthaxis.com/ar/guides", languages: { en: "https://advanced-fifthaxis.com/guides", ar: "https://advanced-fifthaxis.com/ar/guides" } }
};
export default function Page() { return <GuideIndex lang="ar"/>; }
