import type { ConversionFunction } from "@/types/units";

export const convertRadiation: ConversionFunction = (value, from, to) => {
  const sievertConversions: Record<string, number> = {
    sievert: 1,
    millisievert: 0.001,
    microsievert: 0.000001,
    rem: 0.01,
    millirem: 0.00001,
  };

  const inSievert = value * (sievertConversions[from] ?? 1);
  return inSievert / (sievertConversions[to] ?? 1);
};

export const convertRadiationActivity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const becquerelConversions: Record<string, number> = {
    becquerel: 1,
    kilobecquerel: 1000,
    megabecquerel: 1000000,
    gigabecquerel: 1000000000,
    curie: 3.7e10,
    millicurie: 3.7e7,
    microcurie: 3.7e4,
  };

  const inBecquerel = value * (becquerelConversions[from] ?? 1);
  return inBecquerel / (becquerelConversions[to] ?? 1);
};

export const convertRadiationExposure: ConversionFunction = (
  value,
  from,
  to,
) => {
  const coulombPerKgConversions: Record<string, number> = {
    coulomb_per_kilogram: 1,
    millicoulomb_per_kilogram: 0.001,
    microcoulomb_per_kilogram: 0.000001,
    roentgen: 0.000258,
  };

  const inCoulombPerKg = value * (coulombPerKgConversions[from] ?? 1);
  return inCoulombPerKg / (coulombPerKgConversions[to] ?? 1);
};

export const convertRadiationAbsorbedDose: ConversionFunction = (
  value,
  from,
  to,
) => {
  const grayConversions: Record<string, number> = {
    gray: 1,
    milligray: 0.001,
    microgray: 0.000001,
    rad: 0.01,
    millirad: 0.00001,
  };

  const inGray = value * (grayConversions[from] ?? 1);
  return inGray / (grayConversions[to] ?? 1);
};
