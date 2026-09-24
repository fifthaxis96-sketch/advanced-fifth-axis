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
    productsIntro: "Explore our core range. Dimensions, cutting systems and connections can be tailored to your machine and ground conditions.",
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
    view: "View product", sizes: "Custom specifications", back: "All products",
    productNote: "Tell us the required diameter, connection, teeth arrangement, rig model and ground conditions for an accurate quotation.",
    productFeatures: ["Project-specific dimensions", "Connection options", "Cutting and wear part options"],
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
    productsIntro: "تصفح منتجاتنا الأساسية. يمكن تجهيز الأقطار وأنظمة القطع والوصلات وفق المعدة وطبيعة التربة.",
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
    view: "عرض المنتج", sizes: "مواصفات حسب الطلب", back: "جميع المنتجات",
    productNote: "أرسل القطر المطلوب ونوع الوصلة وترتيب الأسنان وموديل المعدة وطبيعة التربة للحصول على عرض سعر دقيق.",
    productFeatures: ["أبعاد حسب المشروع", "خيارات متعددة للوصلات", "خيارات لأسنان القطع وقطع التآكل"],
    whatsapp: "واتساب", footer: "معدات حفر الأساسات · جدة، المملكة العربية السعودية"
  }
} as const;

const descriptionsAr: Record<string, string> = {
  "drilling-buckets": "بكيتات حفر للخوازق والتربة الصعبة، مع خيارات للأقطار وأسنان القطع.",
  "rock-augers": "أوجرات حفر للصخور والتربة المختلطة مع وصلات وأسنان قابلة للتخصيص.",
  "core-barrels": "كور بارل قوي لحفر الطبقات الصلبة والأقطار الكبيرة.",
  "drilling-augers": "أوجرات حلزونية لأعمال الخوازيق وحفر الأساسات.",
  "kelly-accessories": "وصلات ومحولات وحوامل أسنان وملحقات للحفر.",
  "custom-fabrication": "معدات حفر ومكونات فولاذية تُصنع وفق رسومات ومتطلبات المشروع."
};
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
        <div className="productGrid">{products.map((p,i)=><a className="productTile" href={productUrl(lang,p.slug)} key={p.slug}><div className="tileImage"><img src={p.image} alt={lang === "ar" ? p.nameAr : p.name}/><span className="tileIndex">{String(i+1).padStart(2,"0")}</span></div><div className="tileText"><span>{lang === "ar" ? p.name : p.nameAr}</span><h3>{lang === "ar" ? p.nameAr : p.name}</h3><p>{lang === "ar" ? descriptionsAr[p.slug] : p.description}</p><b>{t.view} <span aria-hidden="true">↗</span></b></div></a>)}</div>
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
    <div className="productLayout"><div className="productImageNew"><img src={p.image} alt={name}/></div><div className="productDetails"><span className="sectionKicker"><i/> {t.productsLabel}</span><span className="productSecondName">{lang === "ar" ? p.name : p.nameAr}</span><h1>{name}</h1><p>{lang === "ar" ? descriptionsAr[p.slug] : p.description}</p><div className="detailRule"/><h2>{t.sizes}</h2><ul>{t.productFeatures.map(f=><li key={f}>{f}</li>)}</ul><p className="productNote">{t.productNote}</p><a className="primaryButton" href={`${whatsapp}?text=${encodeURIComponent(lang === "ar" ? `مرحبًا، أود عرض سعر لمنتج ${p.nameAr}` : `Hello, I would like a quotation for ${p.name}`)}`}>{t.quote} <span>↗</span></a></div></div>
  </main><Footer lang={lang}/></div>;
}
