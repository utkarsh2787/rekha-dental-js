import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, BadgeCheck, CalendarDays, Check, Heart, HeartHandshake, Mail, MapPin, MessageCircle, Phone, ScanLine, ScrollText, ShieldCheck } from "lucide-react";
import { AboutStoryCarousel } from "@/components/about-story-carousel";
import { AcademyPage } from "@/components/academy-page";
import { AcademyCoursePage } from "@/components/academy-course-page";
import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { DoctorPage } from "@/components/doctor-page";
import { DentalPlansPage as DentalPlansExperiencePage } from "@/components/dental-plans-page";
import { GalleryPage as GalleryExperiencePage } from "@/components/gallery-page";
import { LegalPage } from "@/components/legal-page";
import { BlogPage } from "@/components/blog-page";
import { BlogArticlePage } from "@/components/blog-article-page";
import { siteConfig } from "@/config/site";
import { ContentPage } from "@/content/pages";
import { reviews } from "@/content/home";
import { treatmentListingItems } from "@/content/treatments-listing";
import { TreatmentDetailPage } from "@/components/treatment-detail-page";
import { TourismPage as TourismExperiencePage } from "@/components/tourism-page";
import { PendingPageView } from "@/components/pending-pages";

const concernCards = [
  ["Tooth Decay", "Decay may begin quietly and progress to sensitivity or pain."], ["Bleeding Gums", "Bleeding can be an early sign that the gums need professional care."],
  ["Chronic Bad Breath", "Persistent bad breath can have dental as well as general-health causes."], ["Tooth Sensitivity", "Sensitivity to hot, cold or sweet food deserves a precise diagnosis."],
  ["Severe Tooth Infection", "Swelling, severe pain or fever requires prompt dental attention."], ["Crooked or Misaligned Teeth", "Modern braces and aligners can improve alignment and bite."],
  ["Wisdom Tooth Pain", "Impacted or inflamed wisdom teeth should be assessed early."], ["Teeth Grinding", "A custom splint may protect teeth and ease jaw strain."],
  ["Missing Teeth", "Implants, bridges and dentures can restore function and confidence."], ["Yellow or Stained Teeth", "Professional options can brighten teeth safely and naturally."],
] as const;

const patientNames = ["Prateek Kumar", "Jyoti Tyagi", "Poornima Gautam", "Sandeep Mandal", "Amit Kumar", "Sweaty Mandal", "Munni Yadav", "Azad Sirohi", "Samriddhi", "Harshit Singh"];

function SectionIntro({ eyebrow, title, text, align = "center" }: { eyebrow: string; title: string; text?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="home-kicker">{eyebrow}</p><h2 className="home-section-title mt-5">{title}</h2>{text ? <p className="home-lead mt-5">{text}</p> : null}</div>;
}

function FullImageBanner({ page, object = "fill" }: { page: ContentPage; object?: "fill" | "cover" }) {
  if (!page.heroImage) return null;
  return <section className="relative min-h-[40vh] w-full overflow-hidden sm:min-h-[50vh] lg:min-h-[85vh]"><h1 className="sr-only">{page.title}</h1><Image src={page.heroImage} alt={page.imageAlt ?? page.title} fill priority sizes="100vw" className={`${object === "fill" ? "object-fill" : "object-cover"} animate-page-zoom`} /></section>;
}

function ConsultationSection() {
  return <section className="bg-[#eae4db] px-5 py-20 text-center sm:py-24"><SectionIntro eyebrow="Begin" title="Your consultation with us" text="A private, unhurried first visit. Comprehensive diagnostics. A treatment plan explained clearly and designed around you." /><CalendlyButton variant="header" className="mt-8" label="Book Appointment" /></section>;
}

function FaqSection({ items }: { items: NonNullable<ContentPage["faq"]> }) {
  return <section className="bg-[#eae4db] px-5 py-20 sm:py-24"><SectionIntro eyebrow="FAQ" title="Quietly answered." /><div className="mx-auto mt-12 max-w-[760px] divide-y divide-[#16412d]/15 border-y border-[#16412d]/15">{items.map(item => <details key={item.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium"><span>{item.question}</span><span className="text-xl font-light text-[#16835f]">+</span></summary><p className="mt-4 pr-10 text-sm leading-7 text-[#66736e]">{item.answer}</p></details>)}</div></section>;
}

function TreatmentCards() {
  return <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">{treatmentListingItems.map((item,index)=><article key={item.slug} className="group flex flex-col overflow-hidden rounded-xl bg-[#f5f1ea] transition-all duration-700 ease-out">
    <Link href={`/treatments/${item.slug}`} className="relative block h-[200px] w-full shrink-0 overflow-hidden lg:h-[260px]">
      <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
    </Link>
    <div className="p-4 lg:p-6">
      <p className="mb-2 text-xs font-semibold tracking-[2px] text-[#b89b5e] lg:mb-3">{String(index+1).padStart(2,"0")}</p>
      <h3 className="mb-3 font-display text-xl font-semibold leading-snug text-[#2c2c2c] md:text-2xl">{item.title}</h3>
      <p className="line-clamp-1 text-sm leading-relaxed text-[#6b6b6b] md:text-base">{item.description}</p>
    </div>
    <div className="mt-auto px-6 pb-6">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 pr-2">
          <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#b89b5e]">Starts from*</p>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <p className="text-xl font-bold text-[#16412d]">₹{item.currentPrice}</p>
            <p className="text-sm text-gray-400 line-through">₹{item.previousPrice}</p>
          </div>
        </div>
        <CalendlyButton variant="header" label="Book Appointment" compactLabel="Book" className="shrink-0" />
      </div>
    </div>
  </article>)}</div>;
}

function TreatmentsPage({ page }: { page: ContentPage }) {
  return <div className="bg-[#eae4db]">
    <section className="w-full">
      <div className="relative min-h-[40vh] w-full overflow-hidden sm:min-h-[50vh] lg:min-h-[85vh]">
        <Image src="/images/treatments/hero.jpeg" alt={page.title} fill priority sizes="100vw" className="animate-page-zoom object-fill" />
        <div className="absolute inset-0 bg-teal-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 text-white sm:px-6 lg:px-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#b89b5e]" />
              <p className="whitespace-nowrap text-sm font-extrabold uppercase tracking-[3px] text-[#b89b5e] lg:text-lg">Treatments</p>
              <span className="h-[3px] w-8 bg-[#b89b5e]" />
            </div>
            <h1 className="max-w-3xl font-display text-3xl leading-tight md:text-5xl lg:text-6xl">{page.title}</h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 md:text-base lg:text-lg">Each treatment is led by a doctor whose career is devoted to that discipline.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#eae4db] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10"><TreatmentCards/></div>
    </section>
    <div>
      <div className="flex flex-col items-center justify-center pb-6 lg:mt-8">
        <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
            <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Begin</p>
          </div>
          <h2 className="mt-2 max-w-[19rem] font-display text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:max-w-2xl md:text-4xl lg:text-5xl">Your consultation with us</h2>
          <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555] md:text-lg">A private, unhurried first visit. Comprehensive 3D diagnostics. A treatment plan designed and delivered by one pair of hands.</p>
        </div>
        <div className="relative"><CalendlyButton variant="header" className="!h-10 !min-h-10 !rounded-none !px-6 !py-0" label="Book Appointment" showIcon={false} /></div>
      </div>
    </div>
  </div>;
}

function GalleryPage() {
  return <GalleryExperiencePage />;
}

function ReviewsPage({ page }: { page: ContentPage }) {
  const platforms=[["Google Reviews","4.9"],["Practo","4.5"],["1mg","4.9"]];
  return <div className="bg-[#eae4db]"><header className="px-5 py-16 text-center sm:py-20"><p className="home-kicker">Patient Reviews</p><h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">{page.title}</h1><p className="home-lead mx-auto mt-5 max-w-2xl">{page.intro}</p><div className="mx-auto mt-12 grid max-w-[900px] gap-4 md:grid-cols-3">{platforms.map(([name,rating])=><div key={name} className="rounded-xl bg-[#fffefa] p-7 shadow-sm"><h2 className="font-display text-2xl font-semibold">{name}</h2><p className="mt-4 text-5xl font-semibold text-[#16412d]">{rating}</p><p className="mt-3 tracking-[.18em] text-[#c99b56]">★★★★★</p></div>)}</div></header><section className="bg-[#f6f1e8] px-5 py-16 sm:py-20"><SectionIntro eyebrow="Patient Voices" title="Real Stories. Real Smiles."/><div className="mx-auto mt-12 grid max-w-[1120px] gap-5 md:grid-cols-2 lg:grid-cols-3">{patientNames.map((name,index)=>{const review=reviews[index%reviews.length];return <figure key={name} className="rounded-xl bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"><div className="text-[#c99b56]">★★★★★</div><blockquote className="mt-5 text-sm leading-7 text-[#66736e]">“{review.quote}”</blockquote><figcaption className="mt-6 font-display text-xl font-semibold">{name}</figcaption></figure>})}</div></section><ConsultationSection/></div>;
}

function CommonProblemsPage({ page }: { page: ContentPage }) {
  return <div className="bg-[#eae4db]"><header className="px-5 py-16 text-center sm:py-20"><p className="home-kicker">{page.eyebrow}</p><h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">{page.title}</h1><p className="home-lead mx-auto mt-5 max-w-2xl">{page.intro}</p></header><section className="px-5 pb-20"><div className="mx-auto grid max-w-[1120px] gap-5 sm:grid-cols-2 lg:grid-cols-3">{concernCards.map(([title,text],index)=><article key={title} className="group overflow-hidden rounded-xl bg-[#fffefa] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"><div className="relative aspect-[1.45] overflow-hidden bg-[#e7ded1]"><Image src={`/images/concerns/concern-${String(index+1).padStart(2,"0")}.png`} alt={title} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105"/></div><div className="p-6"><h2 className="font-display text-2xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-[#66736e]">{text}</p><CalendlyButton variant="header" className="mt-5" label="Ask a dentist"/></div></article>)}</div></section><FaqSection items={[{question:"When should I arrange a dental assessment?",answer:"Book promptly when pain, swelling, bleeding or sensitivity persists, worsens or affects eating and sleep."},{question:"Can symptoms be diagnosed online?",answer:"Online information can guide you, but only an examination and any necessary imaging can confirm a dental diagnosis."}]}/></div>;
}

function ContactPage({ page }: { page: ContentPage }) {
  const clinics = [
    ["Rekha Dental — Kotgaon", "House No 622, First Floor, Satyam Enclave, New Kotgaon, Opp Rakesh Marg, Kotgaon Village, Daulatpura, Ghaziabad, Uttar Pradesh 201001"],
    ["Rekha Dental — Raj Nagar Extension", "A-007 Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Vikas Nagar, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017"],
  ];
  return <div className="bg-[#eae4db]"><header className="px-5 py-16 text-center sm:py-20"><p className="home-kicker">Contact Us</p><h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">{page.title}</h1><p className="home-lead mx-auto mt-5 max-w-2xl">For appointments, consultations, or international inquiries, our concierge team is available throughout the week.</p></header><section className="px-5 pb-20"><div className="mx-auto grid max-w-[1120px] gap-7 lg:grid-cols-[.85fr_1.15fr]"><div className="rounded-2xl bg-[#194836] p-8 text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d0ad6c]">Contact Information</p><h2 className="mt-4 font-display text-4xl">Get in touch</h2><div className="mt-8 grid gap-6 text-sm text-white/75"><a href={siteConfig.phoneHref} className="flex gap-3 hover:text-white"><Phone size={19} className="text-[#d0ad6c]"/>{siteConfig.phoneDisplay}</a><a href={`mailto:${siteConfig.email}`} className="flex gap-3 hover:text-white"><Mail size={19} className="text-[#d0ad6c]"/>{siteConfig.email}</a><a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-white"><MessageCircle size={19} className="text-[#d0ad6c]"/>WhatsApp the clinic</a><p className="flex gap-3"><CalendarDays size={19} className="shrink-0 text-[#d0ad6c]"/>Mon–Sat · 9:30 AM–2:30 PM & 5 PM–8 PM<br/>Sun · 9:30 AM–2:30 PM</p></div><CalendlyButton variant="header" className="mt-8" label="Book Appointment"/></div><ContactForm/></div></section><section className="bg-[#f6f1e8] px-5 py-16 sm:py-20"><SectionIntro eyebrow="Locations" title="Visit Our Clinics" text="Experience advanced dental care at our modern clinics in Ghaziabad, designed for comfort, accessibility, and precision-driven treatment."/><div className="mx-auto mt-10 grid max-w-[1050px] gap-5 md:grid-cols-2">{clinics.map(([name,address])=><article key={name} className="rounded-xl bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"><MapPin className="text-[#16835f]"/><h2 className="mt-5 font-display text-3xl font-semibold">{name}</h2><p className="mt-4 text-sm leading-7 text-[#66736e]">{address}</p><a href={siteConfig.phoneHref} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#16835f]">Call clinic <ArrowRight size={14}/></a></article>)}</div></section></div>;
}

function DentistLocations({ page }: { page: ContentPage }) {
  const locations=[{title:"Rekha Dental",subtitle:"Modern dentistry with a personal touch.",href:"/dentist-near-me/ghaziabad",image:"/images/clinic-reception.jpg"},{title:"Rekha Dental",subtitle:"Advanced implant & laser dentistry.",href:"/dentist-near-me/raj-nagar",image:"/images/clinic-aligner.jpg"}];
  return <div className="bg-[#eae4db]"><header className="px-5 py-16 text-center sm:py-20"><p className="home-kicker">Reserve your visit</p><h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">{page.title}</h1></header><section className="px-5 pb-20"><div className="mx-auto grid max-w-[1000px] gap-6 md:grid-cols-2">{locations.map(item=><Link key={item.href} href={item.href} className="group overflow-hidden rounded-2xl bg-[#fffefa] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative aspect-[1.55] overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105"/></div><div className="p-7"><h2 className="font-display text-3xl font-semibold">{item.title}</h2><p className="mt-3 text-sm text-[#66736e]">{item.subtitle}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#16835f]">Choose centre <ArrowRight size={14}/></span></div></Link>)}</div><div className="mx-auto mt-12 grid max-w-[900px] gap-4 md:grid-cols-3">{["Choose a Centre","Select Date & Time","Confirm Appointment"].map((label,index)=><div key={label} className="rounded-xl bg-white p-6 text-center shadow-sm">{index===2?<BadgeCheck className="mx-auto text-[#16835f]"/>:<CalendarDays className="mx-auto text-[#16835f]"/>}<h3 className="mt-4 font-display text-xl font-semibold">{label}</h3></div>)}</div></section></div>;
}

function GuidancePage({ page }: { page: ContentPage }) {
  const names=["Root Canal Treatment (RCT)","Dental Implants","Crowns, Inlays & Onlays","Dental Veneers","Dental Fillings","Clear Aligners","Orthodontic Braces","Dental Bridges","Tooth Jewellery","Laser Procedures","Tooth Extraction","Scaling & Polishing"];
  return <div className="bg-[#eae4db]"><header className="px-5 py-16 text-center sm:py-20"><p className="home-kicker">{page.eyebrow}</p><h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">{page.path==="warranty"?"We've Got You Covered":page.title}</h1><p className="home-lead mx-auto mt-5 max-w-2xl">{page.intro}</p></header><section className="px-5 pb-20"><div className="mx-auto grid max-w-[1120px] gap-4 sm:grid-cols-2 lg:grid-cols-3">{names.map((name,index)=><article key={name} className="group rounded-xl bg-[#fffefa] p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"><span className="grid size-10 place-items-center rounded-full bg-[#eaf1e8] text-[#16412d]">{index+1}</span><h2 className="mt-6 font-display text-2xl font-semibold">{name}</h2><p className="mt-4 text-sm leading-7 text-[#66736e]">Follow the personalised instructions provided by your clinician. Contact the clinic whenever recovery differs from what you were advised to expect.</p></article>)}</div></section></div>;
}

function SafetyPage({ page }: { page: ContentPage }) {
  const groups = [
    ["Comfortable care designed around you.", ["Comfort-First Experience", "Transparent Treatment Planning", "Gentle & Compassionate Care", "Family-Friendly Environment"]],
    ["Safety and hygiene without compromise.", ["Medical-Grade Instrument Sterilization", "Single-Use Disposable Materials", "Operatory Disinfection Protocols", "Continuous Infection Control"]],
    ["Precision dentistry powered by innovation.", ["Digital Robotic Scanning", "3D Diagnostic Imaging", "Laser-Assisted Dentistry", "Technology-Driven Treatment Planning"]],
  ] as const;
  return <div className="bg-[#eae4db]"><header className="px-5 py-16 text-center sm:py-20"><p className="home-kicker">{page.eyebrow}</p><h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold sm:text-6xl">{groups[0][0]}</h1><p className="home-lead mx-auto mt-5 max-w-2xl">{page.intro}</p></header>{groups.map(([title,items],groupIndex)=><section key={title} className={`px-5 py-16 ${groupIndex%2?"bg-[#f6f1e8]":""}`}><SectionIntro eyebrow={groupIndex===0?"Patient Comfort":groupIndex===1?"Safety Protocols":"Advanced Technology"} title={title}/><div className="mx-auto mt-10 grid max-w-[1100px] gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(item=><article key={item} className="rounded-xl bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"><span className="grid size-10 place-items-center rounded-full bg-[#eaf1e8] text-[#16412d]">{groupIndex===2?<ScanLine size={18}/>:<ShieldCheck size={18}/>}</span><h2 className="mt-6 font-display text-xl font-semibold">{item}</h2><p className="mt-4 text-sm leading-6 text-[#66736e]">Every detail is built into our daily clinical workflow and checked by the care team.</p></article>)}</div></section>)}</div>;
}

function TourismPage({ page }: { page: ContentPage }) {
  if (page.path === "tour") return <TourismExperiencePage />;
  const benefits = ["70% More Affordable", "Exceptionally Trained", "Advanced Technology", "ISO Hygiene Standards", "English-Speaking Team", "Compressed Timelines"];
  const steps = ["Consultation", "Treatment Plan", "Travel", "Treatment", "Recovery", "Follow-up"];
  const procedures = ["Teeth Cleaning", "Scaling & Root Planing", "Root Canal Treatment", "Composite Filling", "Regular Tooth Extraction", "Surgical Tooth Extraction", "Wisdom Tooth Extraction"];
  return <div className="bg-[#eae4db]"><header className="relative overflow-hidden bg-[#194836] px-5 py-24 text-center text-white sm:py-32"><Image src="/images/clinic-reception.jpg" alt="Dental tourism at Rekha Dental" fill priority sizes="100vw" className="object-cover opacity-20"/><div className="relative"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d0ad6c]">Dental Tourism</p><h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-[1.05] sm:text-7xl">The world comes to India for dentistry.</h1><p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70">{page.intro}</p><CalendlyButton variant="header" className="mt-8" label="Plan Your Visit"/></div></header><section className="px-5 py-16 sm:py-20"><SectionIntro eyebrow="Why India" title="A passport to a healthier smile."/><div className="mx-auto mt-10 grid max-w-[1100px] gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map((item,index)=><article key={item} className="rounded-xl bg-[#fffefa] p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"><span className="grid size-10 place-items-center rounded-full bg-[#eaf1e8] text-[#16412d]">0{index+1}</span><h2 className="mt-6 font-display text-2xl font-semibold">{item}</h2><p className="mt-4 text-sm leading-7 text-[#66736e]">International patients receive clear guidance, transparent planning and coordinated appointments.</p></article>)}</div></section><section className="bg-[#f6f1e8] px-5 py-16 sm:py-20"><SectionIntro eyebrow="Treatment Guide" title="Premium dental care at a fraction of the cost."/><div className="mx-auto mt-10 grid max-w-[1000px] gap-3 sm:grid-cols-2 lg:grid-cols-3">{procedures.map(item=><div key={item} className="flex items-center gap-3 rounded-xl bg-white p-5 text-sm font-semibold"><Check size={17} className="text-[#16835f]"/>{item}</div>)}</div></section><section className="px-5 py-16 sm:py-20"><SectionIntro eyebrow="Your Journey" title="Six quiet steps. One trip."/><div className="mx-auto mt-10 grid max-w-[1120px] gap-4 sm:grid-cols-2 lg:grid-cols-6">{steps.map((step,index)=><article key={step} className="rounded-xl bg-[#fffefa] p-6 text-center shadow-sm"><span className="mx-auto grid size-10 place-items-center rounded-full bg-[#194836] text-sm text-white">{index+1}</span><h2 className="mt-5 font-display text-lg font-semibold">{step}</h2></article>)}</div></section><ConsultationSection/></div>;
}

function StandardPage({ page }: { page: ContentPage }) {
  if (page.path === "about") return <AboutPage page={page}/>;
  if (page.path === "dental-plans") return <DentalPlansExperiencePage/>;
  if (page.path === "privacy-policy") return <LegalPage variant="privacy"/>;
  if (page.path === "terms-of-service") return <LegalPage variant="terms"/>;
  if (page.path === "patient-safety") return <SafetyPage page={page}/>;
  if (page.path === "tour") return <TourismPage page={page}/>;
  if (page.path.startsWith("appointment/")) return <AppointmentPage page={page}/>;
  if (["post-instruction","post-treatment-care","warranty"].includes(page.path)) return <GuidancePage page={page}/>;
  return <div className="bg-[#eae4db]">{page.heroImage?<FullImageBanner page={page}/>:<header className="px-5 py-16 text-center sm:py-20"><p className="home-kicker">{page.eyebrow}</p><h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">{page.title}</h1><p className="home-lead mx-auto mt-5 max-w-2xl">{page.intro}</p></header>}{page.image&&!page.heroImage?<section className="px-5 pb-8"><div className="group relative mx-auto aspect-[2.2] max-w-[1120px] overflow-hidden rounded-2xl"><Image src={page.image} alt={page.imageAlt??page.title} fill sizes="100vw" className="object-cover transition duration-700 group-hover:scale-105"/></div></section>:null}{page.highlights?.length?<section className="border-y border-[#16412d]/10 bg-[#f6f1e8] px-5"><div className="mx-auto grid max-w-[1050px] md:grid-cols-3">{page.highlights.map(item=><div key={item} className="flex items-center justify-center gap-3 px-5 py-7 text-sm font-semibold"><Check size={17} className="text-[#16835f]"/>{item}</div>)}</div></section>:null}<section className="px-5 py-16 sm:py-20"><div className="mx-auto grid max-w-[1050px] gap-6 md:grid-cols-2">{page.sections?.map((section,index)=><article key={section.title} className="rounded-xl bg-[#fffefa] p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"><span className="text-xs font-bold uppercase tracking-[.18em] text-[#c99b56]">0{index+1}</span><h2 className="mt-5 font-display text-3xl font-semibold">{section.title}</h2><p className="mt-5 text-sm leading-7 text-[#66736e]">{section.body}</p></article>)??<article className="mx-auto max-w-2xl text-center md:col-span-2"><h2 className="font-display text-4xl font-semibold">Care designed around you.</h2><p className="home-lead mt-5">Our team will listen, assess and explain the right next step clearly.</p></article>}</div></section><ConsultationSection/></div>;
}

function AboutPage({ page }: { page: ContentPage }) {
  const journey = [
    { year: "2007", title: "The Beginning", image: "/images/about/journey/journey-01.jpeg", body: "Rekha Dental was founded with a vision to make quality dental care accessible through compassion, integrity, and clinical excellence." },
    { year: "2010", title: "Digital X-Ray", image: "/images/about/journey/journey-02.png", body: "Digital X-ray technology was introduced, enabling faster diagnostics, lower radiation exposure, and more accurate treatment planning." },
    { year: "2012", title: "Implants & Full Mouth Rehabilitation", image: "/images/about/journey/journey-03.jpeg", body: "Dental implant placement and full mouth rehabilitation services were introduced, providing advanced solutions for restoring smiles and oral function." },
    { year: "2013", title: "Rotary Endodontics", image: "/images/about/journey/journey-04.png", body: "Modern rotary endodontic technology was adopted to deliver faster, more precise, and comfortable root canal treatments." },
    { year: "2017", title: "Laser Dentistry", image: "/images/about/journey/journey-05.jpeg", body: "Dental laser technology was introduced, allowing minimally invasive procedures with improved comfort, precision, and quicker recovery." },
    { year: "2020–2022", title: "Digital Dentistry", image: "/images/about/journey/journey-06.png", body: "The clinic expanded its digital capabilities with CBCT imaging in 2020 and embraced digital dentistry in 2022, enhancing diagnosis, treatment planning, and patient outcomes." },
    { year: "Present", title: "Our Promise", image: "/images/about/journey/journey-07.jpeg", body: "By combining modern dental technology with a personal touch, Rekha Dental continues to build lasting relationships with patients and families. Every day, we work toward one purpose: bringing healthier smiles, greater confidence, and better quality of life to our community—one patient at a time." },
  ] as const;
  const values = [
    { title: "Trust", Icon: HeartHandshake, body: "We build lasting relationships through honest communication, transparent treatment planning, and consistent clinical excellence that patients can rely on." },
    { title: "Respect", Icon: Heart, body: "Every patient is treated with dignity, empathy, and understanding. We listen carefully, value individual needs, and create a welcoming environment for all." },
    { title: "Integrity", Icon: ShieldCheck, body: "Our recommendations are guided by what is best for the patient. We uphold the highest ethical standards in every diagnosis, treatment, and interaction." },
    { title: "Excellence", Icon: Award, body: "We continuously pursue clinical excellence through advanced technology, ongoing education, and a commitment to delivering exceptional dental care." },
  ] as const;
  const beginnings = [
    { title: "Where the Journey Began", image: "/images/about/beginnings/beginning-01.jpeg", body: "The original reception and patient waiting area that marked the beginning of Rekha Dental's commitment to compassionate and accessible dental care." },
    { title: "Personalized Patient Consultations", image: "/images/about/beginnings/beginning-02.jpeg", body: "A dedicated consultation space where treatment planning, patient education, and personalized care discussions formed the foundation of every successful treatment." },
    { title: "Advancing Clinical Excellence", image: "/images/about/beginnings/beginning-03.jpeg", body: "One of the early treatment rooms equipped to provide comprehensive dental procedures, reflecting the clinic's focus on quality care and continuous growth." },
    { title: "Building a Legacy of Trust", image: "/images/about/beginnings/beginning-04.jpeg", body: "An early clinical workspace that served hundreds of patients and helped establish Rekha Dental as a trusted name in modern dentistry." },
  ] as const;

  const heading = (eyebrow: string, title: string, text?: string) => (
    <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
        <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{eyebrow}</p>
      </div>
      <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">{text}</p> : null}
    </div>
  );

  return <div className="bg-[#eae4db]">
    <FullImageBanner page={page}/>

    <section className="overflow-hidden bg-[#eae4db] pt-10 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:gap-16">
        <AboutStoryCarousel/>
        <div className="flex flex-col justify-center pb-10 md:pb-0">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
            <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Our Story</p>
          </div>
          <h1 className="font-display text-2xl font-semibold leading-tight text-[#2c2c2c] md:text-3xl lg:text-4xl">A Legacy of Trusted Dental Care</h1>
          <p className="mt-5 text-sm leading-relaxed text-[#6b6b6b] md:text-base">For over 19 years, Rekha Dental has been providing advanced digital dental care with a focus on quality, comfort, and honesty. What started as a single clinic has grown into two modern centers trusted by thousands of patients.</p>
          <p className="mt-4 text-sm leading-relaxed text-[#6b6b6b] md:text-base">Our team of specialists provides comprehensive dental solutions in a calm, welcoming environment designed to put patients at ease. While we have expanded over the years, our philosophy remains unchanged: every patient deserves personalized attention, uncompromising quality, and a smile they can be proud of.</p>
        </div>
      </div>
    </section>

    <section className="bg-[#eae4db] py-10 lg:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {heading("Our Journey", "Years of trusted dental excellence.")}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:gap-7">
          {journey.map((item) => <article key={item.title} className="group rounded-lg border border-[#ded5c8] bg-[#f5f1ea] p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:p-5">
            <div className="relative h-[200px] w-full overflow-hidden rounded-lg sm:h-[220px] lg:h-[240px]">
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"/>
            </div>
            <div className="px-1 pb-2 pt-6">
              <p className="font-display text-base font-bold tracking-wide text-[#b88a44] sm:text-lg">{item.year}</p>
              <h3 className="mt-3 font-display text-xl font-normal leading-tight text-[#2c2c2c] sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6b6b6b] sm:text-[15px] sm:leading-7">{item.body}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="bg-[#eae4db] pb-10">
      {heading("Our Values", "The principles that guide our care.", "Trust, compassion, integrity, and excellence form the foundation of every patient experience at Rekha Dental.")}
      <div className="mx-6 my-10 grid grid-cols-1 gap-6 md:mx-10 md:grid-cols-2 lg:my-20 xl:grid-cols-4">
        {values.map(({ title, Icon, body }, index) => <article key={title} className="group relative overflow-hidden rounded-2xl border border-[#e8ded0] bg-[#fcfaf6] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d9c5a1] hover:shadow-[0_25px_60px_rgba(31,29,24,0.07)]">
          <div className="absolute right-6 top-5 font-display text-4xl leading-none text-[#ece4d8] transition duration-500 group-hover:text-[#e1d4bf] lg:text-6xl">0{index + 1}</div>
          <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-[#e7ddd0] bg-[#f3ece1] text-2xl text-[#163828] transition-all duration-500 lg:size-16"><Icon size={24}/></div>
          <div className="relative z-10 mt-4 lg:mt-8"><h3 className="font-display text-xl font-semibold leading-tight text-[#2c2a27] lg:text-2xl">{title}</h3><p className="mt-5 text-sm leading-6 text-[#66625c] md:text-base lg:leading-7">{body}</p></div>
          <div className="absolute -bottom-10 -right-10 size-40 rounded-full bg-[#efe5d7] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100"/>
        </article>)}
      </div>
    </section>

    <section className="bg-[#eae4db] pb-10">
      <div className="mx-auto max-w-6xl px-6">
        {heading("Accreditations", "Recognized by those who set the standard.")}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16">
          {Array.from({ length: 4 }, (_, index) => <article key={index} className="relative flex flex-col items-center">
            <div className="absolute -left-3 -top-3 z-10 rounded-full bg-white p-2 text-[#cba553] shadow-md"><ScrollText size={38}/></div>
            <div className="relative h-[250px] w-full overflow-hidden rounded-xl border border-[#e0d8cc] bg-white shadow-sm lg:h-[300px]">
              <Image src={`/images/about/certificates/certificate-${String(index + 1).padStart(2, "0")}.jpeg`} alt={`Certificate ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-5"/>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="bg-[#eae4db] py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {heading("Our Beginnings", "From humble beginnings to trusted excellence.", "A glimpse into the early years of Rekha Dental, where dedication, patient trust, and a passion for dentistry laid the foundation for the clinic we proudly are today.")}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:gap-10">
          {beginnings.map((item, index) => <article key={item.title} className="group overflow-hidden rounded-xl bg-[#f5f1ea] transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-[260px] w-full overflow-hidden lg:h-[340px]"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"/></div>
            <div className="p-5 lg:p-7"><p className="mb-3 text-xs font-extrabold uppercase tracking-[3px] text-[#b89b5e]">Chapter {String(index + 1).padStart(2, "0")}</p><h3 className="mb-3 font-display text-2xl text-[#2c2c2c]">{item.title}</h3><p className="text-sm leading-relaxed text-[#6b6b6b]">{item.body}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  </div>;
}

function AppointmentPage({ page }: { page: ContentPage }) {
  return <div className="bg-[#eae4db]"><section className="px-5 py-20 text-center sm:py-28"><p className="home-kicker">Reserve your visit</p><h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">{page.title}</h1><p className="home-lead mx-auto mt-6 max-w-2xl">{page.intro}</p><CalendlyButton variant="header" className="mt-9" label="Select Date & Time"/><div className="mx-auto mt-14 grid max-w-[900px] gap-4 md:grid-cols-3">{["Choose a Centre","Select Date & Time","Confirm Appointment"].map((item,index)=><article key={item} className="rounded-xl bg-[#fffefa] p-7 shadow-sm"><span className="mx-auto grid size-10 place-items-center rounded-full bg-[#eaf1e8] text-[#16412d]">{index+1}</span><h2 className="mt-5 font-display text-xl font-semibold">{item}</h2></article>)}</div></section></div>;
}

function ListingPage({ page }: { page: ContentPage }) {
  if (page.path === "treatments") return <TreatmentsPage page={page}/>;
  if (page.path === "academy") return <AcademyPage/>;
  if (page.path === "doctor") return <DoctorPage/>;
  if (page.path === "gallery") return <GalleryPage/>;
  if (page.path === "reviews") return <ReviewsPage page={page}/>;
  if (page.path === "blogs") return <BlogPage/>;
  if (page.path === "common-problems") return <CommonProblemsPage page={page}/>;
  if (page.path === "dentist-near-me") return <DentistLocations page={page}/>;
  return null;
}

export function ContentPageView({ page }: { page: ContentPage }) {
  if (["dentist-near-me", "dentist-near-me/ghaziabad", "dentist-near-me/raj-nagar", "common-problems", "contact", "legacy", "patient-safety", "payment", "post-instruction", "reviews", "warranty"].includes(page.path)) return <PendingPageView path={page.path} />;
  if (page.kind === "treatment") return <TreatmentDetailPage page={page}/>;
  if (page.kind === "course") return <AcademyCoursePage slug={page.path.split("/").at(-1) ?? ""}/>;
  if (page.kind === "listing") return <ListingPage page={page}/>;
  if (page.kind === "contact") return <ContactPage page={page}/>;
  if (page.kind === "article") return <BlogArticlePage path={page.path}/>;
  return <StandardPage page={page}/>;
}
