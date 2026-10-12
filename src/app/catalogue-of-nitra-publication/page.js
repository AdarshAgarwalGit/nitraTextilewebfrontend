import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Catalogue of NITRA Publication | NITRA",
  description: "View and download the NITRA publications catalogue.",
};

export default function CatalogueOfNitraPublicationPage() {
  return (
    <>
      <Header />
      <main className="about-page nitra-catalogue-page">
        <section className="about-hero nitra-catalogue-hero">
          <div className="about-hero-inner">
            <h1>Catalogue of NITRA Publication</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Catalogue of NITRA Publication
            </p>
          </div>
        </section>

        <section
          className="nitra-catalogue-content"
          aria-label="NITRA publication catalogue"
        >
          <iframe
            className="nitra-catalogue-viewer"
            src="/PDF/catalogue-of-nitra-publication.pdf"
            title="Catalogue of NITRA Publication"
          />
          <a
            className="nitra-catalogue-download"
            href="/PDF/catalogue-of-nitra-publication.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open or download catalogue
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
