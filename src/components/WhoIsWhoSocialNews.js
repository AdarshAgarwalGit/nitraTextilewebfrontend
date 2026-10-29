import Image from "next/image";

const newsItems = [
  {
    title: "Training Calendar 2026-27",
    href: "/PDF/Training-Calendar-2026-27-1.pdf",
  },
  {
    title: "TESTING SERVICES FOR FOOD PRODUCTS at NITRA",
    href: "/Images/TESTING%20SERVICES%20FOR%20FOOD%20PRODUCTS%20at%20NITRA.jpg",
  },
  {
    title: "Review Meeting on New Age Fibers at NITRA, Ghaziabad",
    href: "/review-meeting-on-new-age-fibers-at-nitra-ghaziabad/",
  },
  {
    title: "Training Programmes Offered by NITRA",
    href: "https://m.facebook.com/story.php?story_fbid=pfbid02sxUBgdH9hrV6xqKSTXu6LhDfqsqgkXq4GncXEFpZwiQ6pdFA1GmsFWwQyNZXLtWnl&id=100057304307601",
  },
  {
    title: "MoU Signed for Future Collaboration in Milkweed Cultivation and Fibre Sourcing",
    href: "https://www.facebook.com/share/p/1AcWNAKSQr/",
  },
  {
    title: "NITRA Hosts Ms. Priyanka Khosla Bajaj for Industry–Academia Interaction",
    href: "https://www.facebook.com/share/p/1N5jgMjUNb/",
  },
];

const facebookPageUrl = "https://www.facebook.com/nitrarajnagar/";
const facebookEmbedUrl =
  "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnitrarajnagar%2F&tabs=timeline&width=&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
const itmaUrl =
  "https://www.itmaasiasingapore.com/exhibitors/how-to-exhibit?utm_source=SA012NITRA&utm_medium=web-banner-03&utm_campaign=apply-by-12-nov&utm_content=apply-now";

function renderNewsItem(item, isDuplicate = false) {
  return (
    <article
      className="news-item"
      key={`${item.title}-${isDuplicate ? "duplicate" : "original"}`}
    >
      <div className="news-item-meta">
        <span className="news-new-label">● New</span>
        <span className="news-age">4 weeks ago</span>
      </div>
      <h3>{item.title}</h3>
      <a
        className="news-details"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={isDuplicate ? -1 : undefined}
      >
        View Details <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function WhoIsWhoSocialNews() {
  return (
    <section
      className="who-social-news"
      aria-label="Facebook page, news updates, and ITMA ASIA plus CITME"
    >
      <div className="who-social-column">
        <h2 className="who-social-heading">Facebook Page</h2>
        <iframe
          className="who-facebook-embed"
          src={facebookEmbedUrl}
          title="NITRA Facebook page timeline"
          width="500"
          height="400"
          loading="lazy"
          scrolling="yes"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        />
        <a
          className="who-facebook-fallback"
          href={facebookPageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit NITRA on Facebook
        </a>
      </div>

      <div className="news-panel who-social-news-panel">
        <h2 className="who-social-heading">News / Updates</h2>
        <div className="news-feed">
          <div className="news-feed-toolbar">
            <span className="news-live-indicator" aria-hidden="true" />
            <span className="news-bell" aria-hidden="true">♧</span>
            <strong>Latest Notifications</strong>
            <span className="news-count">{newsItems.length}</span>
            <span className="news-feed-controls" aria-hidden="true">
              <span>⌃</span>
              <span>Ⅱ</span>
              <span>⌄</span>
            </span>
          </div>
          <div className="news-items news-items-autoscroll">
            <div className="news-items-track">
              <div className="news-items-group">
                {newsItems.map((item) => renderNewsItem(item))}
              </div>
              <div className="news-items-group" aria-hidden="true">
                {newsItems.map((item) => renderNewsItem(item, true))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="who-itma-column">
        <h2 className="who-social-heading">ITMA 2027</h2>
        <a
          className="who-itma-link"
          href={itmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View ITMA 2027 information"
        >
          <Image
            src="/Images/itma-2027.gif"
            alt="ITMA 2027, 16–22 September in Messegelände, Hannover, Germany"
            width={200}
            height={400}
            unoptimized
          />
        </a>
      </div>
    </section>
  );
}
