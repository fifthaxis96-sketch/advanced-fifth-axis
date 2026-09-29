import { cleaningBucketSizes } from "@/lib/product-specifications";

export function CleaningBucketSpecs({ lang }: { lang: "en" | "ar" }) {
  const ar = lang === "ar";
  const headings = ar
    ? [["قطر الحفر", "مم"], ["قطر جسم البكيت", "مم"], ["طول جسم البكيت", "مم"], ["سماكة الجسم", "مم"], ["الوزن", "كجم"]]
    : [["Drilling diameter", "mm"], ["Shell diameter", "mm"], ["Shell length", "mm"], ["Shell thickness", "mm"], ["Weight", "kg"]];

  return <section className="rockBucketSpecs" aria-labelledby="cleaning-bucket-specs-title">
    <span className="sectionKicker"><i/>{ar ? "المقاسات المرجعية" : "REFERENCE SIZES"}</span>
    <h2 id="cleaning-bucket-specs-title">{ar ? "جدول مقاسات بكيت التنظيف" : "Cleaning Drilling Bucket Specifications"}</h2>
    <p>{ar ? "المقاسات والأوزان من الجدول المقدم. يمكن تصنيع مقاسات أخرى حسب الطلب؛ يرجى تأكيد المواصفات والوزن النهائي قبل الطلب." : "Sizes and weights from the supplied table. Other sizes can be manufactured to order; confirm final specifications and weight before ordering."}</p>
    <div className="rockBucketTableScroll"><table>
      <thead><tr>{headings.map(([heading, unit]) => <th scope="col" key={heading}>{heading}<small>{unit}</small></th>)}</tr></thead>
      <tbody>{cleaningBucketSizes.map(([drill, shell, length, thickness, weight]) =>
        <tr key={drill}><th scope="row">{drill}</th><td>{shell}</td><td>{length}</td><td>{thickness}</td><td>{weight}</td></tr>
      )}</tbody>
    </table></div>
  </section>;
}
