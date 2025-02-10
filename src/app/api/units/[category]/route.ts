import type { UnitCategory } from "@/types/categoryTypes";
import { type NextRequest, NextResponse } from "next/server";

type UnitConfig = Record<string, unknown>;
type CategoryGroup = { id: string; label: string };
type CategoryGroupsConfig = { groups: CategoryGroup[] };

type UnitConfigModule = { default: UnitConfig };
type CategoryGroupsModule = { default: CategoryGroupsConfig };

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: UnitCategory }> },
) {
  try {
    const { category } = await params;

    // First try to load the category directly
    try {
      const unitConfigModule = (await import(
        `@/config/categories/${category}.json`
      )) as UnitConfigModule;
      const rawConfig = unitConfigModule.default;
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
            // If the category exists as a subcategory, return it wrapped in an object
            return NextResponse.json({
              [category]: parentConfig[category],
            });
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
