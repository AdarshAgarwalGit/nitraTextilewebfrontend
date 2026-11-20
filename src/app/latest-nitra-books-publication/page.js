import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import BooksDirectory from "@/components/BooksDirectory";

const publications = [
  { title: "SA 8000", price: "Rs 30/-" },
  { title: "UV Protection -Evaluation", price: "Rs 30/-" },
  { title: "Denim Washing", price: "Rs 25/-" },
  { title: "Care Labeling", price: "Rs 25/-" },
  { title: "Zippers", price: "Rs 60/-" },
  { title: "Oeko-Tex Standards", price: "Rs 40/-" },
];

export const metadata = {
  title: "Latest NITRA Books Publication | NITRA",
  description:
    "Browse the latest NITRA book publications and their listed prices.",
};

export default function LatestNitraBooksPublicationPage() {
  return (
    <>
      <Header />
      <main className="about-page latest-books-page">
        <section className="about-hero latest-books-hero">
          <div className="about-hero-inner">
            <h1>Latest NITRA Books Publication</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Latest NITRA Books Publication
            </p>
          </div>
        </section>

        <BooksDirectory initialPublications={publications} />
      </main>
      <Footer />
    </>
  );
}
