import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Quick Convert",
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

        {process.env.NODE_ENV === "production" && (
          <script
            defer
            src="https://analytics.wirecore.net/script.js"
            data-website-id="a7f38de9-163b-4073-94dc-1d2e539e7482"
          ></script>
        )}
      </head>

      <body className="flex min-h-screen flex-col bg-gray-50 dark:bg-[#000000]">
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
