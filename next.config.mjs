/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.hdrezka.ac',
        port: '',
        pathname: '/i/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
      }
    ],
  },
};

export default nextConfig;
