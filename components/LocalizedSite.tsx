import { productPhotos } from "@/lib/productPhotos";
import { products, company, type Product } from "@/lib/site";
import type { ReactNode } from "react";

export type Lang = "en" | "ar";
const copy = {
  en: {
    nav: ["Products", "Capabilities", "About", "Contact"],
    eyebrow: "FOUNDATION DRILLING · JEDDAH, SAUDI ARABIA",
    headline: "Tools built for the ground ahead.",
    intro: "Foundation drilling tools, casing solutions and fabricated components for piling contractors across Saudi Arabia.",
    explore: "Explore products", quote: "Request a quotation",
    tags: ["Manufactured for your project", "Saudi-based supply", "Technical support"],
    productsLabel: "OUR PRODUCT RANGE", productsTitle: "Equipment for every foundation.",
    productsIntro: "Explore the product families and model names in the supplied lineup. Ask us to confirm specifications before ordering.",
    capabilitiesLabel: "WHAT WE DO", capabilitiesTitle: "Built around your requirements.",
    capabilities: [
      ["01", "Drilling tools", "Buckets, augers and core barrels for piling and foundation work."],
      ["02", "Custom fabrication", "Tool dimensions, connections and cutting layouts matched to your project."],
      ["03", "Casing & accessories", "Casing solutions, wear parts and replacement drilling components."]
    ],
    aboutLabel: "ADVANCED FIFTH AXIS", aboutTitle: "A practical partner for foundation work.",
    about: "We manufacture and supply drilling equipment and components for contractors in Saudi Arabia. Share your rig model, diameter, ground condition and quantity so we can prepare the right quotation.",
    contactLabel: "LET'S WORK TOGETHER", contactTitle: "Tell us what you need to drill.",
    contactIntro: "Send your drawings or specifications to our team in Jeddah.",
    call: "Call us", address: "Address", vat: "VAT number", registration: "Commercial registration",
    view: "View product", sizes: "Models in the supplied lineup", back: "All products",
    productNote: "Ask us to confirm availability, dimensions, connection and compatibility before ordering.",
    photoNote: "Owner-supplied category photo; individual models may look different.", referenceNote: "Manufacturer reference photo; confirm the exact configuration before ordering.", pending: "Verified photo pending", photoSource: "Photo: Meclead",
    whatsapp: "WhatsApp", footer: "Foundation drilling tools · Jeddah, Saudi Arabia"
  },
  ar: {
    nav: ["المنتجات", "قدراتنا", "من نحن", "تواصل معنا"],
    eyebrow: "معدات حفر الأساسات · جدة، المملكة العربية السعودية",
    headline: "معدات حفر مصممة لمتطلبات مشروعك.",
    intro: "أدوات حفر الأساسات وحلول مواسير التغليف والقطع المصنعة لمقاولي الخوازيق في أنحاء المملكة.",
    explore: "تصفح المنتجات", quote: "اطلب عرض سعر",
    tags: ["تصنيع حسب المشروع", "توريد داخل المملكة", "دعم فني"],
    productsLabel: "مجموعة المنتجات", productsTitle: "حلول متكاملة لأعمال الأساسات.",
    productsIntro: "تصفح فئات المنتجات والموديلات الواردة في القائمة المقدمة. يرجى تأكيد المواصفات قبل الطلب.",
    capabilitiesLabel: "ما نقدمه", capabilitiesTitle: "نصنع وفق متطلباتك.",
    capabilities: [
      ["01", "أدوات الحفر", "بكيتات وأوجرات وكور بارل لأعمال الخوازيق والأساسات."],
      ["02", "تصنيع مخصص", "أبعاد ووصلات وترتيب أسنان القطع وفق احتياجات مشروعك."],
      ["03", "مواسير وملحقات", "حلول مواسير التغليف وقطع التآكل وملحقات الحفر البديلة."]
    ],
    aboutLabel: "أدفانسد فيفث أكسس", aboutTitle: "شريك عملي لأعمال الأساسات.",
    about: "نصنع ونورد معدات الحفر ومكوناتها للمقاولين في المملكة العربية السعودية. أرسل نوع المعدة والقطر وطبيعة التربة والكمية لتجهيز عرض السعر المناسب.",
    contactLabel: "لنعمل معًا", contactTitle: "أخبرنا بما يحتاجه مشروعك.",
    contactIntro: "أرسل الرسومات أو المواصفات إلى فريقنا في جدة.",
    call: "اتصل بنا", address: "العنوان", vat: "الرقم الضريبي", registration: "السجل التجاري",
    view: "عرض المنتج", sizes: "الموديلات الواردة في القائمة", back: "جميع المنتجات",
    productNote: "يرجى تأكيد التوفر والأبعاد والوصلات والتوافق قبل الطلب.",
    photoNote: "صورة مقدمة للفئة؛ قد يختلف شكل الموديلات الفردية.", referenceNote: "صورة مرجعية من الشركة المصنعة؛ يرجى تأكيد التكوين المطلوب قبل الطلب.", pending: "بانتظار صورة موثقة", photoSource: "الصورة: Meclead",
    whatsapp: "واتساب", footer: "معدات حفر الأساسات · جدة، المملكة العربية السعودية"
  }
} as const;

const whatsapp = "https://wa.me/" + company.phone.replace("+", "");
const home = (lang: Lang) => lang === "ar" ? "/ar" : "/";
const productUrl = (lang: Lang, slug: string) => `${home(lang) === "/" ? "" : "/ar"}/products/${slug}`;
function Switcher({ lang, product }: { lang: Lang; product?: Product }) {
  return <nav className="language" aria-label="Language selector">
    <a href={product ? productUrl("en", product.slug) : "/"} lang="en" hrefLang="en" aria-current={lang === "en" ? "page" : undefined}>EN</a>
    <span aria-hidden="true">/</span>
    <a href={product ? productUrl("ar", product.slug) : "/ar"} lang="ar" hrefLang="ar" aria-current={lang === "ar" ? "page" : undefined}>العربية</a>
  </nav>;
}
function Header({ lang, product }: { lang: Lang; product?: Product }) {
  const t = copy[lang];
  return <header className="siteHeader"><div className="wrap headerInner">
    <a className="siteLogo" href={home(lang)} aria-label="Advanced Fifth Axis home"><img src="/advanced-fifth-axis-logo.webp" alt="Advanced Fifth Axis Co. logo" width="112" height="92"/></a>
    {!product && <nav className="siteNav" aria-label="Main navigation">{["products","capabilities","about","contact"].map((id,i) => <a key={id} href={`#${id}`}>{t.nav[i]}</a>)}</nav>}
    <div className="headerActions"><Switcher lang={lang} product={product}/><a className="headerCta" href={`${home(lang)}#contact`}>{t.quote}</a></div>
  </div></header>;
}
function Footer({lang}:{lang:Lang}) {
  return <footer className="siteFooter"><div className="wrap footerInner"><img src="/advanced-fifth-axis-logo.webp" alt="Advanced Fifth Axis Co."/><span>{copy[lang].footer}</span><span>© 2026</span></div></footer>;
}
export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <div className="site" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
    <Header lang={lang}/>
    <main>
      <section className="heroNew"><div className="wrap heroNewInner">
        <div className="heroCopy"><span className="sectionKicker"><i/> {t.eyebrow}</span><h1>{t.headline}</h1><p>{t.intro}</p><div className="heroButtons"><a className="primaryButton" href="#products">{t.explore} <span aria-hidden="true">↗</span></a><a className="outlineButton" href="#contact">{t.quote}</a></div></div>
        <div className="heroArt" role="img" aria-label={lang === "ar" ? "أدوات حفر الأساسات" : "Foundation drilling equipment"}><div className="artGrid"/><img className="heroBrandLogo" src="/advanced-fifth-axis-logo.webp" alt=""/><span className="artNumber">ADVANCED FIFTH AXIS CO.</span><div className="artLabel"><b>ENGINEERED FOR FOUNDATIONS</b><small>JEDDAH · SAUDI ARABIA</small></div></div>
      </div></section>
      <div className="trustStrip"><div className="wrap">{t.tags.map((tag,i)=><span key={tag}><b>0{i+1}</b>{tag}</span>)}</div></div>
      <section id="products" className="siteSection wrap"><div className="sectionHeader"><div><span className="sectionKicker"><i/> {t.productsLabel}</span><h2>{t.productsTitle}</h2></div><p>{t.productsIntro}</p></div>
        <div className="productGrid">{products.map((p,i)=><a className="productTile" href={productUrl(lang,p.slug)} key={p.slug}><div className="tileImage">{p.image ? <img src={p.image} alt={lang === "ar" ? p.nameAr : p.name}/> : <span className="photoPending">{t.pending}</span>}<span className="tileIndex">{String(i+1).padStart(2,"0")}</span></div><div className="tileText"><span>{lang === "ar" ? p.name : p.nameAr}</span><h3>{lang === "ar" ? p.nameAr : p.name}</h3><p>{lang === "ar" ? p.descriptionAr : p.description}</p><b>{t.view} <span aria-hidden="true">↗</span></b></div></a>)}</div>
      </section>
      <section id="capabilities" className="capSection"><div className="wrap"><span className="sectionKicker"><i/> {t.capabilitiesLabel}</span><h2>{t.capabilitiesTitle}</h2><div className="capCards">{t.capabilities.map(([n,title,detail])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>
      <section id="about" className="aboutSection wrap"><div><span className="sectionKicker"><i/> {t.aboutLabel}</span><h2>{t.aboutTitle}</h2></div><p>{t.about}</p></section>
      <section id="contact" className="contactSection"><div className="wrap contactNew"><div><span className="sectionKicker"><i/> {t.contactLabel}</span><h2>{t.contactTitle}</h2><p>{t.contactIntro}</p><div className="heroButtons"><a className="primaryButton" href={`${whatsapp}?text=${encodeURIComponent(lang === "ar" ? "مرحبًا، أود طلب عرض سعر." : "Hello, I would like a quotation.")}`}>{t.whatsapp} {company.phoneDisplay} <span>↗</span></a><a className="outlineButton" href={`tel:${company.phone}`}>{t.call}</a></div></div><dl><div><dt>{t.address}</dt><dd>{company.address}</dd></div><div><dt>{t.vat}</dt><dd>{company.vat}</dd></div><div><dt>{t.registration}</dt><dd>{company.cr}</dd></div></dl></div></section>
    </main><Footer lang={lang}/>
  </div>;
}
export function ProductView({ lang, product: p }: { lang: Lang; product: Product }) {
  const t = copy[lang], name = lang === "ar" ? p.nameAr : p.name;
  return <div className="site" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}><Header lang={lang} product={p}/><main className="wrap productPage">
    <a className="backLink" href={`${home(lang)}#products`}>← {t.back}</a>
    <div className="productLayout"><div className="productImageNew">{p.image ? <img src={p.image} alt={name}/> : <span className="photoPending">{t.pending}</span>}<small>{p.image ? <>{t.referenceNote} <a href={Object.values(productPhotos[p.slug] ?? {})[0]?.source} target="_blank" rel="noopener noreferrer">{t.photoSource} ↗</a></> : t.pending}</small></div><div className="productDetails"><span className="sectionKicker"><i/> {t.productsLabel}</span><span className="productSecondName">{lang === "ar" ? p.name : p.nameAr}</span><h1>{name}</h1><p>{lang === "ar" ? p.descriptionAr : p.description}</p><div className="detailRule"/><h2>{t.sizes}</h2><ul className="variantList">{p.variants.map(variant=><li key={variant}>{productPhotos[p.slug]?.[variant] ? <div className="variantPhoto"><img src={productPhotos[p.slug][variant].image} alt={variant}/><a href={productPhotos[p.slug][variant].source} target="_blank" rel="noopener noreferrer">{t.photoSource} ↗</a></div> : <span className="variantPending">{t.pending}</span>}<a href={`${whatsapp}?text=${encodeURIComponent(lang === "ar" ? `مرحبًا، أود الاستفسار عن ${p.nameAr} - ${variant}. يرجى تأكيد المواصفات والتوفر.` : `Hello, I would like to inquire about ${p.name} - ${variant}. Please confirm specifications and availability.`)}`}>{variant} <span aria-hidden="true">↗</span></a></li>)}</ul><p className="productNote">{t.productNote}</p><a className="primaryButton" href={`${whatsapp}?text=${encodeURIComponent(lang === "ar" ? `مرحبًا، أود عرض سعر لمنتج ${p.nameAr}` : `Hello, I would like a quotation for ${p.name}`)}`}>{t.quote} <span>↗</span></a></div></div>
  </main><Footer lang={lang}/></div>;
}