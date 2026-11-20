"use client";

import { useEffect, useState } from "react";
import { fetchTeamMembers } from "@/lib/api";

const initialEmployees = [
  {
    name: "Dr. M.S. Parmar",
    designation: "Director General",
    qualification: "M.Sc., Ph.D., PGDMM, DCPA",
  },
  {
    name: "Dr. B.K. Sharma",
    designation: "Director, NITRA Technical Campus",
    qualification: "M.Tech., Ph.D., PGDM, SMCSI & FIETE",
  },
  {
    name: "Mr. Vivek Agarwal",
    designation: "Deputy Director",
    qualification: "B.Tech., PGDBM, MS (by Research)",
  },
  {
    name: "Mr. Sanjeev Shukla",
    designation: "Assistant Director",
    qualification: "B.Sc., B.Text., M.Tech., PGDBM",
  },
  {
    name: "Mr. K.K. Dewan",
    designation: "Assistant Director, Registrar – NITRA Technical Campus",
    qualification: "PGDBM, M.Sc. (Comp. Sc.), BHM, e-Commerce",
  },
  {
    name: "Dr. Neha Kapil",
    designation: "Assistant Director",
    qualification: "M.Sc. (Textile & Clothing), M.Phil, Ph.D.",
  },
  {
    name: "Dr. Shweta Saxena",
    designation: "Assistant Director",
    qualification: "M.Sc. (Textile & Clothing), M.Phil, Ph.D.",
  },
  {
    name: "Mr. Kushagra Prakash",
    designation: "Principal Scientific Officer",
    qualification: "B.Text. (Textile Tech.), M.F.Tech. (Apparel Production)",
  },
  {
    name: "Mr. Vikas Sharma",
    designation: "Assistant Director",
    qualification: "B.E. (Mechanical), Adv. Dip. in MM & CM, BEE Certified Energy Auditor",
  },
  {
    name: "Mr. Lalit Giri Goswami",
    designation: "Senior Scientific Officer",
    qualification: "B.E. in Textile Technology",
  },
  {
    name: "Mr. M.K. Bansal",
    designation: "Principal Scientific Officer",
    qualification: "Diploma in Textile Technology, MBA",
  },
  {
    name: "Dr. Nidhi Sisodia",
    designation: "Senior Scientific Officer",
    qualification: "M.Sc., M.Tech., Ph.D. (Textile Chemistry)",
  },
  {
    name: "Dr. Preeti Kaur Sachdeva",
    designation: "Senior Scientific Officer",
    qualification: "M.Sc. (Fabric & Apparel Science), Ph.D.",
  },
  {
    name: "Dr. Roopam Chauhan",
    designation: "Senior Scientific Officer",
    qualification: "Ph.D., M.Tech. (Textile Technology), B.Tech. (Textile Technology)",
  },
  {
    name: "Dr. Sundaramoorthy P",
    designation: "Senior Scientific Officer",
    qualification: "Ph.D., M.Tech. (Textile Technology), B.Tech. (Textile Technology)",
  },
  {
    name: "Mr. C.P. Bansal",
    designation: "Polymer Technologist",
    qualification: "MBA, M.E., M.Sc., B.Sc.",
  },
  {
    name: "Mrs. Annu Kumari",
    designation: "Scientific Officer",
    qualification: "M.Sc. Tech. (Environmental Science & Technology), PGDM (Business Administration), PGDM (Marketing), DCA",
  },
  {
    name: "Mr. Pankaj Kumar",
    designation: "Scientific Officer",
    qualification: "B.Tech., M.Tech. (Textile Chemistry)",
  },
  {
    name: "Mr. Ravi Sonkar",
    designation: "Scientific Officer",
    qualification: "Diploma in Textile Technology, B.Tech., M.Tech. (Textile Technology)",
  },
];

const defaultDesignations = [
  "Director General",
  "Director",
  "Deputy Director",
  "Assistant Director",
  "Principal Scientific Officer",
  "Senior Scientific Officer",
  "Scientific Officer",
  "Polymer Technologist",
];

function matchesDesignation(employeeDesignation, filter) {
  if (filter === "all") {
    return true;
  }
  const designation = (employeeDesignation || "").toUpperCase();
  const selected = filter.toUpperCase();

  return (
    designation === selected ||
    designation.startsWith(`${selected},`) ||
    designation.startsWith(`${selected} -`) ||
    designation.startsWith(`${selected} –`)
  );
}

export default function WhoIsWhoDirectory() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [designationFilter, setDesignationFilter] = useState("all");

  useEffect(() => {
    async function loadData() {
      const live = await fetchTeamMembers("who_is_who");
      if (live && live.length > 0) {
        setEmployees(live);
      }
    }
    loadData();
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    matchesDesignation(employee.designation, designationFilter),
  );

  return (
    <section className="who-directory" aria-label="Complete NITRA staff list">
      <div className="who-directory-filter">
        <label htmlFor="designation-filter">Filter by Designation</label>
        <select
          id="designation-filter"
          value={designationFilter}
          onChange={(event) => setDesignationFilter(event.target.value)}
        >
          <option value="all">All</option>
          {defaultDesignations.map((designation) => (
            <option key={designation} value={designation}>
              {designation}
            </option>
          ))}
        </select>
      </div>

      <div className="who-directory-table-wrapper">
        <table className="who-directory-table">
          <caption className="visually-hidden">
            Complete list of NITRA employees, designations, and qualifications
          </caption>
          <thead>
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Name of Employee</th>
              <th scope="col">Designation</th>
              <th scope="col">Qualification</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee, index) => (
                <tr key={`${employee.name}-${index}`}>
                  <td>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.qualification || "—"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="who-directory-empty" colSpan={4}>
                  No employees found for this designation.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
