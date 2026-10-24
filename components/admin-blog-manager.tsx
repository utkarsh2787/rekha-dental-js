"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AdminNav } from "@/components/admin-nav";

type BodyBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string };

type StoredBlog = {
  path: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  author: string;
  published: string;
  publishedDate: string;
  readTime: string;
  category?: string;
  heroImage: string;
  body: BodyBlock[];
};

type FormState = {
  path: string | null;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  author: string;
  publishedDate: string;
  readTime: string;
  category: string;
  heroImage: string;
  body: BodyBlock[];
};

const inputClass = "rounded-lg border border-[#D8CEC0] px-3 py-2 text-sm";
const labelClass = "text-xs font-semibold uppercase tracking-wide text-[#555]";
const smallButton = "rounded-lg border border-[#D8CEC0] px-3 py-1.5 text-xs font-semibold text-[#2c2c2c] hover:border-[#16412d] disabled:opacity-40";

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function emptyForm(): FormState {
  return {
    path: null,
    title: "",
    description: "",
    seoTitle: "",
    seoDescription: "",
    keywords: "",
    author: "Rekha Dental Clinic",
    publishedDate: today(),
    readTime: "5",
    category: "",
    heroImage: "",
    body: [{ type: "paragraph", text: "" }],
  };
}

function formFromBlog(blog: StoredBlog): FormState {
  return {
    path: blog.path,
    title: blog.title,
    description: blog.description,
    seoTitle: blog.seoTitle,
    seoDescription: blog.seoDescription,
    keywords: blog.keywords.join(", "),
    author: blog.author,
    publishedDate: blog.publishedDate,
    readTime: blog.readTime,
    category: blog.category ?? "",
    heroImage: blog.heroImage,
    body: blog.body,
  };
}

async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.set("file", file);
  const response = await fetch("/api/admin/blogs/image", { method: "POST", body: form });
  const body = await response.json().catch(() => null);
  if (!response.ok || typeof body?.url !== "string") throw new Error(body?.message ?? "Image upload failed.");
  return body.url;
}

export function AdminBlogManager() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<StoredBlog[]>([]);
  const [builtInPaths, setBuiltInPaths] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [deletingPath, setDeletingPath] = useState<string | null>(null);

  const loadBlogs = async () => {
    try {
      const response = await fetch("/api/admin/blogs", { cache: "no-store" });
      if (!response.ok) throw new Error();
      const body: { posts?: StoredBlog[]; builtInPaths?: string[] } = await response.json();
      setBlogs(body.posts ?? []);
      setBuiltInPaths(body.builtInPaths ?? []);
      setError(null);
    } catch {
      setError("Could not load blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch("/api/admin/blogs", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((body: { posts?: StoredBlog[]; builtInPaths?: string[] }) => {
        setBlogs(body.posts ?? []);
        setBuiltInPaths(body.builtInPaths ?? []);
        setError(null);
      })
      .catch(() => setError("Could not load blogs."))
      .finally(() => setLoading(false));
  }, []);

  const update = (patch: Partial<FormState>) => setForm((current) => (current ? { ...current, ...patch } : current));

  const updateBlock = (index: number, block: BodyBlock) =>
    setForm((current) => (current ? { ...current, body: current.body.map((entry, i) => (i === index ? block : entry)) } : current));

  const moveBlock = (index: number, direction: -1 | 1) =>
    setForm((current) => {
      if (!current) return current;
      const target = index + direction;
      if (target < 0 || target >= current.body.length) return current;
      const body = current.body.slice();
      [body[index], body[target]] = [body[target], body[index]];
      return { ...current, body };
    });

  const removeBlock = (index: number) =>
    setForm((current) => (current ? { ...current, body: current.body.filter((_, i) => i !== index) } : current));

  const addBlock = (block: BodyBlock) => setForm((current) => (current ? { ...current, body: [...current.body, block] } : current));

  const onHeroFile = async (file: File | undefined) => {
    if (!file) return;
    setUploadingKey("hero");
    setError(null);
    try {
      update({ heroImage: await uploadImage(file) });
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Image upload failed.");
    } finally {
      setUploadingKey(null);
    }
  };

  const onBlockFile = async (index: number, alt: string, file: File | undefined) => {
    if (!file) return;
    setUploadingKey(`block-${index}`);
    setError(null);
    try {
      updateBlock(index, { type: "image", src: await uploadImage(file), alt });
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Image upload failed.");
    } finally {
      setUploadingKey(null);
    }
  };

  const onSave = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form) return;
    setSaving(true);
    setError(null);
    try {
      const payload = {
        path: form.path ?? undefined,
        title: form.title,
        description: form.description,
        seoTitle: form.seoTitle,
        seoDescription: form.seoDescription,
        keywords: form.keywords.split(",").map((keyword) => keyword.trim()).filter(Boolean),
        author: form.author,
        publishedDate: form.publishedDate,
        readTime: form.readTime,
        category: form.category,
        heroImage: form.heroImage,
        body: form.body,
      };
      const response = await fetch("/api/admin/blogs", {
        method: form.path ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.message ?? "Save failed.");
        return;
      }
      setForm(null);
      await loadBlogs();
    } finally {
      setSaving(false);
    }
  };

  const onDelete = async (blog: StoredBlog) => {
    if (!window.confirm(`Delete "${blog.title}"? This cannot be undone.`)) return;
    setDeletingPath(blog.path);
    setError(null);
    try {
      const response = await fetch("/api/admin/blogs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: blog.path }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.message ?? "Delete failed.");
        return;
      }
      setBlogs((current) => current.filter((entry) => entry.path !== blog.path));
    } finally {
      setDeletingPath(null);
    }
  };

  const onLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold text-[#2c2c2c]">Blog Admin</h1>
          <AdminNav active="/admin/blogs" />
        </div>
        <button type="button" onClick={onLogout} className="rounded-lg border border-[#D8CEC0] px-4 py-2 text-sm font-semibold text-[#2c2c2c] hover:border-[#16412d]">
          Log out
        </button>
      </div>

      {error ? <p className="mb-4 text-sm text-red-600">{error}</p> : null}

      {form ? (
        <form onSubmit={onSave} className="flex flex-col gap-5 rounded-xl border border-[#D8CEC0] bg-white p-5">
          <h2 className="text-lg font-semibold text-[#2c2c2c]">{form.path ? "Edit blog" : "New blog"}</h2>

          <div className="flex flex-col gap-1">
            <label className={labelClass}>Title</label>
            <input type="text" value={form.title} onChange={(event) => update({ title: event.target.value })} className={inputClass} />
          </div>

          <div className="flex flex-col gap-1">
            <label className={labelClass}>Short description (shown on cards)</label>
            <textarea value={form.description} onChange={(event) => update({ description: event.target.value })} rows={2} className={inputClass} />
          </div>

          <div className="grid gap-4 sm:grid-cols-4">
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className={labelClass}>Author</label>
              <input type="text" value={form.author} onChange={(event) => update({ author: event.target.value })} className={inputClass} />
            </div>
            <div className="flex flex-col gap-1">
              <label className={labelClass}>Published</label>
              <input type="date" value={form.publishedDate} onChange={(event) => update({ publishedDate: event.target.value })} className={inputClass} />
            </div>
            <div className="flex flex-col gap-1">
              <label className={labelClass}>Read time (min)</label>
              <input type="text" value={form.readTime} onChange={(event) => update({ readTime: event.target.value })} className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className={labelClass}>Category (optional)</label>
            <input type="text" value={form.category} onChange={(event) => update({ category: event.target.value })} placeholder="e.g. dental-implants" className={inputClass} />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClass}>Hero image</label>
            {form.heroImage ? (
              <div className="relative h-40 w-64 overflow-hidden rounded-lg border border-[#D8CEC0]">
                <Image src={form.heroImage} alt="Hero preview" fill sizes="256px" className="object-cover" />
              </div>
            ) : null}
            <input type="file" accept="image/*" onChange={(event) => onHeroFile(event.target.files?.[0])} className="text-sm" />
            {uploadingKey === "hero" ? <p className="text-xs text-[#555]">Uploading...</p> : null}
          </div>

          <div className="flex flex-col gap-3">
            <label className={labelClass}>Content</label>
            {form.body.map((block, index) => (
              <div key={index} className="flex flex-col gap-2 rounded-lg border border-[#EFE7DB] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#B89B5E]">{block.type}</span>
                  <div className="flex gap-1">
                    <button type="button" onClick={() => moveBlock(index, -1)} disabled={index === 0} aria-label="Move block up" className={smallButton}>↑</button>
                    <button type="button" onClick={() => moveBlock(index, 1)} disabled={index === form.body.length - 1} aria-label="Move block down" className={smallButton}>↓</button>
                    <button type="button" onClick={() => removeBlock(index)} className={smallButton}>Remove</button>
                  </div>
                </div>
                {block.type === "heading" ? (
                  <input type="text" value={block.text} onChange={(event) => updateBlock(index, { type: "heading", text: event.target.value })} placeholder="Heading" className={inputClass} />
                ) : block.type === "paragraph" ? (
                  <textarea value={block.text} onChange={(event) => updateBlock(index, { type: "paragraph", text: event.target.value })} rows={5} placeholder="Paragraph" className={inputClass} />
                ) : (
                  <div className="flex flex-col gap-2">
                    {block.src ? (
                      <div className="relative h-32 w-48 overflow-hidden rounded-lg border border-[#D8CEC0]">
                        <Image src={block.src} alt={block.alt || "Blog image"} fill sizes="192px" className="object-cover" />
                      </div>
                    ) : null}
                    <input type="file" accept="image/*" onChange={(event) => onBlockFile(index, block.alt, event.target.files?.[0])} className="text-sm" />
                    {uploadingKey === `block-${index}` ? <p className="text-xs text-[#555]">Uploading...</p> : null}
                    <input type="text" value={block.alt} onChange={(event) => updateBlock(index, { ...block, alt: event.target.value })} placeholder="Image description (alt text)" className={inputClass} />
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => addBlock({ type: "heading", text: "" })} className={smallButton}>+ Heading</button>
              <button type="button" onClick={() => addBlock({ type: "paragraph", text: "" })} className={smallButton}>+ Paragraph</button>
              <button type="button" onClick={() => addBlock({ type: "image", src: "", alt: "" })} className={smallButton}>+ Image</button>
            </div>
          </div>

          <details className="rounded-lg border border-[#EFE7DB] p-3">
            <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wide text-[#555]">SEO (optional)</summary>
            <div className="mt-3 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className={labelClass}>SEO title</label>
                <input type="text" value={form.seoTitle} onChange={(event) => update({ seoTitle: event.target.value })} placeholder="Defaults to “Title | Rekha Dental”" className={inputClass} />
              </div>
              <div className="flex flex-col gap-1">
                <label className={labelClass}>SEO description</label>
                <textarea value={form.seoDescription} onChange={(event) => update({ seoDescription: event.target.value })} rows={2} placeholder="Defaults to the short description" className={inputClass} />
              </div>
              <div className="flex flex-col gap-1">
                <label className={labelClass}>Keywords (comma separated)</label>
                <input type="text" value={form.keywords} onChange={(event) => update({ keywords: event.target.value })} className={inputClass} />
              </div>
            </div>
          </details>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving || uploadingKey !== null || !form.title.trim() || !form.description.trim() || !form.heroImage}
              className="rounded-lg bg-[#16412d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#093528] disabled:opacity-50"
            >
              {saving ? "Saving..." : form.path ? "Save changes" : "Publish blog"}
            </button>
            <button type="button" onClick={() => setForm(null)} disabled={saving} className="rounded-lg border border-[#D8CEC0] px-5 py-2.5 text-sm font-semibold text-[#2c2c2c] hover:border-[#16412d]">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <button type="button" onClick={() => setForm(emptyForm())} className="mb-6 rounded-lg bg-[#16412d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#093528]">
            New blog
          </button>

          {loading ? (
            <p className="text-sm text-[#555]">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-sm text-[#555]">No admin-created blogs yet.</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {blogs.map((blog) => (
                <li key={blog.path} className="flex items-center gap-4 rounded-xl border border-[#D8CEC0] bg-white p-3">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
                    <Image src={blog.heroImage} alt={blog.title} fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[#2c2c2c]">{blog.title}</p>
                    <p className="truncate text-xs text-[#555]">{blog.author} · {blog.published}</p>
                  </div>
                  <a href={`/${blog.path}`} target="_blank" rel="noreferrer" className={smallButton}>View</a>
                  <button type="button" onClick={() => setForm(formFromBlog(blog))} className={smallButton}>Edit</button>
                  <button type="button" onClick={() => onDelete(blog)} disabled={deletingPath === blog.path} className={smallButton}>
                    {deletingPath === blog.path ? "..." : "Delete"}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {builtInPaths.length > 0 ? (
            <p className="mt-8 text-xs text-[#555]">
              {builtInPaths.length} built-in blogs are defined in code (content/blogs.ts) and aren’t editable here.
            </p>
          ) : null}
        </>
      )}
    </div>
  );
}
