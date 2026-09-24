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
  const url=`${base}/ar/collections/${c.slug}`;
  return {
    title:`${c.nameAr} | معدات حفر الأساسات السعودية`,
    description:c.descriptionAr,
    alternates:{canonical:url,languages:{en:`${base}/collections/${c.slug}`,ar:`${base}/ar/collections/${c.slug}`}},
    openGraph:{title:c.nameAr,description:c.descriptionAr,url,type:"website"}
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=collections.find(x=>x.slug===slug);
  if(!c)notFound();
  const items=productsForCollection(c);
  const base="https://advanced-fifthaxis.com";
  const url=`${base}/ar/collections/${c.slug}`;
  const data={"@context":"https://schema.org","@graph":[
    {"@type":"CollectionPage",name:c.nameAr,description:c.descriptionAr,url,mainEntity:{"@type":"ItemList",itemListElement:items.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.nameAr,url:`${base}/ar/products/${p.slug}`}))}},
    {"@type":"BreadcrumbList",itemListElement:[
      {"@type":"ListItem",position:1,name:"الرئيسية",item:`${base}/ar`},
      {"@type":"ListItem",position:2,name:"الفئات",item:`${base}/ar/collections`},
      {"@type":"ListItem",position:3,name:c.nameAr,item:url}
    ]}
  ]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><CollectionView lang="ar" collection={c}/></>;
}