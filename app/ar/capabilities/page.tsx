import type { Metadata } from "next";
import { CapabilitiesPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: "قدرات تصنيع وتوريد معدات حفر الأساسات",
  description: "أدوات حفر الأساسات والتصنيع المخصص ومواسير التغليف وقطع الاستبدال للمشاريع في المملكة العربية السعودية.",
  alternates:{canonical:"https://advanced-fifthaxis.com/ar/capabilities",languages:{en:"https://advanced-fifthaxis.com/capabilities",ar:"https://advanced-fifthaxis.com/ar/capabilities"}},
  openGraph:{title:"قدرات تصنيع وتوريد معدات حفر الأساسات",description:"أدوات حفر الأساسات والتصنيع المخصص ومواسير التغليف وقطع الاستبدال للمشاريع في المملكة العربية السعودية.",url:"https://advanced-fifthaxis.com/ar/capabilities",type:"website"}
};

export default function Page(){
  const data={"@context":"https://schema.org","@graph":[
    {"@type":"WebPage",name:"قدرات تصنيع وتوريد معدات حفر الأساسات",description:"أدوات حفر الأساسات والتصنيع المخصص ومواسير التغليف وقطع الاستبدال للمشاريع في المملكة العربية السعودية.",url:"https://advanced-fifthaxis.com/ar/capabilities",inLanguage:"ar-SA"},
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"الرئيسية",item:"https://advanced-fifthaxis.com/ar"},
      {"@type":"ListItem",position:2,name:"قدرات تصنيع وتوريد معدات حفر الأساسات",item:"https://advanced-fifthaxis.com/ar/capabilities"}
    ]}
  ]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><CapabilitiesPage lang="ar"/></>;
}