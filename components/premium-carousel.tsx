"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    number: "01",
    title: "Immediate Implantology",
    image: "/images/treatment-immediate-implantology.png",
    href: "/treatments/immediate-implantology",
    text: "Immediate Implantology enables tooth replacement in a significantly shorter timeframe by placing dental implants soon after extraction. This advanced approach helps preserve bone structure, reduces treatment duration, improves aesthetics, and restores function quickly. Using precise digital planning and modern surgical techniques, patients can enjoy a faster, more comfortable path to a confident smile.",
  },
  {
    number: "02",
    title: "Zimmer Dental Implants",
    image: "/images/treatment-zimmer-implants.png",
    href: "/treatments/dental-implants",
    text: "Zimmer Dental Implants are globally recognized for their precision engineering, exceptional stability, and long-term success rates. Designed to integrate naturally with the jawbone, these premium implants provide superior function and aesthetics. They offer a durable solution for missing teeth while ensuring optimal comfort, chewing efficiency, and a natural-looking smile that lasts for years.",
  },
  {
    number: "03",
    title: "Dental Veneers",
    image: "/images/treatment-veneers.png",
    href: "/treatments/dental-veneers",
    text: "Dental Veneers are ultra-thin custom-crafted shells designed to enhance the appearance of teeth by correcting stains, chips, gaps, and minor alignment concerns. Crafted from high-quality porcelain or composite materials, veneers deliver a natural, bright, and symmetrical smile. They are one of the most sought-after cosmetic dental treatments for achieving dramatic smile transformations.",
  },
  {
    number: "04",
    title: "Clear Aligners & Braces",
    image: "/images/treatment-aligners.png",
    href: "/treatments/clear-aligners",
    text: "Clear Aligners and Braces provide effective solutions for correcting crowded, crooked, or misaligned teeth. Modern orthodontic treatments improve smile aesthetics while enhancing bite function and oral health. Whether choosing nearly invisible aligners or traditional braces, patients benefit from customized treatment plans designed to deliver predictable, comfortable, and long-lasting alignment results.",
  },
  {
    number: "05",
    title: "Full Mouth Rehabilitation",
    image: "/images/treatment-full-mouth.png",
    href: "/treatments/full-mouth-rehabilitation",
    text: "Full Mouth Rehabilitation is a comprehensive treatment approach that restores the health, function, and appearance of the entire mouth. Combining restorative, cosmetic, and rehabilitative procedures, it addresses worn, damaged, missing, or compromised teeth. This customized solution helps patients regain confident smiles, improved chewing ability, balanced bite function, and long-term oral wellness.",
  },
  {
    number: "06",
    title: "Professional Teeth Bleaching",
    image: "/images/treatment-bleaching.png",
    href: "/treatments/cosmetic-dentistry",
    text: "Professional Teeth Bleaching is an advanced cosmetic procedure designed to safely remove stains and discoloration caused by food, beverages, aging, and lifestyle habits. Performed under expert supervision, the treatment delivers noticeably whiter teeth while maintaining enamel safety. It enhances smile confidence, creates a youthful appearance, and provides faster, more predictable results than over-the-counter whitening products.",
  },
] as const;

export function PremiumCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const move = (direction: number) => setActive((value) => (value + direction + slides.length) % slides.length);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto mb-[45px] mt-10 max-w-7xl px-6 md:mb-0 lg:px-10">
      <div className="group grid items-center overflow-hidden rounded-3xl bg-[#f5f1ea] lg:grid-cols-2">
        <div className="relative h-[300px] overflow-hidden lg:h-[550px]">
          <Image src={slide.image} alt={slide.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        </div>
        <div className="p-8 lg:p-14">
          <p className="text-base font-extrabold uppercase tracking-[3px] text-[#cba553] lg:text-lg">Procedure {slide.number}</p>
          <h3 className="mt-4 font-display text-2xl font-normal leading-tight text-[#2c2c2c] md:text-3xl lg:text-4xl">{slide.title}</h3>
          <p className="mt-6 text-sm leading-6 text-[#666] md:text-base md:leading-8">{slide.text}</p>
        </div>
      </div>
      <button type="button" onClick={() => move(-1)} aria-label="Previous slide" className="absolute left-3 top-[150px] z-20 grid size-10 place-items-center rounded-full bg-white text-[#16412d] shadow-lg transition active:scale-95 lg:left-4 lg:top-1/2 lg:size-12 lg:-translate-y-1/2"><ChevronLeft size={20} /></button>
      <button type="button" onClick={() => move(1)} aria-label="Next slide" className="absolute right-3 top-[150px] z-20 grid size-10 place-items-center rounded-full bg-white text-[#16412d] shadow-lg transition active:scale-95 lg:right-4 lg:top-1/2 lg:size-12 lg:-translate-y-1/2"><ChevronRight size={20} /></button>
    </div>
  );
}
