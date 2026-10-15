import Footer from "./Footer";
import Header from "./Header";

const contactDetails = [
  {
    label: "Phone",
    value: "0120-2807390-95",
    href: "tel:0120280739095",
  },
  {
    label: "Email",
    value: "mail@nitratextile.org",
    href: "mailto:mail@nitratextile.org",
  },
  {
    label: "Address",
    value: "NITRA, Block M, Sector 23, Sanjay Nagar, Ghaziabad, Uttar Pradesh 201002",
    href: "https://maps.google.com/?q=NITRA+Block+M+Sector+23+Sanjay+Nagar+Ghaziabad+Uttar+Pradesh+201002",
  },
];

const supportDetails = [
  {
    title: "Sample Collection Centre",
    subtitle: "For queries related to sample submission",
    phone: "8178023182",
  },
  {
    title: "CQE / MICRO / ECO & ENV Lab In-charges",
    phone: "8178023183",
  },
  {
    title: "PQE / PTTD Lab In-charge",
    phone: "8178023185",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page-shell">
        <section className="contact-hero" aria-labelledby="contact-page-title">
          <div className="contact-hero-inner">
            <p className="contact-breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true"> / </span>
              <span>Contact</span>
            </p>
            <h1 id="contact-page-title">Contact</h1>
          </div>
        </section>

        <section className="contact-content" aria-label="NITRA contact information">
          <div className="contact-intro">
            <p>
              If you have any inquiries or wish to get in touch with Northern
              India Textile Research Association (NITRA), we welcome you to
              contact us using the following information:
            </p>
          </div>

          <div className="contact-layout">
            <article className="contact-card">
              <h2>Our contact address</h2>

              <ul className="contact-details-list">
                {contactDetails.map(({ label, value, href }) => (
                  <li key={label}>
                    <span className="contact-detail-label">{label}</span>
                    {href.startsWith("http") ? (
                      <a href={href} target="_blank" rel="noreferrer noopener">
                        {value}
                      </a>
                    ) : (
                      <a href={href}>{value}</a>
                    )}
                  </li>
                ))}
              </ul>

              <div className="contact-support">
                <h3>For any assistance, please contact:</h3>
                <ul>
                  {supportDetails.map(({ title, subtitle, phone }) => (
                    <li key={title}>
                      <span>{title}</span>
                      {subtitle ? <small>{subtitle}</small> : null}
                      <a href={`tel:${phone}`}> - {phone}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="contact-timing-block">
                <p>
                  <strong>Timings:</strong> 9:30 AM to 5:30 PM, Monday to Saturday
                  (Closed on 2nd &amp; 4th Saturdays)
                </p>
                <p>Feel free to reach out during working hours. We&apos;re happy to help!</p>
              </div>

              <a className="contact-download-link" href="/pdf/nitra-contact-details.pdf" target="_blank" rel="noreferrer noopener">
                Download contact details (PDF)
              </a>
            </article>

            <aside className="contact-map-card" aria-label="NITRA location map">
              <h2>Find our location</h2>
              <div className="contact-map-wrap">
                <iframe
                  title="NITRA location map"
                  src="https://maps.google.com/maps?q=Northern%20India%20Textile%20Research%20Association%20Sector-23%2C%20Raj%20Nagar%2C%20Ghaziabad-201002&t=m&z=17&output=embed&iwloc=near"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
