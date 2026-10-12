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
      "Research & Development",
      "Integrated Textile & Apparel Development Centre (ITADC)",
      "Consultancy",
      "Training Programs",
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
                      <li key={menuItem}>
                        <a href="/about-us">{menuItem}</a>
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
