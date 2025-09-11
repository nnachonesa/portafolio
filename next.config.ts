import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images:{
    remotePatterns: [new URL("https://avatars.githubusercontent.com/u/76927919?v=4")]
  }
};

export default nextConfig;
