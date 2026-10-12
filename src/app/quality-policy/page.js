import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Quality Policy | NITRA",
  description:
    "NITRA's quality policy and objectives for research, consultancy, inspection, testing, training, and education.",
};

export default function QualityPolicyPage() {
  return (
    <>
      <Header />

      <main className="about-page quality-policy-page">
        <section className="about-hero quality-policy-hero">
          <div className="about-hero-inner">
            <h1>Quality Policy</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Quality Policy
            </p>
          </div>
        </section>

        <section
          className="quality-policy-content"
          aria-label="NITRA quality policy and objectives"
        >
          <Image
            className="quality-policy-image"
            src="/Images/quality-policy.jpg"
            alt="NITRA Quality Policy: commitment to customer satisfaction, continual improvement, personnel development, laboratory competence and impartiality, and quality education. Objectives include research and development for industry, reducing customer complaints, and improving student academic performance and skills."
            width={1600}
            height={1131}
            sizes="(max-width: 1200px) 100vw, 1180px"
            priority
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
