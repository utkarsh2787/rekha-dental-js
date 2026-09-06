import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ContentPageView } from "@/components/content-page";
import { allContentPages, pageByPath } from "@/content/pages";
import { siteConfig } from "@/config/site";
import { treatmentDetailsBySlug } from "@/content/treatment-details";
import { blogListingMetadata, blogPostByPath } from "@/content/blogs";

type Props = { params: Promise<{ slug: string[] }> };

const pendingMetadata: Record<string, { title: string; description: string; keywords: string[]; canonical?: string; robots?: Metadata["robots"] }> = {
  "common-problems": { title: "Common Dental Problems & Solutions | Rekha Dental", description: "Learn about common dental problems including tooth pain, cavities, bleeding gums, sensitivity, and expert treatment options.", keywords: ["tooth pain", "bleeding gums", "tooth sensitivity", "cavities treatment", "gum disease", "bad breath", "dental problems", "dentist Ghaziabad", "oral health", "Rekha Dental"], canonical: "/common-problems", robots: { index: true, follow: true } },
  contact: { title: "Contact Rekha Dental | Book Dentist Appointment in Ghaziabad", description: "Book an appointment with Rekha Dental in Ghaziabad. Contact our experienced dentists for dental implants, root canal treatment, smile makeover, and routine dental care.", keywords: ["contact Rekha Dental", "dental appointment", "dentist Ghaziabad", "book dentist", "dental clinic contact", "Raj Nagar Extension dentist", "dental consultation", "best dental clinic", "Rekha Dental location", "dentist near me"], canonical: "/contact", robots: { index: true, follow: true } },
  "dentist-near-me": { title: "Best Dentist Near Me in Ghaziabad | Rekha Dental", description: "Looking for the best dentist near you? Rekha Dental offers expert dental care, cosmetic dentistry, implants, and smile makeovers.", keywords: ["dentist near me", "best dentist near me", "dental clinic near me", "dentist Ghaziabad", "Raj Nagar Extension dentist", "root canal near me", "dental implants near me", "cosmetic dentist", "emergency dentist", "Rekha Dental"], canonical: "/best-dentist-near-me", robots: { index: true, follow: true } },
  "dentist-near-me/ghaziabad": { title: "Rekha Dental", description: "Our Ghaziabad centre combines advanced dental technology with compassionate care. From preventive check-ups to complex implant procedures, every treatment is tailored to your comfort and long-term oral health.", keywords: ["Rekha Dental", "Dental Clinic", "Dentist Ghaziabad", "Cosmetic Dentistry", "Dental Implants", "Root Canal Treatment", "Smile Makeover", "Dental Care"], canonical: "/appointment/ghaziabad", robots: { index: true, follow: true } },
  "dentist-near-me/raj-nagar": { title: "Rekha Dental", description: "Our Raj Nagar Extension centre specializes in cosmetic dentistry, implantology and full mouth rehabilitation using modern equipment and evidence-based treatment protocols.", keywords: ["Rekha Dental", "Dental Clinic", "Dentist Ghaziabad", "Cosmetic Dentistry", "Dental Implants", "Root Canal Treatment", "Smile Makeover", "Dental Care"], canonical: "/appointment/raj-nagar", robots: { index: true, follow: true } },
  legacy: { title: "Our Legacy | Trusted Dental Excellence Since 2005", description: "Explore Rekha Dental's journey of trusted dentistry, innovation, and patient care built over nearly two decades.", keywords: ["Rekha Dental history", "dental excellence", "trusted dentist", "legacy", "best dental clinic", "patient care", "advanced dentistry", "Ghaziabad dentist", "family dentistry", "oral healthcare"], canonical: "/legacy", robots: { index: true, follow: true } },
  "patient-safety": { title: "Patient Safety & Sterilization | Rekha Dental", description: "Learn about Rekha Dental's strict sterilization, infection control protocols, and commitment to patient safety.", keywords: ["patient safety", "dental sterilization", "infection control", "safe dental clinic", "sterilization protocol", "dental hygiene", "COVID safety", "Rekha Dental", "safe dentistry", "dentist Ghaziabad"], canonical: "/patient-safety", robots: { index: true, follow: true } },
  payment: { title: "Appointment Payment Verification | Rekha Dental", description: "Securely verify your appointment booking payment with Rekha Dental. Submit your payment details to confirm your dental consultation or treatment appointment.", keywords: ["payment verification", "appointment booking", "dental appointment payment", "Rekha Dental", "consultation booking", "UPI payment verification", "dental clinic payment", "appointment confirmation", "secure payment verification", "dentist appointment Ghaziabad"], canonical: "/payment", robots: { index: false, follow: false } },
  "post-instruction": { title: "Post Treatment Care Instructions | Rekha Dental", description: "Follow expert post-treatment care instructions after dental implants, root canal, extraction, braces, and cosmetic procedures.", keywords: ["post treatment care", "dental instructions", "implant care", "root canal aftercare", "tooth extraction care", "braces care", "oral surgery recovery", "dentist advice", "Rekha Dental", "aftercare guide"], canonical: "/post-treatment-care", robots: { index: true, follow: true } },
  reviews: { title: "Patient Reviews | Rekha Dental Ghaziabad", description: "Read genuine patient reviews and testimonials about Rekha Dental's advanced treatments, caring doctors, and exceptional service.", keywords: ["patient reviews", "dentist reviews", "best dental clinic", "Google reviews", "testimonial", "dentist Ghaziabad", "Rekha Dental", "patient experience", "smile makeover reviews", "dental clinic feedback"], canonical: "/reviews", robots: { index: true, follow: true } },
  warranty: { title: "Dental Treatment Warranty | Rekha Dental", description: "Learn about Rekha Dental's treatment warranty, quality assurance, and commitment to long-lasting dental care.", keywords: ["dental warranty", "implant warranty", "dental guarantee", "treatment assurance", "quality dentistry", "Rekha Dental", "dental implants", "best dental clinic", "patient confidence", "dentist Ghaziabad"], canonical: "/warranty", robots: { index: true, follow: true } },
};

export function generateStaticParams() {
  return allContentPages.map((page) => ({ slug: page.path.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = (await params).slug.join("/");
  const page = pageByPath.get(path);
  if (!page) return {};
  if (["appointment/ghaziabad", "best-dentist-near-me", "post-treatment-care"].includes(path)) return {
    title: { absolute: "Best Dental Clinic in Ghaziabad | Dental Implants, RCT & Smile Makeover | Rekha Dental" },
    description: "Looking for the best dental clinic in Ghaziabad? Rekha Dental offers dental implants, root canal treatment, smile makeovers, braces, aligners, cosmetic dentistry, and family dental care with advanced technology.",
    keywords: ["best dental clinic in Raj Nagar Extension", "best dentist in Raj Nagar Extension", "dental clinic in Raj Nagar Extension", "dentist in Raj Nagar Extension Ghaziabad", "best dentist in Kotgaon", "dental clinic in Kotgaon", "dentist near Kotgaon", "dental implants Raj Nagar Extension", "root canal treatment Raj Nagar Extension", "cosmetic dentist Raj Nagar Extension", "Rekha Dental"],
    robots: { index: false },
  };
  const exact = pendingMetadata[path];
  if (exact) return {
    title: { absolute: exact.title },
    description: exact.description,
    keywords: exact.keywords,
    robots: exact.robots,
    alternates: exact.canonical ? { canonical: exact.canonical } : undefined,
    openGraph: { title: exact.title, description: exact.description, url: exact.canonical },
    twitter: { card: "summary_large_image", title: exact.title, description: exact.description },
  };
  const canonical = `/${page.path}`;
  const image = page.heroImage ?? page.image ?? "/images/hero-01.png";
  const treatmentDetail = page.kind === "treatment" ? treatmentDetailsBySlug.get(path.split("/").at(-1) ?? "") : undefined;
  const blogPost = page.kind === "article" ? blogPostByPath.get(path) : undefined;
  const metadataTitle = page.path === "about"
    ? "About Rekha Dental | Best Dental Clinic in Ghaziabad"
    : page.path === "treatments"
      ? "Dental Treatments in Ghaziabad | Implants, RCT, Braces & Cosmetic Dentistry"
      : page.path === "academy"
        ? "Rekha Dental Academy | Dental Education & Training"
      : page.path === "tour"
        ? "Dental Tourism in India | Affordable Dental Treatment for International Patients | Rekha Dental"
      : page.path === "gallery"
        ? "Smile Gallery | Before & After Dental Transformations"
      : page.path === "dental-plans"
        ? "Dental Care Plans | Affordable Smile Membership"
      : page.path === "privacy-policy"
        ? "Privacy Policy | Rekha Dental"
      : page.path === "terms-of-service"
        ? "Terms of Service | Rekha Dental"
      : page.path === "blogs"
        ? blogListingMetadata.title
      : blogPost
        ? blogPost.seoTitle
      : page.kind === "course"
        ? `${page.title} | Rekha Dental Academy`
        : treatmentDetail?.seoTitle ?? page.title;
  const hasAbsoluteTitle = page.path === "about" || page.path === "treatments" || page.path === "academy" || page.path === "tour" || page.path === "gallery" || page.path === "dental-plans" || page.path === "privacy-policy" || page.path === "terms-of-service" || page.path === "blogs" || page.kind === "course" || Boolean(treatmentDetail) || Boolean(blogPost);
  return {
    title: hasAbsoluteTitle ? { absolute: metadataTitle } : metadataTitle,
    description: page.description,
    ...(page.path === "tour" ? { keywords: ["dental tourism in India", "dental tourism in Ghaziabad", "international dental patients India", "affordable dental treatment India", "best dental clinic for international patients", "dental implants in India", "smile makeover India", "cosmetic dentistry India", "root canal treatment India", "full mouth rehabilitation India", "dental clinic in Ghaziabad", "best dentist in Ghaziabad", "Rekha Dental"] } : {}),
    ...(page.path === "privacy-policy" ? { keywords: ["privacy policy", "patient privacy", "website privacy", "data protection", "Rekha Dental", "medical privacy", "HIPAA", "privacy terms", "dental clinic", "user information"], robots: { index: true, follow: true } } : {}),
    ...(page.path === "terms-of-service" ? { keywords: ["terms of service", "website terms", "dental clinic policy", "appointment terms", "patient agreement", "Rekha Dental", "service conditions", "website usage", "legal policy", "dental services"], robots: { index: true, follow: true } } : {}),
    ...(page.path === "blogs" ? { keywords: blogListingMetadata.keywords, robots: { index: true, follow: true } } : {}),
    ...(blogPost ? { keywords: blogPost.keywords, robots: { index: true, follow: true } } : {}),
    alternates: { canonical },
    openGraph: { title: metadataTitle, description: page.description, url: canonical, images: [image] },
    twitter: { card: "summary_large_image", title: metadataTitle, description: page.description, images: [image] },
  };
}

export default async function CatchAllPage({ params }: Props) {
  const path = (await params).slug.join("/");
  if (["appointment/ghaziabad", "best-dentist-near-me", "post-treatment-care"].includes(path)) notFound();
  if (path === "appointment/raj-nagar") redirect("/dentist-near-me/raj-nagar");
  const page = pageByPath.get(path);
  if (!page) notFound();

  const breadcrumbs = path.split("/");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.kind === "article" ? "Article" : page.kind === "treatment" ? "MedicalProcedure" : "WebPage",
        name: page.title,
        description: page.description,
        url: `${siteConfig.url}/${page.path}`,
        ...(page.heroImage || page.image ? { image: `${siteConfig.url}${page.heroImage ?? page.image}` } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((segment, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: segment.replaceAll("-", " "),
          item: `${siteConfig.url}/${breadcrumbs.slice(0, index + 1).join("/")}`,
        })),
      },
      ...(page.faq?.length ? [{ "@type": "FAQPage", mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }] : []),
    ],
  };

  return (
    <>
      <ContentPageView page={page} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </>
  );
}
