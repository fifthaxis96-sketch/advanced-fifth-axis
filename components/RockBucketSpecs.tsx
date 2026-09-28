const rockBucketSizes = [
  [600, 550, 1200, 20, 7, 682],
  [800, 700, 1200, 20, 9, 921],
  [900, 800, 1200, 20, 12, 1061],
  [1000, 900, 1200, 20, 14, 1190],
  [1200, 1100, 1200, 20, 16, 1513],
  [1500, 1400, 1200, 20, 20, 2164],
  [1800, 1700, 1000, 20, 26, 2957],
  [2000, 1900, 800, 20, 28, 3247],
  [2200, 2100, 800, 25, 30, 3787],
  [2500, 2400, 800, 25, 32, 4236],
];

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
