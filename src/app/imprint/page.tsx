export default function ImprintPage() {
  return (
    <div className="font-inter flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#151515] dark:via-[#000000] dark:to-[#151515]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="container relative mx-auto flex-grow px-4 py-16">
        <h1 className="mb-16 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-center text-6xl font-extrabold tracking-tight text-transparent lg:text-7xl">
          Imprint
        </h1>
        <div className="mx-auto max-w-3xl space-y-8 text-gray-600 dark:text-[#ffffffaa]">
          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Legal Information
            </h2>
            <div className="space-y-4">
              <p>
                <strong>Name:</strong> Dennis Grosch
              </p>
              <p>
                <strong>Address:</strong>
                <br />
                14612 Falkensee
                <br />
                Germany
              </p>
              <p>
                <strong>Contact:</strong>
                <br />
                Email: info@quickconvert.app
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Disclaimer
            </h2>
            <div className="space-y-4">
              <p>
                The information provided on this website is for general
                informational purposes only. While we strive to keep the
                information up to date and accurate, we make no representations
                or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, suitability, or
                availability of the website or the information, products,
                services, or related graphics contained on the website.
              </p>
              <p>
                Any reliance you place on such information is strictly at your
                own risk. In no event will we be liable for any loss or damage
                including without limitation, indirect or consequential loss or
                damage, or any loss or damage whatsoever arising from loss of
                data or profits arising out of, or in connection with, the use
                of this website.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
