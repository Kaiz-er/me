/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/me" : "",
  assetPrefix: isProd ? "/me/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
