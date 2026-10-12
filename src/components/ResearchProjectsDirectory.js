"use client";

import { useMemo, useState } from "react";

const projects = [
  {
    id: "202401",
    title:
      "Development of 3D High Performance Knitted Sports Textiles with Thermo-Physiological Comfort and Impact Protective Properties (Sponsored by NTTM, Ministry of Textiles, Govt. of India)",
    year: "2024",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-202324.pdf",
  },
  {
    id: "202402",
    title:
      "Cellulose-based Indigenous High ClO Value and Low-Density Surface Modified Natural Fibre for Developing Thermal Layers of Extreme Cold Weather Clothing (Sponsored by NTTM, Ministry of Textiles, Govt. of India)",
    year: "2024",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-202324.pdf",
  },
  {
    id: "202403",
    title:
      "Pollution Prevention and Effective Waste Management of the Units in Panipat Textile Cluster (Sponsored by Solidaridad, New Delhi)",
    year: "2024",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-202324.pdf",
  },
  {
    id: "202404",
    title:
      "Development of Indigenous State-of-the-Art Instruments for Protective Textiles (Sponsored by NTTM, Ministry of Textiles, Govt. of India)",
    year: "2024",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-202324.pdf",
  },
  {
    id: "202301",
    title: "Development of Regenerated Cellulosic Fibre from Indian Bamboo (Completed Project)",
    year: "2023",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf",
  },
  {
    id: "202302",
    title:
      "Development of a Molten Metal Splash Resistance Unique Jute Blended Work Wear for Steel Foundry Workers",
    year: "2023",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf",
  },
  {
    id: "202303",
    title:
      "Development of Jute Composite for Automotive Acoustic Insulation and Other Uses (Sponsored by National Jute Board, Govt. of India)",
    year: "2023",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf",
  },
  {
    id: "202304",
    title:
      "Socio-economic Development of SC/ST by Providing Training, Technology, and Market to Convert Local Resources to Industrial Products (Sanctioned by DST, Govt. of India)",
    year: "2023",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf",
  },
  {
    id: "202305",
    title:
      "Development of Specialized Firefighting Suit (Sanctioned by NTTM, Ministry of Textiles, Govt. of India)",
    year: "2023",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf",
  },
  {
    id: "202306",
    title:
      "Development of Flame Retardant Nylon 66 Yarn/Fibre Indigenously (Sanctioned by NTTM, Ministry of Textiles, Govt. of India)",
    year: "2023",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf",
  },
  {
    id: "202307",
    title:
      "Development of Crop Cover, Mulch, Soil Protection Fabrics, and Other Products Using Sunnhemp and Banana Fibre",
    year: "2023",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf",
  },
  {
    id: "202308",
    title:
      "Development of 3D High-Performance Knitted Sports Textiles with Thermo-Physiological Comfort and Impact Protective Properties",
    year: "2023",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf",
  },
  {
    id: "202309",
    title:
      "Development of Ceramic and UHMWPE Textile-based Hybrid Polymer Composite Armor (Jointly with MNIT, Jaipur)",
    year: "2023",
    report: "https://nitratextile.org/wp-content/uploads/2024/11/RD-2022-23.pdf",
  },
  {
    id: "202201",
    title:
      "New Approaches to Reduce Water Consumption in Textile Wet Processing (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2022",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/New-Approaches-to.pdf",
  },
  {
    id: "202202",
    title:
      "Development of value added product from different Fibres in Himalayan Region (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2022",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/Himalayan-rigion-1.pdf",
  },
  {
    id: "202203",
    title:
      "Development of air cleaner home textiles to reduce Indoor air pollution (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2022",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/air-cleaner.pdf",
  },
  {
    id: "202204",
    title: "Development of FR knitted fabric for anti-flash hood for Indian Navy",
    year: "2022",
  },
  {
    id: "202205",
    title: "Development of antibacterial and antifungal properties in cotton and lotus fabric",
    year: "2022",
  },
  {
    id: "202101",
    title:
      "Setting up of Common Effluent Treatment Plant (CETP) -150 KLD at Ajrakhpur, Bhuj (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2021",
    report:
      "https://nitratextile.org/wp-content/uploads/2024/01/Common-Effluent-Treatment-Plant.pdf",
  },
  { id: "202102", title: "Development of coat combat disruptive", year: "2021" },
  {
    id: "202103",
    title: "Development of technical textile products in the field of feminine hygiene",
    year: "2021",
  },
  {
    id: "202001",
    title:
      "Development of protective work wear for cement porters (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2020",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/cement-porter.pdf",
  },
  {
    id: "202002",
    title:
      "Development of mutlilayered flame & thermal resistant fabric for fire-fighter clothing (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2020",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/multi-layered.pdf",
  },
  {
    id: "202003",
    title:
      "Development of an Android-based Mobile Application for garment industry for Instant Information Access and Quick Decision Making",
    year: "2020",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/mobile.pdf",
  },
  {
    id: "202004",
    title: "Development of Improved version of body protector used for riots control",
    year: "2020",
  },
  {
    id: "201901",
    title:
      "Development of protective work wear for cement porters (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2019",
  },
  {
    id: "201801",
    title:
      "Development of fabric smoothness tester (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2018",
  },
  {
    id: "201802",
    title:
      "Development of electronic drape meter based on image analysis technique (Sponsored by Department of Science & Technology, Govt. of India)",
    year: "2018",
  },
  {
    id: "201803",
    title:
      "Development of smart protective textiles for fire fighter, soldier and old-age people (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2018",
  },
  {
    id: "201804",
    title:
      "Extraction of textile fibres from pine needle and development of various products from it.",
    year: "2018",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/Extraction-of-textile.pdf",
  },
  {
    id: "201805",
    title: "Development of work wear for electroplating workers",
    year: "2018",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/electroplating-workers.pdf",
  },
  {
    id: "201806",
    title:
      "Treatment of khadi cotton fabric with herbal extract for developing reusable baby diapers",
    year: "2018",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/khadi-cotton.pdf",
  },
  {
    id: "201807",
    title: "A study on extraction and application of sugarcane fibres in textiles.",
    year: "2018",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/sugarcane.pdf",
  },
  {
    id: "201701",
    title:
      "Study to Enhance Indian Apparel Exports (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2017",
  },
  {
    id: "201702",
    title: "De-colorization of cotton textile wet processing effluent through nano particles",
    year: "2017",
  },
  {
    id: "201601",
    title:
      "Designing a compressed air monitoring system to optimize energy consumption in a textile mills (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2016",
  },
  {
    id: "201602",
    title:
      "Development of specialty embroidery yarn for application in stretchable fabrics, like knitted fabrics (Sponsored by Ministry of Textiles, Govt. of India)",
    year: "2016",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/specialty-embroidery.pdf",
  },
  {
    id: "201603",
    title: "Development of suitable work-wear for workers of oil and gas industry.",
    year: "2016",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/oil-and-gas.pdf",
  },
  {
    id: "201604",
    title: "To explore the possibility and application of the corn husk in textiles.",
    year: "2016",
    report: "https://nitratextile.org/wp-content/uploads/2024/01/corn-husk.pdf",
  },
];

export default function ResearchProjectsDirectory() {
  const [year, setYear] = useState("All");
  const [search, setSearch] = useState("");
  const years = [...new Set(projects.map((project) => project.year))];
  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesYear = year === "All" || project.year === year;
      const matchesSearch =
        !query ||
        `${project.id} ${project.title} ${project.year}`.toLowerCase().includes(query);
      return matchesYear && matchesSearch;
    });
  }, [search, year]);

  return (
    <div className="research-project-directory">
      <div className="research-project-controls">
        <label>
          <span>Year:</span>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            <option value="All">All</option>
            {years.map((projectYear) => (
              <option key={projectYear} value={projectYear}>
                {projectYear}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Search:</span>
          <input
            type="search"
            placeholder="Type to search..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </div>
      <div className="research-project-table-wrap">
        <table className="research-project-table">
          <thead>
            <tr>
              <th scope="col">Sr. No</th>
              <th scope="col">Project Title</th>
              <th scope="col">Year</th>
              <th scope="col">Download/View</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td>{project.year}</td>
                <td>
                  {project.report ? (
                    <a href={project.report} target="_blank" rel="noopener noreferrer">
                      Download / View
                    </a>
                  ) : (
                    <span className="research-project-unavailable">Not available</span>
                  )}
                </td>
              </tr>
            ))}
            {filteredProjects.length === 0 && (
              <tr>
                <td colSpan="4" className="research-project-empty">
                  No projects match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="research-project-result-count" aria-live="polite">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>
    </div>
  );
}
