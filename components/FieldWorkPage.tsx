import { imageSize } from "@/lib/images";
import { Header, Footer, type Lang } from "@/components/LocalizedSite";

import { fieldWorkGroups as groups } from "@/lib/field-work";

export function FieldWorkPage({lang}:{lang:Lang}) {
  const ar=lang==="ar", prefix=ar?"/ar":"";
  return <div className="site" lang={lang} dir={ar?"rtl":"ltr"}><Header lang={lang} section="field-work"/><main id="main-content" className="wrap catalogPage fieldPage">
    <nav className="breadcrumbs" aria-label={ar ? "مسار التنقل" : "Breadcrumb"}><a href={ar?"/ar":"/"}>{ar?"الرئيسية":"Home"}</a><span>/</span><span>{ar?"مشاريع العملاء":"Client Projects"}</span></nav>
    <div className="catalogHero"><span className="sectionKicker"><i/>{ar?"صور ميدانية":"SITE PHOTOGRAPHS"}</span><h1>{ar?"حفر الأساسات في الميدان.":"Foundation drilling in the field."}</h1><p>{ar?"استكشف الصور الميدانية المتاحة لمعدات الحفر وأدواته ومناولة المواسير والتربة المستخرجة. تقتصر التعليقات على التفاصيل الظاهرة دون نسبة المواقع أو العملاء أو نتائج المشاريع.":"Explore the existing site photographs of rigs, drilling tools, casing handling and excavated ground. Captions describe visible details; locations, customers and project outcomes are not attributed."}</p></div>
    {groups.map((group,i)=><section className="fieldGroup" key={group.en.title} aria-labelledby={`field-group-${i}`}><div className="sectionHeader"><div><span className="sectionKicker"><i/>{String(i+1).padStart(2,"0")}</span><h2 id={`field-group-${i}`}>{group[lang].title}</h2></div><p>{group[lang].text}</p></div><p><a href={`${prefix}/collections/${i === 2 ? "casing" : "foundation-tools"}`}>{ar ? "تصفح فئة المنتجات ذات الصلة" : "Explore the related product collection"}</a></p><div className="fieldGrid">{group.scenes.map(scene=><figure key={scene.file}><a href={`/projects/${scene.file}.webp`} target="_blank" rel="noopener noreferrer" aria-label={ar?`عرض الصورة: ${scene.ar}`:`Open photo: ${scene.en}`}><img loading="lazy" decoding="async" src={`/projects/${scene.file}.webp`} alt={ar?scene.ar:scene.en} {...imageSize(`/projects/${scene.file}.webp`)}/></a></figure>)}</div></section>)}
    <section className="collectionCta"><h2>{ar?"هل تعمل على مشروع مشابه؟":"Working on a similar foundation project?"}</h2><p>{ar?"أرسل موديل المعدة والقطر وطبيعة التربة والرسومات لطلب عرض سعر مناسب.":"Share your rig model, diameter, ground conditions and drawings for a relevant quotation."}</p><a className="primaryButton" href={`${prefix}/contact#quote-builder`}>{ar?"اطلب عرض سعر":"Request a quotation"}</a><a className="fieldGuideLink" href={`${prefix}/guides/foundation-drilling-rfq-checklist`}>{ar?"ما البيانات المطلوبة؟":"What details should I send?"}</a></section>
  </main><Footer lang={lang}/></div>;
}
