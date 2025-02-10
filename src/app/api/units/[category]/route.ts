import type { UnitCategory } from "@/types/categoryTypes";
import { type NextRequest, NextResponse } from "next/server";

type UnitConfig = Record<string, unknown>;
type CategoryGroup = { id: string; label: string };
type CategoryGroupsConfig = { groups: CategoryGroup[] };

type UnitConfigModule = { default: UnitConfig };
type CategoryGroupsModule = { default: CategoryGroupsConfig };

type CacheEntry = {
  data: UnitConfig;
  timestamp: number;
};

const cache = new Map<string, CacheEntry>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: UnitCategory }> },
) {
  try {
    const { category } = await params;

    // Check cache first
    const cachedEntry = cache.get(category);
    if (cachedEntry && Date.now() - cachedEntry.timestamp < CACHE_DURATION) {
      return NextResponse.json(cachedEntry.data);
    }

    // If not in cache or expired, load from file system
    try {
      const unitConfigModule = (await import(
        `@/config/categories/${category}.json`
      )) as UnitConfigModule;
      const rawConfig = unitConfigModule.default;

      // Store in cache
      cache.set(category, {
        data: rawConfig,
        timestamp: Date.now(),
      });

      return NextResponse.json(rawConfig);
    } catch {
      // If direct import fails, check parent categories from categoryGroups.json
      const categoryGroupsModule = (await import(
        "@/config/categoryGroups.json"
      )) as CategoryGroupsModule;
      const { groups } = categoryGroupsModule.default;
      const parentCategories = groups.map((group) => group.id);

      for (const parentCategory of parentCategories) {
        try {
          const parentConfigModule = (await import(
            `@/config/categories/${parentCategory}.json`
          )) as UnitConfigModule;
          const parentConfig = parentConfigModule.default;

          if (category in parentConfig) {
            const responseData = {
              [category]: parentConfig[category],
            };

            // Store in cache
            cache.set(category, {
              data: responseData,
              timestamp: Date.now(),
            });

            return NextResponse.json(responseData);
          }
        } catch {
          continue;
        }
      }
    }

    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  } catch (error) {
    console.error(`Error loading config for category:`, error);
    return NextResponse.json(
      { error: "Failed to load unit configuration" },
      { status: 500 },
    );
  }
}
