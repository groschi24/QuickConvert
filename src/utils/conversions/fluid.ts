import type { ConversionFunction } from "@/types/units";

export const convertFlow: ConversionFunction = (value, from, to) => {
  const m3PerSecondConversions: Record<string, number> = {
    cubic_meters_per_second: 1,
    liters_per_second: 0.001,
    cubic_feet_per_second: 0.0283168,
    gallons_per_minute: 0.0000630902,
  };

  const inM3PerSecond = value * (m3PerSecondConversions[from] ?? 1);
  return inM3PerSecond / (m3PerSecondConversions[to] ?? 1);
};

export const convertFlowMass: ConversionFunction = (value, from, to) => {
  const kgPerSecondConversions: Record<string, number> = {
    kilograms_per_second: 1,
    pounds_per_second: 0.453592,
    grams_per_second: 0.001,
    tonnes_per_hour: 0.000277778,
  };

  const inKgPerSecond = value * (kgPerSecondConversions[from] ?? 1);
  return inKgPerSecond / (kgPerSecondConversions[to] ?? 1);
};

export const convertFlowMolar: ConversionFunction = (value, from, to) => {
  const molPerSecondConversions: Record<string, number> = {
    moles_per_second: 1,
    kilomoles_per_second: 1000,
    millimoles_per_second: 0.001,
    moles_per_minute: 0.0166667,
  };

  const inMolPerSecond = value * (molPerSecondConversions[from] ?? 1);
  return inMolPerSecond / (molPerSecondConversions[to] ?? 1);
};

export const convertMassFluxDensity: ConversionFunction = (value, from, to) => {
  const kgPerM2sConversions: Record<string, number> = {
    kilograms_per_square_meter_second: 1,
    pounds_per_square_foot_second: 4.88243,
    grams_per_square_centimeter_second: 10,
  };

  const inKgPerM2s = value * (kgPerM2sConversions[from] ?? 1);
  return inKgPerM2s / (kgPerM2sConversions[to] ?? 1);
};

export const convertConcentrationMolar: ConversionFunction = (
  value,
  from,
  to,
) => {
  const molPerM3Conversions: Record<string, number> = {
    moles_per_cubic_meter: 1,
    millimoles_per_liter: 1,
    moles_per_liter: 1000,
    micromoles_per_liter: 0.001,
  };

  const inMolPerM3 = value * (molPerM3Conversions[from] ?? 1);
  return inMolPerM3 / (molPerM3Conversions[to] ?? 1);
};

export const convertConcentrationSolution: ConversionFunction = (
  value,
  from,
  to,
) => {
  const kgPerM3Conversions: Record<string, number> = {
    kilograms_per_cubic_meter: 1,
    grams_per_liter: 1,
    milligrams_per_liter: 0.001,
    parts_per_million: 0.001,
  };

  const inKgPerM3 = value * (kgPerM3Conversions[from] ?? 1);
  return inKgPerM3 / (kgPerM3Conversions[to] ?? 1);
};

export const convertViscosityDynamic: ConversionFunction = (
  value,
  from,
  to,
) => {
  const paSecondConversions: Record<string, number> = {
    pascal_second: 1,
    poise: 0.1,
    centipoise: 0.001,
    pound_force_second_per_square_foot: 47.8803,
  };

  const inPaSecond = value * (paSecondConversions[from] ?? 1);
  return inPaSecond / (paSecondConversions[to] ?? 1);
};

export const convertViscosityKinematic: ConversionFunction = (
  value,
  from,
  to,
) => {
  const m2PerSecondConversions: Record<string, number> = {
    square_meters_per_second: 1,
    stokes: 0.0001,
    centistokes: 0.000001,
    square_feet_per_second: 0.092903,
  };

  const inM2PerSecond = value * (m2PerSecondConversions[from] ?? 1);
  return inM2PerSecond / (m2PerSecondConversions[to] ?? 1);
};

export const convertSurfaceTension: ConversionFunction = (value, from, to) => {
  const nPerMConversions: Record<string, number> = {
    newtons_per_meter: 1,
    dynes_per_centimeter: 0.001,
    pound_force_per_foot: 14.5939,
  };

  const inNPerM = value * (nPerMConversions[from] ?? 1);
  return inNPerM / (nPerMConversions[to] ?? 1);
};

export const convertPermeability: ConversionFunction = (value, from, to) => {
  const m2Conversions: Record<string, number> = {
    square_meters: 1,
    darcy: 9.869233e-13,
    millidarcy: 9.869233e-16,
    square_feet: 0.092903,
  };

  const inM2 = value * (m2Conversions[from] ?? 1);
  return inM2 / (m2Conversions[to] ?? 1);
};
