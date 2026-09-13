import { isAdminAuthed } from "@/lib/admin-auth";
import { GALLERY_CATEGORIES, deleteGalleryImage, uploadGalleryImage, type GalleryCategory } from "@/lib/cloudinary";

const MAX_FILE_BYTES = 8 * 1024 * 1024;

function isGalleryCategory(value: string): value is GalleryCategory {
  return (GALLERY_CATEGORIES as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  if (!(await isAdminAuthed())) {
    return Response.json({ message: "Unauthorized." }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  const category = form.get("category");
  const alt = form.get("alt");

  if (!(file instanceof File)) {
    return Response.json({ message: "An image file is required." }, { status: 400 });
  }
  if (typeof category !== "string" || !isGalleryCategory(category)) {
    return Response.json({ message: "A valid category is required." }, { status: 400 });
  }
  if (typeof alt !== "string" || alt.trim().length === 0) {
    return Response.json({ message: "A short description is required." }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return Response.json({ message: "Only image files are allowed." }, { status: 400 });
  }
  if (file.size > MAX_FILE_BYTES) {
    return Response.json({ message: "Image is too large (max 8MB)." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const dataUrl = `data:${file.type};base64,${buffer.toString("base64")}`;

  try {
    const image = await uploadGalleryImage({ fileDataUrl: dataUrl, category, alt: alt.trim() });
    return Response.json({ image });
  } catch {
    return Response.json({ message: "Upload failed. Please try again." }, { status: 502 });
  }
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthed())) {
    return Response.json({ message: "Unauthorized." }, { status: 401 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const publicId = (json as { publicId?: unknown }).publicId;
  if (typeof publicId !== "string" || publicId.length === 0) {
    return Response.json({ message: "publicId is required." }, { status: 400 });
  }

  try {
    await deleteGalleryImage(publicId);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "Delete failed. Please try again." }, { status: 502 });
  }
}
