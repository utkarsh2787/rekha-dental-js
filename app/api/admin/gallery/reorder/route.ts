import { isAdminAuthed } from "@/lib/admin-auth";
import { reorderGalleryImages } from "@/lib/cloudinary";

type ReorderEntry = { publicId: string; order: number };

function isReorderEntry(value: unknown): value is ReorderEntry {
  if (typeof value !== "object" || value === null) return false;
  const entry = value as Record<string, unknown>;
  return typeof entry.publicId === "string" && typeof entry.order === "number";
}

export async function POST(request: Request) {
  if (!(await isAdminAuthed())) {
    return Response.json({ message: "Unauthorized." }, { status: 401 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const updates = (json as { updates?: unknown }).updates;
  if (!Array.isArray(updates) || updates.length === 0 || !updates.every(isReorderEntry)) {
    return Response.json({ message: "updates must be a non-empty array of { publicId, order }." }, { status: 400 });
  }

  try {
    await reorderGalleryImages(updates);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ message: "Reorder failed. Please try again." }, { status: 502 });
  }
}
