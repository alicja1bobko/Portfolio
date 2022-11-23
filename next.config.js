/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "media-exp1.licdn.com",
      "www.w3.org",
      "upload.wikimedia.org",
      "vm.pl",

      "avatars.githubusercontent.com",
      "sass-lang.com",
      "greensock.com",
      "seeklogo.com",
      "www.w3schools.com",
    ],
  },
};

module.exports = nextConfig
