"use client";

import React, { useState } from "react";

interface ConversionResultProps {
  result: string;
}

export function ConversionResult({ result }: ConversionResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="mt-8 transform overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-indigo-600/[0.07] via-indigo-500/[0.07] to-indigo-400/[0.07] p-10 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:from-indigo-600/[0.12] hover:via-indigo-500/[0.12] hover:to-indigo-400/[0.12] dark:from-indigo-600/[0.05] dark:via-indigo-500/[0.05] dark:to-indigo-400/[0.05] dark:hover:from-indigo-600/[0.08] dark:hover:via-indigo-500/[0.08] dark:hover:to-indigo-400/[0.08]">
      <div className="relative">
        <div className="absolute -left-6 -top-6 h-12 w-12 rounded-full bg-indigo-500/10 blur-2xl dark:bg-indigo-500/[0.07]" />
        <div className="absolute -bottom-6 -right-6 h-12 w-12 rounded-full bg-indigo-400/10 blur-2xl dark:bg-indigo-400/[0.07]" />
        <div className="flex flex-col items-center gap-4">
          <p className="relative text-center text-4xl font-bold tracking-tight text-gray-800 dark:text-[#ffffffdd]">
            {result}
          </p>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${copied ? "bg-green-500 text-white" : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:text-indigo-400 dark:hover:bg-indigo-950/50"}`}
          >
            {copied ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                Copy Result
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
