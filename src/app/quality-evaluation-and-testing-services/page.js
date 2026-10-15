import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const testingServices = [
  [
    {
      title: "Physical Quality Evaluation Laboratory",
      href: "/physical-quality-evaluation-laboratory/",
    },
    {
      title: "Chemical Quality Evaluation Laboratory",
      href: "/chemical-quality-evaluation-laboratory/",
    },
  ],
  [
    {
      title: "Polymer & Technical Textiles Laboratory",
      href: "/polymer-technical-textiles-laboratory/",
    },
    {
      title: "Heat & Flame Testing Laboratory",
      href: "/heat-flame-testing-laboratory/",
    },
  ],
  [
    {
      title: "Fire Manikin Testing",
      href: "/PDF/MANIKIN-1.pdf",
    },
    {
      title: "Eco Laboratory",
      href: "/environment-laboratory/",
    },
  ],
  [
    {
      title: "Protective & Automotive Textile Testing",
      href: "/",
    },
    {
      title: "PPEs & Masks Testing",
      unavailable: true,
    },
  ],
  [
    {
      title: "Antimicrobial (Antibacterial & Anti-fungal) Testing",
      href: "/PDF/Antimicrobial-testing.pdf",
    },
    {
      title: "Sample Development Charges (Spg & Wvg Pilot Plants)",
      unavailable: true,
    },
  ],
  [
    {
      title: "Environment Laboratory",
      href: "/environment-laboratory/",
    },
  ],
];

export const metadata = {
  title: "Quality Evaluation and Testing Services | NITRA",
  description:
    "NITRA offers NABL-accredited and BIS-recognized testing facilities for fibres, yarns, fabrics, dyes, chemicals, and effluent.",
};

function ServiceLink({ service }) {
  if (service.unavailable) {
    return (
      <span className="testing-service-unavailable">
        {service.title}
        <span>PDF currently unavailable</span>
      </span>
    );
  }

  const isLocalDocument = service.href.startsWith("/PDF/");

  return (
    <a
      href={service.href}
      target={isLocalDocument ? "_blank" : "_self"}
      rel={isLocalDocument ? "noopener noreferrer" : undefined}
    >
      {service.title}
    </a>
  );
}

export default function QualityEvaluationAndTestingServicesPage() {
  return (
    <>
      <Header />
      <main className="about-page testing-services-page">
        <section className="about-hero testing-services-hero">
          <div className="about-hero-inner">
            <h1>Quality Evaluation and Testing Services</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Quality Evaluation and Testing Services
            </p>
          </div>
        </section>

        <section className="testing-services-content">
          <p className="testing-services-intro">
            Quality evaluation and testing is one of the most important
            activities in the entire value chain process of textile and garment
            industry. NITRA offers a wide range of testing facilities for
            fibre, yarn, fabrics, dyes, chemicals and effluent in its well
            equipped NABL accredited (ISO/IEC 17025:2017) and BIS recognized
            laboratories i.e.
          </p>

          <div className="testing-services-table-wrap">
            <table className="testing-services-table">
              <caption className="visually-hidden">
                Quality Evaluation &amp; Testing Services
              </caption>
              <thead>
                <tr>
                  <th colSpan="2">Quality Evaluation &amp; Testing Services</th>
                </tr>
              </thead>
              <tbody>
                {testingServices.map((row, index) => (
                  <tr key={index}>
                    {row.map((service) => (
                      <td key={service.title}>
                        <ServiceLink service={service} />
                      </td>
                    ))}
                    {row.length === 1 && <td aria-hidden="true" />}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
