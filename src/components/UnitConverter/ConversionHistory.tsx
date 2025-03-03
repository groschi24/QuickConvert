"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ConversionHistoryEntry {
  id: string;
  from: string;
  to: string;
  value: string;
  result: string;
  category: string;
  timestamp: number;
}

interface ConversionHistoryProps {
  history: ConversionHistoryEntry[];
  onRemoveEntry: (id: string) => void;
  onClearHistory: () => void;
}

export function ConversionHistory({
  history,
  onRemoveEntry,
  onClearHistory,
}: ConversionHistoryProps) {
  const router = useRouter();

  return (
    <div className="mt-8">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-[#1A1A1A]">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-[#ffffffee]">
            Conversion History
          </h2>
          {history.length > 0 && (
            <button
              onClick={onClearHistory}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-red-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-500"
            >
              Clear history
            </button>
          )}
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {history.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-gray-600 dark:text-[#ffffffaa]">
                No previous conversions available
              </p>
              <p className="mt-2 text-sm text-gray-400 dark:text-[#ffffff60]">
                Your recent conversions will appear here
              </p>
            </div>
          ) : (
            history.map((entry) => (
              <div
                key={entry.id}
                className="group relative mb-4 cursor-pointer rounded-xl border border-gray-200 bg-gray-50/80 p-4 pr-10 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-lg dark:border-[#ffffff10] dark:bg-[#1a1a1a]/80 dark:hover:border-[#ffffff20] dark:hover:bg-[#151515]"
                onClick={() => {
                  const params = new URLSearchParams();
                  params.set("value", entry.value);
                  router.push(
                    `/${entry.category}/${entry.from}/${entry.to}?${params.toString()}`,
                    { scroll: false },
                  );
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveEntry(entry.id);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 opacity-0 transition-all duration-200 hover:bg-gray-100 hover:text-red-500 group-hover:opacity-100 dark:text-[#ffffff40] dark:hover:bg-[#ffffff10] dark:hover:text-red-500"
                >
                  ×
                </button>
                <p className="font-medium text-gray-800 dark:text-[#ffffffcc]">
                  {entry.result}
                </p>
                <p className="mt-2 text-xs text-gray-500 dark:text-[#ffffff60]">
                  {new Date(entry.timestamp).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
