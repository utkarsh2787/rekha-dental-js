"use client";

import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import {
  academyCourseDetailsBySlug,
  academyCourseFaq,
  academyCourseGains,
} from "@/content/academy-course-details";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" aria-hidden="true" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1C346.2 476.1 448 376.4 448 254c0-59.3-25.2-115-67.1-156.9zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7C49.1 322.8 39.4 288.9 39.4 254c0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function CourseHeading({ eyebrow, children, align = "center" }: { eyebrow: string; children: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`flex max-w-4xl flex-col gap-3 px-4 ${align === "center" ? "mx-auto mb-8 items-center text-center lg:mb-14" : "mb-8 items-start text-left lg:mb-14"}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
        <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{eyebrow}</p>
      </div>
      <h1 className="academy-course-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{children}</h1>
    </div>
  );
}

function CourseFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="w-full max-w-3xl">
      {academyCourseFaq.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question} className="cursor-pointer border-b border-[#E0D8CC] py-5" onClick={() => setOpen(expanded ? null : index)}>
            <button type="button" aria-expanded={expanded} className="flex w-full items-center justify-between text-left">
              <h4 className="academy-course-font-header text-base text-[#2C2C2C] md:text-lg">{item.question}</h4>
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

export function AcademyCoursePage({ slug }: { slug: string }) {
  const course = academyCourseDetailsBySlug.get(slug);
  if (!course) return null;
  const message = encodeURIComponent(`Hi, I am interested in the \"${course.title}\" course. Please share the fee structure, duration, upcoming batches, and enrollment process.`);
  const enquiryHref = `https://wa.me/918130406405?text=${message}`;

  return (
    <div className="academy-course-page bg-[#EAE4DB] text-[#2c2c2c]">
      <section className="w-full">
        <div className="relative min-h-[40vh] w-full overflow-hidden sm:min-h-[50vh] lg:min-h-[85vh]">
          <Image src={course.heroImage} alt={course.title} fill priority sizes="100vw" className="academy-course-zoom object-cover" />
          <div className="absolute inset-0 bg-[#0f3d3e]/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 text-white sm:px-6 lg:px-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-8 bg-[#cba553]" />
                <p className="whitespace-nowrap text-sm font-extrabold uppercase tracking-[3px] text-[#cba553] lg:text-lg">COURSE</p>
                <span className="h-[3px] w-8 bg-[#cba553]" />
              </div>
              <h1 className="academy-course-font-header max-w-3xl text-3xl leading-tight md:text-5xl lg:text-6xl">{course.title} </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base lg:text-lg">{course.metaDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-3 lg:gap-16">
            <div className="col-span-2">
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[3px] text-[#b89b5e]">OVERVIEW</p>
              <p className="academy-course-font-header text-base leading-relaxed text-[#2C2C2C]">{course.overview}</p>
            </div>
            <div className="border-l-2 border-[#CBA553]/40 pl-8">
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[3px] text-[#b89b5e]">CURRICULUM</p>
              <ul className="space-y-4">
                {course.curriculum.map((item) => <li key={item} className="academy-course-font-header flex items-center gap-3 text-base text-[#2C2C2C]"><Check size={12} strokeWidth={3} className="shrink-0 text-[#b89b5e]" />{item}</li>)}
              </ul>
            </div>
          </div>

          <section className="mt-16 pb-10 lg:pb-20">
            <div className="mx-auto max-w-7xl px-6">
              <CourseHeading eyebrow="PRICING">Course Pricing</CourseHeading>
              <div className="mt-10 hidden overflow-hidden rounded-xl border border-[#D8CFC2] bg-[#F5F1EA] shadow-sm md:block">
                <div className="grid grid-cols-[1fr_180px_140px] bg-[#16412d] text-white">
                  <div className="px-6 py-4 text-sm font-semibold uppercase tracking-[2px]">Course</div>
                  <div className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-[2px]">Duration</div>
                  <div className="px-6 py-4 text-right text-sm font-semibold uppercase tracking-[2px]">Fees</div>
                </div>
                {course.pricing.map((row, index) => (
                  <div key={row.course} className={`grid grid-cols-[1fr_180px_140px] items-center hover:bg-[#EFE8DD] ${index < course.pricing.length - 1 ? "border-b border-[#E2D9CE]" : ""}`}>
                    <div className="academy-course-font-header px-6 py-5 text-[#2C2C2C]">{row.course}</div>
                    <div className="px-6 py-5 text-center text-[#6B6B6B]">{row.duration}</div>
                    <div className="px-6 py-5 text-right font-semibold text-[#0f3d3e]">₹{row.fee}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4 md:hidden">
                {course.pricing.map((row) => (
                  <article key={row.course} className="rounded-xl border border-[#D8CFC2] bg-[#F5F1EA] p-5 shadow-sm">
                    <h3 className="academy-course-font-header text-base text-[#2C2C2C]">{row.course}</h3>
                    <div className="mt-4 flex items-center justify-between border-t border-[#E2D9CE] pt-4">
                      <div><p className="text-xs uppercase tracking-[2px] text-[#8B8175]">Duration</p><p className="mt-1 text-sm text-[#4B4B4B]">{row.duration}</p></div>
                      <div className="text-right"><p className="text-xs uppercase tracking-[2px] text-[#8B8175]">Fees</p><p className="mt-1 font-semibold text-[#0f3d3e]">₹{row.fee}</p></div>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-sm italic text-[#6B6B6B]">* Course fees are indicative and may vary based on modules, hands-on sessions, and clinical exposure included in the program.</p>
            </div>
          </section>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#E8DED0] bg-[#FCFAF6] p-6 shadow-sm md:flex-row md:p-8">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[3px] text-[#b89b5e]">COURSE ADMISSION OPEN</p>
              <h4 className="academy-course-font-header text-xl text-[#2C2A27] md:text-2xl">Ready to upscale your dental expertise?</h4>
              <p className="mt-5 text-sm leading-relaxed text-[#6F675F] md:text-base">Enquire via WhatsApp to get immediate details on batch timings, seat availability, and total fees.</p>
            </div>
            <div className="w-full shrink-0 md:w-auto">
              <a href={enquiryHref} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#16412d] px-8 py-3.5 text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-[#093528] active:scale-95 md:w-auto">
                <WhatsAppIcon className="h-4 w-4" /><span>Enquire Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center md:text-left"><CourseHeading eyebrow="COURSE DETAILS">What You&apos;ll Learn</CourseHeading></div>
          <div className="relative mt-12">
            <div className="absolute bottom-8 left-5 top-0 w-0.5 bg-[#D3C4B2]" />
            {course.learning.map((item, index) => (
              <div key={item.title} className="relative flex gap-4 pb-8 md:gap-8">
                <div className="relative z-10 flex flex-col items-center"><span className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#16412d] text-sm font-semibold text-white shadow-md">{index + 1}</span></div>
                <article className="flex-1 rounded-3xl border border-[#E8DED0] bg-[#FCFAF6] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4"><h3 className="academy-course-font-header text-xl text-[#2C2A27] md:text-2xl">{item.title}</h3></div>
                  <p className="mt-5 text-sm leading-relaxed text-[#6F675F]">{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <CourseHeading eyebrow="WHAT YOU WILL GAIN">What You&apos;ll Gain</CourseHeading>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {academyCourseGains.map((gain, index) => (
              <article key={gain} className="rounded-xl border border-[#E0D8CC] bg-[#F5F1EA] p-6 transition-all duration-300 hover:-translate-y-1">
                <p className="mb-3 text-sm font-extrabold tracking-[2px] text-[#b89b5e]">{String(index + 1).padStart(2, "0")}</p>
                <p className="academy-course-font-header text-lg text-[#2C2C2C]">{gain}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <CourseHeading eyebrow="QUESTIONS" align="left">Frequently asked.</CourseHeading>
          <CourseFaq />
        </div>
      </section>
    </div>
  );
}
