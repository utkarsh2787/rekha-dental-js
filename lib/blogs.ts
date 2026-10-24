import { unstable_cache } from "next/cache";
import { blogPosts as staticBlogPosts, type BlogBodyBlock, type BlogPost } from "@/content/blogs";
import type { ContentPage } from "@/content/pages";
import { cloudinary } from "@/lib/cloudinary";

export const BLOG_DATA_FOLDER = "blog-posts";
export const BLOG_IMAGE_FOLDER = "blog-images";
export const BLOG_CACHE_TAG = "blogs";

const IMAGE_URL_PREFIX = "https://res.cloudinary.com/";

export type StoredBlogPost = Omit<BlogPost, "number"> & {
  publishedDate: string;
  createdAt: number;
};

export type BlogInput = {
  slug?: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  author: string;
  publishedDate: string;
  readTime: string;
  category: string;
  heroImage: string;
  body: BlogBodyBlock[];
};

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/, "");
}

function slugFromPath(path: string): string {
  return path.replace(/^blogs\//, "");
}

function formatPublished(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function isStoredPost(value: unknown): value is StoredBlogPost {
  if (typeof value !== "object" || value === null) return false;
  const post = value as Partial<StoredBlogPost>;
  return typeof post.path === "string" && typeof post.title === "string" && Array.isArray(post.body) && typeof post.heroImage === "string";
}

async function readStoredBlogs(): Promise<StoredBlogPost[]> {
  const result = await cloudinary.api.resources({
    resource_type: "raw",
    type: "upload",
    prefix: `${BLOG_DATA_FOLDER}/`,
    max_results: 500,
  });
  const posts = await Promise.all(
    (result.resources ?? []).map(async (resource: { secure_url: string }) => {
      try {
        // secure_url carries the asset version, so each edit is a fresh URL.
        const response = await fetch(resource.secure_url);
        return response.ok ? ((await response.json()) as unknown) : null;
      } catch {
        return null;
      }
    }),
  );
  return posts.filter(isStoredPost);
}

const readStoredBlogsCached = unstable_cache(readStoredBlogs, ["stored-blogs"], { tags: [BLOG_CACHE_TAG], revalidate: 3600 });

function mergePosts(stored: StoredBlogPost[]): BlogPost[] {
  const storedPaths = new Set(stored.map((post) => post.path));
  const all: BlogPost[] = [
    ...stored.map((post) => ({ ...post, number: "" })),
    ...staticBlogPosts.filter((post) => !storedPaths.has(post.path)),
  ];
  all.sort((a, b) => (Date.parse(b.published) || 0) - (Date.parse(a.published) || 0));
  return all.map((post, index) => ({ ...post, number: String(index + 1).padStart(2, "0") }));
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    return mergePosts(await readStoredBlogsCached());
  } catch {
    return mergePosts([]);
  }
}

export async function getBlogPostByPath(path: string): Promise<BlogPost | undefined> {
  return (await getAllBlogPosts()).find((post) => post.path === path);
}

export async function getBlogContentPage(path: string): Promise<ContentPage | null> {
  if (!path.startsWith("blogs/")) return null;
  const post = await getBlogPostByPath(path);
  if (!post) return null;
  return {
    path: post.path,
    kind: "article",
    eyebrow: post.category || "Rekha Dental Blogs",
    title: post.title,
    description: post.seoDescription,
    intro: post.description,
    image: post.heroImage,
    heroImage: post.heroImage,
    imageAlt: post.title,
  };
}

/** Fresh (uncached) read for the admin screen. */
export async function listStoredBlogs(): Promise<StoredBlogPost[]> {
  return (await readStoredBlogs()).sort((a, b) => b.createdAt - a.createdAt);
}

export function builtInBlogPaths(): string[] {
  return staticBlogPosts.map((post) => post.path);
}

function asString(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isAllowedImageSrc(src: string): boolean {
  return src.startsWith(IMAGE_URL_PREFIX) || src.startsWith("/images/");
}

export function parseBlogInput(json: unknown): { input: BlogInput } | { error: string } {
  if (typeof json !== "object" || json === null) return { error: "Invalid request." };
  const raw = json as Record<string, unknown>;

  const title = asString(raw.title, 200);
  const description = asString(raw.description, 600);
  const heroImage = asString(raw.heroImage, 500);
  const publishedDate = asString(raw.publishedDate, 10);

  if (!title) return { error: "Title is required." };
  if (!description) return { error: "A short description is required." };
  if (!heroImage || !isAllowedImageSrc(heroImage)) return { error: "A hero image is required." };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(publishedDate) || Number.isNaN(Date.parse(publishedDate))) {
    return { error: "A valid published date is required." };
  }
  if (!Array.isArray(raw.body) || raw.body.length === 0) return { error: "Add at least one content block." };

  const body: BlogBodyBlock[] = [];
  for (const block of raw.body as unknown[]) {
    if (typeof block !== "object" || block === null) return { error: "Invalid content block." };
    const entry = block as Record<string, unknown>;
    if (entry.type === "heading" || entry.type === "paragraph") {
      const text = asString(entry.text, 10000);
      if (text) body.push({ type: entry.type, text });
    } else if (entry.type === "image") {
      const src = asString(entry.src, 500);
      if (!src || !isAllowedImageSrc(src)) return { error: "Every image block needs an uploaded image." };
      body.push({ type: "image", src, alt: asString(entry.alt, 200) });
    } else {
      return { error: "Invalid content block." };
    }
  }
  if (body.length === 0) return { error: "Add at least one content block." };

  const keywords = Array.isArray(raw.keywords)
    ? (raw.keywords as unknown[]).map((keyword) => asString(keyword, 80)).filter(Boolean).slice(0, 30)
    : [];

  return {
    input: {
      slug: asString(raw.slug, 80) || undefined,
      title,
      description,
      seoTitle: asString(raw.seoTitle, 200) || `${title} | Rekha Dental`,
      seoDescription: asString(raw.seoDescription, 400) || description,
      keywords: keywords.length > 0 ? keywords : [title, "Rekha Dental"],
      author: asString(raw.author, 100) || "Rekha Dental Clinic",
      publishedDate,
      readTime: asString(raw.readTime, 10) || "5",
      category: asString(raw.category, 60),
      heroImage,
      body,
    },
  };
}

export async function createStoredBlog(input: BlogInput): Promise<StoredBlogPost> {
  const slug = slugify(input.title);
  if (!slug) throw new BlogConflictError("Title must contain letters or numbers.");
  const path = `blogs/${slug}`;
  const existing = await readStoredBlogs();
  if (builtInBlogPaths().includes(path) || existing.some((post) => post.path === path)) {
    throw new BlogConflictError("A blog with this title already exists.");
  }
  return writeStoredBlog(path, input, Date.now());
}

export async function updateStoredBlog(path: string, input: BlogInput): Promise<StoredBlogPost> {
  const existing = (await readStoredBlogs()).find((post) => post.path === path);
  if (!existing) throw new BlogConflictError("Blog not found.");
  return writeStoredBlog(path, input, existing.createdAt);
}

async function writeStoredBlog(path: string, input: BlogInput, createdAt: number): Promise<StoredBlogPost> {
  const post: StoredBlogPost = {
    path,
    title: input.title,
    description: input.description,
    seoTitle: input.seoTitle,
    seoDescription: input.seoDescription,
    keywords: input.keywords,
    author: input.author,
    published: formatPublished(input.publishedDate),
    publishedDate: input.publishedDate,
    readTime: input.readTime,
    category: input.category || undefined,
    heroImage: input.heroImage,
    body: input.body,
    createdAt,
  };
  const dataUrl = `data:application/json;base64,${Buffer.from(JSON.stringify(post)).toString("base64")}`;
  await cloudinary.uploader.upload(dataUrl, {
    resource_type: "raw",
    public_id: `${BLOG_DATA_FOLDER}/${slugFromPath(path)}.json`,
    overwrite: true,
    invalidate: true,
  });
  return post;
}

export async function deleteStoredBlog(path: string): Promise<void> {
  if (!path.startsWith("blogs/") || builtInBlogPaths().includes(path)) {
    throw new BlogConflictError("This blog cannot be deleted.");
  }
  await cloudinary.uploader.destroy(`${BLOG_DATA_FOLDER}/${slugFromPath(path)}.json`, {
    resource_type: "raw",
    invalidate: true,
  });
}

export async function uploadBlogImage(fileDataUrl: string): Promise<string> {
  const uploaded = await cloudinary.uploader.upload(fileDataUrl, { folder: BLOG_IMAGE_FOLDER });
  return uploaded.secure_url;
}

export class BlogConflictError extends Error {}
