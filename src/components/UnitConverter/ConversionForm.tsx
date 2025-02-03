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
    <div className="space-y-10">
      <div className="space-y-3">
        <label className="block text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-[#ffffffaa]">
          Value
        </label>
        <input
          type="number"
          value={fromValue}
          onChange={(e) => onValueChange(e.target.value)}
          onWheel={(e) => (e.target as HTMLInputElement).blur()}
          className="w-full rounded-xl border border-gray-200 bg-white/80 p-4 text-lg font-medium text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515]/80 dark:text-[#ffffffcc] dark:placeholder:text-[#ffffff40] dark:hover:border-[#ffffff25] dark:focus:border-indigo-500"
          placeholder="Enter value"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-[#ffffffaa]">
            From
          </label>
          <select
            value={fromUnit}
            onChange={(e) => onUnitChange(e.target.value, toUnit)}
            className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white/80 p-4 text-lg font-medium text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515]/80 dark:text-[#ffffffcc] dark:hover:border-[#ffffff25] dark:focus:border-indigo-500"
          >
            {units.map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-[#ffffffaa]">
            To
          </label>
          <select
            value={toUnit}
            onChange={(e) => onUnitChange(fromUnit, e.target.value)}
            className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white/80 p-4 text-lg font-medium text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515]/80 dark:text-[#ffffffcc] dark:hover:border-[#ffffff25] dark:focus:border-indigo-500"
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
