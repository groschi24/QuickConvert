import type { ConversionFunction } from "@/types/units";

export const convertCharge: ConversionFunction = (value, from, to) => {
  const coulombConversions: Record<string, number> = {
    coulomb: 1,
    millicoulomb: 0.001,
    microcoulomb: 0.000001,
    nanocoulomb: 1e-9,
    ampere_hour: 3600,
    milliampere_hour: 3.6,
  };

  const inCoulomb = value * (coulombConversions[from] ?? 1);
  return inCoulomb / (coulombConversions[to] ?? 1);
};

export const convertLinearChargeDensity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const coulombPerMeterConversions: Record<string, number> = {
    coulomb_per_meter: 1,
    coulomb_per_centimeter: 100,
    coulomb_per_kilometer: 0.001,
  };

  const inCoulombPerMeter = value * (coulombPerMeterConversions[from] ?? 1);
  return inCoulombPerMeter / (coulombPerMeterConversions[to] ?? 1);
};

export const convertSurfaceChargeDensity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const coulombPerSquareMeterConversions: Record<string, number> = {
    coulomb_per_square_meter: 1,
    coulomb_per_square_centimeter: 10000,
    microcoulomb_per_square_meter: 0.000001,
  };

  const inCoulombPerSquareMeter =
    value * (coulombPerSquareMeterConversions[from] ?? 1);
  return inCoulombPerSquareMeter / (coulombPerSquareMeterConversions[to] ?? 1);
};

export const convertVolumeChargeDensity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const coulombPerCubicMeterConversions: Record<string, number> = {
    coulomb_per_cubic_meter: 1,
    coulomb_per_cubic_centimeter: 1000000,
    microcoulomb_per_cubic_meter: 0.000001,
  };

  const inCoulombPerCubicMeter =
    value * (coulombPerCubicMeterConversions[from] ?? 1);
  return inCoulombPerCubicMeter / (coulombPerCubicMeterConversions[to] ?? 1);
};

export const convertCurrent: ConversionFunction = (value, from, to) => {
  const ampereConversions: Record<string, number> = {
    ampere: 1,
    milliampere: 0.001,
    microampere: 0.000001,
    kiloampere: 1000,
  };

  const inAmpere = value * (ampereConversions[from] ?? 1);
  return inAmpere / (ampereConversions[to] ?? 1);
};

export const convertLinearCurrentDensity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const amperePerMeterConversions: Record<string, number> = {
    ampere_per_meter: 1,
    ampere_per_centimeter: 100,
    milliampere_per_meter: 0.001,
  };

  const inAmperePerMeter = value * (amperePerMeterConversions[from] ?? 1);
  return inAmperePerMeter / (amperePerMeterConversions[to] ?? 1);
};

export const convertSurfaceCurrentDensity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const amperePerSquareMeterConversions: Record<string, number> = {
    ampere_per_square_meter: 1,
    ampere_per_square_centimeter: 10000,
    milliampere_per_square_meter: 0.001,
  };

  const inAmperePerSquareMeter =
    value * (amperePerSquareMeterConversions[from] ?? 1);
  return inAmperePerSquareMeter / (amperePerSquareMeterConversions[to] ?? 1);
};

export const convertElectricFieldStrength: ConversionFunction = (
  value,
  from,
  to,
) => {
  const voltPerMeterConversions: Record<string, number> = {
    volt_per_meter: 1,
    volt_per_centimeter: 100,
    kilovolt_per_meter: 1000,
    newton_per_coulomb: 1,
  };

  const inVoltPerMeter = value * (voltPerMeterConversions[from] ?? 1);
  return inVoltPerMeter / (voltPerMeterConversions[to] ?? 1);
};

export const convertElectricPotential: ConversionFunction = (
  value,
  from,
  to,
) => {
  const voltConversions: Record<string, number> = {
    volt: 1,
    millivolt: 0.001,
    microvolt: 0.000001,
    kilovolt: 1000,
    megavolt: 1000000,
  };

  const inVolt = value * (voltConversions[from] ?? 1);
  return inVolt / (voltConversions[to] ?? 1);
};

export const convertElectricResistance: ConversionFunction = (
  value,
  from,
  to,
) => {
  const ohmConversions: Record<string, number> = {
    ohm: 1,
    milliohm: 0.001,
    microohm: 0.000001,
    kiloohm: 1000,
    megaohm: 1000000,
  };

  const inOhm = value * (ohmConversions[from] ?? 1);
  return inOhm / (ohmConversions[to] ?? 1);
};

export const convertElectricResistivity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const ohmMeterConversions: Record<string, number> = {
    ohm_meter: 1,
    ohm_centimeter: 0.01,
    microohm_meter: 0.000001,
  };

  const inOhmMeter = value * (ohmMeterConversions[from] ?? 1);
  return inOhmMeter / (ohmMeterConversions[to] ?? 1);
};

export const convertElectricConductance: ConversionFunction = (
  value,
  from,
  to,
) => {
  const siemensConversions: Record<string, number> = {
    siemens: 1,
    millisiemens: 0.001,
    microsiemens: 0.000001,
    mho: 1,
  };

  const inSiemens = value * (siemensConversions[from] ?? 1);
  return inSiemens / (siemensConversions[to] ?? 1);
};

export const convertElectricConductivity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const siemensPerMeterConversions: Record<string, number> = {
    siemens_per_meter: 1,
    siemens_per_centimeter: 100,
    millisiemens_per_meter: 0.001,
  };

  const inSiemensPerMeter = value * (siemensPerMeterConversions[from] ?? 1);
  return inSiemensPerMeter / (siemensPerMeterConversions[to] ?? 1);
};

export const convertElectrostaticCapacitance: ConversionFunction = (
  value,
  from,
  to,
) => {
  const faradConversions: Record<string, number> = {
    farad: 1,
    millifarad: 0.001,
    microfarad: 0.000001,
    nanofarad: 1e-9,
    picofarad: 1e-12,
  };

  const inFarad = value * (faradConversions[from] ?? 1);
  return inFarad / (faradConversions[to] ?? 1);
};

export const convertInductance: ConversionFunction = (value, from, to) => {
  const henryConversions: Record<string, number> = {
    henry: 1,
    millihenry: 0.001,
    microhenry: 0.000001,
    nanohenry: 1e-9,
  };

  const inHenry = value * (henryConversions[from] ?? 1);
  return inHenry / (henryConversions[to] ?? 1);
};
