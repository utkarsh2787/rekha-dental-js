import type { MetadataRoute } from "next";
import { allContentPages } from "@/content/pages";
import { siteConfig } from "@/config/site";
import { getAllBlogPosts } from "@/lib/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = new Set(allContentPages.map((page) => page.path));
  const dynamicBlogs = (await getAllBlogPosts()).filter((post) => !staticPaths.has(post.path));
  const excluded = new Set(["appointment/ghaziabad", "best-dentist-near-me", "post-treatment-care", "payment"]);
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...allContentPages.filter((page) => !excluded.has(page.path)).map((page) => ({
      url: `${siteConfig.url}/${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.kind === "article" ? "monthly" as const : "weekly" as const,
      priority: page.kind === "treatment" ? 0.8 : 0.7,
    })),
    ...dynamicBlogs.map((post) => ({
      url: `${siteConfig.url}/${post.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
