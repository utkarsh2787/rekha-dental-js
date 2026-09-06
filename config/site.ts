export const siteConfig = {
  name: "Rekha Dental",
  legalName: "Rekha Dental Clinic & Implant Centre",
  description:
    "Combining cutting-edge dental technology with expert care to craft healthy, beautiful smiles. Where precision meets comfort in every treatment.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phoneDisplay: "+91-8130-406-405",
  phoneHref: "tel:+918130406405",
  whatsappHref: "https://wa.me/918130406405",
  email: "support@rekhadental.com",
  address:
    "House No 622, First Floor, Satyam Enclave, New Kotgaon, Opp Rakesh Marg, Ghaziabad, Uttar Pradesh 201001",
  locations: [
    {
      name: "Rekha Dental — Kotgaon",
      streetAddress: "House No 622, First Floor, Satyam Enclave, New Kotgaon, Opp Rakesh Marg, Kotgaon Village, Daulatpura",
      postalCode: "201001",
    },
    {
      name: "Rekha Dental — Raj Nagar Extension",
      streetAddress: "A-007 Raj Nagar Residency, Near KW Delhi 6 Mall, Ghukna, Vikas Nagar, Raj Nagar Extension",
      postalCode: "201017",
    },
  ],
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    "https://calendly.com/rekha-dental/consultation",
} as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our Team", href: "/doctor" },
  { label: "Dental Tourism", href: "/tour" },
  { label: "Academy", href: "/academy" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/dental-plans" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const supportNavigation = [
  { label: "Dental Plans", href: "/dental-plans" },
  { label: "Patient Safety", href: "/patient-safety" },
  { label: "Post Treatment Care", href: "/post-instruction" },
  { label: "Warranty", href: "/warranty" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blogs", href: "/blogs" },
] as const;
