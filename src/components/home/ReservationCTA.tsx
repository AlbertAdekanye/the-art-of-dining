import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

function ReservationCTA() {
  return (
    <section className="bg-[#0b0d0b] px-6 py-24 lg:px-10 lg:py-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85"
          alt="Beautifully arranged restaurant table"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative z-10 flex min-h-[580px] items-center px-7 py-16 md:px-14 lg:px-20">
          <div className="max-w-3xl">
            <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#d6ff3f] text-[#0b0d0b]">
              <CalendarDays size={24} />
            </span>

            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
              <span className="h-px w-10 bg-[#d6ff3f]" />
              Your table is waiting
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
              Make tonight
              <span className="block text-white/35">unforgettable.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              Reserve your table and let us take care of the food, atmosphere
              and moments you will remember.
            </p>

            <Link
              to="/reservations"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d6ff3f] px-7 py-4 text-sm font-bold text-[#0b0d0b] transition hover:bg-white"
            >
              Reserve Your Table
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationCTA;
