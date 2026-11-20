"use client";

import { useEffect, useState } from "react";
import { fetchAnnualReports } from "@/lib/api";

export default function AnnualReportsDirectory({ initialReports = [] }) {
  const [reports, setReports] = useState(initialReports);

  useEffect(() => {
    async function loadData() {
      const live = await fetchAnnualReports();
      if (live && live.length > 0) {
        setReports(live);
      }
    }
    loadData();
  }, []);

  return (
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
          {reports.map((report, idx) => (
            <tr key={`${report.title}-${idx}`}>
              <td>{report.title}</td>
              <td>{report.year}</td>
              <td>
                {report.file ? (
                  <a
                    href={report.file.startsWith("http") || report.file.startsWith("/") ? report.file : `/PDF/${report.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View / Download
                  </a>
                ) : (
                  <span className="text-gray-400">Available on request</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
