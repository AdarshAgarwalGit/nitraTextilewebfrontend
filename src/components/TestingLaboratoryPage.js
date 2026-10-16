import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  testingLaboratories,
  testingLaboratoryLinks,
} from "@/components/testingLaboratoryData";

export default function TestingLaboratoryPage({ slug }) {
  const laboratory = testingLaboratories[slug];

  if (!laboratory) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="about-page testing-laboratory-page">
        <section className="about-hero testing-services-hero">
          <div className="about-hero-inner">
            <h1>{laboratory.title}</h1>
            <p className="about-breadcrumb">
              <Link href="/">Home</Link> /{" "}
              <Link href="/quality-evaluation-and-testing-services/">
                Quality Evaluation &amp; Testing Services
              </Link>{" "}
              / {laboratory.title}
            </p>
          </div>
        </section>

        <div className="testing-lab-content">
          <section className="testing-lab-overview">
            <div className="testing-lab-intro">
              <p className="testing-lab-kicker">NITRA testing facilities</p>
              <h2>Testing scope</h2>
              <p>{laboratory.description}</p>
            </div>
            {laboratory.image ? (
              <div className="testing-lab-image">
                <Image
                  src={laboratory.image}
                  alt={laboratory.imageAlt}
                  width={900}
                  height={600}
                  sizes="(max-width: 760px) 100vw, 44vw"
                />
              </div>
            ) : (
              <div className="testing-lab-photo-placeholder">
                <span>Physical textile testing</span>
                <strong>Textile quality evaluation</strong>
              </div>
            )}
          </section>

          <section className="testing-lab-card" aria-labelledby="testing-lab-scope">
            <div className="testing-lab-section-heading">
              <p className="testing-lab-kicker">What we test</p>
              <h2 id="testing-lab-scope">Materials and products</h2>
            </div>
            <ul className="testing-lab-chip-list">
              {laboratory.testedMaterials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </section>

          <section
            className="testing-lab-instruments"
            aria-labelledby="testing-lab-instruments-title"
          >
            <div className="testing-lab-section-heading">
              <p className="testing-lab-kicker">Laboratory facilities</p>
              <h2 id="testing-lab-instruments-title">Major instruments</h2>
            </div>
            <ul className="testing-lab-instrument-grid">
              {laboratory.instruments.map((instrument) => (
                <li key={instrument}>{instrument}</li>
              ))}
            </ul>
          </section>

          <nav className="testing-lab-related" aria-label="Other testing laboratories">
            <div>
              <p className="testing-lab-kicker">Explore more</p>
              <h2>Other testing laboratories</h2>
            </div>
            <div className="testing-lab-related-links">
              {testingLaboratoryLinks
                .filter(([label, path]) => path !== slug)
                .map(([label, path]) => (
                  <Link href={`/${path}/`} key={path}>
                    {label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              <Link href="/quality-evaluation-and-testing-services/">
                All testing services
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
