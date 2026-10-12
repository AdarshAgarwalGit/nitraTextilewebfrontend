import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Organization Structure | NITRA",
  description: "View the organization structure of NITRA.",
};

export default function OrganizationStructurePage() {
  return (
    <>
      <Header />

      <main className="about-page organization-page">
        <section className="about-hero organization-hero">
          <div className="about-hero-inner">
            <h1>Organization Structure</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Organization Structure
            </p>
          </div>
        </section>

        <section
          className="organization-chart-section"
          aria-label="NITRA organization chart"
        >
          <Image
            className="organization-chart"
            src="/Images/organization-structure-chart.jpeg"
            alt="NITRA organization structure, showing the Council of Administration, Director General, technical campus departments, research and development, and industry support services"
            width="962"
            height="1352"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
