import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { fetchCareers } from "@/lib/api";

const careerPhotos = [
  {
    file: "WhatsApp-Image-2026-07-28-at-8.26.11-AM-2.jpeg",
    height: 165,
    caption: "WhatsApp Image 2026-07-28 at 8.26.11 AM (2)",
  },
  {
    file: "WhatsApp-Image-2026-07-28-at-8.26.11-AM-1.jpeg",
    height: 179,
    caption: "WhatsApp Image 2026-07-28 at 8.26.11 AM (1)",
  },
  {
    file: "WhatsApp-Image-2026-07-28-at-8.26.11-AM.jpeg",
    height: 169,
    caption: "WhatsApp Image 2026-07-28 at 8.26.11 AM",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-1.jpeg",
    height: 154,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (1)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-3.jpeg",
    height: 114,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (3)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM.jpeg",
    height: 142,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-9.jpeg",
    height: 140,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (9)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-4.jpeg",
    height: 221,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (4)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-8.jpeg",
    height: 163,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (8)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-2.jpeg",
    height: 148,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (2)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-5.jpeg",
    height: 155,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (5)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-10.jpeg",
    height: 221,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (10)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-6.jpeg",
    height: 179,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (6)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.49-PM-3.jpeg",
    height: 164,
    caption: "WhatsApp Image 2026-05-20 at 5.18.49 PM (3)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.48-PM-7.jpeg",
    height: 153,
    caption: "WhatsApp Image 2026-05-20 at 5.18.48 PM (7)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.49-PM-1.jpeg",
    height: 254,
    caption: "WhatsApp Image 2026-05-20 at 5.18.49 PM (1)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.49-PM-2.jpeg",
    height: 158,
    caption: "WhatsApp Image 2026-05-20 at 5.18.49 PM (2)",
  },
  {
    file: "WhatsApp-Image-2026-05-20-at-5.18.49-PM.jpeg",
    height: 237,
    caption: "WhatsApp Image 2026-05-20 at 5.18.49 PM",
  },
  {
    file: "WhatsApp-Image-2026-01-20-at-7.15.30-AM.jpeg",
    height: 158,
    caption: "WhatsApp Image 2026-01-20 at 7.15.30 AM",
  },
];

export const metadata = {
  title: "Careers | NITRA",
  description: "Career and recruitment photo gallery from NITRA.",
};

export default async function CareersPage() {
  const openings = await fetchCareers();

  return (
    <>
      <Header />
      <main className="about-page careers-page">
        <section className="about-hero careers-hero">
          <div className="about-hero-inner">
            <h1>Careers &amp; Opportunities</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> / Careers
            </p>
          </div>
        </section>

        {openings && openings.length > 0 && (
          <section className="careers-openings-section" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '1.25rem' }}>
              Current Openings at NITRA
            </h2>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              {openings.map((job) => (
                <div key={job.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {job.category || 'Career Vacancy'}
                  </span>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0f172a', margin: '0.5rem 0' }}>
                    {job.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {job.excerpt}
                  </p>
                  <a href={`mailto:mail@nitratextile.org?subject=${encodeURIComponent('Application: ' + job.title)}`}
                     style={{ display: 'inline-block', backgroundColor: '#1d4ed8', color: '#ffffff', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>
                    Apply via Email
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="careers-gallery" aria-label="Careers photo gallery">
          {careerPhotos.map((photo, index) => (
            <a
              className="careers-gallery-item"
              href={`/Images/${photo.file}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open full-size image: ${photo.caption}`}
              key={photo.file}
            >
              <Image
                src={`/Images/${photo.file}`}
                alt={`NITRA careers gallery photo ${index + 1}`}
                width={300}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 920px) 50vw, 33vw"
              />
              <span className="careers-gallery-overlay" aria-hidden="true">
                <span>View image</span>
                <span className="careers-gallery-expand">↗</span>
              </span>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
