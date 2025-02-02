"use client";

import { use } from "react";
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import { categoryConfigs } from "@/config/categoryConfigs";
import { useUnitConverter } from "@/hooks/useUnitConverter";
import { ConversionForm } from "@/components/UnitConverter/ConversionForm";
import { ConversionHistory } from "@/components/UnitConverter/ConversionHistory";
import { ConversionResult } from "@/components/UnitConverter/ConversionResult";
import { AllConversions } from "@/components/UnitConverter/AllConversions";
import { UnitCategory } from "@/types/units";

export default function UnitConverter({
  params,
}: {
  params: Promise<{ category: UnitCategory; from: string; to: string }>;
}) {
  const { category, from, to } = use(params);
  const config = categoryConfigs[category];

  if (!config) {
    notFound();
  }

  const {
    fromValue,
    fromUnit,
    toUnit,
    result,
    convertedValue,
    conversionHistory,
    handleValueChange,
    handleUnitChange,
    removeFromHistory,
    clearHistory,
  } = useUnitConverter(config, category, from, to);

  return (
    <div className="font-inter flex min-h-screen flex-col bg-gray-50 dark:bg-black">
      <div className="container mx-auto flex-grow px-4 py-12">
        <h1 className="mb-12 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent">
          {config.title}
        </h1>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515] dark:hover:border-[#ffffff20]">
            <ConversionForm
              fromValue={fromValue}
              fromUnit={fromUnit}
              toUnit={toUnit}
              units={config.units}
              onValueChange={handleValueChange}
              onUnitChange={handleUnitChange}
            />

            {result && (
              <>
                <ConversionResult result={result} />
                <AllConversions
                  fromValue={fromValue}
                  fromUnit={fromUnit}
                  toUnit={toUnit}
                  units={config.units}
                  category={category}
                  convertFn={config.convertFn}
                />
              </>
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
