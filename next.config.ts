import type { NextConfig } from 'next';

/**
 * The site is deployed to GitHub Pages, which only serves static files,
 * so the app is exported as fully static HTML/CSS/JS into `out/`.
 */
const nextConfig: NextConfig = {
  output: 'export',
  // Emit `/projects/index.html` so GitHub Pages resolves `/projects/` cleanly.
  trailingSlash: true,
  // The Image Optimization API needs a server; images are pre-compressed instead.
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
