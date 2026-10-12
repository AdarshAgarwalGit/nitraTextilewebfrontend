import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InstrumentsDevelopedDirectory from "@/components/InstrumentsDevelopedDirectory";
import Link from "next/link";

export const metadata = {
  title: "Instruments Developed | NITRA",
  description:
    "Explore testing instruments and equipment developed by NITRA for textile research and evaluation.",
};

export default function InstrumentsDevelopedPage() {
  return (
    <>
      <Header />
      <main className="about-page instruments-developed-page">
        <section className="about-hero instruments-developed-hero">
          <div className="about-hero-inner">
            <h1>Instruments Developed</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Instruments Developed
            </p>
          </div>
        </section>

        <section className="instruments-developed-content">
          <InstrumentsDevelopedDirectory />
        </section>
      </main>
      <Footer />
    </>
  );
}
