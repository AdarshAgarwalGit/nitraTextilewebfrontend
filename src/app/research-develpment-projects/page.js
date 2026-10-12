import AboutDashboard from "@/components/AboutDashboard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ResearchProjectsDirectory from "@/components/ResearchProjectsDirectory";
import Link from "next/link";

const annualReports = [
  ["2023-24", "https://nitratextile.org/wp-content/uploads/2024/11/RD-202324.pdf"],
  ["2022-23", "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf"],
  ["2021-22", "https://nitratextile.org/wp-content/uploads/2023/11/RD-Projects-2021-22.pdf"],
  ["2020-21", "https://nitratextile.org/wp-content/uploads/2023/11/RD-projects-2020-21.pdf"],
  [
    "2019-20",
    "https://nitratextile.org/wp-content/uploads/2023/11/r-and-d-projects-2019-2020.pdf",
  ],
  [
    "2018-19",
    "https://nitratextile.org/wp-content/uploads/2023/11/r-and-d-projects-2018-2019.pdf",
  ],
  [
    "2017-18",
    "https://nitratextile.org/wp-content/uploads/2023/11/r-and-d-projects-2017-2018.pdf",
  ],
  [
    "2016-17",
    "https://nitratextile.org/wp-content/uploads/2023/11/r_and_d_projects_2016-2017.pdf",
  ],
  [
    "2015-16",
    "https://nitratextile.org/wp-content/uploads/2023/11/r_and_d_projects_2015-2016.pdf",
  ],
  [
    "2014-15",
    "https://nitratextile.org/wp-content/uploads/2023/11/r_and_d_projects_2014-2015.pdf",
  ],
  [
    "2013-14",
    "https://nitratextile.org/wp-content/uploads/2023/11/r-and-d-projects-2013-2014.pdf",
  ],
  [
    "2012-13",
    "https://nitratextile.org/wp-content/uploads/2023/11/r-and-d-projects-2012-2013.pdf",
  ],
  [
    "2011-12",
    "https://nitratextile.org/wp-content/uploads/2023/11/r-and-d-projects-2011-2012.pdf",
  ],
  [
    "2010-11",
    "https://nitratextile.org/wp-content/uploads/2023/11/r-and-d-projects-2010-2011.pdf",
  ],
  [
    "2009-10",
    "https://nitratextile.org/wp-content/uploads/2023/11/r-and-d-projects-2009-2010.pdf",
  ],
  [
    "1999-09",
    "https://nitratextile.org/wp-content/uploads/2023/11/r-and-d-projects-1999-2009.pdf",
  ],
];

export const metadata = {
  title: "Research & Development Projects | NITRA",
  description:
    "Explore NITRA research and development projects, filter projects by year, and view annual project reports.",
};

export default function ResearchDevelopmentProjectsPage() {
  return (
    <>
      <Header />
      <main className="about-page research-projects-page">
        <section className="about-hero research-projects-hero">
          <div className="about-hero-inner">
            <h1>Research &amp; Development Projects</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Research &amp; Development Projects
            </p>
          </div>
        </section>

        <section
          className="research-projects-content"
          aria-labelledby="research-projects-title"
        >
          <div className="research-projects-heading">
            <p className="about-kicker">NITRA Research</p>
            <h2 id="research-projects-title">Research &amp; Development Projects</h2>
            <span aria-hidden="true" />
          </div>
          <ResearchProjectsDirectory />

          <section className="research-annual-reports" aria-labelledby="annual-reports-title">
            <div className="research-projects-heading">
              <h2 id="annual-reports-title">Research &amp; Development (Detailed)</h2>
              <span aria-hidden="true" />
            </div>
            <ul>
              {annualReports.map(([year, href]) => (
                <li key={year}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <span>Research &amp; Development Projects {year}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <AboutDashboard />
      </main>
      <Footer />
    </>
  );
}
