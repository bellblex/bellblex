/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    mdxRs: true, // Keep this if you're using MDX
  },
};

export default nextConfig;
