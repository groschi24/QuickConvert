import type { ConversionFunction } from "@/types/units";

export const convertVelocityAngular: ConversionFunction = (value, from, to) => {
  const radPerSecConversions: Record<string, number> = {
    radians_per_second: 1,
    degrees_per_second: 0.0174533,
    revolutions_per_minute: 0.10472,
  };

  const inRadPerSec = value * (radPerSecConversions[from] ?? 1);
  return inRadPerSec / (radPerSecConversions[to] ?? 1);
};

export const convertAcceleration: ConversionFunction = (value, from, to) => {
  const mps2Conversions: Record<string, number> = {
    meters_per_second_squared: 1,
    feet_per_second_squared: 0.3048,
    gravity: 9.80665,
  };

  const inMPS2 = value * (mps2Conversions[from] ?? 1);
  return inMPS2 / (mps2Conversions[to] ?? 1);
};

export const convertAccelerationAngular: ConversionFunction = (
  value,
  from,
  to,
) => {
  const radPerSec2Conversions: Record<string, number> = {
    radians_per_second_squared: 1,
    degrees_per_second_squared: 0.0174533,
    revolutions_per_minute_squared: 0.10472,
  };

  const inRadPerSec2 = value * (radPerSec2Conversions[from] ?? 1);
  return inRadPerSec2 / (radPerSec2Conversions[to] ?? 1);
};

export const convertDensity: ConversionFunction = (value, from, to) => {
  const kgPerM3Conversions: Record<string, number> = {
    kilograms_per_cubic_meter: 1,
    grams_per_cubic_centimeter: 1000,
    pounds_per_cubic_foot: 16.0185,
  };

  const inKgPerM3 = value * (kgPerM3Conversions[from] ?? 1);
  return inKgPerM3 / (kgPerM3Conversions[to] ?? 1);
};

export const convertSpecificVolume: ConversionFunction = (value, from, to) => {
  const m3PerKgConversions: Record<string, number> = {
    cubic_meters_per_kilogram: 1,
    cubic_feet_per_pound: 0.062428,
    liters_per_kilogram: 0.001,
  };

  const inM3PerKg = value * (m3PerKgConversions[from] ?? 1);
  return inM3PerKg / (m3PerKgConversions[to] ?? 1);
};

export const convertMomentOfInertia: ConversionFunction = (value, from, to) => {
  const kgM2Conversions: Record<string, number> = {
    kilogram_square_meter: 1,
    pound_square_foot: 0.04214,
    gram_square_centimeter: 0.0001,
  };

  const inKgM2 = value * (kgM2Conversions[from] ?? 1);
  return inKgM2 / (kgM2Conversions[to] ?? 1);
};

export const convertDataRate: ConversionFunction = (value, from, to) => {
  const bpsConversions: Record<string, number> = {
    bits_per_second: 1,
    kilobits_per_second: 1000,
    megabits_per_second: 1000000,
    gigabits_per_second: 1000000000,
    bytes_per_second: 8,
    kilobytes_per_second: 8000,
    megabytes_per_second: 8000000,
    gigabytes_per_second: 8000000000,
  };

  const inBps = value * (bpsConversions[from] ?? 1);
  return inBps / (bpsConversions[to] ?? 1);
};
