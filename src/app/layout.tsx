import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CategoryDropdown } from "@/components/CategoryDropdown";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unit Converter",
  description: "A modern unit conversion tool",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme) {
                    isDarkMode = storedTheme === 'dark';
                  }
                  document.documentElement.classList.toggle('dark', isDarkMode);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className="flex min-h-screen flex-col bg-gray-50 dark:bg-[#000000]">
        <header className="relative z-[100] flex-none border-b border-gray-200 bg-white/75 backdrop-blur-sm dark:border-[#ffffff10] dark:bg-[#151515]/75">
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
            <ThemeToggle />
          </nav>
        </header>
        {children}
        <footer className="flex-none border-t border-gray-200 bg-white/75 py-6 backdrop-blur-sm dark:border-[#ffffff10] dark:bg-[#151515]/75">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-[#ffffff80]">
            <p>
              © {new Date().getFullYear()} Unit Converter. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
