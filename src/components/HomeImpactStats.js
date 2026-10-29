"use client";

import { useEffect, useRef, useState } from "react";

const impactStats = [
  { value: 1200, label: "Clients Worldwide" },
  { value: 170, label: "Own publications." },
  { value: 5265, label: "Library Centre" },
  { value: 23, label: "Patent" },
];

const numberFormatter = new Intl.NumberFormat("en-US");

function ImpactStat({ value, label }) {
  const statRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = statRef.current;
    if (!element) return undefined;

    let animationFrame;

    const startAnimation = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(value);
        return;
      }

      const duration = 1800;
      let startTime;

      const updateCount = (time) => {
        if (startTime === undefined) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        setCount(Math.round(value * progress));

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(updateCount);
        }
      };

      animationFrame = window.requestAnimationFrame(updateCount);
    };

    if (!("IntersectionObserver" in window)) {
      startAnimation();
      return () => window.cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          startAnimation();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <div className="impact-stat" ref={statRef}>
      <strong aria-label={`${numberFormatter.format(value)}+`}>
        {numberFormatter.format(count)}+
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function HomeImpactStats() {
  return (
    <div className="impact-panel home-impact-panel" aria-label="NITRA at a glance">
      {impactStats.map(({ value, label }) => (
        <ImpactStat key={label} value={value} label={label} />
      ))}
    </div>
  );
}
