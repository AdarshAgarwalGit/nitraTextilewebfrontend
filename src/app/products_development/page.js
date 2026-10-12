import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsDevelopmentDirectory from "@/components/ProductsDevelopmentDirectory";
import Link from "next/link";

export const metadata = {
  title: "Products Development | NITRA",
  description:
    "Explore products developed by NITRA, including protective textiles, natural-fibre products, and textile technologies.",
};

export default function ProductsDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="about-page products-development-page">
        <section className="about-hero products-development-hero">
          <div className="about-hero-inner">
            <h1>Products Development</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Products Development
            </p>
          </div>
        </section>

        <section className="products-development-content">
          <ProductsDevelopmentDirectory />
        </section>
      </main>
      <Footer />
    </>
  );
}
