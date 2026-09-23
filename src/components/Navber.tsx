import { useState } from "react";

import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Dev Stack"
            className="h-33 w-33 object-contain"
          />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#home"
            className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-[#EC4899]"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-[#EC4899]"
          >
            Technologies
          </a>

          <a
            href="#services"
            className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-[#EC4899]"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-[#EC4899]"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-[#EC4899]"
          >
            Contact
          </a>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#signin"
            className="text-[14px] font-medium text-[#6B7280] transition-colors hover:text-[#EC4899]"
          >
            Sign In
          </a>

          <a
            href="#signup"
            className="rounded-full bg-[#EC0A8C] px-6 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#D9087F]"
          >
            Sign Up
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-[#111827]" />
            <span className="h-0.5 w-5 bg-[#111827]" />
            <span className="h-0.5 w-5 bg-[#111827]" />
          </span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-[#6B7280]"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-[#6B7280]"
            >
              Technologies
            </a>

            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-[#6B7280]"
            >
              Services
            </a>

            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-[#6B7280]"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-[#6B7280]"
            >
              Contact
            </a>

            <a
              href="#signin"
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 text-sm font-medium text-[#6B7280]"
            >
              Sign In
            </a>

            <a
              href="#signup"
              onClick={() => setIsMenuOpen(false)}
              className="w-fit rounded-full bg-[#EC0A8C] px-6 py-2.5 text-sm font-semibold text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;