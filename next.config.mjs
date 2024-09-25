import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*.kakaocdn.net",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "rxlogxfquswjsszfcjuv.supabase.co",
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "meetie",
  project: "meetie",
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  silent: false,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
