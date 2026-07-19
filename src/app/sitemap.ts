import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/products/seo-aeo-agent",
    "/products/ai-lead-management",
    "/pricing",
    "/services",
    "/signup",
    "/login",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
