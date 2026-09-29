"use client";

import { useState } from "react";
import { products } from "@/lib/site";
import { rockBucketSizes, cleaningBucketSizes, augerTables, coreBarrelTables } from "@/lib/product-specifications";

const categoryAr: Record<string,string> = {"Foundation Tools":"أدوات حفر الأساسات","Cutting Tools":"أدوات القطع","Wear Parts":"قطع التآكل","Casing":"مواسير التغليف","Drive Systems":"أنظمة نقل الحركة","Fabricated Components":"مكونات مصنعة"};
const referenceSizes: Record<string,number[]> = {
  "drilling-buckets": rockBucketSizes.map(row=>row[0]),
  "cleaning-buckets": cleaningBucketSizes.map(row=>row[0]),
  "rock-augers": [...new Set(augerTables.flatMap(table=>table.rows.map(row=>row[0])))],
  "core-barrels": [...new Set(coreBarrelTables.flatMap(table=>table.rows.map(row=>row[0])))],
};

export function ProductCompare({lang}:{lang:"en"|"ar"}) {
  const [selected,setSelected]=useState(["", "", ""]);
  const chosen=selected.map(slug=>products.find(p=>p.slug===slug)).filter((p):p is typeof products[number]=>!!p);
  const ar=lang==="ar", base=ar?"/ar":"";
  return <section className="productCompare" aria-labelledby="compare-title">
    <div><span className="sectionKicker"><i/>{ar?"قارن الخيارات":"COMPARE OPTIONS"}</span><h2 id="compare-title">{ar?"قارن حتى ثلاثة منتجات":"Compare up to three products"}</h2><p>{ar?"قارن المعلومات المنشورة ثم أرسل تفاصيل مشروعك لتأكيد التوافق.":"Review published product information, then share your project details to confirm suitability."}</p></div>
    <div className="compareSelectors">{selected.map((slug,index)=><label key={index}><span>{ar?`المنتج ${index+1}`:`Product ${index+1}`}</span><select value={slug} onChange={event=>setSelected(selected.map((value,i)=>i===index?event.target.value:value))}><option value="">{ar?"اختر منتجًا":"Choose a product"}</option>{products.filter(p=>p.slug===slug || !selected.includes(p.slug)).map(p=><option key={p.slug} value={p.slug}>{ar?p.nameAr:p.name}</option>)}</select></label>)}</div>
    {chosen.length>=2 && <div className="compareScroll"><table><caption>{ar?"مقارنة المعلومات المنشورة":"Published product information"}</caption><thead><tr><th scope="col">{ar?"المعيار":"Detail"}</th>{chosen.map(p=><th scope="col" key={p.slug}><a href={`${base}/products/${p.slug}`}>{ar?p.nameAr:p.name} ↗</a></th>)}</tr></thead><tbody>
      <tr><th scope="row">{ar?"الفئة":"Category"}</th>{chosen.map(p=><td key={p.slug}>{ar ? categoryAr[p.category] || p.category : p.category}</td>)}</tr>
      <tr><th scope="row">{ar?"الأقطار الواردة في الجداول (مم)":"Reference diameters (mm)"}</th>{chosen.map(p=><td key={p.slug}>{referenceSizes[p.slug]?.join(" · ") || (ar?"تُحدد حسب المشروع":"Confirm for project")}</td>)}</tr>
      <tr><th scope="row">{ar?"الوصف":"Application and details"}</th>{chosen.map(p=><td key={p.slug}>{ar?p.descriptionAr:p.description}</td>)}</tr>
      <tr><th scope="row">{ar?"التكوينات المذكورة":"Listed configurations"}</th>{chosen.map(p=><td key={p.slug}>{p.variants.length?p.variants.join(" · "):(ar?"حسب متطلبات المشروع":"Project-specific")}</td>)}</tr>
      <tr><th scope="row">{ar?"طلب عرض السعر":"Quotation"}</th>{chosen.map(p=><td key={p.slug}><a href={`${base}/products/${p.slug}`}>{ar?"عرض المنتج":"View product"} ↗</a></td>)}</tr>
    </tbody></table></div>}
    {chosen.length>=2&&<p className="compareCaveat">{ar?"هذه مقارنة للمعلومات المدرجة، وليست تأكيدًا للتوافق أو التوفر. يرجى إرسال الموديل والمقاسات والرسم للمراجعة.":"This compares listed information only. Compatibility and availability require confirmation against your rig, dimensions and drawings."}</p>}
  </section>;
}
