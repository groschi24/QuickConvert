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
    <div className="mt-8 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-[#1A1A1A]">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-wide text-gray-600 dark:text-[#ffffffaa]">
          Result
        </h3>
        <p className="text-center font-mono text-3xl font-semibold text-gray-900 dark:text-[#ffffffee]">
          {result}
        </p>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 ${copied ? "bg-green-500 text-white shadow-green-500/25" : "bg-indigo-50 text-indigo-600 shadow-indigo-500/10 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:text-indigo-400 dark:shadow-indigo-500/5 dark:hover:bg-indigo-950/50"}`}
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
  );
}
