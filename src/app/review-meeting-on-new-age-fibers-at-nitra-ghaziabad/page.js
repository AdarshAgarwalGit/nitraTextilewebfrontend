import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const imageArchiveUrl =
  "https://drive.google.com/drive/folders/1Zegjy3bM2nKHYLR4tMbCrBMxthFY49aF?usp=sharing";

export const metadata = {
  title: "Review Meeting on New Age Fibers at NITRA, Ghaziabad",
  description:
    "Highlights from the 29 January 2026 review meeting on New Age Fibers at NITRA, Ghaziabad.",
};

export default function ReviewMeetingPage() {
  return (
    <>
      <Header />
      <main className="about-page review-meeting-page">
        <section className="about-hero review-meeting-hero">
          <div className="about-hero-inner">
            <h1>Review Meeting on New Age Fibers at NITRA, Ghaziabad</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              Review Meeting on New Age Fibers at NITRA, Ghaziabad
            </p>
          </div>
        </section>

        <article className="review-meeting-article" aria-labelledby="review-meeting-title">
          <header className="review-meeting-heading">
            <span className="review-meeting-label">Official News</span>
            <h2 id="review-meeting-title">
              Review Meeting on New Age Fibers at NITRA, Ghaziabad
            </h2>
            <p className="review-meeting-meta">
              <span aria-hidden="true">📍</span> NITRA, Ghaziabad
              <span className="review-meeting-meta-divider" aria-hidden="true">
                |
              </span>
              <span aria-hidden="true">🗓</span> 29 January 2026
            </p>
          </header>

          <div className="review-meeting-copy">
            <p className="review-meeting-lead">
              A high-level review meeting on <strong>New Age Fibers</strong> was
              successfully held at <strong>NITRA, Ghaziabad</strong> on{" "}
              <strong>29th January 2026</strong>, under the chairpersonship of{" "}
              <strong>Ms. Neelam Shami Rao</strong>, Secretary, Ministry of Textiles,
              Government of India.
            </p>

            <section className="review-meeting-section">
              <h3>Distinguished Dignitaries</h3>
              <p>
                The meeting was graced by the esteemed presence of{" "}
                <strong>Ms. Padmini Singla</strong>, Joint Secretary, Ministry of
                Textiles; <strong>Mr. Shashi Bhushan Singh</strong>, Secretary,
                National Jute Board (NJB), Kolkata; and{" "}
                <strong>Dr. Sarveshwar N. Bhure</strong>, Joint Textile Commissioner.
              </p>
            </section>

            <div className="review-meeting-focus-grid">
              <section className="review-meeting-focus">
                <h3>Key Deliberations</h3>
                <p>
                  Detailed deliberations were held on the growing importance and
                  immense potential of New Age Fibers such as{" "}
                  <strong>
                    Hemp, Ramie, Flax, Sisal, Milkweed, Bamboo, and Pineapple fibers
                  </strong>
                  , emphasizing their crucial role in promoting sustainable,
                  eco-friendly, and future-ready textile solutions.
                </p>
                <p>
                  The meeting witnessed active participation from industry
                  stakeholders, who showcased their progress, innovations, and
                  products developed using these fibers.
                </p>
              </section>

              <section className="review-meeting-focus">
                <h3>Strategic Focus</h3>
                <p>
                  Key discussions focused on future challenges, scalability, and
                  strategic approaches required to strengthen the adoption and
                  commercialization of new age fibers across the textile value chain.
                </p>
              </section>
            </div>

            <p>
              On this occasion, <strong>Dr. M. S. Parmar</strong>, Director General,
              NITRA, facilitated <strong>Ms. Neelam Shami Rao</strong>,{" "}
              <strong>Ms. Padmini Singla</strong>,{" "}
              <strong>Mr. Shashi Bhushan Singh</strong>, and{" "}
              <strong>Dr. Sarveshwar N. Bhure</strong>, acknowledging their valuable
              guidance and continued support to the textile sector.
            </p>
            <p>
              During the program, NITRA showcased a wide range of products developed
              using New Age Fibers, highlighting ongoing research, innovation, and
              application-oriented development.
            </p>

            <section className="review-meeting-section">
              <h3>Facility Visit</h3>
              <p>
                Following the meeting, a guided visit to NITRA’s facilities was also
                arranged for the dignitaries.
              </p>
            </section>

            <p className="review-meeting-conclusion">
              The event marked a significant step towards strengthening sustainable
              textile innovation and reinforcing India’s leadership in future
              textile technologies.
            </p>
          </div>

          <section className="review-meeting-archive" aria-labelledby="archive-title">
            <div>
              <h3 id="archive-title">Image Archive</h3>
              <p>
                All photographs from the Review Meeting on New Age Fibers at NITRA,
                Ghaziabad have been compiled in a dedicated image archive. The archive
                includes moments from the meeting, deliberations, product displays,
                and the facility visit.
              </p>
              <p>Click the link below to view the complete photo archive:</p>
            </div>
            <a href={imageArchiveUrl} target="_blank" rel="noopener noreferrer">
              View Image Archive <span aria-hidden="true">↗</span>
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
