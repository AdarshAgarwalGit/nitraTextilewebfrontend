import Link from "next/link";

const navigation = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    href: "/about-us",
    hasMenu: true,
    menuItems: [
      "About NITRA",
      "Council of Administration",
      "Who’s who",
      "Finance & Admin Committee",
      "Organization Structure",
      "Research Advisory Committee",
      "Quality Policy",
      "Vision",
    ],
  },
  {
    label: "SERVICES",
    href: "#services",
    hasMenu: true,
    menuItems: [
      {
        label: "Research & Development",
        children: [
          "R & D Projects",
          "Products Development",
          "Commercialization of NITRA Developments",
          "Instruments Developed",
          "Patent Obtained and Filed",
        ],
      },
      "Integrated Textile & Apparel Development Centre (ITADC)",
      "Consultancy",
      {
        label: "Training Programs",
        children: [
          {
            label: "Job Oriented Professional Programs for 2026-27",
            href: "/job-oriented-professional-programs/",
          },
          {
            label: "Fundamental Course on Protech",
            href: "/PDF/Fundamental-Course-on-Protech_20250919_184149_0000.pdf",
            target: "_blank",
          },
          {
            label: "Training Programmes at NITRA",
            href: "/training-programmes-at-nitra/",
          },
        ],
      },
      "Third Party Inspection",
    ],
  },
  {
    label: "PUBLICATIONS",
    href: "#publications",
    hasMenu: true,
    menuItems: [
      "Annual Report",
      "Catalogue of NITRA",
      "New Bulletin",
      "Latest NITRA Books Publication",
      "Research Papers",
    ],
  },
  { label: "TESTING", href: "/quality-evaluation-and-testing-services/" },
  { label: "NITRA NEWS", href: "/new-bulletin/" },
  {
    label: "INFRASTRUCTURE",
    href: "#infrastructure",
    hasMenu: true,
    menuItems: [
      "Workshops",
      "Focus Incubation Centre",
      "Library",
    ],
  },
  {
    label: "OPPORTUNITIES",
    href: "#opportunities",
    hasMenu: true,
    menuItems: ["Careers", "Tenders"],
  },
];

function CampusMark() {
  return (
    <Link className="campus-mark" href="/" aria-label="NITRA Technical Campus home">
      <span className="campus-mark-seal" aria-hidden="true">
        <span>TECHNICAL</span>
        <strong>nitra</strong>
        <span>CAMPUS</span>
      </span>
    </Link>
  );
}

function ContactIcon({ type }) {
  if (type === "email") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="4" width="15" height="12" rx="1.5" />
        <path d="m3 5 7 5.5L17 5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m6.1 2.8 2.4 3.6-1.7 1.7a13 13 0 0 0 5.1 5.1l1.7-1.7 3.6 2.4-.9 3.1c-.2.7-.9 1.1-1.6 1-6.9-1.2-12.3-6.6-13.5-13.5-.1-.7.3-1.4 1-1.6l3.9-.1Z" />
    </svg>
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
      <svg aria-hidden="true" viewBox="0 0 20 20">
        <path d="M18 4.4a6.5 6.5 0 0 1-1.9.5 3.3 3.3 0 0 0 1.5-1.8 6.7 6.7 0 0 1-2.1.8 3.3 3.3 0 0 0-5.7 2.3c0 .3 0 .5.1.8a9.4 9.4 0 0 1-6.8-3.5 3.3 3.3 0 0 0 1 4.4 3.3 3.3 0 0 1-1.5-.4v.1a3.3 3.3 0 0 0 2.7 3.2 3.3 3.3 0 0 1-1.5.1 3.3 3.3 0 0 0 3.1 2.3 6.7 6.7 0 0 1-4.1 1.4h-.8a9.4 9.4 0 0 0 5.1 1.5c6.1 0 9.5-5.1 9.5-9.5v-.4A6.8 6.8 0 0 0 18 4.4Z" />
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

function UtilityBar() {
  const socialLinks = [
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
    <div className="utility-bar">
      <div className="utility-inner">
        <div className="utility-contact">
          <a href="mailto:mail@nitratextile.org">
            <ContactIcon type="email" />
            <span>mail@nitratextile.org</span>
          </a>
          <a href="tel:01202783095">
            <ContactIcon type="phone" />
            <span>Customer support Number 0120-2783095</span>
          </a>
          <a
            className="utility-logo-download"
            href="/Images/nitra-new-logo.png"
            download
          >
            Download Logo
          </a>
        </div>

        <div className="utility-right">
          <a
            className="utility-campus-badge"
            href="https://www.nitra.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="utility-campus-dot" aria-hidden="true" />
            <span>NITRA Technical Campus</span>
          </a>
          <nav className="utility-links" aria-label="Follow NITRA">
            <span className="utility-follow-label">Follow Us :</span>
            {socialLinks.map(([name, href]) => (
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
        </div>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      className="nav-chevron"
      viewBox="0 0 12 8"
      fill="none"
    >
      <path d="m1 1.5 5 5 5-5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m15.5 15.5 4.1 4.1" />
    </svg>
  );
}

function getAboutMenuHref(label) {
  if (label === "Annual Report") {
    return "/annual-report/";
  }
  if (label === "New Bulletin") {
    return "/new-bulletin/";
  }
  if (label === "Catalogue of NITRA") {
    return "/catalogue-of-nitra-publication/";
  }
  if (label === "Latest NITRA Books Publication") {
    return "/latest-nitra-books-publication/";
  }
  if (label === "Research Papers") {
    return "/research-papers/";
  }
  if (label === "R & D Projects") {
    return "/research-develpment-projects/";
  }
  if (label === "Products Development") {
    return "/products_development/";
  }
  if (label === "Commercialization of NITRA Developments") {
    return "/Commercialization%20of%20NITRA%20Developments/";
  }
  if (label === "Instruments Developed") {
    return "/Instruments-20Developed/";
  }
  if (label === "Patent Obtained and Filed") {
    return "/patents-obtained-and-filed/";
  }
  if (label === "Consultancy") {
    return "/consultancy/";
  }
  if (label === "Third Party Inspection") {
    return "/third-party-inspection/";
  }
  if (label === "Workshops") {
    return "/workshops/";
  }
  if (label === "Focus Incubation Centre") {
    return "/focus-incubation-centre/";
  }
  if (label === "Library") {
    return "/library/";
  }
  if (label === "Careers") {
    return "/careers/";
  }
  if (label === "Tenders") {
    return "/tenders/";
  }
  if (label === "Council of Administration") {
    return "/PDF/MEMBERS-OF-THE-COUNCIL-OF-ADMINISTRATION-2025-2026.pdf";
  }
  if (label === "Finance & Admin Committee") {
    return "/PDF/LIST-OF-MEMBERS-OF-FINANCE-amp-ADMINISTRATIVE-SUB-COMMITTEE-2025-26.pdf";
  }
  if (label === "Research Advisory Committee") {
    return "/PDF/MEMBERS-OF-THE-RESEARCH-ADVISORY-COMMITTEE-2025-2026.pdf";
  }
  if (label === "Organization Structure") {
    return "/organization-structure/";
  }
  if (label === "Quality Policy") {
    return "/quality-policy/";
  }
  if (label === "Vision") {
    return "/vision/";
  }
  if (label === "Who’s who") {
    return "/intellectual-capital-2/";
  }
  return "/about-us";
}

function opensInNewTab(label) {
  return [
    "Council of Administration",
    "Finance & Admin Committee",
    "Research Advisory Committee",
  ].includes(label);
}

export default function Header() {
  return (
    <header className="site-header" id="home">
      <UtilityBar />
      <div className="primary-bar">
        <CampusMark />
        <nav className="primary-navigation" aria-label="Main navigation">
          {navigation.map((item) =>
            item.hasMenu && item.menuItems ? (
              <details
                className="primary-nav-item has-menu"
                name="primary-navigation"
                key={item.label}
              >
                <summary className="primary-nav-link">
                  {item.label}
                  <Chevron />
                </summary>
                <div className="nav-dropdown" aria-label={`${item.label} submenu`}>
                  <ul className="nav-dropdown-list">
                    {item.menuItems.map((menuItem) => (
                      <li
                        className={
                          typeof menuItem === "string" ? undefined : "nav-submenu-item"
                        }
                        key={typeof menuItem === "string" ? menuItem : menuItem.label}
                      >
                        <a
                          href={getAboutMenuHref(
                            typeof menuItem === "string" ? menuItem : menuItem.label,
                          )}
                          target={
                            opensInNewTab(
                              typeof menuItem === "string" ? menuItem : menuItem.label,
                            )
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            opensInNewTab(
                              typeof menuItem === "string" ? menuItem : menuItem.label,
                            )
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {typeof menuItem === "string" ? menuItem : menuItem.label}
                          {typeof menuItem === "string" ? null : (
                            <span className="nav-submenu-arrow" aria-hidden="true">
                              ›
                            </span>
                          )}
                        </a>
                        {typeof menuItem !== "string" && (
                          <ul
                            className="nav-dropdown nav-submenu-dropdown"
                            aria-label={`${menuItem.label} submenu`}
                          >
                            {menuItem.children.map((child) => (
                              <li key={typeof child === "string" ? child : child.label}>
                                <a
                                  href={
                                    typeof child === "string"
                                      ? getAboutMenuHref(child)
                                      : child.href
                                  }
                                  target={typeof child === "string" ? undefined : child.target}
                                  rel={
                                    typeof child !== "string" && child.target === "_blank"
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                >
                                  {typeof child === "string" ? child : child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ) : (
              <div className="primary-nav-item" key={item.label}>
                <a className="primary-nav-link" href={item.href}>
                  {item.label}
                </a>
              </div>
            ),
          )}
        </nav>

        <div className="header-actions">
          <a
            className="search-action"
            href="#search"
            aria-label="Search the website"
          >
            <SearchIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
