import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"], // Support JS, JSX, TS, TSX, MD, and MDX files
  experimental: {
    mdxRs: true,  // Support the experimental MDX with the Rust compiler
  },
  reactStrictMode: true,  // Enable React Strict Mode for better development experience
  swcMinify: true,  // Enable SWC-based minification for better performance
  // Vercel will automatically handle server-side rendering, dynamic routes, and static pages,
  // so no need for additional output settings here
};

export default withContentlayer(nextConfig);
