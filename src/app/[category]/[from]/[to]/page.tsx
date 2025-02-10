"use client";

import { notFound } from "next/navigation";
import { loadUnitConfig } from "@/utils/loadUnitConfigs";
import ConversionWrapper from "@/components/UnitConverter/ConversionWrapper";
import { use, useEffect, useState } from "react";
import type { UnitCategory } from "@/types/categoryTypes";

export default function UnitConverter({
  params,
}: {
  params: Promise<{ category: UnitCategory; from: string; to: string }>;
}) {
  const { category, from, to } = use(params);
  const [config, setConfig] = useState<Awaited<
    ReturnType<typeof loadUnitConfig>
  > | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const loadedConfig = await loadUnitConfig(category);
        if (!loadedConfig) {
          notFound();
        }
        setConfig(loadedConfig);
      } catch (error) {
        console.error("Error loading config:", error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    };

    void loadConfig();
  }, [category]);

  if (isLoading || !config) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#151515] dark:via-[#000000] dark:to-[#151515]">
        <div className="space-y-4 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <div className="text-sm font-medium text-gray-600 dark:text-[#ffffffaa]">
            Loading converter...
          </div>
        </div>
      </div>
    );
  }

  return (
    <ConversionWrapper
      category={category}
      from={from}
      to={to}
      title={config.label}
      units={Object.values(config.units).map((item) => ({
        value: item.value,
        label: item.label,
      }))}
      convertFn={config.convertFn}
    />
  );
}
