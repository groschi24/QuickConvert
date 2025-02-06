import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { loadUnitConfig } from "@/utils/loadUnitConfigs";
import type { UnitCategory } from "@/types/units";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: UnitCategory }>;
}) {
  const { category } = await params;

  const config = await loadUnitConfig(category);

  if (!config) {
    notFound();
  }

  const units = Object.keys(config.units);
  if (units.length >= 2) {
    const searchParams = new URLSearchParams();
    searchParams.set("value", "1");
    redirect(`/${category}/${units[0]}/${units[1]}?${searchParams.toString()}`);
  }

  return notFound();
}
