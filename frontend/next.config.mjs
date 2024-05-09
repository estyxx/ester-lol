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
      {
        source: '/europython',
        destination: 'https://youtu.be/7_FyRR3yN-k',
        permanent: true,
      },
      {
        source: '/pyconitalia',
        destination: 'https://youtu.be/YHEaPloOaSA',
        permanent: true,
      },
      {
        source: '/breaking-the-stereotype',
        destination: '/breaking-the-stereotype.pdf',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
