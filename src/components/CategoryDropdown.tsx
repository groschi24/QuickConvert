"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { categoryGroups } from "@/config/units";

export function CategoryDropdown() {
  return (
    <div className="hidden space-x-6 md:flex">
      {categoryGroups.map((group) => (
        <Menu
          as="div"
          key={group.name}
          className="relative inline-block text-left"
        >
          <MenuButton className="inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-[#ffffff80] dark:hover:text-white">
            {group.name}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-4 w-4"
              aria-hidden="true"
            />
          </MenuButton>

          <MenuItems className="absolute left-0 z-50 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-700 dark:bg-[#151515] dark:ring-[#ffffff10]">
            <div className="py-1">
              {group.categories.map((category) => (
                <MenuItem key={category.value}>
                  {({ active }) => (
                    <a
                      href={`/${category.value}`}
                      className={`block px-4 py-2 text-sm ${
                        active
                          ? "bg-gray-100 text-gray-900 dark:bg-[#ffffff10] dark:text-white"
                          : "text-gray-700 dark:text-[#ffffff80]"
                      }`}
                    >
                      {category.label}
                    </a>
                  )}
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      ))}
    </div>
  );
}
