"use client";

import { useMemo, useState } from "react";

export default function TendersDirectory({ tenders }) {
  const [search, setSearch] = useState("");
  const filteredTenders = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    if (!query) {
      return tenders;
    }

    return tenders.filter((tender) =>
      [tender.title, tender.lastDate, tender.extended]
        .filter(Boolean)
        .some((value) => value.toLocaleLowerCase().includes(query)),
    );
  }, [search, tenders]);

  return (
    <section className="tenders-content" aria-label="Tender notices">
      <div className="tenders-search">
        <label htmlFor="tenders-search-input">Search:</label>
        <input
          id="tenders-search-input"
          type="search"
          placeholder="Type to search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <p className="visually-hidden" aria-live="polite">
        Showing {filteredTenders.length} of {tenders.length} tender notices.
      </p>

      <div className="tenders-table-wrap">
        <table className="tenders-table">
          <caption className="visually-hidden">
            Tender notices, submission deadlines, and extensions
          </caption>
          <thead>
            <tr>
              <th scope="col">Details</th>
              <th scope="col">Last Date</th>
              <th scope="col">Extended (If So)</th>
            </tr>
          </thead>
          <tbody>
            {filteredTenders.map((tender, index) => {
              const href = tender.file
                ? `/PDF/${encodeURIComponent(tender.file)}`
                : tender.source;

              return (
                <tr key={`${tender.title}-${tender.lastDate}-${index}`}>
                  <td>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="tender-document-link"
                      >
                        {tender.title}
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    ) : (
                      <span>{tender.title}</span>
                    )}
                  </td>
                  <td>{tender.lastDate}</td>
                  <td>{tender.extended || "—"}</td>
                </tr>
              );
            })}
            {filteredTenders.length === 0 && (
              <tr>
                <td className="tenders-empty" colSpan={3}>
                  No tender notices match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
