"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Innovation Unleashed:",
    subtitle: "Research & Development",
    description:
      "NITRA's dedication to Research and Development propels textile breakthroughs, delving into product evolution, machinery enhancement, and process innovation, shaping the industry's future.",
    href: "/research-develpment-projects/",
    image: true,
    imagePosition: "right",
  },
  {
    title: "Expert Guidance:",
    subtitle: "Technical Consultancy Services",
    description:
      "We offers varied technical consultancy services, addressing production, quality, energy, environment, and human resources, aiding industries in overcoming challenges and improving productivity and sustainability.",
    href: "/consultancy/",
    image: true,
    imagePosition: "left",
  },
  {
    title: "Precision Assurance:",
    subtitle: "Quality Evaluation & Testing",
    description:
      "NITRA's NABL-accredited and BIS-recognized labs offer vital quality evaluation and testing services for the textile and garment industry, covering physical and chemical analysis, technical textiles, environmental assessment, and more.",
    href: "/quality-evaluation-and-testing-services/",
    image: false,
    imagePosition: "right",
  },
  {
    title: "Empowering Futures:",
    subtitle: "Textile Training Programs",
    description:
      "We offer various training programs, including the Integrated Skill Development Scheme (ISDS) by the Ministry of Textiles, job-oriented professional programs, and a decade of training experience.",
    href: "/training-programmes-at-nitra/",
    image: false,
    imagePosition: "right",
  },
];

export default function HomeSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % slides.length);
  }

  function pauseOnFocus() {
    setIsPaused(true);
  }

  function resumeAfterFocus(event) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  }

  return (
    <section
      className="home-slideshow"
      aria-label="NITRA services"
      aria-roledescription="carousel"
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocus={pauseOnFocus}
      onBlur={resumeAfterFocus}
    >
      {slides.map((slide, index) => (
        <article
          className={`home-slide${index === activeIndex ? " is-active" : ""}${
            slide.image ? " has-image" : ""
          } home-slide-image-${slide.imagePosition}`}
          key={slide.title}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
          aria-hidden={index !== activeIndex}
          inert={index !== activeIndex}
        >
          {slide.image && (
            <div className="home-slide-image" aria-hidden="true" />
          )}
          <div className="home-slide-content">
            <h2>
              <span>{slide.title}</span>
              <strong>{slide.subtitle}</strong>
            </h2>
            <p>{slide.description}</p>
            <a className="home-slide-link" href={slide.href}>
              Read More
            </a>
          </div>
        </article>
      ))}

      <button
        className="home-slide-arrow home-slide-previous"
        type="button"
        aria-label="Show previous slide"
        onClick={showPrevious}
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        className="home-slide-arrow home-slide-next"
        type="button"
        aria-label="Show next slide"
        onClick={showNext}
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="home-slide-indicators" aria-label="Choose a slide">
        {slides.map((slide, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            type="button"
            key={slide.title}
            aria-label={`Show slide ${index + 1}: ${slide.subtitle}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
