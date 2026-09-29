import { coreBarrelTables } from "@/lib/product-specifications";

export function CoreBarrelSpecs({ lang }: { lang: "en" | "ar" }) {
  const ar = lang === "ar";
  const headings = ar
    ? [["القطر", "مم"], ["قطر الجسم", "مم"], ["طول الجسم", "مم"], ["سماكة الجسم", "مم"], ["عدد الأسنان", "قطعة"], ["الوزن", "كجم"]]
    : [["Diameter", "mm"], ["Shell diameter", "mm"], ["Shell length", "mm"], ["Shell thickness", "mm"], ["Teeth quantity", "pcs"], ["Weight", "kg"]];

  return <section className="rockBucketSpecs" aria-labelledby="core-barrel-specs-title">
    <span className="sectionKicker"><i/>{ar ? "المقاسات المرجعية" : "REFERENCE SIZES"}</span>
    <h2 id="core-barrel-specs-title">{ar ? "جدول مقاسات الكور بارل" : "Core Barrel Specifications"}</h2>
    <p>{ar ? "المقاسات والأوزان من الجداول المقدمة. يمكن تخصيص مقاسات أخرى؛ يرجى تأكيد المواصفات والوزن النهائي قبل الطلب." : "Sizes and weights from the supplied tables. Other sizes can be customized; confirm final specifications and weight before ordering."}</p>
    {coreBarrelTables.map(table => <div className="augerSpecsGroup" key={table.title}>
      <h3>{ar ? table.titleAr : table.title}</h3>
      <div className="rockBucketTableScroll"><table>
        <thead><tr>{headings.map(([heading, unit]) => <th scope="col" key={heading}>{heading}<small>{unit}</small></th>)}</tr></thead>
        <tbody>{table.rows.map(([diameter, shellDiameter, shellLength, thickness, teeth, weight]) =>
          <tr key={diameter}><th scope="row">{diameter}</th><td>{shellDiameter}</td><td>{shellLength}</td><td>{thickness}</td><td>{teeth}</td><td>{weight}</td></tr>
        )}</tbody>
      </table></div>
    </div>)}
  </section>;
}
