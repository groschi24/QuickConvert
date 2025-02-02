import { ConversionFunction } from "@/types/units";

export const convertLength: ConversionFunction = (value, from, to) => {
  const meterConversions: { [key: string]: number } = {
    meters: 1,
    feet: 0.3048,
    inches: 0.0254,
    centimeters: 0.01,
    kilometers: 1000,
    miles: 1609.344,
    yards: 0.9144,
    millimeters: 0.001,
  };

  const inMeters = value * (meterConversions[from] ?? 1);
  return inMeters / (meterConversions[to] ?? 1);
};

export const convertWeight: ConversionFunction = (value, from, to) => {
  const kgConversions: { [key: string]: number } = {
    kilograms: 1,
    pounds: 0.453592,
    ounces: 0.0283495,
    grams: 0.001,
    milligrams: 0.000001,
    metric_tons: 1000,
    stone: 6.35029,
  };

  const inKg = value * (kgConversions[from] ?? 1);
  return inKg / (kgConversions[to] ?? 1);
};

export const convertTemperature: ConversionFunction = (value, from, to) => {
  let celsius;
  switch (from) {
    case "celsius":
      celsius = value;
      break;
    case "fahrenheit":
      celsius = (value - 32) * (5 / 9);
      break;
    case "kelvin":
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  switch (to) {
    case "celsius":
      return celsius;
    case "fahrenheit":
      return celsius * (9 / 5) + 32;
    case "kelvin":
      return celsius + 273.15;
    default:
      return celsius;
  }
};

export const convertArea: ConversionFunction = (value, from, to) => {
  const squareMeterConversions: { [key: string]: number } = {
    square_meters: 1,
    square_feet: 0.092903,
    acres: 4046.86,
    hectares: 10000,
    square_kilometers: 1000000,
    square_miles: 2589988.11,
    square_yards: 0.836127,
  };

  const inSquareMeters = value * (squareMeterConversions[from] ?? 1);
  return inSquareMeters / (squareMeterConversions[to] ?? 1);
};

export const convertVolume: ConversionFunction = (value, from, to) => {
  const literConversions: { [key: string]: number } = {
    liters: 1,
    gallons: 3.78541,
    milliliters: 0.001,
    cubic_meters: 1000,
    cubic_feet: 28.3168,
    cups: 0.236588,
    pints: 0.473176,
    quarts: 0.946353,
  };

  const inLiters = value * (literConversions[from] ?? 1);
  return inLiters / (literConversions[to] ?? 1);
};

export const convertTime: ConversionFunction = (value, from, to) => {
  const secondConversions: { [key: string]: number } = {
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
    weeks: 604800,
    months: 2592000,
    years: 31536000,
  };

  const inSeconds = value * (secondConversions[from] ?? 1);
  return inSeconds / (secondConversions[to] ?? 1);
};

export const convertDigital: ConversionFunction = (value, from, to) => {
  const byteConversions: { [key: string]: number } = {
    bytes: 1,
    kilobytes: 1024,
    megabytes: 1048576,
    gigabytes: 1073741824,
    terabytes: 1099511627776,
    petabytes: 1125899906842624,
  };

  const inBytes = value * (byteConversions[from] ?? 1);
  return inBytes / (byteConversions[to] ?? 1);
};

export const convertPressure: ConversionFunction = (value, from, to) => {
  const pascalConversions: { [key: string]: number } = {
    pascal: 1,
    kilopascal: 1000,
    bar: 100000,
    psi: 6894.76,
    atmosphere: 101325,
    mmhg: 133.322,
  };

  const inPascals = value * (pascalConversions[from] ?? 1);
  return inPascals / (pascalConversions[to] ?? 1);
};

export const convertEnergy: ConversionFunction = (value, from, to) => {
  const jouleConversions: { [key: string]: number } = {
    joule: 1,
    calorie: 4.184,
    kilocalorie: 4184,
    kilowatt_hour: 3600000,
    electron_volt: 1.602176634e-19,
    btu: 1055.06,
  };

  const inJoules = value * (jouleConversions[from] ?? 1);
  return inJoules / (jouleConversions[to] ?? 1);
};

export const convertAngle: ConversionFunction = (value, from, to) => {
  const degreeConversions: { [key: string]: number } = {
    degree: 1,
    radian: 57.2958,
    gradian: 0.9,
    arcminute: 1 / 60,
    arcsecond: 1 / 3600,
  };

  const inDegrees = value * (degreeConversions[from] ?? 1);
  return inDegrees / (degreeConversions[to] ?? 1);
};

export const convertSpeed: ConversionFunction = (value, from, to) => {
  const mpsConversions: { [key: string]: number } = {
    meters_per_second: 1,
    kilometers_per_hour: 0.277778,
    miles_per_hour: 0.44704,
    knots: 0.514444,
    feet_per_second: 0.3048,
  };

  const inMps = value * (mpsConversions[from] ?? 1);
  return inMps / (mpsConversions[to] ?? 1);
};

export const convertVolumeDry: ConversionFunction = (value, from, to) => {
  const dryQuartConversions: { [key: string]: number } = {
    dry_quarts: 1,
    dry_pints: 0.5,
    dry_gallons: 4,
    bushels: 32,
    pecks: 8,
  };

  const inDryQuarts = value * (dryQuartConversions[from] ?? 1);
  return inDryQuarts / (dryQuartConversions[to] ?? 1);
};

export const convertCurrency: ConversionFunction = (value, from, to) => {
  // Note: In a real application, you would fetch current exchange rates
  const usdConversions: { [key: string]: number } = {
    usd: 1,
    eur: 0.85,
    gbp: 0.73,
    jpy: 110.0,
    cny: 6.45,
  };

  const inUSD = value * (usdConversions[from] ?? 1);
  return inUSD / (usdConversions[to] ?? 1);
};

export const convertCase: ConversionFunction = (value, from, to) => {
  // For case conversion, we'll return 1 as it's not a numerical conversion
  return 1;
};

export const convertPower: ConversionFunction = (value, from, to) => {
  const wattConversions: { [key: string]: number } = {
    watt: 1,
    kilowatt: 1000,
    megawatt: 1000000,
    horsepower: 745.7,
    btu_per_hour: 0.29307107,
  };

  const inWatts = value * (wattConversions[from] ?? 1);
  return inWatts / (wattConversions[to] ?? 1);
};

export const convertForce: ConversionFunction = (value, from, to) => {
  const newtonConversions: { [key: string]: number } = {
    newton: 1,
    kilonewton: 1000,
    pound_force: 4.44822,
    dyne: 0.00001,
  };

  const inNewtons = value * (newtonConversions[from] ?? 1);
  return inNewtons / (newtonConversions[to] ?? 1);
};

export const convertFuelConsumption: ConversionFunction = (value, from, to) => {
  const mpgConversions: { [key: string]: number } = {
    miles_per_gallon: 1,
    kilometers_per_liter: 0.425144,
    liters_per_100km: 235.215,
  };

  if (to === "liters_per_100km") {
    const litersPerHundredKm = mpgConversions["liters_per_100km"];
    if (!litersPerHundredKm) {
      return value;
    }
    const fromConversion = mpgConversions[from] ?? 1;
    return litersPerHundredKm / (value * fromConversion);
  }

  const inMPG = value * (mpgConversions[from] ?? 1);
  return inMPG / (mpgConversions[to] ?? 1);
};

export const convertNumbers: ConversionFunction = (value, from, to) => {
  // For number base conversion, we'll return 1 as it's not a numerical conversion
  return 1;
};
