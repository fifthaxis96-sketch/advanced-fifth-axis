const cleaningBucketSizes = [
  [600, 550, 1200, 20, 740],
  [800, 700, 1200, 20, 920],
  [900, 800, 1200, 20, 1024],
  [1000, 900, 1200, 20, 1109],
  [1200, 1100, 1200, 20, 1431],
  [1500, 1400, 1200, 20, 1988],
  [1800, 1700, 1000, 20, 2875],
  [2000, 1900, 800, 20, 3350],
  [2200, 2100, 800, 25, 3829],
  [2500, 2400, 800, 25, 4622],
];

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
