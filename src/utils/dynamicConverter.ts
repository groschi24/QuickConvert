import { evaluate } from "mathjs";
import { loadUnitConfig } from "./loadUnitConfigs";
import type { UnitCategory } from "@/types/categoryTypes";

export const convertWithFormula = async (
  value: number,
  from: string,
  to: string,
  category: UnitCategory,
): Promise<number> => {
  if (from === to) return value;

  try {
    const config = await loadUnitConfig(category);

    // First try using the convertFn which uses the factor-based conversion
    try {
      return config.convertFn(value, from, to);
    } catch (error) {
      // If factor-based conversion fails, fall back to formula-based conversion
      console.warn(
        `Factor-based conversion failed for ${String(from)} to ${String(to)}: ${String(error)}. Trying formula-based conversion.`,
      );
    }

    // Check if direct conversion formula exists
    if (config.conversions[from]?.to[to]) {
      const conversion = config.conversions[from].to[to];
      if (typeof conversion === "number") {
        return value * conversion;
      } else if (typeof conversion === "string") {
        try {
          const result = evaluate(
            conversion.replace(/x/g, value.toString()),
          ) as number;
          return typeof result === "number" ? result : value;
        } catch (error) {
          console.error(`Error evaluating formula: ${conversion}`, error);
          return value;
        }
      }
    }

    // If no direct conversion, try converting through base unit if available
    if (config.baseUnit) {
      const baseUnitKey =
        typeof config.baseUnit === "string"
          ? config.baseUnit
          : config.baseUnit.label;
      const toBaseConversion = config.conversions[from]?.to[baseUnitKey];
      const fromBaseConversion = config.conversions[baseUnitKey]?.to[to];

      if (toBaseConversion && fromBaseConversion) {
        let baseValue: number;

        // Convert to base unit
        if (typeof toBaseConversion === "number") {
          baseValue = value * toBaseConversion;
        } else {
          try {
            const result = evaluate(
              toBaseConversion.replace(/x/g, value.toString()),
            ) as number;
            baseValue = typeof result === "number" ? result : value;
          } catch (error) {
            console.error(
              `Error converting to base unit: ${String(toBaseConversion)}`,
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
            const result = evaluate(
              fromBaseConversion.replace(/x/g, baseValue.toString()),
            ) as number;
            return typeof result === "number" ? result : value;
          } catch (error) {
            console.error(
              `Error converting from base unit: ${String(fromBaseConversion)}`,
              error,
            );
            return value;
          }
        }
      }
    }

    console.error(`No conversion path found: ${String(from)} -> ${String(to)}`);
    return value;
  } catch (error) {
    console.error(`Error loading unit config for ${String(category)}:`, error);
    return value;
  }
};
