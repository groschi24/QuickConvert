"use client";

import Link from "next/link";
import type { PopularConversion } from "@/types/units";

interface ScrollingContainerProps {
  conversions: PopularConversion[];
}

export default function ScrollingContainer({
  conversions,
}: ScrollingContainerProps) {
  return (
    <div className="relative mx-auto w-full max-w-[95vw] overflow-hidden">
      <div
        className="scrollbar-none flex gap-6 px-6 pb-8 pt-4"
        style={{
          width: `${280 * conversions.length * 2 + 6 * (conversions.length * 2 - 1)}px`,
          animation: "scroll 60s linear infinite",
          willChange: "transform",
          animationPlayState: "running",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {[...conversions, ...conversions].map((conversion, index) => (
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
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-[#000000] dark:via-[#000000]/80"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-[#000000] dark:via-[#000000]/80"></div>
    </div>
  );
}
