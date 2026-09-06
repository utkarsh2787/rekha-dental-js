export type BlogPost = {
  path: string;
  number: string;
  category?: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  author: string;
  published: string;
  readTime: string;
  heroImage: string;
  body: BlogBodyBlock[];
};

export type BlogBodyBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string };

const sharedKeywords = [
  "dental blog",
  "oral care",
  "cosmetic dentistry",
  "dental clinic Ghaziabad",
  "oral hygiene",
  "smile makeover",
  "dental implants",
  "root canal treatment",
  "Rekha Dental",
];

export const blogListingMetadata = {
  title: "Dental Health Blog | Oral Care Tips by Rekha Dental",
  description: "Read expert blogs on oral health, dental treatments, cosmetic dentistry, implants, braces, and preventive care from Rekha Dental.",
  keywords: [
    "dental blog",
    "oral health tips",
    "dental care",
    "best dentist Ghaziabad",
    "teeth cleaning",
    "oral hygiene",
    "dental implants",
    "root canal",
    "cosmetic dentistry",
    "Rekha Dental blog",
  ],
};

export const blogPosts: BlogPost[] = [
  {
    path: "blogs/participation-in-live-workshop-event",
    number: "01",
    title: "Participation in Live Workshop Event",
    description: "We gathered for the live demonstration of our projects with many dentists all around the world. It was a great learning experience",
    seoTitle: "Participation in Live Workshop Event | Rekha Dental",
    seoDescription: "We gathered for the live demonstration of our projects with many dentists all around the world. It was a great learning experience",
    keywords: ["Participation in Live Workshop Event", "", ...sharedKeywords],
    author: "Rekha Dental Clinic",
    published: "27 May 2026",
    readTime: "5",
    heroImage: "/images/page-heroes/blogs--participation-in-live-workshop-event.jpeg",
    body: [{ type: "paragraph", text: "Live Workshop" }],
  },
  {
    path: "blogs/dental-implant-vs-bridge-which-is-right-for-you",
    number: "02",
    category: "dental-implants",
    title: "Dental Implant vs Bridge: Which Is Right for You?",
    description: "At Rekha Dental, we understand that every patient has different needs, expectations and concerns.",
    seoTitle: "Dental Implant Treatment in Ghaziabad | Best Dental Clinic",
    seoDescription: "Get the best dental implant treatment in Ghaziabad at Rekha Dental . Safe, painless, affordable implants for missing teeth with lasting results.",
    keywords: ["Dental Implant vs Bridge: Which Is Right for You?", "dental-implants", ...sharedKeywords],
    author: "Dr. Gaurav Saxena",
    published: "13 May 2026",
    readTime: "5",
    heroImage: "/images/page-heroes/blogs--dental-implant-vs-bridge-which-is-right-for-you.jpeg",
    body: [
      {
        type: "paragraph",
        text: "A dental implant is a permanent and natural-looking solution for replacing missing teeth. It restores your smile, improves chewing ability, and helps preserve jawbone health. At Rekha Dental Clinic, we provide advanced dental implant treatment using modern technology for precise, comfortable, and long-lasting results. Book your consultation today to regain confidence with a strong, beautiful smile.",
      },
    ],
  },
  {
    path: "blogs/why-dental-implants-in-india-benefit-and-cost",
    number: "03",
    category: "dental-implants",
    title: "Why - Dental Implants in India: Benefit And Cost",
    description: "Learn everything about dental implants, including procedure, cost, and why they are the best long-term solution for replacing missing teeth",
    seoTitle: "Dental Implants in India | Procedure, Benefits & Cost Guide",
    seoDescription: "best dental implants planning in Rekha Dental Raj Nagar extension, Ghaziabad. Have best natural smile with full mouth Implants\n\n",
    keywords: ["Why - Dental Implants in India: Benefit And Cost", "dental-implants", ...sharedKeywords],
    author: "Dr. Mamta Raghav",
    published: "13 May 2026",
    readTime: "5",
    heroImage: "/images/page-heroes/blogs--why-dental-implants-in-india-benefit-and-cost.jpeg",
    body: [
      { type: "heading", text: "Why Dental Implants Are the Gold Standard for Missing Teeth" },
      {
        type: "paragraph",
        text: "Missing teeth can affect much more than your appearance. They can impact your confidence, speech, chewing ability, and long-term oral health. Dental implants provide a permanent and natural-looking solution that closely mimics real teeth in both appearance and function.",
      },
      { type: "image", src: "/images/blogs/dental-implant-teeth.jpeg", alt: "teeth" },
    ],
  },
];

export const blogPostByPath = new Map(blogPosts.map((post) => [post.path, post]));
