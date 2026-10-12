import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Vision | NITRA",
  description: "To become one of the top textile R&D institutes worldwide.",
};

export default function VisionPage() {
  return (
    <>
      <Header />

      <main className="about-page vision-page">
        <section className="about-hero vision-hero">
          <div className="about-hero-inner">
            <h1>Vision</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Vision
            </p>
          </div>
        </section>

        <section className="vision-content" aria-labelledby="vision-title">
          <div className="vision-heading">
            <h2 id="vision-title">Vision</h2>
            <span aria-hidden="true" />
          </div>
          <Image
            className="vision-illustration"
            src="/Images/vision-textile-illustration.svg"
            alt="Illustration of a connected globe woven from textile threads"
            width={1200}
            height={480}
            priority
          />
          <blockquote className="vision-statement">
            To Become One of the Top Textile R&amp;D Institutes Worldwide
          </blockquote>
        </section>
      </main>

      <Footer />
    </>
  );
}
