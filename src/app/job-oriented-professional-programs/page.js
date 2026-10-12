import AboutDashboard from "@/components/AboutDashboard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const programDocumentGroups = [
  {
    title: "E-Prospectus",
    documents: [{ label: "Prospectus", file: "short-term.pdf" }],
  },
  {
    title: "Fee Details",
    documents: [
      { label: "Full Time Programmes", file: "ft-fee-details.pdf" },
      { label: "Distance Learning Programmes", file: "Dlp-fee-details.pdf" },
    ],
  },
  {
    title: "Application Form",
    documents: [
      {
        label: "Application Form Full Time Programmes",
        file: "Application-Form-for-FT-programs-2.pdf",
      },
      {
        label: "Application Form Distance Learning Programmes",
        file: "APPLICATION-FORM-for-DLP-2.pdf",
      },
    ],
  },
  {
    title: "No Due Form",
    documents: [{ label: "No Dues Form", file: "no-dues-form-new.pdf" }],
  },
  {
    title: "Campus Recruitment",
    documents: [
      {
        label: "Campus Recruitment List",
        file: "Campus-recuiters-for-NITRA-website.pdf",
      },
    ],
  },
];

export const metadata = {
  title: "Job Oriented Professional Programs for 2026-27 | NITRA",
  description:
    "Prospectus, fee details, application forms, no dues form, and campus recruitment information for NITRA programs.",
};

export default function JobOrientedProfessionalProgramsPage() {
  return (
    <>
      <Header />
      <main className="about-page job-programs-page">
        <section className="about-hero job-programs-hero">
          <div className="about-hero-inner">
            <h1>Job Oriented Professional Programs for 2026-27</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Job Oriented Professional Programs
              for 2026-27
            </p>
          </div>
        </section>

        <section
          className="job-programs-documents"
          aria-label="Program documents"
        >
          {programDocumentGroups.map((group) => (
            <section
              className="job-programs-document-group"
              key={group.title}
              aria-labelledby={`job-programs-${group.title
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              <h2 id={`job-programs-${group.title.toLowerCase().replaceAll(" ", "-")}`}>
                {group.title}
              </h2>
              <div className="job-programs-table-wrap">
                <table className="job-programs-table">
                  <caption className="visually-hidden">{group.title}</caption>
                  <tbody>
                    {group.documents.map((document) => (
                      <tr key={document.file}>
                        <td>{document.label}</td>
                        <td>
                          <a href={`/PDF/${document.file}`}>Download / View</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </section>

        <AboutDashboard />
      </main>
      <Footer />
    </>
  );
}
