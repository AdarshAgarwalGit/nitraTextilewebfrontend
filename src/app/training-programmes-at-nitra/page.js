import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const programmes = [
  {
    title: "Shop-Floor Instructors / Trainers",
    status: "Upcoming",
    duration: "Four Days",
    date: "As per Industry Requirement",
    venue: "In Factory Premises",
    objectives: [
      "Develop trainers, instructors, and shop-floor supervisors with effective training tools, techniques, and methodologies",
      "Enable effective training delivery at shop-floor level",
    ],
    participants: ["Trainers", "Instructors", "Jobbers"],
    content: [
      "Identification of training needs",
      "Establishment of training goals and practices",
      "Learning process and designing training programmes",
      "Training methods and techniques",
      "Evaluation of training and assessment methods",
    ],
    fee: "₹6,000 + 18% GST",
    note: "Schedule as per industry requirement",
  },
  {
    title: "Role of Microbial Detection in Food Testing",
    status: "Completed",
    duration: "One Day",
    date: "21 March 2026",
    venue: "NITRA, Ghaziabad",
    objectives: [
      "Awareness of microbial detection in food safety",
      "Understanding BIS food testing standards",
      "Sampling, detection & enumeration techniques",
    ],
    participants: ["Food industry professionals", "PhD / PG / UG students"],
    content: [
      "Foodborne pathogens & safety",
      "Indian regulatory framework",
      "BIS standards: IS 5887, IS 5401",
      "Laboratory safety & practices",
    ],
    fee: "₹2,000 (Industry) | ₹1,000 (Students) + GST",
    lastDate: "14 March 2026",
  },
  {
    title:
      "Testing of Personnel on Microbiological, Water & Environmental Quality",
    status: "Completed",
    duration: "Two Days",
    date: "6–7 March 2026",
    venue: "NITRA, Ghaziabad",
    objectives: [
      "Understanding microbiological & water testing methods",
      "Interpretation of results & compliance",
      "Quality control & laboratory best practices",
    ],
    participants: ["Laboratory personnel", "Quality control professionals"],
    content: [
      "Environmental water testing (APHA / IS methods)",
      "Microbiological testing in textiles",
      "Sample preparation, incubation & interpretation",
      "Documentation & audits",
    ],
    fee: "₹3,000 + 18% GST",
    lastDate: "1 March 2026",
  },
  {
    title: "Shop-Floor Spinning Supervisors & Production Officers",
    status: "Completed",
    duration: "Four Days",
    date: "18–21 February 2026",
    venue: "NITRA, Ghaziabad",
    objectives: [
      "Skill upgradation for shop-floor supervisors",
      "Improve productivity & efficiency",
    ],
    participants: ["TGT / TDT trainees", "Supervisors", "Shift officers"],
    content: [
      "Manpower management",
      "Production planning & control",
      "Process control & machine efficiency",
      "Cost structure of spinning mills",
    ],
    fee: "₹6,000 + 18% GST",
    lastDate: "10 February 2026",
  },
  {
    title: "Understanding Fabrics, Fabric Defects & Inspection Systems",
    status: "Completed",
    duration: "One Day",
    date: "7 February 2026",
    venue: "NITRA, Ghaziabad",
    objectives: [
      "Enhance knowledge of fabrics and inspection systems",
      "Improve sourcing & quality control capability",
    ],
    participants: [
      "Production & QC personnel",
      "Fabric sourcing executives",
      "Garment export house professionals",
    ],
    content: [
      "Woven & knitted fabrics",
      "Fabric defects identification",
      "4-point & 10-point inspection system",
      "SOP & inspection reports",
    ],
    fee: "₹2,000 + 18% GST",
    lastDate: "1 February 2026",
  },
  {
    title: "Export–Import Procedures and Documentation",
    status: "Completed",
    duration: "One Day",
    date: "9 January 2026 (Friday)",
    venue: "NITRA, Ghaziabad",
    objectives: [
      "Enhance knowledge and skills to understand the overall perspective of the international business environment",
    ],
    participants: [
      "Export Manager",
      "Documentation Executive",
      "Sea Freight Coordinator",
      "Logistics Coordinator",
      "Freight Forwarder",
      "Export / Import Compliance Officer",
      "Merchandiser / Assistant Merchandiser",
    ],
    content: [
      "Introduction to Export and Import Procedure",
      "Export and Import Documentation",
      "International Trade Laws and Regulations",
      "Steps involved in processing of an export order",
      "Examination and confirmation of order",
      "Manufacturing or procuring goods",
      "Clearance from Central Excise",
      "Port formalities and customs clearance",
      "Dispatch of shipment",
      "Advice to the importer",
    ],
    fee: "₹2,000 + 18% GST",
    lastDate: "3 January 2026",
  },
  {
    title: "Energy Management System (ISO 50001)",
    status: "Completed",
    duration: "One Day",
    date: "20 December 2025",
    venue: "NITRA, Ghaziabad",
    objectives: [
      "Minimise energy cost without affecting production",
      "Reduce environmental impact",
    ],
    participants: ["Personnel involved in energy management"],
    content: [
      "Energy policy",
      "Identification of significant energy use",
      "Energy planning, implementation & review",
    ],
    fee: "₹3,000 + 18% GST",
    lastDate: "10 December 2025",
  },
  {
    title: "Water, Dyes & Chemical Conservation in Textile Industry",
    status: "Completed",
    duration: "One Day",
    date: "12 December 2025",
    venue: "NITRA, Ghaziabad",
    objectives: [
      "Promote sustainable textile processing",
      "Reduce cost & environmental impact",
    ],
    participants: [
      "Textile dyeing & finishing professionals",
      "Faculty & academicians",
    ],
    content: [
      "Water balance & conservation",
      "BAT techniques",
      "Case studies from textile units",
    ],
    fee: "₹2,000 + 18% GST",
    lastDate: "10 December 2025",
  },
];

export const metadata = {
  title: "Training Programmes at NITRA | NITRA",
  description:
    "Training programmes offered by NITRA, including objectives, participant profiles, course content, dates, venues, and fees.",
};

function ProgrammeList({ title, items, programmeIndex }) {
  return (
    <section
      className="nitra-training-detail"
      aria-labelledby={`training-${programmeIndex}-${title
        .toLowerCase()
        .replaceAll(" ", "-")}`}
    >
      <h3
        id={`training-${programmeIndex}-${title.toLowerCase().replaceAll(" ", "-")}`}
      >
        {title}
      </h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function TrainingProgrammesAtNitraPage() {
  return (
    <>
      <Header />
      <main className="about-page nitra-training-page">
        <section className="about-hero nitra-training-hero">
          <div className="about-hero-inner">
            <h1>Training Programmes at NITRA</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Training Programmes at NITRA
            </p>
          </div>
        </section>

        <section
          className="nitra-training-programmes"
          aria-label="Training programmes"
        >
          {programmes.map((programme, index) => (
            <article className="nitra-training-card" key={programme.title}>
              <header className="nitra-training-card-header">
                <h2>{programme.title}</h2>
                <span
                  className={`nitra-training-status nitra-training-status-${programme.status.toLowerCase()}`}
                >
                  {programme.status}
                </span>
              </header>

              <dl className="nitra-training-meta">
                {[
                  ["Duration", programme.duration],
                  ["Date", programme.date],
                  ["Venue", programme.venue],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}:</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>

              <ProgrammeList
                title="Programme Objective"
                items={programme.objectives}
                programmeIndex={index}
              />
              <ProgrammeList
                title="Participant Profile"
                items={programme.participants}
                programmeIndex={index}
              />
              <ProgrammeList
                title="Programme Content"
                items={programme.content}
                programmeIndex={index}
              />

              <dl className="nitra-training-footer">
                <div>
                  <dt>Fee:</dt>
                  <dd>{programme.fee}</dd>
                </div>
                {programme.note && (
                  <div>
                    <dt>Note:</dt>
                    <dd>{programme.note}</dd>
                  </div>
                )}
                {programme.lastDate && (
                  <div>
                    <dt>Last Date:</dt>
                    <dd>{programme.lastDate}</dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
