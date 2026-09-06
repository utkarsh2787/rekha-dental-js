import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { siteConfig } from "@/config/site";

const playfair = localFont({
  src: "./fonts/playfair-latin.woff2",
  variable: "--font-playfair",
  display: "swap",
});

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist",
  display: "swap",
});

const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-latin.woff2", style: "normal" },
    { path: "./fonts/cormorant-italic-latin.woff2", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Rekha Dental | Specialist Dental Care in Ghaziabad",
    template: "%s | Rekha Dental",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "Rekha Dental | Specialist Dental Care in Ghaziabad",
    description: siteConfig.description,
    url: "/",
    images: [{ url: "/images/hero-01.png", width: 1672, height: 941, alt: "Rekha Dental" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekha Dental | Specialist Dental Care in Ghaziabad",
    description: siteConfig.description,
    images: ["/images/hero-01.png"],
  },
};

const dentalClinicSchema = {
  "@context": "https://schema.org",
  "@graph": siteConfig.locations.map((location, index) => ({
    "@type": "Dentist",
    "@id": `${siteConfig.url}/#clinic-${index + 1}`,
    name: location.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: location.postalCode,
      addressCountry: "IN",
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsappFab />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentalClinicSchema).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
