"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  CalendarDays, ChevronDown, Clock3, ExternalLink,
  Mail, MapPin, Phone, Sparkles, Stethoscope,
} from "lucide-react";
import { CalendlyButton } from "@/components/calendly-button";
import { reviews as selectedReviews } from "@/content/home";
import {
  commonProblemFaqs, commonProblems, postTreatmentCards, reviewCards,
  safetyGroups, warrantyCards,
} from "@/content/patient-pages";
import { siteConfig } from "@/config/site";

function Intro({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return <div className="mx-auto max-w-[760px] text-center">
    <p className={`rd-pill ${dark ? "rd-pill-dark" : ""}`}>{eyebrow}</p>
    <h1 className={`rd-title mt-5 ${dark ? "text-white" : "text-[#292725]"}`}>{title}</h1>
    {intro ? <p className={`mx-auto mt-5 max-w-[690px] text-base leading-[1.75] ${dark ? "text-white/65" : "text-[#69645e]"}`}>{intro}</p> : null}
  </div>;
}

export function RekhaNotFoundPage() {
  return <section className="rd-not-found relative overflow-hidden bg-[#f7f3ec] px-6 py-14 lg:min-h-[780px] lg:px-10">
    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#e7ded1] opacity-50 blur-3xl" />
    <div className="relative z-10 mx-auto grid min-h-[660px] max-w-7xl items-center gap-14 lg:grid-cols-2">
      <div className="max-w-xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[.35em] text-[#b08a52]">Error 404</p>
        <h1 className="rd-font-header text-5xl leading-[1.05] text-[#1f1d1a] md:text-7xl">This page seems to have lost its smile.</h1>
        <p className="mt-8 max-w-lg text-lg leading-9 text-[#6e6962]">The page you are looking for may have been moved, removed, or never existed. Let’s guide you back to a healthier destination.</p>
        <Link href="/" className="mt-12 inline-flex h-12 items-center gap-5 border border-[#1f1d1a] px-7 text-xs uppercase tracking-[.24em] text-[#1f1d1a] transition hover:bg-[#1f1d1a] hover:text-white">Home <span aria-hidden="true">→</span></Link>
      </div>
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image src="/images/pending/appointment--ghaziabad/01-404-not-found.jpg" alt="404 Not Found" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
    </div>
  </section>;
}

const locations = [
  { slug: "ghaziabad", label: "Ghaziabad", image: "/images/pending/dentist-near-me/12-rekha-dental.jpg", description: "Comprehensive dental care with advanced technology, experienced specialists, and personalized treatment plans.", address: "House No. 622, First Floor, Satyam Enclave, New Kotgaon, Ghaziabad, Uttar Pradesh 201001", map: "https://maps.app.goo.gl/HiVTSks8ATLy4rMy5" },
  { slug: "raj-nagar", label: "Raj Nagar Extension", image: "/images/pending/dentist-near-me/13-rekha-dental.jpg", description: "Dedicated center for dental implants, smile makeovers, cosmetic dentistry, and advanced laser treatments.", address: "A-007, Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017", map: "https://maps.app.goo.gl/uYcdauD5jVtN1bEp6" },
] as const;

export function LocationsPage() {
  const steps = [
    ["pin", "Choose a Centre", "Select the Rekha Dental location that's most convenient for your visit."],
    ["calendar", "Select Date & Time", "Choose your preferred appointment slot through our secure online booking system."],
    ["shield", "Confirm Appointment", "Complete your booking and receive instant confirmation with your appointment details."],
  ] as const;
  return <div className="locations-page rd-page flow-root bg-[#EAE4DB]">
    <div className="pt-10">
      <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
          <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Our Centers</p>
        </div>
        <h1 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">Reserve your visit</h1>
        <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">Choose the nearest Rekha Dental centre, explore its specialties, and book a private consultation in minutes.</p>
      </div>

      <div className="mx-auto my-10 grid max-w-7xl grid-cols-1 gap-8 px-8 lg:my-16 lg:grid-cols-2 lg:px-10">
        {locations.map((location) => <article key={location.slug} className="group rounded-lg bg-[#F5F1EA] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
          <Link href={`/dentist-near-me/${location.slug}`}>
            <div className="relative h-[260px] overflow-hidden rounded-t-lg">
              <Image src={location.image} alt="Rekha Dental" fill sizes="100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#16412d] shadow">{location.label}</div>
            </div>
          </Link>
          <div className="p-6">
            <h3 className="rd-font-header text-2xl text-[#2C2C2C]">Rekha Dental</h3>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#6B6B6B]">{location.description}</p>
          </div>
          <div className="mx-4 grid gap-3">
            <div className="flex items-start gap-3 rounded-xl border border-[#DCCEB9] p-4">
              <LocationPageIcon type="pin" className="mt-1 size-[18px] shrink-0 text-[#16412d]" />
              <a href={location.map} target="_blank" rel="noreferrer" className="line-clamp-2 text-sm text-[#2C2C2C]">{location.address}</a>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-[#DCCEB9] p-4">
              <LocationPageIcon type="clock" className="mt-1 size-[18px] shrink-0 text-[#16412d]" />
              <p className="whitespace-pre-line text-sm text-[#2C2C2C]">Mon – Sat • 9:30 AM – 2:30 PM &amp; 5:00 PM – 8:00 PM<br />Sun • 9:30 AM – 2:30 PM</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 p-6">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-wide text-[#B89B5E]">Contact</p>
              <a href="tel:+91-8130-406-405" className="rd-font-header text-lg font-bold text-[#16412d] hover:underline">+91-8130-406-405</a>
            </div>
            <Link href={`/dentist-near-me/${location.slug}`} className="flex items-center gap-2 rounded-lg bg-[#16412d] px-5 py-1.5 font-medium text-white transition-all duration-200 hover:bg-[#093528] active:scale-95">View</Link>
          </div>
        </article>)}
      </div>

      <div className="mx-10 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:my-16 xl:grid-cols-3">
        {steps.map(([icon, title, copy], index) => <article key={title} className="group relative overflow-hidden rounded-2xl border border-[#E8DED0] bg-[#FCFAF6] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D9C5A1] hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]">
          <div className="absolute right-6 top-5 rd-font-header text-4xl leading-none text-[#ECE4D8] transition duration-500 group-hover:text-[#E1D4BF] lg:text-6xl">0{index + 1}</div>
          <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-[#E7DDD0] bg-[#F3ECE1] text-2xl text-[#163828] transition-all duration-500 lg:size-16">
            <LocationPageIcon type={icon} className="size-[1em]" />
          </div>
          <div className="relative z-10 mt-4 lg:mt-8">
            <h3 className="rd-font-header text-xl font-semibold leading-tight text-[#2C2A27] lg:text-2xl">{title}</h3>
            <p className="mt-5 text-sm leading-6 text-[#66625C] md:text-base lg:leading-7">{copy}</p>
          </div>
          <div className="absolute -bottom-10 -right-10 size-40 rounded-full bg-[#EFE5D7] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />
        </article>)}
      </div>
    </div>
  </div>;
}

function LocationPageIcon({ type, className }: { type: "pin" | "clock" | "calendar" | "shield"; className?: string }) {
  if (type === "pin") return <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>;
  if (type === "clock") return <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm92.49 313-20 25a16 16 0 0 1-22.49 2.5l-67-49.72a40 40 0 0 1-15-31.23V112a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v144l58 42.5a16 16 0 0 1 2.49 22.5z" /></svg>;
  if (type === "calendar") return <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 448 512"><path d="M128 0c13.3 0 24 10.7 24 24v40h144V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h40c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24zm272 192H48v256c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V192zm-71 105L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6.1 33.9z" /></svg>;
  return <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 512 512"><path d="m466.5 83.7-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3 256 65.3l175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" /></svg>;
}

const centreData = {
  ghaziabad: { title: "Modern dentistry with a personal touch.", intro: "Our Ghaziabad centre combines advanced dental technology with compassionate care. From preventive check-ups to complex implant procedures, every treatment is tailored to your comfort and long-term oral health.", address: locations[0].address, map: locations[0].map, specialties: ["Dental Implants", "Smile Designing", "Root Canal Treatment", "Laser Dentistry", "Invisible Aligners", "Pediatric Dentistry"], highlights: ["Experienced implant specialists", "Digital X-Ray & RVG", "Modern sterilization protocols", "Pain-free dentistry", "Flexible appointments", "Comfortable waiting lounge"] },
  "raj-nagar": { title: "Advanced implant & laser dentistry.", intro: "Our Raj Nagar Extension centre specializes in cosmetic dentistry, implantology and full mouth rehabilitation using modern equipment and evidence-based treatment protocols.", address: locations[1].address, map: locations[1].map, specialties: ["Dental Implants", "Laser Dentistry", "Full Mouth Rehabilitation", "Smile Makeover", "Cosmetic Dentistry", "Orthodontics"], highlights: ["Latest implant systems", "Digital smile planning", "Experienced specialists", "Advanced sterilization", "Comfortable waiting lounge", "Flexible appointments"] },
} as const;

export function CentrePage({ centre }: { centre: keyof typeof centreData }) {
  const data = centreData[centre];
  return <LiveCentrePage data={data} />;
}

function LiveCentrePage({ data }: { data: (typeof centreData)[keyof typeof centreData] }) {
  return <div className="rd-page bg-[#eae4db]">
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="mb-8 flex max-w-4xl flex-col items-start gap-3 px-4 text-left lg:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">About The Centre</p>
            </div>
            <h1 className="rd-font-header mt-2 max-w-2xl text-left text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{data.title}</h1>
            <p className="mt-2 max-w-2xl text-left text-base leading-relaxed text-[#555555] md:text-lg">{data.intro}</p>
          </div>
          <LiveCentreList title="Specialties" items={data.specialties} icon={<Stethoscope size={14} />} />
          <LiveCentreList title="Centre Highlights" items={data.highlights} icon={<Sparkles size={18} />} />
        </div>

        <aside className="self-start border border-[#d6d0c6] bg-[#f5f5ec] p-8 lg:sticky lg:top-24">
          <div className="mb-6 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[3px] text-[#bd9953]"><MapPin size={16} /><span>Visit Centre</span></div>
          <h3 className="rd-font-header text-3xl leading-snug text-[#1f3d2b]">Rekha Dental</h3>
          <div className="mt-8">
            <LiveCentreInfo icon={<MapPin size={18} />} title="Address"><a href={data.map} target="_blank" rel="noreferrer" className="text-sm leading-7 text-[#3e3e3e] transition hover:text-[#b89b5e]">{data.address}</a></LiveCentreInfo>
            <LiveCentreInfo icon={<Clock3 size={18} />} title="Consultation Hours"><p className="whitespace-pre-line text-sm leading-7 text-[#3e3e3e]">Mon – Sat • 9:30 AM – 2:30 PM &amp; 5:00 PM – 8:00 PM<br />Sun • 9:30 AM – 2:30 PM</p></LiveCentreInfo>
            <LiveCentreInfo icon={<Phone size={18} />} title="Phone"><a href={siteConfig.phoneHref} className="text-sm font-medium text-[#1f3d2b] transition hover:text-[#b89b5e]">{siteConfig.phoneDisplay}</a></LiveCentreInfo>
          </div>
          <div className="mt-10 space-y-3">
            <CalendlyButton variant="header" label="Book Appointment" className="!flex !min-h-0 w-full !rounded-none !bg-[#1f3d2b] !py-4 !text-xs !uppercase !tracking-[3px] hover:!bg-[#183122]" />
            <a href={siteConfig.phoneHref} className="flex items-center justify-center gap-3 border border-[#1f3d2b] py-4 text-xs uppercase tracking-[3px] text-[#1f3d2b] transition duration-200 hover:bg-[#1f3d2b] hover:text-white active:scale-95"><Phone size={18} /> Call Centre</a>
          </div>
        </aside>
      </div>
    </section>
  </div>;
}

function LiveCentreList({ title, items, icon }: { title: string; items: readonly string[]; icon: ReactNode }) {
  return <section className="mt-14">
    <div className="mb-6 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[3px] text-[#bd9953]">{icon}<span>{title}</span></div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => <div key={item} className="border border-[#d6d0c6] bg-[#f5f5ec] px-5 py-4 text-sm text-[#3e3e3e]">{item}</div>)}
    </div>
  </section>;
}

function LiveCentreInfo({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <div className="flex gap-4 py-5">
    <span className="mt-1 shrink-0 text-[#b89b5e]">{icon}</span>
    <div><p className="mb-2 text-sm font-extrabold uppercase tracking-[2px] text-[#bd9953]">{title}</p>{children}</div>
  </div>;
}

function PatientSafetyIcon({ index }: { index: number }) {
  const common = { className: "h-[1em] w-[1em]", "aria-hidden": true } as const;

  switch (index) {
    case 0:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z" /></svg>;
    case 1:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><g fillRule="evenodd"><path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z" /><path d="M19.41 10.42 17.99 9l-3.17 3.17-1.41-1.42L12 12.16 14.82 15zM5 7h5v2H5zM5 11h5v2H5zM5 15h5v2H5z" /></g></svg>;
    case 2:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512"><path d="M163.9 136.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18 17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L310.5 240.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L163.9 136.9zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" /></svg>;
    case 3:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z" /></svg>;
    case 4:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" /></svg>;
    case 5:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM256 112c8.8 0 16 7.2 16 16c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C334.5 200.1 351 240 384 240c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C311.9 334.5 272 351 272 384c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C177.5 311.9 161 272 128 272c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C200.1 177.5 240 161 240 128c0-8.8 7.2-16 16-16zM232 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm72 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" /></svg>;
    case 6:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z" /></svg>;
    case 7:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3l-91.4 0zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7l0-187.8L591.4 312z" /></svg>;
    case 8:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3a3 3 0 0 1 1.47-2.57c.41.59 1.06 1 1.83 1.06.7.06 1.36-.19 1.85-.62l.59 1.61.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.52-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.55c-1.17-.04-2.19.75-2.48 1.86A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7zm5.86-14.48 1.71 4.7-.94.34-1.71-4.7.94-.34zM10.5 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" /></svg>;
    case 9:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"><path d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5l0 6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5l0-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z" /></svg>;
    case 10:
      return <svg {...common} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path d="M20.127 52.803v58.986L250.46 245.153c26.367-28.823 70.087-36.533 105.313-16.195 35.29 20.374 50.465 62.207 38.567 99.503l101.648 58.855-64.728-74.65 35.638-37.352-57.27-7.687 84.72-86.92-125.71 33.186 12.995-120.208-66.578 96.363-27.448-80.593-16.353 88.77L20.127 52.803zm0 105.12l-.008.018.007.005v-.02zm0 .022l-.002 87.582 155.344 89.95-89.94 33.287h135.493l-63.658 99.87 116.22-70.083 15.77 85.852 38.543-80.01 63.66 87.018-5.853-87.047 90.54 17.268-102.4-59.198c-26.546 26.964-68.89 33.744-103.183 13.945-34.322-19.816-49.62-59.928-39.49-96.424L20.127 157.945zm316.6 119.442c-.938-.003-1.874.027-2.805.092-12.42.86-24.164 7.707-30.9 19.375-10.78 18.67-4.455 42.27 14.214 53.047 18.67 10.78 42.27 4.455 53.047-14.214 10.78-18.67 4.454-42.27-14.215-53.047-6.125-3.536-12.78-5.23-19.34-5.253z" /></svg>;
    default:
      return <svg {...common} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5.5c-1.074-.586-2.583-1.5-4-1.5-2.1 0-4 1.247-4 5 0 4.899 1.056 8.41 2.671 10.537.573.756 1.97.521 2.567-.236.398-.505.819-1.439 1.262-2.801.292-.771.892-1.504 1.5-1.5.602 0 1.21.737 1.5 1.5.443 1.362.864 2.295 1.262 2.8.597.759 2 .993 2.567.237C18.944 17.41 20 13.9 20 9c0-3.74-1.908-5-4-5-1.423 0-2.92.911-4 1.5z" /><path d="m12 5.5 3 1.5" /></svg>;
  }
}

export function PatientSafetyPage() {
  return <div className="rd-page flow-root bg-[#EAE4DB] pt-10">
    {safetyGroups.map((group, groupIndex) => <div key={group.title}>
      <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
          <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{group.eyebrow}</p>
        </div>
        <h1 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{group.title}</h1>
        <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">{group.intro}</p>
      </div>
      <div className="mx-10 my-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 lg:my-16">
        {group.cards.map(([title, copy], cardIndex) => <article key={title} className="group relative overflow-hidden rounded-2xl border border-[#E8DED0] bg-[#FCFAF6] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D9C5A1] hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]">
          <div className="absolute right-6 top-5 rd-font-header text-4xl leading-none text-[#ECE4D8] transition duration-500 group-hover:text-[#E1D4BF] lg:text-6xl">0{cardIndex + 1}</div>
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7DDD0] bg-[#F3ECE1] text-2xl text-[#163828] transition-all duration-500 lg:h-16 lg:w-16"><PatientSafetyIcon index={groupIndex * 4 + cardIndex} /></div>
          <div className="relative z-10 mt-4 lg:mt-8">
            <h3 className="rd-font-header text-xl font-semibold leading-tight text-[#2C2A27] lg:text-2xl">{title}</h3>
            <p className="mt-5 text-sm leading-6 text-[#66625C] md:text-base lg:leading-7">{copy}</p>
          </div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#EFE5D7] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />
        </article>)}
      </div>
    </div>)}
  </div>;
}

export function CommonProblemsPageExact() {
  return <div className="rd-page bg-[#eae4db] pt-10">
    <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5"><p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Common Dental Problems</p></div>
      <h1 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">Recognize the signs. Protect your smile.</h1>
      <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555] md:text-lg">From tooth decay and sensitivity to missing teeth and gum disease, discover common oral health concerns and the treatments available.</p>
    </div>

    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="my-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {commonProblems.map((problem, index) => <article key={problem.title} className="group flex h-full flex-col overflow-hidden rounded-lg bg-[#f5f1ea] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
          <Link href={problem.href ?? "/treatments"}><div className="relative h-[220px] w-full cursor-pointer overflow-hidden"><Image src={problem.image} alt={problem.title} fill sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" /></div></Link>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex-1">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[2px] text-[#bd9953]">Condition {String(index + 1).padStart(2, "0")}</p>
              <h3 className="rd-font-header mb-3 text-xl text-[#2c2c2c] md:text-2xl">{problem.title}</h3>
              <div className="mb-5 grid grid-cols-2 gap-3"><SmallInfo label="Medical Term" text={problem.term ?? ""} /><SmallInfo label="Symptoms" text={String(problem.symptoms?.length ?? 0)} /></div>
              <div className="rounded-xl border border-[#dcceb9] p-4">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-[#bd9953]">Common Symptoms</p>
                <ul className="space-y-2">{problem.symptoms?.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-[#555]"><span className="mt-1 text-[#164b38]">•</span>{item}</li>)}</ul>
              </div>
              <div className="mt-5 rounded-xl border border-[#dcceb9] p-4"><p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-[#bd9953]">Recommended Treatment</p><p className="line-clamp-3 text-sm text-[#666]">{problem.description}</p></div>
            </div>
            <Link href={problem.href ?? "/treatments"} className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#164b38] py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#093528] active:scale-95">Explore Treatment</Link>
          </div>
        </article>)}
      </div>
    </div>

    <section className="flex flex-col items-center justify-center overflow-hidden bg-[#eae4db] py-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5"><p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">FAQ</p></div>
          <h2 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">Quietly answered.</h2>
        </div>
        <div className="mx-auto w-full max-w-3xl">{commonProblemFaqs.map(([question, answer]) => <details key={question} className="group cursor-pointer border-b border-[#e0d8cc] py-5"><summary className="flex list-none items-center justify-between"><h4 className="rd-font-header text-base text-[#2c2c2c] md:text-lg">{question}</h4><ChevronDown size={16} className="shrink-0 text-[#2c2c2c] transition-transform duration-300 group-open:rotate-180" /></summary><p className="mt-4 pr-6 text-sm leading-relaxed text-[#6b6b6b] md:text-base">{answer}</p></details>)}</div>
      </div>
    </section>
  </div>;
}

function SmallInfo({ label, text }: { label: string; text: string }) {
  return <div className="flex h-[82px] flex-col items-center justify-center rounded-xl border border-[#dcceb9] px-3 text-center"><p className="text-xs font-extrabold uppercase tracking-wide text-[#bd9953]">{label}</p><p className="mt-1 line-clamp-2 text-sm font-semibold leading-tight text-[#2c2c2c]">{text}</p></div>;
}

export function PostInstructionPage() {
  return <div className="rd-page bg-[#EAE4DB] py-10">
    <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
        <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Post Treatment Care</p>
      </div>
      <h1 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">Your Recovery Starts Here</h1>
      <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">Follow these simple aftercare instructions to promote healing, protect your treatment, and achieve the best long-term results.</p>
    </div>

    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
      {postTreatmentCards.map((card) => <article key={card.title} className="group overflow-hidden rounded-3xl border border-[#E8DDD1] bg-[#FFFDF9] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-[230px] overflow-hidden bg-[#FCFAF6]">
          <Image src={card.image} alt={card.title} fill sizes="100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="p-8">
          <div className="mb-8">
            <h3 className="rd-font-header mb-3 text-xl leading-snug text-[#2C2C2C] md:text-2xl">{card.title}</h3>
            <p className="min-h-[50px] text-sm leading-relaxed text-[#6B6B6B]">{card.description}</p>
          </div>
          <div className="space-y-5">
            <ol className="space-y-2">
              {card.items.map((item, index) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#6B6B6B]">
                <span className="min-w-6 font-semibold text-[#b89b5e]">{String(index + 1).padStart(2, "0")}.</span>
                <span>{item}</span>
              </li>)}
            </ol>
          </div>
        </div>
      </article>)}
    </div>
  </div>;
}

export function WarrantyPage() {
  return <div className="rd-page bg-[#eae4db] py-10">
    <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
        <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Warranty Policy</p>
      </div>
      <h1 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">We&apos;ve Got You Covered</h1>
      <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">Know what&apos;s covered, for how long, and the conditions for re-treatment.</p>
    </div>

    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
      {warrantyCards.map((card) => <article key={card.title} className="overflow-hidden rounded-3xl border border-[#E8DDD1] bg-[#FFFDF9] shadow-sm transition-all duration-300 hover:shadow-xl">
        <div className="relative h-[250px] overflow-hidden bg-[#FCFAF6]">
          <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
          <div className="absolute left-2 top-3 flex items-center gap-2 rounded-full border border-[#16412D]/10 bg-[#16412d] px-2 py-2 shadow-sm backdrop-blur-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-4 text-[#b89b5e]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFFDF9]">{card.badge}</span>
          </div>
        </div>
        <div className="space-y-8 p-8">
          <div className="space-y-4">
            <h3 className="rd-font-header mb-3 text-xl leading-snug text-[#2C2C2C] md:text-2xl">{card.title}</h3>
            <p className="min-h-[50px] text-sm leading-relaxed text-[#6B6B6B]">{card.description}</p>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-3"><h4 className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#b89b5e]">Terms &amp; Conditions</h4></div>
            <ol className="space-y-2">
              {card.items.map((item, index) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#6B6B6B]">
                <span className="min-w-6 font-semibold text-[#b89b5e]">{String(index + 1).padStart(2, "0")}.</span>
                <span>{item}</span>
              </li>)}
            </ol>
          </div>
        </div>
      </article>)}
    </div>
  </div>;
}

export function PaymentPage() {
  const [copied, setCopied] = useState(false);
  const upi = "9910462461@icici";
  const whatsappMessage = `Hello Rekha Dental,

I have booked an appointment.

My UTR Number:

I have attached the screenshot of my payment for verification.

Thank you.`;
  const whatsapp = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMessage)}`;
  const copyUpi = async () => {
    await navigator.clipboard.writeText(upi);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };
  const verificationSteps = [
    "Scan the QR code using any UPI app.",
    "Complete the payment successfully.",
    "Take a screenshot of the payment confirmation.",
    "Click the WhatsApp button below.",
    "Send your UTR number and screenshot.",
  ];

  return <div className="rd-page bg-[#EAE4DB]">
    {copied ? <div role="status" className="fixed left-1/2 top-6 z-[100] -translate-x-1/2 rounded-lg bg-white px-4 py-3 text-sm text-[#1E1E1E] shadow-lg">UPI ID copied.</div> : null}
    <section className="min-h-screen px-4 py-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
            <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Payment Verification</p>
          </div>
          <h1 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">Secure your appointment.</h1>
          <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">Your appointment slot has been temporarily reserved. Please complete the payment and share the transaction details with us on WhatsApp for confirmation.</p>
        </div>

        <div className="mt-8 grid gap-10 lg:mt-16 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-[0_10px_60px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#9A7B4F]">Scan &amp; Pay</p>
                <h2 className="mt-2 text-xl text-[#1E1E1E] lg:text-3xl">UPI Payment</h2>
              </div>
              <div className="rounded-lg bg-[#F5EFE6] px-4 py-2 text-xs text-[#8B6B45]">UPI Only</div>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="rounded-lg border border-[#E8DED1] bg-[#FAF7F2] p-5">
                <Image src="/images/pending/payment/60-upi-qr.jpg" alt="UPI QR" width={320} height={320} sizes="320px" className="h-auto rounded-2xl" />
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#E8DED1] bg-[#F8F4EE] p-4 lg:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#9A7B4F]">Booking Fee</p>
                  <h3 className="mt-2 text-xl text-[#1E1E1E] lg:text-4xl">₹400</h3>
                </div>
                <div className="rounded-lg border border-[#D8C2A0] bg-[#EFE4D3] px-3 py-1.5 text-xs font-medium uppercase text-[#7A5A32]">Advance</div>
              </div>
              <div className="mt-5 border-t border-[#E6DBCD] pt-5">
                <p className="text-sm leading-7 text-[#6B655E]">This booking fee is required to reserve your appointment slot. Please note that booking fees are <span className="font-semibold text-[#1E1E1E]">non-refundable</span>.</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#E8DED1] bg-[#FAF7F2] p-4 lg:p-5">
              <p className="text-sm text-[#8A8A8A]">UPI ID</p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <p className="break-all text-sm font-medium text-[#1E1E1E] lg:text-lg">{upi}</p>
                <button type="button" onClick={copyUpi} aria-label="Copy UPI ID" className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#16412D] text-white transition-all duration-200 active:scale-95">
                  {copied
                    ? <svg aria-hidden="true" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M416 128 192 384l-96-96" /></svg>
                    : <svg aria-hidden="true" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18"><rect width="336" height="336" x="128" y="128" fill="none" strokeLinejoin="round" strokeWidth="32" rx="57" ry="57" /><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24" /></svg>}
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#1D4D3B] p-6 text-white shadow-[0_10px_60px_rgba(0,0,0,0.08)] lg:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#D6B98C]">Verification Process</p>
            <h2 className="mt-6 text-xl leading-tight lg:text-4xl">Complete payment and send us the details.</h2>
            <div className="mt-6 space-y-0 lg:mt-10 lg:space-y-6">
              {verificationSteps.map((item, index) => <div key={item} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D6B98C] text-sm font-semibold text-[#1D4D3B]">{index + 1}</div>
                <p className="text-base leading-7 text-[#E7E7E7]">{item}</p>
              </div>)}
            </div>
            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-5 lg:mt-10">
              <p className="text-sm leading-7 text-[#EAEAEA]">Appointment confirmation is subject to payment verification. Unverified bookings may be cancelled.</p>
            </div>
            <button type="button" onClick={() => window.open(whatsapp, "_blank")} className="mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#D6B98C] px-6 py-4 text-[#1D1D1D] transition-all duration-200 active:scale-95 lg:mt-10">
              <svg aria-hidden="true" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="22" width="22"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
              Send Details on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>;
}

function ReviewsHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
      <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{eyebrow}</p>
    </div>
    <h1 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{title}</h1>
    <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">{intro}</p>
  </div>;
}

function PlatformIcon({ name }: { name: "google" | "practo" | "1mg" }) {
  const paths = {
    google: "M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z",
    practo: "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z",
    "1mg": "M839.2 278.1a32 32 0 00-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8a31.9 31.9 0 00-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM360 184h304v72H360v-72zm480 656H184V513.4L244.3 328h535.4L840 513.4V840zM652 572H544V464c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V636h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
  } as const;
  return <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d={paths[name]} /></svg>;
}

function AntStars() {
  const path = "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z";
  return <>{Array.from({ length: 5 }, (_, index) => <svg key={index} viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="text-base"><path d={path} /></svg>)}</>;
}

function ReviewStars() {
  const path = "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z";
  return <>{Array.from({ length: 5 }, (_, index) => <svg key={index} viewBox="0 0 576 512" width="14" height="14" fill="currentColor" aria-hidden="true"><path d={path} /></svg>)}</>;
}

export function ReviewsPageExact() {
  const platforms = [
    { icon: "google", name: "Google Reviews", score: "4.9", note: "500+ Verified Reviews" },
    { icon: "practo", name: "Practo", score: "4.5", note: "1,200+ Patient Experiences" },
    { icon: "1mg", name: "1mg", score: "4.9", note: "900+ Trusted Ratings" },
  ] as const;
  const googleReviewsUrl = "https://www.google.com/search?q=rekha+dental+clinic+reviews";

  return <div className="rd-page flow-root bg-[#EAE4DB]">
    <section className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <ReviewsHeading eyebrow="Patient Trust" title="Recognized by patients across leading healthcare platforms." intro="Consistent experiences, verified feedback, and exceptional patient satisfaction reflected across trusted review platforms." />
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {platforms.map((platform) => <article key={platform.name} className="group relative overflow-hidden rounded-[32px] border border-[#E7DED1] bg-[#FCFAF7] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#D7C5AC] hover:shadow-[0_20px_50px_rgba(32,28,20,0.06)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#EFE7DA] opacity-40 blur-3xl" />
            <div className="relative z-10 flex items-start justify-between">
              <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B08A52]">Verified Platform</p><h3 className="rd-font-header text-2xl text-[#2D2B28] lg:text-3xl">{platform.name}</h3></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8DFD2] bg-[#F4EEE4] text-xl text-[#1F3D2B]"><PlatformIcon name={platform.icon} /></div>
            </div>
            <div className="relative z-10 mt-6 lg:mt-14">
              <div className="flex items-end gap-3"><h2 className="rd-font-header text-5xl leading-none text-[#1F1D1A] lg:text-7xl">{platform.score}</h2><span className="mb-2 text-lg text-[#8A847C]">/5</span></div>
              <div className="mt-6 flex items-center gap-2 text-[#C6A56B]"><AntStars /></div>
              <p className="mt-6 text-sm tracking-wide text-[#746F68]">{platform.note}</p>
            </div>
            <div className="relative z-10 mt-4 border-t border-[#ECE3D8] pt-6 lg:mt-10"><p className="text-sm leading-7 text-[#706B65]">Trusted by patients for refined care, transparent treatment, and consistently exceptional experiences.</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="px-6 py-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <ReviewsHeading eyebrow="Google Reviews" title="Real Stories. Real Smiles." intro="Thousands of patients trust Rekha Dental Clinic for compassionate care, precision treatments, and long-lasting dental solutions." />
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:mt-16 xl:grid-cols-3">
          {reviewCards.map(([name, date, quote]) => <article key={name} className="group flex h-full flex-col justify-between border border-[#E7DED2] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
            <div>
              <div className="flex items-center gap-4"><div><h2 className="rd-font-header text-lg text-[#2C2C2C]">{name}</h2><p className="mt-1 text-xs uppercase tracking-[2px] text-[#A0A0A0]">Verified Google Review</p></div></div>
              <div className="mt-5 flex items-center gap-1 text-[#CBA553]"><ReviewStars /></div>
              <p className="mt-6 line-clamp-6 text-sm leading-relaxed text-[#5E5E5E]">“{quote}”</p>
            </div>
            <div className="mt-8 border-t border-[#EFE7DB] pt-5">
              <div className="flex items-center justify-between"><span className="text-xs uppercase tracking-[2px] text-[#A0A0A0]">Google Reviews</span><div className="flex items-center gap-4"><span className="text-xs text-[#8A8A8A]">{date}</span><a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name}'s Google review`} className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E7DED2] text-[#CBA553] transition-all duration-300 hover:border-[#CBA553] hover:bg-[#CBA553] hover:text-white"><ExternalLink size={16} /></a></div></div>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="my-10 w-full bg-[#1F4A36] py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <div className="mb-6 flex items-center justify-center gap-4"><span className="h-[2px] w-10 bg-[#b89b5e]" /><p className="text-base font-extrabold uppercase tracking-[3px] text-[#b89b5e] md:text-lg">Patient Voices</p><span className="h-[2px] w-10 bg-[#b89b5e]" /></div>
        <h2 className="rd-font-header text-3xl text-white md:text-4xl lg:text-5xl">Selected reviews.</h2>
        <p className="mt-4 text-sm text-[#CFCFCF] md:text-base">From those treated personally by us.</p>
        <div className="mt-14 grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {selectedReviews.slice(0, 3).map((review) => <article key={review.name} className="flex h-full flex-col justify-between border border-[#2E5A45] bg-transparent p-6 md:p-8">
            <div className="mb-4 flex gap-1 text-[#b89b5e]"><ReviewStars /></div>
            <p className="mb-6 text-sm italic leading-relaxed text-[#DADADA] md:text-base">“{review.quote}”</p>
            <div className="mt-auto"><p className="text-xs uppercase tracking-[3px] text-[#CFCFCF]">{review.name}<span className="text-[#8FA79A]"> · {review.source}</span></p></div>
          </article>)}
        </div>
      </div>
    </section>

    <div>
      <div className="mb-6 flex flex-col items-center justify-center lg:mt-8">
        <ReviewsHeading eyebrow="Begin" title="Your consultation with us" intro="A private, unhurried first visit. Comprehensive 3D diagnostics. A treatment plan designed and delivered by one pair of hands." />
        <div className="relative"><CalendlyButton variant="doctor-consultation" label="Book Appointment" showIcon={false} /></div>
      </div>
    </div>
  </div>;
}

export function ContactPageExact() {
  const contactItems = [
    { Icon: MapPin, label: "Location", content: <div className="space-y-6"><a href={locations[0].map} target="_blank" rel="noreferrer" className="block"><strong className="block text-sm font-semibold uppercase text-[#44403b]">Rekha Dental — Kotgaon</strong><span className="mt-3 block text-xs leading-6">House No 622, First Floor, Satyam Enclave, New Kotgaon, Opp Rakesh Marg, Kotgaon, Kotgaon Village, Daulatpura, Ghaziabad, Uttar Pradesh 201001</span></a><a href={locations[1].map} target="_blank" rel="noreferrer" className="block"><strong className="block text-sm font-semibold uppercase text-[#44403b]">Rekha Dental — Raj Nagar Extension</strong><span className="mt-3 block text-xs leading-6">A-007 Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Vikas Nagar, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017</span></a></div> },
    { Icon: Clock3, label: "Working Hours", content: <p className="text-xs leading-7">Mon – Sat · 9:30 AM – 2:30 PM & 5 PM – 8 PM<br />Sun · 9:30 AM – 2:30 PM</p> },
    { Icon: Phone, label: "Phone", content: <a href={siteConfig.phoneHref} className="text-xs">+918130406405</a> },
    { Icon: Mail, label: "Email", content: <a href={`mailto:${siteConfig.email}`} className="text-xs">{siteConfig.email}</a> },
  ];
  return <div className="rd-page bg-[#eae4db] px-6 pb-20 pt-10 lg:px-10"><section className="mx-auto max-w-[1320px] bg-[#f7f3ec] p-8 lg:p-10"><p className="rd-pill">Contact Information</p><div className="mt-14 space-y-5">{contactItems.map(({ Icon, label, content }) => <article key={label} className="flex gap-5 rounded-2xl border border-[#ddd5ca] bg-[#fffefa] p-6"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#f2ebdd] text-[#52705e]"><Icon size={19} /></span><div className="min-w-0 text-[#6f6962]"><p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-[#b28b4d]">{label}</p>{content}</div></article>)}</div></section>
    <section className="mx-auto mt-8 max-w-[1360px] bg-[#fffefa] p-8 lg:p-16"><div className="max-w-[760px]"><p className="rd-pill">Get In Touch</p><h1 className="rd-title mt-7 text-left">We’re here to help.</h1><p className="mt-5 text-base leading-8 text-[#69635d]">For appointments, consultations, or international inquiries, our concierge team is available throughout the week.</p></div><div className="mt-14 grid gap-6 md:grid-cols-3">{[[Phone, "Call Us", "+91 81304 06405", "Mon – Sat · 9:30 AM – 2:30 PM\nEvening · 5 PM – 8 PM\nSunday · 9:30 AM – 2:30 PM"], [Mail, "Email Us", "We'll respond", "within 24 hours."], [MapPin, "Visit Us", "Rekha Dental", ""]].map(([Icon, label, line, detail]) => { const IconComponent = Icon as typeof Phone; return <article key={String(label)} className="border border-[#dfd8cf] p-7"><div className="flex gap-5"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#f2ebdd] text-[#52705e]"><IconComponent size={20} /></span><div><p className="text-[10px] uppercase tracking-[.28em] text-[#9e9690]">{String(label)}</p><p className="mt-3 text-sm text-[#605b55]">{String(line)}</p><p className="mt-2 whitespace-pre-line text-xs leading-7 text-[#605b55]">{String(detail)}</p></div></div></article>; })}</div><div className="mt-10 flex flex-col items-start justify-between gap-5 bg-[#f5efe5] p-7 md:flex-row md:items-center"><div className="flex gap-5"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-[#52705e]"><CalendarDays size={20} /></span><div><p className="text-[10px] uppercase tracking-[.26em] text-[#9e9690]">Looking To Book An Appointment?</p><p className="mt-3 text-xs text-[#665f58]">Please call us during business hours for immediate assistance.</p></div></div><a href={siteConfig.phoneHref} className="bg-[#164b38] px-9 py-3 text-xs font-semibold uppercase tracking-[.2em] text-white">Call Now</a></div></section>
    <section className="mx-auto max-w-[1280px] py-28"><Intro eyebrow="Locations" title="Visit Our Clinics" intro="Experience advanced dental care at our modern clinics in Ghaziabad, designed for comfort, accessibility, and precision-driven treatment." /><div className="mt-16 grid gap-8 md:grid-cols-2">{locations.map((location) => <article key={location.slug} className="overflow-hidden border border-[#dad3ca] bg-white"><iframe title={`${location.label} map`} src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`} className="h-[300px] w-full border-0" loading="lazy" /><div className="p-6"><h3 className="rd-font-header text-2xl">Rekha Dental</h3><p className="mt-4 text-xs leading-6 text-[#6d6760]">{location.address}</p></div></article>)}</div></section>
  </div>;
}

function ContactPageLive() {
  const clinicMaps = [
    {
      slug: "ghaziabad",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56033.9451957069!2d77.33762498921469!3d28.62611818153247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1d958574ff5%3A0x4c701b6a007f2fe1!2sRekha%20Dental%20Clinic%20Ghaziabad!5e0!3m2!1sen!2sin!4v1787134110117!5m2!1sen!2sin",
      address: "House No 622, First Floor, Satyam Enclave, New Kotgaon, Opp Rakesh Marg, Kotgaon, Kotgaon Village, Daulatpura, Ghaziabad, Uttar Pradesh 201001",
    },
    {
      slug: "raj-nagar",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55995.74214301063!2d77.3604164486328!3d28.697606099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0e3e6b02e07%3A0x6964788533d0b886!2sRekha%20Dental%20-%20Raj%20Nagar%20Extension%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1787134213856!5m2!1sen!2sin",
      address: "A-007 Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Vikas Nagar, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017",
    },
  ] as const;

  return <div className="rd-page bg-[#eae4db] py-10">
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 lg:px-10 2xl:grid-cols-3">
      <div className="lg:col-span-1"><div className="h-full border border-[#e7e0d5] bg-[#f3efe8]"><section className="h-full bg-[#f5f1ea] p-6 lg:p-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5"><p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">CONTACT INFORMATION</p></div>
        <div className="mt-10 grid grid-cols-1 gap-5">
          <ContactInformationCard icon={<MapPin size={20} />}>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[.24em] text-[#bd9953]">Location</p>
            <div className="text-sm leading-7 text-[#4b4b4b]">
              <a href={locations[0].map} target="_blank" rel="noreferrer" className="block transition hover:text-[#0f3b2e]"><p className="font-semibold uppercase">Rekha Dental — Kotgaon</p><p className="mt-2">House No 622, First Floor, Satyam Enclave, New Kotgaon, Opp Rakesh Marg, Kotgaon, Kotgaon Village, Daulatpura, Ghaziabad, Uttar Pradesh 201001</p></a>
              <a href={locations[1].map} target="_blank" rel="noreferrer" className="mt-5 block transition hover:text-[#0f3b2e]"><p className="font-semibold uppercase">Rekha Dental — Raj Nagar Extension</p><p className="mt-2">A-007 Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Vikas Nagar, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017</p></a>
            </div>
          </ContactInformationCard>
          <ContactInformationCard icon={<Clock3 size={20} />}><p className="mb-2 text-xs font-extrabold uppercase tracking-[.24em] text-[#bd9953]">Working Hours</p><div className="text-sm leading-7 text-[#4b4b4b]">Mon – Sat · 9:30 AM – 2:30 PM &amp; 5 PM – 8 PM<br />Sun · 9:30 AM – 2:30 PM</div></ContactInformationCard>
          <ContactInformationCard href={siteConfig.phoneHref} icon={<Phone size={20} />}><p className="mb-2 text-xs font-extrabold uppercase tracking-[.24em] text-[#bd9953]">Phone</p><div className="text-sm leading-7 text-[#4b4b4b]">+918130406405</div></ContactInformationCard>
          <ContactInformationCard href={`mailto:${siteConfig.email}`} icon={<Mail size={20} />}><p className="mb-2 text-xs font-extrabold uppercase tracking-[.24em] text-[#bd9953]">Email</p><div className="text-sm leading-7 text-[#4b4b4b]">{siteConfig.email}</div></ContactInformationCard>
        </div>
      </section></div></div>

      <div className="lg:col-span-2"><div className="h-full border border-[#e7e0d5] bg-[#faf8f4]"><section className="bg-[#faf8f4] p-8 md:p-12">
        <div className="mb-8 flex max-w-4xl flex-col items-start gap-3 px-4 text-left lg:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5"><p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Get In Touch</p></div>
          <h1 className="rd-font-header mt-2 max-w-2xl text-left text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">We’re here to help.</h1>
          <p className="mt-2 max-w-2xl text-left text-base leading-relaxed text-[#555] md:text-lg">For appointments, consultations, or international inquiries, our concierge team is available throughout the week.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ContactChannel href={siteConfig.phoneHref} icon={<Phone size={22} />} label="Call Us"><p>+91 81304 06405</p><p>Mon – Sat · 9:30 AM – 2:30 PM</p><p>Evening · 5 PM – 8 PM</p><p>Sunday · 9:30 AM – 2:30 PM</p></ContactChannel>
          <ContactChannel href={`mailto:${siteConfig.email}`} icon={<Mail size={22} />} label="Email Us"><p>We&apos;ll respond</p><p>within 24 hours.</p></ContactChannel>
          <ContactChannel href="https://maps.app.goo.gl/EFeHWFbazpAbG5EC9" icon={<MapPin size={22} />} label="Visit Us" external><p>Rekha Dental</p></ContactChannel>
        </div>
        <div className="mt-10 flex flex-col gap-6 border border-[#ece4d8] bg-[#f6f0e6] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-start gap-5"><span className="flex shrink-0 items-center justify-center rounded-full bg-white text-[#0f3b2e] shadow-sm lg:size-12"><CalendarDays size={22} /></span><div><p className="mb-2 text-xs font-semibold leading-[18px] uppercase tracking-[.28em] text-[#8a8a8a]">Looking To Book An Appointment?</p><p className="text-sm leading-[1.8] text-[#5a5a5a]">Please call us during business hours for immediate assistance.</p></div></div>
          <a href={siteConfig.phoneHref} className="flex h-10 items-center justify-center bg-[#0f3b2e] px-8 text-sm font-semibold uppercase tracking-[.24em] text-white transition-all duration-300 active:scale-95 lg:h-12">Call Now</a>
        </div>
      </section></div></div>
    </section>

    <section className="mt-12 px-6 py-6 lg:px-10 lg:py-16"><div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5"><p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Locations</p></div>
        <h2 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">Visit Our Clinics</h2>
        <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555] md:text-lg">Experience advanced dental care at our modern clinics in Ghaziabad, designed for comfort, accessibility, and precision-driven treatment.</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-2">
        {clinicMaps.map((clinic) => <article key={clinic.slug} className="overflow-hidden border border-[#e5ded2] bg-white shadow-sm">
          <div className="relative h-[420px] w-full overflow-hidden"><iframe title={`Rekha Dental ${clinic.slug} map`} src={clinic.src} width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 border-0" /></div>
          <div className="border-t border-[#efe7db] p-6"><h3 className="rd-font-header text-xl text-[#2c2c2c] lg:text-2xl">Rekha Dental</h3><p className="mt-4 text-sm leading-relaxed text-[#6b6b6b]">{clinic.address}</p></div>
        </article>)}
      </div>
    </div></section>
  </div>;
}

function ContactInformationCard({ icon, children, href }: { icon: ReactNode; children: ReactNode; href?: string }) {
  const content = <><span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#efe6d7] text-[#0f3b2e] lg:size-12">{icon}</span><div className="min-w-0">{children}</div></>;
  const className = "group flex items-start gap-4 rounded-2xl border border-[#e5ddd0] bg-[#faf8f4] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d7c2a0] hover:shadow-lg";
  return href ? <a href={href} className={className}>{content}</a> : <div className={className}>{content}</div>;
}

function ContactChannel({ href, icon, label, children, external = false }: { href: string; icon: ReactNode; label: string; children: ReactNode; external?: boolean }) {
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex gap-5 border border-[#e8e1d7] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7c2a0] hover:shadow-lg">
    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f5efe4] text-[#0f3b2e] transition group-hover:bg-[#efe6d7] lg:size-12">{icon}</span>
    <div><p className="mb-3 text-xs font-semibold leading-[18px] uppercase tracking-[.24em] text-[#8a8a8a]">{label}</p><div className="space-y-1 text-sm leading-[1.7] text-[#4b4b4b]">{children}</div></div>
  </a>;
}

const legacySections = [
  { eyebrow: "Dental Camps & Outreach", title: "Promoting oral health", dark: false, prefix: 15, items: [
    ["School Dental Awareness Drive", "Conducted an oral health awareness session for students, focusing on proper brushing techniques and preventive dental care."], ["Free Dental Check-up Camp", "Organized a community dental screening program to identify oral health concerns and provide preventive guidance."], ["Student Oral Health Initiative", "Educated young students about the importance of oral hygiene and regular dental examinations."], ["Kids Dental Outreach", "Provided free dental consultations and awareness sessions to promote healthier smiles within the community."], ["Dental Education Program", "Interactive sessions conducted to spread awareness about preventive dentistry and oral health habits."], ["School Health Screening Camp", "Performed dental examinations for school children and educated them on maintaining lifelong oral health."], ["Preventive Dentistry Awareness", "Focused on early detection and prevention of dental issues through educational activities and screenings."], ["Students Dental Care Initiative", "Extended oral healthcare awareness and dental check-up services to underserved communities."], ["Healthy Smile Campaign", "Promoted oral hygiene awareness through engaging educational activities and dental assessments."], ["Community's Dental Awareness Session", "Encouraged healthy dental habits among community through demonstrations and interactive learning."], ["Community Oral Hygiene Program", "Conducted awareness sessions emphasizing preventive care and regular dental visits."], ["Community Wellness Camp", "Integrated oral healthcare awareness into broader health initiatives for local communities."], ["Smile Awareness Initiative", "Educated participants about cavity prevention, gum health, and oral hygiene best practices."], ["Dental Screening & Counseling", "Provided dental examinations and personalized oral health recommendations to attendees."], ["Youth Oral Health Program", "Focused on building awareness among young students regarding preventive dental care and nutrition."], ["School Dental Check-up Drive", "Comprehensive dental screenings conducted to identify oral health concerns at an early stage."], ["Oral Health Awareness Workshop", "Engaged students and educators in discussions about maintaining healthy teeth and gums."], ["School Oral Care Program", "Promoted preventive dentistry and regular dental check-ups through public awareness initiatives."], ["Dental Health Education Camp", "Conducted educational activities to encourage better oral hygiene habits among participants."], ["School Wellness & Dental Camp", "Combined health awareness and dental screening services to support student well-being."], ["Children's Smile Initiative", "A large-scale awareness and screening program dedicated to improving oral health within the community."]
  ] },
  { eyebrow: "Achievements & Recognitions", title: "Global recognition.", dark: true, prefix: 35, items: [
    ["Implantology Workshop", "Participated in an advanced implantology workshop alongside leading dental professionals from around the world, exchanging clinical knowledge and modern treatment techniques."], ["Global Dental Excellence Meet", "Recognized for contributions to modern dentistry during an international gathering of dental experts and educators."], ["International Faculty Interaction", "Engaged in collaborative discussions with international faculty members to explore emerging trends in modern dentistry."], ["Global Implant Symposium", "Attended a prestigious symposium featuring global leaders in implant dentistry, digital workflows, and patient-centered care."], ["International Continuing Education Event", "Enhanced professional expertise through advanced continuing dental education programs conducted by international speakers."], ["Advanced Prosthodontic Workshop", "Received specialized training in modern prosthodontic techniques aimed at improving long-term restorative outcomes."], ["International Dental Conference", "Represented the academy at a global conference dedicated to innovation, technology, and excellence in dental care."], ["Masterclass in Implant Rehabilitation", "Successfully completed an intensive masterclass covering advanced implant placement and full-mouth rehabilitation concepts."], ["Global Knowledge Exchange Program", "Collaborated with international clinicians and educators to exchange ideas and discuss advancements in patient care."]
  ] },
  { eyebrow: "Lectures & Workshops", title: "Sharing knowledge, shaping future clinicians.", dark: false, prefix: 44, items: [
    ["Advanced Implantology Masterclass", "Delivered an in-depth lecture on modern implantology techniques, treatment planning, and long-term clinical success."], ["Contemporary Restorative Dentistry", "Shared insights on restorative procedures, material selection, and achieving predictable aesthetic outcomes."], ["Smile Design & Aesthetic Excellence", "Conducted an educational session on smile design principles and minimally invasive cosmetic dentistry."], ["Clinical Success in Implant Rehabilitation", "Focused on implant-supported restorations, case selection, and achieving long-term functional outcomes."], ["Advancements in Endodontic Treatment", "Explored modern root canal treatment techniques, magnification, and precision-driven clinical protocols."], ["Comprehensive Treatment Planning", "Highlighted interdisciplinary approaches to diagnosis, rehabilitation, and patient-centered care."], ["Excellence in Clinical Education", "Shared knowledge and practical experience with dental professionals through interactive academic sessions."]
  ] },
] as const;

function LegacyCarousel({ section }: { section: (typeof legacySections)[number] }) {
  const [start, setStart] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setStart((value) => (value + 1) % section.items.length), 6000); return () => window.clearInterval(timer); }, [section.items.length]);

  return <div className="mt-6 px-1 lg:mt-10 lg:px-3">
    <div className="overflow-hidden py-5">
      <div className="legacy-carousel-track flex gap-5 transition-transform duration-500 ease-out" style={{ transform: `translate3d(calc(-1 * ${start} * var(--legacy-slide-step)), 0, 0)` }}>
        {section.items.map(([title, copy], sourceIndex) => {
          const slug = title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          const assetNumber = section.prefix === 15 ? (sourceIndex === 3 ? 14 : sourceIndex < 3 ? 15 + sourceIndex : 14 + sourceIndex) : section.prefix + sourceIndex;
          const assetName = sourceIndex === 3 && section.prefix === 15 ? "years-of-excellence-measured-in-lives-touched" : slug;
          return <article key={title} className={`group shrink-0 basis-full overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2 sm:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-40px)/3)] ${section.dark ? "bg-[#184D36]" : "bg-white"}`}>
            <div className="relative h-[200px] w-full rounded-t-xl lg:h-[260px]">
              <Image src={`/images/pending/legacy/${assetNumber}-${assetName}.jpg`} alt={title} fill priority sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="aspect-video object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            </div>
            <div className="p-6 md:p-7">
              <div className="mb-3 flex items-center gap-2 lg:mb-5">
                <LegacyCalendarIcon />
                <p className="text-xs font-extrabold uppercase tracking-[3px] text-[#CBA553]">{section.dark ? "Achievements" : "Dental Camps"}</p>
              </div>
              <h3 className={`rd-font-header mb-2 line-clamp-1 text-xl leading-snug lg:mb-4 lg:text-3xl ${section.dark ? "text-[#F8F5EF]" : "text-[#184D36]"}`}>{title}</h3>
              <p className={`line-clamp-2 text-sm leading-relaxed ${section.dark ? "text-[#D6D0C4]" : "text-gray-600"}`}>{copy}</p>
            </div>
          </article>;
        })}
      </div>
    </div>
  </div>;
}

function LegacyCalendarIcon() {
  return <svg aria-hidden="true" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-sm text-[#CBA553]" height="1em" width="1em"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" /></svg>;
}

function LegacyLightHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5"><p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{eyebrow}</p></div>
    <h1 className="rd-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{title}</h1>
  </div>;
}

export function LegacyPage() {
  return <div className="rd-page bg-[#EAE4DB]">
    <section className="w-full">
      <div className="relative min-h-[40vh] w-full overflow-hidden sm:min-h-[50vh] lg:min-h-[85vh]">
        <Image src="/images/pending/legacy/14-years-of-excellence-measured-in-lives-touched.jpg" alt="Years of excellence, measured in lives touched." fill priority sizes="100vw" className="doctor-zoom-slow object-cover" />
        <div className="absolute inset-0 bg-teal-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 text-white sm:px-6 lg:px-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[3px] w-8 bg-[#CBA553]" />
              <p className="whitespace-nowrap text-sm font-extrabold uppercase tracking-[3px] text-[#CBA553] lg:text-lg">Professional Legacy</p>
              <div className="h-[3px] w-8 bg-[#CBA553]" />
            </div>
            <h1 className="rd-font-header max-w-3xl text-3xl leading-tight md:text-5xl lg:text-6xl">Years of excellence, measured in lives touched.</h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base lg:text-lg">An ongoing story of professional growth, international collaborations, dental education, and community service dedicated to advancing oral healthcare.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="my-6 py-10 lg:py-24">
      <div className="mx-4 lg:mx-10">
        <LegacyLightHeading eyebrow="Dental Camps & Outreach" title="Promoting oral health" />
        <LegacyCarousel section={legacySections[0]} />
      </div>
    </section>

    <section className="my-6 bg-[#16412D] py-10 lg:py-24">
      <div className="mx-4 lg:mx-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-base font-extrabold uppercase tracking-[5px] text-[#CBA553]">Achievements &amp; Recognitions</p>
          <h2 className="rd-font-header text-2xl leading-tight text-[#F8F5EF] md:text-5xl">Global recognition.</h2>
        </div>
        <LegacyCarousel section={legacySections[1]} />
      </div>
    </section>

    <section className="my-6 py-10 lg:py-24">
      <div className="mx-4 lg:mx-10">
        <LegacyLightHeading eyebrow="Lectures & Workshops" title="Sharing knowledge, shaping future clinicians." />
        <LegacyCarousel section={legacySections[2]} />
      </div>
    </section>

    <section className="py-10 lg:py-16">
      <div className="mx-4 lg:mx-10">
        <LegacyLightHeading eyebrow="Media Coverage" title="Featured across newspapers and publications." />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {Array.from({ length: 9 }, (_, index) => <article key={index} className="group m-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative aspect-3/4 overflow-hidden rounded-lg"><Image src={`/images/pending/legacy/${51 + index}-image-${38 + index}.jpg`} alt="" fill sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-contain transition-transform duration-700 ease-out group-hover:scale-105" /></div>
            <div className="mt-4"><p className="text-base font-extrabold uppercase tracking-[3px] text-[#CBA553]">Media Coverage</p></div>
          </article>)}
        </div>
      </div>
    </section>
  </div>;
}

export function PendingPageView({ path }: { path: string }) {
  if (path === "dentist-near-me") return <LocationsPage />;
  if (path === "dentist-near-me/ghaziabad") return <CentrePage centre="ghaziabad" />;
  if (path === "dentist-near-me/raj-nagar") return <CentrePage centre="raj-nagar" />;
  if (path === "common-problems") return <CommonProblemsPageExact />;
  if (path === "contact") return <ContactPageLive />;
  if (path === "legacy") return <LegacyPage />;
  if (path === "patient-safety") return <PatientSafetyPage />;
  if (path === "payment") return <PaymentPage />;
  if (path === "post-instruction") return <PostInstructionPage />;
  if (path === "reviews") return <ReviewsPageExact />;
  if (path === "warranty") return <WarrantyPage />;
  return null;
}
