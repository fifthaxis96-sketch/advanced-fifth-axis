import type { Metadata } from "next";
import { ProductIndex } from "@/components/LocalizedSite";
export const metadata: Metadata = {
  title: "منتجات ومعدات حفر الأساسات في السعودية",
  description: "تصفح أدوات حفر الأساسات ومواسير التغليف وأنظمة كيلي وأسنان وقطع التآكل والمكونات المصنعة حسب الطلب في السعودية.",
  alternates: { canonical: "https://advanced-fifthaxis.com/ar/products", languages: { en: "https://advanced-fifthaxis.com/products", ar: "https://advanced-fifthaxis.com/ar/products" } },
  openGraph: { title: "منتجات ومعدات حفر الأساسات في السعودية", description: "معدات حفر الأساسات ومكونات مصنعة يتم توريدها من جدة، المملكة العربية السعودية.", url: "https://advanced-fifthaxis.com/ar/products", type: "website" }
};
export default function ProductsPage(){return <ProductIndex lang="ar"/>;}