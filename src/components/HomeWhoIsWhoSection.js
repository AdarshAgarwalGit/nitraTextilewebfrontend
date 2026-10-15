import WhoIsWhoProfile from "./WhoIsWhoProfile";

export default function HomeWhoIsWhoSection() {
  return (
    <section
      className="about-who home-who-section"
      aria-labelledby="home-who-title"
    >
      <p className="about-who-kicker" id="home-who-title">
        Who&apos;s Who
      </p>
      <WhoIsWhoProfile showReadMore />
      <div className="about-who-footer">
        <a href="/intellectual-capital-2/">View All</a>
      </div>
    </section>
  );
}
