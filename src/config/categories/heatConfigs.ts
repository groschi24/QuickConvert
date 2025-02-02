import type { UnitCategory, CategoryConfig } from "@/types/units";
import { units } from "@/config/units";
import {
  convertFuelEfficiencyMass,
  convertFuelEfficiencyVolume,
  convertTemperatureInterval,
  convertThermalExpansion,
  convertThermalResistance,
  convertThermalConductivity,
  convertSpecificHeatCapacity,
  convertHeatDensity,
  convertHeatFluxDensity,
  convertHeatTransferCoefficient,
} from "@/utils/conversions/heat";

export const heatCategoryConfigs: Partial<
  Record<UnitCategory, CategoryConfig>
> = {
  fuel_efficiency_mass: {
    title: "Mass Fuel Efficiency Converter",
    units: units.fuel_efficiency_mass,
    convertFn: convertFuelEfficiencyMass,
    defaultFrom: "grams_per_kilowatt_hour",
    defaultTo: "pounds_per_horsepower_hour",
  },
  fuel_efficiency_volume: {
    title: "Volume Fuel Efficiency Converter",
    units: units.fuel_efficiency_volume,
    convertFn: convertFuelEfficiencyVolume,
    defaultFrom: "liters_per_kilowatt_hour",
    defaultTo: "gallons_per_horsepower_hour",
  },
  temperature_interval: {
    title: "Temperature Interval Converter",
    units: units.temperature_interval,
    convertFn: convertTemperatureInterval,
    defaultFrom: "kelvin",
    defaultTo: "celsius_degree",
  },
  thermal_expansion: {
    title: "Thermal Expansion Converter",
    units: units.thermal_expansion,
    convertFn: convertThermalExpansion,
    defaultFrom: "per_kelvin",
    defaultTo: "per_celsius",
  },
  thermal_resistance: {
    title: "Thermal Resistance Converter",
    units: units.thermal_resistance,
    convertFn: convertThermalResistance,
    defaultFrom: "kelvin_per_watt",
    defaultTo: "celsius_per_watt",
  },
  thermal_conductivity: {
    title: "Thermal Conductivity Converter",
    units: units.thermal_conductivity,
    convertFn: convertThermalConductivity,
    defaultFrom: "watts_per_meter_kelvin",
    defaultTo: "btu_per_hour_foot_fahrenheit",
  },
  specific_heat_capacity: {
    title: "Specific Heat Capacity Converter",
    units: units.specific_heat_capacity,
    convertFn: convertSpecificHeatCapacity,
    defaultFrom: "joules_per_kilogram_kelvin",
    defaultTo: "btu_per_pound_fahrenheit",
  },
  heat_density: {
    title: "Heat Density Converter",
    units: units.heat_density,
    convertFn: convertHeatDensity,
    defaultFrom: "joules_per_cubic_meter",
    defaultTo: "btu_per_cubic_foot",
  },
  heat_flux_density: {
    title: "Heat Flux Density Converter",
    units: units.heat_flux_density,
    convertFn: convertHeatFluxDensity,
    defaultFrom: "watts_per_square_meter",
    defaultTo: "btu_per_hour_square_foot",
  },
  heat_transfer_coefficient: {
    title: "Heat Transfer Coefficient Converter",
    units: units.heat_transfer_coefficient,
    convertFn: convertHeatTransferCoefficient,
    defaultFrom: "watts_per_square_meter_kelvin",
    defaultTo: "btu_per_hour_square_foot_fahrenheit",
  },
};
