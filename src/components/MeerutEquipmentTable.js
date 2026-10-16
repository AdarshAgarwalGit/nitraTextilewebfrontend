"use client";

import { useState } from "react";

export default function MeerutEquipmentTable({ equipment }) {
  const [category, setCategory] = useState("All");
  const visibleEquipment =
    category === "All"
      ? equipment
      : equipment.filter((item) => item.testedFor === category);

  return (
    <section
      className="itadc-centre-section"
      aria-labelledby="meerut-physical-lab-title"
    >
      <div className="itadc-section-heading">
        <p className="itadc-kicker">Physical testing</p>
        <h2 id="meerut-physical-lab-title">
          Equipments Installed in Physical Laboratory
        </h2>
      </div>
      <section className="itadc-card meerut-equipment-card">
        <div className="meerut-equipment-filter">
          <label htmlFor="meerut-equipment-category">Testing for:</label>
          <select
            id="meerut-equipment-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>All</option>
            <option>Fabrics</option>
            <option>Yarn</option>
          </select>
        </div>
        <div className="meerut-equipment-table-wrap">
          <table className="meerut-equipment-table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name of the Equipment</th>
                <th scope="col">Testing for</th>
              </tr>
            </thead>
            <tbody>
              {visibleEquipment.map((item) => (
                <tr key={item.name}>
                  <td>{equipment.indexOf(item) + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.testedFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
