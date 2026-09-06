export type TreatmentListingItem = {
  slug: string;
  title: string;
  description: string;
  currentPrice: string;
  previousPrice: string;
  image: string;
};

export const treatmentListingItems: TreatmentListingItem[] = [
  { slug: "immediate-implantology", title: "Immediate Implantology", description: "Same-day implants with surgical precision.", currentPrice: "32,990", previousPrice: "36,990", image: "/images/treatments/01-immediate-implantology.png" },
  { slug: "clear-aligners", title: "Clear Aligners & Braces", description: "Discreet and comfortable orthodontic treatment for straighter teeth.", currentPrice: "7,000", previousPrice: "10,000", image: "/images/treatments/02-clear-aligners.jpeg" },
  { slug: "preventive-ages-0-13", title: "Preventive Dentistry", description: "For ages 0-13 & 14-15.", currentPrice: "1,499", previousPrice: "2,141", image: "/images/treatments/03-preventive-dentistry.png" },
  { slug: "pediatric-dentistry", title: "Pediatric Dentistry", description: "Compassionate dental care tailored for children.", currentPrice: "1,999", previousPrice: "2,221", image: "/images/treatments/04-pediatric-dentistry.jpeg" },
  { slug: "general-restorative", title: "General and Restorative", description: "Hygiene, fillings, crowns meticulously done.", currentPrice: "1,250", previousPrice: "1,389", image: "/images/treatments/05-general-restorative.jpeg" },
  { slug: "digital-robotic-scanning", title: "Digital Robotic Scanning", description: "AI-guided 3D scans for sub-millimetric care.", currentPrice: "2,999", previousPrice: "3,332", image: "/images/treatments/06-digital-robotic-scanning.png" },
  { slug: "dental-fillings", title: "Dental Fillings", description: "Natural-looking restorations for healthy smiles.", currentPrice: "1,250", previousPrice: "1,389", image: "/images/treatments/07-dental-fillings.jpeg" },
  { slug: "dental-bridges", title: "Dental Bridges", description: "Durable tooth replacement solutions for function and aesthetics.", currentPrice: "16,500", previousPrice: "18,333", image: "/images/treatments/08-dental-bridges.jpeg" },
  { slug: "dental-implants", title: "Dental Implants", description: "Advanced implant procedures for permanent tooth replacement.", currentPrice: "32,990", previousPrice: "43,990", image: "/images/treatments/09-dental-implants.jpeg" },
  { slug: "orthodontic-treatment", title: "Orthodontic Treatment", description: "Modern alignment solutions for beautifully straight teeth.", currentPrice: "4,500", previousPrice: "5,000", image: "/images/treatments/10-orthodontic-treatment.jpeg" },
  { slug: "root-canal-treatment", title: "Root Canal Treatment", description: "Precision endodontic care focused on tooth preservation.", currentPrice: "6,990", previousPrice: "7,656", image: "/images/treatments/11-root-canal-treatment.jpeg" },
  { slug: "tooth-removal", title: "Tooth Removal", description: "Safe and comfortable extraction procedures with expert care.", currentPrice: "1,500", previousPrice: "1,667", image: "/images/treatments/12-tooth-removal.jpeg" },
  { slug: "cosmetic-dentistry", title: "Cosmetic Dentistry", description: "Smile-enhancing treatments designed for aesthetic excellence.", currentPrice: "7,999", previousPrice: "8,999", image: "/images/treatments/13-cosmetic-dentistry.jpeg" },
  { slug: "teeth-cleaning-scaling", title: "Teeth Cleaning & scaling", description: "Professional scaling and polishing for optimal oral hygiene.", currentPrice: "990", previousPrice: "1,100", image: "/images/treatments/14-teeth-cleaning-scaling.jpeg" },
  { slug: "laser-dental-treatment", title: "Laser Dental Treatment", description: "Minimally invasive laser procedures with enhanced precision.", currentPrice: "1499", previousPrice: "1666", image: "/images/treatments/15-laser-dental-treatment.jpeg" },
  { slug: "tooth-jewellery", title: "Tooth Jewellery", description: "Enhance your smile with stylish and safe tooth jewellery applications.", currentPrice: "5,000", previousPrice: "5556", image: "/images/treatments/16-tooth-jewellery.jpeg" },
  { slug: "full-mouth-rehabilitation", title: "Full Mouth Rehabilitation", description: "Comprehensive restoration of oral health, function, and aesthetics.", currentPrice: "32,990", previousPrice: "36,656", image: "/images/treatments/17-full-mouth-rehabilitation.jpeg" },
  { slug: "dental-crowns", title: "Dental Crowns", description: "Custom-crafted dental crowns designed to restore damaged, weakened, or root canal treated teeth. From durable PFM crowns to premium ceramic and Emax restorations, our crowns blend strength, function, and natural aesthetics for long-lasting smile rehabilitation.", currentPrice: "5,000", previousPrice: "7,000", image: "/images/treatments/18-dental-crowns.png" },
  { slug: "dental-veneers", title: "Dental Veneers", description: "Transform chipped, stained, uneven, or worn teeth with ultra-thin custom veneers designed to enhance smile aesthetics. Our direct and indirect veneer solutions create a brighter, more symmetrical smile while preserving a natural appearance and long-term durability.", currentPrice: "5490", previousPrice: "7490", image: "/images/treatments/19-dental-veneers.png" },
  { slug: "dental-splints", title: "Dental Splints", description: "Custom-made dental splints and night guards designed to protect teeth from grinding, clenching, and excessive bite forces. These appliances help reduce jaw pain, prevent tooth wear, relieve muscle tension, and improve comfort for patients affected by bruxism and TMJ-related concerns.", currentPrice: "4,500", previousPrice: "5,000", image: "/images/treatments/20-dental-splints.png" },
  { slug: "dentures", title: "Dentures", description: "Restore confidence, speech, and chewing ability with custom-crafted complete and partial dentures. Designed for comfort, stability, and natural aesthetics, our denture solutions help replace missing teeth while improving facial support and overall oral function for a confident everyday smile.", currentPrice: "6,000", previousPrice: "6,667", image: "/images/treatments/21-dentures.png" },
  { slug: "general-dental-procedures", title: "General Dental Procedures", description: "Comprehensive dental care covering routine examinations, dental X-rays, emergency treatments, sensitivity management, preventive procedures, minor surgical care, and essential oral health services. Designed to address everyday dental concerns with timely diagnosis, comfort, and professional clinical care.", currentPrice: "500", previousPrice: "550", image: "/images/treatments/22-general-dental-procedures.png" },
];
