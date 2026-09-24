import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true, remotePatterns: [] },
  poweredByHeader: false,
};

export default nextConfig;
