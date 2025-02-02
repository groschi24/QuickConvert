import type { UnitCategory } from "@/types/units";
import { commonConverters } from "@/config/categories/common";
import { engineeringConverters } from "@/config/categories/engineering";
import { heatConverters } from "@/config/categories/heat";
import { fluidConverters } from "@/config/categories/fluid";
import { commonCategoryConfigs } from "@/config/categories/commonConfigs";
import { engineeringCategoryConfigs } from "@/config/categories/engineeringConfigs";
import { heatCategoryConfigs } from "@/config/categories/heatConfigs";
import { fluidCategoryConfigs } from "@/config/categories/fluidConfigs";
import type { CategoryConfig } from "@/types/units";

export const categories = [
  ...commonConverters,
  ...engineeringConverters,
  ...heatConverters,
  ...fluidConverters,
];

export const categoryConfigs: Record<UnitCategory, CategoryConfig> = {
  ...commonCategoryConfigs,
  ...engineeringCategoryConfigs,
  ...heatCategoryConfigs,
  ...fluidCategoryConfigs,
} as Record<UnitCategory, CategoryConfig>;

export type { CategoryConfig };
