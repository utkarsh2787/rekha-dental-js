import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const GALLERY_ROOT_FOLDER = "gallery";
export const GALLERY_CATEGORIES = ["facility", "technology", "smiles", "events"] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export type GalleryImage = {
  publicId: string;
  url: string;
  alt: string;
  category: GalleryCategory;
  order: number;
};

function categoryFromPublicId(publicId: string): GalleryCategory | null {
  const prefix = `${GALLERY_ROOT_FOLDER}/`;
  if (!publicId.startsWith(prefix)) return null;
  const rest = publicId.slice(prefix.length);
  const category = rest.split("/")[0];
  return (GALLERY_CATEGORIES as readonly string[]).includes(category) ? (category as GalleryCategory) : null;
}

export async function listGalleryImages(): Promise<GalleryImage[]> {
  const result = await cloudinary.api.resources({
    type: "upload",
    prefix: `${GALLERY_ROOT_FOLDER}/`,
    max_results: 500,
    context: true,
  });

  const images: GalleryImage[] = [];
  for (const resource of result.resources ?? []) {
    const category = categoryFromPublicId(resource.public_id);
    if (!category) continue;
    const context = resource.context?.custom ?? resource.context ?? {};
    const orderRaw = context.order;
    const order = typeof orderRaw === "string" && orderRaw.length > 0 ? Number(orderRaw) : Date.parse(resource.created_at ?? "") || 0;
    images.push({
      publicId: resource.public_id,
      url: resource.secure_url,
      alt: context.alt ?? "",
      category,
      order,
    });
  }
  return images.sort((a, b) => a.order - b.order);
}

export async function uploadGalleryImage(options: {
  fileDataUrl: string;
  category: GalleryCategory;
  alt: string;
}): Promise<GalleryImage> {
  const order = Date.now();
  const uploaded = await cloudinary.uploader.upload(options.fileDataUrl, {
    folder: `${GALLERY_ROOT_FOLDER}/${options.category}`,
    context: { alt: options.alt, order: String(order) },
  });
  return {
    publicId: uploaded.public_id,
    url: uploaded.secure_url,
    alt: options.alt,
    category: options.category,
    order,
  };
}

export async function deleteGalleryImage(publicId: string): Promise<void> {
  if (!categoryFromPublicId(publicId)) {
    throw new Error("Refusing to delete a resource outside the gallery folder");
  }
  await cloudinary.uploader.destroy(publicId, { invalidate: true });
}

export async function reorderGalleryImages(updates: Array<{ publicId: string; order: number }>): Promise<void> {
  for (const update of updates) {
    if (!categoryFromPublicId(update.publicId)) {
      throw new Error("Refusing to reorder a resource outside the gallery folder");
    }
  }
  await Promise.all(
    updates.map((update) => cloudinary.uploader.add_context(`order=${update.order}`, [update.publicId])),
  );
}

export async function uploadConsultationPhoto(fileDataUrl: string, folder: string): Promise<{ publicId: string; url: string }> {
  const uploaded = await cloudinary.uploader.upload(fileDataUrl, { folder });
  return { publicId: uploaded.public_id, url: uploaded.secure_url };
}
