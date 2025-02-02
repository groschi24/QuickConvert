import type { ConversionFunction } from "@/types/units";

export const convertLuminance: ConversionFunction = (value, from, to) => {
  const cdPerM2Conversions: Record<string, number> = {
    candela_per_square_meter: 1,
    foot_lambert: 3.426259,
    lambert: 3183.099,
    stilb: 10000,
  };

  const inCdPerM2 = value * (cdPerM2Conversions[from] ?? 1);
  return inCdPerM2 / (cdPerM2Conversions[to] ?? 1);
};

export const convertLuminousIntensity: ConversionFunction = (
  value,
  from,
  to,
) => {
  const candelaConversions: Record<string, number> = {
    candela: 1,
    candlepower: 1,
    hefnerkerze: 0.92,
    carcel: 9.6,
  };

  const inCandela = value * (candelaConversions[from] ?? 1);
  return inCandela / (candelaConversions[to] ?? 1);
};

export const convertIllumination: ConversionFunction = (value, from, to) => {
  const luxConversions: Record<string, number> = {
    lux: 1,
    foot_candle: 10.7639,
    phot: 10000,
    nox: 0.001,
  };

  const inLux = value * (luxConversions[from] ?? 1);
  return inLux / (luxConversions[to] ?? 1);
};

export const convertDigitalImageResolution: ConversionFunction = (
  value,
  from,
  to,
) => {
  const ppiConversions: Record<string, number> = {
    pixels_per_inch: 1,
    pixels_per_centimeter: 0.393701,
    dots_per_inch: 1,
    dots_per_centimeter: 0.393701,
  };

  const inPPI = value * (ppiConversions[from] ?? 1);
  return inPPI / (ppiConversions[to] ?? 1);
};

export const convertFrequencyWavelength: ConversionFunction = (
  value,
  from,
  to,
) => {
  const speedOfLight = 299792458; // meters per second

  // Convert input to frequency in Hz
  let frequencyHz: number;
  if (
    from === "hertz" ||
    from === "kilohertz" ||
    from === "megahertz" ||
    from === "gigahertz"
  ) {
    const freqMultipliers: Record<string, number> = {
      hertz: 1,
      kilohertz: 1000,
      megahertz: 1000000,
      gigahertz: 1000000000,
    };
    frequencyHz = value * (freqMultipliers[from] ?? 1);
  } else {
    // Input is wavelength
    const wavelengthMeters =
      value *
      ({
        nanometers: 1e-9,
        micrometers: 1e-6,
        millimeters: 1e-3,
        meters: 1,
      }[from] ?? 1);
    frequencyHz = speedOfLight / wavelengthMeters;
  }

  // Convert frequency to desired output unit
  if (
    to === "hertz" ||
    to === "kilohertz" ||
    to === "megahertz" ||
    to === "gigahertz"
  ) {
    const freqDivisors: Record<string, number> = {
      hertz: 1,
      kilohertz: 1000,
      megahertz: 1000000,
      gigahertz: 1000000000,
    };
    return frequencyHz / (freqDivisors[to] ?? 1);
  } else {
    // Output is wavelength
    const wavelengthMeters = speedOfLight / frequencyHz;
    return (
      wavelengthMeters /
      ({
        nanometers: 1e-9,
        micrometers: 1e-6,
        millimeters: 1e-3,
        meters: 1,
      }[to] ?? 1)
    );
  }
};
