"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/hero-05.png", alt: "Dental Banner 5", href: "/treatments" },
  { src: "/images/hero-01.png", alt: "Dental Banner 1", href: "/treatments/clear-aligners" },
  { src: "/images/hero-02.png", alt: "Dental Banner 2", href: "/treatments/clear-aligners" },
  { src: "/images/hero-03.png", alt: "Dental Banner 3", href: "/treatments/dental-implants" },
  { src: "/images/hero-04.png", alt: "Dental Banner 4", href: "/contact" },
] as const;

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => {
    setActive((value) => (value + direction + slides.length) % slides.length);
  };

  return (
    <section
      aria-label="Featured dental services"
      className="relative overflow-hidden bg-[var(--ink)]"
      data-testid="hero-carousel"
      data-active-slide={active + 1}
    >
      <div className="relative h-[250px] w-full md:h-[400px] lg:h-[60vh] xl:h-[80vh]">
        {slides.map((slide, index) => (
          <a key={slide.src} href={slide.href} className={`absolute inset-0 transition-opacity duration-700 ${index === active ? "z-[1] opacity-100" : "z-0 opacity-0"}`} aria-hidden={index !== active} tabIndex={index === active ? 0 : -1}>
            <Image src={slide.src} alt={slide.alt} fill priority={index === 0} loading="eager" sizes="100vw" className="object-fill" />
          </a>
        ))}
      </div>
      <button type="button" onClick={() => move(-1)} className="absolute left-4 top-1/2 z-30 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#16412d] shadow-lg backdrop-blur-sm transition hover:bg-white active:scale-95 lg:left-8 lg:size-12" aria-label="Previous banner slide"><ChevronLeft size={26} /></button>
      <button type="button" onClick={() => move(1)} className="absolute right-4 top-1/2 z-30 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#16412d] shadow-lg backdrop-blur-sm transition hover:bg-white active:scale-95 lg:right-8 lg:size-12" aria-label="Next banner slide"><ChevronRight size={26} /></button>
      <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2" aria-label="Banner slides">
        {slides.map((slide, index) => (
          <button key={slide.src} type="button" onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`} className={`size-2 rounded-full transition-all ${index === active ? "bg-[#16412d]" : "bg-black/20"}`} />
        ))}
      </div>
    </section>
  );
}
