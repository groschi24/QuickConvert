import type { UnitCategory, CategoryConfig } from "@/types/units";
import { units } from "@/config/units";
import {
  convertPrefixes,
  convertDataTransfer,
  convertSound,
  convertTypography,
  convertVolumeLumber,
} from "@/utils/conversions";

export const otherCategoryConfigs: Partial<
  Record<UnitCategory, CategoryConfig>
> = {
  prefixes: {
    title: "Prefixes Converter",
    units: units.prefixes,
    convertFn: convertPrefixes,
    defaultFrom: "kilo",
    defaultTo: "mega",
  },
  data_transfer: {
    title: "Data Transfer Converter",
    units: units.data_transfer,
    convertFn: convertDataTransfer,
    defaultFrom: "bytes_per_second",
    defaultTo: "megabytes_per_second",
  },
  sound: {
    title: "Sound Converter",
    units: units.sound,
    convertFn: convertSound,
    defaultFrom: "decibel",
    defaultTo: "phon",
  },
  typography: {
    title: "Typography Converter",
    units: units.typography,
    convertFn: convertTypography,
    defaultFrom: "point",
    defaultTo: "pica",
  },
  volume_lumber: {
    title: "Volume - Lumber Converter",
    units: units.volume_lumber,
    convertFn: convertVolumeLumber,
    defaultFrom: "board_feet",
    defaultTo: "cubic_feet",
  },
};
