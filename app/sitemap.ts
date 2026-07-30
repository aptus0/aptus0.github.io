import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aptus0.github.io/",
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://aptus0.github.io/projects",
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://aptus0.github.io/services",
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aptus0.github.io/about",
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aptus0.github.io/blog",
      lastModified: new Date("2026-07-31"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
