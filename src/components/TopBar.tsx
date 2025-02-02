"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CategoryDropdown } from "@/components/CategoryDropdown";
import { categoryGroups } from "@/config/units";

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="z-[100] flex-none border-b border-gray-200 bg-white/75 backdrop-blur-sm dark:border-[#ffffff10] dark:bg-[#151515]/75">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Unit Converter
          </Link>
          <CategoryDropdown />
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-[#ffffff80] dark:hover:bg-[#ffffff10] dark:hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[200] h-screen overflow-hidden bg-white transition-all duration-300 dark:bg-[#000000] md:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-[#ffffff10] dark:bg-[#151515]">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Unit Converter
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-[#ffffff80] dark:hover:bg-[#ffffff10] dark:hover:text-white"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="h-[calc(100vh-4rem)] overflow-y-auto bg-white p-6 dark:bg-[#151515]">
          <div className="relative space-y-6">
            {categoryGroups.map((group) => (
              <div key={group.name} className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {group.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.categories.map((category) => (
                    <Link
                      key={category.value}
                      href={`/${category.value}`}
                      className="rounded-lg bg-gray-50 p-3 text-base text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:bg-[#ffffff08] dark:text-[#ffffff80] dark:hover:bg-[#ffffff10] dark:hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
