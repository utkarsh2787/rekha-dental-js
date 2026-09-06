"use client";

import { CalendarDays, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

type CalendlyButtonProps = {
  className?: string;
  label?: string;
  variant?: "gold" | "header" | "doctor" | "doctor-consultation";
  compactLabel?: string;
  showIcon?: boolean;
  iconStyle?: "outline" | "solid";
};

export function CalendlyButton({
  className = "",
  label = "Book appointment",
  variant = "gold",
  compactLabel,
  showIcon = true,
  iconStyle = "outline",
}: CalendlyButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center gap-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${variant === "doctor-consultation" ? "h-10 bg-[#16412d] px-6 text-white transition-all duration-200 active:scale-95 focus-visible:outline-[#16412d]" : variant === "doctor" ? "h-12 bg-[#1F3D2B] px-6 text-center uppercase tracking-wide text-white transition-all duration-200 hover:bg-[#173021] active:scale-[0.98] focus-visible:outline-[#1F3D2B]" : variant === "header" ? "min-h-10 rounded-lg bg-[#16412d] px-3 py-2.5 text-white hover:bg-[#093528] focus-visible:outline-[#16412d]" : "min-h-11 rounded-full bg-[var(--gold)] px-5 py-2.5 text-[var(--ink)] hover:bg-[var(--gold-light)] focus-visible:outline-[var(--gold)]"} ${className}`}
      >
        {showIcon ? iconStyle === "solid" ? <SolidCalendarIcon /> : <CalendarDays aria-hidden="true" size={17} /> : null}
        {compactLabel ? <><span className="hidden lg:inline">{label}</span><span className="lg:hidden">{compactLabel}</span></> : label}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Book an appointment"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
        >
          <div className="relative h-[88vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-[var(--ink)] text-white shadow-lg transition hover:bg-black"
              aria-label="Close appointment booking"
            >
              <X aria-hidden="true" size={20} />
            </button>
            <iframe
              title="Schedule an appointment with Rekha Dental"
              src={siteConfig.calendlyUrl}
              className="h-full w-full border-0"
              allow="fullscreen"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

function SolidCalendarIcon() {
  return <svg aria-hidden="true" className="size-3.5" fill="currentColor" viewBox="0 0 448 512"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" /></svg>;
}
