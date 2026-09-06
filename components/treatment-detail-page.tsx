import Image from "next/image";
import { Check } from "lucide-react";
import { CalendlyButton } from "@/components/calendly-button";
import { treatmentDetailsBySlug } from "@/content/treatment-details";
import type { ContentPage } from "@/content/pages";

const eyebrowClass = "text-sm font-extrabold uppercase tracking-[3px] text-[#cba553]";
const sectionTitleClass = "treatment-font-header text-2xl leading-8 text-[#2c2c2c] md:text-3xl md:leading-[1.2]";

function CheckList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={compact ? "space-y-3" : "space-y-4"}>
      {items.map((item) => (
        <li key={item} className="treatment-font-header flex items-center gap-3 text-base leading-6 text-[#2c2c2c]">
          <Check aria-hidden="true" className="shrink-0 text-[#cba553]" size={compact ? 18 : 17} strokeWidth={3} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TreatmentDetailPage({ page }: { page: ContentPage }) {
  const slug = page.path.split("/").at(-1) ?? "";
  const detail = treatmentDetailsBySlug.get(slug);
  if (!detail) return null;

  return (
    <div className="treatment-page bg-[#eae4db] text-[#2c2c2c]">
      <section className="w-full">
        <div className="relative min-h-[40vh] w-full overflow-hidden sm:min-h-[50vh] lg:min-h-[85vh]">
          <h1 className="sr-only">{page.title}</h1>
          <Image src={detail.heroImage} alt={detail.heroAlt || page.title} fill priority sizes="100vw" className="animate-page-zoom object-fill" />
        </div>
      </section>

      <section className="py-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 lg:gap-16">
          <div className="md:col-span-2">
            <p className={`${eyebrowClass} mb-4`}>Overview</p>
            <p className="treatment-font-header text-base leading-relaxed text-[#2c2c2c]">{detail.overview}</p>
          </div>
          <div className="border-[#cba553]/40 md:border-l-2 md:pl-8">
            <p className={`${eyebrowClass} mb-4`}>Technology</p>
            <CheckList items={detail.technology} />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className={`${eyebrowClass} mb-3`}>{detail.whyEyebrow}</p>
          <h2 className={`${sectionTitleClass} mb-12 font-light`}>{detail.whyTitle}</h2>
          <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
            {detail.reasons.map((reason, index) => (
              <article key={reason.title} className="flex flex-col gap-2">
                <span className="text-xs font-extrabold text-[#cba553]">{String(index + 1).padStart(2, "0")}.</span>
                <h3 className="treatment-font-header text-xl font-medium text-[#2c2c2c]">{reason.title}</h3>
                <p className="treatment-font-header text-base leading-relaxed text-[#2c2c2c]">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-6 my-4 rounded-2xl bg-[#f3ece0] py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className={`${eyebrowClass} mb-3`}>Is it right for you?</p>
            <h2 className={`${sectionTitleClass} mb-4 font-light`}>{detail.candidateTitle}</h2>
            <p className="treatment-font-header text-base leading-relaxed text-[#2c2c2c]/80">{detail.candidateBody}</p>
          </div>
          <div className="rounded-xl border border-[#cba553]/20 bg-[#eae4db] p-6 md:col-span-2">
            <CheckList items={detail.candidates} compact />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center md:text-left">
            <p className={`${eyebrowClass} mb-3`}>Benefits</p>
            <h2 className={`${sectionTitleClass} font-light`}>{detail.benefitsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
            {detail.benefits.map((benefit) => (
              <div key={benefit} className="border border-[#dcd5c9] bg-[#ebe4d7] px-4 py-3 text-sm font-medium text-[#11261b] transition-colors duration-300 hover:bg-[#f5f1ea]">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Pricing</p>
            </div>
            <h2 className="treatment-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] text-[#2c2c2c] md:text-4xl lg:text-5xl">{detail.pricingTitle}</h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-[#d8cfc2] bg-[#f5f1ea] shadow-sm">
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(7rem,auto)] bg-[#16412d] text-white">
              <div className="px-4 py-4 text-sm font-semibold uppercase tracking-[2px] md:px-6">Treatment</div>
              <div className="px-4 py-4 text-right text-sm font-semibold uppercase tracking-[2px] md:px-6">Price</div>
            </div>
            {detail.pricing.map((row, index) => (
              <div key={`${row.item}-${row.price}`} className={`grid grid-cols-[minmax(0,1fr)_minmax(7rem,auto)] transition-colors duration-300 hover:bg-[#efe8dd] ${index < detail.pricing.length - 1 ? "border-b border-[#e2d9ce]" : ""}`}>
                <div className="min-w-0 px-4 py-5 md:px-6"><span className="treatment-font-header text-sm text-[#2c2c2c]">{row.item}</span></div>
                <div className="max-w-[48vw] break-words px-4 py-5 text-right text-base font-semibold text-[#0f3d3e] md:max-w-none md:px-6">{row.price}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm italic text-[#6b6b6b]">{detail.pricingNote}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className={`${eyebrowClass} mb-3`}>Recovery</p>
            <h2 className={`${sectionTitleClass} mb-4 font-medium`}>{detail.recoveryTitle}</h2>
            <p className="treatment-font-header text-base leading-relaxed text-[#2c2c2c]/80">{detail.recoveryBody}</p>
          </div>
          <div className="space-y-3">
            {detail.recovery.map((item, index) => (
              <div key={item} className="flex items-start gap-4 border-b border-[#cba553]/10 pb-3 last:border-0">
                <span className="pt-0.5 text-xs font-extrabold text-[#cba553]">[{index + 1}]</span>
                <p className="treatment-font-header text-sm text-[#2c2c2c]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-6 bg-[#16412d] py-12 text-[#eae4db] lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className={`${eyebrowClass} mb-3`}>Why Rekha Dental</p>
          <h2 className="treatment-font-header mb-12 text-2xl font-light leading-8 md:text-3xl md:leading-[1.2]">{detail.whyRekhaTitle}</h2>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {detail.whyRekha.map((reason) => (
              <article key={reason.title} className="flex flex-col gap-2 pt-6">
                <h3 className="treatment-font-header text-base font-bold text-[#cba553]">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-[#eae4db]/80">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className={`${eyebrowClass} mb-3`}>Aftercare</p>
              <h2 className={`${sectionTitleClass} font-light`}>{detail.aftercareTitle}</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {detail.aftercare.map((item) => (
              <span key={item} className="treatment-font-header rounded-full border border-[#cba553]/20 bg-[#f3ece0] px-5 py-3 text-sm text-[#2c2c2c] shadow-sm transition-colors duration-300 hover:bg-[#fcfaf6]">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">The Process</p>
            </div>
            <h2 className="treatment-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] text-[#2c2c2c] md:text-4xl lg:text-5xl">{detail.processTitle}</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {detail.process.map((step, index) => (
              <article key={step.title} className="group overflow-hidden rounded-lg border border-[#e0d8cc] bg-[#f5f1ea] transition duration-300 hover:-translate-y-1">
                <div className="relative h-[180px] w-full overflow-hidden lg:h-[220px]">
                  <Image src={step.image} alt={step.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                </div>
                <div className="p-4 lg:p-6">
                  <p className="mb-2 text-sm font-extrabold tracking-[2px] text-[#cba553]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="treatment-font-header mb-3 text-lg text-[#2c2c2c]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6b6b6b]">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#e8ded0] bg-[#fcfaf6] p-6 shadow-sm md:flex-row md:p-8">
            <div>
              <p className={`${eyebrowClass} mb-4 text-xs`}>{detail.consultationEyebrow}</p>
              <h2 className="treatment-font-header text-xl text-[#2c2a27] md:text-2xl">{detail.consultationTitle}</h2>
              <p className="mt-5 text-sm leading-relaxed text-[#6f675f]">{detail.consultationBody}</p>
            </div>
            <div className="w-full shrink-0 md:w-auto">
              <CalendlyButton variant="header" className="w-full md:w-auto" label="Book Appointment" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:gap-12">
          <div className="mb-8 flex max-w-4xl flex-col items-start gap-3 px-4 text-left lg:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Questions</p>
            </div>
            <h2 className="treatment-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] text-[#2c2c2c] md:text-4xl lg:text-5xl">{detail.faqTitle}</h2>
          </div>
          <div className="divide-y divide-[#16412d]/15 border-y border-[#16412d]/15">
            {detail.faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="treatment-font-header flex cursor-pointer list-none items-center justify-between gap-6 text-base font-normal leading-6 text-[#2c2c2c] md:text-lg md:leading-7">
                  <span>{item.question}</span>
                  <span className="text-xl font-light text-[#16835f] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 pr-10 text-sm leading-7 text-[#66736e]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
