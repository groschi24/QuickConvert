import React from "react";

interface ConversionResultProps {
  result: string;
}

export function ConversionResult({ result }: ConversionResultProps) {
  return (
    <div className="mt-8 transform rounded-lg border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#1a1a1a] dark:hover:border-[#ffffff20]">
      <p className="text-center text-2xl font-semibold tracking-tight text-gray-800 dark:text-[#ffffffcc]">
        {result}
      </p>
    </div>
  );
}
