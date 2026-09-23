import banner from "../assets/banner-stack.png"

const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex min-h-[520px] max-w-[1280px] items-center px-6 py-16 lg:px-8">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">
          <div className="max-w-[620px]">
            <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-1.5px] text-[#111827] md:text-[52px]">
              Build Your Ideal
              <span className="block bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#A855F7] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 max-w-[560px] text-[16px] leading-7 text-[#6B7280]">
              The modern tools and technologies you need to build powerful,
              scalable, and beautiful web applications.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="#technologies"
                className="rounded-lg bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#A855F7] px-6 py-3 text-[14px] font-semibold text-white shadow-md transition hover:opacity-90"
              >
                Explore Stack
              </a>
              <a
                href="#about"
                className="text-[14px] font-medium text-[#6B7280] transition hover:text-[#EC4899]"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={banner}
              alt="Development Stack"
              className="w-full max-w-[520px] object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;