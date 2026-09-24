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
  return {
    title, description,
    alternates:{canonical:url,languages:{en:`${base}/products/${p.slug}`,ar:`${base}/ar/products/${p.slug}`}},
    openGraph:{title,description,url,type:"website",images:p.images?.[0]?[{url:`${base}${p.images[0]}`,alt:p.name}]:undefined}
  };
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
      ]},
      {"@type":"FAQPage",mainEntity:[
        {"@type":"Question",name:"Can this be supplied to custom dimensions?",acceptedAnswer:{"@type":"Answer",text:"We review the dimensions, connection, drawing and operating requirements before confirming the fabrication scope."}},
        {"@type":"Question",name:"What information should I send for pricing?",acceptedAnswer:{"@type":"Answer",text:"Send the rig make and model, required size, intended application, quantity, and any available drawings or reference photos."}},
        {"@type":"Question",name:"How is compatibility confirmed?",acceptedAnswer:{"@type":"Answer",text:"Dimensions, connection type, pin-hole or cutting layout are confirmed against the relevant tool and rig before ordering."}}
      ]}
    ]
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph)}}/><ProductView lang="en" product={p}/></>;
}