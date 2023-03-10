const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  i18n,
  images: {
    remotePatterns: [
      {
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

module.exports = nextConfig;
