import Image from "next/image";

const features = [
  {
    eyebrow: "NITRA's Innovative R&D Initiatives",
    title: "Research and Development (R&D)",
    description:
      "NITRA’s Research and Development (R&D) endeavors encompass textile product development, machine design, instrument innovation, and process optimization. Through these efforts, NITRA continually fosters innovation and progress within the textile industry, leading to enhanced products, machinery, and sustainable manufacturing practices.",
    image: "/Images/home-r-and-d-collage.jpg",
    imageAlt: "NITRA researchers working in textile laboratories",
    imageWidth: 1706,
    imageHeight: 1651,
    href: "/research-develpment-projects/",
    linkLabel: "Learn More",
    framed: true,
  },
  {
    eyebrow: "Training Programs",
    title: "Skill Development for a Thriving Textile Industry",
    description:
      "NITRA offers a diverse range of training programs catering to the textile and apparel supply chain. These programs focus on enhancing skills and knowledge, providing job-oriented training, and ensuring the industry’s workforce is well-equipped to meet the evolving demands of the sector.",
    image: "/Images/home-training-programs.jpg",
    imageAlt: "Participants attending a NITRA training program",
    imageWidth: 2560,
    imageHeight: 1709,
    href: "/job-oriented-professional-programs/",
    linkLabel: "Learn More",
  },
  {
    eyebrow: "Technical Consultancy",
    title: "Technical Consultancy Services",
    description:
      "NITRA’s Technical Consultancy focuses on delivering expert guidance, feasibility studies, system certifications, infrastructure setup, asset valuation, third-party inspection, energy conservation, and product/process development for the textile and apparel industry. We aid in resolving operational challenges and improving productivity, making us a trusted partner for industry excellence.",
    highlights: [
      "Feasibility Studies.",
      "System Certification Services.",
      "Infrastructure Setup.",
      "Asset Valuation.",
      "Product/Process Development.",
    ],
    image: "/Images/home-technical-consultancy.jpg",
    imageAlt: "NITRA consultants meeting with industry professionals",
    imageWidth: 2560,
    imageHeight: 1706,
    href: "/consultancy/",
    linkLabel: "Learn More",
  },
  {
    eyebrow: "Centre of Excellence",
    title: "Empowering Excellence through Specialized Hubs",
    description:
      "NITRA has established Centres of Excellence (CoE) as specialized hubs for research, development, and training in key textile sectors. These centers focus on product innovation, standards, training, workshops, and disseminating critical information. They are instrumental in advancing and setting industry benchmarks.",
    image: "/Images/home-centre-of-excellence.png",
    imageAlt: "NITRA Centre of Excellence activities and industry visits",
    imageWidth: 1333,
    imageHeight: 1300,
    href: "/focus-incubation-centre/",
    linkLabel: "Learn More",
    framed: true,
  },
  {
    eyebrow: "NTC",
    title: "NITRA Technical Campus",
    description:
      "NITRA Technical Campus (NTC) is the academic arm of NITRA set up exclusively to offer AICTE approved B. Tech programs in Engineering. The institute spreads over a huge area of 1,68,000 sq ft having buildings with latest infrastructural facilities and hostel blocks.",
    image: "/Images/home-technical-campus.jpg",
    imageAlt: "NITRA Technical Campus academic building",
    imageWidth: 1600,
    imageHeight: 730,
    href: "https://www.nitra.ac.in/",
    linkLabel: "Visit us",
    target: "_blank",
  },
];

function Feature({ feature, index }) {
  const isReversed = index % 2 === 1;

  return (
    <article
      className={`home-feature${isReversed ? " home-feature-reversed" : ""}`}
    >
      <div
        className={`home-feature-visual${feature.framed ? " home-feature-visual-framed" : ""}`}
      >
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          width={feature.imageWidth}
          height={feature.imageHeight}
          sizes="(max-width: 760px) 100vw, 45vw"
        />
      </div>

      <div className="home-feature-copy">
        <p className="home-feature-eyebrow">{feature.eyebrow}</p>
        <h2>{feature.title}</h2>
        <p className="home-feature-description">{feature.description}</p>
        {feature.highlights ? (
          <ul className="home-feature-highlights">
            {feature.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
        <a
          className="home-feature-action"
          href={feature.href}
          target={feature.target}
          rel={feature.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {feature.linkLabel}
        </a>
      </div>
    </article>
  );
}

export default function HomeFeaturesSection() {
  return (
    <section
      className="home-features-section"
      aria-label="NITRA research, training, consultancy, and campus"
    >
      {features.map((feature, index) => (
        <Feature feature={feature} index={index} key={feature.title} />
      ))}
    </section>
  );
}
