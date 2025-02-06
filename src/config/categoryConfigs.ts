import type { UnitCategory } from "@/types/units";
import { loadUnitConfig } from "@/utils/loadUnitConfigs";

const categories = [
  "common",
  "electricity",
  "engineering",
  "fluid",
  "heat",
  "light",
  "magnetism",
  "other",
  "radiology",
] as const;

export type CategoryType = (typeof categories)[number];

export const categoryConfigs = categories.reduce(
  (acc, category) => {
    const categoryStr = String(category);
    acc[categoryStr as UnitCategory] = loadUnitConfig(
      categoryStr as UnitCategory,
    );
    return acc;
  },
  {} as Record<UnitCategory, ReturnType<typeof loadUnitConfig>>,
);
