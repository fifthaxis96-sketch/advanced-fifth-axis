import type { Metadata } from "next";
import { AboutPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: "About Advanced Fifth Axis | Foundation Drilling Saudi Arabia",
  description: "Learn about Advanced Fifth Axis, a Jeddah-based supplier and fabricator of foundation drilling tools, casing solutions, wear parts and custom components.",
  alternates:{canonical:"https://advanced-fifthaxis.com/about",languages:{en:"https://advanced-fifthaxis.com/about",ar:"https://advanced-fifthaxis.com/ar/about"}},
  openGraph:{title:"About Advanced Fifth Axis | Foundation Drilling Saudi Arabia",description:"Learn about Advanced Fifth Axis, a Jeddah-based supplier and fabricator of foundation drilling tools, casing solutions, wear parts and custom components.",url:"https://advanced-fifthaxis.com/about",type:"website"}
};

export default function Page(){
  const data={"@context":"https://schema.org","@graph":[
    {"@type":"WebPage",name:"About Advanced Fifth Axis",description:"Learn about Advanced Fifth Axis, a Jeddah-based supplier and fabricator of foundation drilling tools, casing solutions, wear parts and custom components.",url:"https://advanced-fifthaxis.com/about",inLanguage:"en-SA"},
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:"https://advanced-fifthaxis.com"},
      {"@type":"ListItem",position:2,name:"About Advanced Fifth Axis",item:"https://advanced-fifthaxis.com/about"}
    ]}
  ]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><AboutPage lang="en"/></>;
}