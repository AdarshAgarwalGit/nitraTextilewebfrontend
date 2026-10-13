import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const resources = [
  ["Books", "3,266"],
  ["Complementary Books", "1,144"],
  ["Journals – Subscribed", "60"],
  ["Journals – Complementary", "80"],
  ["Bound Journals", "1,630"],
  ["e-Journals", "05"],
  ["Project reports", "250"],
  ["Thesis", "40"],
];

const digitalJournals = [
  "IEEE",
  "J-Gate (Engineering)",
  "ASTM",
  "J-Gate (Management)",
  "EBSCO",
];

const libraryServices = [
  "Library collection is computerized and the online catalogue provides bibliographic information about the holdings of the library.",
  "OPAC informs users about new books and journals added to the library collection.",
  "Members can check details of the borrowed books.",
  "Wi-Fi networking provides its users access to internet.",
];

export const metadata = {
  title: "Library | NITRA",
  description:
    "Explore NITRA library resources, digital journals, library services, institutional memberships, and opening hours.",
};

function InfoSection({ title, children, className = "" }) {
  return (
    <section
      className={`library-section ${className}`.trim()}
      aria-labelledby={`library-${title
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll("(", "")
        .replaceAll(")", "")}`}
    >
      <h2
        id={`library-${title
          .toLowerCase()
          .replaceAll(" ", "-")
          .replaceAll("(", "")
          .replaceAll(")", "")}`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function LibraryPage() {
  return (
    <>
      <Header />
      <main className="about-page library-page">
        <section className="about-hero library-hero">
          <div className="about-hero-inner">
            <h1>Library</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Library
            </p>
          </div>
        </section>

        <article className="library-content">
          <blockquote className="library-intro">
            <span className="library-intro-mark" aria-hidden="true">
              “
            </span>
            <p>
              The library has a premises of its own in the new building,
              equipped with printed and digital resources, with dedicated
              computers to provide on-line access to library resources.
            </p>
          </blockquote>

          <InfoSection title="Resources" className="library-resources-section">
            <p className="library-lead">
              The library has developed a specialized collection of books,
              journals, reports and e-journals on Engineering and Management
              with specialized focus on textiles and allied subjects through
              subscription and exchange basis as follows.
            </p>
            <div className="library-resource-grid">
              {resources.map(([name, count]) => (
                <div className="library-resource-card" key={name}>
                  <span>{name}</span>
                  <strong>{count}</strong>
                </div>
              ))}
            </div>
          </InfoSection>

          <div className="library-sections-grid">
            <InfoSection title="Digital Library">
              <div className="library-panel">
                <h3>e-Journals</h3>
                <p>
                  The digital library subscribes to five core e-databases on
                  Engineering and Management and provides access to the
                  following e-journals:
                </p>
                <ul className="library-journal-list">
                  {digitalJournals.map((journal) => (
                    <li key={journal}>{journal}</li>
                  ))}
                </ul>
              </div>
            </InfoSection>

            <InfoSection title="Library Services">
              <div className="library-panel">
                <h3>Online Catalogue (OPAC)</h3>
                <ul className="library-service-list">
                  {libraryServices.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </InfoSection>
          </div>

          <div className="library-sections-grid library-sections-grid-lower">
            <InfoSection title="Print Journals">
              <div className="library-panel">
                <p>
                  The names of the print journals subscribed can be browsed
                  under print journals (subscribed) and the names of the
                  journals received on complementary basis can be browsed under
                  print journals complementary.
                </p>
              </div>
            </InfoSection>

            <InfoSection title="NITRA Publications">
              <div className="library-panel">
                <p>
                  NITRA is actually involved in research and consultancy and
                  publishes its own work based on projects, workshops and
                  seminars. These publications are listed in a printed
                  catalogue and can also be browsed under NITRA Publications.
                </p>
                <a
                  className="library-catalogue-link"
                  href="/PDF/catalogue-of-nitra-publication.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View NITRA Publications Catalogue
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </InfoSection>
          </div>

          <div className="library-bottom-grid">
            <InfoSection title="Institutional Membership">
              <ul className="library-membership-list">
                <li>British Council Division, New Delhi.</li>
                <li>Bureau of Indian Standards, New Delhi</li>
              </ul>
            </InfoSection>

            <InfoSection title="Centre for Academic Partnership (CAP)">
              <div className="library-panel">
                <p>
                  The library continues to promote its academic interaction
                  with academic institutions by making its resources and
                  services available under “Centre for Academic Partnership”
                  scheme.
                </p>
              </div>
            </InfoSection>

            <InfoSection title="Photocopy facility">
              <div className="library-panel">
                <p>Is provided within the library premises on nominal rates.</p>
              </div>
            </InfoSection>

            <InfoSection title="Library Timings">
              <div className="library-hours">
                <span className="library-hours-icon" aria-hidden="true">
                  ◷
                </span>
                <p>
                  Library remains open Monday – Saturday (except II and IV
                  Saturdays and all national holidays). The library also
                  remains open on II and IV Sundays to provide service to its
                  staff members and students of DLP courses.
                </p>
              </div>
            </InfoSection>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
