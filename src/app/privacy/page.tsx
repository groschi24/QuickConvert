export default function PrivacyPage() {
  return (
    <div className="font-inter flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#151515] dark:via-[#000000] dark:to-[#151515]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="container relative mx-auto flex-grow px-4 py-16">
        <h1 className="mb-16 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-center text-6xl font-extrabold tracking-tight text-transparent lg:text-7xl">
          Privacy Policy
        </h1>
        <div className="mx-auto max-w-3xl space-y-8 text-gray-600 dark:text-[#ffffffaa]">
          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Hosting and Analytics
            </h2>
            <div className="space-y-4">
              <p>
                QuickConvert is hosted on Vercel&apos;s cloud platform. Vercel
                may collect and process certain technical information about your
                visit as part of their hosting services. Additionally, we use
                Vercel Analytics to gather anonymous usage statistics that help
                us improve our service.
              </p>
              <p>The analytics data collected includes:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Page views and navigation patterns</li>
                <li>Performance metrics</li>
                <li>Geographic region (country level only)</li>
                <li>Device and browser information</li>
              </ul>
              <p>
                This data is collected anonymously and used solely for improving
                our website&apos;s performance and user experience. No
                personally identifiable information is collected through Vercel
                Analytics.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <p>
                When you use QuickConvert, we collect certain information to
                improve your experience and our services:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Usage Data: Information about how you interact with our
                  website
                </li>
                <li>
                  Device Information: Browser type, device type, and operating
                  system
                </li>
                <li>
                  Conversion History: Your recent unit conversions (stored
                  locally on your device)
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              How We Use Your Information
            </h2>
            <div className="space-y-4">
              <p>We use the collected information for:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Improving our website functionality and user experience</li>
                <li>Analyzing usage patterns to enhance our services</li>
                <li>Maintaining and optimizing our website performance</li>
                <li>
                  Providing personalized conversion history (stored locally)
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Data Storage and Security
            </h2>
            <div className="space-y-4">
              <p>
                Your conversion history is stored locally on your device using
                browser local storage. We do not store this information on our
                servers. This data remains on your device until you choose to
                clear it.
              </p>
              <p>
                We implement appropriate security measures to protect any
                information we collect, maintaining the safety, security, and
                integrity of your personal information.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Cookies and Tracking
            </h2>
            <p>
              We use essential cookies to ensure the basic functionality of our
              website. These cookies do not collect any personal information and
              are used solely for technical purposes such as maintaining your
              theme preference.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Your Rights
            </h2>
            <div className="space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Clear your local conversion history at any time</li>
                <li>Opt-out of cookies through your browser settings</li>
                <li>Request information about the data we collect</li>
                <li>Contact us with any privacy-related concerns</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
