import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    suppressHydrationWarning: true
  }
};

export default nextConfig;
