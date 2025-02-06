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

export const categoryConfigs = await Promise.all(
  categories.map(async (category) => {
    const categoryStr = String(category);
    const config = await loadUnitConfig(categoryStr as UnitCategory);
    return [categoryStr, config] as const;
  }),
).then(
  (configs) =>
    Object.fromEntries(configs) as Record<
      UnitCategory,
      Awaited<ReturnType<typeof loadUnitConfig>>
    >,
);
