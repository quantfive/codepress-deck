import createSWCPlugin from "@quantfive/codepress-engine/swc";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    swcPlugins: [
      // Use the SWC plugin
      createSWCPlugin({
        repo_name: "quantfive/codepress-deck",
      }),
    ],
  },
};

export default nextConfig;
