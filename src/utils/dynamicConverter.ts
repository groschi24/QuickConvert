import { evaluate } from "mathjs";
import { loadUnitConfig } from "./loadUnitConfigs";
import type { UnitCategory } from "@/types/units";

export const convertWithFormula = (
  value: number,
  from: string,
  to: string,
  category: UnitCategory,
): number => {
  if (from === to) return value;

  try {
    const config = loadUnitConfig(category);

    // First try using the convertFn which uses the factor-based conversion
    try {
      return config.convertFn(value, from, to);
    } catch (error) {
      // If factor-based conversion fails, fall back to formula-based conversion
      console.warn(
        `Factor-based conversion failed for ${from} to ${to}: ${error}. Trying formula-based conversion.`,
      );
    }

    // Check if direct conversion formula exists
    if (config.conversions[from]?.to[to]) {
      const conversion = config.conversions[from].to[to];
      if (typeof conversion === "number") {
        return value * conversion;
      } else if (typeof conversion === "string") {
        try {
          return evaluate(conversion.replace(/x/g, value.toString()));
        } catch (error) {
          console.error(`Error evaluating formula: ${conversion}`, error);
          return value;
        }
      }
    }

    // If no direct conversion, try converting through base unit if available
    if (config.baseUnit) {
      const toBaseConversion = config.conversions[from]?.to[config.baseUnit];
      const fromBaseConversion = config.conversions[config.baseUnit]?.to[to];

      if (toBaseConversion && fromBaseConversion) {
        let baseValue: number;

        // Convert to base unit
        if (typeof toBaseConversion === "number") {
          baseValue = value * toBaseConversion;
        } else {
          try {
            baseValue = evaluate(
              toBaseConversion.replace(/x/g, value.toString()),
            );
          } catch (error) {
            console.error(
              `Error converting to base unit: ${toBaseConversion}`,
              error,
            );
            return value;
          }
        }

        // Convert from base unit to target
        if (typeof fromBaseConversion === "number") {
          return baseValue * fromBaseConversion;
        } else {
          try {
            return evaluate(
              fromBaseConversion.replace(/x/g, baseValue.toString()),
            );
          } catch (error) {
            console.error(
              `Error converting from base unit: ${fromBaseConversion}`,
              error,
            );
            return value;
          }
        }
      }
    }

    console.error(`No conversion path found: ${from} -> ${to}`);
    return value;
  } catch (error) {
    console.error(`Error loading unit config for ${category}:`, error);
    return value;
  }
};
