import React from "react";
import type { Unit } from "@/types/units";

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
    <div className="mt-12 space-y-6">
      <h3 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-[#ffffffcc]">
        All Conversions
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
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
              className="transform rounded-xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/80 dark:hover:border-[#ffffff20]"
            >
              <p className="mb-3 text-lg font-semibold text-gray-800 dark:text-[#ffffffcc]">
                {unit.label}
              </p>
              <p className="text-gray-600 dark:text-[#ffffffaa]">
                {fromValue}{" "}
                {units.find((u) => u.value === fromUnit)?.label ?? fromUnit} ={" "}
                {converted.toFixed(4)} {unit.label}
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-[#ffffff80]">
                Formula: {formula}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
