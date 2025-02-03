"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white pb-32 pt-24 dark:from-[#151515] dark:to-[#000000]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div className="container relative mx-auto px-4">
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400">
            Instant Unit Conversion
          </span>
          <h1 className="mb-6 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Convert Units with
            <br />
            Precision & Speed
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-[#ffffffcc]">
            Your go-to platform for fast, reliable unit conversions across
            multiple categories. Simple, accurate, and completely free to use.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/length"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Start Converting
            </Link>
            <Link
              href="/#converters"
              className="rounded-lg bg-gray-50 px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 dark:bg-[#151515] dark:text-white dark:ring-[#ffffff20] dark:hover:bg-[#202020]"
            >
              All Converters
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
