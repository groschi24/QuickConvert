import type { UnitCategory } from "@/types/units";
import { commonConverters } from "@/config/categories/common";
import { engineeringConverters } from "@/config/categories/engineering";
import { heatConverters } from "@/config/categories/heat";
import { commonCategoryConfigs } from "@/config/categories/commonConfigs";
import { engineeringCategoryConfigs } from "@/config/categories/engineeringConfigs";
import { heatCategoryConfigs } from "@/config/categories/heatConfigs";
import type { CategoryConfig } from "@/types/units";

export const categories = [
  ...commonConverters,
  ...engineeringConverters,
  ...heatConverters,
];

export const categoryConfigs: Record<UnitCategory, CategoryConfig> = {
  ...commonCategoryConfigs,
  ...engineeringCategoryConfigs,
  ...heatCategoryConfigs,
} as Record<UnitCategory, CategoryConfig>;

export type { CategoryConfig };
