import Image from "next/image";
import type { ReactNode } from "react";
import { CalendlyButton } from "@/components/calendly-button";
import { siteConfig } from "@/config/site";
import { reviews } from "@/content/home";

type Doctor = {
  role: string;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  location: string;
  reviewCount: string;
  bio: ReactNode;
  eyebrow: "CREDENTIALS" | "EXPERTISE";
  statement: string;
  statementBody: string;
  qualifications: readonly string[];
  areas: readonly string[];
  memberships: readonly string[];
};

const doctors: readonly Doctor[] = [
  {
    role: "Director",
    name: "Dr. Gaurav Saxena",
    specialty: "Chief Dental Surgeon & Implantologist",
    image: "/images/doctor-page/dr-gaurav-saxena.png",
    experience: "19+ Years of Practice",
    location: "Ghaziabad, Uttar Pradesh",
    reviewCount: "1,200+ patient reviews",
    bio: (
      <>
        Dr. Gaurav Saxena completed his <strong>BDS</strong> from <strong>DJ College of Dental Sciences &amp; Research, Modinagar</strong> in 2007 and <strong>MDS</strong> from the <strong>Institute of Dental Sciences &amp; Technologies.</strong> With more than 19 years of clinical experience, he specializes in Root Canal Treatment, Dental Implants, and Crown &amp; Bridge Procedures. He has been conducting implant and laser courses across Delhi NCR and different states across India. Renowned for his calm and patient-friendly approach, Dr. Gaurav is also a distinguished member of the <strong>Indian Dental Association (IDA), IAOMR, and ISOI</strong>. He has additionally received advanced training in Lasers and Esthetic Fillings from <strong>Germany</strong>. He attended one-day Zimmer Implantology course in <strong>Vietnam</strong> and implant course in <strong>Bali, Indonesia</strong>, reflecting his expertise and international recognition in the field of Dental Implants.
      </>
    ),
    eyebrow: "CREDENTIALS",
    statement: "Experience shaped by precision, trust, and patient care.",
    statementBody: "More than 19 years of expertise in advanced dental treatments, implantology, and esthetic dentistry.",
    qualifications: [
      "BDS — DJ College of Dental Sciences & Research, Modinagar",
      "MDS — Institute of Dental Sciences & Technologies",
      "19+ Years of Clinical Practice",
      "Director — Rekha Dental",
      "Founder — All India Healthcare Worker Association (Regd.)",
    ],
    areas: ["Dental Implants", "Laser Dentistry", "Smile Rehabilitation", "Esthetic Fillings"],
    memberships: [
      "Indian Dental Association (IDA)",
      "IAOMR — Indian Academy of Oral Medicine & Radiology",
      "ISOI — Indian Society of Oral Implantologists",
      "Founder — All India Healthcare Worker Association (Regd.)",
    ],
  },
  {
    role: "Founder",
    name: "Dr. Mamta Raghav Saxena",
    specialty: "Dental Implants & Cosmetic Dentistry",
    image: "/images/doctor-page/dr-mamta-raghav-saxena.png",
    experience: "19+ Years of Practice",
    location: "Raj Nagar Extension, Ghaziabad",
    reviewCount: "1,000+ patient reviews",
    bio: (
      <>
        Dr. Mamta Raghav Saxena is a highly experienced dentist and radiologist who completed her <strong>BDS</strong> from <strong>King George&apos;s Medical College (KGMC), Lucknow</strong> in 2008 and <strong>MDS</strong> from <strong>Nair Government Hospital, Mumbai</strong> in 2013 with specialization in Oral Medicine and Radiology. With more than 16 years of clinical experience, she specializes in Implant Dentistry, Cosmetic Dentistry, and the diagnosis and management of oral lesions, ulcers, and precancerous conditions. She has also served as an <strong>Associate Professor at Government Dental College, Aurangabad</strong> and as a <strong>Senior Lecturer at ITS Dental College</strong>. Known for her and patient-friendly approach, Dr. Mamta is widely trusted for providing comprehensive, compassionate, and evidence-based dental care.
      </>
    ),
    eyebrow: "EXPERTISE",
    statement: "Dedicated to precision-driven and compassionate dental care.",
    statementBody: "Combining clinical expertise, academic excellence, and advanced diagnostic knowledge to deliver personalized treatment experiences.",
    qualifications: [
      "BDS — King George’s Medical College (KGMC), Lucknow",
      "MDS — Nair Government Hospital, Mumbai",
      "Specialization in Smile & Esthetic Dentistry",
      "19+ Years of Clinical Experience",
    ],
    areas: ["Implant Dentistry", "Cosmetic Dentistry", "Oral Lesions & Ulcers", "Preventive Dentistry"],
    memberships: [
      "Founder — Rekha Dental",
      "Former Associate Professor — Govt. Dental College, Aurangabad",
      "Former Senior Lecturer — ITS Dental College",
      "Founder — All India Healthcare Worker Association (Regd.)",
    ],
  },
  {
    role: "Consultant Orthodontist",
    name: "Dr. Varun Grover",
    specialty: "Orthodontics & Clear Aligners",
    image: "/images/doctor-page/dr-varun-grover.jpg",
    experience: "20+ Years of Practice",
    location: "Raj Nagar Extension, Ghaziabad",
    reviewCount: "1,000+ patient reviews",
    bio: (
      <>
        Dr. Varun Grover completed his <strong>BDS</strong> from <strong>Bapuji Dental College, Davangere</strong> in 2002 and his <strong>MDS in Orthodontics</strong> from <strong>SDM College of Dental Sciences, Dharwad</strong>. With over <strong>20 years of experience</strong>, he is a renowned orthodontist and Chief Consultant for more than <strong>30 dental clinics across Delhi</strong>. His expertise includes conventional braces, self-ligating braces, lingual orthodontics, and clear aligners. A former faculty member and keynote speaker, Dr. Grover is dedicated to delivering advanced, personalized orthodontic care with exceptional clinical outcomes.
      </>
    ),
    eyebrow: "EXPERTISE",
    statement: "Transforming smiles through advanced orthodontic care.",
    statementBody: "Combining decades of clinical experience with modern orthodontic techniques to deliver comfortable, precise, and personalized smile transformations.",
    qualifications: [
      "BDS — Bapuji Dental College, Davangere (2002)",
      "MDS (Orthodontics) — SDM College of Dental Sciences, Dharwad",
      "20+ Years of Clinical Experience",
      "Specialist in Orthodontics & Clear Aligner Therapy",
    ],
    areas: ["Conventional Braces", "Self-Ligating Braces", "Lingual Orthodontics", "Clear Aligners", "Fixed Functional Appliances", "Smile Correction"],
    memberships: [
      "Chief Consultant Orthodontist for 30+ Dental Clinics",
      "Former Faculty Member (2007–2013)",
      "Keynote Speaker in Orthodontics",
      "Collaborator — 32 Watts Clear Aligners",
      "Speaker at the Launch of 32 Watts Clear Aligner System (2018)",
    ],
  },
  {
    role: "Consultant Implantologist",
    name: "Dr. Azeem Abbasi",
    specialty: "Dental Implants & Full Mouth Rehabilitation",
    image: "/images/doctor-page/dr-azeem-abbasi.jpg",
    experience: "17+ Years of Practice",
    location: "Raj Nagar Extension, Ghaziabad",
    reviewCount: "1,000+ patient reviews",
    bio: (
      <>
        Dr. Azeem Abbasi graduated from the prestigious <strong>Maulana Azad Dental College, New Delhi</strong> and is a highly experienced Implantologist with over <strong>17 years of clinical practice</strong>. He completed his <strong>Maxi Course in Oral Implantology (AAID, USA)</strong> and earned an <strong>M.Sc. in Implantology from New York University</strong>. With advanced training in Digital Dentistry, Hard &amp; Soft Tissue Regeneration, Zygomatic &amp; Pterygoid Implants, and Full Mouth Rehabilitation, Dr. Abbasi is committed to delivering predictable, world-class implant solutions. He is also a Founder Member and Director of <strong>Delhi ISOI</strong> and actively mentors dentists through his Implantology training programs.
      </>
    ),
    eyebrow: "EXPERTISE",
    statement: "Restoring smiles with advanced implant dentistry.",
    statementBody: "Combining global training, modern surgical techniques, and extensive clinical experience to deliver long-lasting and natural-looking implant solutions.",
    qualifications: [
      "BDS — Maulana Azad Dental College, New Delhi",
      "M.Sc. in Implantology — New York University",
      "Maxi Course in Oral Implantology (AAID, USA)",
      "17+ Years of Clinical Experience",
    ],
    areas: ["Dental Implants", "Full Mouth Rehabilitation", "Digital Implant Dentistry", "Hard & Soft Tissue Regeneration", "Zygomatic & Pterygoid Implants", "Occlusion & TMJ Disorders"],
    memberships: [
      "Founder Member & Director — Delhi ISOI",
      "Certified Member — Indian Society of Oral Implantologists (ISOI)",
      "Faculty — Impact Dental Academy",
      "International Training in South Korea, USA & Brazil",
    ],
  },
  {
    role: "Consultant Orthodontist",
    name: "Dr. Abhinav Singh",
    specialty: "Orthodontics & Clear Aligner Therapy",
    image: "/images/doctor-page/dr-abhinav-singh.jpg",
    experience: "10+ Years of Practice",
    location: "Raj Nagar Extension, Ghaziabad",
    reviewCount: "1,000+ patient reviews",
    bio: (
      <>
        Dr. Abhinav Singh is a highly skilled Orthodontist with over <strong>10 years of clinical experience</strong> in correcting dental and facial irregularities. He completed his <strong>BDS</strong> from the <strong>Institute of Dental Sciences &amp; Technologies, CCS University</strong> and earned his <strong>MDS in Orthodontics</strong> from the <strong>Coorg Institute of Dental Sciences, RGUHS, Bengaluru</strong>. His expertise includes clear aligners, Damon self-ligating braces, lingual orthodontics, surgical orthodontics, and multidisciplinary treatment planning, helping patients achieve healthy, confident smiles through modern orthodontic care.
      </>
    ),
    eyebrow: "EXPERTISE",
    statement: "Delivering modern orthodontic solutions with precision.",
    statementBody: "Combining advanced orthodontic techniques, digital treatment planning, and evidence-based care to create healthy, confident smiles for patients of all ages.",
    qualifications: [
      "BDS — Institute of Dental Sciences & Technologies, CCS University",
      "MDS (Orthodontics) — Coorg Institute of Dental Sciences, RGUHS, Bengaluru",
      "10+ Years of Clinical Experience",
      "Specialist in Digital Orthodontics & Clear Aligners",
    ],
    areas: ["Clear Aligner Therapy", "Conventional & Self-Ligating Braces", "Lingual Orthodontics", "Surgical Orthodontics", "Interceptive Orthodontics", "Functional Appliance Therapy"],
    memberships: [
      "Specialist Orthodontist — City Dental Care & Orthodontic Centre",
      "Researcher with Multiple Peer-Reviewed Publications",
      "Expert in Digital Orthodontics & Cephalometric Analysis",
      "Multidisciplinary Orthodontic Treatment Planning",
    ],
  },
];

function SvgIcon({ type, size = 15, className = "" }: { type: "award" | "calendar" | "pin" | "star" | "cap" | "globe" | "stethoscope" | "verified"; size?: number; className?: string }) {
  const paths = {
    award: { viewBox: "0 0 384 512", d: "M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z" },
    calendar: { viewBox: "0 0 448 512", d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" },
    pin: { viewBox: "0 0 384 512", d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" },
    star: { viewBox: "0 0 576 512", d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" },
    cap: { viewBox: "0 0 640 512", d: "M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" },
    globe: { viewBox: "0 0 512 512", d: "M253.47 17.406C123.76 17.406 18.437 122.76 18.437 252.47c0 129.707 105.324 235.06 235.03 235.06 129.707 0 235.063-105.353 235.063-235.06 0-129.71-105.355-235.064-235.06-235.064zM367.874 68.75c61.246 38.19 101.97 106.14 101.97 183.72 0 17.143-1.993 33.823-5.75 49.81l-34.25-18.06 22 54.874c-9.454 21.647-22.362 41.432-38 58.687l-43.158-30.936-64.625 47.72-61.656 6.967-13.906-41.78-49.72 26.844-68.093-18.938 9.157 36.594c-28.41-21.793-51.23-50.466-66-83.563L81.25 304.47l32.25 17.124 59.22-9.875 2.843-40.908-37.344-1.718 4.905-17.844 30.78-25.313-25.093-15.625 67.22-38.593-45.345-29.657-66.625 40.187-49.437-15.28c13.812-32.14 35.21-60.22 61.906-82.064l-3.75 44.375 43.376-34.124 72 22.22-22.5-27.407L233 75.562l26.813 28.468 71 9.845-3.5-34.47 41.468 12.657-.905-23.312zm1.156 120.03L278 199.47l28.906 43.218 3.156 64.468L339.25 321l11.438-28.375 62.656 48.656L395.78 294l6.408-48.344-43.75-22.72 10.593-34.155zM221 192.438l-31.594 21.188 36.47 14.78 16.686-14.78L221 192.437zm22.188 144.688l18.687 52.594 19.78-42.564-38.467-10.03z" },
    stethoscope: { viewBox: "0 0 512 512", d: "M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" },
    verified: { viewBox: "0 0 24 24", d: "m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" },
  } as const;
  const icon = paths[type];
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox={icon.viewBox} fill="currentColor"><path d={icon.d}/></svg>;
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
      <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">{eyebrow}</p>
    </div>
    <h1 className="doctor-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">{title}</h1>
    <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-[#555555] md:text-lg">{text}</p>
  </div>;
}

function Profile({ doctor }: { doctor: Doctor }) {
  const chips = [
    { text: doctor.experience, icon: "award" as const },
    { text: "Rekha Dental", icon: "calendar" as const },
    { text: doctor.location, icon: "pin" as const },
  ];
  return <>
    <section className="w-full bg-[#EAE4DB] py-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl md:h-[700px]">
          <Image src={doctor.image} alt={doctor.name} fill priority={doctor.name === "Dr. Gaurav Saxena"} sizes="(max-width: 1023px) 100vw, 50vw" className="doctor-zoom-slow object-fill"/>
        </div>
        <div className="flex flex-col gap-3 lg:gap-5">
          <p className="text-sm font-bold uppercase tracking-[1px] text-[#B89B5E]">{doctor.role}</p>
          <h1 className="doctor-font-header text-3xl leading-tight text-[#1F2A24] lg:text-5xl">{doctor.name}</h1>
          <p className="text-sm font-bold uppercase tracking-[1px] text-[#B89B5E]">{doctor.specialty}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            {chips.map((chip) => <div key={chip.text} className="flex items-center gap-2 rounded-full border border-[#E8DCC8] bg-[#FCF8F2] px-4 py-2 shadow-sm transition-all hover:shadow-md">
              <SvgIcon type={chip.icon} className="text-[#B89B5E]"/>
              <span className="text-sm font-medium text-[#4A4A4A]">{chip.text}</span>
            </div>)}
          </div>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex gap-1 text-[#B89B5E]">{Array.from({ length: 5 }, (_, index) => <SvgIcon key={index} type="star" size={16}/>)}</div>
            <span className="text-sm text-[#5C5C5C]">5.0 · {doctor.reviewCount}</span>
          </div>
          <div className="doctor-bio max-w-none leading-relaxed text-[#4A4A4A]"><p>{doctor.bio}</p></div>
          <div className="relative mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <CalendlyButton variant="doctor" label="Book Appointment" showIcon={false} className="w-full"/>
            <a href={siteConfig.phoneHref} className="flex h-12 w-full cursor-pointer items-center justify-center border border-[#1F3D2B] text-center text-sm uppercase tracking-wide text-[#1F3D2B] transition-all duration-200 hover:bg-[#1F3D2B] hover:text-white active:scale-[0.98]">Call Now</a>
          </div>
        </div>
      </div>
    </section>
    <SectionHeading eyebrow={doctor.eyebrow} title={doctor.statement} text={doctor.statementBody}/>
    <section className="w-full py-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-10">
        <div className="border border-[#E6E0D5] bg-[#F4EFE6] p-8">
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[1px] text-[#B89B5E]"><SvgIcon type="cap" size={14}/><span>Qualifications</span></div>
            <div className="flex flex-col">{doctor.qualifications.map((item, index) => <div key={item} className={`py-4 text-sm font-medium text-[#11261B] ${index < doctor.qualifications.length - 1 ? "border-b border-[#E6E0D5]" : ""}`}>{item}</div>)}</div>
          </div>
          <div className="mt-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[1px] text-[#B89B5E]"><SvgIcon type="globe" size={14}/><span>Languages</span></div>
            <p className="text-sm font-medium text-[#11261B]">English · Hindi</p>
          </div>
        </div>
        <div className="border border-[#E6E0D5] bg-[#F4EFE6] p-8">
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[1px] text-[#B89B5E]"><SvgIcon type="stethoscope" size={14}/><span>Areas of Practice</span></div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{doctor.areas.map((item) => <div key={item} className="border border-[#DCD5C9] bg-[#EBE4D7] px-4 py-3 text-sm font-medium text-[#11261B]">{item}</div>)}</div>
          </div>
          <div className="mt-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[1px] text-[#B89B5E]"><SvgIcon type="verified" size={14}/><span>Memberships</span></div>
            <div className="flex flex-wrap gap-3">{doctor.memberships.map((item) => <div key={item} className="border border-[#DCD5C9] bg-[#EBE4D7] px-4 py-2 text-xs font-medium tracking-[2px] text-[#11261B]">{item}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

function PatientVoices() {
  return <section className="my-10 w-full bg-[#1F4A36] py-20">
    <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
      <div className="mb-6 flex items-center justify-center gap-4"><span className="h-[2px] w-10 bg-[#B89B5E]"/><p className="text-base font-extrabold uppercase tracking-[3px] text-[#B89B5E] md:text-lg">Patient Voices</p><span className="h-[2px] w-10 bg-[#B89B5E]"/></div>
      <h2 className="doctor-font-header text-3xl text-white md:text-4xl lg:text-5xl">Selected reviews.</h2>
      <p className="mt-4 text-sm text-[#CFCFCF] md:text-base">From those treated personally by us.</p>
      <div className="mt-14 grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => <div key={review.name} className="flex h-full flex-col justify-between border border-[#2E5A45] bg-transparent p-6 md:p-8">
          <div className="mb-4 flex gap-1 text-[#B89B5E]">{Array.from({ length: 5 }, (_, index) => <SvgIcon key={index} type="star" size={14}/>)}</div>
          <p className="mb-6 text-sm italic leading-relaxed text-[#DADADA] md:text-base">“{review.quote}”</p>
          <div className="mt-auto"><p className="text-xs uppercase tracking-[3px] text-[#CFCFCF]">{review.name} <span className="text-[#8FA79A]">· {review.source}</span></p></div>
        </div>)}
      </div>
    </div>
  </section>;
}

function Consultation() {
  return <div className="flex flex-col items-center justify-center pb-6 lg:mt-8">
    <SectionHeading eyebrow="BEGIN" title="Your consultation with us" text="A private, unhurried first visit. Comprehensive 3D diagnostics. A treatment plan designed and delivered by one pair of hands."/>
    <CalendlyButton variant="doctor-consultation" label="Book Appointment" showIcon={false}/>
  </div>;
}

export function DoctorPage() {
  return <div className="doctor-page bg-[#EAE4DB]">
    {doctors.map((doctor) => <Profile key={doctor.name} doctor={doctor}/>)}
    <PatientVoices/>
    <Consultation/>
  </div>;
}
