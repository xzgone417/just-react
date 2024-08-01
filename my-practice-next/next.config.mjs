/** @type {import('next').NextConfig} */

import path from "path";
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      "@public": path.resolve(__dirname, "public"),
      "@json": path.resolve(__dirname, "json"),
    };

    return config;
  },
  //   sassOptions: {
  //     includePaths: [path.join(__dirname, "styles")],
  //   },
};

export default nextConfig;
