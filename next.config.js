/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
};

module.exports = nextConfig;
