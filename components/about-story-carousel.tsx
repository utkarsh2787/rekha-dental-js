"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/about/story/story-${String(index + 1).padStart(2, "0")}.jpeg`,
  alt: `A Legacy of Trusted Dental Care-${index}`,
}));

export function AboutStoryCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      3500,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="group relative h-[250px] overflow-hidden rounded-2xl md:h-[300px] lg:h-[400px]"
      data-testid="about-story-carousel"
      data-active-slide={active + 1}
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-all duration-1000 ease-out group-hover:scale-110 ${index === active ? "opacity-100" : "opacity-0"}`}
          aria-hidden={index !== active}
        />
      ))}
    </div>
  );
}
