import { isAdminAuthed } from "@/lib/admin-auth";
import { uploadBlogImage } from "@/lib/blogs";

const MAX_FILE_BYTES = 8 * 1024 * 1024;

export async function POST(request: Request) {
  if (!(await isAdminAuthed())) {
    return Response.json({ message: "Unauthorized." }, { status: 401 });
  }

  const file = (await request.formData()).get("file");
  if (!(file instanceof File)) {
    return Response.json({ message: "An image file is required." }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return Response.json({ message: "Only image files are allowed." }, { status: 400 });
  }
  if (file.size > MAX_FILE_BYTES) {
    return Response.json({ message: "Image is too large (max 8MB)." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    const url = await uploadBlogImage(`data:${file.type};base64,${buffer.toString("base64")}`);
    return Response.json({ url });
  } catch {
    return Response.json({ message: "Upload failed. Please try again." }, { status: 502 });
  }
}
