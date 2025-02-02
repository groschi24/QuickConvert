/**
 * Conversion functions for Other category converters
 */

// Prefix conversion factors (base 10)
export function convertPrefixes(
  value: number,
  from: string,
  to: string,
): number {
  const prefixFactors: Record<string, number> = {
    yotta: 1e24,
    zetta: 1e21,
    exa: 1e18,
    peta: 1e15,
    tera: 1e12,
    giga: 1e9,
    mega: 1e6,
    kilo: 1e3,
    hecto: 1e2,
    deca: 1e1,
    deci: 1e-1,
    centi: 1e-2,
    milli: 1e-3,
    micro: 1e-6,
    nano: 1e-9,
    pico: 1e-12,
    femto: 1e-15,
    atto: 1e-18,
    zepto: 1e-21,
    yocto: 1e-24,
  };

  const fromFactor = prefixFactors[from] ?? 1;
  const toFactor = prefixFactors[to] ?? 1;
  return (value * fromFactor) / toFactor;
}

// Data transfer conversion factors (bytes per second)
export function convertDataTransfer(
  value: number,
  from: string,
  to: string,
): number {
  const transferFactors: Record<string, number> = {
    bytes_per_second: 1,
    kilobytes_per_second: 1024,
    megabytes_per_second: 1024 * 1024,
    gigabytes_per_second: 1024 * 1024 * 1024,
    terabytes_per_second: 1024 * 1024 * 1024 * 1024,
  };

  const fromFactor = transferFactors[from] ?? 1;
  const toFactor = transferFactors[to] ?? 1;
  return (value * fromFactor) / toFactor;
}

// Sound conversion factors (approximate conversions)
export function convertSound(value: number, from: string, to: string): number {
  if (from === to) return value;

  // Conversion formulas based on psychoacoustics
  switch (from) {
    case "decibel":
      switch (to) {
        case "phon":
          return value; // At 1kHz, phon equals dB SPL
        case "sone":
          return Math.pow(2, (value - 40) / 10); // Stevens' power law
        case "bel":
          return value / 10;
      }
      break;
    case "phon":
      switch (to) {
        case "decibel":
          return value; // At 1kHz
        case "sone":
          return Math.pow(2, (value - 40) / 10);
        case "bel":
          return value / 10;
      }
      break;
    case "sone":
      switch (to) {
        case "decibel":
          return 40 + 10 * Math.log2(value);
        case "phon":
          return 40 + 10 * Math.log2(value);
        case "bel":
          return (40 + 10 * Math.log2(value)) / 10;
      }
      break;
    case "bel":
      switch (to) {
        case "decibel":
          return value * 10;
        case "phon":
          return value * 10;
        case "sone":
          return Math.pow(2, (value * 10 - 40) / 10);
      }
      break;
  }
  return value;
}

// Typography conversion factors
export function convertTypography(
  value: number,
  from: string,
  to: string,
): number {
  const typographyFactors: Record<string, number> = {
    point: 1,
    pica: 1 / 12, // 1 pica = 12 points
    em: 1 / 12, // 1 em ≈ 12 points (traditional)
    pixel: 3 / 4, // 1 pixel ≈ 0.75 points (at 96 DPI)
    millimeter: 2.83465, // 1 mm ≈ 2.83465 points
  };

  const fromFactor = typographyFactors[from] ?? 1;
  const toFactor = typographyFactors[to] ?? 1;
  return (value / fromFactor) * toFactor;
}

// Volume lumber conversion factors
export function convertVolumeLumber(
  value: number,
  from: string,
  to: string,
): number {
  const lumberFactors: Record<string, number> = {
    board_feet: 1,
    cubic_feet: 1 / 12, // 1 board foot = 1/12 cubic foot
    cubic_meters: 0.002359, // 1 board foot ≈ 0.002359 cubic meters
    cords: 1 / 128, // 1 cord = 128 cubic feet
  };

  const fromFactor = lumberFactors[from] ?? 1;
  const toFactor = lumberFactors[to] ?? 1;
  return (value * fromFactor) / toFactor;
}
