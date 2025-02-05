"use client";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ApiResponse = {
  error?: string;
  success?: boolean;
};

export default function AboutPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok) {
        throw new Error(result.error ?? "Failed to send message");
      }

      alert("Message sent successfully!");
    } catch (error: unknown) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="font-inter flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#151515] dark:via-[#000000] dark:to-[#151515]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="container relative mx-auto flex-grow px-4 py-16">
        <h1 className="mb-16 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-center text-6xl font-extrabold tracking-tight text-transparent lg:text-7xl">
          About Us
        </h1>
        <div className="mx-auto max-w-3xl space-y-8 text-gray-600 dark:text-[#ffffffaa]">
          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Our Mission
            </h2>
            <p className="mb-6">
              At QuickConvert, we believe that unit conversion should be simple,
              fast, and accessible to everyone. Our mission is to provide a
              reliable and user-friendly platform that makes converting between
              different units of measurement effortless.
            </p>
            <p>
              Whether you&apos;re a student, professional, or just someone who
              needs to convert units occasionally, our tool is designed to make
              your life easier with instant, accurate conversions across a wide
              range of categories.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Our Story
            </h2>
            <p className="mb-6">
              QuickConvert was born out of a simple need: to create a modern,
              intuitive unit converter that works seamlessly across all devices.
              What started as a small project has grown into a comprehensive
              conversion tool used by thousands of people daily.
            </p>
            <p>
              Our team of dedicated developers and designers continuously work
              to improve the platform, adding new features and ensuring the
              highest level of accuracy in our conversions.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Our Values
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-[#ffffffdd]">
                  Accuracy
                </h3>
                <p>
                  We prioritize precision in all our conversions, ensuring you
                  get reliable results every time.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-[#ffffffdd]">
                  Simplicity
                </h3>
                <p>
                  Our interface is designed to be intuitive and easy to use,
                  without sacrificing functionality.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-[#ffffffdd]">
                  Accessibility
                </h3>
                <p>
                  We believe in making our tool accessible to everyone,
                  anywhere, on any device.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white/90 p-8 shadow-lg backdrop-blur-lg transition-all duration-300 hover:border-gray-300 dark:border-[#ffffff10] dark:bg-[#151515]/90 dark:hover:border-[#ffffff20]">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-[#ffffffee]">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-[#ffffffcc]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-xl border border-gray-200 bg-white/80 p-3 text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515]/80 dark:text-[#ffffffcc] dark:placeholder:text-[#ffffff40] dark:hover:border-[#ffffff25]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-[#ffffffcc]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-xl border border-gray-200 bg-white/80 p-3 text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515]/80 dark:text-[#ffffffcc] dark:placeholder:text-[#ffffff40] dark:hover:border-[#ffffff25]"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-[#ffffffcc]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full rounded-xl border border-gray-200 bg-white/80 p-3 text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515]/80 dark:text-[#ffffffcc] dark:placeholder:text-[#ffffff40] dark:hover:border-[#ffffff25]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-[#ffffffcc]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-xl border border-gray-200 bg-white/80 p-3 text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-[#ffffff15] dark:bg-[#151515]/80 dark:text-[#ffffffcc] dark:placeholder:text-[#ffffff40] dark:hover:border-[#ffffff25]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 px-4 py-3 text-center font-semibold text-white shadow-lg transition-all duration-200 hover:from-indigo-500 hover:via-indigo-400 hover:to-indigo-300 focus:ring-2 focus:ring-indigo-500/20 active:opacity-90"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
