export type DentalPlanBenefit = {
  title: string;
  detail: string;
  icon: "doctor" | "tooth" | "star" | "ticket" | "family" | "percent";
};

export type DentalPlan = {
  name: string;
  price: string;
  description: string;
  icon: "basic" | "standard" | "premium";
  featured?: boolean;
  benefits: DentalPlanBenefit[];
};

export const dentalPlans: DentalPlan[] = [
  {
    name: "BASIC",
    price: "499",
    description: "Basic preventive dental care package for individuals.",
    icon: "basic",
    benefits: [
      { title: "Dental Consultation", detail: "2 Consultations", icon: "doctor" },
      { title: "Dental X-Ray", detail: "1 X-Ray", icon: "tooth" },
    ],
  },
  {
    name: "STANDARD",
    price: "999",
    description: "Enhanced membership plan with preventive care.",
    icon: "standard",
    featured: true,
    benefits: [
      { title: "Dental Consultation", detail: "3 Consultations", icon: "doctor" },
      { title: "Dental X-Ray", detail: "2 X-Rays", icon: "tooth" },
      { title: "Full Mouth Scaling", detail: "Single Sitting", icon: "star" },
    ],
  },
  {
    name: "PREMIUM",
    price: "1499",
    description: "Comprehensive membership plan with extended preventive care.",
    icon: "premium",
    benefits: [
      { title: "Dental Consultation", detail: "5 Consultations", icon: "doctor" },
      { title: "Dental X-Ray", detail: "3 X-Rays", icon: "tooth" },
      { title: "Full Mouth Scaling", detail: "Single Sitting with Polishing", icon: "star" },
    ],
  },
];

export const dentalOffers = [
  { title: "Dental Implants", href: "/treatments/dental-implants", value: "₹32,990", note: "Starting price", icon: "implants" },
  { title: "Kids Cavity Prevention", href: "/treatments/preventive-ages-0-13", value: "₹1,499", note: "Varnish & Pit and Fissure Sealants", icon: "child" },
  { title: "Braces & Aligners", href: "/treatments/clear-aligners", value: "₹7,000", note: "Starting price", icon: "braces" },
  { title: "Veneers", href: "/treatments/dental-veneers", value: "₹5,490", note: "Starting price", icon: "star" },
  { title: "Smile Designing", href: "/treatments/cosmetic-dentistry", value: "₹7,999", note: "Starting price", icon: "smile" },
  { title: "Dental Crowns", href: "/treatments/dental-crowns", value: "₹5,000", note: "Starting price", icon: "crown" },
  { title: "Pulpectomy", href: "/treatments/pediatric-dentistry", value: "₹4,990", note: "Up to 2 sittings", icon: "rct" },
  { title: "Laser Pulpectomy", href: "/treatments/pediatric-dentistry", value: "₹6,990", icon: "laser" },
  { title: "Basic RCT (Anterior)", href: "/treatments/root-canal-treatment", value: "₹5,999", icon: "rct" },
  { title: "Basic RCT (Posterior)", href: "/treatments/root-canal-treatment", value: "₹6,999", icon: "rct" },
  { title: "Consultant RCT (Anterior)", href: "/treatments/root-canal-treatment", value: "₹6,999", note: "Rotary File + Advanced Technology", icon: "shield" },
  { title: "Consultant RCT (Posterior)", href: "/treatments/root-canal-treatment", value: "₹7,999", note: "Rotary File + Advanced Technology", icon: "shield" },
  { title: "Laser RCT + Meta Pex RCT (Anterior)", href: "/treatments/root-canal-treatment", value: "₹9,999", icon: "pills" },
  { title: "Laser RCT + Meta Pex RCT (Posterior)", href: "/treatments/root-canal-treatment", value: "₹10,990", icon: "pills" },
] as const;

export const dentalPlanFeatures = [
  { title: "Expert-Led Dentistry", icon: "doctor", body: "Receive care from experienced dental professionals committed to delivering excellence through precision, compassion, and clinical expertise." },
  { title: "Modern Dental Technology", icon: "microscope", body: "Digital diagnostics, advanced imaging, and contemporary treatment techniques help ensure accurate diagnosis and predictable results." },
  { title: "Comprehensive Smile Solutions", icon: "heartShield", body: "From routine check-ups and preventive care to implants, aligners, smile makeovers, and full mouth rehabilitation." },
  { title: "Safety & Patient Comfort", icon: "medicalShield", body: "Strict sterilization protocols, patient-focused care, and transparent treatment planning create a safe and comfortable dental experience." },
] as const;

export const dentalPlanFaqs = [
  { question: "What is the Rekha Dental Membership Plan?", answer: "The Rekha Dental Membership Plan is a preventive dental care program that includes consultations, X-rays and scaling at a fixed membership price." },
  { question: "Who can enroll in a dental membership plan?", answer: "Anyone can enroll in a membership plan. We offer plans suitable for individuals as well as families looking for regular preventive dental care." },
  { question: "How long is the membership valid?", answer: "The validity period may vary depending on the selected plan. Please contact our team for complete details regarding membership duration and renewal options." },
  { question: "Can I use my membership benefits immediately?", answer: "Yes, most membership benefits can be availed immediately after successful enrollment, subject to the terms and conditions of the selected plan." },
  { question: "Are consultations included in the membership plans?", answer: "Yes. Depending on your chosen plan, the plan includes a set number of dental consultations during the membership period." },
  { question: "Do the plans include dental X-rays?", answer: "Yes. Membership plans include a set number of dental X-rays, helping patients maintain regular oral health monitoring and diagnosis." },
  { question: "Can family members use my membership benefits?", answer: "Please review the plan details or contact us to understand which family members can use the plan." },
  { question: "What do the membership plans include?", answer: "Each plan lists its dental consultations, X-rays and scaling at a fixed price. Treatments beyond the plan are charged at the clinic's standard published prices." },
  { question: "Where can I see treatment prices?", answer: "Starting prices for our treatments are listed on the treatments page and in the Treatment Prices section of this page. The final cost is confirmed after your consultation." },
  { question: "Can I upgrade my membership plan later?", answer: "Yes. Existing members may upgrade to a higher plan to include more consultations and X-rays. Our team will guide you through the upgrade process." },
  { question: "Is the membership fee refundable?", answer: "Membership fees are generally non-refundable once benefits have been activated. Please speak with our team regarding specific terms and conditions." },
  { question: "How can I enroll in a Rekha Dental Membership Plan?", answer: "You can enroll by contacting our clinic directly, visiting us in person, or clicking the 'Get Membership' button on the website to connect with our team via WhatsApp." },
] as const;
