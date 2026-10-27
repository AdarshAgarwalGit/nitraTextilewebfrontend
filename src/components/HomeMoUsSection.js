"use client";

import Image from "next/image";
import { useState } from "react";

const mouImages = [
  {
    src: "/Images/Darft-3-NITRA-NEWS-SAMPLE-2-1.png",
    alt: "NITRA representatives exchanging a memorandum of understanding",
  },
  {
    src: "/Images/Darft-3-NITRA-NEWS-SAMPLE-2.png",
    alt: "NITRA representatives holding a signed memorandum of understanding",
  },
  {
    src: "/Images/Darft-4-NITRA-NEWS-SAMPLE-2-2.png",
    alt: "NITRA representatives holding a signed agreement",
  },
  {
    src: "/Images/Darft-4-NITRA-NEWS-SAMPLE-2-1.png",
    alt: "NITRA team members at a memorandum of understanding exchange",
  },
  {
    src: "/Images/Darft-4-NITRA-NEWS-SAMPLE-2.png",
    alt: "NITRA representatives displaying their signed agreement",
  },
  {
    src: "/Images/NITRA-News-April-June-2026.png",
    alt: "NITRA team members sharing a publication",
  },
];

export default function HomeMoUsSection() {
  const [firstImage, setFirstImage] = useState(2);

  function showPrevious() {
    setFirstImage((current) => (current - 1 + mouImages.length) % mouImages.length);
  }

  function showNext() {
    setFirstImage((current) => (current + 1) % mouImages.length);
  }

  const visibleImages = Array.from({ length: 3 }, (_, offset) => {
    return mouImages[(firstImage + offset) % mouImages.length];
  });

  return (
    <section className="home-mous-section" aria-labelledby="home-mous-title">
      <div className="home-press-divider" aria-hidden="true" />
      <h2 id="home-mous-title">MoUs Signed with Industry Partners</h2>

      <div className="home-mous-carousel" aria-roledescription="carousel">
        <button
          className="home-mous-arrow home-mous-previous"
          type="button"
          onClick={showPrevious}
          aria-label="Show previous MoU photos"
        >
          ‹
        </button>

        <div className="home-mous-grid" aria-live="polite">
          {visibleImages.map(({ src, alt }) => (
            <a
              className="home-mous-image"
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              key={src}
              aria-label={`Open photo: ${alt}`}
            >
              <Image
                src={src}
                alt={alt}
                width={635}
                height={395}
                quality={90}
                sizes="(max-width: 700px) 100vw, (max-width: 1050px) 33vw, 380px"
              />
            </a>
          ))}
        </div>

        <button
          className="home-mous-arrow home-mous-next"
          type="button"
          onClick={showNext}
          aria-label="Show next MoU photos"
        >
          ›
        </button>
      </div>
    </section>
  );
}
