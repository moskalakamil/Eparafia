/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  i18n: {
    defaultLocale: "pl",
    locales: ["pl"],
  },
};

module.exports = nextConfig;
