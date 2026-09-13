import type { Metadata } from "next";
import { ConsultationRequestForm } from "@/components/consultation-request-form";

export const metadata: Metadata = {
  title: "Smile Consultation Request | Rekha Dental",
  description: "Share your photos and details for a smile consultation with Rekha Dental, then book your appointment.",
  alternates: { canonical: "/smile-consultation" },
};

export default function SmileConsultationPage() {
  return (
    <div className="bg-[#EAE4DB]">
      <ConsultationRequestForm />
    </div>
  );
}
