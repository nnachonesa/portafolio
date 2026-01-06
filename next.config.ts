import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        config.resolve.fallback = {
            fs: false,
            path: false,
            os: false,
            ...config.resolve.fallback,
        };
        return config;
    },
    /* config options here */
    devIndicators: false,
    images: {
        remotePatterns: [
            new URL("https://avatars.githubusercontent.com/u/76927919?v=4"),
        ],
    },
};

export default nextConfig;
