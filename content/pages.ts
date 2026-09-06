import { treatmentDetailsBySlug } from "@/content/treatment-details";
import { academyCourseDetails } from "@/content/academy-course-details";
import { dentalPlanFaqs } from "@/content/dental-plans";
import { blogPosts, blogListingMetadata } from "@/content/blogs";

export type PageKind = "standard" | "treatment" | "course" | "article" | "listing" | "contact";

export type ContentPage = {
  path: string;
  kind: PageKind;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  image?: string;
  heroImage?: string;
  imageAlt?: string;
  highlights?: string[];
  sections?: { title: string; body: string }[];
  faq?: { question: string; answer: string }[];
};

type DetailSeed = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const treatmentSeeds: DetailSeed[] = [
  ["clear-aligners", "Clear Aligners", "Discreet, digitally planned orthodontic care for a more confident smile.", "clear-aligners.png"],
  ["cosmetic-dentistry", "Cosmetic Dentistry", "Personalised smile enhancement that balances colour, proportion and natural character.", "cosmetic-dentistry.png"],
  ["dental-bridges", "Dental Bridges", "Fixed tooth replacement designed to restore comfortable function and appearance.", "dental-bridges.png"],
  ["dental-crowns", "Dental Crowns", "Custom restorations that protect weakened teeth while preserving a natural look.", "dental-crowns.png"],
  ["dental-fillings", "Dental Fillings", "Tooth-coloured restorations for repairing decay and small areas of damage.", "dental-fillings.png"],
  ["dental-implants", "Dental Implants", "Specialist-planned replacement teeth created for stability, comfort and confidence.", "dental-implants.png"],
  ["dental-splints", "Dental Splints", "Custom appliances that protect teeth and help manage jaw-joint or grinding concerns.", "dental-splints.png"],
  ["dental-veneers", "Dental Veneers", "Fine ceramic restorations individually crafted to refine the visible smile.", "dental-veneers.png"],
  ["dentures", "Dentures", "Comfortable, carefully fitted removable solutions for replacing missing teeth.", "dentures.png"],
  ["digital-robotic-scanning", "Digital & Robotic Scanning", "Detailed digital records that make diagnosis, planning and communication more precise.", "digital-robotic-scanning.png"],
  ["full-mouth-rehabilitation", "Full Mouth Rehabilitation", "Coordinated specialist care to rebuild oral comfort, function and aesthetics.", "full-mouth-rehabilitation.png"],
  ["general-dental-procedures", "General Dental Procedures", "Everyday dental care focused on early intervention and lasting oral health.", "dental-fillings.png"],
  ["general-restorative", "General & Restorative Dentistry", "Thoughtful repair and prevention for strong, healthy teeth at every stage of life.", "dental-crowns.png"],
  ["immediate-implantology", "Immediate Implantology", "Advanced implant protocols that may reduce treatment stages in suitable cases.", "immediate-implantology.png"],
  ["laser-dental-treatment", "Laser Dental Treatment", "Minimally invasive laser-assisted procedures planned for precision and comfort.", "cosmetic-dentistry.png"],
  ["orthodontic-treatment", "Orthodontic Treatment", "Braces and aligner options tailored to bite, alignment and long-term stability.", "orthodontic-treatment.png"],
  ["pediatric-dentistry", "Pediatric Dentistry", "Gentle, preventive-led dental care that helps children build healthy habits.", "pediatric-dentistry.png"],
  ["preventive-ages-0-13", "Preventive Dentistry for Ages 0–13", "Age-appropriate prevention and guidance for growing teeth and confident young patients.", "pediatric-dentistry.png"],
  ["root-canal-treatment", "Root Canal Treatment", "Specialist endodontic care to relieve infection and preserve the natural tooth.", "root-canal-treatment.png"],
  ["teeth-cleaning-scaling", "Teeth Cleaning & Scaling", "Professional plaque and tartar removal to support healthier gums and fresher breath.", "cosmetic-dentistry.png"],
  ["tooth-jewellery", "Tooth Jewellery", "Professionally placed smile accents applied with careful attention to enamel health.", "tooth-jewellery.png"],
  ["tooth-removal", "Tooth Removal", "Carefully planned extraction and aftercare when preserving a tooth is no longer appropriate.", "tooth-removal.png"],
].map(([slug, title, description, image]) => ({ slug, title, description, image }));

export const treatmentPages: ContentPage[] = treatmentSeeds.map((item) => {
  const detail = treatmentDetailsBySlug.get(item.slug);
  return {
    path: `treatments/${item.slug}`,
    kind: "treatment",
    eyebrow: "Dental treatment",
    title: item.title,
    description: detail?.seoDescription ?? item.description,
    intro: detail?.overview ?? item.description,
    image: `/images/details/${item.image}`,
    heroImage: detail?.heroImage ?? `/images/page-heroes/treatments--${item.slug}.png`,
    imageAlt: detail?.heroAlt || `${item.title} at Rekha Dental`,
    highlights: detail?.technology ?? [],
    faq: detail?.faq ?? [],
  };
});

export const coursePages: ContentPage[] = academyCourseDetails.map((item) => ({
  path: `academy/${item.slug}`,
  kind: "course",
  eyebrow: "Rekha Dental Academy",
  title: item.title,
  description: item.metaDescription,
  intro: item.overview,
  image: item.heroImage,
  heroImage: item.heroImage,
  imageAlt: item.title,
}));

const standardPages: ContentPage[] = [
  { path: "about", kind: "standard", eyebrow: "About Rekha Dental", title: "A Legacy of Trusted Dental Care", description: "Learn about Rekha Dental, a trusted dental clinic in Ghaziabad with over 19 years of experience in dental implants, cosmetic dentistry, root canal treatment, and patient-first dental care.", intro: "For over 19 years, Rekha Dental has been providing advanced digital dental care with a focus on quality, comfort, and honesty.", image: "/images/clinic-team.jpg", heroImage: "/images/page-heroes/about.png", imageAlt: "Banner", highlights: ["Specialist-led treatment", "Modern digital dentistry", "Long-term patient relationships"], sections: [{ title: "Our approach", body: "We believe good dentistry starts with a clear diagnosis, an honest conversation and a treatment plan that respects the whole person." }, { title: "One team, many disciplines", body: "Our clinicians collaborate across implantology, orthodontics, endodontics, surgery and restorative dentistry so complex care stays coordinated." }] },
  { path: "academy", kind: "listing", eyebrow: "Rekha Academy", title: "Where clinicians refine craft into mastery.", description: "Explore Rekha Dental Academy for clinical learning, professional dental education, workshops, and advanced dentistry training.", intro: "Rekha Academy delivers immersive, hands-on dental education designed to elevate clinical confidence, precision, and real-world expertise through mentor-led training and live patient exposure.", image: "/images/academy/about-01.jpeg", imageAlt: "Rekha Dental Academy" },
  { path: "appointment/raj-nagar", kind: "standard", eyebrow: "Book a visit", title: "Appointment at our Raj Nagar clinic.", description: "Schedule a dental consultation with the Rekha Dental team in Raj Nagar, Ghaziabad.", intro: "Choose a convenient time through our clinic booking calendar. For urgent concerns, call or WhatsApp the clinic directly.", highlights: ["One clinic booking calendar", "Confirmation from the clinic", "Call or WhatsApp support"] },
  { path: "appointment/ghaziabad", kind: "standard", eyebrow: "Book a visit", title: "Appointment at our Ghaziabad clinic.", description: "Schedule a dental consultation with the Rekha Dental team in Ghaziabad.", intro: "Choose a convenient time through our clinic booking calendar. For urgent concerns, call or WhatsApp the clinic directly.", highlights: ["One clinic booking calendar", "Confirmation from the clinic", "Call or WhatsApp support"] },
  { path: "best-dentist-near-me", kind: "standard", eyebrow: "Dentist near me", title: "Specialist dental care, closer to home.", description: "Find specialist dental care at Rekha Dental in Ghaziabad.", intro: "Our multi-specialist team combines careful diagnosis, digital technology and coordinated treatment in a calm clinic setting.", image: "/images/clinic-reception.jpg", highlights: ["Established local clinic", "Multi-specialist team", "Modern diagnostics"] },
  { path: "blogs", kind: "listing", eyebrow: "Rekha Dental Blogs", title: "Dental Insights and Expert Care", description: blogListingMetadata.description, intro: "" },
  { path: "common-problems", kind: "listing", eyebrow: "Common dental concerns", title: "Recognize the signs. Protect your smile.", description: "Explore common dental symptoms and learn when to arrange a professional assessment.", intro: "Pain, sensitivity, bleeding gums and missing teeth can have several causes. These guides help you understand the possibilities, but only an examination can confirm a diagnosis." },
  { path: "contact", kind: "contact", eyebrow: "Contact Rekha Dental", title: "We’re here to help.", description: "Call, email, WhatsApp or send an enquiry to Rekha Dental in Ghaziabad.", intro: "Tell us what you need help with and our clinic team will guide you towards the right consultation." },
  { path: "dental-plans", kind: "standard", eyebrow: "Dental Health Plans and Offers", title: "Smart savings. Better oral health.", description: "Discover affordable dental care plans designed to keep your smile healthy with preventive treatments and exclusive benefits.", intro: "Choose a membership plan and explore offers with exclusive benefits, discounts, and priority dental care.", faq: dentalPlanFaqs.map(({ question, answer }) => ({ question, answer })) },
  { path: "dentist-near-me", kind: "listing", eyebrow: "Our centers", title: "Specialist dental care, closer to home.", description: "Find Rekha Dental clinic information and appointment options in Ghaziabad.", intro: "Explore our Ghaziabad and Raj Nagar location information, contact details and available care." },
  { path: "dentist-near-me/ghaziabad", kind: "standard", eyebrow: "Dentist in Ghaziabad", title: "Your specialist dental clinic in Ghaziabad.", description: "Meet the Rekha Dental team for comprehensive specialist care in Ghaziabad.", intro: "Our established Ghaziabad clinic brings multiple dental specialties, digital diagnostics and coordinated aftercare together in one place.", image: "/images/clinic-reception.jpg", imageAlt: "Rekha Dental clinic in Ghaziabad", highlights: ["Established local clinic", "Multi-specialist team", "Modern diagnostics"] },
  { path: "dentist-near-me/raj-nagar", kind: "standard", eyebrow: "Dentist near Raj Nagar", title: "Thoughtful dental care near Raj Nagar.", description: "Arrange a specialist dental consultation near Raj Nagar, Ghaziabad.", intro: "Conveniently located for patients from Raj Nagar and surrounding areas, our team provides preventive, restorative, cosmetic and implant dentistry.", image: "/images/clinic-aligner.jpg", imageAlt: "Digital dentistry at Rekha Dental", highlights: ["Easy appointment booking", "Comprehensive treatments", "Patient-first aftercare"] },
  { path: "doctor", kind: "listing", eyebrow: "Our Team", title: "Meet Our Dental Specialists", description: "Meet the experienced dental specialists at Rekha Dental committed to providing advanced, personalized, and compassionate dental care.", intro: "Meet the experienced dental specialists at Rekha Dental committed to providing advanced, personalized, and compassionate dental care.", image: "/images/doctor-page/dr-gaurav-saxena.png", imageAlt: "Dr. Gaurav Saxena" },
  { path: "gallery", kind: "listing", eyebrow: "Our Gallery", title: "Moments that reflect our standard of care.", description: "Explore the Rekha Dental smile gallery, clinic spaces, advanced technology, patient journeys and professional events.", intro: "A curated glimpse into our spaces, technology, patient journeys, and the quiet details behind every experience." },
  { path: "legacy", kind: "standard", eyebrow: "Our legacy", title: "Years of excellence, measured in lives touched.", description: "Read the story and clinical legacy of Rekha Dental in Ghaziabad.", intro: "What began as a commitment to dependable local dentistry has grown into a multidisciplinary practice and teaching centre.", image: "/images/clinic-team.jpg", heroImage: "/images/page-heroes/legacy.jpeg", imageAlt: "Rekha Dental team", sections: [{ title: "Promoting oral health", body: "Our history is inseparable from the families who have trusted us across generations and recommended the clinic to people they care about." }, { title: "Global recognition.", body: "New technology matters when it improves diagnosis, comfort or predictability. We adopt it thoughtfully, without losing the human relationship at the centre of care." }, { title: "Sharing knowledge, shaping future clinicians.", body: "Through clinical education and hands-on mentoring, our specialists help the next generation of dentists refine their craft." }] },
  { path: "patient-safety", kind: "standard", eyebrow: "Patient safety", title: "Clean systems. Clear protocols. Safer care.", description: "Review the patient safety and infection-control principles followed at Rekha Dental.", intro: "Sterilisation, clinical hygiene, medical-history review and careful documentation are fundamental parts of every appointment.", highlights: ["Instrument sterilisation", "Surface disinfection", "Medical-history screening"], sections: [{ title: "Infection control", body: "Reusable instruments move through defined cleaning, packaging and sterilisation stages, while clinical surfaces and single-use items are managed according to procedure needs." }, { title: "Safety begins before treatment", body: "Your medical history, current medicines, allergies and previous reactions help the team plan care more safely. Always tell us when something changes." }] },
  { path: "payment", kind: "standard", eyebrow: "Payments", title: "Simple, transparent payment guidance.", description: "Payment information for treatments and courses at Rekha Dental.", intro: "Your written treatment plan explains estimated fees and stages before care begins. Contact the clinic if you need clarification about a payment.", highlights: ["Written estimates", "Stage-wise guidance", "Clinic confirmation"] },
  { path: "post-instruction", kind: "standard", eyebrow: "After your visit", title: "Post-treatment care instructions.", description: "General aftercare guidance for patients following dental treatment at Rekha Dental.", intro: "Follow the personalised instructions given by your clinician. The guidance here is general and does not replace advice for your specific procedure.", sections: [{ title: "After a procedure", body: "Take prescribed medicines exactly as directed, avoid disturbing the treatment area and follow the food, hygiene and activity advice provided by your clinician." }, { title: "When to contact us", body: "Call the clinic if pain or swelling is worsening, bleeding does not settle, you develop a fever, or anything feels different from what your clinician prepared you to expect." }] },
  { path: "post-treatment-care", kind: "standard", eyebrow: "After your visit", title: "Your Recovery Starts Here", description: "General aftercare guidance for patients following dental treatment at Rekha Dental.", intro: "Follow the personalised instructions given by your clinician. For procedure-specific guidance, contact the clinic directly.", sections: [{ title: "After a procedure", body: "Take prescribed medicines exactly as directed, avoid disturbing the treatment area and follow the food, hygiene and activity advice provided by your clinician." }, { title: "When to contact us", body: "Call the clinic if pain or swelling is worsening, bleeding does not settle, you develop a fever, or anything feels different from what your clinician prepared you to expect." }] },
  { path: "privacy-policy", kind: "standard", eyebrow: "Privacy Policy", title: "Your privacy matters to us.", description: "Read Rekha Dental's privacy policy to understand how we collect, use, and protect your personal information.", intro: "We are committed to protecting your personal information and maintaining the trust you place in our clinic. This policy outlines how we collect, use, and safeguard your information." },
  { path: "reviews", kind: "listing", eyebrow: "Patient stories", title: "Recognized by patients across leading healthcare platforms.", description: "Read selected patient feedback about care at Rekha Dental.", intro: "Every treatment journey is personal. These selected reviews reflect individual experiences and do not promise a particular clinical result." },
  { path: "terms-of-service", kind: "standard", eyebrow: "Terms Of Service", title: "Designed with clarity, trust, and transparency.", description: "Read the terms and conditions governing the use of Rekha Dental's website, appointments, and dental services.", intro: "These terms outline the guidelines, responsibilities, and conditions associated with using our website and dental care services." },
  { path: "tour", kind: "standard", eyebrow: "Why India", title: "The world comes to India for dentistry.", description: "Choose Rekha Dental for affordable dental tourism in India. We provide dental implants, smile makeovers, root canal treatment, cosmetic dentistry, and complete support for international patients with world-class care in Ghaziabad.", intro: "Premium materials, exceptionally trained clinicians, transparent pricing — refined into a single destination.", image: "/images/tour/dental-tourism-01.jpeg", heroImage: "/images/tour/dental-tourism-01.jpeg", imageAlt: "Dental Tourism in India | Rekha Dental" },
  { path: "treatments", kind: "listing", eyebrow: "Treatments", title: "A complete practice, performed by specialists.", description: "Explore advanced dental treatments at Rekha Dental including dental implants, root canal treatment, braces, aligners, smile makeover, teeth whitening, and pediatric dentistry in Ghaziabad.", intro: "Each treatment is led by a doctor whose career is devoted to that discipline.", heroImage: "/images/treatments/hero.jpeg", imageAlt: "Dental Treatments at Rekha Dental" },
  { path: "warranty", kind: "standard", eyebrow: "Treatment support", title: "Our warranty and aftercare principles.", description: "Understand treatment warranty conditions and long-term care responsibilities at Rekha Dental.", intro: "Some eligible treatments may include a written warranty subject to clinical conditions, attendance and maintenance requirements.", highlights: ["Written eligibility", "Scheduled reviews", "Shared maintenance responsibilities"], sections: [{ title: "What a warranty means", body: "Coverage varies by treatment and material. Your clinician will explain any applicable duration, exclusions and maintenance conditions in writing." }, { title: "Protecting your treatment", body: "Good home care, recommended protective appliances and timely review appointments all influence the life of dental treatment." }] },
];

const articlePages: ContentPage[] = blogPosts.map((post) => ({
  path: post.path,
  kind: "article",
  eyebrow: post.category ?? "Rekha Dental Blogs",
  title: post.title,
  description: post.seoDescription,
  intro: post.description,
  image: post.heroImage,
  heroImage: post.heroImage,
  imageAlt: post.title,
}));

export const allContentPages = [...standardPages, ...treatmentPages, ...coursePages, ...articlePages];
export const pageByPath = new Map(allContentPages.map((page) => [page.path, page]));
export const academyCoursePages = coursePages;
export const blogPages = articlePages;
