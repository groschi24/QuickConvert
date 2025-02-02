import type { Category } from "@/types/units";

export const fluidConverters: Category[] = [
  { value: "flow", label: "Flow" },
  { value: "flow_mass", label: "Flow - Mass" },
  { value: "flow_molar", label: "Flow - Molar" },
  { value: "mass_flux_density", label: "Mass Flux Density" },
  { value: "concentration_molar", label: "Concentration - Molar" },
  { value: "concentration_solution", label: "Concentration - Solution" },
  { value: "viscosity_dynamic", label: "Viscosity - Dynamic" },
  { value: "viscosity_kinematic", label: "Viscosity - Kinematic" },
  { value: "surface_tension", label: "Surface Tension" },
  { value: "permeability", label: "Permeability" },
];
