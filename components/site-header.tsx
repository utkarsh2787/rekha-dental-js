"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { primaryNavigation, siteConfig } from "@/config/site";
import { CalendlyButton } from "@/components/calendly-button";
import { EnquiryModal } from "@/components/enquiry-modal";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <header className="site-chrome sticky top-0 z-50 w-full border-b border-[#fff9f2] bg-white shadow-sm">
      <div className="flex items-center justify-between bg-[#16412d] px-3 py-3 tracking-[.2em] text-white lg:px-2">
        <a className="flex cursor-pointer items-center" href={`mailto:${siteConfig.email}`}>
          <Mail className="block text-lg lg:hidden" size={18} aria-hidden="true" />
          <span className="ml-2 block text-xs font-medium lg:hidden">Rekha Dental</span>
          <span className="hidden text-[15px] font-medium tracking-[.2em] lg:block">{siteConfig.email}</span>
        </a>
        <a className="flex items-center gap-1 text-xs font-medium transition-colors hover:text-[#cba553] lg:text-[15px] lg:tracking-[.2em]" href={siteConfig.phoneHref}>
          <Phone size="1em" aria-hidden="true" /> {siteConfig.phoneDisplay}
        </a>
      </div>

      <div className="flex h-14 items-center justify-between bg-[#fffffe] px-4 lg:h-[72px] lg:px-10">
        <Link href="/" aria-label="Rekha Dental home" className="shrink-0">
          <Image src="/images/logo.png" alt="Rekha Dental" width={180} height={70} className="h-10 w-32 lg:h-12 lg:w-36" priority />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-10 2xl:flex">
          {primaryNavigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="text-base font-medium text-gray-500 transition hover:text-[#16412d]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 2xl:hidden">
          <button type="button" onClick={() => setEnquiryOpen(true)} aria-label="Enquiry" className="flex size-10 items-center justify-center rounded-full bg-[#16412d] text-white transition-all duration-300 active:scale-95">
            <EnquiryIcon />
          </button>
          <CalendlyButton variant="header" label="Book Appointment" compactLabel="Book" iconStyle="solid" className="!font-medium" />
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="cursor-pointer text-xl text-[#16412d]"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <MenuIcon close={menuOpen} />
          </button>
        </div>

        <div className="hidden items-center gap-3 2xl:flex">
          <button type="button" onClick={() => setEnquiryOpen(true)} className="h-10 border-2 border-[#16412d] px-5 text-sm font-semibold text-[#16412d] transition hover:bg-[#16412d] hover:text-white">Enquiry</button>
          <CalendlyButton variant="header" label="Book Appointment" showIcon={false} className="!h-10 !min-h-0 !rounded-none !px-6 !py-0" />
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-navigation" className="absolute inset-x-0 top-full border-t border-black/10 bg-white px-5 pb-6 pt-3 shadow-xl">
          <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-[#16412d] hover:bg-black/5">
                {item.label}
              </Link>
            ))}
            <CalendlyButton variant="header" className="mt-3 w-full" label="Book Appointment" />
          </nav>
        </div>
      ) : null}
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </header>
  );
}

function EnquiryIcon() {
  return <svg aria-hidden="true" className="size-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M3 4v12c0 1.103.897 2 2 2h3.5l3.5 4 3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm5.707 4.293L11 10.586l4.793-4.793 1.414 1.414L11 13.414 7.293 9.707l1.414-1.414z" /></svg>;
}

function MenuIcon({ close }: { close: boolean }) {
  if (close) return <svg aria-hidden="true" className="size-[1em]" fill="currentColor" viewBox="0 0 352 512"><path d="M242.7 256 342.8 155.9c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.4c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z" /></svg>;
  return <svg aria-hidden="true" className="size-[1em]" fill="currentColor" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>;
}
