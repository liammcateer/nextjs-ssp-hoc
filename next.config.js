/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-GB", "de"],
    defaultLocale: "en-GB",
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://jsonplaceholder.typicode.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
