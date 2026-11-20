"use client";

import { useEffect, useState } from "react";
import { fetchPatents } from "@/lib/api";

function PatentTable({ title, entries }) {
  return (
    <section className="patent-section" aria-label={title}>
      <h2>{title}</h2>
      <div className="patent-table-wrap">
        <table className="patent-table">
          <thead>
            <tr>
              <th scope="col">S. No.</th>
              <th scope="col">{title}</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={`${entry}-${index}`}>
                <td>{index + 1}.</td>
                <td>{entry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function PatentsDirectory({
  initialGranted = [],
  initialFiled = [],
  initialTrademarks = [],
}) {
  const [granted, setGranted] = useState(initialGranted);
  const [filed, setFiled] = useState(initialFiled);
  const [trademarks] = useState(initialTrademarks);

  useEffect(() => {
    async function loadData() {
      const live = await fetchPatents();
      if (live) {
        if (Array.isArray(live.granted) && live.granted.length > 0) {
          setGranted(live.granted);
        }
        if (Array.isArray(live.filed) && live.filed.length > 0) {
          setFiled(live.filed);
        }
      }
    }
    loadData();
  }, []);

  return (
    <div className="patents-content">
      <PatentTable title="Patents Granted" entries={granted} />
      <PatentTable title="Patents Filed" entries={filed} />
      <PatentTable title="Trademark Filed" entries={trademarks} />
    </div>
  );
}
