import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-main">
        <section className="home-hero" aria-labelledby="home-title">
          <p className="home-hero-eyebrow">NITRA Technical Campus</p>
          <h1 id="home-title">Learn today. Lead tomorrow.</h1>
          <p>
            Advancing innovation through research and quality learning for
            students of all disciplines.
          </p>
          <a className="home-hero-link" href="#programs">
            Explore our programs <span aria-hidden="true">→</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
