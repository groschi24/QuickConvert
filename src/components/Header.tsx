"use client";

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-16 dark:from-[#151515] dark:to-[#000000]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="mb-6 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Quick Convert
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-[#ffffffcc]">
            Fast, reliable unit conversions for everything from length and
            weight to temperature and currency. Simple, accurate, and free to
            use.
          </p>
        </div>
      </div>
    </div>
  );
}
