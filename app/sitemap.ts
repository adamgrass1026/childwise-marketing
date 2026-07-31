import type { MetadataRoute } from "next";

const SITE_URL = "https://www.childwisesoftware.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-07-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date("2026-07-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/payment-fees`,
      lastModified: new Date("2026-07-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
