import type { Metadata } from "next";
import { CapabilitiesPage } from "@/components/LocalizedSite";

export const metadata: Metadata = {
  title: "Foundation Drilling Capabilities | Advanced Fifth Axis",
  description: "Foundation drilling tools, custom fabrication, casing and replacement components for projects in Saudi Arabia.",
  alternates:{canonical:"https://advanced-fifthaxis.com/capabilities",languages:{en:"https://advanced-fifthaxis.com/capabilities",ar:"https://advanced-fifthaxis.com/ar/capabilities"}},
  openGraph:{title:"Foundation Drilling Capabilities | Advanced Fifth Axis",description:"Foundation drilling tools, custom fabrication, casing and replacement components for projects in Saudi Arabia.",url:"https://advanced-fifthaxis.com/capabilities",type:"website"}
};

export default function Page(){
  const data={"@context":"https://schema.org","@graph":[
    {"@type":"WebPage",name:"Foundation Drilling Capabilities",description:"Foundation drilling tools, custom fabrication, casing and replacement components for projects in Saudi Arabia.",url:"https://advanced-fifthaxis.com/capabilities",inLanguage:"en-SA"},
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:"https://advanced-fifthaxis.com"},
      {"@type":"ListItem",position:2,name:"Foundation Drilling Capabilities",item:"https://advanced-fifthaxis.com/capabilities"}
    ]}
  ]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><CapabilitiesPage lang="en"/></>;
}