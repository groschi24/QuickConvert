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

/**
 * Represents a popular conversion option displayed on the homepage
 */
export interface PopularConversion {
  /** Source unit to convert from */
  from: string;
  /** Target unit to convert to */
  to: string;
  /** Category of the conversion */
  category: UnitCategory;
  /** Display label for the conversion */
  label: string;
  /** Description of the conversion */
  description: string;
  /** Emoji icon representing the conversion */
  icon: string;
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
  // Other Converters
  | "prefixes"
  | "data_transfer"
  | "sound"
  | "typography"
  | "volume_lumber"
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
  | "frequency_wavelength";

export type ConversionFunction = (
  value: number,
  from: string,
  to: string,
) => number;

export interface ConversionHistoryEntry {
  id: string;
  category: UnitCategory;
  from: string;
  to: string;
  value: string;
  result: string;
  timestamp: number;
}

export type UnitMap = Record<UnitCategory, Unit[]>;
