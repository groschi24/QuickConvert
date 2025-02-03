import React from "react";

interface ConversionResultProps {
  result: string;
}

export function ConversionResult({ result }: ConversionResultProps) {
  return (
    <div className="mt-8 transform overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-indigo-600/[0.07] via-indigo-500/[0.07] to-indigo-400/[0.07] p-10 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:from-indigo-600/[0.12] hover:via-indigo-500/[0.12] hover:to-indigo-400/[0.12] dark:from-indigo-600/[0.05] dark:via-indigo-500/[0.05] dark:to-indigo-400/[0.05] dark:hover:from-indigo-600/[0.08] dark:hover:via-indigo-500/[0.08] dark:hover:to-indigo-400/[0.08]">
      <div className="relative">
        <div className="absolute -left-6 -top-6 h-12 w-12 rounded-full bg-indigo-500/10 blur-2xl dark:bg-indigo-500/[0.07]" />
        <div className="absolute -bottom-6 -right-6 h-12 w-12 rounded-full bg-indigo-400/10 blur-2xl dark:bg-indigo-400/[0.07]" />
        <p className="relative text-center text-4xl font-bold tracking-tight text-gray-800 dark:text-[#ffffffdd]">
          {result}
        </p>
      </div>
    </div>
  );
}
