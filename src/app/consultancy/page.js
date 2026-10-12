import AboutDashboard from "@/components/AboutDashboard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const consultancyServices = [
  {
    title: "Technical Consultancy",
    items: [
      "Plant set up for extraction of new-age natural fibre",
      "Manpower rationalization / Workload assessment",
      "Machine & Labour productivity",
      "Production system audit / Yarn realization audit",
      "Framing of technical specification",
      "Preparation of DPR for textile units",
      "Quality audit, Cost audit & Maintenance audit",
      "Analysis of defects in yarn, fabric & garment",
      "Energy audit / Energy audit mandatory under PAT and Power quality audit",
      "PAT (Perform, Achieve & Trade) advisory",
      "Carbon footprint reduction / GHG reporting",
      "Green Audit",
      "Life cycle assessment",
      "Boiler audit / Water audit",
      "Compressed air optimization",
      "Designing and setup of common / Individual ETP/CETP",
      "Safety audit (Electrical safety audit)",
      "Adequacy reports of ETP/CETP / ETP assessment",
    ],
  },
  {
    title: "Feasibility Study",
    items: ["Textile mills", "Garment factories"],
  },
  {
    title: "System Certification",
    items: [
      "ISO 9001:2015 (Quality Management System)",
      "ISO/IEC 17025:2017 (NABL)",
      "ISO/IEC 17020:2012 (NABCB)",
    ],
  },
  {
    title: "Valuation",
    items: ["Machinery, plant, land and building valuation"],
  },
  {
    title: "Inspection",
    items: ["3rd party inspection for textile and apparel products"],
  },
];

export const metadata = {
  title: "Consultancy | NITRA",
  description:
    "Technical consultancy, feasibility studies, system certification, valuation, and inspection services offered by NITRA.",
};

export default function ConsultancyPage() {
  return (
    <>
      <Header />
      <main className="about-page consultancy-page">
        <section className="about-hero consultancy-hero">
          <div className="about-hero-inner">
            <h1>Consultancy</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Consultancy
            </p>
          </div>
        </section>

        <section className="consultancy-content" aria-label="NITRA consultancy services">
          <p className="consultancy-intro">
            Technical consultancy is one of the important aspects of NITRA’s
            multifarious activities. NITRA provides assistance to the industry in
            the form of quality and cost effective technical consultancy for
            resolving their operational problems. Major areas in consultancy
            services offered:
          </p>

          <div className="consultancy-services">
            {consultancyServices.map((category) => (
              <section
                className="consultancy-service-card"
                key={category.title}
                aria-labelledby={`consultancy-${category.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <h2
                  className="consultancy-service-title"
                  id={`consultancy-${category.title.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {category.title}
                </h2>
                <ul>
                  {category.items.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <AboutDashboard />
      </main>
      <Footer />
    </>
  );
}
