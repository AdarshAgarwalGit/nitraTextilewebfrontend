import WhoIsWhoSocialNews from "./WhoIsWhoSocialNews";
import HomeImpactStats from "./HomeImpactStats";

export default function HomeDashboard() {
  return (
    <section className="home-dashboard" aria-label="NITRA statistics and updates">
      <HomeImpactStats />
      <WhoIsWhoSocialNews />
    </section>
  );
}
