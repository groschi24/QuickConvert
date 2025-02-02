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
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-xl dark:border-[#ffffff10] dark:bg-[#151515]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-gray-800 dark:text-[#ffffffcc]">
            History
          </h2>
          {history.length > 0 && (
            <button
              onClick={onClearHistory}
              className="text-sm font-medium text-red-400 transition-colors hover:text-red-500"
            >
              Clear history
            </button>
          )}
        </div>
        <div className="max-h-[400px] space-y-3 overflow-y-auto">
          {history.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-[#ffffff80]">
              No conversion history
            </p>
          ) : (
            history.map((entry) => (
              <div
                key={entry.id}
                className="group relative cursor-pointer rounded-lg border border-gray-200 bg-gray-50 p-4 pr-8 transition-all duration-200 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#1a1a1a] dark:hover:border-[#ffffff20]"
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
                  className="absolute right-2 top-2 text-gray-400 opacity-0 transition-opacity hover:text-red-500 group-hover:opacity-100 dark:text-[#ffffff40] dark:hover:text-red-500"
                >
                  ×
                </button>
                <p className="font-medium text-gray-800 dark:text-[#ffffffcc]">
                  {entry.result}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-[#ffffff60]">
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
