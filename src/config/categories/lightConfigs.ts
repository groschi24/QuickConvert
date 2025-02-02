import type { UnitCategory, CategoryConfig } from "@/types/units";
import { units } from "@/config/units";
import {
  convertLuminance,
  convertLuminousIntensity,
  convertIllumination,
  convertDigitalImageResolution,
  convertFrequencyWavelength,
} from "@/utils/conversions";

export const lightCategoryConfigs: Partial<
  Record<UnitCategory, CategoryConfig>
> = {
  luminance: {
    title: "Luminance Converter",
    units: units.luminance,
    convertFn: convertLuminance,
    defaultFrom: "candela_per_square_meter",
    defaultTo: "foot_lambert",
  },
  luminous_intensity: {
    title: "Luminous Intensity Converter",
    units: units.luminous_intensity,
    convertFn: convertLuminousIntensity,
    defaultFrom: "candela",
    defaultTo: "candlepower",
  },
  illumination: {
    title: "Illumination Converter",
    units: units.illumination,
    convertFn: convertIllumination,
    defaultFrom: "lux",
    defaultTo: "foot_candle",
  },
  digital_image_resolution: {
    title: "Digital Image Resolution Converter",
    units: units.digital_image_resolution,
    convertFn: convertDigitalImageResolution,
    defaultFrom: "pixels_per_inch",
    defaultTo: "pixels_per_centimeter",
  },
  frequency_wavelength: {
    title: "Frequency Wavelength Converter",
    units: units.frequency_wavelength,
    convertFn: convertFrequencyWavelength,
    defaultFrom: "hertz",
    defaultTo: "nanometers",
  },
};
