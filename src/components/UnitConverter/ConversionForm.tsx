"use client";

import React from "react";
import type { Unit } from "@/types/units";

interface ConversionFormProps {
  fromValue: string;
  toValue: string;
  fromUnit: string;
  toUnit: string;
  units: Unit[];
  onFromValueChange: (value: string) => void;
  onToValueChange: (value: string) => void;
  onUnitChange: (fromUnit: string, toUnit: string) => void;
}

export function ConversionForm({
  fromValue,
  toValue,
  fromUnit,
  toUnit,
  units,
  onFromValueChange,
  onToValueChange,
  onUnitChange,
}: ConversionFormProps) {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-[#ffffffaa]">
            From
          </label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => onFromValueChange(e.target.value)}
            onWheel={(e) => (e.target as HTMLInputElement).blur()}
            className="w-full rounded-lg border border-gray-300 bg-white p-4 text-lg text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#1A1A1A] dark:text-white dark:placeholder:text-gray-400"
            placeholder="Enter value"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-[#ffffffaa]">
            To
          </label>
          <input
            type="number"
            value={toValue}
            onChange={(e) => onToValueChange(e.target.value)}
            onWheel={(e) => (e.target as HTMLInputElement).blur()}
            className="w-full rounded-lg border border-gray-300 bg-white p-4 text-lg text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:bg-[#1A1A1A] dark:text-white dark:placeholder:text-gray-400"
            placeholder="Enter value"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-[#ffffffaa]">
            From Unit
          </label>
          <select
            value={fromUnit}
            onChange={(e) => onUnitChange(e.target.value, toUnit)}
            className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white/80 p-4 text-lg font-medium text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-indigo-200 hover:bg-white/90 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515]/80 dark:text-[#ffffffcc] dark:hover:border-[#ffffff25] dark:hover:bg-[#151515]/90 dark:focus:border-indigo-500"
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
            To Unit
          </label>
          <select
            value={toUnit}
            onChange={(e) => onUnitChange(fromUnit, e.target.value)}
            className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white/80 p-4 text-lg font-medium text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-indigo-200 hover:bg-white/90 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515]/80 dark:text-[#ffffffcc] dark:hover:border-[#ffffff25] dark:hover:bg-[#151515]/90 dark:focus:border-indigo-500"
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
