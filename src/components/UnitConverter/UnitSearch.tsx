"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { categoryConfigs } from "@/config/categoryConfigs";

export function UnitSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchTerm("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];

    const results: Array<{
      fromUnit: { value: string; label: string };
      toUnit: { value: string; label: string };
      category: string;
      categoryTitle: string;
    }> = [];

    const searchLower = searchTerm.toLowerCase();

    Object.entries(categoryConfigs).forEach(([category, config]) => {
      config.units.forEach((fromUnit) => {
        if (
          fromUnit.label.toLowerCase().includes(searchLower) ||
          fromUnit.value.toLowerCase().includes(searchLower)
        ) {
          config.units.forEach((toUnit) => {
            if (fromUnit.value !== toUnit.value) {
              results.push({
                fromUnit,
                toUnit,
                category,
                categoryTitle: config.title,
              });
            }
          });
        }
      });
    });

    return results.slice(0, 10);
  }, [searchTerm]);

  return (
    <div className="relative" ref={searchContainerRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search units..."
        className="w-full rounded-lg border border-gray-200 bg-white/50 px-4 py-2 text-sm text-gray-800 outline-none transition-all duration-200 hover:border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#ffffff08] dark:text-[#ffffffdd] dark:hover:border-[#ffffff25] dark:focus:border-indigo-500"
      />
      {searchTerm.length >= 2 && (
        <div
          ref={(el) => {
            if (el) {
              el.addEventListener(
                "wheel",
                (e) => {
                  if (el.contains(e.target as Node)) {
                    el.scrollTop += e.deltaY;
                    e.preventDefault();
                  }
                },
                { passive: false },
              );
            }
          }}
          className="absolute left-0 right-0 z-50 mt-2 max-h-[400px] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg dark:border-[#ffffff15] dark:bg-[#151515]"
          onTouchMove={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="space-y-1 p-2">
            {searchResults.map((result, index) => (
              <button
                key={`${result.category}-${result.fromUnit.value}-${result.toUnit.value}-${index}`}
                onClick={() => {
                  const params = new URLSearchParams();
                  params.set("value", "1");
                  router.push(
                    `/${result.category}/${result.fromUnit.value}/${result.toUnit.value}?${params.toString()}`,
                    { scroll: false },
                  );
                  setSearchTerm("");
                }}
                className="w-full rounded-md p-2 text-left transition-colors hover:bg-gray-100 dark:hover:bg-[#ffffff10]"
              >
                <p className="text-sm font-medium text-gray-800 dark:text-[#ffffffcc]">
                  {result.fromUnit.label} to {result.toUnit.label}
                </p>
                <p className="text-xs text-gray-500 dark:text-[#ffffff60]">
                  {result.categoryTitle}
                </p>
              </button>
            ))}
            {searchResults.length === 0 && (
              <p className="py-2 text-center text-sm text-gray-500 dark:text-[#ffffff80]">
                No matching units found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
