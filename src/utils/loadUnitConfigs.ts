import type { UnitApiResponse } from "@/types/api";
import type { UnitCategory } from "@/types/categoryTypes";

interface UnitConfig {
  label: string;
  units: Record<
    string,
    {
      label: string;
      value: string;
      factor: number;
    }
  >;
  baseUnit?: string | { label: string };
  conversions: Record<
    string,
    {
      to: Record<string, number | string>;
    }
  >;
}

export async function loadUnitConfig(category: UnitCategory): Promise<
  UnitConfig & {
    convertFn: (value: number, from: string, to: string) => number;
  }
> {
  try {
    const categoryStr = String(category);

    const baseUrl =
      typeof window === "undefined"
        ? (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000")
        : "";
    const response = await fetch(`${baseUrl}/api/units/${categoryStr}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${categoryStr} config`);
    }
    const rawConfig = (await response.json()) as UnitApiResponse;

    const config: UnitConfig = {
      label:
        typeof rawConfig[categoryStr]?.label === "string"
          ? rawConfig[categoryStr]?.label
          : typeof rawConfig[categoryStr]?.label === "object" &&
              "label" in rawConfig[categoryStr]?.label
            ? (rawConfig[categoryStr]?.label as { label: string }).label
            : categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1),
      units: {},
      conversions: {},
      baseUnit: undefined,
    };

    // Get the first measurement type
    const firstMeasureConfig = Object.values(rawConfig)[0];
    if (!firstMeasureConfig?.units) {
      throw new Error(
        `Invalid or missing measurement types in ${categoryStr} config`,
      );
    }

    // Set the base unit if specified
    if (firstMeasureConfig.baseUnit) {
      config.baseUnit = firstMeasureConfig.baseUnit;
    }

    // Process units and build conversion table
    Object.entries(firstMeasureConfig.units).forEach(
      ([unitKey, unitConfig]) => {
        type UnitConfigType = {
          conversion?: { formula: string };
          label: string;
        };
        const typedUnitConfig = unitConfig as UnitConfigType;
        const formula = typedUnitConfig?.conversion?.formula ?? "x";
        let factor = 1;

        if (formula !== "x") {
          try {
            // Handle both simple multiplication and complex formulas
            const formulaExpression = formula.trim();
            console.log("formulaExpression: ", formulaExpression);
            console.log("formula: ", formula);
            if (!formulaExpression) {
              throw new Error(`Invalid formula format: ${formula}`);
            }

            // Handle simple multiplication (e.g., "x=x*1000")
            if (
              formulaExpression.startsWith("x*") ||
              formulaExpression.startsWith("x/")
            ) {
              const evalResult = eval(
                formulaExpression.replace("x", "1"),
              ) as number;
              factor = !isNaN(evalResult) ? evalResult : 1;
            } else {
              // For more complex formulas, evaluate with x=1
              const evalResult = eval(
                formulaExpression.replace(/x/g, "1"),
              ) as number;
              factor = !isNaN(evalResult) ? evalResult : 1;
            }

            if (isNaN(factor)) {
              throw new Error(`Invalid formula result: ${factor}`);
            }
          } catch (error) {
            console.error(`Error calculating factor for ${unitKey}:`, error);
            factor = 1;
          }
        }

        config.units[unitKey] = {
          label: typedUnitConfig.label,
          value: unitKey,
          factor,
        };

        // Add conversion formulas
        config.conversions[unitKey] = { to: {} };
        Object.entries(firstMeasureConfig.units).forEach(
          ([toKey, toUnitConfig]) => {
            const typedToUnitConfig = toUnitConfig as UnitConfigType;
            if (unitKey === toKey && config.conversions[unitKey]) {
              config.conversions[unitKey].to[toKey] = 1;
            } else {
              const toFormula = typedToUnitConfig?.conversion?.formula ?? "x";
              try {
                const fromExpression = formula.trim();
                const toExpression = toFormula.trim();

                if (!fromExpression || !toExpression) {
                  throw new Error(
                    `Invalid formula format: ${formula} or ${toFormula}`,
                  );
                }

                if (config.conversions[unitKey]) {
                  // Use the base unit as an intermediary for conversion
                  const baseUnit = firstMeasureConfig.baseUnit;
                  if (baseUnit && unitKey !== baseUnit && toKey !== baseUnit) {
                    // Keep the original formulas for conversion through base unit
                    config.conversions[unitKey].to[toKey] = formula;
                  } else {
                    // Direct conversion when either unit is the base unit
                    config.conversions[unitKey].to[toKey] = formula;
                  }
                }
              } catch (error) {
                console.error(
                  `Error creating conversion formula from ${unitKey} to ${toKey}:`,
                  error,
                );

                if (config.conversions[unitKey]) {
                  config.conversions[unitKey].to[toKey] = "1";
                }
              }
            }
          },
        );
      },
    );

    return {
      ...config,
      convertFn: (value: number, from: string, to: string) => {
        const fromUnit = config.units[from];
        const toUnit = config.units[to];

        if (!fromUnit || !toUnit) {
          throw new Error(`Invalid units: ${from} -> ${to}`);
        }

        return value * (fromUnit.factor / toUnit.factor);
      },
    };
  } catch (error) {
    console.error(`Error loading config for category ${category}:`, error);
    return {
      label: category.charAt(0).toUpperCase() + category.slice(1),
      units: {},
      conversions: {},
      convertFn: () => 0,
    };
  }
}

interface CategoryGroup {
  id: string;
  label: string;
}

interface CategoryGroupsConfig {
  groups: CategoryGroup[];
}

export type GroupedUnitConfigs = Record<
  string,
  {
    label: string;
    categories: Record<
      string,
      UnitConfig & {
        convertFn: (value: number, from: string, to: string) => number;
      }
    >;
  }
>;

export async function loadAllUnitConfigs(): Promise<GroupedUnitConfigs> {
  const baseUrl =
    typeof window === "undefined"
      ? (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000")
      : "";

  let groupsConfig: CategoryGroupsConfig;

  // During build time or server-side, read directly from the file system
  if (typeof window === "undefined") {
    try {
      const fs = await import("fs");
      const path = await import("path");
      const filePath = path.join(
        process.cwd(),
        "src/config/categoryGroups.json",
      );
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const parsedContent = JSON.parse(fileContent) as unknown;
      groupsConfig = parsedContent as CategoryGroupsConfig;
    } catch (error) {
      console.error("Error reading category groups:", error);
      throw new Error("Failed to load category groups");
    }
  } else {
    // In the browser, fetch from API
    const groupsResponse = await fetch(`${baseUrl}/api/categoryGroups`);
    if (!groupsResponse.ok) {
      throw new Error("Failed to fetch category groups");
    }
    const groupsData = (await groupsResponse.json()) as unknown;
    groupsConfig = groupsData as CategoryGroupsConfig;
  }
  const result: GroupedUnitConfigs = {};

  // Process each group and its categories
  await Promise.all(
    groupsConfig.groups.map(async (group) => {
      try {
        let categories: Record<
          string,
          UnitConfig & {
            convertFn: (value: number, from: string, to: string) => number;
          }
        >;

        if (typeof window === "undefined") {
          // During build time, read from file system
          try {
            const fs = await import("fs");
            const path = await import("path");
            const filePath = path.join(
              process.cwd(),
              `src/config/categories/${group.id}.json`,
            );
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const parsedContent = JSON.parse(fileContent) as unknown;
            categories = parsedContent as typeof categories;
          } catch (error) {
            console.error(
              `Error reading categories for group ${group.id}:`,
              error,
            );
            throw new Error(`Failed to load categories for group ${group.id}`);
          }
        } else {
          // In the browser, fetch from API
          const categoriesResponse = await fetch(
            `${baseUrl}/api/units/${group.id}`,
          );
          if (!categoriesResponse.ok) {
            throw new Error(`Failed to fetch categories for group ${group.id}`);
          }
          const categoriesData = (await categoriesResponse.json()) as unknown;
          categories = categoriesData as typeof categories;
        }

        result[group.id] = {
          label: group.label,
          categories,
        };
      } catch (error) {
        console.error(`Error processing group ${group.id}:`, error);
      }
    }),
  );

  return result;
}
