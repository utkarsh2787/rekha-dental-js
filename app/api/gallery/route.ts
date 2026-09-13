import { listGalleryImages } from "@/lib/cloudinary";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const images = await listGalleryImages();
    return Response.json({ images });
  } catch {
    return Response.json({ message: "Could not load gallery images." }, { status: 502 });
  }
}
