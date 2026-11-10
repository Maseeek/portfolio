import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "framer-motion"],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/05-the-full-portfolio.html",
        },
        {
          source: "/index.html",
          destination: "/05-the-full-portfolio.html",
        },
        {
          source: "/1",
          destination: "/prototype-1.html",
        },
        {
          source: "/2",
          destination: "/prototype-2.html",
        },
        {
          source: "/3",
          destination: "/prototype-3.html",
        },
      ],
      afterFiles: [],
      fallback: [
        {
          source: "/nothing-but-net",
          destination: "/nothing-but-net/index.html",
        },
        {
          source: "/nothing-but-net/:path*",
          destination: "/nothing-but-net/index.html",
        },
      ],
    };
  },
};

export default nextConfig;


