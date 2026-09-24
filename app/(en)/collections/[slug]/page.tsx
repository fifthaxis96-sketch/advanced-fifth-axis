import type { Metadata } from "next";
import { collections, productsForCollection } from "@/lib/site";
import { CollectionView } from "@/components/LocalizedSite";
import { notFound } from "next/navigation";

export function generateStaticParams(){return collections.map(c=>({slug:c.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const c=collections.find(x=>x.slug===slug);
  if(!c)return {};
  const base="https://advanced-fifthaxis.com";
  const url=`${base}/collections/${c.slug}`;
  return {
    title:`${c.name} | Foundation Drilling Saudi Arabia`,
    description:c.description,
    alternates:{canonical:url,languages:{en:`${base}/collections/${c.slug}`,ar:`${base}/ar/collections/${c.slug}`}},
    openGraph:{title:c.name,description:c.description,url,type:"website"}
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=collections.find(x=>x.slug===slug);
  if(!c)notFound();
  const items=productsForCollection(c);
  const base="https://advanced-fifthaxis.com";
  const url=`${base}/collections/${c.slug}`;
  const data={"@context":"https://schema.org","@graph":[
    {"@type":"CollectionPage",name:c.name,description:c.description,url,mainEntity:{"@type":"ItemList",itemListElement:items.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.name,url:`${base}/products/${p.slug}`}))}},
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:`${base}`},
      {"@type":"ListItem",position:2,name:"Collections",item:`${base}/collections`},
      {"@type":"ListItem",position:3,name:c.name,item:url}
    ]}
  ]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><CollectionView lang="en" collection={c}/></>;
}