import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: 'export',  // Add this line to ensure the static export is activated
  experimental: {
    mdxRs: true,  // Keep this to support the experimental MDX processing
  },
};

export default withContentlayer(nextConfig);
