import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const patentsGranted = [
  "A water saving hank dyeing machine for dyeing textile yarn. Patent No. 567030 dt. 30.05.2025; Patent Application No. 201911015524 dt. 18.04.2019 (Inventor: Dr. M.S. Parmar)",
  "Method of manufacturing thermal barrier or liner using roving woven material – Patent No. 502720 dt. 24.01.2024 (Inventors: Dr. M.S. Parmar, Mr A.K. Pandey, Ms. Shweta Chauhan and Ms. Nidhi Sisodia) (Patent Application no. 201711010197 dt. 23.03.2017)",
  "An apparatus to determine dust resistance characteristics of sheeting Material – Patent No. 459098, dated 15.10.2023 (Inventors: Dr. M.S. Parmar & Ms. Shweta Saxena) (Patent Application no. 201711002704 dt. 24.01.2017)",
  "An apparatus to determine smoothness of a sheeting material – Patent No. 380915, dated 29.10.2021 (Inventor: Dr. M.S. Parmar) (Patent Application no. 2053/DEL/2015 dt. 07.07.2015)",
  "A short manufacturing process for semi-finished and/or finished products using a loom – Patent No. 357432 dt. 01.02.2021 (Inventors: Dr. J.V. Rao & Shri A.K. Pandey) (Patent Application no. 2615/DEL/2011 dt. 09.03.2012)",
  "A process for fiber extraction from Pine Needles (Perul) – Patent No. 355691 dt. 12.01.2021 (Inventors: Shri Ajay Tamta, Ms. Shweta Chauhan and Dr. Arindam Basu) (Patent Application No. 201711001977 dt. 18.01.2017)",
  "An apparatus to determine heat and light cutting ability of curtains – Patent No. 350763 dt. 03.11.2020 (Inventor: Dr. M.S. Parmar) (Patent Application No. 180/DEL/2012 dt. 20.01.2012)",
  "An instrument to measure linear density of continuous elastane threads and strands – Patent No. 244569 on 10.12.2010 (Inventors: Sri Neeraj Agarwal & Dr. J.V. Rao) (Patent Application No. 218/DEL/2004, 16.02.2004)",
  "A compact indigo dyeing device for dyeing a thread flock – Indian Patent No. 222432 on 08.08.2008 (Inventor: Dr. M. S. Parmar) (Patent Application No. 23/DEL/2001)",
  "A Draftometer – Patent No. 221976 granted on 12.07.2008 (Inventors: Dr. A. Das, Shri Vikas Sharma and Shri Pankaj Yadav) (Patent Application No. 1189/DEL/2002, dt. 26.11.2002)",
  "A process for the treatment of yarn/fabric (textile materials) having UV radiation/protection and flame resistant properties – Patent No. 216779 on 19.03.2008 (Inventor: Dr. M.S. Parmar) (Patent Application No. 110/DEL/2002, 13.02.2002)",
  "A process for the treatment of textile industries effluent to obtain clear effluent – Application No. 708/DEL/2000 on 08.02.2006 (IPN awaited) (Inventor: Northern India Textile Research Association)",
  "A hank dryer – Indian Patent No. 197543 on 29.12.2006 (Inventor: Sri D.K. Bhattacharaya) (Patent Application No. 87/DEL/2003)",
];

const patentsFiled = [
  "Optimum transfer trajectories with minimum time ballistic, Indian patent application no.: 202511081997 A, dt.: 09/09/2025",
  "Fire entry multilayered fabric for fire and heat protection ensembles, Indian patent application no.: 202511055555, dt.: 09/06/2025, Applicants: MoT, GoI & NITRA Ghaziabad, Inventors: Dr. M.S. Parmar, Dr. Nidhi Sisodia, Mr. Swami Sharan & Mr. Kuldeep Yadav",
  "Thermal resistance 3D knitted spacer fabric from milkweed floss and process for preparation thereof, Application No.: 202511055556 dated 09/06/2025, Applicants: MoT, GoI & NITRA Ghaziabad, Inventors: Dr. M.S. Parmar, Dr. Preeti Kaur Sachdeva & Mr. Lalit Giri Goswami",
  "Aluminized milkweed fabric / blend thereof for thermal resistance materials and process for preparation thereof, Application No.: 202511055554 dated 09/06/2025, Applicants: MoT, GoI & NITRA Ghaziabad, Inventors: Dr. M.S. Parmar & Dr. Preeti Kaur Sachdeva",
  "An automatic machine and method for separation of floss and seed from milkweed pods, Application No.: 202511045610 dated 12/05/2025, Applicants: MoT, GoI & NITRA Ghaziabad, Inventors: Dr. M.S. Parmar, Dr. Preeti Kaur Sachdeva & Mr. Sanjay",
  "Thermally comfortable three-layered 3D impact resistant fabric for sports protective goods and process for preparation thereof, Patent Application No.: 202511039445 dt. 24/04/2025, Applicants: MoT, GoI & NITRA Ghaziabad, Inventors: Dr. Arindam Basu and Dr. Roopam Chauhan",
  "Polymerization of Nylon 66 from monomer with a single reactor, Patent Application No.: 202511034223 dt. 08/04/2025, Applicants: MoT, GoI & NITRA Ghaziabad, Inventors: Dr. Arindam Basu & Dr. Sundaramoorthy Palanisamy",
  "An improved method for processing sunnhemp (Crotalaria Juncea) plants to produce fine-grade fibers, Application No. 202411073760 dated 30.09.2024",
  "A patent on Flushable biodegradable sanitary pads, Application No.: 20241106972, dt.: 15.09.2024, Inventors: Ranu Suryakant Khade & Dr. Nidhi Sisodia",
  "An Automotive component and process for manufacturing thereof from waste jute blends for automotive application, Patent Application No.: 202311082687 dated 05.12.2023",
  "Method of manufacturing jute based fabric for protection against Molten Metal Splash, Patent Application No.: 202311082688 dated 05.12.2023",
  "Blockchain based authentication system for IoT networks, Patent Application No.: 202341066014 dated 02.10.2023",
  "IoT based smart milk pan, Patent Application No.: 202311067403 dated 07.10.2023",
  "Prediction of academic monitoring system in higher educational institute incorporating AI, Patent Application No.: 202311057775 dated 28.08.2023",
  "Cloud-based predictive maintenance system for electric vehicle batteries using deep learning, Patent Application No.: 202341059803 dated 06.09.2023",
  "A collaborative filtering based system for opinion extraction and sentiment analysis, Patent Application No.: 202311045904 dated 07.07.2023",
  "A process for preparing water-repellant milkweed floss/fibre for preserving thermo-regulatory property thereof, Patent Application No.: 202111055410 dated 28.11.2022 (Filed with complete patent specifications) (Inventor: Dr. M.S. Parmar)",
  "A process for preparation of regenerated bamboo fibre from indigenous bamboo, Patent Application No.: 20211029728 dated 24.05.2022 (Inventors: Dr. Arindam Basu & Dr. Nidhi Sisodia)",
  "An apparatus to determine Air Pollutant Gas Adsorption Capability of Fabric, Patent Application No.: 202111062044 dated 31.12.2021 (Inventors: Dr. Arindam Basu & Dr. M.S. Parmar)",
  "Method of preparing flexible impact and stab resistance material, Patent Application No.: 201911030134 dated 25.07.2019 (Inventors: Dr. M.S. Parmar, Neha Kapil & Nidhi Sisodia)",
  "A compressed air monitoring system to optimize energy consumption in a textile mill, Patent Application No.: 201911016310 dated 24.04.2019 (Inventors: Shri Vikas Sharma & Shri Paurush Godhar)",
  "A stretchable composite embroidery thread, Patent Application No.: 201911016309 dated 24.04.2019 (Inventors: Shri Neeraj Agarwal, Dr. M.S. Parmar & Shri Vivek Agarwal)",
  "Extraction of fibres from Kanghi or Atibala plant (Abutilon Indicum) using retting process, Patent Application No.: 201811047418 dated 14.12.2018 (Inventors: Dr. M.S. Parmar, Ms. Nidhi Sisodia & Vinay)",
  "Extraction of textile fibers from corn husk, Patent Application No.: 201711039937 dated 09.11.2017 (Inventors: Dr. M.S. Parmar & Ms. Nidhi Sisodia)",
  "An attachment for shuttleless rapier looms for reducing selvedge waste, Provisional Patent Application No.: 1856/DEL/2011 dated 30.06.2011 (Inventor: Shri A.K. Pandey)",
  "A device for measuring frictional characteristics, Patent Application No.: 1188/DEL/2002 dated 26.11.2002 (Inventors: Dr. A. Das & Shri Vikas Sharma)",
];

const trademarksFiled = [
  "Indian Trademark Application No. 7102666 for the mark “CLOCell (device)” in class 22 in the name of Northern India Textile Research Association filed with the Trademark Registration Office, Govt. of India.",
];

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
              <tr key={entry}>
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

export const metadata = {
  title: "Patents Obtained and Filed | NITRA",
  description:
    "Browse patents granted, patent applications filed, and trademark filings associated with NITRA.",
};

export default function PatentsObtainedAndFiledPage() {
  return (
    <>
      <Header />
      <main className="about-page patents-page">
        <section className="about-hero patents-hero">
          <div className="about-hero-inner">
            <h1>Patents Obtained and Filed</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Patents Obtained and Filed
            </p>
          </div>
        </section>

        <div className="patents-content">
          <PatentTable title="Patents Granted" entries={patentsGranted} />
          <PatentTable title="Patents Filed" entries={patentsFiled} />
          <PatentTable title="Trademark Filed" entries={trademarksFiled} />
        </div>
      </main>
      <Footer />
    </>
  );
}
