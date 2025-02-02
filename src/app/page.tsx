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
    },
    { from: "kg", to: "lbs", category: "weight", label: "Kilograms to Pounds" },
    {
      from: "celsius",
      to: "fahrenheit",
      category: "temperature",
      label: "Celsius to Fahrenheit",
    },
    { from: "usd", to: "eur", category: "currency", label: "USD to EUR" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-gray-50 dark:bg-[#000000]">
      <Header />

      {/* Popular Conversions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-[#ffffffee]">
            Popular Conversions
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularConversions.map((conversion) => (
              <Link
                key={`${conversion.from}-${conversion.to}`}
                href={`/${conversion.category}/${conversion.from}/${conversion.to}`}
                className="transform rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md dark:border-[#ffffff10] dark:bg-[#151515]"
              >
                <span className="block text-sm font-medium text-gray-900 dark:text-[#ffffffee]">
                  {conversion.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="bg-gray-50 py-12 dark:bg-[#151515]">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-[#ffffffee]">
            All Categories
          </h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.value}
                href={`/${category.value}`}
                className="transform rounded-xl border border-gray-200 bg-white p-6 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:shadow-lg dark:border-[#ffffff10] dark:bg-[#151515] dark:hover:border-[#ffffff20]"
              >
                <h3 className="text-xl font-semibold text-gray-700 hover:text-gray-900 dark:text-[#ffffffcc] dark:hover:text-[#ffffffee]">
                  {category.label}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-[#ffffff80] dark:hover:text-[#ffffffaa]">
                  Convert {category.label.toLowerCase()} units instantly
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-[#ffffffee]">
            Why Choose Our Converter?
          </h2>
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
