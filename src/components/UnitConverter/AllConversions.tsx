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

const formatNumber = (num: number): string => {
  // Convert to a fixed number of decimal places (max 12)
  const fixed = num.toFixed(12);
  // Remove trailing zeros while keeping significant decimals
  const formatted = fixed.replace(/\.?0+$/, "");
  return formatted || "0";
};

export function AllConversions({
  fromValue,
  fromUnit,
  toUnit,
  units,
  convertFn,
}: AllConversionsProps) {
  return (
    <div className="mt-12 space-y-6">
      <h3 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-[#ffffffcc]">
        All Conversions
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {units.map((unit) => {
          if (unit.value === toUnit || unit.value === fromUnit) return null;
          const converted = convertFn(
            parseFloat(fromValue),
            fromUnit,
            unit.value,
          );
          const conversionFactor = convertFn(1, fromUnit, unit.value);
          const formula = `Multiply by ${formatNumber(conversionFactor)}`;

          return (
            <div
              key={unit.value}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-[#1A1A1A]"
            >
              <p className="mb-3 text-lg font-semibold text-gray-800 dark:text-[#ffffffcc]">
                {unit.label}
              </p>
              <p className="text-gray-600 dark:text-[#ffffffaa]">
                {formatNumber(parseFloat(fromValue))}{" "}
                {units.find((u) => u.value === fromUnit)?.label ?? fromUnit} ={" "}
                {Number.isFinite(converted)
                  ? formatNumber(converted)
                  : "Invalid"}{" "}
                {unit.label}
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
