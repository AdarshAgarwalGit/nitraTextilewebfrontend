import BulletinDirectory from "@/components/BulletinDirectory";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "New Bulletin | NITRA",
  description: "Browse the NITRA News bulletin archive by year.",
};

export default function NewBulletinPage() {
  return (
    <>
      <Header />
      <main className="about-page new-bulletin-page">
        <section className="about-hero new-bulletin-hero">
          <div className="about-hero-inner">
            <h1>New Bulletin</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / New Bulletin
            </p>
          </div>
        </section>
        <BulletinDirectory />
      </main>
      <Footer />
    </>
  );
}
