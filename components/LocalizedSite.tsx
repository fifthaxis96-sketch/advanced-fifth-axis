import { products, collections, productsForCollection, collectionForProduct, relatedProducts, company, type Product, type Collection } from "@/lib/site";
import { ProductCatalog } from "@/components/ProductCatalog";
import { QuoteBuilder } from "@/components/QuoteBuilder";

export type Lang = "en" | "ar";
const copy = {
  en: {
    nav: ["Products", "Collections", "Capabilities", "Contact"],
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
    view: "View product", viewCollection: "View collection", collectionsLabel: "SHOP BY APPLICATION", collectionsTitle: "Browse focused product collections.", collectionsIntro: "Find the right product family faster, then send us your rig, dimensions and project requirements for confirmation.", productsInCollection: "Products in this collection", sizes: "Models in the supplied lineup", back: "All products",
    productNote: "Ask us to confirm availability, dimensions, connection and compatibility before ordering.",
    photoNote: "Owner-supplied category photo; individual models may look different.", referenceNote: "Manufacturer reference photo; confirm the exact configuration before ordering.", pending: "Verified photo pending", photoSource: "Photo: Meclead",
    whatsapp: "WhatsApp", footer: "Foundation drilling tools · Jeddah, Saudi Arabia"
  },
  ar: {
    nav: ["المنتجات", "الفئات", "قدراتنا", "تواصل معنا"],
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
    view: "عرض المنتج", viewCollection: "عرض الفئة", collectionsLabel: "تصفح حسب الاستخدام", collectionsTitle: "تصفح فئات المنتجات المتخصصة.", collectionsIntro: "اعثر على فئة المنتج المناسبة بسرعة، ثم أرسل نوع المعدة والأبعاد ومتطلبات المشروع للتأكيد.", productsInCollection: "منتجات هذه الفئة", sizes: "الموديلات الواردة في القائمة", back: "جميع المنتجات",
    productNote: "يرجى تأكيد التوفر والأبعاد والوصلات والتوافق قبل الطلب.",
    photoNote: "صورة مقدمة للفئة؛ قد يختلف شكل الموديلات الفردية.", referenceNote: "صورة مرجعية من الشركة المصنعة؛ يرجى تأكيد التكوين المطلوب قبل الطلب.", pending: "بانتظار صورة موثقة", photoSource: "الصورة: Meclead",
    whatsapp: "واتساب", footer: "معدات حفر الأساسات · جدة، المملكة العربية السعودية"
  }
} as const;

const whatsapp = "https://wa.me/" + company.phone.replace("+", "");
const home = (lang: Lang) => lang === "ar" ? "/ar" : "/";
const productUrl = (lang: Lang, slug: string) => `${home(lang) === "/" ? "" : "/ar"}/products/${slug}`;
const categoryLabel = (lang: Lang, category: string) => {
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
function Switcher({ lang, product, collection, section }: { lang: Lang; product?: Product; collection?: Collection; section?: "products" | "collections" | "capabilities" | "about" | "contact" }) {
  const en = product ? productUrl("en", product.slug) : collection ? `/collections/${collection.slug}` : section ? `/${section}` : "/";
  const ar = product ? productUrl("ar", product.slug) : collection ? `/ar/collections/${collection.slug}` : section ? `/ar/${section}` : "/ar";
  return <nav className="language" aria-label="Language selector">
    <a href={en} lang="en" hrefLang="en" aria-current={lang === "en" ? "page" : undefined}>EN</a>
    <span aria-hidden="true">/</span>
    <a href={ar} lang="ar" hrefLang="ar" aria-current={lang === "ar" ? "page" : undefined}>العربية</a>
  </nav>;
}
function Header({ lang, product, collection, section }: { lang: Lang; product?: Product; collection?: Collection; section?: "products" | "collections" | "capabilities" | "about" | "contact" }) {
  const t = copy[lang];
  return <header className="siteHeader"><div className="wrap headerInner">
    <a className="siteLogo" href={home(lang)} aria-label="Advanced Fifth Axis home"><img src="/advanced-fifth-axis-logo.webp" alt="Advanced Fifth Axis Co. logo" width="112" height="92"/></a>
    <nav className="siteNav" aria-label="Main navigation">
      <a href={`${lang === "ar" ? "/ar" : ""}/products`}>{t.nav[0]}</a>
      <a href={`${lang === "ar" ? "/ar" : ""}/collections`}>{t.nav[1]}</a>
      <a href={`${lang === "ar" ? "/ar" : ""}/capabilities`}>{t.nav[2]}</a>
      <a href={`${lang === "ar" ? "/ar" : ""}/contact`}>{t.nav[3]}</a>
    </nav>
    <div className="headerActions"><Switcher lang={lang} product={product} collection={collection} section={section}/><a className="headerCta" href={`${lang === "ar" ? "/ar" : ""}/contact`}>{t.quote}</a></div>
  </div></header>;
}
function Footer({lang}:{lang:Lang}) {
  return <footer className="siteFooter"><div className="wrap footerInner"><img src="/advanced-fifth-axis-logo.webp" alt="Advanced Fifth Axis Co."/><span>{copy[lang].footer}</span><nav className="footerNav"><a href={`${lang==="ar"?"/ar":""}/products`}>{copy[lang].nav[0]}</a><a href={`${lang==="ar"?"/ar":""}/collections`}>{copy[lang].nav[1]}</a><a href={`${lang==="ar"?"/ar":""}/about`}>{lang==="ar"?"من نحن":"About"}</a><a href={`${lang==="ar"?"/ar":""}/contact`}>{copy[lang].nav[3]}</a></nav><span>© 2026</span></div></footer>;
}
export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const featuredSlugs = ["rock-augers","drilling-buckets","core-barrels","casing","kelly-boxes","pile-testing-reaction-beam"];
  const featuredProducts = featuredSlugs.map(slug => products.find(p => p.slug === slug)).filter((p): p is Product => Boolean(p));
  return <div className="site" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
    <Header lang={lang}/>
    <main>
      <section className="heroNew"><div className="wrap heroNewInner">
        <div className="heroCopy"><span className="sectionKicker"><i/> {t.eyebrow}</span><h1>{t.headline}</h1><p>{t.intro}</p><div className="heroButtons"><a className="primaryButton" href="#products">{t.explore} <span aria-hidden="true">↗</span></a><a className="outlineButton" href="#contact">{t.quote}</a></div></div>
        <div className="heroArt" aria-label={lang === "ar" ? "أدوات ومكونات حفر الأساسات" : "Foundation drilling tools and components"}><div className="artGrid"/><div className="heroProductStage"><img className="heroProductMain" src="/products/owner-blue-toothed-casing.webp" alt={lang === "ar" ? "مقطع تغليف بأجزاء قطع" : "Foundation drilling casing component"} width="720" height="720"/><img className="heroProductSide heroProductSideOne" src="/products/pile-testing-reaction-beam-blue.webp" alt="" width="420" height="320"/><img className="heroProductSide heroProductSideTwo" src="/products/owner-tapered-steel-fabrication.webp" alt="" width="420" height="320"/></div><img className="heroCornerLogo" src="/advanced-fifth-axis-logo.webp" alt="" width="100" height="76"/><span className="artNumber">ADVANCED FIFTH AXIS CO.</span><div className="artLabel"><b>ENGINEERED FOR FOUNDATIONS</b><small>JEDDAH · SAUDI ARABIA</small></div></div>
      </div></section>
      <div className="trustStrip"><div className="wrap">{t.tags.map((tag,i)=><span key={tag}><b>0{i+1}</b>{tag}</span>)}</div></div>
      <section id="products" className="siteSection wrap"><div className="sectionHeader"><div><span className="sectionKicker"><i/> {t.productsLabel}</span><h2>{t.productsTitle}</h2></div><p>{t.productsIntro}</p></div>
        <div className="productGrid">{featuredProducts.map((p,i)=><a className="productTile" href={productUrl(lang,p.slug)} key={p.slug}>{p.images?.length ? <div className="tileImage"><img loading="lazy" decoding="async" width="720" height="520" src={p.images[0]} alt={lang === "ar" ? p.nameAr : p.name}/><span className="tileIndex">{String(i+1).padStart(2,"0")}</span></div> : <span className="tileIndex tileIndexText">{String(i+1).padStart(2,"0")}</span>}<div className="tileText"><span>{lang === "ar" ? p.name : p.nameAr}</span><h3>{lang === "ar" ? p.nameAr : p.name}</h3><p>{lang === "ar" ? p.descriptionAr : p.description}</p><b>{t.view} <span aria-hidden="true">↗</span></b></div></a>)}</div><div className="sectionFooterCta"><a className="outlineButton" href={`${lang === "ar" ? "/ar" : ""}/products`}>{lang === "ar" ? "عرض جميع المنتجات" : "View full product catalog"} <span aria-hidden="true">↗</span></a></div>
      </section>
      <section id="collections" className="collectionSection"><div className="wrap"><div className="sectionHeader"><div><span className="sectionKicker"><i/> {t.collectionsLabel}</span><h2>{t.collectionsTitle}</h2></div><p>{t.collectionsIntro}</p></div><div className="collectionGrid">{collections.map((collection,i)=>{const items=productsForCollection(collection);const cover=items.find(p=>p.images?.length)?.images?.[0];return <a className="collectionCard" href={`${lang === "ar" ? "/ar" : ""}/collections/${collection.slug}`} key={collection.slug}>{cover ? <div className="collectionCover"><img loading="lazy" decoding="async" width="540" height="420" src={cover} alt=""/><span>{String(i+1).padStart(2,"0")}</span></div> : <div className="collectionCover collectionCoverText"><span>{String(i+1).padStart(2,"0")}</span></div>}<div><small>{items.length} {lang === "ar" ? "منتجات" : "products"}</small><h3>{lang === "ar" ? collection.nameAr : collection.name}</h3><p>{lang === "ar" ? collection.descriptionAr : collection.description}</p><b>{t.viewCollection} ↗</b></div></a>})}</div></div></section>
      <section id="capabilities" className="capSection"><div className="wrap"><span className="sectionKicker"><i/> {t.capabilitiesLabel}</span><h2>{t.capabilitiesTitle}</h2><div className="capCards">{t.capabilities.map(([n,title,detail])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>
      <section id="about" className="aboutSection wrap"><div><span className="sectionKicker"><i/> {t.aboutLabel}</span><h2>{t.aboutTitle}</h2></div><p>{t.about}</p></section>
      <section id="contact" className="contactSection"><div className="wrap contactNew"><div><span className="sectionKicker"><i/> {t.contactLabel}</span><h2>{t.contactTitle}</h2><p>{t.contactIntro}</p><div className="heroButtons"><a className="primaryButton" href={`${whatsapp}?text=${encodeURIComponent(lang === "ar" ? "مرحبًا، أود طلب عرض سعر." : "Hello, I would like a quotation.")}`}>{t.whatsapp} {company.phoneDisplay} <span>↗</span></a><a className="outlineButton" href={`tel:${company.phone}`}>{t.call}</a></div></div><dl><div><dt>{t.address}</dt><dd>{company.address}</dd></div><div><dt>{t.vat}</dt><dd>{company.vat}</dd></div><div><dt>{t.registration}</dt><dd>{company.cr}</dd></div></dl></div></section>
    </main><Footer lang={lang}/>
  </div>;
}
export function ProductIndex({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <div className="site" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}><Header lang={lang} section="products"/><main className="wrap catalogPage">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={home(lang)}>{lang === "ar" ? "الرئيسية" : "Home"}</a><span>/</span><span>{t.nav[0]}</span></nav>
    <div className="catalogHero"><span className="sectionKicker"><i/> {t.productsLabel}</span><h1>{t.productsTitle}</h1><p>{t.productsIntro}</p><div className="catalogMeta">{products.length} {lang === "ar" ? "منتجًا وفئة منتج" : "products and product families"}</div></div>
    <ProductCatalog lang={lang}/>
  </main><Footer lang={lang}/></div>;
}

export function ProductView({ lang, product: p }: { lang: Lang; product: Product }) {
  const t = copy[lang], name = lang === "ar" ? p.nameAr : p.name;
  const collection = collectionForProduct(p);
  const related = relatedProducts(p, 3);
  return <div className="site" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}><Header lang={lang} product={p}/><main className="wrap productPage">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={home(lang)}>{lang === "ar" ? "الرئيسية" : "Home"}</a><span>/</span><a href={`${lang === "ar" ? "/ar" : ""}/products`}>{t.nav[0]}</a><span>/</span><span>{name}</span></nav>
    <div className="productLayout">{p.images?.length ? <div className="ownerGallery">{p.images.map((src,i)=><img loading={i===0?"eager":"lazy"} decoding="async" width="900" height="900" src={src} alt={`${name} — ${i+1}`} key={src}/>)}{p.visualNote && <p className="visualNote">{lang === "ar" ? p.visualNoteAr : p.visualNote}</p>}</div> : <div className="productPlaceholder"><span>{lang === "ar" ? "صورة المنتج قيد الإضافة" : "Product image being added"}</span></div>}<div className="productDetails"><span className="sectionKicker"><i/> {categoryLabel(lang,p.category)}</span><span className="productSecondName">{lang === "ar" ? p.name : p.nameAr}</span><h1>{name}</h1><p>{lang === "ar" ? p.descriptionAr : p.description}</p>{collection && <a className="collectionPill" href={`${lang === "ar" ? "/ar" : ""}/collections/${collection.slug}`}>{lang === "ar" ? collection.nameAr : collection.name} ↗</a>}<div className="detailRule"/>{p.variants.length > 0 && <><h2>{t.sizes}</h2><ul className="variantList">{p.variants.map(variant=><li key={variant}><a href={`${whatsapp}?text=${encodeURIComponent(lang === "ar" ? `مرحبًا، أود الاستفسار عن ${p.nameAr} - ${variant}. يرجى تأكيد المواصفات والتوفر.` : `Hello, I would like to inquire about ${p.name} - ${variant}. Please confirm specifications and availability.`)}`}>{variant} <span aria-hidden="true">↗</span></a></li>)}</ul></>}<div className="orderChecklist"><h2>{lang === "ar" ? "معلومات تساعدنا على التسعير" : "Information for an accurate quotation"}</h2><ul><li>{lang === "ar" ? "نوع وموديل المعدة" : "Rig make and model"}</li><li>{lang === "ar" ? "المقاس أو القطر المطلوب" : "Required size or diameter"}</li><li>{lang === "ar" ? "نوع التربة أو الاستخدام" : "Ground condition or application"}</li><li>{lang === "ar" ? "الكمية والرسومات إن وجدت" : "Quantity and drawings if available"}</li></ul></div><p className="productNote">{t.productNote}</p><a className="primaryButton" href={`${whatsapp}?text=${encodeURIComponent(lang === "ar" ? `مرحبًا، أود عرض سعر لمنتج ${p.nameAr}` : `Hello, I would like a quotation for ${p.name}`)}`}>{t.quote} <span>↗</span></a></div></div>
    <section className="faqSection"><div className="sectionHeader"><div><span className="sectionKicker"><i/> {lang === "ar" ? "أسئلة شائعة" : "PRODUCT FAQ"}</span><h2>{lang === "ar" ? "قبل طلب عرض السعر" : "Before requesting a quote"}</h2></div></div><div className="faqGrid">
      <article><h3>{lang === "ar" ? "هل يمكن التصنيع حسب المقاس؟" : "Can this be supplied to custom dimensions?"}</h3><p>{lang === "ar" ? "نراجع المقاس والوصلة والرسم ومتطلبات الاستخدام قبل تأكيد إمكانية التصنيع." : "We review the dimensions, connection, drawing and operating requirements before confirming the fabrication scope."}</p></article>
      <article><h3>{lang === "ar" ? "ما المعلومات المطلوبة للتسعير؟" : "What information should I send for pricing?"}</h3><p>{lang === "ar" ? "أرسل نوع وموديل المعدة والمقاس المطلوب وطبيعة الاستخدام والكمية وأي رسومات أو صور مرجعية متاحة." : "Send the rig make and model, required size, intended application, quantity, and any available drawings or reference photos."}</p></article>
      <article><h3>{lang === "ar" ? "كيف يتم تأكيد التوافق؟" : "How is compatibility confirmed?"}</h3><p>{lang === "ar" ? "يتم تأكيد الأبعاد ونوع الوصلة وترتيب فتحات التثبيت أو القطع حسب المنتج والمعدة قبل الطلب." : "Dimensions, connection type, pin-hole or cutting layout are confirmed against the relevant tool and rig before ordering."}</p></article>
    </div></section>
    {related.length > 0 && <section className="relatedSection"><div className="sectionHeader"><div><span className="sectionKicker"><i/> {lang === "ar" ? "منتجات مرتبطة" : "RELATED PRODUCTS"}</span><h2>{lang === "ar" ? "قد تحتاج أيضًا" : "You may also need"}</h2></div></div><div className="productGrid">{related.map((item,i)=><a className="productTile" href={productUrl(lang,item.slug)} key={item.slug}>{item.images?.[0] ? <div className="tileImage"><img loading="lazy" decoding="async" width="720" height="520" src={item.images[0]} alt={lang === "ar" ? item.nameAr : item.name}/><span className="tileIndex">{String(i+1).padStart(2,"0")}</span></div> : <span className="tileIndex tileIndexText">{String(i+1).padStart(2,"0")}</span>}<div className="tileText"><span>{categoryLabel(lang,item.category)}</span><h3>{lang === "ar" ? item.nameAr : item.name}</h3><p>{lang === "ar" ? item.descriptionAr : item.description}</p><b>{t.view} ↗</b></div></a>)}</div></section>}
  </main><Footer lang={lang}/></div>;
}

export function CollectionIndex({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <div className="site" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}><Header lang={lang} section="collections"/><main className="wrap catalogPage">
    <div className="catalogHero"><span className="sectionKicker"><i/> {t.collectionsLabel}</span><h1>{t.collectionsTitle}</h1><p>{t.collectionsIntro}</p></div>
    <div className="collectionGrid">{collections.map((collection,i)=>{const items=productsForCollection(collection);const cover=items.find(p=>p.images?.length)?.images?.[0];return <a className="collectionCard" href={`${lang === "ar" ? "/ar" : ""}/collections/${collection.slug}`} key={collection.slug}>{cover ? <div className="collectionCover"><img loading="lazy" decoding="async" width="540" height="420" src={cover} alt=""/><span>{String(i+1).padStart(2,"0")}</span></div> : <div className="collectionCover collectionCoverText"><span>{String(i+1).padStart(2,"0")}</span></div>}<div><small>{items.length} {lang === "ar" ? "منتجات" : "products"}</small><h2>{lang === "ar" ? collection.nameAr : collection.name}</h2><p>{lang === "ar" ? collection.descriptionAr : collection.description}</p><b>{t.viewCollection} ↗</b></div></a>})}</div>
  </main><Footer lang={lang}/></div>;
}

export function CollectionView({ lang, collection }: { lang: Lang; collection: Collection }) {
  const t=copy[lang], items=productsForCollection(collection), name=lang==="ar"?collection.nameAr:collection.name;
  return <div className="site" lang={lang} dir={lang==="ar"?"rtl":"ltr"}><Header lang={lang} collection={collection}/><main className="wrap catalogPage">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={home(lang)}>{lang==="ar"?"الرئيسية":"Home"}</a><span>/</span><a href={`${lang==="ar"?"/ar":""}/collections`}>{lang==="ar"?"الفئات":"Collections"}</a><span>/</span><span>{name}</span></nav>
    <div className="catalogHero"><span className="sectionKicker"><i/> {t.collectionsLabel}</span><h1>{name}</h1><p>{lang==="ar"?collection.descriptionAr:collection.description}</p><div className="catalogMeta">{items.length} {lang==="ar"?"منتجات":"products"} · {lang==="ar"?"تصنيع وتوريد من جدة، السعودية":"Manufacturing & supply from Jeddah, Saudi Arabia"}</div></div>
    <section><div className="sectionHeader"><div><span className="sectionKicker"><i/> {t.productsLabel}</span><h2>{t.productsInCollection}</h2></div></div><div className="productGrid">{items.map((p,i)=><a className="productTile" href={productUrl(lang,p.slug)} key={p.slug}>{p.images?.length?<div className="tileImage"><img loading="lazy" decoding="async" width="720" height="520" src={p.images[0]} alt={lang==="ar"?p.nameAr:p.name}/><span className="tileIndex">{String(i+1).padStart(2,"0")}</span></div>:<span className="tileIndex tileIndexText">{String(i+1).padStart(2,"0")}</span>}<div className="tileText"><span>{categoryLabel(lang,p.category)}</span><h3>{lang==="ar"?p.nameAr:p.name}</h3><p>{lang==="ar"?p.descriptionAr:p.description}</p><b>{t.view} ↗</b></div></a>)}</div></section>
    <section className="collectionCta"><h2>{lang==="ar"?"تحتاج مقاسًا أو وصلة مخصصة؟":"Need a custom size or connection?"}</h2><p>{lang==="ar"?"أرسل نوع المعدة والقطر والرسومات والكمية، وسنراجع متطلبات التصنيع.":"Send your rig model, diameter, drawings and quantity so we can review the fabrication requirements."}</p><a className="primaryButton" href={`${whatsapp}?text=${encodeURIComponent(lang==="ar"?`مرحبًا، أود الاستفسار عن فئة ${collection.nameAr}`:`Hello, I would like to inquire about the ${collection.name} collection`)}`}>{t.quote} ↗</a></section>
  </main><Footer lang={lang}/></div>;
}


export function AboutPage({ lang }: { lang: Lang }) {
  const t=copy[lang];
  return <div className="site" lang={lang} dir={lang==="ar"?"rtl":"ltr"}><Header lang={lang} section="about"/><main className="wrap infoPage">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={home(lang)}>{lang==="ar"?"الرئيسية":"Home"}</a><span>/</span><span>{lang==="ar"?"من نحن":"About"}</span></nav>
    <section className="infoHero"><span className="sectionKicker"><i/> {t.aboutLabel}</span><h1>{lang==="ar"?"معدات ومكونات حفر تُجهز لمتطلبات المشروع.":"Foundation drilling equipment built around project requirements."}</h1><p>{t.about}</p></section>
    <section className="infoStats"><article><b>{products.length}+</b><span>{lang==="ar"?"فئات ومنتجات في الكتالوج":"catalog products and families"}</span></article><article><b>2</b><span>{lang==="ar"?"لغات للموقع والمحتوى الفني":"site and technical-content languages"}</span></article><article><b>JEDDAH</b><span>{lang==="ar"?"قاعدة التوريد والتصنيع":"supply and fabrication base"}</span></article></section>
    <section className="infoSplit"><div><span className="sectionKicker"><i/> {t.capabilitiesLabel}</span><h2>{t.capabilitiesTitle}</h2></div><div className="capList">{t.capabilities.map(([n,title,detail])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div></section>
    <section className="collectionCta"><h2>{lang==="ar"?"لديك رسم أو مقاس خاص؟":"Have a drawing or custom requirement?"}</h2><p>{lang==="ar"?"أرسل تفاصيل المشروع ونوع المعدة والمقاس والكمية لفريقنا لمراجعة المتطلبات.":"Send the project details, rig model, required dimensions and quantity for technical review."}</p><a className="primaryButton" href={`${whatsapp}?text=${encodeURIComponent(lang==="ar"?"مرحبًا، لدي متطلبات تصنيع خاصة وأود مناقشتها.":"Hello, I have a custom fabrication requirement I would like to discuss.")}`}>{t.quote} ↗</a></section>
  </main><Footer lang={lang}/></div>;
}

export function ContactPage({ lang }: { lang: Lang }) {
  const t=copy[lang];
  return <div className="site" lang={lang} dir={lang==="ar"?"rtl":"ltr"}><Header lang={lang} section="contact"/><main className="wrap infoPage">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={home(lang)}>{lang==="ar"?"الرئيسية":"Home"}</a><span>/</span><span>{t.nav[3]}</span></nav>
    <section className="infoHero"><span className="sectionKicker"><i/> {t.contactLabel}</span><h1>{t.contactTitle}</h1><p>{t.contactIntro}</p></section>
    <section className="contactCards"><a href={`${whatsapp}?text=${encodeURIComponent(lang==="ar"?"مرحبًا، أود طلب عرض سعر.":"Hello, I would like a quotation.")}`}><span>01</span><h2>{t.whatsapp}</h2><p>{company.phoneDisplay}</p><b>{lang==="ar"?"ابدأ المحادثة":"Start conversation"} ↗</b></a><a href={`tel:${company.phone}`}><span>02</span><h2>{t.call}</h2><p>{company.phoneDisplay}</p><b>{lang==="ar"?"اتصل الآن":"Call now"} ↗</b></a><article><span>03</span><h2>{t.address}</h2><p>{company.address}</p><b>{lang==="ar"?"جدة، السعودية":"Jeddah, Saudi Arabia"}</b></article></section>
    <section className="quoteGuide"><div><span className="sectionKicker"><i/> {lang==="ar"?"لتسعير أسرع":"FASTER QUOTATION"}</span><h2>{lang==="ar"?"أرسل هذه التفاصيل مع استفسارك.":"Include these details with your inquiry."}</h2></div><ol><li>{lang==="ar"?"اسم المنتج أو صورة واضحة":"Product name or a clear photo"}</li><li>{lang==="ar"?"نوع وموديل المعدة":"Rig make and model"}</li><li>{lang==="ar"?"الأبعاد أو القطر والوصلة":"Dimensions or diameter and connection"}</li><li>{lang==="ar"?"الكمية المطلوبة":"Required quantity"}</li><li>{lang==="ar"?"الرسم الفني إن وجد":"Technical drawing, if available"}</li><li>{lang==="ar"?"ظروف التربة أو الاستخدام":"Ground condition or application"}</li></ol></section>
    <QuoteBuilder lang={lang}/>
    <section className="companyLegal"><div><span>{t.vat}</span><b>{company.vat}</b></div><div><span>{t.registration}</span><b>{company.cr}</b></div></section>
  </main><Footer lang={lang}/></div>;
}


export function CapabilitiesPage({ lang }: { lang: Lang }) {
  const t=copy[lang];
  return <div className="site" lang={lang} dir={lang==="ar"?"rtl":"ltr"}><Header lang={lang} section="capabilities"/><main className="wrap infoPage">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><a href={home(lang)}>{lang==="ar"?"الرئيسية":"Home"}</a><span>/</span><span>{t.nav[2]}</span></nav>
    <section className="infoHero"><span className="sectionKicker"><i/> {t.capabilitiesLabel}</span><h1>{t.capabilitiesTitle}</h1><p>{lang==="ar"?"نركز على أدوات حفر الأساسات والمكونات المصنعة ومستلزمات الحفر مع مراجعة المقاسات والوصلات ومتطلبات المشروع قبل التصنيع أو التوريد.":"We focus on foundation drilling tools, fabricated components and drilling accessories, with dimensions, connections and project requirements reviewed before fabrication or supply."}</p></section>
    <section className="capabilityDetailGrid">{t.capabilities.map(([n,title,detail],i)=><article key={n}><span>{n}</span><h2>{title}</h2><p>{detail}</p><ul>{(i===0?[lang==="ar"?"أوجرات وبكيتات وكور بارل":"Augers, buckets and core barrels",lang==="ar"?"تكوينات وأقطار حسب المشروع":"Project-specific configurations and diameters",lang==="ar"?"مراجعة الوصلة والتوافق":"Connection and compatibility review"]:i===1?[lang==="ar"?"تصنيع من الرسومات أو العينات":"Fabrication from drawings or samples",lang==="ar"?"مقاسات ووصلات مخصصة":"Custom dimensions and interfaces",lang==="ar"?"مراجعة متطلبات الاستخدام":"Application requirement review"]:[lang==="ar"?"مواسير تغليف ومكونات":"Casing and components",lang==="ar"?"قطع تآكل واستبدال":"Wear and replacement parts",lang==="ar"?"مطابقة الموديل قبل الطلب":"Model matching before ordering"]).map(x=><li key={x}>{x}</li>)}</ul></article>)}</section>
    <section className="collectionCta"><h2>{lang==="ar"?"أرسل متطلبات مشروعك للمراجعة":"Send your project requirements for review"}</h2><p>{lang==="ar"?"نوع المعدة، القطر، طبيعة التربة، الكمية والرسومات تساعدنا على تجهيز استفسار أدق.":"Rig model, diameter, ground condition, quantity and drawings help us prepare a more accurate quotation."}</p><a className="primaryButton" href={`${lang==="ar"?"/ar":""}/contact`}>{t.quote} ↗</a></section>
  </main><Footer lang={lang}/></div>;
}
