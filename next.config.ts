import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // 나중에 백엔드 API 서버나 S3 버킷 주소가 생기면 여기에 추가하시면 됩니다!
      // {
      //   protocol: 'https',
      //   hostname: 'image.buynest.com',
      // },
    ],
  },
};

export default nextConfig;
