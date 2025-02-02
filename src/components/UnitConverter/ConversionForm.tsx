import React from "react";
import { Unit } from "@/types/units";

interface ConversionFormProps {
  fromValue: string;
  fromUnit: string;
  toUnit: string;
  units: Unit[];
  onValueChange: (value: string) => void;
  onUnitChange: (fromUnit: string, toUnit: string) => void;
}

export function ConversionForm({
  fromValue,
  fromUnit,
  toUnit,
  units,
  onValueChange,
  onUnitChange,
}: ConversionFormProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <label className="block text-sm font-medium uppercase tracking-wide text-gray-700 dark:text-[#ffffffcc]">
          From
        </label>
        <input
          type="number"
          value={fromValue}
          onChange={(e) => onValueChange(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white p-3 font-medium text-gray-800 transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515] dark:text-[#ffffffcc]"
          placeholder="Enter value"
        />
        <select
          value={fromUnit}
          onChange={(e) => onUnitChange(e.target.value, toUnit)}
          className="w-full rounded-lg border border-gray-200 bg-white p-3 font-medium text-gray-800 transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515] dark:text-[#ffffffcc]"
        >
          {units.map((unit) => (
            <option key={unit.value} value={unit.value}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium uppercase tracking-wide text-[#ffffffcc]">
          To
        </label>
        <select
          value={toUnit}
          onChange={(e) => onUnitChange(fromUnit, e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white p-3 font-medium text-gray-800 transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515] dark:text-[#ffffffcc]"
        >
          {units.map((unit) => (
            <option key={unit.value} value={unit.value}>
              {unit.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
