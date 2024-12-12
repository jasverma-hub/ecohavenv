import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable React strict mode for better error tracking
  reactStrictMode: true,
  // Optimize SWC for better build performance
  swcMinify: true,
  // Add experimental features (if needed)
  experimental: {
    scrollRestoration: true, // Improves user experience when navigating back
  },
  // Add compression for better performance
  compress: true,
  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Enable tree-shaking and bundle optimizations
      config.optimization.splitChunks = {
        chunks: 'all',
      };
    }
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  // Sentry options (same as before)
  org: "ecohaven-ventures",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
