/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
