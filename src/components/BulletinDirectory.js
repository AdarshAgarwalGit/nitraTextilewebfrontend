"use client";

import { useMemo, useState } from "react";
import bulletins from "@/app/new-bulletin/bulletins.json";

const years = [...new Set(bulletins.map((bulletin) => bulletin.year))];

export default function BulletinDirectory() {
  const [selectedYear, setSelectedYear] = useState("all");
  const visibleBulletins = useMemo(
    () =>
      selectedYear === "all"
        ? bulletins
        : bulletins.filter((bulletin) => bulletin.year === selectedYear),
    [selectedYear],
  );

  return (
    <section className="bulletin-content" aria-label="NITRA News">
      <div className="bulletin-filter">
        <label htmlFor="bulletin-year">Filter by Year</label>
        <select
          id="bulletin-year"
          value={selectedYear}
          onChange={(event) => setSelectedYear(event.target.value)}
        >
          <option value="all">All</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="bulletin-table-wrap">
        <table className="bulletin-table">
          <caption className="visually-hidden">NITRA News bulletin archive</caption>
          <thead>
            <tr>
              <th className="bulletin-title" colSpan="3">
                NITRA News
              </th>
            </tr>
            <tr>
              <th scope="col">Month</th>
              <th scope="col">Year</th>
              <th scope="col">Download / View</th>
            </tr>
          </thead>
          <tbody>
            {visibleBulletins.map((bulletin) => (
              <tr key={`${bulletin.year}-${bulletin.month}`}>
                <td>{bulletin.month}</td>
                <td>{bulletin.year}</td>
                <td>
                  {bulletin.file ? (
                    <a
                      href={`/PDF/${bulletin.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View PDF
                    </a>
                  ) : (
                    <span className="bulletin-unavailable">
                      PDF currently unavailable
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="bulletin-results" aria-live="polite">
        Showing {visibleBulletins.length} of {bulletins.length} bulletins
      </p>
    </section>
  );
}
