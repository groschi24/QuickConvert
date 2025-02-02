"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { categoryConfigs } from "@/config/categoryConfigs";
import { UnitCategory } from "@/types/units";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: UnitCategory }>;
}) {
  const { category } = use(params);
  const config = categoryConfigs[category];
  const router = useRouter();

  if (!config) {
    notFound();
  }

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("value", "1");
    router.push(
      `/${category}/${config.defaultFrom}/${config.defaultTo}?${params.toString()}`,
      { scroll: false },
    );
  }, [category, config, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-500 dark:border-[#ffffff20] dark:border-t-indigo-500" />
    </div>
  );
}
