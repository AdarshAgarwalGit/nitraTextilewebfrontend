import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const equipmentSections = [
  {
    title: "For Weaving",
    description:
      "The FIC comprises of the latest warping and weaving machines capable of producing high-quality fabric.",
    columns: [
      "S. No.",
      "Type",
      "Make and Model",
      "Qty (Nos.)",
      "Technical Specifications",
    ],
    rows: [
      [
        "1.",
        "Sectional Warping",
        "Rabatex",
        "1",
        ["Creel capacity – 240", "Size – 190 to 220 mm"],
      ],
      [
        "2.",
        "Shuttleless Loom",
        "Vamatex",
        "1",
        [
          "Width – 190 mm",
          "Speed – 250 to 400 rpm",
          "Weft Colour – 1",
          "Designing – Electronic Dobby",
        ],
      ],
      [
        "3.",
        "Shuttleless Loom",
        "Picanol",
        "2",
        [
          "Width – 220 mm",
          "Speed – 600 rpm",
          "Weft Colour – 8",
          "Designing – Tappet (plain, twill, satin)",
        ],
      ],
    ],
  },
  {
    title: "For Knitting",
    description:
      "The FIC comprises of the latest circular knitting machines capable of producing high-quality knitted fabric.",
    columns: [
      "S. No.",
      "Type",
      "Make, Model and Year",
      "Qty (Nos.)",
      "Technical Specifications",
    ],
    rows: [
      [
        "1.",
        "Circular Knitting Machine",
        "Terrot (Made in Germany), Model S296-2, Year 2013",
        "1",
        [
          "24 Gauge, 30 Inches Dia, 96 Yarn Feeders",
          "Lycra Feeder Installed",
          "No. of Needles – 2256",
        ],
      ],
      [
        "2.",
        "Circular Knitting Machine (Open Width Fabric Takedown)",
        "Pilotelli (Made in Italy), Model M0938417, Year 2017",
        "1",
        [
          "28 Gauge, 34 Inches Dia, 102 Yarn Feeders",
          "Lycra Feeder Installed",
          "No. of Needles – 2976",
        ],
      ],
    ],
  },
  {
    title: "For Garmenting",
    description:
      "The FIC comprises of the latest cutting, fusing, and sewing machinery from reputed manufacturers.",
    columns: [
      "S. No.",
      "Name of the Machinery / Equipment",
      "Make and Model",
      "Qty (Nos.)",
    ],
    rows: [
      ["1.", "Straight Knife Cutting Machine", "Eastman 629 (8”) DS", "1"],
      ["2.", "Fusing Machine", "Hashima HP-900LFS", "1"],
      [
        "3.",
        "Direct Drive S/N Lockstitch Machine with Automatic Thread Trimmer",
        "JUKI DDL9000",
        "10",
      ],
      [
        "4.",
        "Direct Drive D/N Lockstitch Machine with Organized Split Needle Bar",
        "JUKI LH-3588",
        "2",
      ],
      ["5.", "Overlock Machine for Heavy Weight Materials", "JUKI MO-6843", "5"],
      [
        "6.",
        "Computer Controlled Lockstitch Button Sewing Machine",
        "JUKI LK-1903",
        "1",
      ],
      [
        "7.",
        "Computer Controlled Lockstitch Buttonholing Machine",
        "JUKI LBH-1790",
        "1",
      ],
      ["8.", "Computer Controlled Bartacking Machine", "JUKI LK-1900", "1"],
      [
        "9.",
        "Computer Controlled Shape Tacking Machine with Heat Cutter",
        "JUKI LK-1941",
        "1",
      ],
      [
        "10.",
        "High Speed Flat Bed 2 Needle Double Chain Stitch Machine",
        "JUKI MH-380U",
        "3",
      ],
      [
        "11.",
        "High Speed Flat Bed Top and Bottom Coverstitch Machine",
        "JUKI MF7523",
        "3",
      ],
      [
        "12.",
        "Computer Controlled Eyelet Buttonholing Machine",
        "JUKI MEB3810",
        "1",
      ],
      [
        "13.",
        "Computer Controlled Direct Drive S/N Lockstitch Machine for Zig-Zag Sewing",
        "JUKI LZ2290",
        "1",
      ],
      ["14.", "Belt Loop Making Machine", "Kansai B2000C", "1"],
      ["15.", "Elastic Band Attaching Machine", "Kansai DFB1404 PMD", "1"],
      ["16.", "Pressing Tables with Irons", "Ramsons", "6"],
      ["17.", "Thread Sucker", "Ramsons", "1"],
      ["18.", "Shirt Folding Table", "Ramsons", "1"],
      ["19.", "Stain Remover", "Ramsons", "1"],
    ],
  },
  {
    title: "For Embroidery",
    columns: [
      "S. No.",
      "Type",
      "Make and Model",
      "Qty (Nos.)",
      "Technical Specifications",
    ],
    rows: [
      [
        "1.",
        "Lockstitch Embroidery Machine",
        "DEFU Model JSY90L4, Year 2004",
        "1",
        ["6 Heads, 9 Needles, 1400 rpm"],
      ],
    ],
  },
];

export const metadata = {
  title: "Focus Incubation Centre | NITRA",
  description:
    "Explore the Focus Incubation Centre at NITRA and its weaving, knitting, garmenting, and embroidery machines and equipment.",
};

function EquipmentTable({ section }) {
  return (
    <div className="fic-table-wrap">
      <table className="fic-table">
        <caption className="visually-hidden">{section.title} machinery</caption>
        <thead>
          <tr>
            {section.columns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.rows.map((row) => (
            <tr key={`${section.title}-${row[0]}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${section.title}-${row[0]}-${cellIndex}`}>
                  {Array.isArray(cell) ? (
                    <ul>
                      {cell.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FocusIncubationCentrePage() {
  return (
    <>
      <Header />
      <main className="about-page fic-page">
        <section className="about-hero fic-hero">
          <div className="about-hero-inner">
            <h1>Focus Incubation Centre</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Focus Incubation Centre
            </p>
          </div>
        </section>

        <article className="fic-content">
          <p className="fic-intro">
            NITRA has set up Focus Incubation Centre (FIC) for weaving,
            knitting, garmenting, and embroidery purposes. The FIC comprises of
            modern machines and equipment for fabric and apparel development.
          </p>

          {equipmentSections.map((section) => (
            <section
              className="fic-section"
              key={section.title}
              aria-labelledby={`fic-${section.title.toLowerCase().replaceAll(" ", "-")}`}
            >
              <h2
                id={`fic-${section.title.toLowerCase().replaceAll(" ", "-")}`}
              >
                {section.title}
              </h2>
              {section.description && <p>{section.description}</p>}
              <EquipmentTable section={section} />
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
