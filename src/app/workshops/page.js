import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const equipmentGroups = [
  {
    title: "FIBRE SPINNING",
    subsections: [
      {
        title: "A) Melt Spinning",
        columns: ["Name of Equipment", "No. of Equipment"],
        rows: [
          ["Melt spinning machine", "1"],
          ["Draw frame machine with heater (filament yarn)", "1"],
          ["Condensation polymerization reactor", "2"],
          ["Granule cutting machine", "1"],
          ["Plastic lab pelletizer", "1"],
          ["Vacuum oven", "1"],
        ],
      },
      {
        title: "B) Dry Jet Wet Spinning",
        columns: ["Name of Equipment", "No. of Equipment"],
        rows: [["Dry Jet Wet Spinning", "1"]],
      },
    ],
  },
  {
    title: "PULPING UNIT",
    columns: ["Name of Equipment", "No. of Equipment"],
    rows: [
      ["Cutter", "1"],
      ["Digester", "1"],
      ["Beater", "1"],
      ["Refiner", "1"],
    ],
  },
  {
    title: "NATURAL FIBRE EXTRACTION",
    columns: ["Name of Equipment", "No. of Equipment"],
    rows: [
      ["Banana stem cutter", "1"],
      ["Banana decorticator", "1"],
      ["Banana fibre opener", "1"],
      ["HTHP – Fibre extraction machine", "1"],
      ["Fibre Cutter", "1"],
      ["Fibre opener machine", "1"],
    ],
  },
  {
    title: "FLEX SPINNING",
    columns: ["Name of Equipment", "No. of Equipment"],
    rows: [
      ["Hackling & Spreading Machine", "1"],
      ["Draw Frame 1", "3 delivery heads"],
      ["Draw Frame 2", "3 delivery heads"],
      ["Draw Frame 3", "4 delivery heads"],
      ["Draw Frame 4", "5 delivery heads"],
      ["Draw Frame 5", "12 delivery heads"],
      ["Roving Frame", "60 delivery heads"],
      ["Wet spinning ring frame", "256 heads"],
    ],
  },
  {
    title: "NON-WOVEN PLANT",
    columns: ["Name of Equipment", "No. of Equipment"],
    rows: [
      ["Fibre Opener", "02 (1 for coarse fibre + 1 for fine fibre)"],
      ["Carding Machine", "02 (1 for coarse fibre + 1 for fine fibre)"],
      ["Cross Lapper", "02 (1 for coarse fibre + 1 for fine fibre)"],
      ["Needle Punching Machine", "02 (1 for coarse fibre + 1 for fine fibre)"],
    ],
    note:
      "There are two separate sets of machinery – one for processing coarse fibres and another for fine fibres.",
  },
  {
    title: "SPINNING",
    columns: [
      "S. No.",
      "Name of the Machine / Manufacturer",
      "Model & Manufacturing Year",
    ],
    rows: [
      ["1.", "Double Roller Ginning Machine (Bajaj Mark-I)", "1994"],
      [
        "2.",
        "Blow Room (Lakshmi Reiter) MBO, Step Cleaner, ERM Cleaner-I & II, Middle Hopper, Scutcher",
        "1993",
      ],
      ["3.", "Carding Machine (Lakshmi Rieter) C ½", "1981"],
      ["4.", "Draw Frame (Lakshmi Rieter) DO-2S", "1981"],
      ["5.", "Speed Frame (Lakshmi Rieter) GS", "1981"],
      ["6.", "Ring Frame (Lakshmi Rieter) DJ5", "1981"],
      ["7.", "Compact Spinning Ring Frame (LMW) LRj60/A", "2015"],
      ["8.", "Friction Spinning Machine (Ferrer-AG) DREF-III", "1998"],
      ["9.", "Rotor Spinning Machine (TRYTEX)", "–"],
      ["10.", "Parallel Winding Machine (Peas Schlofhorst)", "VERSA-A 2012"],
      ["11.", "TFO (TRYTEX)", "–"],
      [
        "12.",
        "Miniature Carding Machine for Worsted Spinning System (TRYTEX)",
        "–",
      ],
      ["13.", "Gill Box for Worsted Spinning System (TRYTEX)", "–"],
      ["14.", "Speed Frame for Worsted Spinning System (TRYTEX)", "–"],
      ["15.", "Ring Frame for Worsted Spinning System (TRYTEX)", "–"],
    ],
  },
  {
    title: "WEAVING & KNITTING",
    columns: [
      "S. No.",
      "Name of the Machine / Manufacturer",
      "Model & Manufacturing Year",
    ],
    rows: [
      ["1.", "Single End Sizing Machine (CCI – Made in Taiwan)", "SS 565 (2010)"],
      ["2.", "Single End Warping Machine (CCI – Made in Taiwan)", "SW 550 (2010)"],
      ["3.", "Sample Loom (CCI – Made in Taiwan)", "SL 8900EG (2010)"],
      ["4.", "Power Loom with Hardaker make dobby", "–"],
      ["5.", "Automatic Power Loom (Lakshmi RUTI-C)", "–"],
      ["6.", "Automatic Pirn Winding Machine (Lakshmi Schwieter)", "222 (1982)"],
      ["7.", "Glove Making Machine (Shima Seiki)", "SFG 7 L/M"],
      [
        "8.",
        "Circular Knitting Machine – Inter Lock (Punjab Machinery, Ludhiana)",
        "1992",
      ],
      ["9.", "Flat Bed Knitting Machine", "2007"],
      ["10.", "Flat Bed Knitting Machine – Intarsia", "2007"],
      ["11.", "SHIMA SEIKI Computerized Flat Bed Knitting Machine", "2023"],
      [
        "12.",
        "Power Loom – Leno Project (Dashmesh Powerlooms, Panipat)",
        "2010",
      ],
      [
        "13.",
        "Power Loom – Double Shuttle Project (Dashmesh Powerlooms, Panipat)",
        "2010",
      ],
      ["14.", "Wooden Handloom with Dobby", "–"],
      ["15.", "Wooden Handloom with 200 Hooks Jacquard", "–"],
      ["16.", "Wooden Handloom with 800 Hooks Jacquard", "–"],
    ],
  },
  {
    title: "CHEMICAL PROCESSING MACHINES",
    columns: [
      "S. No.",
      "Name of the Machine / Manufacturer",
      "Model & Manufacturing Year",
    ],
    rows: [
      ["1.", "Soft Flow Dyeing Machine (KRSNA)", "–"],
      ["2.", "Fibre/Yarn Package Dyeing Machine (PDM – 01 Kg / P41)", "2001"],
      ["3.", "Steamer (Autoclave) ST-092/002", "2001"],
      ["4.", "Tumble Dryer (SDL S.No. 5041009-9)", "–"],
      [
        "5.",
        "Drum Washing Machine (DCC 292, S.No. 292G0004) – SDL Atlas",
        "–",
      ],
      ["6.", "Hot Melt Coating Machine (Mathis)", "2012"],
      ["7.", "Continuous Dyeing Range (CDR)", "–"],
      ["8.", "Digital Printing (Qualijet 64”)", "2012"],
      ["9.", "Winch Dyeing Machine", "2015"],
      ["10.", "Transfer Printing Machine (APP-1520-DP)", "–"],
      ["11.", "Flock Printing Machine", "2015"],
    ],
  },
];

export const metadata = {
  title: "Workshops | NITRA",
  description:
    "Explore NITRA's pilot plant facilities and the machines available for fibre spinning, pulping, fibre extraction, weaving, knitting, and chemical processing.",
};

function EquipmentTable({ title, columns, rows }) {
  return (
    <div className="workshops-table-wrap">
      <table className="workshops-table">
        <caption className="visually-hidden">{title}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${title}-${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WorkshopsPage() {
  return (
    <>
      <Header />
      <main className="about-page workshops-page">
        <section className="about-hero workshops-hero">
          <div className="about-hero-inner">
            <h1>Workshops</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Workshops
            </p>
          </div>
        </section>

        <article className="workshops-inventory">
          <header className="workshops-intro">
            <h2>LIST OF MACHINES IN PILOT PLANTS</h2>
            <p>
              NITRA has full-fledged pilot plant facilities for Fibre Spinning,
              Pulping, Natural Fibre Extraction, Flex Spinning, Non-woven,
              Spinning, Weaving, Knitting, and Wet Processing.
            </p>
          </header>

          {equipmentGroups.map((group) => (
            <section
              className="workshops-group"
              key={group.title}
              aria-labelledby={`workshops-${group.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("&", "and")}`}
            >
              <h2
                id={`workshops-${group.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("&", "and")}`}
              >
                {group.title}
              </h2>

              {group.subsections ? (
                group.subsections.map((subsection) => (
                  <section
                    className="workshops-subsection"
                    key={subsection.title}
                    aria-labelledby={`workshops-${subsection.title
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll(")", "")}`}
                  >
                    <h3
                      id={`workshops-${subsection.title
                        .toLowerCase()
                        .replaceAll(" ", "-")
                        .replaceAll(")", "")}`}
                    >
                      {subsection.title}
                    </h3>
                    <EquipmentTable
                      title={subsection.title}
                      columns={subsection.columns}
                      rows={subsection.rows}
                    />
                  </section>
                ))
              ) : (
                <EquipmentTable
                  title={group.title}
                  columns={group.columns}
                  rows={group.rows}
                />
              )}

              {group.note && <p className="workshops-note">{group.note}</p>}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
