import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://artikel.kahade.id",
      lastModified: "2026-10-04",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...articles.map((a) => ({
      url: `https://artikel.kahade.id/${a.slug}`,
      lastModified: a.dateISO,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
