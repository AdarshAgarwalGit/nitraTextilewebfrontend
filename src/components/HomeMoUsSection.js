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
  },
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

      <div
        className="home-mous-carousel"
        role="group"
        aria-label="MoUs signed with industry partners"
        aria-roledescription="carousel"
      >
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

      <div className="home-mous-controls">
        <div className="home-mous-indicators" role="group" aria-label="Choose a MoU photo">
          {mouImages.map((item, index) => (
            <button
              className="home-mous-indicator"
              type="button"
              key={item.src}
              onClick={() => setCurrentImage(index)}
              aria-label={`Show MoU photo ${index + 1}`}
              aria-pressed={currentImage === index}
            />
          ))}
        </div>
        <p className="home-mous-counter" aria-live="polite">
          <span>{String(currentImage + 1).padStart(2, "0")}</span>
          <span className="home-mous-counter-divider">/</span>
          {String(mouImages.length).padStart(2, "0")}
        </p>
      </div>

      <div className="home-pli-preview">
        <h3>Production Linked Incentive (PLI) Scheme for Textiles</h3>
        <a
          className="home-pli-thumbnail"
          href="/Images/Production%20Linked%20Incentive.jpeg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Production Linked Incentive Scheme for Textiles image"
        >
          <Image
            src="/Images/Production%20Linked%20Incentive.jpeg"
            alt="Production Linked Incentive (PLI) Scheme for Textiles"
            width={992}
            height={1085}
            quality={90}
            sizes="(max-width: 640px) 90vw, 320px"
          />
          <span>Click to view full-size image</span>
        </a>
      </div>
    </section>
  );
}
