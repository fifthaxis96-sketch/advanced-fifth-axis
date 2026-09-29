import { rockBucketSizes } from "@/lib/product-specifications";

export function RockBucketSpecs({ lang }: { lang: "en" | "ar" }) {
  const ar = lang === "ar";
  const headings = ar
    ? [["قطر الحفر", "مم"], ["قطر جسم البكيت", "مم"], ["طول جسم البكيت", "مم"], ["سماكة الجسم", "مم"], ["عدد الأسنان", "قطعة"], ["وزن القطع المزدوج", "كجم"]]
    : [["Drilling diameter", "mm"], ["Shell diameter", "mm"], ["Shell length", "mm"], ["Shell thickness", "mm"], ["Teeth quantity", "pcs"], ["Double-cut weight", "kg"]];

  return <section className="rockBucketSpecs" aria-labelledby="rock-bucket-specs-title">
    <span className="sectionKicker"><i/>{ar ? "المقاسات المرجعية" : "REFERENCE SIZES"}</span>
    <h2 id="rock-bucket-specs-title">{ar ? "جدول مقاسات بكيت حفر الصخور" : "Rock Drilling Bucket Specifications"}</h2>
    <p>{ar ? "المقاسات والأوزان من الجدول المقدم. يمكن تصنيع مقاسات أخرى حسب طلب العميل؛ يرجى تأكيد المواصفات والوزن النهائي قبل الطلب." : "Sizes and weights from the supplied table. Other sizes can be manufactured to order; confirm final specifications and weight before ordering."}</p>
    <div className="rockBucketTableScroll"><table>
      <thead><tr>{headings.map(([heading, unit]) => <th scope="col" key={heading}>{heading}<small>{unit}</small></th>)}</tr></thead>
      <tbody>{rockBucketSizes.map(([drill, shell, length, thickness, teeth, double]) =>
        <tr key={drill}><th scope="row">{drill}</th><td>{shell}</td><td>{length}</td><td>{thickness}</td><td>{teeth}</td><td>{double}</td></tr>
      )}</tbody>
    </table></div>
  </section>;
}
