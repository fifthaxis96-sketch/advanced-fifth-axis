import { productGuidance, productGuideSlug } from "@/lib/product-guidance";
import { variantLabel } from "@/lib/localization";
import { InquiryLink } from "@/components/InquiryLink";
import { PartnersSection } from "@/components/PartnersSection";
import { products, collections, productsForCollection, collectionForProduct, relatedProducts, company, type Product, type Collection } from "@/lib/site";
import { imageSize, productImageSet, productThumbnail } from "@/lib/images";
import { guides } from "@/lib/guides";
import { ProductCatalog } from "@/components/ProductCatalog";
import { QuoteBuilder } from "@/components/QuoteBuilder";
import { AddToQuote } from "@/components/AddToQuote";
import { ProductCompare } from "@/components/ProductCompare";
import { ToolFinder } from "@/components/ToolFinder";
import { HotProductsRail } from "@/components/HotProductsRail";

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
    productsIntro: "Explore drilling tools, replacement parts and fabricated components. Check the application and ask us to confirm dimensions and compatibility before ordering.",
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
    address: "Address", vat: "VAT number", registration: "Commercial registration",
    view: "View product", viewCollection: "View collection", collectionsLabel: "SHOP BY APPLICATION", collectionsTitle: "Browse focused product collections.", collectionsIntro: "Find the right product family faster, then send us your rig, dimensions and project requirements for confirmation.", productsInCollection: "Products in this collection", sizes: "Listed configurations", back: "All products",
    productNote: "Ask us to confirm availability, dimensions, connection and compatibility before ordering.",
    photoNote: "Owner-supplied category photo; individual models may look different.", referenceNote: "Manufacturer reference photo; confirm the exact configuration before ordering.", pending: "Verified photo pending", photoSource: "Photo: Meclead",
    whatsapp: "WhatsApp", footer: "Foundation drilling tools · Jeddah, Saudi Arabia"
  },
  ar: {
    nav: ["المنتجات", "الفئات", "قدراتنا", "تواصل معنا"],
    eyebrow: "معدات حفر الأساسات · جدة، المملكة العربية السعودية",
    headline: "معدات حفر مصممة لمتطلبات مشروعك.",
    intro: "أدوات حفر الأساسات وحلول مواسير التغليف والقطع المصنعة لمقاولي الأساسات في أنحاء المملكة.",
    explore: "تصفح المنتجات", quote: "اطلب عرض سعر",
    tags: ["تصنيع حسب المشروع", "توريد داخل المملكة", "دعم فني"],
    productsLabel: "مجموعة المنتجات", productsTitle: "حلول متكاملة لأعمال الأساسات.",
    productsIntro: "تصفح أدوات الحفر وقطع الاستبدال والمكونات المصنعة. راجع الاستخدام واطلب تأكيد الأبعاد والتوافق قبل الطلب.",
    capabilitiesLabel: "ما نقدمه", capabilitiesTitle: "نصنع وفق متطلباتك.",
    capabilities: [
      ["01", "أدوات الحفر", "بكيتات وأوجرات وكور بارل لأعمال الحفر والأساسات."],
      ["02", "تصنيع مخصص", "أبعاد ووصلات وترتيب أسنان القطع وفق احتياجات مشروعك."],
      ["03", "مواسير وملحقات", "حلول مواسير التغليف وقطع التآكل وملحقات الحفر البديلة."]
    ],
    aboutLabel: "المحور الخامس المتقدمة للصناعة", aboutTitle: "شريك عملي لأعمال الأساسات.",
    about: "نصنع ونورد معدات الحفر ومكوناتها للمقاولين في المملكة العربية السعودية. أرسل نوع المعدة والقطر وطبيعة التربة والكمية لتجهيز عرض السعر المناسب.",
    contactLabel: "لنعمل معًا", contactTitle: "أخبرنا بما يحتاجه مشروعك.",
    contactIntro: "أرسل الرسومات أو المواصفات إلى فريقنا في جدة.",
    address: "العنوان", vat: "الرقم الضريبي", registration: "السجل التجاري",
    view: "عرض المنتج", viewCollection: "عرض الفئة", collectionsLabel: "تصفح حسب الاستخدام", collectionsTitle: "تصفح فئات المنتجات المتخصصة.", collectionsIntro: "اعثر على فئة المنتج المناسبة بسرعة، ثم أرسل نوع المعدة والأبعاد ومتطلبات المشروع للتأكيد.", productsInCollection: "منتجات هذه الفئة", sizes: "التكوينات المدرجة", back: "جميع المنتجات",
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
function Switcher({ lang, product, collection, section, guideSlug }: { lang: Lang; product?: Product; collection?: Collection; section?: "products" | "collections" | "capabilities" | "about" | "contact" | "faq" | "privacy" | "tool-finder" | "guides" | "field-work"; guideSlug?: string }) {
  const en = guideSlug ? `/guides/${guideSlug}` : product ? productUrl("en", product.slug) : collection ? `/collections/${collection.slug}` : section ? `/${section}` : "/";
  const ar = guideSlug ? `/ar/guides/${guideSlug}` : product ? productUrl("ar", product.slug) : collection ? `/ar/collections/${collection.slug}` : section ? `/ar/${section}` : "/ar";
  return <nav className="language" aria-label={lang === "ar" ? "اختيار اللغة" : "Language selector"}>
    <a href={en} lang="en" hrefLang="en" aria-current={lang === "en" ? "page" : undefined}>EN</a>
    <span aria-hidden="true">/</span>
    <a href={ar} lang="ar" hrefLang="ar" aria-current={lang === "ar" ? "page" : undefined}>العربية</a>
  </nav>;
}
export function Header({ lang, product, collection, section, guideSlug }: { lang: Lang; product?: Product; collection?: Collection; section?: "products" | "collections" | "capabilities" | "about" | "contact" | "faq" | "privacy" | "tool-finder" | "guides" | "field-work"; guideSlug?: string }) {
  const t = copy[lang];
  return <header className="siteHeader"><div className="wrap headerInner">
    <a className="siteLogo" href={home(lang)} aria-label={lang === "ar" ? `${company.nameAr} — الرئيسية` : "Advanced Fifth Axis home"}><img src="/logo-small.webp" alt={lang === "ar" ? `شعار ${company.nameAr}` : "Advanced Fifth Axis logo"} width="112" height="92"/></a>
    <nav className="siteNav" aria-label={lang === "ar" ? "التنقل الرئيسي" : "Main navigation"}>
      <a aria-current={section === "products" ? "page" : undefined} href={`${lang === "ar" ? "/ar" : ""}/products`}> {t.nav[0]}</a>
      <a aria-current={section === "collections" ? "page" : undefined} href={`${lang === "ar" ? "/ar" : ""}/collections`}> {t.nav[1]}</a>
      <a aria-current={section === "tool-finder" ? "page" : undefined} href={`${lang === "ar" ? "/ar" : ""}/tool-finder`}> {lang === "ar" ? "مساعد اختيار الأدوات" : "Find a tool"}</a>
      <a aria-current={section === "guides" ? "page" : undefined} href={`${lang === "ar" ? "/ar" : ""}/guides`}> {lang === "ar" ? "الأدلة الفنية" : "Guides"}</a>
      <a aria-current={section === "field-work" ? "page" : undefined} href={`${lang === "ar" ? "/ar" : ""}/field-work`}> {lang === "ar" ? "مشاريع العملاء" : "Client Projects"}</a>
      <a aria-current={section === "capabilities" ? "page" : undefined} href={`${lang === "ar" ? "/ar" : ""}/capabilities`}> {t.nav[2]}</a>
      <a aria-current={section === "contact" ? "page" : undefined} href={`${lang === "ar" ? "/ar" : ""}/contact`}> {t.nav[3]}</a>
    </nav>
    <div className="headerActions"><Switcher lang={lang} product={product} collection={collection} section={section} guideSlug={guideSlug}/><a className="headerCta" href={`${lang === "ar" ? "/ar" : ""}/contact#quote-builder`}>{t.quote}</a></div>
  </div></header>;
}
export function Footer({lang}:{lang:Lang}) {
  return <><footer className="siteFooter"><div className="wrap footerInner"><img src="/logo-small.webp" alt={lang === "ar" ? company.nameAr : company.name} width="112" height="92"/><span>{lang === "ar" ? company.nameAr : company.name}<br/>{copy[lang].footer}</span><nav className="footerNav"><a href={`${lang==="ar"?"/ar":""}/products`}>{copy[lang].nav[0]}</a><a href={`${lang==="ar"?"/ar":""}/collections`}>{copy[lang].nav[1]}</a><a href={`${lang==="ar"?"/ar":""}/tool-finder`}>{lang === "ar" ? "مساعد اختيار الأدوات" : "Find a tool"}</a><a href={`${lang==="ar"?"/ar":""}/guides`}>{lang==="ar"?"الأدلة الفنية":"Guides"}</a><a href={`${lang==="ar"?"/ar":""}/field-work`}>{lang==="ar"?"مشاريع العملاء":"Client Projects"}</a><a href={`${lang==="ar"?"/ar":""}/about`}>{lang==="ar"?"من نحن":"About"}</a><a href={`${lang==="ar"?"/ar":""}/contact`}>{copy[lang].nav[3]}</a><a href={`${lang==="ar"?"/ar":""}/faq`}>{lang==="ar"?"الأسئلة الشائعة":"FAQ"}</a><a href={`${lang==="ar"?"/ar":""}/privacy`}>{lang==="ar"?"الخصوصية":"Privacy"}</a></nav><span>© 2026</span></div></footer><div className="floatingContacts"><InquiryLink lang={lang} channel="email" className="floatingEmail" label={lang==="ar"?"تواصل عبر البريد الإلكتروني":"Contact us by email"}><span className="floatingContactIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg></span><b>{lang === "ar" ? "البريد" : "Email"}</b></InquiryLink><InquiryLink lang={lang} channel="whatsapp" className="floatingWhatsApp" label={lang==="ar"?"تواصل عبر واتساب":"Contact us on WhatsApp"}><span className="whatsAppIcon" aria-hidden="true"><svg viewBox="0 0 32 32" role="img"><path fill="currentColor" d="M19.11 17.27c-.29-.15-1.72-.85-1.99-.94-.27-.1-.47-.15-.67.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.51.07-.78.37-.27.29-1.03 1.01-1.03 2.47 0 1.46 1.06 2.87 1.2 3.07.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z"/><path fill="currentColor" d="M16.03 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.13 29l6.76-1.77a12.73 12.73 0 0 0 6.14 1.56h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.74Zm0 23.43h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.01 1.05 1.07-3.91-.25-.4A10.61 10.61 0 1 1 16.03 26.63Z"/></svg></span><b>{lang === "ar" ? "واتساب" : "WhatsApp"}</b></InquiryLink></div></>;;
}
export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const order = [
    {product:"drilling-buckets"}, {product:"rock-augers"}, {product:"core-barrels"},
    {product:"cleaning-buckets"}, {product:"casing"}, {product:"cfa"},
    {collection:"wear-parts", name:"Cutting & Wear Parts", nameAr:"أسنان وقطع التآكل", image:"/products/single-roller-bit-500x500.webp"},
    {collection:"drive-systems", name:"Kelly Box & Adapter", nameAr:"كيلي بوكس ووصلة كيلي", image:"/products/kelly-boxes-white-background.webp"},
    {product:"wire-tremie-pipe"}, {product:"pile-testing-reaction-beam"}
  ] as const;
  const homeCards = order.map(item => {
    if ("product" in item) {
      const p = products.find(product => product.slug === item.product);
      return p ? {key:p.slug, href:productUrl(lang,p.slug), image:p.images?.[0], name:p.name, nameAr:p.nameAr, description:p.description, descriptionAr:p.descriptionAr, isCollection:false} : null;
    }
    const collection = collections.find(c => c.slug === item.collection);
    return collection ? {key:collection.slug, href:`${lang === "ar" ? "/ar" : ""}/collections/${collection.slug}`, image:item.image, name:item.name, nameAr:item.nameAr, description:collection.description, descriptionAr:collection.descriptionAr, isCollection:true} : null;
  }).filter((item): item is NonNullable<typeof item> => item !== null);
  return <div className="site siteHome" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
    <Header lang={lang}/>
    <main id="main-content">
      <section className="heroShowcase" aria-label={lang === "ar" ? "معدات حفر الأساسات" : "Foundation drilling equipment"}>
        <picture className="heroShowcaseMedia">
          <source media="(max-width: 700px)" srcSet="/home/foundation-drilling-showcase-mobile-optimized.webp"/>
          <img src="/home/foundation-drilling-showcase-optimized.webp" alt={lang === "ar" ? "مجموعة من أدوات حفر الأساسات الزرقاء وقطع القطع الصفراء في موقع إنشاءات" : "Blue foundation drilling tools with yellow cutting teeth at a construction site"} width="1671" height="941" fetchPriority="high"/>
        </picture>
        <div className="heroShowcaseShade" aria-hidden="true"/>
        <div className="wrap heroShowcaseContent">
          <div className="heroShowcaseCopy">
            <span className="heroShowcaseEyebrow">{t.eyebrow}</span>
            <h1>{t.headline}</h1>
            <p>{t.intro}</p>
            <div className="heroButtons"><a className="primaryButton" href="#hot-products">{t.explore} </a><a className="primaryButton quotationButton" href={`${lang === "ar" ? "/ar" : ""}/contact#quote-builder`}>{t.quote} </a></div>
          </div>
          <span className="heroShowcaseCredit">{lang === "ar" ? company.nameAr : "ADVANCED FIFTH AXIS"} <span aria-hidden="true">/</span> {lang === "ar" ? "جدة، المملكة العربية السعودية" : "JEDDAH, SAUDI ARABIA"}</span>
        </div>
      </section>
      <section id="hot-products" className="hotProducts" aria-labelledby="hot-products-title">
        <div className="wrap">
          <div className="hotProductsIntro"><span className="sectionKicker"><i/> {lang === "ar" ? "منتجاتنا" : "EXPLORE THE RANGE"}</span><h2 id="hot-products-title">{lang === "ar" ? "منتجات مميزة" : "Hot Products"}</h2><span className="hotProductsRule" aria-hidden="true"/><p>{lang === "ar" ? "تصفح أدوات الحفر والمكونات، وأرسل المقاس وموديل المعدة للحصول على عرض مناسب." : "Explore drilling tools and components. Share your dimensions and rig model for a tailored quotation."}</p></div>
          <HotProductsRail lang={lang} items={homeCards.map(item => ({key:item.key, href:item.href, image:item.image, name:lang === "ar" ? item.nameAr : item.name}))}/>
          <div className="hotProductsAll"><a href={`${lang === "ar" ? "/ar" : ""}/products`}>{lang === "ar" ? "عرض جميع المنتجات" : "View all products"} </a></div>
        </div>
      </section>
      <div className="finderPromo wrap"><div><span className="sectionKicker"><i/>{lang === "ar" ? "ابدأ بالمشروع" : "START WITH YOUR PROJECT"}</span><h2>{lang === "ar" ? "لست متأكدًا من الأداة المناسبة؟" : "Not sure which tool to ask for?"}</h2><p>{lang === "ar" ? "اختر الاستخدام وأرسل ظروف التربة والمعدة للمراجعة الفنية." : "Explore product families by application and send your rig and ground conditions for technical review."}</p></div><a className="primaryButton" href={`${lang === "ar" ? "/ar" : ""}/tool-finder`}>{lang === "ar" ? "مساعد اختيار الأدوات" : "Find a tool"}</a></div>
      <div className="trustStrip"><div className="wrap">{t.tags.map((tag,i)=><span key={tag}><b>0{i+1}</b>{tag}</span>)}</div></div>
      <section id="products" className="siteSection wrap"><div className="sectionHeader"><div><span className="sectionKicker"><i/> {t.productsLabel}</span><h2>{t.productsTitle}</h2></div><p>{t.productsIntro}</p></div>
        <div className="productGrid homeProductGrid">{homeCards.map((item,i)=><a className="productTile" href={item.href} key={item.key}><div className="tileImage"><img loading="lazy" decoding="async" width="720" height="520" src={item.image ? productThumbnail(item.image) : undefined} alt={lang === "ar" ? item.nameAr : item.name}/><span className="tileIndex">{String(i+1).padStart(2,"0")}</span></div><div className="tileText"><span>{lang === "ar" ? item.name : item.nameAr}</span><h3>{lang === "ar" ? item.nameAr : item.name}</h3><p>{lang === "ar" ? item.descriptionAr : item.description}</p><b>{item.isCollection ? t.viewCollection : t.view} </b></div></a>)}</div><div className="sectionFooterCta"><a className="outlineButton" href={`${lang === "ar" ? "/ar" : ""}/products`}>{lang === "ar" ? "عرض جميع المنتجات" : "View full product catalog"} </a></div>
      </section>
      <PartnersSection lang={lang}/>
      <section className="fieldHome"><div className="wrap fieldHomeInner"><div><span className="sectionKicker"><i/>{lang === "ar" ? "من عملائنا" : "FROM OUR CLIENTS"}</span><h2>{lang === "ar" ? "عملاؤنا. أدواتنا. مشاريع على أرض الواقع." : "Our Clients. Our Tools. Real Projects."}</h2><p>{lang === "ar" ? "استكشف صورًا شاركها عملاؤنا من مشاريع حفر الأساسات، تعرض أدواتنا ومعداتنا أثناء العمل." : "Explore photos shared by our clients from foundation drilling projects, showcasing our tools and equipment in action."}</p><a className="primaryButton" href={`${lang === "ar" ? "/ar" : ""}/field-work`}>{lang === "ar" ? "استعرض مشاريع العملاء" : "Explore client projects"}</a></div><div className="clientPhotoCollage"><img className="clientPhotoMain" src="/projects/tool-on-rig.webp" alt={lang === "ar" ? "أداة حفر زرقاء في موقع عمل" : "Blue drilling tool at a work site"} loading="lazy" decoding="async" width="900" height="1600"/><img className="clientPhotoTop" src="/projects/roadway-foundation-rig-4080.webp" alt={lang === "ar" ? "آلة حفر أساسات بجانب الطريق" : "Foundation drilling rig beside a roadway"} loading="lazy" decoding="async" width="900" height="1200"/><img className="clientPhotoBottom" src="/projects/casing-lift-blue.webp" alt={lang === "ar" ? "مناولة مواسير في موقع العميل" : "Casing handling at a client project site"} loading="lazy" decoding="async" width="900" height="1200"/></div></div></section>
      <section className="siteSection wrap" aria-labelledby="home-guides-title"><div className="sectionHeader"><div><span className="sectionKicker"><i/>{lang === "ar" ? "معرفة فنية" : "TECHNICAL RESOURCES"}</span><h2 id="home-guides-title">{lang === "ar" ? "جهز متطلباتك قبل طلب السعر." : "Prepare a clearer drilling tool inquiry."}</h2></div><p>{lang === "ar" ? "أدلة عملية لاختيار الأداة وتجهيز الأبعاد والرسومات المطلوبة." : "Practical guides on tool selection, connections and the details needed for a quotation."}</p></div><div className="guideGrid">{guides.slice(0, 3).map(g => <a className="guideCard" href={`${lang === "ar" ? "/ar" : ""}/guides/${g.slug}`} key={g.slug}><span className="sectionKicker"><i/>{lang === "ar" ? "دليل فني" : "BUYER GUIDE"}</span><h3>{g[lang].title}</h3><p>{g[lang].description}</p><b>{lang === "ar" ? "اقرأ الدليل" : "Read guide"}</b></a>)}</div></section>
      <section id="contact" className="contactSection"><div className="wrap contactNew"><div><span className="sectionKicker"><i/> {t.contactLabel}</span><h2>{t.contactTitle}</h2><p>{t.contactIntro}</p><div className="heroButtons"><a className="primaryButton whatsappButton" href={`${whatsapp}?text=${encodeURIComponent(lang === "ar" ? "مرحبًا، أود طلب عرض سعر." : "Hello, I would like a quotation.")}`}><span className="whatsAppIcon" aria-hidden="true"><svg viewBox="0 0 32 32"><path fill="currentColor" d="M19.11 17.27c-.29-.15-1.72-.85-1.99-.94-.27-.1-.47-.15-.67.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.51.07-.78.37-.27.29-1.03 1.01-1.03 2.47 0 1.46 1.06 2.87 1.2 3.07.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.71.22 1.35.19 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z"/><path fill="currentColor" d="M16.03 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.13 29l6.76-1.77a12.73 12.73 0 0 0 6.14 1.56h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.06-3.74Zm0 23.43h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.01 1.05 1.07-3.91-.25-.4A10.61 10.61 0 1 1 16.03 26.63Z"/></svg></span>{t.whatsapp} <bdi dir="ltr">{company.phoneDisplay}</bdi> </a></div></div><dl><div><dt>{t.address}</dt><dd>{lang === "ar" ? company.addressAr : company.address}</dd></div><div><dt>{t.vat}</dt><dd>{company.vat}</dd></div><div><dt>{t.registration}</dt><dd>{company.cr}</dd></div></dl></div></section>
    </main><Footer lang={lang}/>
  </div>;
}
export function ProductIndex({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <div className="site" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}><Header lang={lang} section="products"/><main id="main-content" className="wrap catalogPage">
    <nav className="breadcrumbs" aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}><a href={home(lang)}>{lang === "ar" ? "الرئيسية" : "Home"}</a><span>/</span><span>{t.nav[0]}</span></nav>
    <div className="catalogHero"><span className="sectionKicker"><i/> {t.productsLabel}</span><h1>{t.productsTitle}</h1><p>{t.productsIntro}</p><div className="catalogMeta">{products.length} {lang === "ar" ? "منتجًا وفئة منتج" : "products and product families"}</div></div>
    <div className="catalogActions"><a href={`${lang === "ar" ? "/ar" : ""}/tool-finder`}>{lang === "ar" ? "ابحث عن الأداة حسب الاستخدام" : "Find a tool by application"}</a><a href={`${lang === "ar" ? "/ar" : ""}/contact#quote-builder`}>{lang === "ar" ? "اطلب عرض سعر" : "Request a quotation"}</a><a href={`${lang === "ar" ? "/ar" : ""}/guides/foundation-drilling-rfq-checklist`}>{lang === "ar" ? "قائمة بيانات طلب السعر" : "RFQ checklist"}</a></div>
    <ProductCatalog lang={lang}/>
    <ProductCompare lang={lang}/>
  </main><Footer lang={lang}/></div>;
}

export function ToolFinderPage({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  return <div className="site" lang={lang} dir={ar ? "rtl" : "ltr"}><Header lang={lang} section="tool-finder"/><main id="main-content" className="wrap catalogPage">
    <nav className="breadcrumbs" aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}><a href={home(lang)}>{ar ? "الرئيسية" : "Home"}</a><span>/</span><span>{ar ? "مساعد اختيار الأدوات" : "Find a tool"}</span></nav>
    <div className="catalogHero"><span className="sectionKicker"><i/>{ar ? "مساعد اختيار الأدوات" : "PRODUCT GUIDE"}</span><h1>{ar ? "ابدأ بالاستخدام المطلوب." : "Start with the job you need to do."}</h1><p>{ar ? "حدد الاستخدام والمقاس والمعدة لتصفح فئات المنتجات ذات الصلة، ثم أرسل التفاصيل للمراجعة الفنية." : "Choose the application, size and rig to explore relevant product families, then send the details for technical review."}</p></div>
    <ToolFinder lang={lang}/>
  </main><Footer lang={lang}/></div>;
}

export function ProductView({ lang, product: p }: { lang: Lang; product: Product }) {
  const t = copy[lang], name = lang === "ar" ? p.nameAr : p.name;
  const collection = collectionForProduct(p);
  const related = relatedProducts(p, 3);
  const guidance = productGuidance[p.slug][lang];
  const guide = guides.find(g => g.slug === productGuideSlug(p.slug, p.category))!;
  return <div className="site" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}><Header lang={lang} product={p}/><main id="main-content" className="wrap productPage">
    <nav className="breadcrumbs" aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}><a href={home(lang)}>{lang === "ar" ? "الرئيسية" : "Home"}</a><span>/</span><a href={`${lang === "ar" ? "/ar" : ""}/products`}>{t.nav[0]}</a><span>/</span><span>{name}</span></nav>
    <div className="productLayout">{p.images?.length ? <div className="ownerGallery">{p.images.map((src,i)=><img loading={i===0?"eager":"lazy"} decoding="async" {...imageSize(src)} src={src} srcSet={productImageSet(src)} sizes="(max-width: 750px) calc(100vw - 40px), (max-width: 1300px) 45vw, 560px" fetchPriority={i === 0 ? "high" : "auto"} alt={`${name} — ${i+1}`} key={src}/>)}</div> : <div className="productPlaceholder"><span>{lang === "ar" ? "صورة المنتج قيد الإضافة" : "Product image being added"}</span></div>}<div className="productDetails"><span className="sectionKicker"><i/> {categoryLabel(lang,p.category)}</span><span className="productSecondName">{lang === "ar" ? p.name : p.nameAr}</span><h1>{name}</h1><p>{lang === "ar" ? p.descriptionAr : p.description}</p>{p.visualNote && <p className="productNote">{lang === "ar" ? p.visualNoteAr : p.visualNote}</p>}{collection && <a className="collectionPill" href={`${lang === "ar" ? "/ar" : ""}/collections/${collection.slug}`}>{lang === "ar" ? collection.nameAr : collection.name}</a>}<div className="detailRule"/>{p.variants.length > 0 && <><h2>{t.sizes}</h2><ul className="variantList">{p.variants.map(variant=><li key={variant}><InquiryLink lang={lang} channel="whatsapp" product={p} variant={variant}>{variantLabel(variant, lang)} </InquiryLink></li>)}</ul></>}<div className="orderChecklist"><h2>{lang === "ar" ? "معلومات تساعدنا على التسعير" : "Information for an accurate quotation"}</h2><ul><li>{lang === "ar" ? "نوع وموديل المعدة" : "Rig make and model"}</li><li>{lang === "ar" ? "المقاس أو القطر المطلوب" : "Required size or diameter"}</li><li>{lang === "ar" ? "نوع التربة أو الاستخدام" : "Ground condition or application"}</li><li>{lang === "ar" ? "الكمية والرسومات إن وجدت" : "Quantity and drawings if available"}</li></ul></div><p className="productNote">{t.productNote}</p><AddToQuote product={p} lang={lang}/></div></div>
    <aside className="guideRelated"><span className="sectionKicker"><i/>{lang === "ar" ? "دليل فني" : "BUYER GUIDE"}</span><h2>{lang === "ar" ? "جهز متطلباتك قبل طلب السعر" : "Prepare your inquiry"}</h2><a href={`${lang === "ar" ? "/ar" : ""}/guides/${guide.slug}`}>{guide[lang].title}</a></aside>
    {p.category === "Foundation Tools" && <section className="rockBucketSpecs" aria-labelledby="customer-specifications-title">
      <span className="sectionKicker"><i/>{lang === "ar" ? "حسب طلب العميل" : "UPON CUSTOMER REQUEST"}</span>
      <h2 id="customer-specifications-title">{lang === "ar" ? "المواصفات حسب طلب العميل" : "Specifications available upon customer request"}</h2>
      <p>{lang === "ar" ? "تُحدد المقاسات والأبعاد والتكوين وفق متطلبات العميل. أرسل المقاسات المطلوبة وموديل معدة الحفر والرسم الفني إن وجد لتأكيد المواصفات وطلب عرض السعر." : "Sizes, dimensions and configuration are specified to suit customer requirements. Send your required dimensions, drilling rig model and any available drawings to confirm specifications and request a quotation."}</p>
    </section>}
    <section className="faqSection"><div className="sectionHeader"><div><span className="sectionKicker"><i/> {lang === "ar" ? "معلومات المنتج" : "PRODUCT SELECTION"}</span><h2>{lang === "ar" ? "قبل طلب عرض السعر" : "Before requesting a quote"}</h2></div></div><article className="productAnswer"><h3>{guidance.question}</h3><p>{guidance.answer}</p><a href={`${lang === "ar" ? "/ar" : ""}/faq`}>{lang === "ar" ? "أسئلة الطلب والتوافق" : "Ordering and compatibility questions"}</a></article></section>
    {related.length > 0 && <section className="relatedSection"><div className="sectionHeader"><div><span className="sectionKicker"><i/> {lang === "ar" ? "منتجات مرتبطة" : "RELATED PRODUCTS"}</span><h2>{lang === "ar" ? "قد تحتاج أيضًا" : "You may also need"}</h2></div></div><div className="productGrid">{related.map((item,i)=><a className="productTile" href={productUrl(lang,item.slug)} key={item.slug}>{item.images?.[0] ? <div className="tileImage"><img loading="lazy" decoding="async" width="720" height="520" src={productThumbnail(item.images[0])} alt={lang === "ar" ? item.nameAr : item.name}/><span className="tileIndex">{String(i+1).padStart(2,"0")}</span></div> : <span className="tileIndex tileIndexText">{String(i+1).padStart(2,"0")}</span>}<div className="tileText"><span>{categoryLabel(lang,item.category)}</span><h3>{lang === "ar" ? item.nameAr : item.name}</h3><p>{lang === "ar" ? item.descriptionAr : item.description}</p><b>{t.view}</b></div></a>)}</div></section>}
  </main><Footer lang={lang}/></div>;
}

export function CollectionIndex({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <div className="site" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}><Header lang={lang} section="collections"/><main id="main-content" className="wrap catalogPage">
    <div className="catalogHero"><span className="sectionKicker"><i/> {t.collectionsLabel}</span><h1>{t.collectionsTitle}</h1><p>{t.collectionsIntro}</p></div>
    <div className="collectionGrid">{collections.map((collection,i)=>{const items=productsForCollection(collection);const cover=items.find(p=>p.images?.length)?.images?.[0];return <a className="collectionCard" href={`${lang === "ar" ? "/ar" : ""}/collections/${collection.slug}`} key={collection.slug}>{cover ? <div className="collectionCover"><img loading="lazy" decoding="async" width="540" height="420" src={productThumbnail(cover)} alt={lang === "ar" ? collection.nameAr : collection.name}/><span>{String(i+1).padStart(2,"0")}</span></div> : <div className="collectionCover collectionCoverText"><span>{String(i+1).padStart(2,"0")}</span></div>}<div><small>{items.length} {lang === "ar" ? "منتجات" : "products"}</small><h2>{lang === "ar" ? collection.nameAr : collection.name}</h2><p>{lang === "ar" ? collection.descriptionAr : collection.description}</p><b>{t.viewCollection}</b></div></a>})}</div>
  </main><Footer lang={lang}/></div>;
}

export function CollectionView({ lang, collection }: { lang: Lang; collection: Collection }) {
  const t=copy[lang], items=productsForCollection(collection), name=lang==="ar"?collection.nameAr:collection.name;
  return <div className="site" lang={lang} dir={lang==="ar"?"rtl":"ltr"}><Header lang={lang} collection={collection}/><main id="main-content" className="wrap catalogPage">
    <nav className="breadcrumbs" aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}><a href={home(lang)}>{lang==="ar"?"الرئيسية":"Home"}</a><span>/</span><a href={`${lang==="ar"?"/ar":""}/collections`}>{lang==="ar"?"الفئات":"Collections"}</a><span>/</span><span>{name}</span></nav>
    <div className="catalogHero"><span className="sectionKicker"><i/> {t.collectionsLabel}</span><h1>{name}</h1><p>{lang==="ar"?collection.descriptionAr:collection.description}</p><div className="catalogMeta">{items.length} {lang==="ar"?"منتجات":"products"} · {lang==="ar"?"تصنيع وتوريد من جدة، السعودية":"Manufacturing & supply from Jeddah, Saudi Arabia"}</div></div>
    <section><div className="sectionHeader"><div><span className="sectionKicker"><i/> {t.productsLabel}</span><h2>{t.productsInCollection}</h2></div></div><div className="productGrid">{items.map((p,i)=><a className="productTile" href={productUrl(lang,p.slug)} key={p.slug}>{p.images?.length?<div className="tileImage"><img loading="lazy" decoding="async" width="720" height="520" src={productThumbnail(p.images[0])} alt={lang==="ar"?p.nameAr:p.name}/><span className="tileIndex">{String(i+1).padStart(2,"0")}</span></div>:<span className="tileIndex tileIndexText">{String(i+1).padStart(2,"0")}</span>}<div className="tileText"><span>{categoryLabel(lang,p.category)}</span><h3>{lang==="ar"?p.nameAr:p.name}</h3><p>{lang==="ar"?p.descriptionAr:p.description}</p><b>{t.view}</b></div></a>)}</div></section>
    <section className="collectionCta"><h2>{lang==="ar"?"تحتاج مقاسًا أو وصلة مخصصة؟":"Need a custom size or connection?"}</h2><p>{lang==="ar"?"أرسل نوع المعدة والقطر والرسومات والكمية، وسنراجع متطلبات التصنيع.":"Send your rig model, diameter, drawings and quantity so we can review the fabrication requirements."}</p><a className="primaryButton quotationButton" href={`${whatsapp}?text=${encodeURIComponent(lang==="ar"?`مرحبًا، أود الاستفسار عن فئة ${collection.nameAr}`:`Hello, I would like to inquire about the ${collection.name} collection`)}`}>{t.quote}</a></section>
  </main><Footer lang={lang}/></div>;
}


export function AboutPage({ lang }: { lang: Lang }) {
  const t=copy[lang];
  return <div className="site" lang={lang} dir={lang==="ar"?"rtl":"ltr"}><Header lang={lang} section="about"/><main id="main-content" className="wrap infoPage">
    <nav className="breadcrumbs" aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}><a href={home(lang)}>{lang==="ar"?"الرئيسية":"Home"}</a><span>/</span><span>{lang==="ar"?"من نحن":"About"}</span></nav>
    <section className="infoHero"><span className="sectionKicker"><i/> {t.aboutLabel}</span><h1>{lang==="ar"?"معدات ومكونات حفر تُجهز لمتطلبات المشروع.":"Foundation drilling equipment built around project requirements."}</h1><p>{t.about}</p></section>
    <section className="infoStats"><article><b>{lang === "ar" ? "جدة" : "Jeddah"}</b><span>{lang === "ar" ? "التوريد والتصنيع" : "Supply and fabrication"}</span></article><article><b>{lang === "ar" ? "رسومات" : "Drawings"}</b><span>{lang === "ar" ? "مراجعة المتطلبات الفنية" : "Technical requirement review"}</span></article><article><b>{lang === "ar" ? "وصلات" : "Connections"}</b><span>{lang === "ar" ? "تأكيد الأبعاد والتوافق" : "Dimensions and fit confirmation"}</span></article></section>
    <section className="infoSplit"><div><span className="sectionKicker"><i/> {t.capabilitiesLabel}</span><h2>{t.capabilitiesTitle}</h2></div><div className="capList">{t.capabilities.map(([n,title,detail])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div></section>
    <section className="collectionCta"><h2>{lang==="ar"?"لديك رسم أو مقاس خاص؟":"Have a drawing or custom requirement?"}</h2><p>{lang==="ar"?"أرسل تفاصيل المشروع ونوع المعدة والمقاس والكمية لفريقنا لمراجعة المتطلبات.":"Send the project details, rig model, required dimensions and quantity for technical review."}</p><a className="primaryButton quotationButton" href={`${whatsapp}?text=${encodeURIComponent(lang==="ar"?"مرحبًا، لدي متطلبات تصنيع خاصة وأود مناقشتها.":"Hello, I have a custom fabrication requirement I would like to discuss.")}`}>{t.quote}</a></section>
  </main><Footer lang={lang}/></div>;
}

export function ContactPage({ lang }: { lang: Lang }) {
  const t=copy[lang];
  return <div className="site" lang={lang} dir={lang==="ar"?"rtl":"ltr"}><Header lang={lang} section="contact"/><main id="main-content" className="wrap infoPage">
    <nav className="breadcrumbs" aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}><a href={home(lang)}>{lang==="ar"?"الرئيسية":"Home"}</a><span>/</span><span>{t.nav[3]}</span></nav>
    <section className="infoHero"><span className="sectionKicker"><i/> {t.contactLabel}</span><h1>{t.contactTitle}</h1><p>{t.contactIntro}</p></section>
    <QuoteBuilder lang={lang}/>
    <section className="contactCards"><InquiryLink lang={lang} channel="whatsapp"><span>01</span><h2>{t.whatsapp}</h2><p dir="ltr">{company.phoneDisplay}</p><b>{lang==="ar"?"ابدأ المحادثة":"Start conversation"}</b></InquiryLink><InquiryLink lang={lang} channel="email"><span>02</span><h2>{lang==="ar"?"البريد الإلكتروني":"Email"}</h2><p dir="ltr">{company.email}</p><b>{lang==="ar"?"افتح البريد الإلكتروني":"Open email"}</b></InquiryLink><article><span>03</span><h2>{t.address}</h2><p>{lang === "ar" ? company.addressAr : company.address}</p><b>{lang==="ar"?"جدة، السعودية":"Jeddah, Saudi Arabia"}</b></article></section>
    <section className="companyLegal"><div><span>{t.vat}</span><b>{company.vat}</b></div><div><span>{t.registration}</span><b>{company.cr}</b></div></section>
  </main><Footer lang={lang}/></div>;
}


export function CapabilitiesPage({ lang }: { lang: Lang }) {
  const t=copy[lang];
  return <div className="site" lang={lang} dir={lang==="ar"?"rtl":"ltr"}><Header lang={lang} section="capabilities"/><main id="main-content" className="wrap infoPage">
    <nav className="breadcrumbs" aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}><a href={home(lang)}>{lang==="ar"?"الرئيسية":"Home"}</a><span>/</span><span>{t.nav[2]}</span></nav>
    <section className="infoHero"><span className="sectionKicker"><i/> {t.capabilitiesLabel}</span><h1>{t.capabilitiesTitle}</h1><p>{lang==="ar"?"نركز على أدوات حفر الأساسات والمكونات المصنعة ومستلزمات الحفر مع مراجعة المقاسات والوصلات ومتطلبات المشروع قبل التصنيع أو التوريد.":"We focus on foundation drilling tools, fabricated components and drilling accessories, with dimensions, connections and project requirements reviewed before fabrication or supply."}</p></section>
    <section className="capabilityDetailGrid">{t.capabilities.map(([n,title,detail],i)=><article key={n}><span>{n}</span><h2>{title}</h2><p>{detail}</p><ul>{(i===0?[lang==="ar"?"أوجرات وبكيتات وكور بارل":"Augers, buckets and core barrels",lang==="ar"?"تكوينات وأقطار حسب المشروع":"Project-specific configurations and diameters",lang==="ar"?"مراجعة الوصلة والتوافق":"Connection and compatibility review"]:i===1?[lang==="ar"?"تصنيع من الرسومات أو العينات":"Fabrication from drawings or samples",lang==="ar"?"مقاسات ووصلات مخصصة":"Custom dimensions and interfaces",lang==="ar"?"مراجعة متطلبات الاستخدام":"Application requirement review"]:[lang==="ar"?"مواسير تغليف ومكونات":"Casing and components",lang==="ar"?"قطع تآكل واستبدال":"Wear and replacement parts",lang==="ar"?"مطابقة الموديل قبل الطلب":"Model matching before ordering"]).map(x=><li key={x}>{x}</li>)}</ul></article>)}</section>
    <section className="collectionCta"><h2>{lang==="ar"?"أرسل متطلبات مشروعك للمراجعة":"Send your project requirements for review"}</h2><p>{lang==="ar"?"نوع المعدة، القطر، طبيعة التربة، الكمية والرسومات تساعدنا على تجهيز استفسار أدق.":"Rig model, diameter, ground condition, quantity and drawings help us prepare a more accurate quotation."}</p><a className="primaryButton quotationButton" href={`${lang==="ar"?"/ar":""}/contact`}>{t.quote}</a></section>
  </main><Footer lang={lang}/></div>;
}

export function FAQPage({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const questions = ar ? [
    ["ما المعلومات اللازمة لطلب عرض سعر؟", "أرسل اسم المنتج، نوع المعدة وموديلها، القطر والأبعاد، نوع الوصلة، الكمية، وطبيعة التربة. أرفق الرسم الفني أو صورة القطعة إن توفرت."],
    ["هل يمكن طلب أبعاد أو وصلات خاصة؟", "يمكن إرسال الرسم أو العينة للمراجعة. نؤكد إمكانية التصنيع والأبعاد والوصلة بعد دراسة المتطلبات الفنية."],
    ["هل جميع الموديلات المعروضة متوفرة فورًا؟", "الموديلات المعروضة خيارات للاستفسار. يُرجى تأكيد المواصفات والتوفر ومدة التوريد عند طلب عرض السعر."],
    ["كيف أتأكد من توافق القطعة مع المعدة؟", "أرسل موديل المعدة ومقاسات الوصلة وأرقام القطع إن وجدت. نراجع الأبعاد والتكوين قبل تأكيد العرض."],
    ["كيف أرسل ملف الرسم الفني؟", "تواصل معنا عبر واتساب من صفحة الاتصال، ثم أرفق الملف أو الصورة داخل المحادثة."],
  ] : [
    ["What do I need for a quotation?", "Send the product name, rig make and model, diameter and dimensions, connection, quantity, and ground condition. Include a drawing or component photo if available."],
    ["Can I request custom dimensions or connections?", "Send your drawing or sample for review. We confirm manufacturing scope, dimensions, and connection after checking the technical requirements."],
    ["Are all listed models immediately available?", "Listed models are inquiry options. Please confirm specifications, availability, and lead time when requesting a quotation."],
    ["How do I confirm compatibility with my rig?", "Share the rig model, connection dimensions, and part numbers if available. We review the fit and configuration before confirming the offer."],
    ["How can I send a technical drawing?", "Contact us through WhatsApp on the contact page, then attach the file or photo in the conversation."],
  ];
  return <div className="site" lang={lang} dir={ar ? "rtl" : "ltr"}><Header lang={lang} section="faq"/><main id="main-content" className="wrap infoPage">
    <nav className="breadcrumbs" aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}><a href={home(lang)}>{ar?"الرئيسية":"Home"}</a><span>/</span><span>{ar?"الأسئلة الشائعة":"FAQ"}</span></nav>
    <section className="infoHero"><span className="sectionKicker"><i/>{ar?"معلومات قبل الطلب":"BEFORE YOU ORDER"}</span><h1>{ar?"الأسئلة الشائعة":"Frequently asked questions"}</h1><p>{ar?"إجابات عملية تساعدك على تجهيز طلب عرض السعر وتأكيد توافق معدات الحفر.":"Practical answers to help you prepare a quotation request and confirm drilling equipment compatibility."}</p></section>
    <section className="faqGrid faqPageGrid">{questions.map(([question, answer])=><article key={question}><h2>{question}</h2><p>{answer}</p></article>)}</section>
    <section className="collectionCta"><h2>{ar?"هل لديك متطلبات خاصة؟":"Have a specific requirement?"}</h2><p>{ar?"أرسل الرسم والمقاسات لفريقنا في جدة.":"Send your drawing and dimensions to our team in Jeddah."}</p><a className="primaryButton" href={`${ar?"/ar":""}/contact`}>{ar?"جهّز طلب عرض السعر":"Prepare a quotation request"}</a></section>
  </main><Footer lang={lang}/></div>;
}

export function PrivacyPage({ lang }: { lang: Lang }) {
  const ar=lang==="ar";
  const sections = ar ? [
    ["المعلومات التي ترسلها", "عند التواصل معنا عبر الهاتف أو واتساب قد تزودنا باسمك وبيانات الاتصال ومعلومات مشروعك والرسومات والمواصفات التي تختار إرسالها."],
    ["استخدام المعلومات", "نستخدم هذه المعلومات للرد على الاستفسارات ودراسة المتطلبات الفنية وإعداد عروض الأسعار والتواصل بخصوص طلبك."],
    ["قياس استخدام الموقع", "يستخدم الموقع Google Analytics لقياس الزيارات والنقرات على وسائل الاستفسار. نسجل قناة الاتصال ولغة الصفحة ورمز المنتج عند توفره، ولا نرسل نص الطلب أو مدينة التسليم أو الرسومات ضمن هذه الأحداث. النقر يعبر عن نية التواصل ولا يثبت إرسال رسالة أو إتمام بيع."],
    ["خدمات خارجية", "روابط واتساب تفتح خدمة خارجية تخضع لسياسات مزودها. قد يستقبل مزود الاستضافة سجلات تقنية لازمة لتقديم الموقع وحمايته."],
    ["التواصل وطلبات الخصوصية", "للاستفسار عن المعلومات التي أرسلتها أو لطلب تصحيحها أو حذفها، تواصل معنا باستخدام الرقم الموجود في صفحة الاتصال."],
  ] : [
    ["Information you send", "When you contact us by phone or WhatsApp, you may provide your name, contact details, project requirements, drawings, and specifications that you choose to share."],
    ["How we use it", "We use this information to answer inquiries, review technical requirements, prepare quotations, and communicate about your request."],
    ["Website measurement", "The site uses Google Analytics to measure visits and inquiry contact clicks. These events include contact channel, page language and product identifier where available; they exclude inquiry text, delivery city and drawings. A click indicates inquiry intent, not a sent message or sale."],
    ["External services", "WhatsApp links open an external service governed by its provider's policies. Our hosting provider may process technical logs required to serve and protect the website."],
    ["Privacy requests", "To ask about information you have sent, or request its correction or deletion, contact us using the number on our contact page."],
  ];
  return <div className="site" lang={lang} dir={ar?"rtl":"ltr"}><Header lang={lang} section="privacy"/><main id="main-content" className="wrap infoPage">
    <nav className="breadcrumbs" aria-label={lang === "ar" ? "مسار التنقل" : "Breadcrumb"}><a href={home(lang)}>{ar?"الرئيسية":"Home"}</a><span>/</span><span>{ar?"الخصوصية":"Privacy"}</span></nav>
    <section className="infoHero"><span className="sectionKicker"><i/>{ar?"معلومات الموقع":"SITE INFORMATION"}</span><h1>{ar?"الخصوصية":"Privacy"}</h1><p>{ar?"نوضح هنا كيف نتعامل مع المعلومات التي تختار مشاركتها عند الاستفسار عن منتجاتنا.":"This page explains how we handle information you choose to share when inquiring about our products."}</p></section>
    <section className="policyContent">{sections.map(([title,body])=><article key={title}><h2>{title}</h2><p>{body}</p></article>)}</section>
    <section className="collectionCta"><h2>{ar?"تواصل معنا":"Contact us"}</h2><a className="primaryButton" href={`${ar?"/ar":""}/contact`}>{ar?"صفحة الاتصال":"Contact page"}</a></section>
  </main><Footer lang={lang}/></div>;
}
