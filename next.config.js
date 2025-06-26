// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['your-cdn.com'],
  },
  experimental: {
    // Permite importar ESM externals como remark-gfm
    esmExternals: 'loose',
  },
});

module.exports = nextConfig;
