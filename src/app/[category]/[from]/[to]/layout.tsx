import type { Metadata } from "next";
import { loadUnitConfig } from "@/utils/loadUnitConfigs";
import type { UnitCategory } from "@/types/units";

type Props = {
  params: Promise<{ category: string; from: string; to: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, from, to } = await params;
  const config = await loadUnitConfig(category as UnitCategory);

  if (!config || Object.keys(config.units).length === 0) {
    return {
      title: "Not Found | Quick Convert",
      description: "The requested conversion page could not be found.",
    };
  }

  const fromUnit = config.units[from];
  const toUnit = config.units[to];

  const title = `Convert ${fromUnit?.label ?? from} to ${toUnit?.label ?? to} | ${config.title}`;
  const description = `Convert ${fromUnit?.label ?? from} to ${toUnit?.label ?? to} with our free online ${config.title.toLowerCase()}. Quick, easy, and accurate conversions.`;

  const keywords = `unit converter, ${config.title.toLowerCase()}, convert ${fromUnit?.label?.toLowerCase() ?? from} to ${toUnit?.label?.toLowerCase() ?? to}, ${category} converter, online converter, measurement converter, unit conversion tool`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
