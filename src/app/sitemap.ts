import type { MetadataRoute } from "next";
import { loadAllUnitConfigs } from "@/utils/loadUnitConfigs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quickconvert.app";

  // Generate home page URL
  const homeUrl = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  // Load all unit configurations
  const unitConfigs = loadAllUnitConfigs();

  // Generate category pages URLs
  const categoryUrls = Object.entries(unitConfigs).map(([value]) => ({
    url: `${baseUrl}/${value}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Generate conversion pages URLs
  const conversionUrls = Object.entries(unitConfigs).flatMap(
    ([category, config]) => {
      const unitEntries = Object.entries(config.units);
      return unitEntries.flatMap(([fromUnit]) =>
        unitEntries.map(([toUnit]) => ({
          url: `${baseUrl}/${category}/${fromUnit}/${toUnit}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.5,
        })),
      );
    },
  );

  // Generate static pages URLs
  const staticPages = [
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [homeUrl, ...categoryUrls, ...conversionUrls, ...staticPages];
}
