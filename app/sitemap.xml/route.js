import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.bworth.co.in";
  const pages = [
    { path: "", changefreq: "weekly", priority: 1.0 },
    { path: "/about-us", changefreq: "monthly", priority: 0.8 },
    { path: "/our-mission", changefreq: "monthly", priority: 0.7 },
    { path: "/our-vision", changefreq: "monthly", priority: 0.7 },
    { path: "/brands", changefreq: "weekly", priority: 0.8 },
    { path: "/b2b", changefreq: "monthly", priority: 0.7 },
    { path: "/contact-us", changefreq: "monthly", priority: 0.6 },
    { path: "/privacy-policy", changefreq: "yearly", priority: 0.5 },
    { path: "/terms-of-use", changefreq: "yearly", priority: 0.5 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
