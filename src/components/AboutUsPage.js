import Footer from "./Footer";
import Header from "./Header";
import AboutDashboard from "./AboutDashboard";
import WhoIsWhoProfile from "./WhoIsWhoProfile";

const profileUrl = "/intellectual-capital-2/";

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="about-page">
        <section className="about-hero about-us-hero">
          <div className="about-hero-inner">
            <p className="about-breadcrumb">Home / About Us</p>
            <h1>About Us</h1>
          </div>
        </section>

        <section className="about-story">
          <div className="about-story-intro">
            <div className="about-copy">
              <p className="about-kicker">About Us</p>
              <h2>Welcome to NITRA</h2>
              <p>
                Northern India Textile Research Association (NITRA) is one of
                the prime textile research institutes in the country. The
                textile industry and Ministry of Textiles, Govt. of India
                jointly established NITRA in 1974 for conducting applied
                scientific research and providing support services to Indian
                textile industry. The organization is situated in a 50 acre
                land at NCR Ghaziabad, near national capital New Delhi. It is
                certified by ISO 9001:2015.
              </p>
              <p>
                Today NITRA’s prime activities include research & development,
                technical consultancy, quality evaluation of materials,
                manpower training, third party inspection and publishing
                technical books and papers. NITRA also provides facilitating
                services to the decentralized powerloom sector through its
                eight centres located at Tanda, Kanpur, Meerut, Gorakhpur,
                Varanasi (all in U.P.), Panipat (Haryana), Ludhiana (Punjab)
                and Bhilwara (Rajasthan).
              </p>
            </div>

            <div className="about-visual">
              <img
                src="/Images/aboutUs-image.png"
                alt="NITRA campus and facilities"
              />
            </div>
          </div>

          <div className="about-story-more">
            <p>
              NITRA is operating under the administrative control of Council of
              Administration comprising of representatives from Textile &
              Apparel industry, Govt. of India, trade associations, academic
              institutions and Textile Research Associations. The council is
              presently headed by its Chairman Sh. Vidit Jain, an eminent
              industrialist. Dr. M.S. Parmar, is the present Director General
              of NITRA.
            </p>
            <p>
              NITRA renders multifarious services to textile & apparel
              industry through its rich in-house manpower resource of more
              than fifty experienced technical personnel comprising of textile
              technologist, textile chemist, garment technologist, textile
              designer, fashion designer, analytical chemist, mechanical
              engineer, electrical & electronics engineer, civil engineer,
              environmental engineer, software / IT specialist & management
              experts. This team of scientists, consultants, and technocrats
              is supported by the most modern and state-of-the-art
              infrastructure facilities available at NITRA. The organization
              has a clientele of about 1200 textiles and allied sector units
              that includes overseas clients from Indonesia, Thailand,
              Ethiopia, Sudan, Bangladesh, Nepal, Kenya, Philippines.
            </p>
          </div>
        </section>

        <AboutDashboard />

        <section className="about-who" aria-labelledby="about-who-title">
          <p className="about-who-kicker">Who&apos;s Who</p>
          <WhoIsWhoProfile showReadMore />

          <div className="about-who-footer">
            <a href={profileUrl}>View All</a>
          </div>
        </section>       
      </main>

      <Footer />
    </>
  );
}
