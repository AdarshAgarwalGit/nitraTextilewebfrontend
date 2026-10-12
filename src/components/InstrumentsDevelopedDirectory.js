"use client";

import { useMemo, useState } from "react";

const instruments = [
  "An apparatus to determine dust resistance characteristics of sheeting Material",
  "An apparatus to determine Air pollutant gas adsorption capability of fabric",
  "Stab and impact resistance tester",
  "Synthetic Blood Penetration Tester",
  "Electronic drape meter",
  "Compressed air monitoring system for textile industry",
  "Fabric smoothness tester (patented)",
  "Light & Heat Cutting Tester (patented)",
  "An attachment for waste reduction in rapier loom (application for patent filed)",
  "Modified power loom to produce seamless jute bags/sacks (patented)",
  "Soil release efficiency tester",
  "Dimensional stability to dry heat tester",
  "Elastane yarn count tester (patented)",
  "Draftometer (patented)",
  "Fabric hand tester",
  "Friction tester (application for patent filed)",
  "Water vapour permeability tester",
  "Toxicity tester",
  "Equipment for color fastness to daylight (As per IS 686)",
  "Fire resistant test apparatus (As per UIC code 562 – 2 Appendix 5 and 12)",
  "Smoke visibility test apparatus (As per UIC code 562 – 2 Appendix 15)",
  "Flammability tester (As per IS 11871 Method A)",
  "Flammability tester (As per BS 5438)",
];

export default function InstrumentsDevelopedDirectory() {
  const [search, setSearch] = useState("");
  const filteredInstruments = useMemo(() => {
    const query = search.trim().toLowerCase();
    return query
      ? instruments.filter((instrument) => instrument.toLowerCase().includes(query))
      : instruments;
  }, [search]);

  return (
    <section className="instruments-developed-directory" aria-label="NITRA instruments">
      <label className="instruments-developed-search">
        <span>Search:</span>
        <input
          type="search"
          placeholder="Type to search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </label>

      <div className="instruments-developed-table-wrap">
        <table className="instruments-developed-table">
          <thead>
            <tr>
              <th scope="col">Instruments</th>
            </tr>
          </thead>
          <tbody>
            {filteredInstruments.map((instrument) => (
              <tr key={instrument}>
                <td>{instrument}</td>
              </tr>
            ))}
            {filteredInstruments.length === 0 && (
              <tr>
                <td className="instruments-developed-empty">
                  No instruments match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="instruments-developed-result-count" aria-live="polite">
        Showing {filteredInstruments.length} of {instruments.length} instruments
      </p>
    </section>
  );
}
