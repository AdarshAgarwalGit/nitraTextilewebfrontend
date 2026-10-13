import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TendersDirectory from "@/components/TendersDirectory";
import Link from "next/link";
import tenders from "./tenderData";

export const metadata = {
  title: "Tenders | NITRA",
  description:
    "Browse NITRA tender notices, submission deadlines, extensions, and tender documents.",
};

export default function TendersPage() {
  return (
    <>
      <Header />
      <main className="about-page tenders-page">
        <section className="about-hero tenders-hero">
          <div className="about-hero-inner">
            <h1>Tenders</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Tenders
            </p>
          </div>
        </section>
        <TendersDirectory tenders={tenders} />
      </main>
      <Footer />
    </>
  );
}
