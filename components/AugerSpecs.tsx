type AugerRow = [diameter: number, flightDiameter: number, pitch: number, flightLength: number, teeth: number, doubleCutWeight: number];

const augerTables: { title: string; titleAr: string; rows: AugerRow[] }[] = [
  {
    title: "Conical Rock Auger", titleAr: "أوجر صخور مخروطي",
    rows: [
      [600, 550, 600, 1200, 22, 537], [800, 750, 600, 1200, 24, 708],
      [900, 850, 600, 1200, 26, 775], [1000, 950, 600, 1200, 28, 871],
      [1200, 1150, 600, 1200, 32, 1047], [1500, 1450, 600, 1200, 36, 1387],
      [1800, 1750, 600, 1200, 40, 1766],
    ],
  },
  {
    title: "Flat Rock Auger", titleAr: "أوجر صخور مسطح",
    rows: [
      [600, 550, 600, 1200, 6, 559], [800, 750, 600, 1200, 10, 705],
      [900, 850, 600, 1200, 12, 802], [1000, 950, 600, 1200, 12, 910],
      [1200, 1150, 600, 1200, 16, 1153], [1500, 1450, 600, 1200, 18, 1606],
      [1800, 1750, 600, 1200, 22, 2155],
    ],
  },
  {
    title: "Flat Soil Auger", titleAr: "أوجر تربة مسطح",
    rows: [
      [600, 550, 600, 1200, 4, 561], [800, 750, 600, 1200, 4, 700],
      [900, 850, 600, 1200, 5, 796], [1000, 950, 600, 1200, 6, 904],
      [1200, 1150, 600, 1200, 6, 1139], [1500, 1450, 600, 1200, 9, 1590],
      [1800, 1750, 600, 1200, 11, 2132],
    ],
  },
];

export function AugerSpecs({ lang }: { lang: "en" | "ar" }) {
  const ar = lang === "ar";
  const headings = ar
    ? [["قطر الحفر", "مم"], ["قطر الحلزون", "مم"], ["خطوة الحلزون", "مم"], ["طول الحلزون", "مم"], ["عدد الأسنان", "قطعة"], ["وزن القطع المزدوج", "كجم"]]
    : [["Drilling diameter", "mm"], ["Flight diameter", "mm"], ["Pitch", "mm"], ["Flight length", "mm"], ["Teeth quantity", "pcs"], ["Double-cut weight", "kg"]];

  return <section className="rockBucketSpecs augerSpecs" aria-labelledby="auger-specs-title">
    <span className="sectionKicker"><i/>{ar ? "المقاسات المرجعية" : "REFERENCE SIZES"}</span>
    <h2 id="auger-specs-title">{ar ? "جدول مقاسات الأوجرات" : "Auger Specifications"}</h2>
    <p>{ar ? "المقاسات والأوزان من الجداول المقدمة. يمكن تصنيع مقاسات أخرى حسب الطلب؛ يرجى تأكيد المواصفات والوزن النهائي قبل الطلب." : "Sizes and weights from the supplied tables. Other sizes can be manufactured to order; confirm final specifications and weight before ordering."}</p>
    {augerTables.map(table => <div className="augerSpecsGroup" key={table.title}>
      <h3>{ar ? table.titleAr : table.title}</h3>
      <div className="rockBucketTableScroll"><table>
        <thead><tr>{headings.map(([heading, unit]) => <th scope="col" key={heading}>{heading}<small>{unit}</small></th>)}</tr></thead>
        <tbody>{table.rows.map(([diameter, flightDiameter, pitch, flightLength, teeth, doubleCutWeight]) =>
          <tr key={diameter}><th scope="row">{diameter}</th><td>{flightDiameter}</td><td>{pitch}</td><td>{flightLength}</td><td>{teeth}</td><td>{doubleCutWeight}</td></tr>
        )}</tbody>
      </table></div>
    </div>)}
  </section>;
}
