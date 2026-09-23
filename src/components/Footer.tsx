import image from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-8 pt-16 md:px-12 lg:px-[6%]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center">
              <img
                src={image}
                alt="Dev Stack"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="mt-5 max-w-[520px] text-xs leading-5 text-gray-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="#"
                className="text-xs font-medium text-gray-500 transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-xs font-medium text-gray-500 transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-xs font-medium text-gray-500 transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="#"
                className="block text-xs text-gray-400 transition hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#"
                className="block text-xs text-gray-400 transition hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block text-xs text-gray-400 transition hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="#"
                className="block text-xs text-gray-400 transition hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#"
                className="block text-xs text-gray-400 transition hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-xs text-gray-400 transition hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="#"
                className="block text-xs text-gray-400 transition hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-xs text-gray-400 transition hover:text-pink-500"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 pb-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-7">
            <a
              href="#"
              className="text-[10px] text-gray-400 transition hover:text-gray-900"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-gray-400 transition hover:text-gray-900"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}