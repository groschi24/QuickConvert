import type { ConversionFunction } from "@/types/units";

export const convertFuelEfficiencyMass: ConversionFunction = (
  value,
  from,
  to,
) => {
  const gPerKwhConversions: Record<string, number> = {
    grams_per_kilowatt_hour: 1,
    pounds_per_horsepower_hour: 608.277,
    kilograms_per_joule: 3600000,
  };

  const inGPerKwh = value * (gPerKwhConversions[from] ?? 1);
  return inGPerKwh / (gPerKwhConversions[to] ?? 1);
};

export const convertFuelEfficiencyVolume: ConversionFunction = (
  value,
  from,
  to,
) => {
  const lPerKwhConversions: Record<string, number> = {
    liters_per_kilowatt_hour: 1,
    gallons_per_horsepower_hour: 3.78541,
    cubic_meters_per_joule: 0.000001,
  };

  const inLPerKwh = value * (lPerKwhConversions[from] ?? 1);
  return inLPerKwh / (lPerKwhConversions[to] ?? 1);
};

export const convertTemperatureInterval: ConversionFunction = (
  value,
  from,
  to,
) => {
  const kelvinConversions: Record<string, number> = {
    kelvin: 1,
    celsius_degree: 1,
    fahrenheit_degree: 5 / 9,
  };

  const inKelvin = value * (kelvinConversions[from] ?? 1);
  return inKelvin / (kelvinConversions[to] ?? 1);
};

export const convertThermalExpansion: ConversionFunction = (
  value,
  from,
  to,
) => {
  const perKelvinConversions: Record<string, number> = {
    per_kelvin: 1,
    per_celsius: 1,
    per_fahrenheit: 1.8,
  };

  const inPerKelvin = value * (perKelvinConversions[from] ?? 1);
  return inPerKelvin / (perKelvinConversions[to] ?? 1);
};

export const convertThermalResistance: ConversionFunction = (
  value,
  from,
  to,
) => {
  const kPerWattConversions: Record<string, number> = {
    kelvin_per_watt: 1,
    celsius_per_watt: 1,
    fahrenheit_per_btu_per_hour: 0.527108,
  };

  const inKPerWatt = value * (kPerWattConversions[from] ?? 1);
  return inKPerWatt / (kPerWattConversions[to] ?? 1);
};

export const convertThermalConductivity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const wPerMKConversions: Record<string, number> = {
    watts_per_meter_kelvin: 1,
    btu_per_hour_foot_fahrenheit: 1.730735,
    kilocalories_per_hour_meter_celsius: 0.860421,
  };

  const inWPerMK = value * (wPerMKConversions[from] ?? 1);
  return inWPerMK / (wPerMKConversions[to] ?? 1);
};

export const convertSpecificHeatCapacity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const jPerKgKConversions: Record<string, number> = {
    joules_per_kilogram_kelvin: 1,
    btu_per_pound_fahrenheit: 4186.8,
    calories_per_gram_celsius: 4186.8,
  };

  const inJPerKgK = value * (jPerKgKConversions[from] ?? 1);
  return inJPerKgK / (jPerKgKConversions[to] ?? 1);
};

export const convertHeatDensity: ConversionFunction = (value, from, to) => {
  const jPerM3Conversions: Record<string, number> = {
    joules_per_cubic_meter: 1,
    btu_per_cubic_foot: 37258.9,
    calories_per_cubic_centimeter: 4186800000,
  };

  const inJPerM3 = value * (jPerM3Conversions[from] ?? 1);
  return inJPerM3 / (jPerM3Conversions[to] ?? 1);
};

export const convertHeatFluxDensity: ConversionFunction = (value, from, to) => {
  const wPerM2Conversions: Record<string, number> = {
    watts_per_square_meter: 1,
    btu_per_hour_square_foot: 3.15459,
    calories_per_second_square_centimeter: 41868,
  };

  const inWPerM2 = value * (wPerM2Conversions[from] ?? 1);
  return inWPerM2 / (wPerM2Conversions[to] ?? 1);
};

export const convertHeatTransferCoefficient: ConversionFunction = (
  value,
  from,
  to,
) => {
  const wPerM2KConversions: Record<string, number> = {
    watts_per_square_meter_kelvin: 1,
    btu_per_hour_square_foot_fahrenheit: 5.678263,
    calories_per_second_square_centimeter_celsius: 41868,
  };

  const inWPerM2K = value * (wPerM2KConversions[from] ?? 1);
  return inWPerM2K / (wPerM2KConversions[to] ?? 1);
};
