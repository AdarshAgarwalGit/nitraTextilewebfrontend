import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import researchPaperYears from "./research-papers.json";

export const metadata = {
  title: "Research Papers | NITRA",
  description:
    "Research papers published and presented by NITRA across the 2021–22 to 2024–25 reporting years.",
};

export default function ResearchPapersPage() {
  return (
    <>
      <Header />
      <main className="about-page research-papers-page">
        <section className="about-hero research-papers-hero">
          <div className="about-hero-inner">
            <h1>Research Papers</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Research Papers
            </p>
          </div>
        </section>

        <div className="research-papers-content">
          {researchPaperYears.map(({ year, papers }) => (
            <section
              className="research-papers-year"
              key={year}
              aria-labelledby={`research-papers-${year}`}
            >
              <h2 id={`research-papers-${year}`}>{year}</h2>
              <div className="research-papers-table-wrap">
                <table className="research-papers-table">
                  <caption className="visually-hidden">
                    Research papers for {year}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Sr. No.</th>
                      <th scope="col">Title</th>
                      <th scope="col">Author(s)</th>
                      <th scope="col">Publication/Place</th>
                      <th scope="col">Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {papers.map((paper) => (
                      <tr key={`${year}-${paper.number}`}>
                        <td>{paper.number}</td>
                        <td>{paper.title}</td>
                        <td>{paper.authors}</td>
                        <td>{paper.publication}</td>
                        <td>{paper.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
