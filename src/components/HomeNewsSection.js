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
