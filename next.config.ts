import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/enterpriseplus",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
