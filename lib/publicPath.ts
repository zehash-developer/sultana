/**
 * Static assets in `public/` must include the deploy base path (e.g. `/sultana`)
 * on GitHub project pages. Next.js does not always prefix `next/image` `src` for
 * export + basePath, so we normalize here.
 */
export function publicUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** For Open Graph / metadata: path relative to `metadataBase` (no leading slash on host root). */
export function ogImagePath(absolutePublicPath: string): string {
  return absolutePublicPath.replace(/^\//, "");
}
