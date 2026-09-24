import type { Metadata } from "next";
import { ContactPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: "Contact Advanced Fifth Axis in Jeddah for foundation drilling tools, casing, Kelly systems, wear parts and custom fabrication quotations.",
  alternates:{canonical:"https://advanced-fifthaxis.com/contact",languages:{en:"https://advanced-fifthaxis.com/contact",ar:"https://advanced-fifthaxis.com/ar/contact"}},
  openGraph:{title:"Contact & Request a Quote | Advanced Fifth Axis",description:"Contact Advanced Fifth Axis in Jeddah for foundation drilling tools, casing, Kelly systems, wear parts and custom fabrication quotations.",url:"https://advanced-fifthaxis.com/contact",type:"website"}
};

export default function Page(){
  const data={"@context":"https://schema.org","@graph":[
    {"@type":"WebPage",name:"Contact Advanced Fifth Axis",description:"Contact Advanced Fifth Axis in Jeddah for foundation drilling tools, casing, Kelly systems, wear parts and custom fabrication quotations.",url:"https://advanced-fifthaxis.com/contact",inLanguage:"en-SA"},
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:"https://advanced-fifthaxis.com"},
      {"@type":"ListItem",position:2,name:"Contact Advanced Fifth Axis",item:"https://advanced-fifthaxis.com/contact"}
    ]}
  ]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><ContactPage lang="en"/></>;
}