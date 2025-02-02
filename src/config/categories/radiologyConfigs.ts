import type { UnitCategory, CategoryConfig } from "@/types/units";
import { units } from "@/config/units";
import {
  convertRadiation,
  convertRadiationActivity,
  convertRadiationExposure,
  convertRadiationAbsorbedDose,
} from "@/utils/conversions";

export const radiologyCategoryConfigs: Partial<
  Record<UnitCategory, CategoryConfig>
> = {
  radiation: {
    title: "Radiation Converter",
    units: units.radiation,
    convertFn: convertRadiation,
    defaultFrom: "sievert",
    defaultTo: "millisievert",
  },
  radiation_activity: {
    title: "Radiation Activity Converter",
    units: units.radiation_activity,
    convertFn: convertRadiationActivity,
    defaultFrom: "becquerel",
    defaultTo: "curie",
  },
  radiation_exposure: {
    title: "Radiation Exposure Converter",
    units: units.radiation_exposure,
    convertFn: convertRadiationExposure,
    defaultFrom: "coulomb_per_kilogram",
    defaultTo: "roentgen",
  },
  radiation_absorbed_dose: {
    title: "Radiation Absorbed Dose Converter",
    units: units.radiation_absorbed_dose,
    convertFn: convertRadiationAbsorbedDose,
    defaultFrom: "gray",
    defaultTo: "rad",
  },
};
