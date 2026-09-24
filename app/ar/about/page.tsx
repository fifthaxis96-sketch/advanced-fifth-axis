import type { Metadata } from "next";
import { AboutPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: "عن أدفانسد فيفث أكسس | معدات حفر الأساسات",
  description: "تعرف على أدفانسد فيفث أكسس في جدة لتوريد وتصنيع أدوات حفر الأساسات ومواسير التغليف وقطع التآكل والمكونات المخصصة.",
  alternates:{canonical:"https://advanced-fifthaxis.com/ar/about",languages:{en:"https://advanced-fifthaxis.com/about",ar:"https://advanced-fifthaxis.com/ar/about"}},
  openGraph:{title:"عن أدفانسد فيفث أكسس | معدات حفر الأساسات",description:"تعرف على أدفانسد فيفث أكسس في جدة لتوريد وتصنيع أدوات حفر الأساسات ومواسير التغليف وقطع التآكل والمكونات المخصصة.",url:"https://advanced-fifthaxis.com/ar/about",type:"website"}
};

export default function Page(){
  const data={"@context":"https://schema.org","@graph":[
    {"@type":"WebPage",name:"عن أدفانسد فيفث أكسس",description:"تعرف على أدفانسد فيفث أكسس في جدة لتوريد وتصنيع أدوات حفر الأساسات ومواسير التغليف وقطع التآكل والمكونات المخصصة.",url:"https://advanced-fifthaxis.com/ar/about",inLanguage:"ar-SA"},
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"الرئيسية",item:"https://advanced-fifthaxis.com/ar"},
      {"@type":"ListItem",position:2,name:"عن أدفانسد فيفث أكسس",item:"https://advanced-fifthaxis.com/ar/about"}
    ]}
  ]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><AboutPage lang="ar"/></>;
}