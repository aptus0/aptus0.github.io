import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://aptus0.github.io/sitemap.xml",
    host: "https://aptus0.github.io",
  };
}
