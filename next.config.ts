import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'y8q7br14f8.ufs.sh'
      }
    ]
  }
};

export default nextConfig;
