"use client";

import { useEffect, useMemo, useState } from "react";
import staticBulletins from "@/app/new-bulletin/bulletins.json";
import { fetchBulletins } from "@/lib/api";

export default function BulletinDirectory() {
  const [bulletinsList, setBulletinsList] = useState(staticBulletins);
  const [selectedYear, setSelectedYear] = useState("all");

  useEffect(() => {
    fetchBulletins().then((liveData) => {
      if (liveData && liveData.length > 0) {
        setBulletinsList(liveData);
      }
    });
  }, []);

  const years = useMemo(
    () => [...new Set(bulletinsList.map((bulletin) => bulletin.year))],
    [bulletinsList]
  );

  const visibleBulletins = useMemo(
    () =>
      selectedYear === "all"
        ? bulletinsList
        : bulletinsList.filter((bulletin) => bulletin.year === selectedYear),
    [selectedYear, bulletinsList],
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
            {visibleBulletins.map((bulletin, idx) => {
              let href = bulletin.file;
              if (href && !href.startsWith("http") && !href.startsWith("/")) {
                href = `/PDF/${bulletin.file}`;
              }

              return (
                <tr key={`${bulletin.year}-${bulletin.month}-${idx}`}>
                  <td>{bulletin.month}</td>
                  <td>{bulletin.year}</td>
                  <td>
                    {href ? (
                      <a
                        href={href}
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
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="bulletin-results" aria-live="polite">
        Showing {visibleBulletins.length} of {bulletinsList.length} bulletins
      </p>
    </section>
  );
}
