import type { APIRoute } from "astro";

const getRobotsTxt = (legacySitemapURL: URL, sitemapIndexURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${legacySitemapURL.href}
Sitemap: ${sitemapIndexURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const legacySitemapURL = new URL("sitemap.xml", site);
  const sitemapIndexURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(legacySitemapURL, sitemapIndexURL));
};
