import { z } from "zod";
import { uploadConsultationPhoto } from "@/lib/cloudinary";
import { sendConsultationRequestEmail } from "@/lib/email";

const MAX_PHOTOS = 3;
const MAX_FILE_BYTES = 8 * 1024 * 1024;

const detailsSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  email: z.union([z.literal(""), z.email().max(120)]).optional(),
  concern: z.string().trim().max(1500).optional(),
});

export async function POST(request: Request) {
  const form = await request.formData();

  const parsed = detailsSchema.safeParse({
    name: form.get("name"),
    phone: form.get("phone"),
    email: form.get("email") || undefined,
    concern: form.get("concern") || undefined,
  });
  if (!parsed.success) {
    return Response.json({ message: "Please check the required fields and try again." }, { status: 400 });
  }

  const files = form.getAll("photos").filter((value): value is File => value instanceof File && value.size > 0);
  if (files.length > MAX_PHOTOS) {
    return Response.json({ message: `Please upload at most ${MAX_PHOTOS} photos.` }, { status: 400 });
  }
  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      return Response.json({ message: "Only image files are allowed." }, { status: 400 });
    }
    if (file.size > MAX_FILE_BYTES) {
      return Response.json({ message: "Each photo must be under 8MB." }, { status: 400 });
    }
  }

  try {
    const folder = `consultation-requests/${Date.now()}`;
    const photos = await Promise.all(files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      const dataUrl = `data:${file.type};base64,${buffer.toString("base64")}`;
      return uploadConsultationPhoto(dataUrl, folder);
    }));

    await sendConsultationRequestEmail({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email || undefined,
      concern: parsed.data.concern,
      photos,
    });

    return Response.json({ message: "Thank you. Your request has been sent." });
  } catch {
    return Response.json(
      { message: "We could not send your request. Please call or WhatsApp the clinic instead." },
      { status: 502 },
    );
  }
}
