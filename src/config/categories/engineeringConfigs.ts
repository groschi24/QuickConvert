import { UnitCategory, CategoryConfig } from "@/types/units";
import { units } from "@/config/units";
import {
  convertVelocityAngular,
  convertAcceleration,
  convertAccelerationAngular,
  convertDensity,
  convertSpecificVolume,
  convertMomentOfInertia,
} from "@/utils/conversions";

export const engineeringCategoryConfigs: Partial<
  Record<UnitCategory, CategoryConfig>
> = {
  velocity_angular: {
    title: "Angular Velocity Converter",
    units: units.velocity_angular,
    convertFn: convertVelocityAngular,
    defaultFrom: "radians_per_second",
    defaultTo: "degrees_per_second",
  },
  acceleration: {
    title: "Acceleration Converter",
    units: units.acceleration,
    convertFn: convertAcceleration,
    defaultFrom: "meters_per_second_squared",
    defaultTo: "feet_per_second_squared",
  },
  acceleration_angular: {
    title: "Angular Acceleration Converter",
    units: units.acceleration_angular,
    convertFn: convertAccelerationAngular,
    defaultFrom: "radians_per_second_squared",
    defaultTo: "degrees_per_second_squared",
  },
  density: {
    title: "Density Converter",
    units: units.density,
    convertFn: convertDensity,
    defaultFrom: "kilograms_per_cubic_meter",
    defaultTo: "grams_per_cubic_centimeter",
  },
  specific_volume: {
    title: "Specific Volume Converter",
    units: units.specific_volume,
    convertFn: convertSpecificVolume,
    defaultFrom: "cubic_meters_per_kilogram",
    defaultTo: "liters_per_kilogram",
  },
  moment_of_inertia: {
    title: "Moment of Inertia Converter",
    units: units.moment_of_inertia,
    convertFn: convertMomentOfInertia,
    defaultFrom: "kilogram_square_meter",
    defaultTo: "pound_square_foot",
  },
  moment_of_force: {
    title: "Moment of Force Converter",
    units: units.moment_of_force,
    convertFn: convertMomentOfInertia,
    defaultFrom: "newton_meter",
    defaultTo: "pound_foot",
  },
  torque: {
    title: "Torque Converter",
    units: units.torque,
    convertFn: convertMomentOfInertia,
    defaultFrom: "newton_meter",
    defaultTo: "pound_foot",
  },
};
