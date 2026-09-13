import { Resend } from "resend";

const CONSULTATION_REQUEST_TO = "rekhadentalrajnagar@gmail.com";

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(apiKey);
}

export async function sendConsultationRequestEmail(details: {
  name: string;
  phone: string;
  email?: string;
  concern?: string;
  photos: Array<{ url: string }>;
}): Promise<void> {
  const resend = getResendClient();
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  const photosHtml = details.photos.length > 0
    ? `<div>${details.photos.map((photo) => `<a href="${photo.url}"><img src="${photo.url}" alt="Patient photo" width="220" style="max-width:220px;height:auto;margin:0 12px 12px 0;border-radius:8px;border:1px solid #ddd;" /></a>`).join("")}</div>`
    : "<p>No photos attached.</p>";

  const html = `
    <h2>New smile consultation request</h2>
    <p><strong>Name:</strong> ${escapeHtml(details.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(details.phone)}</p>
    ${details.email ? `<p><strong>Email:</strong> ${escapeHtml(details.email)}</p>` : ""}
    ${details.concern ? `<p><strong>Concern:</strong> ${escapeHtml(details.concern)}</p>` : ""}
    <h3>Photos</h3>
    ${photosHtml}
  `;

  const result = await resend.emails.send({
    from,
    to: CONSULTATION_REQUEST_TO,
    replyTo: details.email,
    subject: `Smile consultation request from ${details.name}`,
    html,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
