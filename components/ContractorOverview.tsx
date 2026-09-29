import { Footer, Header } from "@/components/LocalizedSite";
type Lang = "en" | "ar";

const packages = {
  en: [
    {
      number: "01",
      title: "Foundation drilling tools",
      text: "Browse rock buckets, rock augers, cleaning buckets, core barrels and continuous flight augers for project-specific drilling requirements.",
      image: "/products/rock-augers-white-background.webp",
      alt: "Rock auger for foundation drilling",
      href: "/collections/foundation-tools",
      link: "Explore foundation tools",
    },
    {
      number: "02",
      title: "Casing and concrete placement",
      text: "Casing components and casing twister, plus wire tremie pipe sets listed in 8-inch and 10-inch options.",
      image: "/products/owner-blue-toothed-casing.webp",
      alt: "Foundation casing section",
      href: "/collections/casing",
      link: "Explore casing products",
    },
    {
      number: "03",
      title: "Kelly connections and drive systems",
      text: "Kelly boxes, adapters, pins and Kelly bar repair. Confirm connection geometry and machine interface for every order.",
      image: "/products/kelly-boxes-white-background.webp",
      alt: "Kelly box options",
      href: "/collections/drive-systems",
      link: "Explore Kelly systems",
    },
    {
      number: "04",
      title: "Cutting and wear parts",
      text: "C31HD and BFZ70 teeth, C30 holders, B-47K22H teeth, holder models, center pilot assemblies and roller bits.",
      image: "/products/c31hd-tooth.webp",
      alt: "C31HD foundation drilling tooth",
      href: "/collections/wear-parts",
      link: "Explore wear parts",
    },
    {
      number: "05",
      title: "Project-specific fabrication",
      text: "Customized bentonite and water tanks, pile testing reaction beams and other components reviewed against drawings and project requirements.",
      image: "/products/customized-bentonite-water-tank.webp",
      alt: "Customized bentonite and water tank",
      href: "/collections/fabricated-components",
      link: "Explore fabricated components",
    },
  ],
  ar: [
    {
      number: "01",
      title: "أدوات حفر الأساسات",
      text: "تصفح بكيتات الصخور وأوجرات الحفر وبكيتات التنظيف والكور بارل وأوجرات الحفر المستمر حسب متطلبات المشروع.",
      image: "/products/rock-augers-white-background.webp",
      alt: "أوجر صخور لحفر الأساسات",
      href: "/ar/collections/foundation-tools",
      link: "استعرض أدوات حفر الأساسات",
    },
    {
      number: "02",
      title: "مواسير التغليف وصب الخرسانة",
      text: "مواسير التغليف ومكوناتها وأداة تدوير المواسير، إضافة إلى مجموعات تريمي واير بالخيارات المدرجة 8 و10 بوصات.",
      image: "/products/owner-blue-toothed-casing.webp",
      alt: "ماسورة تغليف للأساسات",
      href: "/ar/collections/casing",
      link: "استعرض منتجات التغليف",
    },
    {
      number: "03",
      title: "وصلات كيلي وأنظمة نقل الحركة",
      text: "كيلي بوكس ووصلات وبنوز وخدمات إصلاح قضبان كيلي. يُرجى تأكيد شكل الوصلة والتوافق مع المعدة لكل طلب.",
      image: "/products/kelly-boxes-white-background.webp",
      alt: "خيارات كيلي بوكس",
      href: "/ar/collections/drive-systems",
      link: "استعرض أنظمة كيلي",
    },
    {
      number: "04",
      title: "أسنان وقطع التآكل",
      text: "أسنان C31HD وBFZ70، وحوامل C30، وأسنان B-47K22H، وموديلات الحوامل، ومجموعات السن المركزي ورؤوس الحفر الدوارة.",
      image: "/products/c31hd-tooth.webp",
      alt: "سن حفر أساسات C31HD",
      href: "/ar/collections/wear-parts",
      link: "استعرض قطع التآكل",
    },
    {
      number: "05",
      title: "تصنيع حسب متطلبات المشروع",
      text: "خزانات البنتونيت والمياه حسب الطلب، وكمرات رد الفعل لاختبار التحميل، ومكونات أخرى تُراجع وفق الرسومات ومتطلبات المشروع.",
      image: "/products/customized-bentonite-water-tank.webp",
      alt: "خزان بنتونيت ومياه حسب الطلب",
      href: "/ar/collections/fabricated-components",
      link: "استعرض المكونات المصنعة",
    },
  ],
};

export function ContractorOverview({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const items = packages[lang];
  const options = ar
    ? [
        ["مواسير تريمي واير", "8 و10 بوصات، مع القمع وقطعة الرفع وحامل التعليق للمجموعة الكاملة"],
        ["كيلي بوكس", "150×150 و200×200 و250×250 مم"],
        ["بنوز كيلي بوكس", "قطر خارجي 50 مم × طول 320 مم، أو قطر خارجي 60 مم × طول 400 مم"],
      ]
    : [
        ["Wire tremie pipe sets", "8-inch and 10-inch options; full set includes hopper, lift and suspension jig"],
        ["Kelly boxes", "150×150, 200×200 and 250×250 mm"],
        ["Kelly box pins", "50 mm OD × 320 mm length, or 60 mm OD × 400 mm length"],
      ];

  return (
    <div className="site contractorPage" lang={lang} dir={ar ? "rtl" : "ltr"}>
      <Header lang={lang} section="contractors" />
      <main id="main-content">
        <section className="contractorHero">
          <div className="wrap contractorHeroInner">
            <div>
              <span className="sectionKicker"><i />{ar ? "للمقاولين وفرق المشتريات" : "FOR CONTRACTORS & PROCUREMENT TEAMS"}</span>
              <h1>{ar ? "جهّز طلبك القادم لأعمال الأساسات." : "Prepare your next foundation drilling inquiry."}</h1>
              <p>{ar
                ? "استعرض أدوات الحفر ومواسير التغليف وقطع التآكل والمكونات المصنعة. أرسل متطلبات المشروع لنراجع التكوين والوصلة والمواصفات قبل عرض السعر."
                : "Explore drilling tools, casing, wear parts and fabricated components. Share your project requirements so we can review the configuration, interface and specifications before quotation."}</p>
              <div className="contractorActions">
                <a className="primaryButton" href={ar ? "/ar/contact#quote-builder" : "/contact#quote-builder"}>{ar ? "اطلب عرض سعر" : "Request a quotation"} ↗</a>
                <a className="outlineButton" href={ar ? "/ar/collections" : "/collections"}>{ar ? "تصفح التصنيفات" : "Browse collections"} ↗</a>
              </div>
            </div>
            <aside className="contractorFactBox">
              <span>{ar ? "خيارات موثقة في الكتالوج" : "OPTIONS LISTED IN THE CATALOG"}</span>
              <b>8″ / 10″</b>
              <p>{ar ? "مقاسات مجموعات تريمي واير" : "Wire tremie pipe set sizes"}</p>
              <hr />
              <b>150 / 200 / 250 mm</b>
              <p>{ar ? "مقاسات كيلي بوكس المدرجة" : "Listed Kelly box sizes"}</p>
            </aside>
          </div>
        </section>

        <section className="wrap contractorOptions">
          <div className="contractorSectionHead">
            <span className="sectionKicker"><i />{ar ? "خيارات المنتج" : "PRODUCT OPTIONS"}</span>
            <h2>{ar ? "مقاسات محددة، وتأكيد فني قبل الطلب." : "Listed sizes, with technical confirmation before ordering."}</h2>
            <p>{ar
              ? "هذه خيارات مدرجة للاستفسار وليست تأكيدًا للمخزون. يتم التحقق من التوفر والتوافق ومدة التوريد عند مراجعة طلب المشروع."
              : "These are catalog inquiry options, not a stock confirmation. Availability, compatibility and lead time are checked when reviewing the project request."}</p>
          </div>
          <div className="contractorOptionGrid">{options.map(([title, body]) => (
            <article key={title}><span>✓</span><div><h3>{title}</h3><p>{body}</p></div></article>
          ))}</div>
        </section>

        <section className="contractorPackages">
          <div className="wrap">
            <div className="contractorSectionHead">
              <span className="sectionKicker"><i />{ar ? "عائلات المنتجات" : "PRODUCT FAMILIES"}</span>
              <h2>{ar ? "حلول لمراحل مختلفة من تجهيز الموقع." : "Equipment for different stages of site preparation."}</h2>
              <p>{ar
                ? "انتقل مباشرة إلى التصنيف المناسب، ثم أرسل الموديل والمقاسات المطلوبة لفريقنا في جدة."
                : "Go to the relevant collection, then send the required model and dimensions to our team in Jeddah."}</p>
            </div>
            <div className="contractorPackageGrid">{items.map(item => (
              <article className="contractorPackageCard" key={item.number}>
                <div className="contractorPackageImage"><img src={item.image} alt={item.alt} loading="lazy" /></div>
                <div className="contractorPackageBody">
                  <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
                  <a href={item.href}>{item.link} <b aria-hidden="true">↗</b></a>
                </div>
              </article>
            ))}</div>
          </div>
        </section>

        <section className="wrap contractorChecklist">
          <div>
            <span className="sectionKicker"><i />{ar ? "لتسريع مراجعة الطلب" : "HELP US REVIEW YOUR REQUEST"}</span>
            <h2>{ar ? "أرسل تفاصيل المعدة والمشروع." : "Send the equipment and project details."}</h2>
            <p>{ar
              ? "أرفق الرسم أو صورة القطعة إن توفرت. نؤكد نطاق التوريد والمواصفات ومدة التوريد في عرض السعر."
              : "Attach a drawing or component photo if available. Supply scope, specifications and lead time are confirmed in the quotation."}</p>
          </div>
          <ul>{(ar
            ? ["نوع الأداة والموديل", "موديل المعدة ومقاس الوصلة", "القطر والأبعاد والكمية", "طبيعة التربة وموقع التسليم", "الرسم الفني أو صورة القطعة إن توفرت"]
            : ["Tool type and model", "Rig model and connection size", "Diameter, dimensions and quantity", "Ground conditions and delivery location", "Technical drawing or component photo, if available"]
          ).map(text => <li key={text}>{text}</li>)}</ul>
        </section>

        <section className="contractorQuoteBand">
          <div className="wrap">
            <div><span>{ar ? "Advanced Fifth Axis · جدة، المملكة العربية السعودية" : "Advanced Fifth Axis · Jeddah, Saudi Arabia"}</span>
              <h2>{ar ? "أرسل قائمة المنتجات أو الرسم للمراجعة." : "Send your product list or drawing for review."}</h2></div>
            <a className="primaryButton" href={ar ? "/ar/contact#quote-builder" : "/contact#quote-builder"}>{ar ? "ابدأ طلب عرض السعر" : "Start a quotation request"} ↗</a>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
