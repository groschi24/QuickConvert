import type { UnitCategory, CategoryConfig } from "@/types/units";
import { units } from "@/config/units";
import {
  convertFlow,
  convertFlowMass,
  convertFlowMolar,
  convertMassFluxDensity,
  convertConcentrationMolar,
  convertConcentrationSolution,
  convertViscosityDynamic,
  convertViscosityKinematic,
  convertSurfaceTension,
  convertPermeability,
} from "@/utils/conversions/fluid";

export const fluidCategoryConfigs: Partial<
  Record<UnitCategory, CategoryConfig>
> = {
  flow: {
    title: "Flow Converter",
    units: units.flow,
    convertFn: convertFlow,
    defaultFrom: "cubic_meters_per_second",
    defaultTo: "liters_per_second",
  },
  flow_mass: {
    title: "Mass Flow Converter",
    units: units.flow_mass,
    convertFn: convertFlowMass,
    defaultFrom: "kilograms_per_second",
    defaultTo: "pounds_per_second",
  },
  flow_molar: {
    title: "Molar Flow Converter",
    units: units.flow_molar,
    convertFn: convertFlowMolar,
    defaultFrom: "moles_per_second",
    defaultTo: "kilomoles_per_second",
  },
  mass_flux_density: {
    title: "Mass Flux Density Converter",
    units: units.mass_flux_density,
    convertFn: convertMassFluxDensity,
    defaultFrom: "kilograms_per_square_meter_second",
    defaultTo: "pounds_per_square_foot_second",
  },
  concentration_molar: {
    title: "Molar Concentration Converter",
    units: units.concentration_molar,
    convertFn: convertConcentrationMolar,
    defaultFrom: "moles_per_cubic_meter",
    defaultTo: "millimoles_per_liter",
  },
  concentration_solution: {
    title: "Solution Concentration Converter",
    units: units.concentration_solution,
    convertFn: convertConcentrationSolution,
    defaultFrom: "kilograms_per_cubic_meter",
    defaultTo: "grams_per_liter",
  },
  viscosity_dynamic: {
    title: "Dynamic Viscosity Converter",
    units: units.viscosity_dynamic,
    convertFn: convertViscosityDynamic,
    defaultFrom: "pascal_second",
    defaultTo: "centipoise",
  },
  viscosity_kinematic: {
    title: "Kinematic Viscosity Converter",
    units: units.viscosity_kinematic,
    convertFn: convertViscosityKinematic,
    defaultFrom: "square_meters_per_second",
    defaultTo: "centistokes",
  },
  surface_tension: {
    title: "Surface Tension Converter",
    units: units.surface_tension,
    convertFn: convertSurfaceTension,
    defaultFrom: "newtons_per_meter",
    defaultTo: "dynes_per_centimeter",
  },
  permeability: {
    title: "Permeability Converter",
    units: units.permeability,
    convertFn: convertPermeability,
    defaultFrom: "square_meters",
    defaultTo: "darcy",
  },
};
