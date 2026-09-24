import type { Metadata } from "next";
import { CollectionIndex } from "@/components/LocalizedSite";
import { collections } from "@/lib/site";

export const metadata: Metadata = {
  title: "فئات معدات حفر الأساسات في السعودية",
  description: "تصفح أدوات حفر الأساسات وقطع التآكل ومواسير التغليف وأنظمة كيلي والمكونات المصنعة حسب الطلب في السعودية.",
  alternates:{canonical:"https://advanced-fifthaxis.com/ar/collections",languages:{en:"https://advanced-fifthaxis.com/collections",ar:"https://advanced-fifthaxis.com/ar/collections"}}
};

export default function CollectionsPage(){
  const base="https://advanced-fifthaxis.com";
  const data={"@context":"https://schema.org","@type":"ItemList",name:"فئات منتجات أدفانسد فيفث أكسس",itemListElement:collections.map((c,i)=>({"@type":"ListItem",position:i+1,name:c.nameAr,url:`${base}/ar/collections/${c.slug}`}))};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><CollectionIndex lang="ar"/></>;
}