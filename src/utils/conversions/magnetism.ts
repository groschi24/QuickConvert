export function convertMagnetomotiveForce(
  value: number,
  from: string,
  to: string,
): number {
  const baseUnit = "ampere_turns";
  const conversions: Record<string, number> = {
    ampere_turns: 1,
    gilbert: 0.7957747154594767,
    kiloampere_turns: 1000,
  };

  const valueInBase = value * (conversions[from] || 1);
  return valueInBase / (conversions[to] || 1);
}

export function convertMagneticFieldStrength(
  value: number,
  from: string,
  to: string,
): number {
  const baseUnit = "ampere_per_meter";
  const conversions: Record<string, number> = {
    ampere_per_meter: 1,
    oersted: 79.57747154594767,
    kiloampere_per_meter: 1000,
  };

  const valueInBase = value * (conversions[from] || 1);
  return valueInBase / (conversions[to] || 1);
}

export function convertMagneticFlux(
  value: number,
  from: string,
  to: string,
): number {
  const baseUnit = "weber";
  const conversions: Record<string, number> = {
    weber: 1,
    maxwell: 1e-8,
    kiloweber: 1000,
  };

  const valueInBase = value * (conversions[from] || 1);
  return valueInBase / (conversions[to] || 1);
}

export function convertMagneticFluxDensity(
  value: number,
  from: string,
  to: string,
): number {
  const baseUnit = "tesla";
  const conversions: Record<string, number> = {
    tesla: 1,
    gauss: 1e-4,
    millitesla: 0.001,
  };

  const valueInBase = value * (conversions[from] || 1);
  return valueInBase / (conversions[to] || 1);
}
