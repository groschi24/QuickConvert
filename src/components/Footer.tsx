import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-12 dark:from-[#000000] dark:to-[#151515]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-[#ffffff80]">
                Legal
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-indigo-600 dark:text-[#ffffffaa] dark:hover:text-indigo-400"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-indigo-600 dark:text-[#ffffffaa] dark:hover:text-indigo-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/imprint"
                    className="text-gray-600 hover:text-indigo-600 dark:text-[#ffffffaa] dark:hover:text-indigo-400"
                  >
                    Imprint
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-[#ffffff80]">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-indigo-600 dark:text-[#ffffffaa] dark:hover:text-indigo-400"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-[#ffffff10]">
            <p className="text-center text-sm text-gray-400 dark:text-[#ffffff60]">
              © {new Date().getFullYear()} QuickConvert. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
