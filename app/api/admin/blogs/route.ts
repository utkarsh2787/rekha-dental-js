import { revalidatePath, revalidateTag } from "next/cache";
import { isAdminAuthed } from "@/lib/admin-auth";
import {
  BLOG_CACHE_TAG,
  BlogConflictError,
  builtInBlogPaths,
  createStoredBlog,
  deleteStoredBlog,
  listStoredBlogs,
  parseBlogInput,
  updateStoredBlog,
} from "@/lib/blogs";

const PATH_PATTERN = /^blogs\/[a-z0-9-]+$/;

function unauthorized() {
  return Response.json({ message: "Unauthorized." }, { status: 401 });
}

function refreshBlogPages(path?: string) {
  revalidateTag(BLOG_CACHE_TAG, { expire: 0 });
  revalidatePath("/blogs");
  revalidatePath("/sitemap.xml");
  if (path) revalidatePath(`/${path}`);
}

function failure(error: unknown, fallback: string) {
  if (error instanceof BlogConflictError) return Response.json({ message: error.message }, { status: 409 });
  return Response.json({ message: fallback }, { status: 502 });
}

async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export async function GET() {
  if (!(await isAdminAuthed())) return unauthorized();
  try {
    return Response.json({ posts: await listStoredBlogs(), builtInPaths: builtInBlogPaths() });
  } catch {
    return Response.json({ message: "Could not load blogs." }, { status: 502 });
  }
}

export async function POST(request: Request) {
  if (!(await isAdminAuthed())) return unauthorized();
  const parsed = parseBlogInput(await readJson(request));
  if ("error" in parsed) return Response.json({ message: parsed.error }, { status: 400 });

  try {
    const post = await createStoredBlog(parsed.input);
    refreshBlogPages(post.path);
    return Response.json({ post });
  } catch (error) {
    return failure(error, "Could not save the blog. Please try again.");
  }
}

export async function PUT(request: Request) {
  if (!(await isAdminAuthed())) return unauthorized();
  const json = await readJson(request);
  const parsed = parseBlogInput(json);
  if ("error" in parsed) return Response.json({ message: parsed.error }, { status: 400 });

  const path = (json as { path?: unknown }).path;
  if (typeof path !== "string" || !PATH_PATTERN.test(path)) {
    return Response.json({ message: "A valid blog path is required." }, { status: 400 });
  }

  try {
    const post = await updateStoredBlog(path, parsed.input);
    refreshBlogPages(post.path);
    return Response.json({ post });
  } catch (error) {
    return failure(error, "Could not save the blog. Please try again.");
  }
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthed())) return unauthorized();
  const path = ((await readJson(request)) as { path?: unknown } | null)?.path;
  if (typeof path !== "string" || !PATH_PATTERN.test(path)) {
    return Response.json({ message: "A valid blog path is required." }, { status: 400 });
  }

  try {
    await deleteStoredBlog(path);
    refreshBlogPages(path);
    return Response.json({ ok: true });
  } catch (error) {
    return failure(error, "Delete failed. Please try again.");
  }
}
