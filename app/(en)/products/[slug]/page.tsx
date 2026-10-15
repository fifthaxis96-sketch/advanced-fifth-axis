import { withSEO } from "@/lib/seo";
import type { Metadata } from "next";
import { products } from "@/lib/site";
import { ProductView } from "@/components/LocalizedSite";
import { notFound } from "next/navigation";

export function generateStaticParams(){return products.map(p=>({slug:p.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const p=products.find(x=>x.slug===slug);
  if(!p)return {};
  const base="https://advanced-fifthaxis.com";
  const url=`${base}/products/${p.slug}`;
  const title=p.name+" | Foundation Drilling Saudi Arabia";
  const description=p.description;
  return withSEO(`/products/${slug}`, {
    title, description,
    alternates:{canonical:url,languages:{en:`${base}/products/${p.slug}`,ar:`${base}/ar/products/${p.slug}`}},
    openGraph:{title,description,url,type:"website",images:[{url:`${base}${p.images?.[0] || "/advanced-fifth-axis-logo.webp"}`,alt:p.images?.[0] ? p.name : "Advanced Fifth Axis logo"}]}
  });
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=products.find(x=>x.slug===slug);
  if(!p)notFound();
  const base="https://advanced-fifthaxis.com";
  const url=`${base}/products/${p.slug}`;
  const graph={
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"Product",name:p.name,alternateName:p.nameAr,description:p.description,image:p.images?.map(src=>base+src),brand:{"@type":"Brand",name:"Advanced Fifth Axis"},category:p.category,url},
      {"@type":"BreadcrumbList",itemListElement:[
        {"@type":"ListItem",position:1,name:"Home",item:`${base}`},
        {"@type":"ListItem",position:2,name:"Products",item:`${base}/products`},
        {"@type":"ListItem",position:3,name:p.name,item:url}
      ]}
    ]
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph)}}/><ProductView lang="en" product={p}/></>;
}