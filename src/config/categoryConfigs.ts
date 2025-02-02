import type { UnitCategory } from "@/types/units";
import { commonConverters } from "@/config/categories/common";
import { engineeringConverters } from "@/config/categories/engineering";
import { heatConverters } from "@/config/categories/heat";
import { fluidConverters } from "@/config/categories/fluid";
import { lightConverters } from "@/config/categories/light";
import { magnetismConverters } from "@/config/categories/magnetism";
import { radiologyConverters } from "@/config/categories/radiology";
import { otherConverters } from "@/config/categories/other";
import { commonCategoryConfigs } from "@/config/categories/commonConfigs";
import { engineeringCategoryConfigs } from "@/config/categories/engineeringConfigs";
import { heatCategoryConfigs } from "@/config/categories/heatConfigs";
import { fluidCategoryConfigs } from "@/config/categories/fluidConfigs";
import { lightCategoryConfigs } from "@/config/categories/lightConfigs";
import { electricityCategoryConfigs } from "@/config/categories/electricityConfigs";
import { magnetismCategoryConfigs } from "@/config/categories/magnetismConfigs";
import { radiologyCategoryConfigs } from "@/config/categories/radiologyConfigs";
import { otherCategoryConfigs } from "@/config/categories/otherConfigs";
import type { CategoryConfig } from "@/types/units";

export const categories = [
  ...commonConverters,
  ...engineeringConverters,
  ...heatConverters,
  ...fluidConverters,
  ...lightConverters,
  ...magnetismConverters,
  ...radiologyConverters,
  ...otherConverters,
];

export const categoryConfigs: Record<UnitCategory | string, CategoryConfig> = {
  ...commonCategoryConfigs,
  ...engineeringCategoryConfigs,
  ...heatCategoryConfigs,
  ...fluidCategoryConfigs,
  ...lightCategoryConfigs,
  ...electricityCategoryConfigs,
  ...magnetismCategoryConfigs,
  ...radiologyCategoryConfigs,
  ...otherCategoryConfigs,
};

export type { CategoryConfig };
