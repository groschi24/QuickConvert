"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    setTheme(storedTheme ?? "light");
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="rounded-lg bg-gray-100 p-2 dark:bg-[#ffffff10]"
        aria-hidden="true"
      >
        <div className="h-5 w-5" />
      </div>
    );
  }

  return (
    <button
      className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:bg-[#ffffff10] dark:text-[#ffffff80] dark:hover:bg-[#ffffff20] dark:hover:text-white"
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
