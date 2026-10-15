import Image from "next/image";

const pressImages = [
  {
    src: "/Images/nitra-news-01.jpeg",
    alt: "Newspaper coverage of NITRA's CII excellence award",
  },
  {
    src: "/Images/nitra-news-02.jpeg",
    alt: "Hindi newspaper article about NITRA's CII excellence award",
  },
  {
    src: "/Images/nitra-news-03.jpeg",
    alt: "Ghaziabad Prime newspaper coverage of NITRA",
  },
];

export default function HomeNewsSection() {
  return (
    <section className="home-press-section" aria-labelledby="home-press-title">
      <a
        className="home-event-banner"
        href="https://india.boilerworldexpo.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Boiler India 2026, 8–10 October at CIDCO Exhibition Centre, Navi Mumbai"
      >
        <Image
          src="/Images/boiler-india-banner.jpeg"
          alt="Boiler India 2026 — World's Largest Heat & Steam Show"
          width={1584}
          height={400}
          sizes="(max-width: 1050px) calc(100vw - 40px), 1013px"
        />
      </a>

      <div className="home-press-divider" aria-hidden="true" />

      <h2 id="home-press-title">NITRA in NEWS</h2>

      <div className="home-press-grid">
        {pressImages.map(({ src, alt }) => (
          <a
            className="home-press-image"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            key={src}
            aria-label={`Open newspaper clipping: ${alt}`}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              sizes="(max-width: 700px) 100vw, (max-width: 1050px) 33vw, 320px"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
