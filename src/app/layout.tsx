import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/next";
import { TopBar } from "@/components/TopBar";
import Footer from "@/components/Footer";

export { metadata } from "./metadata";

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
            src={process.env.NEXT_PUBLIC_ANALYTICS_URL}
            data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID}
          ></script>
        )}
      </head>

      <body className="flex min-h-screen flex-col bg-gray-50 dark:bg-[#000000]">
        <TopBar />
        {children}
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
