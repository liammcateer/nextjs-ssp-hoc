/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-GB", "de"],
    defaultLocale: "en-GB",
  },
};

module.exports = nextConfig;
