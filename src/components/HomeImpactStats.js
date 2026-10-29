import ImpactStats from "./ImpactStats";

const impactStats = [
  { value: 1200, label: "Clients Worldwide" },
  { value: 170, label: "Own publications." },
  { value: 5265, label: "Library Centre" },
  { value: 23, label: "Patent" },
];

export default function HomeImpactStats() {
  return (
    <ImpactStats
      stats={impactStats}
      className="impact-panel home-impact-panel"
    />
  );
}
