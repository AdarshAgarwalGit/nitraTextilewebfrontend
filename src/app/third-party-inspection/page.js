import AboutDashboard from "@/components/AboutDashboard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Third Party Inspection | NITRA",
  description:
    "NITRA provides third party inspection services to textile and allied industries.",
};

export default function ThirdPartyInspectionPage() {
  return (
    <>
      <Header />
      <main className="about-page third-party-inspection-page">
        <section className="about-hero third-party-inspection-hero">
          <div className="about-hero-inner">
            <h1>Third Party Inspection</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Third Party Inspection
            </p>
          </div>
        </section>

        <section className="third-party-inspection-content">
          <p>
            NITRA provides third party inspection services to textile and allied
            industries.
          </p>
        </section>

        <AboutDashboard />
      </main>
      <Footer />
    </>
  );
}
