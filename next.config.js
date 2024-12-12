/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
   
  },
  images: {
    domains: ['s3.amazonaws.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
