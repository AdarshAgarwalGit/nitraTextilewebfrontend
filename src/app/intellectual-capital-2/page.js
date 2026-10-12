import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutDashboard from "@/components/AboutDashboard";
import WhoIsWhoDirectory from "@/components/WhoIsWhoDirectory";
import WhoIsWhoProfile from "@/components/WhoIsWhoProfile";
import WhoIsWhoSocialNews from "@/components/WhoIsWhoSocialNews";

export const metadata = {
  title: "Who's Who | NITRA",
  description: "Meet the Director General of NITRA.",
};

export default function IntellectualCapitalPage() {
  return (
    <>
      <Header />

      <main className="about-page who-page">
        <section className="about-hero who-page-hero">
          <div className="about-hero-inner">
            <p className="about-breadcrumb">Home / Who&apos;s Who</p>
            <h1>Who&apos;s Who</h1>
          </div>
        </section>

        <section className="about-who who-page-profile" aria-labelledby="about-who-title">
          <p className="about-who-kicker">Who&apos;s Who</p>
          <WhoIsWhoProfile />
        </section>
        <WhoIsWhoDirectory />
        <AboutDashboard />
        <WhoIsWhoSocialNews />
      </main>

      <Footer />
    </>
  );
}
