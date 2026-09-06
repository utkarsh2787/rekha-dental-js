"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = Array.from({ length: 14 }, (_, index) => ({
  src: `/images/about-carousel/about-${String(index + 1).padStart(2, "0")}.jpeg`,
  alt: `Rekha Dental clinic and team ${index + 1}`,
}));

export function AboutCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      3000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="group relative h-[250px] overflow-hidden rounded-2xl lg:h-[400px]">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`rounded-2xl object-cover transition-all duration-[2000ms] ease-out group-hover:scale-110 ${index === active ? "opacity-100" : "opacity-0"}`}
          aria-hidden={index !== active}
        />
      ))}
    </div>
  );
}
