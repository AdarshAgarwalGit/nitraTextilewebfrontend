const impactStats = [
  { value: "1,200+", label: "Clients Worldwide" },
  { value: "5,265+", label: "Library Centre" },
  { value: "170+", label: "Own publications." },
  { value: "23+", label: "Patent" },
];

const latestNews = [
  {
    title: "Training Calendar 2026-27",
    age: "New",
    href: "/PDF/Training-Calendar-2026-27-1.pdf",
    openInNewTab: true,
  },
  {
    title: "TESTING SERVICES FOR FOOD PRODUCTS at NITRA",
    age: "New",
    href: "/Images/TESTING%20SERVICES%20FOR%20FOOD%20PRODUCTS%20at%20NITRA.jpg",
    openInNewTab: true,
  },
  {
    title: "Training Programmes Offered by NITRA",
    age: "4 weeks ago",
  },
  {
    title: "MoU Signed for Future Collaboration in Milkweed Cultivation and Fibre Sourcing",
    age: "4 weeks ago",
  },
  {
    title: "NITRA Hosts Ms. Priyanka Khosla Bajaj for Industry–Academia Interaction",
    age: "4 weeks ago",
  },
  {
    title: "Review Meeting on New Age Fibers at NITRA, Ghaziabad",
    age: "4 weeks ago",
  },
];

export default function AboutDashboard() {
  return (
    <section
      className="about-dashboard"
      aria-label="NITRA at a glance and latest news"
    >
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
            <span className="news-count">{latestNews.length}</span>
            <span className="news-feed-controls" aria-hidden="true">
              <span>⌃</span>
              <span>Ⅱ</span>
              <span>⌄</span>
            </span>
          </div>
          <div className="news-items">
            {latestNews.map((item) => (
              <article className="news-item" key={item.title}>
                <div className="news-item-meta">
                  {item.age === "New" ? (
                    <span className="news-new-label">● New</span>
                  ) : null}
                  <span className="news-age">{item.age}</span>
                </div>
                <h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.openInNewTab ? "_blank" : undefined}
                      rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                {item.href ? (
                  <a
                    className="news-details"
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : undefined}
                    rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                  >
                    View Details <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <span className="news-details">
                    View Details <span aria-hidden="true">→</span>
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
