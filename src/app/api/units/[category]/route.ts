import { type NextRequest, NextResponse } from "next/server";
import type { UnitCategory } from "@/types/units";

type UnitConfig = Record<string, unknown>;
type CategoryGroup = { id: string; label: string };
type CategoryGroupsConfig = { groups: CategoryGroup[] };

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: UnitCategory }> },
) {
  try {
    const { category } = await params;

    // First try to load the category directly
    try {
      const rawConfig = (await import(
        `@/config/categories/${category}.json`
      ).then((m) => m.default)) as UnitConfig;
      return NextResponse.json(rawConfig);
    } catch {
      // If direct import fails, check parent categories from categoryGroups.json
      const { groups } = (await import("@/config/categoryGroups.json").then(
        (m) => m.default,
      )) as CategoryGroupsConfig;
      const parentCategories = groups.map((group) => group.id);

      for (const parentCategory of parentCategories) {
        try {
          const parentConfig = (await import(
            `@/config/categories/${parentCategory}.json`
          ).then((m) => m.default)) as UnitConfig;

          if (category in parentConfig) {
            // If the category exists as a subcategory, return it wrapped in an object
            return NextResponse.json({
              [category]: parentConfig[category as keyof typeof parentConfig],
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
