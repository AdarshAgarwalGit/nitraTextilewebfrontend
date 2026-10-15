const firstQuickLinks = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Consultancy", "/consultancy"],
  ["Infrastructure", "/workshops"],
  ["News Bulletin", "/new-bulletin"],
  ["Publications", "/research-papers"],
  ["Photo / Video Gallery", "/photo-video-gallery/"],
  ["Testing", "/quality-evaluation-and-testing-services"],
];

const secondQuickLinks = [
  ["Training Programs", "/training-programmes-at-nitra"],
  ["Research & Development", "/research-develpment-projects"],
  ["Integrated Textile & Apparel Development Centre (ITADC)", "/integrated-textile-and-apparel-development-centre"],
  ["Careers", "/careers"],
  ["Tenders", "/tenders"],
  ["Contact us", "/contact"],
];

function QuickLinks({ title, links }) {
  return (
    <section className="footer-column">
      {title ? <h2 className="footer-heading">{title}</h2> : null}
      <ul className="footer-link-list">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href}>
              <span aria-hidden="true">›</span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SocialLinks() {
  const networks = [
    ["Facebook", "f", "/facebook"],
    ["Twitter", "♥", "/twitter"],
    ["Instagram", "◎", "/instagram"],
    ["YouTube", "▶", "/youtube"],
    ["LinkedIn", "in", "/linkedin"],
  ];

  return (
    <nav className="social-links" aria-label="Social media">
      {networks.map(([name, mark, href]) => (
        <a href={href} aria-label={name} key={name}>
          {mark}
        </a>
      ))}
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-content">
        <section className="footer-about" aria-label="About NITRA">
          <h2 className="footer-heading">About NITRA</h2>
          <p>
            Northern India Textile Research Association (NITRA) is a leading textile
            research institute established in 1974, offering R&amp;D, technical
            consultancy, training, and more. It serves 1,200 textile and allied sector
            clients, and NITRA Technical Campus provides B.Tech programs.
          </p>
          <SocialLinks />
        </section>

        <QuickLinks title={null} links={firstQuickLinks} />
        <QuickLinks title={null} links={secondQuickLinks} />

        <section className="footer-column footer-contact">
          <h2 className="footer-heading">Contact Us</h2>
          <address>
            <p>
              <span aria-hidden="true">⌖</span>
              <span>
                Northern India Textile Research
                <br />
                Association
                <br />
                Sector-23, Raj Nagar, Ghaziabad-201002
              </span>
            </p>
            <p>
              <span aria-hidden="true">☎</span>
              <span>
                <a href="tel:01202807390995">0120-2807390-995</a>
              </span>
            </p>
            <p>
              <span aria-hidden="true">✉</span>
              <span>
                <a href="mailto:mail@nitratexile.org">mail@nitratexile.org</a>
              </span>
            </p>
            <p>
              <span aria-hidden="true">◌</span>
              <span>
                <a href="https://nitratexile.org">nitratexile.org</a>
              </span>
            </p>
          </address>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© 2024 NITRA. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <a href="/">Home</a>
          <span aria-hidden="true">|</span>
          <a href="/about-us">About Us</a>
          <span aria-hidden="true">|</span>
          <a href="/intellectual-capital-2">Who&apos;s Who</a>
          <span aria-hidden="true">|</span>
          <a href="/new-bulletin">News Bulletin</a>
          <span aria-hidden="true">|</span>
          <a href="/">Other Links</a>
          <span aria-hidden="true">|</span>
          <a href="/contact">Contact Us</a>
        </nav>
        <span className="footer-activate">Activate Windows</span>
      </div>
    </footer>
  );
}
