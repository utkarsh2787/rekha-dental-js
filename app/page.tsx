import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, CircleDollarSign, HeartHandshake, ScanLine, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { AboutCarousel } from "@/components/about-carousel";
import { CalendlyButton } from "@/components/calendly-button";
import { HeroCarousel } from "@/components/hero-carousel";
import { PremiumCarousel } from "@/components/premium-carousel";
import { TreatmentIcon } from "@/components/treatment-icon";
import { siteConfig } from "@/config/site";
import { doctors, practicePillars, reviews, stats } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: "Best Dental Clinic in Ghaziabad | Dental Implants, RCT & Smile Makeover | Rekha Dental" },
  description: "Looking for the best dental clinic in Ghaziabad? Rekha Dental offers dental implants, root canal treatment, smile makeovers, braces, aligners, cosmetic dentistry, and family dental care with advanced technology.",
  keywords: "best dental clinic in Raj Nagar Extension,best dentist in Raj Nagar Extension,dental clinic in Raj Nagar Extension,dentist in Raj Nagar Extension Ghaziabad,best dentist in Kotgaon,dental clinic in Kotgaon,dentist near Kotgaon,dental implants Raj Nagar Extension,root canal treatment Raj Nagar Extension,cosmetic dentist Raj Nagar Extension,Rekha Dental",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const treatmentLinks = [
  ["Dental Implants", "/treatments/dental-implants", "dental-implants"],
  ["Root Canal Treatment", "/treatments/root-canal-treatment", "root-canal-treatment"],
  ["Clear Aligners", "/treatments/clear-aligners", "clear-aligners"],
  ["Cosmetic Dentistry", "/treatments/cosmetic-dentistry", "cosmetic-dentistry"],
  ["Teeth Cleaning", "/treatments/teeth-cleaning-scaling", "teeth-cleaning-scaling"],
  ["Dental Fillings", "/treatments/dental-fillings", "dental-fillings"],
  ["Dental Bridges", "/treatments/dental-bridges", "dental-bridges"],
  ["Tooth Removal", "/treatments/tooth-removal", "tooth-removal"],
  ["Pediatric Dentistry", "/treatments/pediatric-dentistry", "pediatric-dentistry"],
  ["Laser Treatment", "/treatments/laser-dental-treatment", "laser-dental-treatment"],
  ["Digital Scanning", "/treatments/digital-robotic-scanning", "digital-robotic-scanning"],
  ["Full Mouth Rehabilitation", "/treatments/full-mouth-rehabilitation", "full-mouth-rehabilitation"],
] as const;

const signatureTreatments = [
  { number: "01", title: "Immediate Implantology", text: "Same-day implants with surgical precision.", current: "₹32,990", old: "₹36,990", href: "/treatments/immediate-implantology", image: "/images/signature-implant.png" },
  { number: "02", title: "Clear Aligners & Braces", text: "Discreet and comfortable orthodontic treatment for straighter teeth.", current: "₹7,000", old: "₹10,000", href: "/treatments/clear-aligners", image: "/images/signature-aligners.jpg" },
  { number: "03", title: "Preventive Dentistry", text: "For ages 0-13 & 14-15.", current: "₹1,499", old: "₹2,141", href: "/treatments/preventive-ages-0-13", image: "/images/signature-preventive.png" },
] as const;

const gallery = [
  { src: "/images/clinic-reception.jpg", title: "Rekha Dental reception area" },
  { src: "/images/clinic-aligner.jpg", title: "Aligner" },
  { src: "/images/clinic-team.jpg", title: "Rekha Dental Team" },
] as const;

const plans = [
  { title: "Exclusive Discounts", text: "Save on consultations, diagnostics, and selected dental treatments.", icon: CircleDollarSign },
  { title: "Preventive Care", text: "Regular check-ups and early intervention help protect your long-term oral health.", icon: ShieldCheck },
  { title: "Family Benefits", text: "Choose plans designed to support individuals and families alike.", icon: HeartHandshake },
] as const;

const faqs = [
  ["How often should I visit a dentist?", "Most patients benefit from a dental check-up and professional cleaning every six months. Regular visits help detect issues early and maintain long-term oral health."],
  ["Do I need an appointment before visiting?", "While walk-ins may be accommodated when possible, scheduling an appointment helps minimize waiting time and ensures dedicated attention from our dental team."],
  ["Are dental treatments painful?", "Modern dental techniques, advanced equipment, and effective anesthesia make most treatments comfortable with minimal discomfort during and after the procedure."],
  ["Do you provide dental implants?", "Yes, we offer advanced dental implant solutions to replace missing teeth and restore both function and aesthetics with long-lasting results."],
  ["Do you offer clear aligner treatment?", "Yes, we provide clear aligner solutions designed to straighten teeth discreetly and comfortably without the appearance of traditional braces."],
  ["Can children receive treatment at Rekha Dental?", "Absolutely. Our pediatric dental services are designed to provide gentle, child-friendly care that supports healthy smiles from an early age."],
  ["What should I do during a dental emergency?", "If you experience severe pain, swelling, trauma, or a broken tooth, contact our clinic immediately so we can guide you and arrange prompt care."],
  ["Do you offer smile makeover treatments?", "Yes, we provide cosmetic dentistry services including teeth whitening, veneers, aligners, and comprehensive smile makeover solutions tailored to individual goals."],
  ["What payment options are available?", "We accept multiple payment methods and can guide you through available treatment plans and membership options during your consultation."],
  ["How can I book an appointment?", "Appointments can be scheduled through our website, by phone, or directly through WhatsApp for quick assistance from our team."],
] as const;

function SectionIntro({ label, title, text }: { label: string; title: string; text?: string }) {
  return <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14"><p className="home-kicker">{label}</p><h2 className="home-section-title mx-auto mt-2">{title}</h2>{text ? <p className="home-lead mx-auto mt-2 max-w-2xl">{text}</p> : null}</div>;
}

function StarRow({ size = 14 }: { size?: number }) {
  return <div className="flex gap-1 text-[#cba553]">{Array.from({ length: 5 }, (_, index) => <svg key={index} aria-hidden="true" width={size} height={size} viewBox="0 0 576 512" fill="currentColor"><path d="M259.3 17.8 194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /></svg>)}</div>;
}

export default function Home() {
  return (
    <div className="home-page bg-[#eae4db]">
      <HeroCarousel />

      <div className="px-5 lg:px-10">
        <section className="mt-10 w-full rounded-xl border border-[#d6d0c6] bg-[#f5f5ec] lg:my-14">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => <div key={stat.label} className="flex flex-col justify-center border-2 border-transparent px-4 py-10 text-center"><h3 className="font-display text-3xl font-semibold text-[#1f3d2b] md:text-5xl md:font-bold">{stat.value}</h3><p className="mt-4 text-sm font-semibold uppercase tracking-[3px] text-[#7a7a7a]">{stat.label}</p></div>)}
          </div>
        </section>
      </div>

      <section className="overflow-hidden bg-[#eae4db] pt-10 lg:pt-16">
        <div className="mx-auto grid max-w-7xl justify-center gap-8 px-6 md:grid-cols-2 lg:gap-16">
          <AboutCarousel />
          <div className="max-w-xl"><p className="home-kicker mb-4 inline-flex">Rekha Dental</p><h1 className="home-intro-title mb-6">Quality dental treatment at an affordable range.</h1><div className="space-y-4 text-sm leading-relaxed text-[#6b6b6b] md:text-base"><p>Rekha Dental, Ghaziabad – Raj Nagar Extension, is a quality dental clinic offering affordable treatment, conveniently located at Raj Nagar Residency. We offer painless treatments including Laser RCT, Implants, Aligners, Braces, and Full Mouth Rehabilitation. We specialize in teeth straightening using Invisalign® and braces by Invisalign-certified Orthodontists.</p><p>Our highly experienced specialists provide natural-looking, permanent, fixed teeth with dental implants. We also offer laser dentistry, teeth whitening, veneers, and smile makeover treatments. We follow 10X safety protocols and sterilization standards, provide child dental care and cavity protection, and are your one destination for all dental problems.</p></div></div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro label="Treatments" title="How can we help you today?" text="Explore personalized dental treatments designed to restore comfort, improve oral health, and enhance your smile." />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-7 xl:grid-cols-4">
            {treatmentLinks.map(([title, href, slug]) => <Link key={href} href={href} className="group flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-[#e8ded0] bg-[#fcfaf6] p-6 text-center transition duration-500 hover:-translate-y-2 hover:border-[#d9c5a1] hover:shadow-[0_20px_50px_rgba(31,29,24,0.08)]"><span className="grid size-16 place-items-center rounded-2xl border border-[#e7ddd0] bg-[#f3ece1] text-[#16412d] transition duration-500 group-hover:scale-110 [&_svg]:size-8 [&_svg]:fill-current"><TreatmentIcon slug={slug} /></span><h3 className="mt-5 text-base font-medium leading-snug text-[#2c2a27] lg:text-lg">{title}</h3></Link>)}
          </div>
        </div>
      </section>

      <section>
        <SectionIntro label="Premium Dentistry" title="Signature treatments for extraordinary smiles" text="Explore some of our most advanced and sought-after dental procedures." />
        <PremiumCarousel />
      </section>

      <section className="bg-[#eae4db] py-10 lg:py-24">
        <SectionIntro label="Signature Treatments" title="Treatments crafted with patience and precision." text="From same-day implants to the gentlest first visits, our specialists offer the full breadth of modern dentistry under one roof." />
        <div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {signatureTreatments.map((item) => <article key={item.title} className="group flex h-full flex-col rounded-xl bg-[#f5f1ea] transition duration-700 hover:-translate-y-1 hover:shadow-xl"><Link href={item.href} className="relative block h-[200px] shrink-0 overflow-hidden rounded-t-xl lg:h-[260px]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></Link><div className="p-4 lg:p-6"><p className="mb-2 text-xs font-semibold tracking-[2px] text-[#cba553] lg:mb-3">{item.number}</p><h3 className="mb-3 font-display text-xl font-semibold leading-snug text-[#2c2c2c] md:text-2xl">{item.title}</h3><p className="line-clamp-1 text-sm leading-relaxed text-[#6b6b6b] md:text-base">{item.text}</p></div><div className="mt-auto flex items-center justify-between gap-3 px-6 pb-6"><div className="shrink-0 pr-2"><p className="text-[11px] font-extrabold uppercase tracking-wide text-[#cba553]">Starts from*</p><div className="flex items-center gap-2 whitespace-nowrap"><strong className="text-xl font-bold text-[#16412d]">{item.current}</strong><del className="text-sm text-gray-400">{item.old}</del></div></div><CalendlyButton variant="header" className="min-h-10 shrink-0 whitespace-nowrap px-3 text-sm" label="Book Appointment" compactLabel="Book" /></div></article>)}
        </div></div>
        <div className="mt-10 text-center"><Link href="/treatments" className="home-outline-button">View all treatments</Link></div>
      </section>

      <section className="flex w-full flex-col items-center px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionIntro label="Our Expert Dentists" title="Meet the specialists behind your radiant smile" />
        <div className="mt-4 grid w-full max-w-[1260px] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors.map((doctor) => <article key={doctor.name} className="group relative overflow-hidden rounded-xl bg-[#f5f1ea] transition duration-700 hover:z-30 hover:-translate-y-1 hover:shadow-xl focus-within:z-30"><div className="relative h-[320px] overflow-hidden bg-[#ded8cf]"><Image src={doctor.image} alt={doctor.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" /></div><div className="px-6 py-4"><p className="mb-3 whitespace-nowrap text-[11px] font-extrabold uppercase tracking-[2px] text-[#cba553]">{doctor.role}</p><h3 className="whitespace-nowrap font-display text-xl font-semibold leading-tight text-[#2c2c2c]">{doctor.name}</h3></div><div className="flex items-center justify-between px-6 py-4"><CalendlyButton variant="header" className="min-h-10 text-xs" label="Book Appointment" compactLabel="Book" /><Link href={`${siteConfig.whatsappHref}?text=${encodeURIComponent(`Hi, I am interested in booking an appointment with ${doctor.name}. Could you please share the available slots?`)}`} target="_blank" aria-label={`Contact Rekha Dental about ${doctor.name}`} className="grid size-10 place-items-center rounded-lg bg-[#16412d] text-white"><ArrowRight size={14} /></Link></div></article>)}
        </div>
      </section>

      <section className="bg-[#eae4db] py-10 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionIntro label="Inside Our Clinic" title="A space designed to disappear around you." text="Quiet interiors, natural textures, and private treatment suites created to feel more like a retreat than a clinic." />
          <div className="mt-10 flex flex-col gap-5 md:mt-0 md:h-[400px] md:flex-row">{gallery.map((item) => <article key={item.src} className="group relative h-[250px] shrink-0 overflow-hidden rounded-[24px] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:flex-[1.8] md:h-[400px] md:flex-1 md:rounded-[28px]"><Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition duration-500 group-hover:from-black/80" /><div className="absolute inset-0 rounded-[28px] border border-white/10 transition duration-500 group-hover:border-[#d7bc8a]" /><div className="absolute bottom-0 left-0 w-full p-6 md:p-8"><div className="translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><p className="mb-3 text-xs uppercase tracking-[.3em] text-[#d7bc8a]">facility</p><h3 className="max-w-[280px] font-display text-2xl leading-tight text-white md:text-3xl">{item.title}</h3></div></div></article>)}</div>
        <div className="mt-10 text-center"><Link href="/gallery" className="home-outline-button">Explore gallery</Link></div>
        </div>
      </section>

      <section className="my-10 w-full bg-[#1f4a36] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <div className="mb-6 flex items-center justify-center gap-4"><span className="h-0.5 w-10 bg-[#cba553]" /><p className="text-base font-extrabold uppercase tracking-[3px] text-[#cba553] md:text-lg">Patient Voices</p><span className="h-0.5 w-10 bg-[#cba553]" /></div>
          <h2 className="font-display text-3xl text-white md:text-4xl lg:text-5xl">Selected reviews.</h2>
          <p className="mt-4 text-sm text-[#cfcfcf] md:text-base">From those treated personally by us.</p>
          <div className="mt-14 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">{reviews.map((review) => <figure key={review.quote} className="flex h-full flex-col justify-between border border-[#2e5a45] p-6 md:p-8"><div><div className="mb-4"><StarRow /></div><blockquote className="mb-6 text-sm italic leading-relaxed text-[#dadada] md:text-base">“{review.quote}”</blockquote></div><figcaption className="text-xs uppercase tracking-[3px] text-[#cfcfcf]">{review.name}<span className="text-[#8fa79a]"> · {review.source}</span></figcaption></figure>)}</div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <SectionIntro label="Video Stories" title="Hear our patients tell it, in their own words." text="Real journeys from the chair — told with the calm confidence that comes from care done well." />
        <div className="mx-auto max-w-5xl"><div className="grid gap-8 md:grid-cols-2">{[{ id: "MIq9-llAKbs", quote: "Rekha Dental changed the way I smile every single day." }, { id: "TzXky1vxt-8", quote: "I finally feel confident about my smile again." }].map((item) => <article key={item.id} className="overflow-hidden rounded-lg border border-[#e0d8cc] bg-[#f5f1ea]"><div className="h-[520px] w-full overflow-hidden bg-black"><iframe title="Rekha Dental patient video story" src={`https://www.youtube.com/embed/${item.id}`} className="h-full w-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div><div className="relative p-5 lg:p-6"><StarRow size={12} /><span className="absolute right-5 top-4 font-serif text-4xl leading-none text-[#cba553]/30">❞</span><p className="mt-4 max-w-[90%] font-display text-base italic leading-relaxed text-[#3d3a36] lg:text-lg">“{item.quote}”</p></div></article>)}</div></div>
      </section>

      <section className="bg-[#eae4db] py-10">
        <SectionIntro label="Why Rekha Dental" title="Four pillars of our practice." />
        <div className="mx-10 mt-8 grid gap-6 md:grid-cols-2 lg:mt-16 xl:grid-cols-4">{practicePillars.map((pillar, index) => { const Icon = [ScanLine, Stethoscope, BadgeCheck, Sparkles][index]; return <article key={pillar.title} className="group relative overflow-hidden rounded-2xl border border-[#e8ded0] bg-[#fcfaf6] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#d9c5a1] hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]"><span className="absolute right-6 top-5 font-display text-4xl leading-none text-[#ece4d8] transition group-hover:text-[#e1d4bf] lg:text-6xl">0{index + 1}</span><span className="relative z-10 grid size-12 place-items-center rounded-2xl border border-[#e7ddd0] bg-[#f3ece1] text-[#163828] lg:size-16"><Icon size={24} /></span><div className="relative z-10 mt-4 lg:mt-8"><h3 className="font-display text-xl font-semibold leading-tight text-[#2c2a27] lg:text-2xl">{pillar.title}</h3><p className="mt-5 text-sm leading-6 text-[#66625c] md:text-base lg:leading-7">{pillar.text}</p></div><div className="absolute -bottom-10 -right-10 size-40 rounded-full bg-[#efe5d7] opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" /></article>; })}</div>
      </section>

      <section className="my-10"><div className="relative h-[460px] w-full overflow-hidden"><Image src="/images/academy.jpg" alt="Dental Academy" fill sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,34,28,0.92)_0%,rgba(11,53,42,0.72)_45%,rgba(13,57,45,0.58)_100%)]" /><div className="absolute inset-0 z-10 flex flex-col justify-center px-8 py-10 md:px-14 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-3xl"><p className="mb-5 text-base font-semibold uppercase tracking-[.32em] text-[#cba553] md:text-lg">The Rekha Academy</p><h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">We teach the methods<br />we practice.</h2><p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg lg:leading-8">Continuing-education programs for clinicians who value precision, patient comfort, and modern dental workflows. Hands-on workshops, digital scanning labs, and advanced restorative techniques.</p></div><Link href="/academy" className="mt-10 flex h-10 items-center justify-center bg-[#c9a45b] px-6 text-sm font-medium uppercase tracking-[.24em] text-[#14271f] transition hover:bg-[#d6b36c] active:scale-95 lg:mt-0 lg:h-14 lg:px-10">View Program</Link></div><div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#c9a45b]/40" /></div></section>

      <section className="py-12 lg:py-16"><div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionIntro label="Dental Health Plans" title="Care more. Spend less." text="Unlock preventive care, exclusive savings, and priority dental benefits with our membership plans." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{plans.map((plan) => <article key={plan.title} className="group relative rounded-2xl border border-[#e8ded0] bg-[#fcfaf6] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#dcd0c0] hover:shadow-[0_12px_24px_rgba(44,42,39,0.04)]"><span className="mb-6 grid size-12 place-items-center rounded-xl bg-[#f4efe6] text-[#2c2a27] transition group-hover:bg-[#eae2d5]"><plan.icon size={20} /></span><h3 className="font-display text-xl font-semibold leading-tight text-[#2c2a27] lg:text-2xl">{plan.title}</h3><p className="mt-5 text-sm leading-6 text-[#66625c] md:text-base lg:leading-7">{plan.text}</p></article>)}</div><div className="mt-10 text-center"><Link href="/dental-plans" className="inline-flex bg-[#16412d] px-6 py-2.5 text-sm text-white transition active:scale-95">Explore Plans</Link></div>
      </div>
      </section>

      <section className="mb-10 flex flex-col items-center justify-center overflow-hidden py-10"><div className="mx-auto w-full max-w-7xl px-6 lg:px-10"><SectionIntro label="FAQ" title="Quietly answered." /><div className="mx-auto w-full max-w-3xl">{faqs.map(([question, answer]) => <details key={question} className="group cursor-pointer border-b border-[#e0d8cc] py-5"><summary className="flex list-none items-center justify-between gap-6"><span className="font-display text-base font-normal text-[#2c2c2c] md:text-lg">{question}</span><svg aria-hidden="true" viewBox="0 0 512 512" className="size-4 shrink-0 fill-[#2c2c2c] transition-transform duration-300 group-open:rotate-180"><path d="M256 294.1 383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0L256 294.1z" /></svg></summary><p className="mt-4 pr-6 text-sm leading-relaxed text-[#6b6b6b] md:text-base">{answer}</p></details>)}</div></div></section>

      <section className="mb-6 flex flex-col items-center justify-center lg:mt-8"><SectionIntro label="Begin" title="Your consultation with us" text="A private, unhurried first visit. Comprehensive 3D diagnostics. A treatment plan designed and delivered by one pair of hands." /><CalendlyButton variant="header" label="Book Appointment" showIcon={false} className="!rounded-none !px-6" /></section>
    </div>
  );
}
