"use client";

import { productThumbnail } from "@/lib/images";

import { useState } from "react";
import { products, company } from "@/lib/site";

const tasks = [
  {key:"rock", en:"Drill rock or hard formations", ar:"حفر الصخور والطبقات الصلبة", slugs:["rock-augers","drilling-buckets","core-barrels"]},
  {key:"clean", en:"Clean the bottom of a borehole", ar:"تنظيف قاع حفرة الأساسات", slugs:["cleaning-buckets"]},
  {key:"casing", en:"Support or rotate casing", ar:"تغليف الحفرة أو تدوير المواسير", slugs:["casing","casing-twister"]},
  {key:"concrete", en:"Place concrete through a tremie", ar:"صب الخرسانة بواسطة مواسير التريمي", slugs:["wire-tremie-pipe"]},
  {key:"cfa", en:"Continuous flight drilling", ar:"الحفر بالأوجر المستمر", slugs:["cfa"]},
  {key:"wear", en:"Replace a cutting tooth or holder", ar:"استبدال سن أو حامل قطع", slugs:["c31hd-tooth","c30-square-holder","c30-round-holder","bfz70-tooth","bfz70-holder","roller-bits"]},
  {key:"kelly", en:"Connect or repair Kelly equipment", ar:"وصلة كيلي أو إصلاح قضبان كيلي", slugs:["kelly-boxes","kelly-box-pins","kelly-bars"]},
  {key:"custom", en:"Custom fabrication or testing equipment", ar:"تصنيع مخصص أو معدات اختبار", slugs:["pile-testing-reaction-beam","customized-bentonite-water-tank"]},
];

export function ToolFinder({lang}:{lang:"en"|"ar"}) {
  const ar=lang==="ar",base=ar?"/ar":"";
  const [task,setTask]=useState("");
  const [ground,setGround]=useState("");
  const [diameter,setDiameter]=useState("");
  const [rig,setRig]=useState("");
  const [selected,setSelected]=useState<string[]>([]);
  const current=tasks.find(t=>t.key===task);
  const matches=products.filter(p=>current?.slugs.includes(p.slug));
  const message=ar
    ? ["مرحبًا، أحتاج مراجعة فنية لاختيار أداة حفر الأساسات.",current&&`العمل: ${current.ar}`,ground&&`التربة/الطبقة: ${ground}`,diameter&&`القطر المطلوب: ${diameter}`,rig&&`المعدة: ${rig}`,selected.length&&`المنتجات التي أريد الاستفسار عنها: ${selected.map(slug=>products.find(p=>p.slug===slug)?.nameAr).join("، ")}`]
    : ["Hello, I need help selecting a foundation drilling tool.",current&&`Application: ${current.en}`,ground&&`Ground conditions: ${ground}`,diameter&&`Required diameter: ${diameter}`,rig&&`Rig: ${rig}`,selected.length&&`Products to discuss: ${selected.map(slug=>products.find(p=>p.slug===slug)?.name).join(", ")}`];
  const href=`https://wa.me/${company.phone.replace("+","")}?text=${encodeURIComponent(message.filter(Boolean).join("\n"))}`;
  return <div className="toolFinder">
    <div className="finderInputs"><label><span>{ar?"ماذا تريد أن تنجز؟":"What do you need to do?"}</span><select value={task} onChange={e=>{setTask(e.target.value);setSelected([]);}}><option value="">{ar?"اختر الاستخدام":"Select an application"}</option>{tasks.map(t=><option key={t.key} value={t.key}>{ar?t.ar:t.en}</option>)}</select></label>
      <label><span>{ar?"ظروف التربة (إن عُرفت)":"Ground conditions (if known)"}</span><input value={ground} onChange={e=>setGround(e.target.value)} placeholder={ar?"مثال: صخر متماسك، رمل":"For example: hard rock, sand"}/></label>
      <label><span>{ar?"القطر المطلوب":"Required diameter"}</span><input value={diameter} onChange={e=>setDiameter(e.target.value)} placeholder={ar?"مثال: 1200 مم":"For example: 1200 mm"}/></label>
      <label><span>{ar?"نوع وموديل المعدة":"Rig make and model"}</span><input value={rig} onChange={e=>setRig(e.target.value)} placeholder="Bauer / Soilmec / ..."/></label>
    </div>
    {current&&<div className="finderResults"><h2>{ar?"فئات قد تكون ذات صلة":"Product families to discuss"}</h2><p>{ar?"تعتمد هذه القائمة على الاستخدام المحدد فقط. سيؤكد فريقنا الأداة والوصلة المناسبة بعد مراجعة ظروف التربة والمعدة والرسم.":"These options follow the selected application only. Our team must review ground conditions, rig interface and drawings before confirming a suitable tool."}</p><div className="finderChoices">{matches.map(p=><label key={p.slug}><input type="checkbox" checked={selected.includes(p.slug)} onChange={e=>setSelected(e.target.checked?[...selected,p.slug]:selected.filter(slug=>slug!==p.slug))}/>{p.images?.[0]&&<img src={productThumbnail(p.images[0],"small")} alt="" width="64" height="64" loading="lazy"/>}<span><b>{ar?p.nameAr:p.name}</b><a href={`${base}/products/${p.slug}`}>{ar?"عرض التفاصيل":"View details"} ↗</a></span></label>)}</div><a className="primaryButton" href={href} target="_blank" rel="noopener noreferrer">{ar?"أرسل التفاصيل للمراجعة الفنية":"Send details for technical review"} ↗</a></div>}
  </div>;
}
