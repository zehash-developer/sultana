import type { NextConfig } from "next";

/** For GitHub project pages set e.g. `BASE_PATH=/my-repo` (leading slash, no trailing slash). */
const rawBase = process.env.BASE_PATH?.trim() ?? "";
const basePath = rawBase.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
  // Same value as BASE_PATH so client/server code can prefix static asset URLs.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
