import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  email: z.union([z.literal(""), z.email().max(120)]).optional(),
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().max(1500).optional(),
  consent: z.literal("true"),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ message: "Please submit a valid enquiry." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(json);
  if (!parsed.success) {
    return Response.json({ message: "Please check the required fields and try again." }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json(
      { message: "Online enquiries are not configured yet. Please call or WhatsApp the clinic." },
      { status: 503 },
    );
  }

  try {
    const delivery = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.data, source: "rekhadental.com" }),
      signal: AbortSignal.timeout(8000),
    });
    if (!delivery.ok) throw new Error("Delivery provider rejected the request");
    return Response.json({ message: "Thank you. The clinic will contact you shortly." });
  } catch {
    return Response.json({ message: "We could not deliver your enquiry. Please call or WhatsApp the clinic." }, { status: 502 });
  }
}
