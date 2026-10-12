import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const annualReports = [
  { title: "Annual Report 2024–25", year: "2025", file: "Annual-Report-24-25.pdf" },
  { title: "Annual Report 2023–24", year: "2024", file: "Annual-Report-23-24.pdf" },
  { title: "Annual Report 2022–23", year: "2023", file: "Annual-Report-22-23.pdf" },
  { title: "Annual Report 2021–22", year: "2022", file: "Annual-Report-21-22.pdf" },
  { title: "Annual Report 2020–21", year: "2021", file: "Annual-Report-20-21.pdf" },
  { title: "Annual Report 2019–20", year: "2020", file: "Annual-Report-19-20.pdf" },
  { title: "Annual Report 2018–19", year: "2019", file: "Annual-Report-18-19.pdf" },
  { title: "Annual Report 2017–18", year: "2018", file: "Annual-Report-17-18.pdf" },
  { title: "Annual Report 2016–17", year: "2017", file: "Annual-Report-16-17.pdf" },
];

export const metadata = {
  title: "Annual Report | NITRA",
  description: "Browse and view NITRA annual reports from 2016–17 to 2024–25.",
};

export default function AnnualReportPage() {
  return (
    <>
      <Header />
      <main className="about-page annual-report-page">
        <section className="about-hero annual-report-hero">
          <div className="about-hero-inner">
            <h1>Annual Report</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Annual Report
            </p>
          </div>
        </section>

        <section className="annual-report-content" aria-labelledby="annual-report-heading">
          <h2 id="annual-report-heading">NITRA Annual Reports</h2>
          <div className="annual-report-table-wrap">
            <table className="annual-report-table">
              <caption className="visually-hidden">NITRA Annual Reports</caption>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Year</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {annualReports.map((report) => (
                  <tr key={report.file}>
                    <td>{report.title}</td>
                    <td>{report.year}</td>
                    <td>
                      <a
                        href={`/PDF/${report.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View / Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
