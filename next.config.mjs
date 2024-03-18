/** @type {import('next').NextConfig} */

const nextConfig = {
  // whitelist the image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
