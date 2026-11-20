"use client";

import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { submitContactInquiry } from "@/lib/api";

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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    const res = await submitContactInquiry(formData);
    setSubmitting(false);

    if (res.ok) {
      setFeedback({
        type: "success",
        message: `Thank you! Your inquiry has been received (Ref: ${res.data?.data?.referenceId || "Pending"}). Our team will contact you shortly.`,
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      setFeedback({
        type: "error",
        message:
          res.data?.message ||
          "Unable to send inquiry directly at the moment. Please reach us via mail@nitratextile.org or 0120-2807390.",
      });
    }
  };

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
            <h1 id="contact-page-title">Contact NITRA</h1>
          </div>
        </section>

        <section className="contact-content" aria-label="NITRA contact information">
          <div className="contact-intro">
            <p>
              If you have any inquiries regarding Testing, R&amp;D, Consultancy, or Academic
              services, we welcome you to get in touch with Northern India Textile Research
              Association (NITRA).
            </p>
          </div>

          <div className="contact-layout">
            <article className="contact-card">
              <h2>Our Contact Address</h2>

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
                <h3>For laboratory &amp; technical assistance:</h3>
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
                <p>Feel free to reach out during working hours. We are happy to assist you.</p>
              </div>

              <a
                className="contact-download-link"
                href="/pdf/nitra-contact-details.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                Download contact details (PDF)
              </a>
            </article>

            <aside className="contact-map-card" aria-label="NITRA location map and online inquiry">
              <h2>Send an Inquiry</h2>
              {feedback && (
                <div
                  style={{
                    padding: "1rem",
                    marginBottom: "1.25rem",
                    borderRadius: "6px",
                    backgroundColor: feedback.type === "success" ? "#ecfdf5" : "#fef2f2",
                    color: feedback.type === "success" ? "#065f46" : "#991b1b",
                    border: `1px solid ${feedback.type === "success" ? "#a7f3d0" : "#fecaca"}`,
                    fontSize: "0.925rem",
                  }}
                >
                  {feedback.message}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    style={{
                      width: "100%",
                      padding: "0.6rem 0.8rem",
                      border: "1px solid #cbd5e1",
                      borderRadius: "6px",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      style={{
                        width: "100%",
                        padding: "0.6rem 0.8rem",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
                        fontSize: "0.95rem",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Mobile or Landline"
                      style={{
                        width: "100%",
                        padding: "0.6rem 0.8rem",
                        border: "1px solid #cbd5e1",
                        borderRadius: "6px",
                        fontSize: "0.95rem",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="E.g. Testing enquiry, R&D collaboration"
                    style={{
                      width: "100%",
                      padding: "0.6rem 0.8rem",
                      border: "1px solid #cbd5e1",
                      borderRadius: "6px",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your inquiry or requirements here..."
                    style={{
                      width: "100%",
                      padding: "0.6rem 0.8rem",
                      border: "1px solid #cbd5e1",
                      borderRadius: "6px",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    backgroundColor: "#1e3a8a",
                    color: "#ffffff",
                    padding: "0.75rem 1.5rem",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: 600,
                    cursor: submitting ? "not-allowed" : "pointer",
                    opacity: submitting ? 0.7 : 1,
                    transition: "background-color 0.2s",
                  }}
                >
                  {submitting ? "Sending Inquiry..." : "Submit Inquiry"}
                </button>
              </form>

              <h2 style={{ marginTop: "2rem" }}>Find our location</h2>
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
