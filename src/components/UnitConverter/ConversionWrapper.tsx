"use client";

import { useUnitConverter } from "@/hooks/useUnitConverter";
import { ConversionForm } from "./ConversionForm";
import { Unit, UnitCategory } from "@/types/units";
import { ConversionResult } from "./ConversionResult";
import { AllConversions } from "./AllConversions";
import { ConversionHistory } from "./ConversionHistory";

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
  } = useUnitConverter(category, from, to, units);

  return (
    <div className="font-inter flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#151515] dark:via-[#000000] dark:to-[#151515]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="container relative mx-auto flex-grow px-4 py-16">
        <h1 className="mb-16 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-center text-6xl font-extrabold tracking-tight text-transparent lg:text-7xl">
          {title}
        </h1>
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="transform rounded-2xl border border-gray-200 bg-white/90 p-10 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
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
