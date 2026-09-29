import { augerTables } from "@/lib/product-specifications";

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
