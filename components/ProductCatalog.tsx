"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/site";

type Lang = "en" | "ar";

const normalizeSearch = (value: string) => value.toLocaleLowerCase().normalize("NFKD")
  .replace(/[\u064b-\u065f\u0670\u0640]/g, "")
  .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
  .replace(/[^\p{L}\p{N}]+/gu, " ").trim();

const searchTerms: Record<string, string> = {
  "roller-bits": "roller bit single roller bit رولر بت راس حفر دوار",
  "rock-augers": "auger اوجر بريمه حفر صخور",
  "drilling-buckets": "rock bucket بكيت باكيت حفر صخور",
  "cleaning-buckets": "cleaning bucket بكيت تنظيف قاع الحفر",
  "wire-tremie-pipe": "wire tremie pipe hopper lift suspension jig ماسوره مواسير تريمي قمع صب",
  "core-barrels": "core barrel كور بارل",
  "casing": "casing pipe casing shoe مواسير تغليف ماسوره",
  "cfa": "continuous flight auger CFA اوجر مستمر",
  "kelly-boxes": "kelly box كيلي بوكس وصله",
  "kelly-box-pins": "kelly box pins locking pins بنوز كيلي بوكس بن تثبيت",
  "pile-testing-reaction-beam": "load test beam reaction beam كمرة اختبار تحميل",
};

const categoryLabel = (lang: Lang, category: string) => {
  if (category === "All") return lang === "ar" ? "الكل" : "All";
  if (lang === "en") return category;
  const labels: Record<string,string> = {
    "Foundation Tools": "أدوات حفر الأساسات",
    "Cutting Tools": "أدوات القطع",
    "Wear Parts": "قطع التآكل",
    "Casing": "مواسير التغليف",
    "Drive Systems": "أنظمة نقل الحركة",
    "Fabricated Components": "مكونات مصنعة"
  };
  return labels[category] || category;
};

export function ProductCatalog({ lang }: { lang: Lang }) {
  const [query,setQuery]=useState("");
  const [category,setCategory]=useState("All");
  const categories=useMemo(()=>["All",...Array.from(new Set(products.map(p=>p.category)))],[]);
  const normalized=normalizeSearch(query);
  const visible=products.filter(p=>{
    const text=normalizeSearch([p.name,p.nameAr,p.category,p.description,p.descriptionAr,...p.variants,searchTerms[p.slug] || ""].join(" "));
    return (category==="All"||p.category===category)&&(!normalized||text.includes(normalized));
  });
  const base=lang==="ar"?"/ar":"";
  return <div className="catalogInteractive">
    <div className="catalogTools">
      <label className="catalogSearch">
        <span>{lang==="ar"?"ابحث في المنتجات":"Search products"}</span>
        <input value={query} onChange={e=>setQuery(e.target.value)} type="search" placeholder={lang==="ar"?"اسم المنتج أو الموديل...":"Product name or model..."} />
      </label>
      <div className="categoryFilters" aria-label={lang==="ar"?"تصفية حسب الفئة":"Filter by category"}>
        {categories.map(item=><button type="button" key={item} className={category===item?"active":""} onClick={()=>setCategory(item)}>{categoryLabel(lang,item)}</button>)}
      </div>
      <div className="catalogResultCount">{visible.length} {lang==="ar"?"نتيجة":"results"}</div>
    </div>
    {visible.length>0?<div className="productGrid">{visible.map((p,i)=><a className="productTile" href={`${base}/products/${p.slug}`} key={p.slug}>{p.images?.length?<div className="tileImage"><img loading="lazy" decoding="async" width="720" height="520" src={p.images[0]} alt={lang==="ar"?p.nameAr:p.name}/><span className="tileIndex">{String(i+1).padStart(2,"0")}</span></div>:<span className="tileIndex tileIndexText">{String(i+1).padStart(2,"0")}</span>}<div className="tileText"><span>{categoryLabel(lang,p.category)}</span><h2>{lang==="ar"?p.nameAr:p.name}</h2><p>{lang==="ar"?p.descriptionAr:p.description}</p><b>{lang==="ar"?"عرض المنتج":"View product"} <span aria-hidden="true">↗</span></b></div></a>)}</div>:<div className="emptyCatalog"><h2>{lang==="ar"?"لا توجد نتائج مطابقة":"No matching products"}</h2><p>{lang==="ar"?"جرّب كلمة بحث أخرى أو اختر فئة مختلفة.":"Try another search term or choose a different category."}</p><button type="button" onClick={()=>{setQuery("");setCategory("All")}}>{lang==="ar"?"مسح التصفية":"Clear filters"}</button></div>}
  </div>;
}
