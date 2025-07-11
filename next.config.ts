import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
