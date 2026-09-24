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
  const url=`${base}/ar/products/${p.slug}`;
  const title=p.nameAr+" | معدات حفر الأساسات السعودية";
  const description=p.descriptionAr;
  return {
    title, description,
    alternates:{canonical:url,languages:{en:`${base}/products/${p.slug}`,ar:`${base}/ar/products/${p.slug}`}},
    openGraph:{title,description,url,type:"website",images:p.images?.[0]?[{url:`${base}${p.images[0]}`,alt:p.nameAr}]:undefined}
  };
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=products.find(x=>x.slug===slug);
  if(!p)notFound();
  const base="https://advanced-fifthaxis.com";
  const url=`${base}/ar/products/${p.slug}`;
  const graph={
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"Product",name:p.nameAr,alternateName:p.name,description:p.descriptionAr,image:p.images?.map(src=>base+src),brand:{"@type":"Brand",name:"Advanced Fifth Axis"},category:p.category,url},
      {"@type":"BreadcrumbList",itemListElement:[
        {"@type":"ListItem",position:1,name:"الرئيسية",item:`${base}/ar`},
        {"@type":"ListItem",position:2,name:"المنتجات",item:`${base}/ar/products`},
        {"@type":"ListItem",position:3,name:p.nameAr,item:url}
      ]},
      {"@type":"FAQPage",mainEntity:[
        {"@type":"Question",name:"هل يمكن التصنيع حسب المقاس؟",acceptedAnswer:{"@type":"Answer",text:"نراجع المقاس والوصلة والرسم ومتطلبات الاستخدام قبل تأكيد إمكانية التصنيع."}},
        {"@type":"Question",name:"ما المعلومات المطلوبة للتسعير؟",acceptedAnswer:{"@type":"Answer",text:"أرسل نوع وموديل المعدة والمقاس المطلوب وطبيعة الاستخدام والكمية وأي رسومات أو صور مرجعية متاحة."}},
        {"@type":"Question",name:"كيف يتم تأكيد التوافق؟",acceptedAnswer:{"@type":"Answer",text:"يتم تأكيد الأبعاد ونوع الوصلة وترتيب فتحات التثبيت أو القطع حسب المنتج والمعدة قبل الطلب."}}
      ]}
    ]
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph)}}/><ProductView lang="ar" product={p}/></>;
}