import rawTreatmentDetails from "@/content/treatment-details.json";

export type TreatmentDetail = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  heroAlt: string;
  overview: string;
  technology: string[];
  whyEyebrow: string;
  whyTitle: string;
  reasons: { title: string; body: string }[];
  candidateTitle: string;
  candidateBody: string;
  candidates: string[];
  benefitsTitle: string;
  benefits: string[];
  pricingTitle: string;
  pricing: { item: string; price: string }[];
  pricingNote: string;
  recoveryTitle: string;
  recoveryBody: string;
  recovery: string[];
  whyRekhaTitle: string;
  whyRekha: { title: string; body: string }[];
  aftercareTitle: string;
  aftercare: string[];
  processTitle: string;
  process: { title: string; body: string; image: string; imageAlt: string }[];
  consultationEyebrow: string;
  consultationTitle: string;
  consultationBody: string;
  faqTitle: string;
  faq: { question: string; answer: string }[];
  sectionCount: number;
};

function extension(filename: string) {
  return filename.slice(filename.lastIndexOf("."));
}

export const treatmentDetails: TreatmentDetail[] = (rawTreatmentDetails as TreatmentDetail[]).map((detail) => ({
  ...detail,
  heroImage: `/images/treatment-details/${detail.slug}/hero${extension(detail.heroImage)}`,
  process: detail.process.map((step, index) => ({
    ...step,
    image: `/images/treatment-details/${detail.slug}/process-${index + 1}${extension(step.image)}`,
  })),
}));

export const treatmentDetailsBySlug = new Map(treatmentDetails.map((detail) => [detail.slug, detail]));
