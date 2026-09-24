import type { Metadata } from "next";
import { ContactPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: "تواصل معنا واطلب عرض سعر | أدفانسد فيفث أكسس",
  description: "تواصل مع أدفانسد فيفث أكسس في جدة لطلبات أسعار معدات حفر الأساسات ومواسير التغليف وأنظمة كيلي وقطع التآكل والتصنيع المخصص.",
  alternates:{canonical:"https://advanced-fifthaxis.com/ar/contact",languages:{en:"https://advanced-fifthaxis.com/contact",ar:"https://advanced-fifthaxis.com/ar/contact"}},
  openGraph:{title:"تواصل معنا واطلب عرض سعر | أدفانسد فيفث أكسس",description:"تواصل مع أدفانسد فيفث أكسس في جدة لطلبات أسعار معدات حفر الأساسات ومواسير التغليف وأنظمة كيلي وقطع التآكل والتصنيع المخصص.",url:"https://advanced-fifthaxis.com/ar/contact",type:"website"}
};

export default function Page(){
  const data={"@context":"https://schema.org","@graph":[
    {"@type":"WebPage",name:"تواصل مع أدفانسد فيفث أكسس",description:"تواصل مع أدفانسد فيفث أكسس في جدة لطلبات أسعار معدات حفر الأساسات ومواسير التغليف وأنظمة كيلي وقطع التآكل والتصنيع المخصص.",url:"https://advanced-fifthaxis.com/ar/contact",inLanguage:"ar-SA"},
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"الرئيسية",item:"https://advanced-fifthaxis.com/ar"},
      {"@type":"ListItem",position:2,name:"تواصل مع أدفانسد فيفث أكسس",item:"https://advanced-fifthaxis.com/ar/contact"}
    ]}
  ]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><ContactPage lang="ar"/></>;
}