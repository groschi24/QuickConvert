import type { UnitCategory } from "@/types/units";

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

export function loadUnitConfig(category: UnitCategory): UnitConfig & {
  convertFn: (value: number, from: string, to: string) => number;
} {
  try {
    const categoryStr = String(category);
    const rawConfig = require(`../config/categories/${categoryStr}.json`);
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

export function loadAllUnitConfigs(): Record<
  UnitCategory,
  ReturnType<typeof loadUnitConfig>
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

  return categories.reduce(
    (acc, category) => {
      acc[category] = loadUnitConfig(category);
      return acc;
    },
    {} as Record<UnitCategory, ReturnType<typeof loadUnitConfig>>,
  );
}
