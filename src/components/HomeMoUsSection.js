"use client";

import Image from "next/image";
import { useState } from "react";

const mouImages = [
  {
    src: "/Images/mou-first.png",
    alt: "NITRA representatives exchanging a memorandum of understanding",
    width: 635,
    height: 421,
  },
  {
    src: "/Images/mou-second.jpeg",
    alt: "NITRA representatives holding a signed memorandum of understanding",
    width: 635,
    height: 410,
  },
  {
    src: "/Images/mou-third.jpeg",
    alt: "NITRA representatives holding a signed agreement",
    width: 635,
    height: 395,
  },
  {
    src: "/Images/mou-four.png",
    alt: "NITRA team members at a memorandum of understanding exchange",
    width: 472,
    height: 159,
  }
];

export default function HomeMoUsSection() {
  const [currentImage, setCurrentImage] = useState(0);

  function showPrevious() {
    setCurrentImage((current) => (current - 1 + mouImages.length) % mouImages.length);
  }

  function showNext() {
    setCurrentImage((current) => (current + 1) % mouImages.length);
  }

  const image = mouImages[currentImage];

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
          <a
            className="home-mous-image"
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open photo: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              quality={90}
              sizes="(max-width: 635px) 100vw, 635px"
            />
          </a>
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
