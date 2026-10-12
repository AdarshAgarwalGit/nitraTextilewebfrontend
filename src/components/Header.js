const navigation = [
  { label: "HOME", href: "#home" },
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
      "Publication",
      "Latest NITRA Books Publication",
      "Research Papers",
    ],
  },
  { label: "TESTING", href: "#testing" },
  { label: "NITRA NEWS", href: "#news" },
  {
    label: "INFRASTRUCTURE",
    href: "#infrastructure",
    hasMenu: true,
    menuItems: [
      "Workshops",
      "Focus Incubation Centre",
      "Library",
      "Laboratory",
    ],
  },
  {
    label: "OPPORTUNITIES",
    href: "#opportunities",
    hasMenu: true,
    menuItems: ["Careers", "Tenders", "Textile Jobs"],
  },
];

function CampusMark() {
  return (
    <a className="campus-mark" href="#home" aria-label="NITRA Technical Campus home">
      <span className="campus-mark-seal" aria-hidden="true">
        <span>TECHNICAL</span>
        <strong>nitra</strong>
        <span>CAMPUS</span>
      </span>
    </a>
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
      <div className="primary-bar">
        <CampusMark />
        <nav className="primary-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <div
              className={item.hasMenu ? "primary-nav-item has-menu" : "primary-nav-item"}
              key={item.label}
            >
              <a className="primary-nav-link" href={item.href}>
                {item.label}
                {item.hasMenu && <Chevron />}
              </a>

              {item.hasMenu && item.menuItems && (
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
              )}
            </div>
          ))}
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
