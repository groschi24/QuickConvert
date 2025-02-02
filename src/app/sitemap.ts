import type { MetadataRoute } from "next";
import { categories } from "@/config/units";
import { categoryConfigs } from "@/config/categoryConfigs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quickconvert.app";

  // Generate home page URL
  const homeUrl = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  // Generate category pages URLs
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/${category.value}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Generate conversion pages URLs
  const conversionUrls = categories.flatMap((category) => {
    const config = categoryConfigs[category.value];
    if (!config) return [];

    return config.units.flatMap((fromUnit: { value: string }) =>
      config.units.map((toUnit: { value: string }) => ({
        url: `${baseUrl}/${category.value}/${fromUnit.value}/${toUnit.value}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
    );
  });

  return [homeUrl, ...categoryUrls, ...conversionUrls];
}
