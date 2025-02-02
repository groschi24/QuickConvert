import React from "react";
import { Unit } from "@/types/units";

interface AllConversionsProps {
  fromValue: string;
  fromUnit: string;
  toUnit: string;
  units: Unit[];
  category: string;
  convertFn: (value: number, from: string, to: string) => number;
}

export function AllConversions({
  fromValue,
  fromUnit,
  toUnit,
  units,
  category,
  convertFn,
}: AllConversionsProps) {
  return (
    <div className="mt-8 space-y-6">
      <h3 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-[#ffffffcc]">
        All Conversions
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {units.map((unit) => {
          if (unit.value === toUnit) return null;
          const converted = convertFn(
            parseFloat(fromValue),
            fromUnit,
            unit.value,
          );
          let formula = "";

          if (category === "temperature") {
            if (fromUnit === "celsius") {
              if (unit.value === "fahrenheit") {
                formula = "°F = (°C × 9/5) + 32";
              } else if (unit.value === "kelvin") {
                formula = "K = °C + 273.15";
              }
            } else if (fromUnit === "fahrenheit") {
              if (unit.value === "celsius") {
                formula = "°C = (°F - 32) × 5/9";
              } else if (unit.value === "kelvin") {
                formula = "K = (°F - 32) × 5/9 + 273.15";
              }
            } else if (fromUnit === "kelvin") {
              if (unit.value === "celsius") {
                formula = "°C = K - 273.15";
              } else if (unit.value === "fahrenheit") {
                formula = "°F = (K - 273.15) × 9/5 + 32";
              }
            }
          } else {
            formula = `Multiply by ${convertFn(1, fromUnit, unit.value)}`;
          }

          return (
            <div
              key={unit.value}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#1a1a1a] dark:hover:border-[#ffffff20]"
            >
              <p className="mb-2 text-lg font-medium text-gray-800 dark:text-[#ffffffcc]">
                {unit.label}
              </p>
              <p className="text-gray-600 dark:text-[#ffffffaa]">
                {fromValue}{" "}
                {units.find((u) => u.value === fromUnit)?.label || fromUnit} ={" "}
                {converted.toFixed(4)} {unit.label}
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-[#ffffff80]">
                Formula: {formula}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
