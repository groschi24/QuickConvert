import Link from "next/link";
import { loadAllUnitConfigs } from "@/utils/loadUnitConfigs";
import Header from "@/components/Header";
import ScrollingContainer from "@/components/ScrollingContainer";

import type { PopularConversion } from "@/types/units";

export default function Home() {
  const popularConversions: PopularConversion[] = [
    {
      from: "kilometers",
      to: "miles",
      category: "length",
      label: "Kilometers to Miles",
      description: "Convert distances between metric and imperial units",
      icon: "🛣️",
    },
    {
      from: "kilograms",
      to: "pounds",
      category: "weight",
      label: "Kilograms to Pounds",
      description: "Convert between metric and imperial weight units",
      icon: "⚖️",
    },
    {
      from: "celsius",
      to: "fahrenheit",
      category: "temperature",
      label: "Celsius to Fahrenheit",
      description: "Convert between Celsius and Fahrenheit scales",
      icon: "🌡️",
    },
    {
      from: "usd",
      to: "eur",
      category: "currency",
      label: "USD to EUR",
      description: "Convert between US Dollars and Euros",
      icon: "💱",
    },
    {
      from: "meters",
      to: "feet",
      category: "length",
      label: "Meters to Feet",
      description: "Convert heights and depths between metric and imperial",
      icon: "📏",
    },
    {
      from: "liters",
      to: "gallons",
      category: "volume",
      label: "Liters to Gallons",
      description: "Convert liquid volumes between metric and imperial",
      icon: "🚰",
    },
    {
      from: "meters_per_second",
      to: "kilometers_per_hour",
      category: "speed",
      label: "MPH to KPH",
      description: "Convert speeds between miles and kilometers per hour",
      icon: "🚗",
    },
    {
      from: "bytes",
      to: "megabytes",
      category: "digital",
      label: "Bytes to MB",
      description: "Convert between digital storage units",
      icon: "💾",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-gray-50 dark:bg-[#000000]">
      <Header />

      {/* Popular Conversions */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="container relative mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400">
              Most Used Conversions
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-[#ffffffee] sm:text-4xl">
              Quick Access to Popular Conversions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-[#ffffffaa]">
              Start with our most frequently used conversion tools
            </p>
          </div>
          <ScrollingContainer conversions={popularConversions} />
        </div>
      </section>

      {/* All Categories */}
      <section
        id="converters"
        className="relative overflow-hidden bg-gray-50/50 py-24 dark:bg-[#151515]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="container relative mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400">
              All Categories
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-[#ffffffee] sm:text-4xl">
              Explore All Conversion Categories
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-[#ffffffaa]">
              Find the perfect converter for your needs
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Object.entries(loadAllUnitConfigs()).map(([key, config]) => (
              <Link
                key={key}
                href={`/${key}`}
                className="group relative transform overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:shadow-lg dark:border-[#ffffff10] dark:bg-[#151515] dark:hover:border-[#ffffff20]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-950/30"></div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffcc] dark:group-hover:text-indigo-400">
                  {config.title || key}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-[#ffffff80]">
                  Convert {(config.title || key).toLowerCase()} units instantly
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="container relative mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400">
              Features
            </span>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-[#ffffffee] sm:text-4xl">
              Why Choose Our Converter?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-[#ffffffaa]">
              Discover the powerful features that make our converter stand out
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
