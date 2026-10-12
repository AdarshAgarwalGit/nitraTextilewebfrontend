import Footer from "./Footer";
import Header from "./Header";

const impactStats = [
  { value: "1,200+", label: "Clients Worldwide" },
  { value: "5,265+", label: "Library Centre" },
  { value: "170+", label: "Own publications." },
  { value: "23+", label: "Patent" },
];

const latestNews = [
  {
    title: "NITRA Hosts Ms. Priyanka Khurana Bajaj for Industry–Academia Interaction",
    age: "2 weeks ago",
  },
  {
    title: "Review Meeting on New Age Fibers at NITRA, Ghaziabad",
    age: "3 weeks ago",
  },
];

const profileUrl = "https://nitratextile.org/intellectual-capital-2/";

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-inner">
            <p className="about-breadcrumb">Home / About Us</p>
            <h1>About Us</h1>
          </div>
        </section>

        <section className="about-story">
          <div className="about-copy"> 
            <h2>Welcome to NITRA</h2>
            <p>
              Northern India Textile Research Association (NITRA) is one of the prime textile research institutes in the country.  The textile industry and Ministry of Textiles, Govt. of India jointly established NITRA in 1974 for conducting applied scientific research and providing support services to Indian textile industry.  The organization is situated in a 50 acre land at NCR Ghaziabad, near national capital New Delhi. It is certified by ISO 9001:2015.
            </p>
            <p>
              Today NITRA’s prime activities include research & development, technical consultancy, quality evaluation of materials, manpower training, third party inspection and publishing technical books and papers. NITRA also provides facilitating services to the decentralized powerloom sector through its eight centres located at Tanda, Kanpur, Meerut, Gorakhpur, Varanasi (all in U.P.), Panipat (Haryana), Ludhiana (Punjab) and Bhilwara (Rajasthan).
            </p>
            <p>NITRA is operating under the administrative control of Council of Administration comprising of representatives from Textile & Apparel industry, Govt. of India, trade associations, academic institutions and Textile Research Associations. The council is presently headed by its Chairman Sh. Vidit Jain, an eminent industrialist. Dr. M.S. Parmar, is the present Director General of NITRA  </p>
            <p>NITRA renders multifarious services to textile & apparel industry through its rich in-house manpower resource of more than fifty experienced technical personnel comprising of textile technologist, textile chemist, garment technologist, textile designer, fashion designer, analytical chemist, mechanical engineer, electrical & electronics engineer, civil engineer, environmental engineer, software / IT specialist & management experts. This team of scientists, consultants, and technocrats is supported by the most modern and state-of-the-art infrastructure facilities available at NITRA. The organization has a clientele of about 1200 textiles and allied sector units that includes overseas clients from Indonesia, Thailand, Ethiopia, Sudan, Bangladesh, Nepal, Kenya, Philippines.</p>

          </div>

          <div className="about-visual">
            <img
              src="/Images/campusWithLogo.png"
              alt="NITRA campus and facilities"
            />
            <div className="about-floating-card">
              <span>Global reach</span>
              <strong>Industry excellence</strong>
              <small>Serving clients across India and overseas markets</small>
            </div>
          </div>
        </section>

        <section className="about-dashboard" aria-label="NITRA at a glance and latest news">
          <div className="impact-panel" aria-label="NITRA at a glance">
            {impactStats.map((item) => (
              <div className="impact-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="news-panel" id="about-news">
            <h2>News / Updates</h2>
            <div className="news-feed">
              <div className="news-feed-toolbar">
                <span className="news-live-indicator" aria-hidden="true" />
                <span className="news-bell" aria-hidden="true">♧</span>
                <strong>Latest Notifications</strong>
                <span className="news-count">4</span>
                <span className="news-feed-controls" aria-hidden="true">
                  <span>⌃</span>
                  <span>Ⅱ</span>
                  <span>⌄</span>
                </span>
              </div>
              <div className="news-items">
                {latestNews.map((item, index) => (
                  <article className="news-item" key={item.title}>
                    <div className="news-item-meta">
                      {index === 1 && <span className="news-new-label">● New</span>}
                      <span className="news-age">{item.age}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <span className="news-details">View Details <span aria-hidden="true">→</span></span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-who" aria-labelledby="about-who-title">
          <p className="about-who-kicker">Who&apos;s Who</p>
          <div className="about-who-profile">
            <img
              className="about-who-portrait"
              src="/Images/director-general.jpeg"
              alt="Dr. M. S. Parmar, Director General of NITRA"
            />

            <div className="about-who-bio">
              <h2 id="about-who-title">Dr. M.S.Parmar</h2>
              <p className="about-who-role">Director General</p>
              <p className="about-who-description">
                Dr. M.S.Parmar, Director General, working at NITRA for the last
                32 years in various capacities. His main areas of expertise are
                Textile Chemistry, Protective Textiles, unconventional fibres
                and Quality Control of Textiles. Besides this, he is also
                looking after Heat &amp; Fire Laboratory and Chemical Laboratory.
              </p>
            </div>

            <div className="about-who-details">
              <p><strong>Experience:</strong> 32&nbsp; + years</p>
              <p><strong>Qualification:</strong> M.Sc., Ph.D., PGDMM, DCPA</p>
              <div className="about-who-social" aria-label="Social media">
                <span className="about-social-icon facebook" aria-label="Facebook">f</span>
                <span className="about-social-icon twitter" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 5.9a8 8 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6.99A4.08 4.08 0 0 0 11.8 8.05c0 .32.04.64.11.94a11.58 11.58 0 0 1-8.4-4.26 4.1 4.1 0 0 0 1.27 5.46 4.03 4.03 0 0 1-1.85-.51v.05a4.1 4.1 0 0 0 3.28 4.01 4.1 4.1 0 0 1-1.84.07 4.1 4.1 0 0 0 3.82 2.84A8.2 8.2 0 0 1 2.1 18.4c-.33 0-.65-.02-.97-.06A11.55 11.55 0 0 0 7.4 20.1c7.56 0 11.7-6.26 11.7-11.7v-.53A8.4 8.4 0 0 0 22 5.9Z" />
                  </svg>
                </span>
                <span className="about-social-icon youtube" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
                  </svg>
                </span>
              </div>
              <a className="about-who-read-more" href={profileUrl}>
                Read More
              </a>
            </div>
          </div>

          <div className="about-who-footer">
            <a href={profileUrl}>View All</a>
          </div>
        </section>

        <section className="about-features">
          <div className="feature-image-wrap">
            <img src="/Images/nitra-campus-2.png" alt="NITRA facility" />
          </div>

          <div className="feature-content">
            <p className="about-kicker">Our strengths</p>
            <h3>Research, testing, and skills for a competitive textile future.</h3>
            <ul>
              <li>Modern state-of-the-art infrastructure and laboratories</li>
              <li>Industry-oriented applied research and development</li>
              <li>Consultancy, training, and technical services</li>
              <li>Support for innovation, quality assurance, and sustainability</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
