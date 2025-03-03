"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  type GroupedUnitConfigs,
  loadAllUnitConfigs,
} from "@/utils/loadUnitConfigs";
import { UnitSearch } from "./UnitConverter/UnitSearch";

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [configs, setConfigs] = useState<GroupedUnitConfigs>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConfigs = async () => {
      setIsLoading(true);
      try {
        const allConfigs = await loadAllUnitConfigs();
        setConfigs(allConfigs);
      } catch (error) {
        console.error("Error loading configs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchConfigs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen && window.innerWidth >= 768) {
        setIsOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("resize", handleScroll);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleScroll);
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
            Quick Convert
          </Link>
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-[#ffffff80] dark:hover:text-white"
            >
              Blog
            </Link>
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-[#ffffff80] dark:hover:text-white">
                Converters
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-4 w-4"
                  aria-hidden="true"
                />
              </MenuButton>

              <MenuItems className="absolute left-0 z-50 mt-2 max-h-[calc(100vh-6rem)] w-[500px] origin-top-left overflow-y-auto rounded-xl bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#151515] dark:ring-[#ffffff10]">
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-indigo-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6">
                    {Object.entries(configs)
                      .sort(([keyA], [keyB]) => {
                        const groupOrder: Record<string, number> = {
                          common: 0,
                          engineering: 1,
                          heat_energy: 2,
                          fluid_volume: 3,
                          light: 4,
                          electromagnetism: 5,
                          radiation: 6,
                          misc: 7,
                        };
                        return (
                          (groupOrder[keyA] ?? 999) - (groupOrder[keyB] ?? 999)
                        );
                      })
                      .map(([groupKey, group]) => (
                        <div key={groupKey} className="space-y-3">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-[#ffffffee]">
                            {group.label || groupKey}
                          </h3>
                          <div className="grid grid-cols-2 gap-2">
                            {Object.entries(group.categories || {})
                              .sort(([a], [b]) => a.localeCompare(b))
                              .map(([categoryKey, category]) => (
                                <Link
                                  key={`${groupKey}-${categoryKey}`}
                                  href={`/${categoryKey}`}
                                  className="block rounded-lg p-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-[#ffffff80] dark:hover:bg-[#ffffff10] dark:hover:text-white"
                                >
                                  {category.label}
                                </Link>
                              ))}
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </MenuItems>
            </Menu>
            <div className="w-[300px]">
              <UnitSearch />
            </div>
          </div>
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
            Quick Convert
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
            <div className="mb-6">
              <UnitSearch />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                All Converters
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(configs)
                  .sort(([keyA], [keyB]) => {
                    const groupOrder: Record<string, number> = {
                      common: 0,
                      engineering: 1,
                      heat_energy: 2,
                      fluid_volume: 3,
                      light: 4,
                      electromagnetism: 5,
                      radiation: 6,
                      misc: 7,
                    };
                    return (
                      (groupOrder[keyA] ?? 999) - (groupOrder[keyB] ?? 999)
                    );
                  })
                  .flatMap(([groupKey, group]) =>
                    Object.entries(group.categories || {})
                      .sort(([a], [b]) => a.localeCompare(b))
                      .map(([categoryKey, category]) => (
                        <Link
                          key={`${groupKey}-${categoryKey}`}
                          href={`/${categoryKey}`}
                          className="rounded-lg bg-gray-50 p-3 text-base text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:bg-[#ffffff08] dark:text-[#ffffff80] dark:hover:bg-[#ffffff10] dark:hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {category.label}
                        </Link>
                      )),
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
