const firstQuickLinks = [
  ["NIRF Rankings Data", "#nirf"],
  ["Prevention of Ragging", "#anti-ragging"],
  ["Syllabus (AKTU)", "#syllabus"],
  ["Circulars (AKTU)", "#circulars"],
  ["Results (OneView)", "#results"],
];

const secondQuickLinks = [
  ["Placement Records", "#placement-records"],
  ["Photo Gallery", "#photo-gallery"],
  ["Video Gallery", "#video-gallery"],
  ["Training & Placement Cell", "#placement-cell"],
  ["Placement Policy", "#placement-policy"],
  ["Brochure & Guidance", "#brochure"],
  ["View All Programs", "#programs"],
];

function FooterBrand() {
  return (
    <a className="footer-brand" href="#home" aria-label="NITRA Technical Campus">
      <span className="footer-brand-seal" aria-hidden="true">
        <span>TECHNICAL</span>
        <strong>nitra</strong>
        <span>CAMPUS</span>
      </span>
      <span className="footer-brand-name">
        <strong>NITRA</strong>
        <span>TECHNICAL CAMPUS</span>
      </span>
    </a>
  );
}

function QuickLinks({ title, links }) {
  return (
    <section className="footer-column">
      <h2 className="footer-heading">{title}</h2>
      <ul className="footer-link-list">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href}>
              <span aria-hidden="true">↗</span>
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
    ["LinkedIn", "in", "#linkedin"],
    ["Instagram", "◎", "#instagram"],
    ["YouTube", "▶", "#youtube"],
    ["Facebook", "f", "#facebook"],
    ["Twitter", "♥", "#twitter"],
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
          <FooterBrand />
          <p>
            We are committed educators advancing innovation through research
            and quality learning for students of all disciplines.
          </p>
          <SocialLinks />
        </section>

        <QuickLinks title="Quick Links" links={firstQuickLinks} />
        <QuickLinks title="Quick Links" links={secondQuickLinks} />

        <section className="footer-column footer-contact">
          <h2 className="footer-heading">Find Us</h2>
          <address>
            <p>
              <span aria-hidden="true">⌖</span>
              <span>
                NITRA Technical Campus, Sector-23, Raj Nagar Sanjay Nagar,
                Ghaziabad – 201002, U.P.
              </span>
            </p>
            <p>
              <span aria-hidden="true">♧</span>
              <span>
                <a href="tel:8368840122">8368840122, 8368184387</a>
              </span>
            </p>
            <p>
              <span aria-hidden="true">✉</span>
              <span>
                <a href="mailto:ntcdiroffice@nitra.ac.in">
                  ntcdiroffice@nitra.ac.in
                </a>
              </span>
            </p>
          </address>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NITRA Technical Campus. All rights reserved.</p>
        <nav aria-label="Legal">
          <a href="#privacy-policy">Privacy Policy</a>
          <span aria-hidden="true">·</span>
          <a href="#terms-of-use">Terms of Use</a>
          <span aria-hidden="true">·</span>
          <a href="#grievance">Grievance</a>
        </nav>
      </div>
    </footer>
  );
}
