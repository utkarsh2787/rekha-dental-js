"use client";

import Image from "next/image";
import {
  ChevronDown,
  Clock3,
  DollarSign,
  FlaskConical,
  Globe2,
  IndianRupee,
  Percent,
  ShieldCheck,
  Star,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import { CalendlyButton } from "@/components/calendly-button";

const tourismImages = [
  "/images/tour/dental-tourism-01.jpeg",
  "/images/tour/dental-tourism-02.jpeg",
] as const;

const benefits = [
  { title: "70% More Affordable", body: "World-class dentistry at a fraction of US, UK and Australian prices — without compromise.", Icon: Percent },
  { title: "Exceptionally Trained", body: "Dentists with degrees and fellowships from Karolinska, NYU, King's College and beyond.", Icon: Trophy },
  { title: "Advanced Technology", body: "Robotic scanning, CBCT, digital smile design and 3D-printed surgical guides.", Icon: FlaskConical },
  { title: "ISO Hygiene Standards", body: "Hospital-grade sterilization with autoclave-validated protocols on every instrument.", Icon: ShieldCheck },
  { title: "English-Speaking Team", body: "Every clinician and concierge fluent in English — translators on request.", Icon: Globe2 },
  { title: "Compressed Timelines", body: "Treatments completed in a single trip — implants, veneers and full-arch restorations.", Icon: Clock3 },
] as const;

const priceTabs = [
  "General Dentistry",
  "Dental Implants",
  "Dental Crowns & Bridges",
  "Dental Veneers",
  "Orthodontic Treatments",
  "Teeth Whitening",
] as const;

const priceData = {
  "General Dentistry": [
    { procedure: "Teeth Cleaning", india: "$15 - $30", usa: "$180 - $220", saving: "92%" },
    { procedure: "Scaling & Root Planing", india: "$10 - $20", usa: "$150 - $250", saving: "93%" },
    { procedure: "Root Canal Treatment", india: "$30 - $50", usa: "$1000 - $1300", saving: "97%" },
    { procedure: "Composite Filling", india: "$15 - $25", usa: "$200 - $300", saving: "93%" },
    { procedure: "Regular Tooth Extraction", india: "$10 - $20", usa: "$250 - $350", saving: "96%" },
    { procedure: "Surgical Tooth Extraction", india: "$25 - $40", usa: "$600 - $700", saving: "96%" },
    { procedure: "Wisdom Tooth Extraction", india: "$30 - $50", usa: "$750 - $850", saving: "96%" },
  ],
  "Dental Implants": [
    { procedure: "Titanium Implant with Abutment or Crown", india: "$200 - $700", usa: "$4500 - $6500", saving: "96%" },
    { procedure: "Zirconium Implant with Abutment", india: "$150 - $250", usa: "$5500 - $6500", saving: "97%" },
    { procedure: "Same-Day Implant with Crown", india: "$200 - $400", usa: "$5000 - $7000", saving: "96%" },
    { procedure: "All on 4 / All on 6 Dental Implants with Fixed Bridge", india: "$1500 - $2000", usa: "$25000 - $30000", saving: "94%" },
  ],
  "Dental Crowns & Bridges": [
    { procedure: "CAD/CAM PFM Crown", india: "$80 - $150", usa: "$1000 - $1500", saving: "92%" },
    { procedure: "Only Porcelain Crown", india: "$30 - $60", usa: "$1700 - $2000", saving: "98%" },
    { procedure: "CAD/CAM Ceramic Crown", india: "$70 - $100", usa: "$1000 - $2000", saving: "93%" },
    { procedure: "Zirconia Crown", india: "$70 - $100", usa: "$1500 - $2500", saving: "95%" },
    { procedure: "PFM Bridge", india: "$100 - $150", usa: "$3000 - $3500", saving: "97%" },
    { procedure: "All Ceramic Bridge", india: "$150 - $200", usa: "$4200 - $4700", saving: "96%" },
    { procedure: "Only Porcelain Bridge", india: "$50 - $100", usa: "$5200 - $5500", saving: "99%" },
  ],
  "Dental Veneers": [
    { procedure: "Composite Veneer", india: "$30 - $50", usa: "$800 - $1000", saving: "96%" },
    { procedure: "Porcelain Veneer", india: "$80 - $120", usa: "$2000 - $3000", saving: "96%" },
    { procedure: "Ceramic Veneer", india: "$50 - $100", usa: "$2000 - $2500", saving: "98%" },
  ],
  "Orthodontic Treatments": [
    { procedure: "Metal Braces", india: "$250 - $350", usa: "$2800 - $3200", saving: "91%" },
    { procedure: "Ceramic Braces", india: "$300 - $400", usa: "$3800 - $4500", saving: "92%" },
    { procedure: "Lingual Braces", india: "$550 - $650", usa: "$7500 - $8500", saving: "93%" },
    { procedure: "Clear Aligners", india: "$600 - $2500", usa: "$2500 - $3500", saving: "76%" },
  ],
  "Teeth Whitening": [
    { procedure: "Laser Teeth Whitening", india: "$20 - $50", usa: "$1200 - $1700", saving: "98%" },
  ],
} as const;

type PriceItem = (typeof priceData)[keyof typeof priceData][number];

const journey = [
  { title: "Consultation", body: "Share records or photos. We respond within 24 hours." },
  { title: "Treatment Plan", body: "Personalized written plan with exact costs and timeline." },
  { title: "Travel", body: "We arrange visa support, flights and hotel partners." },
  { title: "Treatment", body: "Compressed sessions with same-day digital workflows." },
  { title: "Recovery", body: "Quiet stay with daily follow-ups and concierge support." },
  { title: "Follow-Up", body: "Lifetime virtual aftercare in your time zone." },
] as const;

const patientStories = [
  { quote: "From airport pickup to the final smile makeover, everything was organized flawlessly. The treatment quality exceeded my expectations.", name: "James Walker", detail: "Patient from United States" },
  { quote: "I saved nearly 70% compared to treatment costs in London while receiving world-class care and incredible hospitality.", name: "Olivia Bennett", detail: "Patient from United Kingdom" },
  { quote: "The doctors explained every step patiently and made me feel completely comfortable during my implant treatment journey.", name: "Daniel Foster", detail: "Full Mouth Implant Patient" },
  { quote: "The clinic was modern, spotless, and highly professional. I completed my veneers and crowns in a single trip.", name: "Sophia Turner", detail: "Smile Makeover Patient" },
  { quote: "Their team handled accommodation guidance, scheduling, and follow-ups seamlessly. It felt like a luxury healthcare experience.", name: "Michael Harris", detail: "Patient from Australia" },
  { quote: "I was nervous about traveling abroad for treatment, but the warmth and expertise of the team made the process stress-free.", name: "Emma Richardson", detail: "Dental Tourism Patient" },
] as const;

const faq = [
  { question: "Why choose India for dental treatment?", answer: "India offers exceptionally trained dentists, advanced technology, and significantly lower treatment costs compared to many Western countries — without compromising on quality or safety." },
  { question: "How much can I save with dental tourism?", answer: "Patients often save between 60% to 80% on treatments such as implants, veneers, crowns, and smile makeovers compared to prices in the USA, UK, or Australia." },
  { question: "How long do I need to stay for treatment?", answer: "The duration depends on the procedure. Cosmetic treatments may take only a few days, while implants or full-mouth rehabilitation can require multiple visits or a longer stay." },
  { question: "Do you assist with travel and accommodation?", answer: "Yes, we guide international patients with travel planning, airport pickup coordination, hotel recommendations, and local assistance for a smooth experience." },
  { question: "Is the treatment safe and hygienic?", answer: "Our clinic follows strict international sterilization and hygiene protocols, using advanced equipment and globally accepted treatment standards." },
  { question: "Can I get an online consultation before traveling?", answer: "Absolutely. Patients can share dental records, X-rays, or photographs online to receive an initial consultation, treatment plan, and estimated cost before booking their trip." },
] as const;

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
        <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{eyebrow}</p>
      </div>
      <h1 className="tourism-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{title}</h1>
      {text ? <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">{text}</p> : null}
    </div>
  );
}

function TourismCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % tourismImages.length), 4500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="group relative h-[250px] overflow-hidden rounded-2xl transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:h-[300px] lg:h-[400px]">
      <div className="flex h-full transition-transform duration-[1200ms] ease-out" style={{ transform: `translateX(-${active * 100}%)` }}>
        {tourismImages.map((image, index) => (
          <div key={image} className="relative h-full min-w-full">
            <Image src={image} alt={`A passport to a healthier smile.-${index}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="rounded-2xl object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqList() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="w-full max-w-3xl">
      {faq.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question} className="cursor-pointer border-b border-[#E0D8CC] py-5" onClick={() => setOpen(expanded ? null : index)}>
            <button type="button" aria-expanded={expanded} className="flex w-full items-center justify-between gap-5 text-left">
              <h4 className="tourism-font-header text-base text-[#2C2C2C] md:text-lg">{item.question}</h4>
              <ChevronDown size={16} className={`shrink-0 text-[#2C2C2C] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${expanded ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden"><p className="pr-6 text-sm leading-relaxed text-[#6B6B6B] md:text-base">{item.answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PriceCard({ item, index }: { item: PriceItem; index: number }) {
  return (
    <article className="group border border-[#E7DED1] bg-[#F8F4ED] transition-all duration-300 hover:border-[#D9C7AA]">
      <div className="flex items-start justify-between px-5 pt-5">
        <p className="text-xs font-extrabold tracking-[3px] text-[#b89b5e]">{String(index + 1).padStart(2, "0")}</p>
        <div className="flex items-center gap-2 bg-[#EFE7DB] px-3 py-1.5"><Percent size={12} className="text-[#1E7A4D]" /><p className="text-[10px] uppercase tracking-[2px] text-[#1E7A4D]">{item.saving} Savings</p></div>
      </div>
      <div className="px-5 pb-5 pt-6">
        <h3 className="text-xl font-semibold leading-[1.1] text-[#2E2A27]">{item.procedure}</h3>
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between border-b border-[#E8DDD0] pb-4">
            <div><p className="text-[11px] uppercase tracking-[2px] text-[#8A8175]">India</p><p className="mt-1 text-xl font-medium text-[#1E3D34]">{item.india}</p></div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8CEC0] bg-white"><IndianRupee size={17} className="text-[#1E7A4D]" /></span>
          </div>
          <div className="flex items-center justify-between">
            <div><p className="text-[11px] uppercase tracking-[2px] text-[#A17A7A]">USA</p><p className="mt-1 text-xl font-medium text-[#7D4B4B]">{item.usa}</p></div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8CEC0] bg-white"><DollarSign size={17} className="text-[#8B5E5E]" /></span>
          </div>
        </div>
      </div>
    </article>
  );
}

function StoryStars() {
  return <div className="mb-4 flex gap-1 text-[#cba553]">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</div>;
}

export function TourismPage() {
  const [activeTab, setActiveTab] = useState<(typeof priceTabs)[number]>("General Dentistry");
  const prices = priceData[activeTab];

  return (
    <div className="tourism-page bg-[#EAE4DB] text-[#2c2c2c]">
      <div className="pt-10">
        <SectionHeading eyebrow="Why India" title="The world comes to India for dentistry." text="Premium materials, exceptionally trained clinicians, transparent pricing — refined into a single destination." />

        <section className="overflow-hidden bg-[#EAE4DB] pt-10 lg:pt-16">
          <div className="mx-auto grid max-w-7xl justify-center gap-8 px-6 md:grid-cols-2 lg:gap-16">
            <TourismCarousel />
            <div className="max-w-xl transition-all delay-200 duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">WHAT IS DENTAL TOURISM</p>
              </div>
              <h1 className="tourism-font-header mb-6 text-2xl font-semibold leading-tight text-[#2C2C2C] lg:text-4xl">A passport to a healthier smile.</h1>
              <div className="space-y-4 text-sm leading-relaxed text-[#6B6B6B] md:text-base">
                <p>At Rekha Dental, we make world-class dental care accessible through our comprehensive dental tourism program. From your first online consultation to your final follow-up, our team manages every detail with personalized treatment plans, transparent pricing, travel assistance, and dedicated support, ensuring a smooth and stress-free experience.</p>
                <p>Using advanced technologies such as digital dentistry, CBCT imaging, robotic scanning, and laser treatments, our experienced specialists deliver precise, safe, and high-quality care. Whether you need dental implants, veneers, smile makeovers, or full-mouth rehabilitation, we combine clinical excellence with exceptional value—helping you return home with a healthier, more confident smile and lasting memories of India.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-6 mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mx-10 lg:mt-20 xl:grid-cols-3">
          {benefits.map(({ title, body, Icon }, index) => (
            <article key={title} className="group relative overflow-hidden rounded-2xl border border-[#E8DED0] bg-[#FCFAF6] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D9C5A1] hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]">
              <div className="tourism-font-header absolute right-6 top-5 text-4xl leading-none text-[#ECE4D8] transition duration-500 group-hover:text-[#E1D4BF] lg:text-6xl">{String(index + 1).padStart(2, "0")}</div>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7DDD0] bg-[#F3ECE1] text-[#163828] transition-all duration-500 lg:h-16 lg:w-16"><Icon size={24} /></div>
              <div className="relative z-10 mt-4 lg:mt-8"><h3 className="tourism-font-header text-xl font-semibold leading-tight text-[#2C2A27] lg:text-2xl">{title}</h3><p className="mt-5 text-sm leading-6 text-[#66625C] md:text-base lg:leading-7">{body}</p></div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#EFE5D7] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        <section className="py-10">
          <div className="mx-auto max-w-[1500px] px-4 lg:px-10">
            <SectionHeading eyebrow="COST COMPARISON" title="Premium dental care at a fraction of the cost." text="Compare treatment prices in India with the United States and discover why patients worldwide choose India for affordable, world-class dental care." />
            <div className="mt-12">
              <div className="flex flex-wrap justify-center gap-3">
                {priceTabs.map((tab) => (
                  <button key={tab} type="button" aria-pressed={activeTab === tab} onClick={() => setActiveTab(tab)} className={`relative overflow-hidden border px-4 py-1.5 text-xs uppercase tracking-[1.5px] transition-colors duration-200 hover:cursor-pointer lg:px-6 lg:py-3 lg:text-sm ${activeTab === tab ? "border-[#16412d] bg-[#16412d] text-white" : "border-[#D8CEC0] bg-transparent text-[#2C2C2C] hover:border-[#16412d] hover:bg-[#16412d] hover:text-white"}`}>
                    <span className="relative z-10">{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 hidden overflow-hidden border border-[#DDD4C8] bg-[#F8F4ED] shadow-[0_10px_40px_rgba(0,0,0,0.04)] lg:block">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-[#EEE7DD] bg-[#16412d] px-8 py-5">
                {['Procedure', 'India', 'USA', 'Savings'].map((heading) => <p key={heading} className="text-sm font-medium uppercase tracking-[2px] text-[#CBA553]">{heading}</p>)}
              </div>
              <div>
                {prices.map((item, index) => (
                  <div key={item.procedure} className={`grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-8 py-6 transition-colors duration-300 hover:bg-[#FAF7F2] ${index < prices.length - 1 ? "border-b border-[#F0E8DD]" : ""}`}>
                    <div><h3 className="text-lg font-medium text-[#1E3D34]">{item.procedure}</h3></div>
                    <p className="text-base font-medium text-[#3F4D48]">{item.india}</p>
                    <p className="text-base font-medium text-[#8B5E5E]">{item.usa}</p>
                    <div><span className="inline-flex rounded-full bg-[#E8F5EE] px-4 py-2 text-sm font-semibold text-[#1E7A4D]">Save up to {item.saving}</span></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 lg:hidden">{prices.map((item, index) => <PriceCard key={item.procedure} item={item} index={index} />)}</div>

            <div className="mt-12 border border-[#E7DED1] bg-[#F8F4ED] px-6 py-8 lg:px-10 lg:py-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div><p className="text-sm font-extrabold uppercase tracking-[4px] text-[#b89b5e]">DENTAL TOURISM</p><h3 className="tourism-font-header mt-5 text-xl leading-[1.1] text-[#1E3D34] md:text-3xl">Why patients choose India for dental tourism.</h3><p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#5E6A66]">International patients receive globally recognized dental care, advanced technology, and experienced specialists — while saving significantly compared to treatment costs in Western countries.</p></div>
                <div className="shrink-0"><CalendlyButton variant="doctor-consultation" showIcon={false} label="BOOK CONSULTATION" className="w-full min-w-[240px] lg:w-auto" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-10">
            <SectionHeading eyebrow="HOW IT WORKS" title="Six quiet steps. One trip." />
            <div className="mt-14 space-y-4">
              {journey.map((item, index) => (
                <article key={item.title} className="group overflow-hidden border border-[#E2D8CA] bg-[#F8F4ED] transition-all duration-500 hover:border-[#D3C1A5]">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_120px]">
                    <div className="px-6 py-8 lg:px-10 lg:py-10">
                      <div className="flex items-center gap-4"><span className="text-xs font-extrabold tracking-[4px] text-[#b89b5e]">STEP {String(index + 1).padStart(2, "0")}</span><div className="h-px flex-1 bg-[#E2D8CA]" /></div>
                      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"><h3 className="tourism-font-header text-xl leading-none text-[#2E2A27] md:text-3xl">{item.title}</h3><p className="max-w-xl text-base leading-relaxed text-[#66706C]">{item.body}</p></div>
                    </div>
                    <div className="hidden border-l border-[#E2D8CA] bg-[#F5EFE5] lg:flex lg:items-center lg:justify-center"><p className="tourism-font-header text-7xl leading-none text-[#E7DED1] transition-all duration-500 group-hover:text-[#D7C7B2]">{String(index + 1).padStart(2, "0")}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="my-10 w-full bg-[#1F4A36] py-20">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
            <div className="mb-6 flex items-center justify-center gap-4"><span className="h-[2px] w-10 bg-[#cba553]" /><p className="text-base font-extrabold uppercase tracking-[3px] text-[#cba553] md:text-lg">PATIENT STORIES</p><span className="h-[2px] w-10 bg-[#cba553]" /></div>
            <h2 className="tourism-font-header text-3xl text-white md:text-4xl lg:text-5xl">What our international patients say.</h2>
            <div className="mt-14 grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
              {patientStories.map((story) => (
                <article key={story.name} className="flex h-full flex-col justify-between border border-[#2E5A45] bg-transparent p-6 md:p-8">
                  <StoryStars /><p className="mb-6 text-sm italic leading-relaxed text-[#DADADA] md:text-base">“{story.quote}”</p>
                  <div className="mt-auto"><p className="text-xs uppercase tracking-[3px] text-[#CFCFCF]">{story.name}<span className="text-[#8FA79A]"> · {story.detail}</span></p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pb-10 lg:px-10">
          <SectionHeading eyebrow="FAQ" title="Quietly answered." />
          <FaqList />
        </div>
      </div>
    </div>
  );
}
