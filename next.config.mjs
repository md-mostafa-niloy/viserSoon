/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: false, 
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [
      '@fortawesome/react-fontawesome', 
      '@fortawesome/free-solid-svg-icons', 
      'lucide-react',
      'date-fns',
      'clsx',
      'tailwind-merge'
    ],
  },
}

export default nextConfig
