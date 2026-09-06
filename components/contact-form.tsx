"use client";

import { FormEvent, useState } from "react";

type FormStatus = { state: "idle" | "submitting" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "submitting" });

    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Your message could not be sent.");
      form.reset();
      setStatus({ state: "success", message: result.message ?? "Thank you. The clinic will contact you shortly." });
    } catch (error) {
      setStatus({ state: "error", message: error instanceof Error ? error.message : "Your message could not be sent." });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-xl shadow-black/5 ring-1 ring-black/5 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field"><span>Name</span><input name="name" autoComplete="name" required minLength={2} maxLength={80} /></label>
        <label className="form-field"><span>Phone</span><input name="phone" autoComplete="tel" required inputMode="tel" minLength={7} maxLength={20} /></label>
        <label className="form-field"><span>Email</span><input name="email" type="email" autoComplete="email" maxLength={120} /></label>
        <label className="form-field"><span>Preferred service</span><select name="service" defaultValue=""><option value="">Choose a service</option><option>General consultation</option><option>Dental implants</option><option>Root canal treatment</option><option>Clear aligners or braces</option><option>Cosmetic dentistry</option><option>Other</option></select></label>
        <label className="form-field sm:col-span-2"><span>How can we help?</span><textarea name="message" required minLength={10} maxLength={1500} rows={5} /></label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-[var(--muted)]"><input type="checkbox" name="consent" value="true" required className="mt-1" /><span>I consent to Rekha Dental using these details to respond to my enquiry. This form is not for emergencies.</span></label>
      <button type="submit" disabled={status.state === "submitting"} className="mt-6 min-h-12 rounded-full bg-[var(--gold)] px-6 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--gold-light)] disabled:cursor-wait disabled:opacity-60">{status.state === "submitting" ? "Sending…" : "Send enquiry"}</button>
      {status.message ? <p role="status" className={`mt-5 rounded-xl p-4 text-sm ${status.state === "success" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-900"}`}>{status.message}</p> : null}
    </form>
  );
}
