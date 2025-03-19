/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';

  if (process.env.CF_PAGES_URL) {
    nextConfig.images = {
      domains: ['wsrv.nl'],
      loaderFile: './src/utils/wsrvImageLoader.js'
    };
  } else {
    nextConfig.images = {
      unoptimized: true
    };
  }
}

module.exports = nextConfig;
