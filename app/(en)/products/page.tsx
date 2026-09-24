import type { Metadata } from "next";
import { ProductIndex } from "@/components/LocalizedSite";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foundation Drilling Products Saudi Arabia",
  description: "Browse foundation drilling tools, casing, Kelly systems, cutting and wear parts, and custom fabricated components for projects in Saudi Arabia.",
  alternates: { canonical: "https://advanced-fifthaxis.com/products", languages: { en: "https://advanced-fifthaxis.com/products", ar: "https://advanced-fifthaxis.com/ar/products" } },
  openGraph: { title: "Foundation Drilling Products Saudi Arabia", description: "Foundation drilling tools and fabricated components supplied from Jeddah, Saudi Arabia.", url: "https://advanced-fifthaxis.com/products", type: "website" }
};

export default function ProductsPage(){
  const base="https://advanced-fifthaxis.com";
  const data={"@context":"https://schema.org","@type":"ItemList",name:"Advanced Fifth Axis Products",itemListElement:products.map((p,i)=>({"@type":"ListItem",position:i+1,name:p.name,url:`${base}/products/${p.slug}`}))};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><ProductIndex lang="en"/></>;
}