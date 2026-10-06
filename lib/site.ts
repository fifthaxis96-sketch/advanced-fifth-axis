export type Product = {
  slug: string;
  name: string;
  nameAr: string;
  category: string;
  description: string;
  descriptionAr: string;
  variants: string[];
  images?: string[];
  visualNote?: string;
  visualNoteAr?: string;
};

// Product families and model names transcribed from the lineup supplied by the owner.
// A model name is an inquiry option, not a confirmed stock or compatibility claim.
export const products: Product[] = [
  {
  "slug": "drilling-bucket-helical-springs",
  "name": "Drilling Bucket Helical Springs",
  "nameAr": "نوابض حلزونية لبكيتات الحفر",
  "category": "Wear Parts",
  "description": "Replacement helical springs for drilling buckets used in foundation drilling. Share the bucket model, spring outside diameter, wire diameter, free length, end configuration and required quantity to confirm the correct replacement.",
  "descriptionAr": "نوابض حلزونية بديلة لبكيتات الحفر المستخدمة في أعمال الأساسات. أرسل موديل البكيت والقطر الخارجي للنابض وقطر السلك والطول الحر وشكل الأطراف والكمية المطلوبة لتأكيد القطعة المناسبة.",
  "variants": [],
  "images": [
    "/products/drilling-bucket-helical-springs.webp"
  ]
},
  {
    slug: "roller-bits", name: "Roller Bits", nameAr: "رؤوس الحفر الدوارة", category: "Cutting Tools",
    description: "Roller-bit models for foundation drilling inquiries.",
    descriptionAr: "موديلات رؤوس الحفر الدوارة للاستفسارات الخاصة بحفر الأساسات.",
    variants: ["MH-1 Classic", "MH-2 Traditional", "MH-3 Flagship", "MH-3R Holder type", "MH-3B Replaceable", "MH-3H 12-1/4\"", "MH-3P Reinforced"],
    images: ["/products/single-roller-bit-500x500.webp"],
  },
  {
    slug: "center-pilot-attachment-holder", name: "Center Pilot Attachment & Holder", nameAr: "ملحق السن المركزي وحامله", category: "Wear Parts",
    description: "Center pilot attachment and holder assembly shown with a fastening bolt and nut. Confirm pilot dimensions, mounting interface and fit for the drilling tool before ordering.",
    descriptionAr: "مجموعة ملحق السن المركزي وحامله كما تظهر مع مسمار التثبيت والصامولة. يُرجى تأكيد أبعاد السن المركزي وطريقة التثبيت والتوافق مع أداة الحفر قبل الطلب.",
    variants: [], images: ["/products/center-pilot-attachment-holder.webp"],
  },
  {
    slug: "bfz70-tooth", name: "BFZ70 Tooth", nameAr: "سن حفر BFZ70", category: "Wear Parts",
    description: "BFZ70 cutting tooth shown in the supplied product photo. Confirm fit, dimensions and the matching holder before ordering.",
    descriptionAr: "سن حفر BFZ70 كما يظهر في صورة المنتج المقدمة. يُرجى تأكيد التوافق والأبعاد والحامل المطابق قبل الطلب.",
    variants: [], images: ["/products/bfz70-tooth.webp"],
  },
  {
    slug: "bfz70-holder", name: "BFZ70 Holder", nameAr: "حامل سن BFZ70", category: "Wear Parts",
    description: "BFZ70 tooth holder shown in the supplied product photo. Confirm mounting dimensions and tooth compatibility before ordering.",
    descriptionAr: "حامل سن BFZ70 كما يظهر في صورة المنتج المقدمة. يُرجى تأكيد أبعاد التثبيت وتوافق السن قبل الطلب.",
    variants: [], images: ["/products/bfz70-holder.webp"],
  },
  {
    slug: "c31hd-tooth", name: "C31HD Tooth", nameAr: "سن حفر C31HD", category: "Wear Parts",
    description: "C31HD cutting tooth shown in the supplied product photograph. Confirm the shank, matching holder and required quantity before ordering.",
    descriptionAr: "سن حفر C31HD كما يظهر في صورة المنتج المقدمة. يُرجى تأكيد مقاس الساق والحامل المطابق والكمية المطلوبة قبل الطلب.",
    variants: [], images: ["/products/c31hd-tooth.webp"],
  },
  {
    slug: "c30-square-holder", name: "C30 Square Holder", nameAr: "حامل سن C30 مربع", category: "Wear Parts",
    description: "C30 square holder shown in the supplied product photograph. Confirm the mounting dimensions and tooth compatibility before ordering.",
    descriptionAr: "حامل سن C30 المربع كما يظهر في صورة المنتج المقدمة. يُرجى تأكيد أبعاد التثبيت وتوافق السن قبل الطلب.",
    variants: [], images: ["/products/c30-square-holder-20260927.webp"],
  },
  {
    slug: "c30-round-holder", name: "C30 Round Holder", nameAr: "حامل سن C30 دائري", category: "Wear Parts",
    description: "C30 round holder shown in the supplied product photograph. Confirm the mounting dimensions and tooth compatibility before ordering.",
    descriptionAr: "حامل سن C30 الدائري كما يظهر في صورة المنتج المقدمة. يُرجى تأكيد أبعاد التثبيت وتوافق السن قبل الطلب.",
    variants: [], images: ["/products/c30-round-holder.webp"],
  },
  {
    slug: "b-47k22h-tooth", name: "B-47K22H Cutting Tooth", nameAr: "سن حفر B-47K22H", category: "Wear Parts",
    description: "B-47K22H cutting tooth shown in the supplied product photograph. Confirm shank size, matching holder and operating application before ordering.",
    descriptionAr: "سن حفر B-47K22H كما يظهر في صورة المنتج المقدمة. يُرجى تأكيد مقاس الساق والحامل المطابق والاستخدام المطلوب قبل الطلب.",
    variants: [], images: ["/products/b-47k22h-tooth.webp"],
  },
  {
    slug: "hq-68-95-holder", name: "HQ-68/95 Holder", nameAr: "حامل سن HQ-68/95", category: "Wear Parts",
    description: "HQ-68/95 tooth holder shown in the supplied product photograph. Confirm socket dimensions, mounting method and tooth compatibility before ordering.",
    descriptionAr: "حامل سن HQ-68/95 كما يظهر في صورة المنتج المقدمة. يُرجى تأكيد أبعاد التجويف وطريقة التثبيت وتوافق السن قبل الطلب.",
    variants: [], images: ["/products/hq-68-95-holder.webp"],
  },
  {
    slug: "hq-78-95-holder", name: "HQ-78/95 Holder", nameAr: "حامل سن HQ-78/95", category: "Wear Parts",
    description: "HQ-78/95 tooth holder shown in the supplied product photograph. Confirm socket dimensions, mounting method and tooth compatibility before ordering.",
    descriptionAr: "حامل سن HQ-78/95 كما يظهر في صورة المنتج المقدمة. يُرجى تأكيد أبعاد التجويف وطريقة التثبيت وتوافق السن قبل الطلب.",
    variants: [], images: ["/products/hq-78-95-holder.webp"],
  },
  {
    slug: "b43-holder", name: "B43 Holder", nameAr: "حامل سن B43", category: "Wear Parts",
    description: "B43 tooth holder shown in the supplied product photograph. Confirm tooth fit, dimensions and installation details before ordering.",
    descriptionAr: "حامل سن B43 كما يظهر في صورة المنتج المقدمة. يُرجى تأكيد توافق السن والأبعاد وتفاصيل التركيب قبل الطلب.",
    variants: [], images: ["/products/b43-holder.webp"],
  },
  {
    slug: "rock-augers", name: "Rock Augers", nameAr: "أوجرات حفر الصخور", category: "Foundation Tools",
    description: "Straight and conical rock augers for rotary foundation drilling with bullet teeth. Standard Kelly box: 200×200 mm. Confirm the diameter, flight geometry, pilot and rig interface for each order.",
    descriptionAr: "أوجرات صخور مستقيمة ومخروطية للحفر الدوار بأسنان صخرية. مقاس كيلي بوكس القياسي 200×200 مم. يُرجى تأكيد القطر وتصميم الحلزون والسن المركزي والتوافق مع المعدة لكل طلب.",
    variants: ["Straight Rock Auger", "Conical Rock Auger", "Rock Auger Pilot Bit / Pilot Head"],
    images: ["/products/rock-augers-white-background.webp"],
  },
  {
    slug: "drilling-buckets", name: "Rock Buckets", nameAr: "بكيتات حفر الصخور", category: "Foundation Tools",
    description: "Rock drilling buckets with cutting teeth for foundation work. Standard Kelly box: 200×200 mm. Confirm the diameter, teeth, shell and rig interface for each order.",
    descriptionAr: "بكيتات حفر الصخور بأسنان قطع لأعمال الأساسات. مقاس كيلي بوكس القياسي 200×200 مم. يُرجى تأكيد القطر والأسنان وجسم البكيت والتوافق مع المعدة لكل طلب.",
    variants: ["Rock bucket with bullet teeth"],
    images: ["/products/drilling-buckets-white-background.webp"],
  },
  {
    slug: "cleaning-buckets", name: "Cleaning Bucket", nameAr: "بكيت تنظيف قاع الحفر", category: "Foundation Tools",
    description: "Cleaning bucket for clearing loose material from the bottom of foundation boreholes. Standard Kelly box: 200×200 mm. Confirm bucket diameter, bottom configuration and rig interface before ordering.",
    descriptionAr: "بكيت تنظيف لإزالة المواد المفككة من قاع حفرة الأساسات. مقاس كيلي بوكس القياسي 200×200 مم. يُرجى تأكيد قطر البكيت وتصميم القاع والتوافق مع المعدة قبل الطلب.",
    variants: [], images: ["/products/cleaning-bucket-white-background.webp"],
  },
  {
    slug: "wire-tremie-pipe", name: "Wire Tremie Pipe Set", nameAr: "مجموعة مواسير تريمي واير", category: "Foundation Tools",
    description: "Wire tremie pipe set for foundation concrete placement in 8-inch and 10-inch sizes. The full set includes a hopper, lift and suspension jig. Confirm the pipe length, connections and set configuration before ordering.",
    descriptionAr: "مجموعة مواسير تريمي واير لصب خرسانة الأساسات بمقاسي 8 و10 بوصات. تشمل المجموعة الكاملة قمع الصب (Hopper) وقطعة الرفع (Lift) وحامل التعليق (Suspension Jig). يُرجى تأكيد طول المواسير والوصلات وتكوين المجموعة قبل الطلب.",
    variants: ["8-inch full set — pipe, hopper, lift & suspension jig", "10-inch full set — pipe, hopper, lift & suspension jig"],
    images: ["/products/wire-tremie-pipe-set.webp"],
  },
  {
    slug: "core-barrels", name: "Core Barrels", nameAr: "كور بارل", category: "Foundation Tools",
    description: "Core barrels for cutting an annular ring in rock and hard formations, with bullet teeth or roller bits. Standard Kelly box: 200×200 mm. Confirm the rig interface before ordering.",
    descriptionAr: "كور بارل لقطع حلقة محيطية في الصخور والطبقات الصلبة، بخيارات أسنان مخروطية أو رولر بت. مقاس كيلي بوكس القياسي 200×200 مم. يُرجى تأكيد التوافق مع المعدة قبل الطلب.",
    variants: ["Core barrel with bullet teeth", "Core barrel with roller bit"],
    images: ["/products/core-barrels-white-background.webp"],
  },
  {
    slug: "casing", name: "Casing & Components", nameAr: "مواسير التغليف وملحقاتها", category: "Casing",
    description: "Foundation drilling casing and related components for bore support and casing operations. Diameter, wall arrangement, joint type, length and tool interface are confirmed for the project before supply.",
    descriptionAr: "مواسير تغليف ومكونات مرتبطة بحفر الأساسات لدعم الحفرة وعمليات التغليف. يتم تأكيد القطر وتركيب الجدار ونوع الوصلة والطول وواجهة الأداة حسب المشروع قبل التوريد.",
    variants: ["Double wall casing", "Casing drive", "Casing shoe"],
    images: ["/products/owner-blue-toothed-casing.webp"],
  },
  {
    slug: "casing-twister", name: "Casing Twister", nameAr: "أداة تدوير مواسير التغليف", category: "Casing",
    description: "Casing twister shown in the supplied product photo. Confirm casing diameter, connection details and drilling rig compatibility before ordering.",
    descriptionAr: "أداة تدوير مواسير التغليف كما تظهر في صورة المنتج المقدمة. يُرجى تأكيد قطر الماسورة وتفاصيل الوصلة والتوافق مع معدة الحفر قبل الطلب.",
    variants: [], images: ["/products/casing-twister.webp"],
  },
  {
    slug: "cfa", name: "CFA Augers", nameAr: "أوجرات الحفر المستمر", category: "Foundation Tools",
    description: "Continuous flight auger sections and configurations for foundation drilling applications. Diameter, length, flight pitch, center tube and connection are selected to suit the project and drilling system.",
    descriptionAr: "مقاطع وتكوينات أوجر الحفر المستمر لتطبيقات الأساسات. يتم اختيار القطر والطول وخطوة الحلزون والأنبوب المركزي والوصلة بما يناسب المشروع ونظام الحفر.",
    variants: ["Continuous flight auger"],
    images: ["/products/owner-continuous-flight-auger-coupling.webp", "/products/owner-continuous-flight-auger-flight.webp"],
  },
  {
    slug: "kelly-boxes", name: "Kelly Box & Adapter", nameAr: "كيلي بوكس ووصلة كيلي", category: "Drive Systems",
    description: "Heavy-duty square Kelly boxes for rotary drilling tools in 150×150, 200×200 and 250×250 mm, plus a Kelly adapter with a 250×250 mm female connection and a 200×200 mm male connection. The standard tool connection is 200×200 mm; confirm pin-hole layout, engagement length and rig interface before ordering.",
    descriptionAr: "كيلي بوكس مربع شديد التحمل لأدوات الحفر الدوار بمقاسات 150×150 و200×200 و250×250 مم، بالإضافة إلى وصلة كيلي بطرف أنثى 250×250 مم وطرف ذكر 200×200 مم. المقاس القياسي للأدوات 200×200 مم؛ يُرجى تأكيد فتحات التثبيت وطول التداخل والتوافق مع المعدة قبل الطلب.",
    variants: ["150×150 mm Kelly Box", "200×200 mm Kelly Box", "250×250 mm Kelly Box", "Kelly Adapter — 250×250 mm Female to 200×200 mm Male"],
    images: ["/products/kelly-boxes-white-background.webp", "/products/kelly-box-welded-steel.webp"],
  },
  {
    slug: "kelly-bars", name: "Kelly Bar Repair", nameAr: "إصلاح قضبان كيلي", category: "Drive Systems",
    description: "Repair services for interlocking and friction Kelly bars used on rotary drilling rigs. Share photos, dimensions, the rig model and details of the damage so the repair scope and compatibility can be assessed.",
    descriptionAr: "خدمات إصلاح قضبان كيلي التعشيق والاحتكاك لمعدات الحفر الدوار. أرسل الصور والأبعاد وموديل المعدة وتفاصيل التلف لتقييم نطاق الإصلاح والتوافق.",
    variants: ["Interlocking Kelly bar repair", "Friction Kelly bar repair"],
    images: ["/products/kelly-bar-repair.webp"],
  },
  {
    slug: "kelly-box-pins", name: "Kelly Box Pins", nameAr: "بنوز كيلي بوكس", category: "Drive Systems",
    description: "Kelly box pins in outside diameters of 50 or 60 mm and corresponding lengths of 320 or 400 mm. Confirm the pin hole position and rig/tool interface before ordering.",
    descriptionAr: "بنوز كيلي بوكس بقطر خارجي 50 أو 60 مم وطول مطابق 320 أو 400 مم. يُرجى تأكيد موضع فتحة البن والتوافق مع المعدة والأداة قبل الطلب.",
    variants: ["OD 50 mm × Length 320 mm", "OD 60 mm × Length 400 mm"], images: ["/products/kelly-box-pins-white-background.webp"],
  },
  {
    slug: "pile-testing-reaction-beam", name: "Pile Testing Reaction Beam", nameAr: "كمرة اختبار تحميل الأساسات", category: "Fabricated Components",
    description: "Fabricated reaction beam for pile load testing inquiries. Configuration, length, connections and load rating must be engineered and confirmed for the testing arrangement.",
    descriptionAr: "كمرة مصنّعة للاستفسارات الخاصة باختبار تحميل الأساسات. يتم تصميم وتأكيد التكوين والطول والوصلات والحمولة حسب نظام الاختبار.",
    variants: [], images: ["/products/pile-testing-reaction-beam-blue.webp"],
    visualNote: "Concept visualization based on the supplied site photo; confirm the fabrication design before ordering.",
    visualNoteAr: "تصور مرئي مبني على صورة الموقع المقدمة؛ يرجى تأكيد التصميم التصنيعي قبل الطلب.",
  },
  {
    slug: "customized-bentonite-water-tank", name: "Customized Bentonite & Water Tank", nameAr: "خزان بنتونيت ومياه حسب الطلب", category: "Fabricated Components",
    description: "Custom fabricated tank for bentonite slurry or water handling on foundation projects. Confirm required capacity, dimensions, lifting points, access and pipe connections for each project.",
    descriptionAr: "خزان يُصنع حسب الطلب لمناولة سائل البنتونيت أو المياه في مشاريع الأساسات. يُرجى تأكيد السعة والأبعاد ونقاط الرفع وفتحات الوصول ووصلات الأنابيب لكل مشروع.",
    variants: [], images: ["/products/customized-bentonite-water-tank.webp"],
  },
  {
    slug: "bi-directional-static-axial-load-plate", name: "Bi-Directional Static Axial Load Plate", nameAr: "صفيحة اختبار التحميل المحوري الساكن ثنائي الاتجاه", category: "Fabricated Components",
    description: "Custom-made load plate for bi-directional static axial load testing. Plate diameter, thickness, openings and layout are manufactured to confirmed project drawings. Include the required dimensions, testing arrangement and design requirements with your quotation request.",
    descriptionAr: "صفيحة تُصنع حسب الطلب لاختبار التحميل المحوري الساكن ثنائي الاتجاه. يتم تصنيع القطر والسماكة والفتحات وتوزيعها وفق رسومات المشروع المعتمدة. أرفق الأبعاد المطلوبة ونظام الاختبار ومتطلبات التصميم مع طلب عرض السعر.",
    variants: ["Custom sizes"], images: ["/products/bi-directional-static-axial-load-plate-1.webp", "/products/bi-directional-static-axial-load-plate-2.webp", "/products/bi-directional-static-axial-load-plate-3.webp"],
  },
];

export const company = {
  name: "Advanced Fifth Axis",
  phone: "+966559036552",
  phoneDisplay: "055 903 6552",
  email: "fifthaxis96@gmail.com",
  address: "Al Muftakira Street 4474, Jeddah Industrial, Saudi Arabia",
  vat: "310463296800003",
  cr: "4030336147",
};

export type Collection = {
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  categories: string[];
};

export const collections: Collection[] = [
  { slug: "foundation-tools", name: "Foundation Drilling Tools", nameAr: "أدوات حفر الأساسات", description: "Augers, drilling buckets, core barrels and continuous-flight tools for piling and foundation drilling projects.", descriptionAr: "أوجرات وبكيتات وكور بارل وأدوات الحفر المستمر لمشاريع حفر الأساسات.", categories: ["Foundation Tools"] },
  { slug: "wear-parts", name: "Cutting & Wear Parts", nameAr: "أسنان وقطع التآكل", description: "Cutting tools, teeth, holders and replaceable wear components for foundation drilling equipment.", descriptionAr: "أدوات قطع وأسنان وحوامل وقطع تآكل قابلة للاستبدال لمعدات حفر الأساسات.", categories: ["Cutting Tools", "Wear Parts"] },
  { slug: "casing", name: "Casing & Components", nameAr: "مواسير التغليف ومكوناتها", description: "Casing sections, casing components and related solutions for foundation drilling applications.", descriptionAr: "مواسير تغليف ومكوناتها وحلول مرتبطة بتطبيقات حفر الأساسات.", categories: ["Casing"] },
  { slug: "drive-systems", name: "Kelly & Drive Systems", nameAr: "أنظمة كيلي ونقل الحركة", description: "Kelly boxes and adapters for connecting rotary drilling rigs to foundation tools, plus Kelly bar repair services.", descriptionAr: "كيلي بوكس ووصلات لربط معدات الحفر الدوار بأدوات الأساسات، بالإضافة إلى خدمات إصلاح قضبان كيلي.", categories: ["Drive Systems"] },
  { slug: "fabricated-components", name: "Custom Fabricated Components", nameAr: "مكونات مصنعة حسب الطلب", description: "Heavy steel fabricated components produced to confirmed drawings, dimensions and project requirements.", descriptionAr: "مكونات فولاذية ثقيلة تُصنع حسب الرسومات والأبعاد ومتطلبات المشروع المؤكدة.", categories: ["Fabricated Components"] },
];

export const productsForCollection = (collection: Collection) =>
  products.filter((product) => collection.categories.includes(product.category));


export const collectionForProduct = (product: Product) =>
  collections.find((collection) => collection.categories.includes(product.category));

export const relatedProducts = (product: Product, limit = 3) =>
  products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, limit);
