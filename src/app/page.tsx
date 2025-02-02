import Link from "next/link";
import { categories } from "@/config/units";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 py-12 dark:bg-[#000000]">
      <div className="container mx-auto flex-1 px-4">
        <div className="relative mb-12 flex flex-col items-center">
          <h1 className="mb-6 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent">
            Unit Converter
          </h1>
          <div className="group relative inline-block">
            <button className="transform rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-600 px-6 py-2 text-lg font-medium text-white transition-all duration-200 hover:from-indigo-500 hover:to-indigo-700">
              Select Category
            </button>
            <div className="invisible absolute left-1/2 z-10 mt-2 w-56 -translate-x-1/2 transform rounded-xl border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:border-[#ffffff10] dark:bg-[#151515]">
              <div className="grid max-h-[70vh] grid-cols-1 gap-1 overflow-y-auto">
                {categories.map((category) => (
                  <Link
                    key={category.value}
                    href={`/${category.value}`}
                    className="block rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-gray-900 dark:text-[#ffffffcc] dark:hover:bg-[#ffffff10] dark:hover:text-[#ffffffee]"
                  >
                    <span className="block text-sm font-medium">
                      {category.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.value}
                href={`/${category.value}`}
                className="transform rounded-xl border border-gray-200 bg-white p-6 shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:shadow-lg dark:border-[#ffffff10] dark:bg-[#151515] dark:hover:border-[#ffffff20]"
              >
                <h2 className="text-xl font-semibold text-gray-700 hover:text-gray-900 dark:text-[#ffffffcc] dark:hover:text-[#ffffffee]">
                  {category.label}
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-[#ffffff80] dark:hover:text-[#ffffffaa]">
                  Convert {category.label.toLowerCase()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
