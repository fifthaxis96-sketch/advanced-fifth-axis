import type { Metadata } from "next";
import { CollectionIndex } from "@/components/LocalizedSite";
import { collections } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foundation Drilling Product Collections Saudi Arabia",
  description: "Browse foundation drilling tools, cutting and wear parts, casing, Kelly systems and custom fabricated components in Saudi Arabia.",
  alternates:{canonical:"https://advanced-fifthaxis.com/collections",languages:{en:"https://advanced-fifthaxis.com/collections",ar:"https://advanced-fifthaxis.com/ar/collections"}}
};

export default function CollectionsPage(){
  const base="https://advanced-fifthaxis.com";
  const data={"@context":"https://schema.org","@type":"ItemList",name:"Advanced Fifth Axis Product Collections",itemListElement:collections.map((c,i)=>({"@type":"ListItem",position:i+1,name:c.name,url:`${base}/collections/${c.slug}`}))};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><CollectionIndex lang="en"/></>;
}