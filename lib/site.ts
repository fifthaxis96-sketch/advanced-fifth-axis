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
    slug: "roller-bits", name: "Roller Bits", nameAr: "رؤوس الحفر الدوارة", category: "Cutting Tools",
    description: "Roller-bit models for foundation drilling inquiries.",
    descriptionAr: "موديلات رؤوس الحفر الدوارة للاستفسارات الخاصة بحفر الأساسات.",
    variants: ["MH-1 Classic", "MH-2 Traditional", "MH-3 Flagship", "MH-3R Holder type", "MH-3B Replaceable", "MH-3H 12-1/4\"", "MH-3P Reinforced"],
  },
  {
    slug: "bullet-teeth", name: "Bullet Teeth & Holders", nameAr: "أسنان الحفر المخروطية وحواملها", category: "Wear Parts",
    description: "Bullet teeth and holder model names from our supplied lineup.",
    descriptionAr: "موديلات أسنان الحفر المخروطية وحواملها وفق القائمة المقدمة.",
    variants: ["B47K22H", "C31HD", "M50-22x27S", "M60-22x27", "69-95 Holder", "78-95 Holder", "B43 Holder", "C30 Holder"],
    images: ["/products/bullet-teeth-white-background.webp"],
  },
  {
    slug: "bauer-teeth", name: "Bauer Teeth", nameAr: "أسنان باور", category: "Wear Parts",
    description: "Bauer tooth model names shown in the supplied reference.",
    descriptionAr: "موديلات أسنان باور الواردة في المرجع المقدم.",
    variants: ["BFZ70", "BFZ72", "BFZ80"],
  },
  {
    slug: "bucket-teeth", name: "Bucket Teeth", nameAr: "أسنان بكيتات الحفر", category: "Wear Parts",
    description: "Replaceable drilling-bucket teeth for foundation work. Confirm the tooth profile, adapter or holder interface, quantity and intended operating conditions before ordering.",
    descriptionAr: "أسنان بكيتات حفر قابلة للاستبدال لأعمال الأساسات. يرجى تأكيد شكل السن وواجهة المحول أو الحامل والكمية وظروف التشغيل المطلوبة قبل الطلب.",
    variants: ["V20", "25T", "25RC-12"],
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
    slug: "cfa", name: "CFA Augers", nameAr: "أوجرات الحفر المستمر", category: "Foundation Tools",
    description: "Continuous flight auger sections and configurations for foundation drilling applications. Diameter, length, flight pitch, center tube and connection are selected to suit the project and drilling system.",
    descriptionAr: "مقاطع وتكوينات أوجر الحفر المستمر لتطبيقات الأساسات. يتم اختيار القطر والطول وخطوة الحلزون والأنبوب المركزي والوصلة بما يناسب المشروع ونظام الحفر.",
    variants: ["Continuous flight auger"],
    images: ["/products/owner-continuous-flight-auger-coupling.webp", "/products/owner-continuous-flight-auger-flight.webp"],
  },
  {
    slug: "kelly-boxes", name: "Kelly Boxes", nameAr: "كيلي بوكس", category: "Drive Systems",
    description: "Heavy-duty square Kelly boxes for rotary drilling tools in 150×150, 200×200 and 250×250 mm. The standard tool connection is 200×200 mm; confirm pin-hole layout and rig interface before ordering.",
    descriptionAr: "كيلي بوكس مربع شديد التحمل لأدوات الحفر الدوار بمقاسات 150×150 و200×200 و250×250 مم. المقاس القياسي للأدوات 200×200 مم؛ يُرجى تأكيد فتحات التثبيت والتوافق مع المعدة قبل الطلب.",
    variants: ["150×150 mm Kelly Box", "200×200 mm Kelly Box", "250×250 mm Kelly Box"],
    images: ["/products/kelly-boxes-white-background.webp"],
  },
  {
    slug: "kelly-bars", name: "Kelly Bars", nameAr: "قضبان كيلي", category: "Drive Systems",
    description: "Interlocking and friction Kelly bar solutions for rotary drilling rigs. Section geometry, length, locking arrangement, drive interfaces and rig compatibility are confirmed for each project.",
    descriptionAr: "حلول قضبان كيلي التعشيق والاحتكاك لمعدات الحفر الدوار. يتم تأكيد مقاطع القضيب والطول ونظام التعشيق وواجهات الحركة والتوافق مع المعدة لكل مشروع.",
    variants: ["Interlocking Kelly bar", "Friction Kelly bar"],
  },
  {
    slug: "rectangular-drilling-wear-component", name: "Rectangular Drilling Wear Component", nameAr: "قطعة تآكل حفر مستطيلة", category: "Wear Parts",
    description: "Rectangular steel wear component shown with a central bore and a lower shank. Confirm fit and dimensions before ordering.",
    descriptionAr: "قطعة تآكل فولاذية مستطيلة بفتحة وسطية وساق سفلية ظاهرتين. يرجى تأكيد الملاءمة والأبعاد قبل الطلب.",
    variants: [],
  },
  {
    slug: "drilling-wear-block", name: "Drilling Wear Block", nameAr: "كتلة تآكل للحفر", category: "Wear Parts",
    description: "Steel drilling wear component with a top bore and front slot as shown. Model and compatibility require confirmation.",
    descriptionAr: "قطعة تآكل فولاذية للحفر بفتحة علوية وشق أمامي كما في الصورة. يُرجى تأكيد الموديل والتوافق.",
    variants: [],
  },
  {
    slug: "carbide-insert-wear-component", name: "Rounded Steel Wear Component", nameAr: "قطعة تآكل فولاذية مستديرة", category: "Wear Parts",
    description: "Rounded steel wear component with visible gold-toned insert seats and a central opening. Confirm the exact application and dimensions before ordering.",
    descriptionAr: "قطعة تآكل فولاذية مستديرة مع مواضع إدخالات ظاهرة وفتحة مركزية. يرجى تأكيد الاستخدام والأبعاد قبل الطلب.",
    variants: [],
  },
  {
    slug: "pile-testing-reaction-beam", name: "Pile Testing Reaction Beam", nameAr: "كمرة اختبار تحميل الأساسات", category: "Fabricated Components",
    description: "Fabricated reaction beam for pile load testing inquiries. Configuration, length, connections and load rating must be engineered and confirmed for the testing arrangement.",
    descriptionAr: "كمرة مصنّعة للاستفسارات الخاصة باختبار تحميل الأساسات. يتم تصميم وتأكيد التكوين والطول والوصلات والحمولة حسب نظام الاختبار.",
    variants: [], images: ["/products/pile-testing-reaction-beam-blue.webp"],
    visualNote: "Concept visualization based on the supplied site photo; confirm the fabrication design before ordering.",
    visualNoteAr: "تصور مرئي مبني على صورة الموقع المقدمة؛ يرجى تأكيد التصميم التصنيعي قبل الطلب.",
  },
];

export const company = {
  name: "Advanced Fifth Axis",
  phone: "+966550071571",
  phoneDisplay: "055 007 1571",
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
  { slug: "drive-systems", name: "Kelly & Drive Systems", nameAr: "أنظمة كيلي ونقل الحركة", description: "Kelly bars, Kelly boxes and adapters for connecting rotary drilling rigs to foundation tools.", descriptionAr: "قضبان كيلي وكيلي بوكس ووصلات لربط معدات الحفر الدوار بأدوات الأساسات.", categories: ["Drive Systems"] },
  { slug: "fabricated-components", name: "Custom Fabricated Components", nameAr: "مكونات مصنعة حسب الطلب", description: "Heavy steel fabricated components produced to confirmed drawings, dimensions and project requirements.", descriptionAr: "مكونات فولاذية ثقيلة تُصنع حسب الرسومات والأبعاد ومتطلبات المشروع المؤكدة.", categories: ["Fabricated Components"] },
];

export const productsForCollection = (collection: Collection) =>
  products.filter((product) => collection.categories.includes(product.category));


export const collectionForProduct = (product: Product) =>
  collections.find((collection) => collection.categories.includes(product.category));

export const relatedProducts = (product: Product, limit = 3) =>
  products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, limit);
