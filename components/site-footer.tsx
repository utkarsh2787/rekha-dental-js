import Link from "next/link";
import { siteConfig } from "@/config/site";

const quickLinks = [
  ["Treatments", "/treatments"], ["Our Team", "/doctor"], ["Dental Tourism", "/tour"],
  ["Academy", "/academy"], ["Gallery", "/gallery"], ["Dental Plans", "/dental-plans"],
  ["Common Problems", "/common-problems"],
] as const;

const supportLinks = [
  ["About Us", "/about"], ["Contact Us", "/contact"], ["Our Centers", "/dentist-near-me"],
  ["Blogs", "/blogs"], ["Reviews", "/reviews"], ["Our Legacy", "/legacy"],
  ["Patient Safety Practices", "/patient-safety"], ["Post Treatment Care", "/post-instruction"],
] as const;

const legalLinks = [["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"], ["Warranty", "/warranty"]] as const;

const socials = [
  { href: "https://www.facebook.com/share/1EGPBCvWCz/", label: "Facebook", icon: "facebook" },
  { href: "https://www.instagram.com/rekhadentalgzb?igsh=eWJndjRibDl1bXcx", label: "Instagram", icon: "instagram" },
  { href: "https://youtube.com/@drgauravsaxena84?si=OFTPftaGOJNF22Qs", label: "YouTube", icon: "youtube" },
  { href: "https://www.practo.com/ghaziabad/clinic/rekha-dental-clinic-and-implant-center-nehru-nagar/doctors", label: "Practo", icon: "practo" },
  { href: "https://magicpin.in/Ghaziabad/Daulatpura/Healthcare/Rekha-Dental-Clinic-Ghaziabad/store/181b6a9", label: "Magicpin", icon: "magicpin" },
  { href: `${siteConfig.whatsappHref}?text=${encodeURIComponent("Hi, I'm interested in your services.")}`, label: "WhatsApp", icon: "whatsapp" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-chrome border-t border-zinc-200 bg-[#16412d] px-6 py-16 text-white md:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col space-y-6">
          <Link href="/" aria-label="Rekha Dental home" className="w-fit">
            <span className="font-serif font-display text-xl font-semibold uppercase tracking-widest text-white">Rekha Dental</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white">{siteConfig.description}</p>
          <div className="space-y-3 text-sm text-white">
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 transition-colors hover:text-[#b89b5e]"><FooterContactIcon name="phone" />{siteConfig.phoneDisplay}</a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition-colors hover:text-[#b89b5e]"><FooterContactIcon name="mail" />{siteConfig.email}</a>
          </div>
          <div className="flex flex-nowrap gap-4 pt-2">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="grid size-9 shrink-0 place-items-center rounded-full border border-white text-white transition-all duration-300 hover:bg-[#cba553]"><SocialIcon name={social.icon} /></a>)}</div>
        </div>
        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterLinks title="Support" links={supportLinks} />
        <FooterLinks title="Legal" links={legalLinks} />
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between border-t border-zinc-200 pt-8 text-[11px] uppercase tracking-widest text-white md:flex-row"><p>© {new Date().getFullYear()} Rekha Dental</p><div className="mt-4 flex items-center gap-4 md:mt-0" /></div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: ReadonlyArray<readonly [string, string]> }) {
  return <div className="flex flex-col space-y-5"><h3 className="text-sm font-medium uppercase tracking-widest text-[#b89b5e]">{title}</h3><ul className="space-y-3">{links.map(([label, href]) => <li key={href}><Link className="block text-sm text-white transition-all duration-300 hover:text-[#b89b5e]" href={href}>{label}</Link></li>)}</ul></div>;
}

function FooterContactIcon({ name }: { name: "phone" | "mail" }) {
  if (name === "phone") return <svg aria-hidden="true" className="size-[1em] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>;
  return <svg aria-hidden="true" className="size-[1em] shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg>;
}

function SocialIcon({ name }: { name: (typeof socials)[number]["icon"] }) {
  const paths = {
    facebook: { viewBox: "0 0 320 512", d: "M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8h66z" },
    instagram: { viewBox: "0 0 448 512", d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" },
    youtube: { viewBox: "0 0 576 512", d: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.1 337.6V175.2l142.7 81.2-142.7 81.2z" },
    practo: { viewBox: "0 0 512 512", d: "M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm96 152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-48z" },
    magicpin: { viewBox: "0 0 24 24", d: "M12 0a29.7 29.7 0 0 1-3.6 3.5A27.3 27.3 0 0 1 9.7 12c0 2.9-.5 5.8-1.3 8.5A29.7 29.7 0 0 1 12 24a29.7 29.7 0 0 1 3.6-3.5 27.3 27.3 0 0 1-1.3-8.5c0-2.9.5-5.8 1.3-8.5A29.7 29.7 0 0 1 12 0zm6.1 5.4a27.4 27.4 0 0 0-.8 6.6c0 2.3.3 4.5.8 6.6a30.7 30.7 0 0 1 4.4-2.4c-.4-1.3-.7-2.7-.7-4.2s.2-2.9.7-4.2a30.7 30.7 0 0 1-4.4-2.4zm-12.2 0a30.7 30.7 0 0 1-4.4 2.4c.4 1.3.7 2.7.7 4.2s-.2 2.9-.7 4.2a30.7 30.7 0 0 1 4.4 2.4c.5-2.1.8-4.3.8-6.6s-.3-4.5-.8-6.6z" },
    whatsapp: { viewBox: "0 0 448 512", d: "M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1C346.2 476.1 448 376.4 448 254c0-59.3-25.2-115-67.1-156.9zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7C49.1 322.8 39.4 288.9 39.4 254c0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" },
  } as const;

  const icon = paths[name];
  return <svg aria-hidden="true" viewBox={icon.viewBox} className="size-4 fill-current"><path d={icon.d} /></svg>;
}
