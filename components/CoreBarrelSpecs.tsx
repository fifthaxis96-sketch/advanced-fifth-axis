type CoreBarrelRow = [diameter: number, shellDiameter: number, shellLength: number, thickness: string, teeth: number, weight: number];

const coreBarrelTables: { title: string; titleAr: string; rows: CoreBarrelRow[] }[] = [
  {
    title: "Core Barrel with Bullet Teeth", titleAr: "كور بارل بأسنان صخرية",
    rows: [
      [600, 520, 1200, "20+40", 6, 500], [800, 720, 1200, "20+40", 9, 660],
      [900, 820, 1200, "20+40", 12, 730], [1000, 920, 1200, "20+40", 12, 810],
      [1200, 1120, 1200, "20+40", 15, 1000], [1500, 1420, 1200, "20+40", 18, 1240],
      [1800, 1720, 1000, "20+40", 24, 1690], [2000, 1920, 800, "20+40", 27, 1770],
      [2200, 2120, 800, "20+40", 30, 1950], [2500, 2420, 800, "20+40", 33, 2450],
    ],
  },
  {
    title: "Core Barrel with Roller Bits", titleAr: "كور بارل برؤوس حفر دوارة",
    rows: [
      [600, 520, 1200, "20+40", 4, 550], [800, 700, 1200, "20+40", 6, 734],
      [900, 800, 1200, "20+40", 6, 794], [1000, 900, 1200, "20+40", 8, 906],
      [1200, 1100, 1200, "20+40", 8, 1089], [1500, 1400, 1200, "20+40", 12, 1387],
      [1800, 1700, 1000, "20+40", 16, 1886], [2000, 1900, 800, "20+40", 18, 1991],
      [2200, 2100, 800, "20+40", 18, 2162], [2500, 2400, 800, "20+40", 20, 2684],
    ],
  },
];

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
