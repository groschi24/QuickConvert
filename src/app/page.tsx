import Link from "next/link";
import { loadAllUnitConfigs } from "@/utils/loadUnitConfigs";
import Header from "@/components/Header";
import ScrollingContainer from "@/components/ScrollingContainer";

import type { PopularConversion } from "@/types/units";

export default async function Home() {
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
      to: "feet_per_second",
      category: "speed",
      label: "m/s to ft/s",
      description: "Convert velocity between metric and imperial units",
      icon: "🏃",
    },
    {
      from: "watts",
      to: "kilowatts",
      category: "power",
      label: "Watts to Kilowatts",
      description: "Convert power measurements for electrical devices",
      icon: "⚡",
    },
    {
      from: "meters_per_second_squared",
      to: "gravity",
      category: "acceleration",
      label: "m/s² to g",
      description: "Convert acceleration to standard gravity units",
      icon: "🎢",
    },
    {
      from: "radians_per_second",
      to: "revolutions_per_minute",
      category: "velocity_angular",
      label: "rad/s to RPM",
      description: "Convert between angular velocity units",
      icon: "🔄",
    },
    {
      from: "cubic_meters_per_second",
      to: "gallons_per_minute",
      category: "flow_rate",
      label: "m³/s to GPM",
      description: "Convert between flow rate measurements",
      icon: "💧",
    },
    {
      from: "pascal_second",
      to: "poise",
      category: "viscosity",
      label: "Pa·s to Poise",
      description: "Convert between viscosity measurements",
      icon: "🌊",
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
          <div className="mx-auto grid max-w-6xl gap-8">
            {Object.entries(await loadAllUnitConfigs())
              .sort(([keyA], [keyB]) => {
                const groupOrder: Record<string, number> = {
                  common: 0,
                  engineering: 1,
                  heat_energy: 2,
                  fluid_volume: 3,
                  light: 4,
                  electromagnetism: 5,
                  radiation: 6,
                  misc: 7,
                };
                return (groupOrder[keyA] ?? 999) - (groupOrder[keyB] ?? 999);
              })
              .map(([groupKey, group]) => (
                <div key={groupKey} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
                    {group.label || groupKey}
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Object.entries(group.categories || {})
                      .sort(([a], [b]) => a.localeCompare(b))
                      .map(([categoryKey, category]) => (
                        <Link
                          key={`${groupKey}-${categoryKey}`}
                          href={`/${categoryKey}`}
                          className="group relative transform overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:shadow-lg dark:border-[#ffffff10] dark:bg-[#151515] dark:hover:border-[#ffffff20]"
                        >
                          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-950/30"></div>
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffcc] dark:group-hover:text-indigo-400">
                            {category.label}
                          </h3>
                          <p className="mt-2 text-sm text-gray-600 dark:text-[#ffffff80]">
                            Convert {category.label.toLowerCase()} units
                            instantly
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
              <div className="mb-5 inline-flex rounded-lg bg-indigo-100 p-3 text-2xl dark:bg-indigo-950/30">
                ⚡️
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffcc] dark:group-hover:text-indigo-400">
                Instant Calculations
              </h3>
              <p className="text-gray-600 dark:text-[#ffffff80]">
                Get real-time conversions as you type, with instant updates and
                precise results.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
              <div className="mb-5 inline-flex rounded-lg bg-indigo-100 p-3 text-2xl dark:bg-indigo-950/30">
                🎯
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffcc] dark:group-hover:text-indigo-400">
                Precision & Accuracy
              </h3>
              <p className="text-gray-600 dark:text-[#ffffff80]">
                High-precision conversions you can trust, with detailed formulas
                for transparency.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
              <div className="mb-5 inline-flex rounded-lg bg-indigo-100 p-3 text-2xl dark:bg-indigo-950/30">
                🌙
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffcc] dark:group-hover:text-indigo-400">
                Dark Mode Support
              </h3>
              <p className="text-gray-600 dark:text-[#ffffff80]">
                Comfortable viewing day or night with automatic theme detection
                and manual toggle.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
              <div className="mb-5 inline-flex rounded-lg bg-indigo-100 p-3 text-2xl dark:bg-indigo-950/30">
                📱
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffcc] dark:group-hover:text-indigo-400">
                Responsive Design
              </h3>
              <p className="text-gray-600 dark:text-[#ffffff80]">
                Perfect experience across all devices - from desktop to mobile.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
              <div className="mb-5 inline-flex rounded-lg bg-indigo-100 p-3 text-2xl dark:bg-indigo-950/30">
                🔄
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffcc] dark:group-hover:text-indigo-400">
                Conversion History
              </h3>
              <p className="text-gray-600 dark:text-[#ffffff80]">
                Track your recent conversions with built-in history, saved right
                in your browser.
              </p>
            </div>
            <div className="group rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
              <div className="mb-5 inline-flex rounded-lg bg-indigo-100 p-3 text-2xl dark:bg-indigo-950/30">
                📋
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffcc] dark:group-hover:text-indigo-400">
                Value Copying
              </h3>
              <p className="text-gray-600 dark:text-[#ffffff80]">
                Copy values to share them with others instantly, making it easy
                to use conversion results anywhere you need them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
