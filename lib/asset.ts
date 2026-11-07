// GitHub Pages serves the site under /Enterpriseplus.
// next/image (unoptimized) and <video> do not auto-prepend basePath to src,
// so wrap static asset paths with asset().
export const BASE_PATH = '/Enterpriseplus';

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
