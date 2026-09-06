import type { MetadataRoute } from "next";
import { allContentPages } from "@/content/pages";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const excluded = new Set(["appointment/ghaziabad", "best-dentist-near-me", "post-treatment-care", "payment"]);
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...allContentPages.filter((page) => !excluded.has(page.path)).map((page) => ({
      url: `${siteConfig.url}/${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.kind === "article" ? "monthly" as const : "weekly" as const,
      priority: page.kind === "treatment" ? 0.8 : 0.7,
    })),
  ];
}
