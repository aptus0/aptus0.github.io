import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES_BUILD === "1";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
