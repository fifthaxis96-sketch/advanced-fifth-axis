type Scene = { file: string; en: string; ar: string };
type Group = { en: {title: string; text: string}; ar: {title: string; text: string}; scenes: Scene[] };
export const fieldWorkGroups: Group[] = [
  {
    en: { title: "Foundation drilling beside a roadway", text: "Site photographs of a tracked drilling rig, drilling tools and reinforcement cage beside a roadway." },
    ar: { title: "حفر الأساسات بجانب الطريق", text: "صور ميدانية لآلة حفر مجنزرة وأدوات الحفر وقفص التسليح بجانب الطريق." },
    scenes: [
      {file: "roadway-foundation-rig-4079", en: "Tracked foundation drilling rig and vertical reinforcement cage beside a roadway", ar: "آلة حفر أساسات مجنزرة وقفص تسليح عمودي بجانب الطريق"},
      {file: "roadway-foundation-rig-4080", en: "Wide site view of a foundation drilling rig and reinforcement cage between road lanes", ar: "منظر عام لآلة حفر أساسات وقفص تسليح بين مسارات الطريق"},
      {file: "roadway-foundation-rig-4078", en: "Foundation drilling rig working beside a roadway and bridge construction", ar: "آلة حفر أساسات تعمل بجانب الطريق وأعمال إنشاء جسر"}
    ]
  },
  {
    en: { title: "Drilling tools on site", text: "Field views of foundation drilling tools and a rig. The images show the equipment in its working environment; tool dimensions and the ground profile are specific to each inquiry." },
    ar: { title: "أدوات الحفر في الموقع", text: "صور ميدانية لأدوات حفر الأساسات وآلة الحفر. تظهر المعدات في بيئة العمل، فيما تختلف أبعاد الأداة وطبيعة التربة حسب كل طلب." },
    scenes: [
      {file: "tool-on-rig", en: "Blue drilling tool suspended beneath a rig at a foundation site", ar: "أداة حفر زرقاء معلقة أسفل آلة حفر في موقع أساسات"},
      {file: "blue-drilling-tool", en: "Blue drilling tool in front of a tracked foundation rig", ar: "أداة حفر زرقاء أمام آلة حفر مجنزرة"},
      {file: "tool-with-rig", en: "Foundation rig with used drilling tools at a work site", ar: "آلة حفر وأدوات مستخدمة في موقع عمل"}
    ]
  },
  {
    en: { title: "Casing handling", text: "Two views of a large tubular component being lifted at a construction site. Lifting arrangement, connection and dimensions must be checked for the actual project." },
    ar: { title: "مناولة المواسير", text: "صورتان لرفع مكون أنبوبي كبير في موقع إنشاءات. يجب التحقق من طريقة الرفع والوصلة والأبعاد وفق المشروع الفعلي." },
    scenes: [
      {file: "casing-lift-red", en: "Large tubular component lifted vertically by a crane", ar: "رفع مكون أنبوبي كبير عموديًا بواسطة رافعة"},
      {file: "casing-lift-blue", en: "Vertical tubular component suspended during site handling", ar: "مكون أنبوبي معلق أثناء المناولة في الموقع"}
    ]
  },
  {
    en: { title: "Bore and excavated ground", text: "Site views of drilled openings and excavated material. They illustrate why an inquiry benefits from a ground description and geotechnical information rather than a diameter alone." },
    ar: { title: "الحفر والتربة المستخرجة", text: "صور ميدانية لفتحات حفر ومواد مستخرجة. توضح أهمية وصف التربة والمعلومات الجيوتقنية عند الاستفسار، إلى جانب القطر المطلوب." },
    scenes: [
      {file: "drilled-bore-one", en: "Drilled opening in excavated ground", ar: "فتحة حفر في تربة محفورة"},
      {file: "drilled-bore-two", en: "View into a drilled bore from ground level", ar: "منظر من سطح الأرض إلى داخل فتحة حفر"},
      {file: "excavated-material", en: "Large cylindrical piece of excavated material on site", ar: "قطعة أسطوانية كبيرة من مواد الحفر في الموقع"},
      {file: "site-material-view", en: "Excavated material and site work area", ar: "مواد مستخرجة ومنطقة العمل في الموقع"}
    ]
  }
];
