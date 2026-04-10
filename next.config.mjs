/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-1774244764160-c6db8d01c4a8/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
