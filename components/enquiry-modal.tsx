"use client";

import { FormEvent, useEffect, useState } from "react";
import { X } from "lucide-react";

export function EnquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open, onClose]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"), phone: form.get("phone"), email: form.get("email"),
        service: form.get("service"), message: form.get("message"), consent: "true",
      }),
    });
    const data = await response.json();
    setStatus(data.message);
    setSending(false);
    if (response.ok) event.currentTarget.reset();
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/45 p-4" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="enquiry-title" className="relative max-h-[94vh] w-full max-w-[520px] overflow-y-auto rounded-lg bg-[#fdfbf7] p-6 shadow-2xl sm:p-8">
        <button type="button" onClick={onClose} aria-label="Close enquiry form" className="absolute right-4 top-4 grid size-9 place-items-center rounded-full text-[#16412d] hover:bg-black/5"><X size={20} /></button>
        <div className="mb-8 text-center">
          <h2 id="enquiry-title" className="font-display text-4xl font-semibold leading-[1.15] text-[#2c2c2c] lg:text-5xl">Get in touch</h2>
          <p className="mt-3 text-lg text-[#555]">Our team will contact you soon.</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <ModalField label="Full Name *" name="name" placeholder="Enter your name" required />
          <div className="grid gap-4 sm:grid-cols-2">
            <ModalField label="Phone Number *" name="phone" type="tel" placeholder="Enter phone number" required />
            <ModalField label="Email Address" name="email" type="email" placeholder="Enter your email" />
          </div>
          <ModalField label="Required Service" name="service" placeholder="e.g., Dental Checkup, Teeth Whitening" />
          <label className="block space-y-2 text-sm font-medium text-[#16412d]">Your Message<textarea name="message" rows={5} placeholder="How can we help you?" className="w-full resize-none rounded-2xl border border-[#ddd3c8] bg-white px-5 py-4 text-[15px] font-normal outline-none transition focus:border-[#16412d] focus:ring-4 focus:ring-[#16412d]/10" /></label>
          <button disabled={sending} type="submit" className="w-full rounded-xl bg-[#16412d] px-6 py-3 font-medium text-white transition hover:bg-[#093528] disabled:opacity-50">{sending ? "Submitting…" : "Submit Enquiry"}</button>
          {status ? <p role="status" className="text-center text-sm text-[#555]">{status}</p> : null}
        </form>
      </div>
    </div>
  );
}

function ModalField({ label, name, placeholder, type = "text", required = false }: { label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return <label className="block space-y-2 text-sm font-medium text-[#16412d]">{label}<input name={name} type={type} required={required} placeholder={placeholder} className="w-full rounded-2xl border border-[#ddd3c8] bg-white px-5 py-4 text-[15px] font-normal outline-none transition focus:border-[#16412d] focus:ring-4 focus:ring-[#16412d]/10" /></label>;
}
