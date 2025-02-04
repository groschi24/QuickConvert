export default function TermsPage() {
  return (
    <div className="font-inter flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#151515] dark:via-[#000000] dark:to-[#151515]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="container relative mx-auto flex-grow px-4 py-16">
        <h1 className="mb-16 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-center text-6xl font-extrabold tracking-tight text-transparent lg:text-7xl">
          Terms of Use
        </h1>
        <div className="mx-auto max-w-3xl space-y-8 text-gray-600 dark:text-[#ffffffaa]">
          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing and using QuickConvert, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Use License
            </h2>
            <div className="space-y-4">
              <p>
                Permission is granted to temporarily access QuickConvert for
                personal, non-commercial transitory viewing only.
              </p>
              <p>
                This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose;</li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on QuickConvert;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials;
                </li>
                <li>
                  transfer the materials to another person or 'mirror' the
                  materials on any other server.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Disclaimer
            </h2>
            <div className="space-y-4">
              <p>
                The materials on QuickConvert are provided on an 'as is' basis.
                QuickConvert makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
              <p>
                Further, QuickConvert does not warrant or make any
                representations concerning the accuracy, likely results, or
                reliability of the use of the materials on its website or
                otherwise relating to such materials or on any sites linked to
                this site.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Limitations
            </h2>
            <p>
              In no event shall QuickConvert or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on QuickConvert, even if
              QuickConvert or a QuickConvert authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Revisions and Errata
            </h2>
            <p>
              The materials appearing on QuickConvert could include technical,
              typographical, or photographic errors. QuickConvert does not
              warrant that any of the materials on its website are accurate,
              complete or current. QuickConvert may make changes to the
              materials contained on its website at any time without notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
