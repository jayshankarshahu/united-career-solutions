const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/united-career-solutions',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
