import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const centreLocations = [
  ["Bhilwara", "bhilwara"],
  ["Gorakhpur", "gorakhpur"],
  ["Kanpur", "kanpur"],
  ["Ludhiana", "ludhiana"],
  ["Meerut", "meerut"],
  ["Panipat", "panipat"],
  ["Varanasi", "varanasi"],
  ["Tanda", "tanda"],
];

const commitments = [
  "To provide timely and all-around quality services for the balanced growth of the decentralized power loom sector.",
  "To be a friend and guide to the decentralized power loom sector.",
  "To act as a focal centre for support to its development and growth.",
];

const commitmentValues = [
  "Accessibility and responsibility",
  "Courtesy and understanding",
  "Dedication and devotion to service",
  "Objectivity, transparency, promptness, and efficiency",
];

const resources = [
  "Qualified technical personnel along with necessary supporting staff.",
  "Looms, accessories, allied equipments and teaching aids.",
  "Laboratory testing equipments and consumables.",
  "Design development, exchange and warehousing facilities.",
  "Adequately equipped technical library.",
  "Industry-oriented PPCICC committee for guidance and feedback.",
];

const services = [
  {
    title: "Human Resource Development – Training",
    items: [
      "Regular training courses on weaving, fabric design, machine maintenance.",
      "Short duration courses for quality checkers and supervisors.",
      "Placement assistance and unit setup guidance.",
      "Stipend support from State Governments.",
    ],
  },
  {
    title: "Quality Testing",
    items: [
      "Reliable textile testing services through laboratory facilities.",
      "Display of test schedules, equipment, and tariff rates.",
    ],
  },
  {
    title: "Guidance and Consultancy",
    items: [
      "Loom modernization and productivity improvement.",
      "Repair and preventive maintenance support.",
      "On-site consultancy for production and process management.",
    ],
  },
  {
    title: "Design Development & Commercialisation",
    items: [
      "CAD-based contemporary design development.",
      "Encouragement of local and innovative design skills.",
    ],
  },
  {
    title: "Marketing Support",
    items: [
      "Trade exhibitions and buyer–seller meets.",
      "Export promotion and trade delegation participation.",
      "E-commerce and IT-enabled marketing support.",
    ],
  },
];

export const metadata = {
  title: "Integrated Textile & Apparel Development Centre (ITADC) | NITRA",
  description:
    "Explore NITRA's Integrated Textile & Apparel Development Centres, their locations, resources, mission, and services.",
};

export default function IntegratedTextileApparelDevelopmentCentrePage() {
  return (
    <>
      <Header />
      <main className="about-page itadc-page">
        <section className="about-hero itadc-hero">
          <div className="about-hero-inner">
            <h1>Integrated Textile &amp; Apparel Development Centre (ITADC)</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Integrated Textile &amp; Apparel
              Development Centre (ITADC)
            </p>
          </div>
        </section>

        <div className="itadc-content">
          <section className="itadc-overview" aria-labelledby="itadc-overview-title">
            <div className="itadc-overview-copy">
              <p className="itadc-kicker">NITRA Development Centres</p>
              <h2 id="itadc-overview-title">
                Integrated Textile &amp; Apparel Development Centres
              </h2>
              <p>
                Eight Integrated Textile &amp; Apparel Development Centres,
                set-up by the Ministry of Textiles, Government of India under
                the administrative control of NITRA, Ghaziabad, are located at
                various places in the Northern region of India.
              </p>
            </div>

            <section className="itadc-location-panel" aria-labelledby="itadc-locations-title">
              <h2 id="itadc-locations-title">Centre Locations</h2>
              <div className="itadc-location-list">
                {centreLocations.map(([name, slug]) => (
                  <a
                    href={`https://nitratextile.org/${slug}-powerloom-service-center/`}
                    key={name}
                  >
                    {name}
                    <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </section>
          </section>

          <section className="itadc-design-callout" aria-label="NITRA CAD Centre">
            <span>Design &amp; innovation</span>
            <h2>New Designs Developed by NITRA CAD Centre</h2>
          </section>

          <div className="itadc-principles">
            <section className="itadc-card" aria-labelledby="itadc-mission-title">
              <h2 id="itadc-mission-title">Our Mission</h2>
              <p>
                To develop the power loom units within our catchment’s area so
                that it can continue to dominate the domestic market and can
                develop strongly in exports by evaluating its advantages and
                securing its shortcomings.
              </p>
            </section>

            <section className="itadc-card" aria-labelledby="itadc-commitment-title">
              <h2 id="itadc-commitment-title">Our Commitment</h2>
              <ul>
                {commitments.map((commitment) => (
                  <li key={commitment}>{commitment}</li>
                ))}
              </ul>
              <p className="itadc-list-intro">
                <strong>To undertake our mandate with:</strong>
              </p>
              <ul>
                {commitmentValues.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="itadc-card itadc-resources" aria-labelledby="itadc-resources-title">
            <h2 id="itadc-resources-title">Our Resources</h2>
            <ul>
              {resources.map((resource) => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          </section>

          <section className="itadc-services" aria-labelledby="itadc-services-title">
            <div className="itadc-section-heading">
              <p className="itadc-kicker">Supporting the textile sector</p>
              <h2 id="itadc-services-title">Our Services</h2>
            </div>
            <div className="itadc-service-grid">
              {services.map((service) => (
                <section className="itadc-service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
              <section className="itadc-service-card">
                <h3>Government Programme Implementation</h3>
                <p>
                  Implementation of modernization programmes, TUFS, welfare
                  schemes such as group insurance, workshed schemes, and
                  awareness campaigns as a nodal agency.
                </p>
              </section>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
