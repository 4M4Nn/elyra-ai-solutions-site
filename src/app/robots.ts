import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
