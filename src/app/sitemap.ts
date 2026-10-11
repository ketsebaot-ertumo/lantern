// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lantern.et";
  const now = new Date();
  return [
    { url: base, lastModified: now, priority: 1 },
    { url: `${base}/services`, lastModified: now, priority: 0.9 },
    { url: `${base}/solutions`, lastModified: now, priority: 0.9 },
    { url: `${base}/work`, lastModified: now, priority: 0.9 },
    { url: `${base}/about`, lastModified: now, priority: 0.7 },
    { url: `${base}/insight`, lastModified: now, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, priority: 0.8 },
  ];
}