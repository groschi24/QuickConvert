"use client";

import { useUnitConverter } from "@/hooks/useUnitConverter";
import { ConversionForm } from "./ConversionForm";
import type { Unit } from "@/types/units";
import { ConversionResult } from "./ConversionResult";
import { AllConversions } from "./AllConversions";
import { ConversionHistory } from "./ConversionHistory";
import type { UnitCategory } from "@/types/categoryTypes";

interface IProps {
  category: UnitCategory;
  from: string;
  to: string;
  title: string;
  units: Unit[];
  convertFn: (value: number, from: string, to: string) => number;
}

export default function ConversionWrapper({
  category,
  from,
  to,
  title,
  units,
  convertFn,
}: IProps) {
  const {
    fromValue,
    toValue,
    fromUnit,
    toUnit,
    result,
    conversionHistory,
    handleFromValueChange,
    handleToValueChange,
    handleUnitChange,
    removeFromHistory,
    clearHistory,
  } = useUnitConverter(category, from, to, units, convertFn);

  return (
    <div className="font-inter flex min-h-screen flex-col bg-white dark:bg-[#151515]">
      <div className="container mx-auto flex-grow px-4 py-12">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
            Unit Converter
          </span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            {title}
          </h1>
        </div>
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-[#1A1A1A]">
            <div>
              <ConversionForm
                fromValue={fromValue}
                toValue={toValue}
                fromUnit={fromUnit}
                toUnit={toUnit}
                units={units}
                onFromValueChange={handleFromValueChange}
                onToValueChange={handleToValueChange}
                onUnitChange={handleUnitChange}
              />

              {result && (
                <div className="animate-fadeIn mt-10 space-y-10">
                  <ConversionResult result={result} />
                  <AllConversions
                    fromValue={fromValue}
                    fromUnit={fromUnit}
                    toUnit={toUnit}
                    units={units}
                    category={category}
                    convertFn={convertFn}
                  />
                </div>
              )}
            </div>
          </div>

          <ConversionHistory
            history={conversionHistory}
            onRemoveEntry={removeFromHistory}
            onClearHistory={clearHistory}
          />
        </div>
      </div>
    </div>
  );
}
