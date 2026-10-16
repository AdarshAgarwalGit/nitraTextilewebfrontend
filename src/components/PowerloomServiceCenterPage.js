import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MeerutEquipmentTable from "@/components/MeerutEquipmentTable";
import Link from "next/link";
import { notFound } from "next/navigation";
import { powerloomCentres } from "./powerloomCentreData";

const locations = Object.entries(powerloomCentres).map(([slug, centre]) => ({
  slug,
  name: centre.name,
}));

const weavingSupport = [
  "Productivity enhancement",
  "Quality upgradation",
  "Waste management",
  "Fabric design and analysis",
  "Training of weaving personnel",
  "Solutions to weaving-related technical problems",
];

const cadFacilities = [
  "Computer-aided design development for dobby and jacquard.",
  "Card punching facility.",
  "Training on the C.A.D. system.",
];

export default function PowerloomServiceCenterPage({ slug }) {
  const centre = powerloomCentres[slug];

  if (!centre) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="about-page powerloom-centre-page">
        <section className="about-hero itadc-hero">
          <div className="about-hero-inner">
            <h1>{centre.title}</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> /{" "}
              <Link href="/integrated-textile-apparel-development-centre-itadc/">
                Integrated Textile &amp; Apparel Development Centre (ITADC)
              </Link>{" "}
              / {centre.name}
            </p>
          </div>
        </section>

        <div className="itadc-content">
          <section className="itadc-overview">
            <div className="itadc-overview-copy">
              <p className="itadc-kicker">NITRA Development Centres</p>
              <h2>{centre.name} ITADC Centre</h2>
              <p>{centre.introduction}</p>
            </div>

            <nav
              className="itadc-location-panel"
              aria-label="Other development centres"
            >
              <h2>Centre Locations</h2>
              <div className="itadc-location-list">
                {locations.map((location) => (
                  <Link
                    href={`/${location.slug}-powerloom-service-center/`}
                    key={location.slug}
                    aria-current={location.slug === slug ? "page" : undefined}
                  >
                    {location.name}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </nav>
          </section>

          {centre.facilitiesIntroduction && (
            <section className="itadc-design-callout itadc-facilities-callout">
              <span>Facilities</span>
              <h2>{centre.facilitiesIntroduction}</h2>
            </section>
          )}

          {centre.equipment && (
            <MeerutEquipmentTable equipment={centre.equipment} />
          )}

          {centre.testingGroups?.length > 0 && (
            <section
              className="itadc-centre-section"
              aria-labelledby="centre-testing-title"
            >
              <div className="itadc-section-heading">
                <p className="itadc-kicker">Facilities</p>
                <h2 id="centre-testing-title">
                  {centre.testingSectionTitle ??
                    "Testing & Infrastructure Facilities"}
                </h2>
              </div>
              <div className="itadc-facility-grid">
                {centre.testingGroups.map((group) => (
                  <section
                    className="itadc-card"
                    key={group.title ?? group.items[0]}
                  >
                    {group.title && <h3>{group.title}</h3>}
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>
          )}

          <section
            className="itadc-centre-section"
            aria-labelledby="centre-consultancy-title"
          >
            <div className="itadc-section-heading">
              <p className="itadc-kicker">Technical support</p>
              <h2 id="centre-consultancy-title">
                {centre.weavingSupportTitle ??
                  "Weaving Consultancy & Technical Support"}
              </h2>
              <p className="itadc-section-description">
                The centre can provide ad-hoc consultancy and technical support
                in weaving-related areas, including:
              </p>
            </div>
            <section className="itadc-card">
              <ul className="itadc-feature-list">
                {(centre.weavingSupport ?? weavingSupport).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </section>

          {centre.hasCad && (
            <section
              className="itadc-centre-section"
              aria-labelledby="centre-cad-title"
            >
              <div className="itadc-section-heading">
                <p className="itadc-kicker">Design development</p>
                <h2 id="centre-cad-title">C.A.D Facilities</h2>
              </div>
              <section className="itadc-card">
                <ul className="itadc-feature-list">
                  {(centre.cadFacilities ?? cadFacilities).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </section>
          )}

          {centre.contact && (
            <section
              className="itadc-contact-card"
              aria-labelledby="centre-contact-title"
            >
              <div>
                <p className="itadc-kicker">Get in touch</p>
                <h2 id="centre-contact-title">Contact Person</h2>
                <h3>{centre.contact.person}</h3>
                <p className="itadc-contact-role">{centre.contact.role}</p>
              </div>
              <address>
                <p>{centre.contact.address}</p>
                {centre.contact.email && (
                  <p>
                    Email:{" "}
                    <a href={`mailto:${centre.contact.email}`}>
                      {centre.contact.email}
                    </a>
                  </p>
                )}
                {centre.contact.phone && <p>Telephone: {centre.contact.phone}</p>}
                {centre.contact.fax && <p>Fax: {centre.contact.fax}</p>}
                {centre.contact.mobile && <p>Mobile: {centre.contact.mobile}</p>}
              </address>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
