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
  ];
}
