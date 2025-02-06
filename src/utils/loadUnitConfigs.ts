import type { UnitCategory } from "@/types/units";
import type { UnitApiResponse } from "@/types/api";

interface UnitConfig {
  title: string;
  units: {
    [key: string]: {
      label: string;
      value: string;
      factor: number;
    };
  };
  baseUnit?: string;
  conversions: {
    [from: string]: {
      to: {
        [to: string]: number | string;
      };
    };
  };
}

export async function loadUnitConfig(category: UnitCategory): Promise<
  UnitConfig & {
    convertFn: (value: number, from: string, to: string) => number;
  }
> {
  try {
    const categoryStr = String(category);

    const response = await fetch(
      `http://localhost:3000/api/units/${categoryStr}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch ${categoryStr} config`);
    }
    const rawConfig: UnitApiResponse = await response.json();
    const config: UnitConfig = {
      title: categoryStr.charAt(0).toUpperCase() + categoryStr.slice(1),
      units: {},
      conversions: {},
      baseUnit: undefined,
    };

    // Get the first measurement type
    const firstMeasureConfig = Object.values(rawConfig)[0];
    if (!firstMeasureConfig || !firstMeasureConfig.units) {
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
      ([unitKey, unitConfig]: [string, any]) => {
        const formula = unitConfig.conversion.formula;
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
              factor = eval(formulaExpression.replace("x", "1"));
            } else {
              // For more complex formulas, evaluate with x=1
              factor = eval(formulaExpression.replace(/x/g, "1"));
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
          label: unitConfig.label,
          value: unitKey,
          factor,
        };

        // Add conversion formulas
        config.conversions[unitKey] = { to: {} };
        Object.entries(firstMeasureConfig.units).forEach(
          ([toKey, toUnitConfig]: [string, any]) => {
            if (unitKey === toKey) {
              config.conversions[unitKey].to[toKey] = 1;
            } else {
              const toFormula = toUnitConfig.conversion.formula;
              try {
                const fromExpression = formula.split("=")[1]?.trim();
                const toExpression = toFormula.split("=")[1]?.trim();

                if (!fromExpression || !toExpression) {
                  throw new Error(
                    `Invalid formula format: ${formula} or ${toFormula}`,
                  );
                }

                config.conversions[unitKey].to[toKey] =
                  `(${fromExpression})/(${toExpression})`;
              } catch (error) {
                console.error(
                  `Error creating conversion formula from ${unitKey} to ${toKey}:`,
                  error,
                );
                config.conversions[unitKey].to[toKey] = "1";
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
      title: category.charAt(0).toUpperCase() + category.slice(1),
      units: {},
      conversions: {},
      convertFn: () => 0,
    };
  }
}

export async function loadAllUnitConfigs(): Promise<
  Record<UnitCategory, Awaited<ReturnType<typeof loadUnitConfig>>>
> {
  const categories: UnitCategory[] = [
    "common",
    "electricity",
    "engineering",
    "fluid",
    "heat",
    "light",
    "magnetism",
    "other",
    "radiology",
  ];

  const configs = await Promise.all(
    categories.map(async (category) => {
      const config = await loadUnitConfig(category);
      return [category, config] as const;
    }),
  );

  return Object.fromEntries(configs) as Record<
    UnitCategory,
    Awaited<ReturnType<typeof loadUnitConfig>>
  >;
}
