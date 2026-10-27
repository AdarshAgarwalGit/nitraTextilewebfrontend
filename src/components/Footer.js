import Link from "next/link";

const firstQuickLinks = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Consultancy", "/consultancy"],
  ["Infrastructure", "/workshops"],
  ["News Bulletin", "/new-bulletin"],
  ["Publications", "/annual-report"],
  ["Photo / Video Gallery", "/photo-video-gallery/"],
  ["Testing", "/quality-evaluation-and-testing-services"],
];

const secondQuickLinks = [
  ["Training Programs", "/training-programmes-at-nitra"],
  ["Research & Development", "/research-develpment-projects"],
  [
    "Integrated Textile & Apparel Development Centre (ITADC)",
    "/integrated-textile-apparel-development-centre-itadc/",
  ],
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
    ["Facebook", "https://www.facebook.com/nitrarajnagar/"],
    ["Twitter", "https://twitter.com/NITRAgzb"],
    ["YouTube", "https://www.youtube.com/@nitraghaziabad8883"],
    ["Instagram", "https://www.instagram.com/nitra_org/"],
    [
      "LinkedIn",
      "https://www.linkedin.com/company/northern-india-textile-research-association/",
    ],
  ];

  return (
    <nav className="social-links" aria-label="Social media">
      {networks.map(([name, href]) => (
        <a
          href={href}
          aria-label={name}
          key={name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon network={name} />
        </a>
      ))}
    </nav>
  );
}

function SocialIcon({ network }) {
  if (network === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20">
        <path d="M11.6 18v-7.3h2.5l.4-2.9h-2.9V6c0-.8.2-1.3 1.4-1.3h1.6V2.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H6.2v2.9h2.5V18h2.9Z" />
      </svg>
    );
  }

  if (network === "Twitter") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.41l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.5h7.6l5.24 6.93zm-1.29 19.33h2.04L6.49 3.55H4.3z" />
      </svg>
    );
  }

  if (network === "YouTube") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20">
        <path d="M18.2 6.1a2.2 2.2 0 0 0-1.6-1.6C15.2 4.1 10 4.1 10 4.1s-5.2 0-6.6.4a2.2 2.2 0 0 0-1.6 1.6C1.4 7.5 1.4 10 1.4 10s0 2.5.4 3.9a2.2 2.2 0 0 0 1.6 1.6c1.4.4 6.6.4 6.6.4s5.2 0 6.6-.4a2.2 2.2 0 0 0 1.6-1.6c.4-1.4.4-3.9.4-3.9s0-2.5-.4-3.9ZM8.3 12.5v-5L12.7 10l-4.4 2.5Z" />
      </svg>
    );
  }

  if (network === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="2.5" width="15" height="15" rx="4" />
        <circle cx="10" cy="10" r="3.5" />
        <circle cx="14.8" cy="5.4" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4.2 7.4H1.5V18h2.7V7.4ZM2.9 6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM18.5 11.9c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3 1.7V7.4H8.8V18h2.7v-5.3c0-1.4.3-2.8 2-2.8s1.8 1.6 1.8 2.9V18H18v-6.1Z" />
    </svg>
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
          <Link href="/">Home</Link>
          <span aria-hidden="true">|</span>
          <a href="/about-us">About Us</a>
          <span aria-hidden="true">|</span>
          <a href="/intellectual-capital-2">Who&apos;s Who</a>
          <span aria-hidden="true">|</span>
          <a href="/new-bulletin">News Bulletin</a>
          <span aria-hidden="true">|</span>
          <Link href="/">Other Links</Link>
          <span aria-hidden="true">|</span>
          <a href="/contact">Contact Us</a>
        </nav>
        <span className="footer-activate">Activate Windows</span>
      </div>
    </footer>
  );
}
