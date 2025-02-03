import Link from "next/link";
import { categories } from "@/config/units";
import Header from "@/components/Header";

export default function Home() {
  const popularConversions = [
    {
      from: "km",
      to: "miles",
      category: "length",
      label: "Kilometers to Miles",
      description: "Convert distances between metric and imperial units",
      icon: "🛣️",
    },
    {
      from: "kg",
      to: "lbs",
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
      from: "mph",
      to: "kph",
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
          <div className="relative mx-auto w-full max-w-[95vw] overflow-hidden">
            <div
              className="scrollbar-none hover:animation-pause pointer-events-none flex gap-6 px-6 pb-8 pt-4 hover:pointer-events-auto"
              style={{
                width: `${280 * popularConversions.length * 2 + 6 * (popularConversions.length * 2 - 1)}px`,
                animation: "scroll 40s linear infinite",
                willChange: "transform",
              }}
            >
              {[...popularConversions, ...popularConversions].map(
                (conversion, index) => (
                  <Link
                    key={`${conversion.from}-${conversion.to}-${index}`}
                    href={`/${conversion.category}/${conversion.from}/${conversion.to}`}
                    className="group relative flex h-[220px] w-[280px] shrink-0 flex-col items-center justify-between overflow-visible rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-100 hover:shadow-md dark:border-[#ffffff10] dark:bg-[#151515] dark:hover:border-[#ffffff20]"
                  >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-950/20"></div>
                    <span className="mb-4 text-5xl">{conversion.icon}</span>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-[#ffffffee]">
                        {conversion.label}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-[#ffffffaa]">
                        {conversion.description}
                      </p>
                    </div>
                  </Link>
                ),
              )}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-[#000000] dark:via-[#000000]/80"></div>
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="relative overflow-hidden bg-gray-50/50 py-24 dark:bg-[#151515]">
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
            {categories.map((category) => (
              <Link
                key={category.value}
                href={`/${category.value}`}
                className="group relative transform overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:shadow-lg dark:border-[#ffffff10] dark:bg-[#151515] dark:hover:border-[#ffffff20]"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-950/30"></div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-[#ffffffcc] dark:group-hover:text-indigo-400">
                  {category.label}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-[#ffffff80]">
                  Convert {category.label.toLowerCase()} units instantly
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
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real-time Conversion",
                description:
                  "See results instantly as you type with our lightning-fast converter",
              },
              {
                title: "Multiple Categories",
                description:
                  "Convert units across various categories from length to digital storage",
              },
              {
                title: "Dark Mode Support",
                description: "Easy on your eyes with automatic theme detection",
              },
              {
                title: "Conversion History",
                description:
                  "Track your recent conversions with local storage support",
              },
              {
                title: "Formula Display",
                description:
                  "Learn how conversions work with displayed formulas",
              },
              {
                title: "Share Results",
                description: "Easily share conversion results via URL",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-[#ffffff10] dark:bg-[#151515]"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-[#ffffffee]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-[#ffffffaa]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
