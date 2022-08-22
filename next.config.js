/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/recipe-app",
  assetPrefix: "/recipe-app",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
