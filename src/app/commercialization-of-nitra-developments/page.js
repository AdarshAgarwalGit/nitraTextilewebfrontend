import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const technologyTransfers = [
  "Molten Metal splash resistance fabric to M/s. JCT Limited, Phagwara",
  "Roof liner and Parcel Tray to M/s. RFM Automotives Pvt. Ltd., Gurgaon",
  "Technology to process raw banana fibre transferred to Gencrest Bio Products Private Ltd., Mumbai",
  "Next generation ecofriendly antimicrobial technology “Citron” to Polygiene Group, Styrmansgatan, Sweden",
  "Reusable sanitary pads and diapers to Kaytent Industries",
  "Flash resistance hood for Indian Navy to M/s Aero Garment",
  "Improved version of Body protector for riots control to M/s. G.M. Trading and Applied Systems",
  "Coat combat disruptive to Kusumgar Corporates Pvt. Ltd. and Radnik Exports",
  "Multi Layered Flame & Thermal Resistance Fabric for Fire Fighter Clothing to Arvind Ltd. and Aeronav Industrial Safety Appliances",
  "Stab and impact resistant material for anti-riot body protector to M/s. Applied Systems",
  "NITRA’s Fabric Smoothness Tester to Multiflo Instruments Pvt. Ltd., Navi Mumbai",
  "Work wear for Cement Porters to M/s. Arvind Ltd., Ahmedabad",
  "Seamless low-cost jute carry bags to M/s. G. D. Industries, Kolkata",
  "NITRA Electronic Drape Meter to Dinu Technology, Coimbatore",
  "Fabric Defect Analysis to M/s. Textile Sector Skill Council, New Delhi",
];

export const metadata = {
  title: "Commercialization of NITRA Developments | NITRA",
  description:
    "Technology transfer and commercialization of products and technologies developed by NITRA.",
};

export default function CommercializationPage() {
  return (
    <>
      <Header />
      <main className="about-page commercialization-page">
        <section className="about-hero commercialization-hero">
          <div className="about-hero-inner">
            <h1>Commercialization of NITRA Developments</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Commercialization of NITRA Developments
            </p>
          </div>
        </section>

        <section
          className="commercialization-content"
          aria-label="NITRA technology transfers"
        >
          <div className="commercialization-table-wrap">
            <table className="commercialization-table">
              <thead>
                <tr>
                  <th scope="col">Technology Transfer</th>
                </tr>
              </thead>
              <tbody>
                {technologyTransfers.map((transfer) => (
                  <tr key={transfer}>
                    <td>{transfer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
