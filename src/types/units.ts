/**
 * Represents a unit of measurement with its value and display label
 */
export interface Unit {
  /** Unique identifier for the unit */
  value: string;
  /** Human-readable label for the unit */
  label: string;
}

/**
 * Represents a category of measurement units
 */
export interface Category {
  /** Unique identifier for the category */
  value: string;
  /** Human-readable label for the category */
  label: string;
}

/**
 * Configuration for a unit conversion category
 */
export interface CategoryConfig {
  /** Title displayed for the category */
  title: string;
  /** Available units for conversion */
  units: Unit[];
  /** Default 'from' unit */
  defaultFrom: string;
  /** Default 'to' unit */
  defaultTo: string;
  /** Function to perform the conversion */
  convertFn: ConversionFunction;
}

export type UnitCategory =
  // Common Converters
  | "length"
  | "weight"
  | "volume"
  | "temperature"
  | "area"
  | "pressure"
  | "energy"
  | "volume_dry"
  | "currency"
  | "case"
  | "power"
  | "force"
  | "time"
  | "speed"
  | "angle"
  | "fuel_consumption"
  | "numbers"
  | "digital"
  // Engineering Converters
  | "velocity_angular"
  | "acceleration"
  | "acceleration_angular"
  | "density"
  | "specific_volume"
  | "moment_of_inertia"
  | "moment_of_force"
  | "torque"
  | "data_rate"
  // Heat Converters
  | "fuel_efficiency_mass"
  | "fuel_efficiency_volume"
  | "temperature_interval"
  | "thermal_expansion"
  | "thermal_resistance"
  | "thermal_conductivity"
  | "specific_heat_capacity"
  | "heat_density"
  | "heat_flux_density"
  | "heat_transfer_coefficient"
  // Fluid Converters
  | "flow"
  | "flow_mass"
  | "flow_molar"
  | "mass_flux_density"
  | "concentration_molar"
  | "concentration_solution"
  | "viscosity_dynamic"
  | "viscosity_kinematic"
  | "surface_tension"
  | "permeability"
  // Light Converters
  | "luminance"
  | "luminous_intensity"
  | "illumination"
  | "digital_image_resolution"
  | "frequency_wavelength"
  // Electricity Converters
  | "charge"
  | "linear_charge_density"
  | "surface_charge_density"
  | "volume_charge_density"
  | "current"
  | "linear_current_density"
  | "surface_current_density"
  | "electric_field_strength"
  | "electric_potential"
  | "electric_resistance"
  | "electric_resistivity"
  | "electric_conductance"
  | "electric_conductivity"
  | "electrostatic_capacitance"
  | "inductance"
  // Magnetism Converters
  | "magnetomotive_force"
  | "magnetic_field_strength"
  | "magnetic_flux"
  | "magnetic_flux_density"
  // Radiology Converters
  | "radiation"
  | "radiation_activity"
  | "radiation_exposure"
  | "radiation_absorbed_dose";

export type UnitMap = Record<UnitCategory, Unit[]>;

export type ConversionFunction = (
  value: number,
  from: string,
  to: string,
) => number;
