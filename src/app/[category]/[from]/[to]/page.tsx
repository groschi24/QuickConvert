import { notFound } from "next/navigation";
import type { UnitCategory } from "@/types/units";
import { loadUnitConfig } from "@/utils/loadUnitConfigs";
import ConversionWrapper from "@/components/UnitConverter/ConversionWrapper";

export default async function UnitConverter({
  params,
}: {
  params: Promise<{ category: UnitCategory; from: string; to: string }>;
}) {
  const { category, from, to } = await params;
  const config = await loadUnitConfig(category);

  if (!config) {
    notFound();
  }

  console.log("U: ", config.units);

  return (
    <ConversionWrapper
      category={category}
      from={from}
      to={to}
      title={config.title}
      units={Object.values(config.units).map((item) => ({
        value: item.value,
        label: item.label,
      }))}
      convertFn={config.convertFn}
    />
  );
}
