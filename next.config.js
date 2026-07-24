/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Type-checking and linting run separately (`tsc --noEmit`, ESLint, and CI),
  // not inside `next build`. Next's in-build worker-based checker crashes on
  // some hosts (Jest worker WorkerError), which would break Docker/CI builds.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
  },
}

module.exports = nextConfig
