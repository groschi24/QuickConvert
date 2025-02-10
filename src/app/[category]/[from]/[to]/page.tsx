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
    return <div>Loading...</div>;
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
