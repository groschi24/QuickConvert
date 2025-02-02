import React from "react";
import type { Unit } from "@/types/units";

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
    <div className="space-y-8">
      <div className="space-y-4">
        <label className="block text-sm font-medium uppercase tracking-wide text-gray-700 dark:text-[#ffffffcc]">
          Value
        </label>
        <input
          type="number"
          value={fromValue}
          onChange={(e) => onValueChange(e.target.value)}
          className="w-full rounded-lg border border-gray-200/30 bg-white/10 p-4 font-medium text-gray-800 backdrop-blur-xl transition-all duration-200 focus:border-indigo-500/50 focus:bg-white/20 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff10] dark:bg-[#ffffff05] dark:text-[#ffffffcc] dark:focus:border-[#ffffff20] dark:focus:bg-[#ffffff08]"
          placeholder="Enter value"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <label className="block text-sm font-medium uppercase tracking-wide text-gray-700 dark:text-[#ffffffcc]">
            From
          </label>
          <select
            value={fromUnit}
            onChange={(e) => onUnitChange(e.target.value, toUnit)}
            className="w-full cursor-pointer rounded-lg border border-gray-200/30 bg-white/10 p-4 pr-8 font-medium text-gray-800 backdrop-blur-xl transition-all duration-200 focus:border-indigo-500/50 focus:bg-white/20 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff10] dark:bg-[#ffffff05] dark:text-[#ffffffcc] dark:focus:border-[#ffffff20] dark:focus:bg-[#ffffff08]"
          >
            {units.map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium uppercase tracking-wide text-gray-700 dark:text-[#ffffffcc]">
            To
          </label>
          <select
            value={toUnit}
            onChange={(e) => onUnitChange(fromUnit, e.target.value)}
            className="w-full cursor-pointer rounded-lg border border-gray-200/30 bg-white/10 p-4 pr-8 font-medium text-gray-800 backdrop-blur-xl transition-all duration-200 focus:border-indigo-500/50 focus:bg-white/20 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff10] dark:bg-[#ffffff05] dark:text-[#ffffffcc] dark:focus:border-[#ffffff20] dark:focus:bg-[#ffffff08]"
          >
            {units.map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
