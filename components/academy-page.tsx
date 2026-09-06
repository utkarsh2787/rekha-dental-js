"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarDays,
  ChevronDown,
  HeartHandshake,
  MessageCircle,
  Microscope,
  ScanSearch,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const aboutImages = Array.from({ length: 17 }, (_, index) =>
  `/images/academy/about-${String(index + 1).padStart(2, "0")}.jpeg`,
);

const training = [
  { title: "Live Implant Demonstration", description: "Hands-on implant placement training conducted under expert supervision." },
  { title: "Advanced Endodontic Workshop", description: "Practical training focused on modern root canal treatment techniques." },
  { title: "Clinical Case Discussion", description: "Interactive learning sessions covering complex restorative cases and treatment planning." },
] as const;

const courses = [
  { slug: "general-dentistry-course", title: "General Dentistry Course", description: "Learn the fundamentals of clinical dentistry including diagnosis, treatment planning, restorative procedures, and patient management.", duration: "45 days", badges: ["Certified"], price: "₹49,000", oldPrice: "₹54,444" },
  { slug: "basic-implant-course", title: "Basic Implant Course", description: "An introductory implantology course covering implant planning, placement protocols, instruments, and restorative basics.", duration: "4 months", badges: ["Certified"], price: "₹60,000", oldPrice: "₹66667" },
  { slug: "endodontic-course", title: "Endodontic Course", description: "Master root canal procedures, rotary endodontics, access preparation, obturation techniques, and endodontic case management.", duration: "3 days", badges: ["Certified"], price: "₹15,000", oldPrice: "₹16,667" },
  { slug: "prosthodontics-course", title: "Prosthodontics Course", description: "Gain hands-on experience in crowns, bridges, dentures, smile rehabilitation, and fixed prosthodontic procedures.", duration: "3 days", badges: ["Certified"], price: "₹20,000", oldPrice: "₹22,222" },
  { slug: "oral-surgery-course", title: "Oral Surgery Course", description: "Understand surgical extractions, flap design, suturing techniques, impaction management, and minor oral surgical procedures.", duration: "15 days", badges: ["Certified"], price: "₹30,000", oldPrice: "₹33,333" },
  { slug: "complete-implant-course", title: "Complete Implant Course", description: "Comprehensive implant training with advanced surgical protocols, sinus lift concepts, prosthetic workflows, and live cases.", duration: "3 months", badges: ["Certified"], price: "₹99,000", oldPrice: "₹1,10,000" },
  { slug: "radiology-cbct-course", title: "Radiology (CBCT) Course", description: "Learn CBCT interpretation, radiographic diagnosis, imaging protocols, and digital treatment planning for modern dentistry.", duration: "2 days", badges: ["Hands-on", "Certified"], price: "₹15,000", oldPrice: "₹16,667" },
  { slug: "esthetic-dentistry-course", title: "Esthetic Dentistry", description: "Explore smile designing, veneers, teeth whitening, composite artistry, and minimally invasive cosmetic dental procedures.", duration: "3 days", badges: ["Hands-on", "Certified"], price: "₹49,000", oldPrice: "₹54,444" },
  { slug: "orthodontic-course", title: "Orthodontic Course", description: "Study orthodontic diagnosis, treatment planning, wire bending basics, aligners, and fixed appliance mechanics.", duration: "6 months", badges: ["Certified"], price: "₹99,000", oldPrice: "₹1,10,000" },
  { slug: "laser-dentistry-course", title: "Laser Course", description: "Get trained in dental laser applications for soft tissue procedures, periodontal therapy, pain management, and esthetics.", duration: "2 days", badges: ["Hands-on", "Certified"], price: "₹15,000", oldPrice: "₹16,667" },
] as const;

const events = [
  { title: "Annual Alumni Meet 2025", description: "Graduates and faculty reunited for an evening of networking, memories, and discussions about the future of modern dentistry." },
  { title: "Advanced Implantology Workshop", description: "Alumni participated in a hands-on implantology session led by experienced dental surgeons and international mentors." },
  { title: "Dental Health Live Workshop", description: "Former professionals collaborated to demonstrate dental procedures live to showcase advanced dentistry practices." },
  { title: "Certification", description: "Alumni researchers presented innovative studies and clinical advancements in restorative and cosmetic dentistry." },
  { title: "Achievements", description: "A proud moment celebrating the achievements of dental professionals and their journey." },
] as const;

const learning = [
  { title: "Live Patient Cases", description: "Operate on supervised live cases with mentor guidance — not mannequins.", Icon: Stethoscope },
  { title: "Practical Sessions", description: "70% of every program is hands-on, in our atelier-grade lab.", Icon: Microscope },
  { title: "1:1 Mentorship", description: "Faculty mentor ratio capped at 1:6. Every question gets time.", Icon: Users },
  { title: "Clinical Exposure", description: "Shadow live cases in our specialist clinic — implants, full arch, cosmetic.", Icon: HeartHandshake },
] as const;

const alumni = [
  { name: "Dr. Aarav Mehta", course: "Complete Implant Course", quote: "The hands-on implant sessions completely changed my confidence in clinical practice. The mentorship was exceptional throughout." },
  { name: "Dr. Raman Saxena", course: "Endodontic Course", quote: "Unlike conventional workshops, this academy focused heavily on live patient exposure and real-world decision making." },
  { name: "Dr. Rohan Kapoor", course: "Esthetic Dentistry", quote: "The faculty were approachable, detail-oriented, and deeply invested in every participant’s growth." },
  { name: "Dr. Karan Singh", course: "Radiology (CBCT) Course", quote: "The CBCT training helped me integrate advanced radiology into my clinic immediately after the program." },
  { name: "Dr. Ishaan Verma", course: "Basic Implant Course", quote: "Every session balanced theory with practical execution beautifully. It felt more like mentorship than a course." },
  { name: "Dr. Raj Singh", course: "Orthodontic Course", quote: "The orthodontic module was incredibly structured and clinically relevant. I left with techniques I now use daily." },
] as const;

const currentPrograms = [
  { title: "Chairside Clinical Observation Session", description: "Students observed live patient examinations under expert supervision, gaining practical exposure to diagnosis, communication, and clinical workflow." },
  { title: "Advanced Live Patient Demonstration", description: "Faculty-led demonstrations allowed students to closely understand treatment planning, patient assessment, and precision-based clinical procedures." },
  { title: "Oral Healthcare Awareness Drive", description: "Students conducted an awareness campaign promoting preventive dental care and oral hygiene practices within local communities." },
  { title: "Pre-Clinical Simulation Workshop", description: "Hands-on simulation exercises helped students build confidence in restorative techniques, patient handling, and procedural accuracy." },
  { title: "Interactive Clinical Mentorship Program", description: "Students participated in real-time mentorship sessions featuring live patient evaluations, case discussions, and guided clinical learning experiences." },
] as const;

const faqs = [
  { question: "Who is eligible to enroll?", answer: "Our programs are designed for dental students, fresh graduates, practicing dentists, and clinicians looking to upgrade their clinical expertise." },
  { question: "How long are the courses?", answer: "Course durations vary depending on the program. Short-term workshops may last a few days, while advanced clinical programs can extend over several weeks." },
  { question: "What are the fees?", answer: "Fees differ based on the course structure, clinical exposure, and specialization. Detailed fee information is shared during the consultation and enrollment process." },
  { question: "What certification do I receive?", answer: "Participants receive an academy certification upon successful completion of the course, recognizing their practical and theoretical training." },
  { question: "Is accommodation provided?", answer: "Yes, we assist outstation and international participants with accommodation recommendations and nearby stay arrangements for a comfortable learning experience." },
  { question: "Will I work on real patients?", answer: "Selected advanced programs include supervised live patient exposure, allowing participants to gain real clinical experience under expert mentorship." },
] as const;

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: string }) {
  return (
    <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
        <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{eyebrow}</p>
      </div>
      <h1 className="academy-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{title}</h1>
      {description ? <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">{description}</p> : null}
    </div>
  );
}

function AboutCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % aboutImages.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="group relative h-[250px] overflow-hidden rounded-2xl lg:h-[400px]">
      {aboutImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`An atelier, not a classroom.-${index}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`rounded-2xl object-cover transition-all duration-700 ease-out group-hover:scale-110 ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
          priority={index === 0}
        />
      ))}
    </div>
  );
}

function AutoStrip({ items, imagePrefix, dark = false }: { items: readonly { title: string; description: string }[]; imagePrefix: "event" | "current"; dark?: boolean }) {
  const viewport = useRef<HTMLDivElement>(null);
  const position = useRef(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const element = viewport.current;
      if (!element) return;
      const firstCard = element.firstElementChild as HTMLElement | null;
      if (!firstCard) return;
      const step = firstCard.offsetWidth + 20;
      const visible = Math.max(1, Math.round(element.clientWidth / step));
      const lastStart = Math.max(0, items.length - visible);
      position.current = position.current >= lastStart ? 0 : position.current + 1;
      element.scrollTo({ left: position.current * step, behavior: position.current === 0 ? "auto" : "smooth" });
    }, 3500);
    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <div ref={viewport} className="academy-strip flex gap-5 overflow-hidden py-5">
      {items.map((item, index) => (
        <article key={item.title} className={`academy-strip-card group shrink-0 overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2 ${dark ? "bg-[#184D36]" : "bg-white"}`}>
          <div className="relative h-[200px] w-full overflow-hidden rounded-t-xl lg:h-[260px]">
            <Image src={`/images/academy/${imagePrefix}-${String(index + 1).padStart(2, "0")}.jpeg`} alt={item.title} fill loading="eager" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div className="p-6 md:p-7">
            <div className="mb-3 flex items-center gap-2 lg:mb-5">
              <CalendarDays size={14} className="text-[#b89b5e]" />
              <p className="text-xs font-extrabold uppercase tracking-[3px] text-[#b89b5e]">{dark ? "Alumni Event" : "Current Batch"}</p>
            </div>
            <h3 className={`academy-font-header mb-2 line-clamp-1 text-xl leading-snug lg:mb-4 lg:text-3xl ${dark ? "text-[#F8F5EF]" : "text-[#184D36]"}`}>{item.title}</h3>
            <p className={`line-clamp-2 text-sm leading-relaxed ${dark ? "text-[#D6D0C4]" : "text-gray-600"}`}>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function AcademyFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="w-full max-w-3xl">
      {faqs.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question} className="cursor-pointer border-b border-[#E0D8CC] py-5" onClick={() => setOpen(expanded ? null : index)}>
            <button type="button" aria-expanded={expanded} className="flex w-full items-center justify-between text-left">
              <h4 className="academy-font-header text-base text-[#2C2C2C] md:text-lg">{item.question}</h4>
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

export function AcademyPage() {
  return (
    <div className="academy-page bg-[#EAE4DB] pt-[35px] text-[#2c2c2c] lg:pt-[39.5px]">
      <SectionHeading eyebrow="REKHA ACADEMY" title="Where clinicians refine craft into mastery." description="Rekha Academy delivers immersive, hands-on dental education designed to elevate clinical confidence, precision, and real-world expertise through mentor-led training and live patient exposure." />

      <section className="overflow-hidden bg-[#EAE4DB] pt-10 lg:pt-16">
        <div className="mx-auto grid max-w-7xl justify-center gap-8 px-6 md:grid-cols-2 lg:gap-16">
          <AboutCarousel />
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">ABOUT THE ACADEMY</p>
            </div>
            <h2 className="academy-font-header mb-6 text-2xl font-semibold leading-tight text-[#2C2C2C] lg:text-4xl">An atelier, not a classroom.</h2>
            <p className="text-sm leading-relaxed text-[#6B6B6B] md:text-base">Rekha Dental Academy was founded on a single belief — that exceptional dentistry cannot be taught in slides alone. Our programs are built around live patient cases, small mentor-led cohorts, and the same protocols our specialists use every day in clinic.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="TRAINING" title="Clinical Excellence Through Hands-On Learning" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {training.map((item, index) => (
              <article key={item.title} className="group mx-5 overflow-hidden rounded-xl bg-[#F5F1EA] md:mx-0">
                <div className="relative h-[360px] w-full overflow-hidden lg:h-[460px]">
                  <Image src={`/images/academy/training-${String(index + 1).padStart(2, "0")}.jpeg`} alt={item.title} fill loading="eager" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="mb-3 text-sm font-extrabold tracking-[2px] text-[#b89b5e]">0{index + 1}</p>
                  <h3 className="academy-font-header mb-3 text-xl leading-snug text-[#2C2C2C] md:text-2xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6B6B6B]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#EAE4DB] py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="ACADEMY COURSES" title="Advanced dental programs" description="Hands-on learning experiences crafted to help dental professionals refine clinical expertise through immersive training." />
          <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course, index) => {
              const message = encodeURIComponent(`Hi, I am interested in the \"${course.title}\" course. Please share the fee structure, duration, upcoming batches, and enrollment process.`);
              return (
                <article key={course.slug} className={`group rounded-lg bg-[#F5F1EA] pb-[3px] transition-all duration-700 ease-out hover:-translate-y-2 xl:pb-0 ${index === 5 || index === 8 ? "md:pb-[17.5px]" : "md:pb-[2px]"}`}>
                  <Link href={`/academy/${course.slug}`} className="block">
                    <div className="relative h-[200px] w-full cursor-pointer overflow-hidden rounded-t-lg lg:h-[260px]">
                      <Image src={`/images/academy/course-${String(index + 1).padStart(2, "0")}.jpeg`} alt={course.title} fill loading="eager" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    </div>
                  </Link>
                  <div className="p-4 lg:p-6">
                    <p className="mb-3 text-xs font-extrabold tracking-[2px] text-[#b89b5e]">COURSE {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="academy-font-header mb-3 text-xl leading-snug text-[#2C2C2C] md:text-2xl">{course.title}</h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-[#6B6B6B]">{course.description}</p>
                  </div>
                  <div className="mx-4 mb-4 grid grid-cols-3 gap-2">
                    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#DCCEB9] p-2 text-center sm:flex-row">
                      <CalendarDays size={15} className="text-[#184D36]" /><span className="text-xs font-semibold text-[#2C2C2C] lg:text-sm">{course.duration}</span>
                    </div>
                    {course.badges.map((badge) => (
                      <div key={badge} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#DCCEB9] p-2 text-center sm:flex-row">
                        {badge === "Certified" ? <BadgeCheck size={15} className="text-[#184D36]" /> : <ScanSearch size={15} className="text-[#184D36]" />}
                        <span className="text-xs font-semibold text-[#2C2C2C] lg:text-sm">{badge}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="pr-2">
                        <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#b89b5e]">Starting at</p>
                        <div className="flex items-center gap-2">
                          <p className="text-xl font-bold text-[#16412d]">{course.price}</p>
                          <p className="text-sm text-gray-400 line-through">{course.oldPrice}</p>
                        </div>
                      </div>
                      <a href={`https://wa.me/918130406405?text=${message}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-[#16412d] px-3 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#093528] active:scale-95">
                        <MessageCircle size={15} /><span className="hidden sm:inline">Enquire Now</span><span className="sm:hidden">Enquire</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="my-6 bg-[#16412d] py-10 lg:py-24">
        <div className="mx-4 lg:mx-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[5px] text-[#b89b5e]">ALUMNI EVENTS</p>
            <h2 className="academy-font-header text-2xl leading-tight text-[#F8F5EF] md:text-5xl">Reunions, workshops<br />and alumni celebrations.</h2>
          </div>
          <div className="mt-6 px-1 lg:mt-10 lg:px-3"><AutoStrip items={events} imagePrefix="event" dark /></div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#EAE4DB] py-10">
        <div className="mx-auto w-full px-6 lg:px-10">
          <SectionHeading eyebrow="HANDS-ON TRAINING" title="Learn by doing. Supervised by masters." description="Built around practical learning, live clinical exposure, and close mentorship from experienced dental professionals." />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {learning.map(({ title, description, Icon }, index) => (
              <article key={title} className="group relative overflow-hidden rounded-lg border border-[#E8DED0] bg-[#FCFAF6] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D9C5A1] hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]">
                <div className="academy-font-header absolute right-6 top-5 text-5xl leading-none text-[#ECE4D8] transition duration-500 group-hover:text-[#E1D4BF] lg:text-6xl">0{index + 1}</div>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E7DDD0] bg-[#F3ECE1] text-[#163828] transition-all duration-500 lg:h-16 lg:w-16"><Icon size={25} /></div>
                <div className="relative z-10 mt-8">
                  <h3 className="academy-font-header text-xl leading-tight text-[#2C2A27] lg:text-3xl">{title}</h3>
                  <p className="mt-5 text-sm leading-6 text-[#66625C] md:text-base lg:leading-7">{description}</p>
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#EFE5D7] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="my-10 w-full bg-[#1F4A36] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <div className="mb-6 flex items-center justify-center gap-4"><span className="h-[2px] w-10 bg-[#b89b5e]" /><p className="text-base font-extrabold uppercase tracking-[3px] text-[#b89b5e] md:text-lg">ALUMINI STORIES</p><span className="h-[2px] w-10 bg-[#b89b5e]" /></div>
          <h2 className="academy-font-header text-3xl text-white md:text-4xl lg:text-5xl">What alumini say?</h2>
          <div className="mt-14 grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
            {alumni.map((item) => (
              <article key={item.name} className="flex h-full flex-col justify-between border border-[#2E5A45] bg-transparent p-6 md:p-8">
                <div className="mb-4 flex gap-1 text-[#b89b5e]">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</div>
                <p className="mb-6 text-sm italic leading-relaxed text-[#DADADA] md:text-base">“{item.quote}”</p>
                <p className="mt-auto text-xs uppercase tracking-[3px] text-[#CFCFCF]">{item.name}<span className="text-[#8FA79A]"> · {item.course}</span></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-24">
        <div className="mx-4 lg:mx-10">
          <SectionHeading eyebrow="ONGOING PROGRAMS" title="Glimpse of our current batch" />
          <div className="mt-10 px-1 lg:px-3"><AutoStrip items={currentPrograms} imagePrefix="current" /></div>
        </div>
      </section>

      <section className="mb-10 flex flex-col items-center justify-center overflow-hidden py-10">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="FAQ" title="Quietly answered." />
          <div className="flex justify-center"><AcademyFaq /></div>
        </div>
      </section>

      <section className="mb-8 flex flex-col items-center justify-center">
        <SectionHeading eyebrow="ENROLL NOW" title="Advance your clinical expertise with our Academy." description="Hands-on dental training programs led by experienced mentors, designed to refine practical skills, elevate confidence, and shape the future of modern dentistry." />
        <a href="tel:+918130406405" className="flex h-10 items-center justify-center bg-[#16412d] px-8 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-all duration-300 active:scale-95 lg:h-12 lg:px-10">Call Now</a>
      </section>
    </div>
  );
}
