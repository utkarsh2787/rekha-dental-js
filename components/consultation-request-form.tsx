"use client";

import { Mail, MessageCircle, Upload, X } from "lucide-react";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { siteConfig } from "@/config/site";

const MAX_PHOTOS = 3;
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Rekha Dental, I'd like to send some photos for a smile consultation.");
const EMAIL_SUBJECT = encodeURIComponent("Smile consultation photos");
const EMAIL_BODY = encodeURIComponent("Hi Rekha Dental,\n\nI'm attaching photos for a smile consultation.\n\nName:\nPhone:\nConcern:");

export function ConsultationRequestForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [concern, setConcern] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [locationIndex, setLocationIndex] = useState(0);

  const photoPreviews = useMemo(() => photos.map((photo) => URL.createObjectURL(photo)), [photos]);

  const onPhotosChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);
    const combined = [...photos, ...selected];
    if (combined.length > MAX_PHOTOS) {
      setPhotoError(`Please select at most ${MAX_PHOTOS} photos.`);
      setPhotos(combined.slice(0, MAX_PHOTOS));
    } else {
      setPhotoError(null);
      setPhotos(combined);
    }
    event.target.value = "";
  };

  const removePhoto = (index: number) => {
    setPhotoError(null);
    setPhotos((current) => current.filter((_, photoIndex) => photoIndex !== index));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const form = new FormData();
      form.set("name", name.trim());
      form.set("phone", phone.trim());
      if (email.trim()) form.set("email", email.trim());
      if (concern.trim()) form.set("concern", concern.trim());
      for (const photo of photos) form.append("photos", photo);

      const response = await fetch("/api/consultation-request", { method: "POST", body: form });
      const body = await response.json().catch(() => null);
      if (!response.ok) {
        setError(body?.message ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    const selectedLocation = siteConfig.locations[locationIndex];
    return (
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="gallery-font-header text-2xl font-semibold text-[#2c2c2c] md:text-3xl">Thank you!</h2>
          <p className="mt-2 text-[#555]">Your details and photos have been sent to our team. Pick a time below to lock in your consultation.</p>
        </div>
        <div className="flex flex-col overflow-hidden rounded-2xl border border-[#D8CEC0] bg-white shadow-xl">
          <div className="flex shrink-0 gap-2 border-b border-black/10 px-4 pb-3 pt-4 sm:px-6">
            {siteConfig.locations.map((location, index) => (
              <button
                key={location.name}
                type="button"
                onClick={() => setLocationIndex(index)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${index === locationIndex ? "border-[#16412d] bg-[#16412d] text-white" : "border-[#D8CEC0] text-[#2C2C2C] hover:border-[#16412d]"}`}
              >
                {location.name.replace("Rekha Dental — ", "")}
              </button>
            ))}
          </div>
          <iframe
            key={selectedLocation.calendlyUrl}
            title={`Schedule an appointment at ${selectedLocation.name}`}
            src={selectedLocation.calendlyUrl}
            className="h-[70vh] w-full border-0"
            allow="fullscreen"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-8 text-center">
        <h1 className="gallery-font-header text-3xl font-semibold text-[#2c2c2c] md:text-4xl">Smile Consultation Request</h1>
        <p className="mt-3 text-[#555]">Share a few photos and your details, and our dentists will review them before your appointment.</p>
      </div>

      <div className="mb-8">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[1.5px] text-[#555]">3 ways to send your photos</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl border-2 border-[#16412d] bg-[#16412d]/5 p-4 text-center">
            <Upload aria-hidden="true" size={22} className="text-[#16412d]" />
            <p className="text-sm font-semibold text-[#16412d]">Upload here</p>
            <p className="text-xs text-[#555]">Use the form below</p>
          </div>
          <a
            href={`${siteConfig.whatsappHref}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-xl border border-[#D8CEC0] bg-white p-4 text-center transition hover:border-[#16412d]"
          >
            <MessageCircle aria-hidden="true" size={22} className="text-[#16412d]" />
            <p className="text-sm font-semibold text-[#2c2c2c]">WhatsApp us</p>
            <p className="text-xs text-[#555]">{siteConfig.phoneDisplay}</p>
          </a>
          <a
            href={`mailto:${siteConfig.email}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
            className="flex flex-col items-center gap-2 rounded-xl border border-[#D8CEC0] bg-white p-4 text-center transition hover:border-[#16412d]"
          >
            <Mail aria-hidden="true" size={22} className="text-[#16412d]" />
            <p className="text-sm font-semibold text-[#2c2c2c]">Email us</p>
            <p className="text-xs text-[#555]">{siteConfig.email}</p>
          </a>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-[#ddd3c8] bg-[#fdfbf7] p-6 sm:p-8">
        <Field label="Full Name *">
          <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your name" className="w-full rounded-2xl border border-[#ddd3c8] bg-white px-5 py-4 text-[15px] font-normal outline-none transition focus:border-[#16412d] focus:ring-4 focus:ring-[#16412d]/10" />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone Number *">
            <input required type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Enter phone number" className="w-full rounded-2xl border border-[#ddd3c8] bg-white px-5 py-4 text-[15px] font-normal outline-none transition focus:border-[#16412d] focus:ring-4 focus:ring-[#16412d]/10" />
          </Field>
          <Field label="Email Address">
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="w-full rounded-2xl border border-[#ddd3c8] bg-white px-5 py-4 text-[15px] font-normal outline-none transition focus:border-[#16412d] focus:ring-4 focus:ring-[#16412d]/10" />
          </Field>
        </div>
        <Field label="Your Concern">
          <textarea rows={4} value={concern} onChange={(event) => setConcern(event.target.value)} placeholder="Tell us what you'd like help with" className="w-full resize-none rounded-2xl border border-[#ddd3c8] bg-white px-5 py-4 text-[15px] font-normal outline-none transition focus:border-[#16412d] focus:ring-4 focus:ring-[#16412d]/10" />
        </Field>

        <label className="block space-y-2 text-sm font-medium text-[#16412d]">
          Photos (up to {MAX_PHOTOS})
          <div className="flex flex-wrap items-center gap-3">
            {photos.map((photo, index) => (
              <div key={`${photo.name}-${index}`} className="relative size-20 overflow-hidden rounded-xl border border-[#ddd3c8]">
                {/* eslint-disable-next-line @next/next/no-img-element -- local blob preview, not an optimizable remote asset */}
                <img src={photoPreviews[index]} alt={`Selected photo ${index + 1}`} className="size-full object-cover" />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  aria-label="Remove photo"
                  className="absolute right-1 top-1 grid size-5 place-items-center rounded-full bg-black/70 text-white"
                >
                  <X aria-hidden="true" size={12} />
                </button>
              </div>
            ))}
            {photos.length < MAX_PHOTOS ? (
              <label className="flex size-20 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-[#D8CEC0] bg-white text-[#16412d] transition hover:border-[#16412d]">
                <Upload aria-hidden="true" size={18} />
                <span className="text-[10px] font-semibold">Add photo</span>
                <input type="file" accept="image/*" multiple onChange={onPhotosChange} className="hidden" />
              </label>
            ) : null}
          </div>
          {photoError ? <p className="text-sm text-red-600">{photoError}</p> : null}
        </label>

        <button
          type="submit"
          disabled={submitting || name.trim().length === 0 || phone.trim().length === 0}
          className="w-full rounded-xl bg-[#16412d] px-6 py-3 font-medium text-white transition hover:bg-[#093528] disabled:opacity-50"
        >
          {submitting ? "Sending..." : "Send request"}
        </button>
        {error ? <p role="status" className="text-center text-sm text-red-600">{error}</p> : null}
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2 text-sm font-medium text-[#16412d]">
      {label}
      {children}
    </label>
  );
}
