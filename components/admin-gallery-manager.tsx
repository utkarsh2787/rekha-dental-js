"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type GalleryCategory = "facility" | "technology" | "smiles" | "events";
type GalleryTab = "all" | GalleryCategory;

type GalleryImage = {
  publicId: string;
  url: string;
  alt: string;
  category: GalleryCategory;
  order: number;
};

const categories: Array<{ label: string; value: GalleryCategory }> = [
  { label: "Facility", value: "facility" },
  { label: "Technology", value: "technology" },
  { label: "Smiles", value: "smiles" },
  { label: "Events", value: "events" },
];

const tabs: Array<{ label: string; value: GalleryTab }> = [
  { label: "All", value: "all" },
  ...categories,
];

export function AdminGalleryManager() {
  const router = useRouter();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<GalleryTab>("all");

  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<GalleryCategory>("facility");
  const [alt, setAlt] = useState("");
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [movingId, setMovingId] = useState<string | null>(null);

  const loadImages = async () => {
    try {
      const response = await fetch("/api/gallery", { cache: "no-store" });
      if (!response.ok) throw new Error();
      const body = await response.json();
      setImages(body.images ?? []);
      setError(null);
    } catch {
      setError("Could not load gallery images.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch("/api/gallery", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((body: { images?: GalleryImage[] }) => {
        setImages(body.images ?? []);
        setError(null);
      })
      .catch(() => setError("Could not load gallery images."))
      .finally(() => setLoading(false));
  }, []);

  const onUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.set("file", file);
      form.set("category", category);
      form.set("alt", alt.trim());
      const response = await fetch("/api/admin/gallery", { method: "POST", body: form });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.message ?? "Upload failed.");
        return;
      }
      setFile(null);
      setAlt("");
      await loadImages();
    } finally {
      setUploading(false);
    }
  };

  const onDelete = async (publicId: string) => {
    setDeletingId(publicId);
    setError(null);
    try {
      const response = await fetch("/api/admin/gallery", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicId }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.message ?? "Delete failed.");
        return;
      }
      setImages((current) => current.filter((image) => image.publicId !== publicId));
    } finally {
      setDeletingId(null);
    }
  };

  const visibleImages = useMemo(
    () => (activeTab === "all" ? images : images.filter((image) => image.category === activeTab)).slice().sort((a, b) => a.order - b.order),
    [images, activeTab],
  );

  const onMove = async (visibleIndex: number, direction: "left" | "right") => {
    const targetIndex = direction === "left" ? visibleIndex - 1 : visibleIndex + 1;
    if (targetIndex < 0 || targetIndex >= visibleImages.length) return;

    const current = visibleImages[visibleIndex];
    const target = visibleImages[targetIndex];

    setMovingId(current.publicId);
    setImages((prev) => prev.map((image) => {
      if (image.publicId === current.publicId) return { ...image, order: target.order };
      if (image.publicId === target.publicId) return { ...image, order: current.order };
      return image;
    }));
    try {
      const response = await fetch("/api/admin/gallery/reorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          updates: [
            { publicId: current.publicId, order: target.order },
            { publicId: target.publicId, order: current.order },
          ],
        }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.message ?? "Reorder failed.");
        await loadImages();
      }
    } finally {
      setMovingId(null);
    }
  };

  const onLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#2c2c2c]">Gallery Admin</h1>
        <button
          type="button"
          onClick={onLogout}
          className="rounded-lg border border-[#D8CEC0] px-4 py-2 text-sm font-semibold text-[#2c2c2c] hover:border-[#16412d]"
        >
          Log out
        </button>
      </div>

      <form onSubmit={onUpload} className="mb-10 flex flex-col gap-3 rounded-xl border border-[#D8CEC0] bg-white p-5 sm:flex-row sm:items-end sm:flex-wrap">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-[#555]">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            className="text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-[#555]">Category</label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as GalleryCategory)}
            className="rounded-lg border border-[#D8CEC0] px-3 py-2 text-sm"
          >
            {categories.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-[#555]">Caption / alt text</label>
          <input
            type="text"
            value={alt}
            onChange={(event) => setAlt(event.target.value)}
            placeholder="e.g. Happy patient after smile makeover"
            className="rounded-lg border border-[#D8CEC0] px-3 py-2 text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={uploading || !file || alt.trim().length === 0}
          className="h-fit rounded-lg bg-[#16412d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#093528] disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {error ? <p className="mb-4 text-sm text-red-600">{error}</p> : null}

      <div className="mb-6 flex flex-wrap gap-2" aria-label="Category tabs">
        {tabs.map((tab) => {
          const count = tab.value === "all" ? images.length : images.filter((image) => image.category === tab.value).length;
          const selected = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${selected ? "border-[#16412d] bg-[#16412d] text-white" : "border-[#D8CEC0] text-[#2C2C2C] hover:border-[#16412d]"}`}
            >
              {tab.label} ({count})
            </button>
          );
        })}
      </div>

      {loading ? (
        <p className="text-sm text-[#555]">Loading images...</p>
      ) : visibleImages.length === 0 ? (
        <p className="text-sm text-[#555]">No images in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {visibleImages.map((image, index) => (
            <div key={image.publicId} className="group relative aspect-square overflow-hidden rounded-lg border border-[#D8CEC0]">
              <Image src={image.url} alt={image.alt} fill sizes="200px" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2">
                <p className="truncate text-[10px] text-white">{image.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onDelete(image.publicId)}
                disabled={deletingId === image.publicId}
                className="absolute right-1.5 top-1.5 rounded-full bg-black/70 px-2 py-1 text-[10px] font-semibold text-white opacity-0 transition group-hover:opacity-100 disabled:opacity-100"
              >
                {deletingId === image.publicId ? "..." : "Delete"}
              </button>
              <div className="absolute left-1.5 top-1.5 flex gap-1 opacity-0 transition group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => onMove(index, "left")}
                  disabled={index === 0 || movingId !== null}
                  aria-label="Move earlier"
                  className="grid size-6 place-items-center rounded-full bg-black/70 text-xs font-semibold text-white disabled:opacity-40"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => onMove(index, "right")}
                  disabled={index === visibleImages.length - 1 || movingId !== null}
                  aria-label="Move later"
                  className="grid size-6 place-items-center rounded-full bg-black/70 text-xs font-semibold text-white disabled:opacity-40"
                >
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
