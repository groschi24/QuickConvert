import type { UnitCategory, CategoryConfig } from "@/types/units";
import { units } from "@/config/units";
import {
  convertMagnetomotiveForce,
  convertMagneticFieldStrength,
  convertMagneticFlux,
  convertMagneticFluxDensity,
} from "@/utils/conversions";

export const magnetismCategoryConfigs: Partial<
  Record<UnitCategory, CategoryConfig>
> = {
  magnetomotive_force: {
    title: "Magnetomotive Force Converter",
    units: units.magnetomotive_force,
    convertFn: convertMagnetomotiveForce,
    defaultFrom: "ampere_turns",
    defaultTo: "gilbert",
  },
  magnetic_field_strength: {
    title: "Magnetic Field Strength Converter",
    units: units.magnetic_field_strength,
    convertFn: convertMagneticFieldStrength,
    defaultFrom: "ampere_per_meter",
    defaultTo: "oersted",
  },
  magnetic_flux: {
    title: "Magnetic Flux Converter",
    units: units.magnetic_flux,
    convertFn: convertMagneticFlux,
    defaultFrom: "weber",
    defaultTo: "maxwell",
  },
  magnetic_flux_density: {
    title: "Magnetic Flux Density Converter",
    units: units.magnetic_flux_density,
    convertFn: convertMagneticFluxDensity,
    defaultFrom: "tesla",
    defaultTo: "gauss",
  },
};
