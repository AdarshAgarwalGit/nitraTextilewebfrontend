import Footer from "./Footer";
import Header from "./Header";
import Image from "next/image";

const newsItems = [
  {
    title: "Review Meeting on New Age Fibers at NITRA, Ghaziabad",
    href: "https://nitratextile.org/review-meeting-on-new-age-fibers-at-nitra-ghaziabad/",
  },
  {
    title: "NITRA Hosts Ms. Priyanka Khosla Bajaj for Industry–Academia Interaction",
    href: "https://www.facebook.com/share/p/1N5jgMjUNb/",
  },
  {
    title: "MoU Signed for Future Collaboration in Milkweed Cultivation and Fibre Sourcing",
    href: "https://www.facebook.com/share/p/1AcWNAKSQr/",
  },
  {
    title: "Training Programmes Offered by NITRA",
    href: "https://nitratextile.org/training-programmes-offered-by-nitra/",
  },
];

const services = [
  ["Research and Development.", "/research-develpment-projects/"],
  ["Technical Consultancy.", "/consultancy/"],
  [
    "Quality Evaluation.",
    "/quality-evaluation-and-testing-services/",
  ],
  ["Training Programs.", "/training-programmes-at-nitra/"],
  ["Centre of Excellence (CoE).", "/focus-incubation-centre/"],
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-main">
        <section className="home-news" aria-label="Latest NITRA news">
          <span className="home-news-label">News</span>
          <div className="home-news-window">
            <div className="home-news-track">
              {newsItems.map(({ title, href }) => (
                <a href={href} key={title}>
                  {title}
                </a>
              ))}
              {newsItems.map(({ title, href }) => (
                <a
                  href={href}
                  key={`${title}-repeat`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="home-intro" aria-labelledby="home-title">
          <div className="home-image-wrap">
            <span className="home-image-accent" aria-hidden="true" />
            <div className="home-photo home-photo-primary">
              <Image
                src="/Images/nitra-campus-1.png"
                alt="The Northern India Textile Research Association campus"
                fill
                priority
                sizes="(max-width: 760px) 90vw, 40vw"
              />
            </div>
            <div className="home-photo home-photo-secondary" aria-hidden="true">
              <Image
                src="/Images/nitra-campus-1.png"
                alt=""
                fill
                sizes="(max-width: 760px) 48vw, 22vw"
              />
            </div>
          </div>

          <div className="home-intro-content">
            <p className="home-intro-eyebrow">Welcome to</p>
            <h1 id="home-title">
              Northern India Textile Research Association
            </h1>
            <p className="home-intro-description">
              NITRA, the Northern India Textile Research Association, stands as
              a beacon of innovation and excellence in the realm of textiles.
              Established through a dynamic partnership between the textile
              industry and the Ministry of Textiles, Government of India, in
              1974, NITRA has nurtured a legacy of cutting-edge research,
              transformative training, and unmatched expertise for nearly half
              a century.
            </p>

            <ul className="home-service-list">
              {services.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>
                    <span aria-hidden="true">›</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="home-intro-actions">
              <a
                className="home-membership-link"
                href="https://nitratextile.org/wp-content/uploads/2024/04/NITRA-Membership-form.pdf"
              >
                Membership Form
              </a>
              <a className="home-read-more-link" href="/about-us/">
                Read More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
