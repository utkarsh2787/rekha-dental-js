"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryCategory = "facility" | "technology" | "smiles" | "events";
type GalleryFilter = "all" | GalleryCategory;

type GalleryItem = {
  alt: string;
  category: GalleryCategory;
  image: string;
};

const galleryItems: GalleryItem[] = [
  { image: "/images/gallery/gallery-01.jpeg", alt: "Rekha Dental reception area", category: "facility" },
  { image: "/images/gallery/gallery-02.jpeg", alt: "Aligner", category: "facility" },
  { image: "/images/gallery/gallery-03.jpeg", alt: "Rekha Dental Team", category: "facility" },
  { image: "/images/gallery/gallery-04.jpeg", alt: "Implant", category: "facility" },
  { image: "/images/gallery/gallery-05.jpeg", alt: "Kotgaon Clinic", category: "facility" },
  { image: "/images/gallery/gallery-06.jpeg", alt: "Clinical Area", category: "facility" },
  { image: "/images/gallery/gallery-07.jpeg", alt: "Consultation Room", category: "facility" },
  { image: "/images/gallery/gallery-08.jpeg", alt: "Reception", category: "facility" },
  { image: "/images/gallery/gallery-09.jpeg", alt: "Scanner", category: "technology" },
  { image: "/images/gallery/gallery-10.jpeg", alt: "Modern dental instruments setup", category: "technology" },
  { image: "/images/gallery/gallery-11.jpeg", alt: "10x Sterilization ", category: "technology" },
  { image: "/images/gallery/gallery-12.jpeg", alt: "Scanner", category: "technology" },
  { image: "/images/gallery/gallery-13.jpeg", alt: "Happy Patient", category: "smiles" },
  { image: "/images/gallery/gallery-14.jpeg", alt: "Patient smile transformation", category: "smiles" },
  { image: "/images/gallery/gallery-15.jpeg", alt: "Confident patient after treatment", category: "smiles" },
  { image: "/images/gallery/gallery-16.jpeg", alt: "Clinical Discussion", category: "smiles" },
  { image: "/images/gallery/gallery-17.jpeg", alt: "Happy Patient", category: "smiles" },
  { image: "/images/gallery/gallery-18.jpeg", alt: "Smiles", category: "smiles" },
  { image: "/images/gallery/gallery-19.jpeg", alt: "Happy Patient", category: "smiles" },
  { image: "/images/gallery/gallery-20.jpeg", alt: "Little Smile", category: "smiles" },
  { image: "/images/gallery/gallery-21.jpeg", alt: "Little Smiles", category: "smiles" },
  { image: "/images/gallery/gallery-22.jpeg", alt: "Beautiful smile makeover result", category: "smiles" },
  { image: "/images/gallery/gallery-23.jpeg", alt: "Little Smiles", category: "smiles" },
  { image: "/images/gallery/gallery-24.jpeg", alt: "Clinic celebration moment", category: "events" },
  { image: "/images/gallery/gallery-25.jpeg", alt: "Professional dental seminar", category: "events" },
  { image: "/images/gallery/gallery-26.jpeg", alt: "Certification", category: "events" },
  { image: "/images/gallery/gallery-27.jpeg", alt: "Participation in event", category: "events" },
  { image: "/images/gallery/gallery-28.jpeg", alt: "Certification", category: "events" },
  { image: "/images/gallery/gallery-29.jpeg", alt: "Events", category: "events" },
  { image: "/images/gallery/gallery-30.jpeg", alt: "Events", category: "events" },
];

const filters: Array<{ label: string; value: GalleryFilter }> = [
  { label: "All", value: "all" },
  { label: "Facility", value: "facility" },
  { label: "Technology", value: "technology" },
  { label: "Smiles", value: "smiles" },
  { label: "Events", value: "events" },
];

function GalleryCard({ item, desktop = false }: { item: GalleryItem; desktop?: boolean }) {
  return (
    <article
      className={desktop
        ? "group relative h-[420px] flex-1 cursor-pointer overflow-hidden rounded-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:flex-[1.8]"
        : "group relative h-[240px] cursor-pointer overflow-hidden rounded-lg"}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 rounded-lg bg-black/15 transition-all duration-500 group-hover:bg-black/30" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full p-4 md:p-8">
        <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="mb-2 text-[10px] uppercase tracking-[3px] text-white/70 md:mb-3 md:text-xs">{item.category}</p>
          <h3 className="gallery-font-header max-w-[260px] text-lg leading-snug text-white md:text-2xl">{item.alt}</h3>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-lg border border-white/10 transition-all duration-500 group-hover:border-[#CBA553]/50" />
    </article>
  );
}

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const visibleItems = useMemo(
    () => activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  );
  const rows = useMemo(() => {
    const result: GalleryItem[][] = [];
    for (let index = 0; index < visibleItems.length; index += 3) result.push(visibleItems.slice(index, index + 3));
    return result;
  }, [visibleItems]);

  return (
    <div className="gallery-page bg-[#EAE4DB]">
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6 pb-6 pt-10 lg:px-10">
          <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Our Gallery</p>
            </div>
            <h1 className="gallery-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">
              Moments that reflect our standard of care.
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">
              A curated glimpse into our spaces, technology, patient journeys, and the quiet details behind every experience.
            </p>
          </div>
          <div className="lg:mt-14">
            <div className="flex flex-wrap justify-center gap-3" aria-label="Gallery filters">
              {filters.map((filter) => {
                const selected = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`relative overflow-hidden border px-4 py-1.5 text-xs uppercase tracking-[1.5px] transition-colors duration-200 lg:px-6 lg:py-3 lg:text-sm ${selected ? "border-[#16412d] bg-[#16412d] text-white" : "border-[#D8CEC0] bg-transparent text-[#2C2C2C] hover:border-[#16412d] hover:bg-[#16412d] hover:text-white"}`}
                  >
                    <span className="relative z-10">{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 lg:py-10" aria-live="polite">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {visibleItems.map((item) => <GalleryCard key={item.image} item={item} />)}
          </div>
          <div className="hidden flex-col gap-5 md:flex">
            {rows.map((row) => (
              <div key={row[0].image} className="flex gap-5">
                {row.map((item) => <GalleryCard key={item.image} item={item} desktop />)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
