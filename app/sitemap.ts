import type { MetadataRoute } from "next";
import { enPosts, trPosts } from "@/lib/static-posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
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
    {
      url: "https://aptus0.github.io/en",
      lastModified: new Date("2026-07-31"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://aptus0.github.io/en/projects",
      lastModified: new Date("2026-07-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aptus0.github.io/en/services",
      lastModified: new Date("2026-07-31"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://aptus0.github.io/en/about",
      lastModified: new Date("2026-07-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aptus0.github.io/en/blog",
      lastModified: new Date("2026-07-31"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
  const posts: MetadataRoute.Sitemap = [
    ...trPosts.map((post) => ({
      url: `https://aptus0.github.io/blog/${post.slug}`,
      lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: 0.75,
    })),
    ...enPosts.map((post) => ({
      url: `https://aptus0.github.io/en/blog/${post.slug}`,
      lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: 0.65,
    })),
  ];
  return [...pages, ...posts];
}
