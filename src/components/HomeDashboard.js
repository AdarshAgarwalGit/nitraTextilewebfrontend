import WhoIsWhoSocialNews from "./WhoIsWhoSocialNews";

const impactStats = [
  { value: "1,200+", label: "Clients Worldwide" },
  { value: "170+", label: "Own publications." },
  { value: "5,265+", label: "Library Centre" },
  { value: "23+", label: "Patent" },
];

export default function HomeDashboard() {
  return (
    <section className="home-dashboard" aria-label="NITRA statistics and updates">
      <div className="impact-panel home-impact-panel" aria-label="NITRA at a glance">
        {impactStats.map(({ value, label }) => (
          <div className="impact-stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <WhoIsWhoSocialNews />
    </section>
  );
}
