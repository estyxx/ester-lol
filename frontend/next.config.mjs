/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.IMAGE_PROTOCOL,
        hostname: process.env.IMAGE_HOSTNAME,
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core'],
  },
};

export default nextConfig;
