export type DentalPlanBenefit = {
  title: string;
  detail: string;
  icon: "doctor" | "tooth" | "star" | "ticket" | "family" | "percent";
};

export type DentalPlan = {
  name: string;
  price: string;
  originalPrice: string;
  savings: string;
  description: string;
  icon: "basic" | "standard" | "premium";
  featured?: boolean;
  benefits: DentalPlanBenefit[];
};

export const dentalPlans: DentalPlan[] = [
  {
    name: "BASIC",
    price: "499",
    originalPrice: "2499",
    savings: "2000",
    description: "Basic preventive dental care package for individuals.",
    icon: "basic",
    benefits: [
      { title: "Dental Consultation", detail: "2 Consultations", icon: "doctor" },
      { title: "Dental X-Ray", detail: "1 X-Ray", icon: "tooth" },
      { title: "Front Teeth Scaling", detail: "50% Off", icon: "star" },
      { title: "Complimentary Polishing", detail: "50% Off", icon: "star" },
      { title: "Treatment Voucher", detail: "₹500 Discount Voucher", icon: "ticket" },
    ],
  },
  {
    name: "STANDARD",
    price: "999",
    originalPrice: "5999",
    savings: "5000",
    description: "Enhanced membership plan with family benefits and preventive care.",
    icon: "standard",
    featured: true,
    benefits: [
      { title: "Dental Consultation", detail: "3 Consultations", icon: "doctor" },
      { title: "Dental X-Ray", detail: "2 X-Rays", icon: "tooth" },
      { title: "Full Mouth Scaling", detail: "Single Sitting", icon: "star" },
      { title: "Family Benefit", detail: "50% Off on 2 Consultations + 2 X-Rays", icon: "family" },
      { title: "Procedure Discount", detail: "10-15% Off on All Procedures", icon: "percent" },
      { title: "Complimentary Polishing", detail: "50% Off", icon: "star" },
    ],
  },
  {
    name: "PREMIUM",
    price: "1499",
    originalPrice: "7699",
    savings: "6200",
    description: "Comprehensive family-focused membership with maximum savings.",
    icon: "premium",
    benefits: [
      { title: "Dental Consultation", detail: "5 Consultations", icon: "doctor" },
      { title: "Dental X-Ray", detail: "3 X-Rays", icon: "tooth" },
      { title: "Full Mouth Scaling", detail: "Single Sitting with Polishing", icon: "star" },
      { title: "Family Benefit", detail: "50% Off on 3 Consultations + 3 X-Rays", icon: "family" },
      { title: "Procedure Discount", detail: "15% Off on All Procedures", icon: "percent" },
      { title: "Complimentary Polishing", detail: "Worth ₹1000", icon: "star" },
    ],
  },
];

export const dentalOffers = [
  { title: "Premium Implants", href: "/treatments/dental-implants", value: "25% OFF", icon: "implants" },
  { title: "Kids Cavity Prevention", href: "/treatments/preventive-ages-0-13", value: "30% OFF", note: "Varnish & Pit and Fissure Sealants", icon: "child" },
  { title: "Braces", href: "/treatments/clear-aligners", value: "30% OFF", icon: "braces" },
  { title: "Premium Aligners", href: "/treatments/clear-aligners", value: "30% OFF", icon: "aligner" },
  { title: "Veneers", href: "/treatments/dental-veneers", value: "25% OFF", icon: "star" },
  { title: "Smile Designing", href: "/treatments/cosmetic-dentistry", value: "25% OFF", icon: "smile" },
  { title: "Premium Full Ceramic Crowns", href: "/treatments/dental-crowns", value: "25% OFF", icon: "crown" },
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
  { question: "What is the Rekha Dental Membership Plan?", answer: "The Rekha Dental Membership Plan is a preventive dental care program that offers consultations, diagnostic benefits, treatment discounts, and exclusive savings on selected dental procedures." },
  { question: "Who can enroll in a dental membership plan?", answer: "Anyone can enroll in a membership plan. We offer plans suitable for individuals as well as families looking for affordable and comprehensive dental care benefits." },
  { question: "How long is the membership valid?", answer: "The validity period may vary depending on the selected plan. Please contact our team for complete details regarding membership duration and renewal options." },
  { question: "Can I use my membership benefits immediately?", answer: "Yes, most membership benefits can be availed immediately after successful enrollment, subject to the terms and conditions of the selected plan." },
  { question: "Are consultations included in the membership plans?", answer: "Yes. Depending on your chosen plan, you can receive multiple complimentary dental consultations throughout the membership period." },
  { question: "Do the plans include dental X-rays?", answer: "Yes. Selected membership plans include complimentary dental X-rays, helping patients maintain regular oral health monitoring and diagnosis." },
  { question: "Can family members use my membership benefits?", answer: "Certain plans include family benefits and discounts. Please review the plan details or contact us to understand the specific family coverage available." },
  { question: "Do members receive discounts on treatments?", answer: "Yes. Members enjoy exclusive discounts on various dental procedures, including preventive, restorative, cosmetic, and advanced dental treatments." },
  { question: "Which treatments are eligible for membership discounts?", answer: "Discounts may be applicable on treatments such as implants, aligners, smile makeovers, tooth jewellery, bleaching, and other eligible procedures depending on the selected plan." },
  { question: "Can I upgrade my membership plan later?", answer: "Yes. Existing members may upgrade to a higher plan to unlock additional benefits and savings. Our team will guide you through the upgrade process." },
  { question: "Is the membership fee refundable?", answer: "Membership fees are generally non-refundable once benefits have been activated. Please speak with our team regarding specific terms and conditions." },
  { question: "How can I enroll in a Rekha Dental Membership Plan?", answer: "You can enroll by contacting our clinic directly, visiting us in person, or clicking the 'Get Membership' button on the website to connect with our team via WhatsApp." },
] as const;
