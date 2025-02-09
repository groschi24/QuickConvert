import type { UnitCategory } from "@/types/units";
import type { UnitApiResponse } from "@/types/api";

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
  baseUnit?: string;
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
        rawConfig[categoryStr]?.label ??
        categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1),
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
        const formula = typedUnitConfig?.conversion?.formula ?? "x=x";
        let factor = 1;

        if (formula !== "x=x") {
          try {
            // Handle both simple multiplication and complex formulas
            const formulaExpression = formula.split("=")[1]?.trim();
            if (!formulaExpression) {
              throw new Error(`Invalid formula format: ${formula}`);
            }

            // Handle simple multiplication (e.g., "x=x*1000")
            if (
              formulaExpression.startsWith("x*") ||
              formulaExpression.startsWith("x/")
            ) {
              const evalResult = eval(formulaExpression.replace("x", "1"));
              factor = typeof evalResult === "number" ? evalResult : 1;
            } else {
              // For more complex formulas, evaluate with x=1
              const evalResult = eval(formulaExpression.replace(/x/g, "1"));
              factor = typeof evalResult === "number" ? evalResult : 1;
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
              const toFormula = typedToUnitConfig?.conversion?.formula ?? "x=x";
              try {
                const fromExpression = formula.split("=")[1]?.trim();
                const toExpression = toFormula.split("=")[1]?.trim();

                if (!fromExpression || !toExpression) {
                  throw new Error(
                    `Invalid formula format: ${formula} or ${toFormula}`,
                  );
                }

                if (config.conversions[unitKey]) {
                  config.conversions[unitKey].to[toKey] =
                    `(${fromExpression})/(${toExpression})`;
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

  // Fetch category groups from API
  const groupsResponse = await fetch(`${baseUrl}/api/categoryGroups`);

  if (!groupsResponse.ok) {
    throw new Error("Failed to fetch category groups");
  }

  const groupsConfig = (await groupsResponse.json()) as CategoryGroupsConfig;
  const result: GroupedUnitConfigs = {};

  // Process each group and its categories
  await Promise.all(
    groupsConfig.groups.map(async (group) => {
      try {
        // Fetch categories for this group
        const categoriesResponse = await fetch(
          `${baseUrl}/api/units/${group.id}`,
        );
        if (!categoriesResponse.ok) {
          throw new Error(`Failed to fetch categories for group ${group.id}`);
        }

        const categories = (await categoriesResponse.json()) as Record<
          string,
          UnitConfig & {
            convertFn: (value: number, from: string, to: string) => number;
          }
        >;

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
