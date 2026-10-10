import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — the site has no server code, so this ships as
  // plain static assets (ideal for Cloudflare static hosting).
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
