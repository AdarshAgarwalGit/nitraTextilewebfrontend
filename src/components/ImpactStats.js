"use client";

import { useEffect, useRef, useState } from "react";

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

export default function ImpactStats({
  stats,
  className = "impact-panel",
  ariaLabel = "NITRA at a glance",
}) {
  return (
    <div className={className} aria-label={ariaLabel}>
      {stats.map(({ value, label }) => (
        <ImpactStat key={label} value={value} label={label} />
      ))}
    </div>
  );
}
