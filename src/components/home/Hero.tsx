import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0d0b]">
      {/* Background image */}
      <img
        src="https://images.pexels.com/photos/17933016/pexels-photo-17933016/free-photo-of-photo-of-a-burger-with-chips-against-dark-blurred-background.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Signature burger served with crispy sides"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Decorative text */}
      <p className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 text-xs font-semibold uppercase tracking-[0.4em] text-white/50 lg:block">
        Lagos · Nigeria
      </p>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-16 pt-36 lg:items-center lg:px-10 lg:pb-0">
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
            <span className="h-px w-10 bg-[#d6ff3f]" />
            More than just a meal
          </p>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-8xl lg:text-[7rem]">
            Every plate
            <span className="block text-[#d6ff3f]">tells a story.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 md:text-lg">
            Bold flavours, fresh ingredients and unforgettable moments,
            thoughtfully prepared for people who believe dining should feel
            extraordinary.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 rounded-full bg-[#d6ff3f] px-7 py-4 text-sm font-bold text-[#0b0d0b] transition hover:bg-white"
            >
              Explore Our Menu
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/reservations"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-white/50 md:flex">
        Scroll to discover
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
          <ArrowDown size={16} />
        </span>
      </div>
    </section>
  );
}

export default Hero;
