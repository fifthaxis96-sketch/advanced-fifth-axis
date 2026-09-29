import { Header, Footer, type Lang } from "@/components/LocalizedSite";
import { guides, type Guide } from "@/lib/guides";
import { products } from "@/lib/site";

const prefix = (lang: Lang) => lang === "ar" ? "/ar" : "";
export function GuideIndex({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  return <div className="site" lang={lang} dir={ar ? "rtl" : "ltr"}><Header lang={lang} section="guides"/><main id="main-content" className="wrap catalogPage guidePage">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={ar ? "/ar" : "/"}>{ar ? "الرئيسية" : "Home"}</a><span>/</span><span>{ar ? "الأدلة الفنية" : "Technical guides"}</span></nav>
    <div className="catalogHero"><span className="sectionKicker"><i/>{ar ? "موارد للمشترين" : "BUYER RESOURCES"}</span><h1>{ar ? "أدلة فنية لطلب أكثر دقة." : "Technical guides for a clearer quotation."}</h1><p>{ar ? "حدد الأداة والأبعاد ومعلومات المشروع قبل التواصل معنا. راجع صفحات المنتجات للتفاصيل المتاحة، ثم أكد التكوين مع الفريق." : "Understand the tool and connection details to send with your inquiry. Review the catalog, then confirm the final configuration with our team."}</p></div>
    <div className="guideGrid">{guides.map(g => <a className="guideCard" href={`${prefix(lang)}/guides/${g.slug}`} key={g.slug}><span className="sectionKicker"><i/>{ar ? "دليل فني" : "TECHNICAL GUIDE"}</span><h2>{g[lang].title}</h2><p>{g[lang].description}</p><b>{ar ? "اقرأ الدليل" : "Read guide"} ↗</b></a>)}</div>
  </main><Footer lang={lang}/></div>;
}
export function GuideView({ lang, guide }: { lang: Lang; guide: Guide }) {
  const ar = lang === "ar", t = guide[lang];
  return <div className="site" lang={lang} dir={ar ? "rtl" : "ltr"}><Header lang={lang} guideSlug={guide.slug}/><main id="main-content" className="wrap catalogPage guidePage">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={ar ? "/ar" : "/"}>{ar ? "الرئيسية" : "Home"}</a><span>/</span><a href={`${prefix(lang)}/guides`}>{ar ? "الأدلة الفنية" : "Guides"}</a><span>/</span><span>{t.title}</span></nav>
    <article className="guideArticle"><header className="catalogHero"><span className="sectionKicker"><i/>{ar ? "دليل فني" : "TECHNICAL GUIDE"}</span><h1>{t.title}</h1><p>{t.intro}</p></header>
      {t.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map(p => <p key={p}>{p}</p>)}{section.bullets && <ul>{section.bullets.map(b => <li key={b}>{b}</li>)}</ul>}</section>)}
      <aside className="guideTakeaway"><h2>{ar ? "الخطوة التالية" : "Next step"}</h2><p>{t.takeaway}</p><a className="primaryButton" href={`${prefix(lang)}/contact#quote-builder`}>{ar ? "اطلب عرض سعر" : "Request a quotation"} ↗</a></aside>
    </article>
    <section className="guideRelated"><h2>{ar ? "المنتجات ذات الصلة" : "Related products"}</h2><div className="guideLinks">{guide.related.map(slug => {const p = products.find(item => item.slug === slug); return p && <a key={slug} href={`${prefix(lang)}/products/${slug}`}>{ar ? p.nameAr : p.name} ↗</a>;})}</div><a href={`${prefix(lang)}/guides`}>{ar ? "جميع الأدلة" : "All guides"} ↗</a></section>
  </main><Footer lang={lang}/></div>;
}
