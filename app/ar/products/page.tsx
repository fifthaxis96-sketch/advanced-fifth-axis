import type { Metadata } from "next";
import { ProductIndex } from "@/components/LocalizedSite";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "منتجات ومعدات حفر الأساسات في السعودية",
  description: "تصفح أدوات حفر الأساسات ومواسير التغليف وأنظمة كيلي وأسنان وقطع التآكل والمكونات المصنعة حسب الطلب في السعودية.",
  alternates: { canonical: "https://advanced-fifthaxis.com/ar/products", languages: { en: "https://advanced-fifthaxis.com/products", ar: "https://advanced-fifthaxis.com/ar/products" } },
  openGraph: { title: "منتجات ومعدات حفر الأساسات في السعودية", description: "معدات حفر الأساسات ومكونات مصنعة يتم توريدها من جدة، المملكة العربية السعودية.", url: "https://advanced-fifthaxis.com/ar/products", type: "website" }
};

export default function ProductsPage(){
  const base="https://advanced-fifthaxis.com";
  const data={"@context":"https://schema.org","@type":"ItemList",name:"منتجات أدفانسد فيفث أكسس",itemListElement:products.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.nameAr,url:`${base}/ar/products/${p.slug}`}))};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><ProductIndex lang="ar"/></>;
}