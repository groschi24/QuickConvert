import type { MetadataRoute } from "next";
import { loadAllUnitConfigs } from "@/utils/loadUnitConfigs";
import { getAllPosts } from "@/utils/mdxUtils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://quickconvert.app";

  // Generate home page URL
  const homeUrl = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  // Load all unit configurations
  const unitGroups = await loadAllUnitConfigs();

  // Generate category pages URLs
  const categoryUrls = Object.entries(unitGroups).flatMap(([groupId, group]) =>
    Object.entries(group.categories).map(([category]) => ({
      url: `${baseUrl}/${category}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  // Generate conversion pages URLs
  const conversionUrls = Object.entries(unitGroups).flatMap(([_, group]) =>
    Object.entries(group.categories).flatMap(([category, config]) => {
      const unitEntries = Object.entries(config.units);
      return unitEntries.flatMap(([fromUnit]) =>
        unitEntries
          .filter(([toUnit]) => fromUnit !== toUnit)
          .map(([toUnit]) => ({
            url: `${baseUrl}/${category}/${fromUnit}/${toUnit}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
          })),
      );
    }),
  );

  // Generate blog-related URLs
  const blogIndexUrl = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  };

  // Get all blog posts and generate their URLs
  const posts = await getAllPosts();
  const blogPostUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

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

  return [
    homeUrl,
    blogIndexUrl,
    ...blogPostUrls,
    ...categoryUrls,
    ...conversionUrls,
    ...staticPages,
  ];
}
