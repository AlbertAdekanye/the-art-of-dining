import { ArrowLeft, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0b0d0b] px-6 py-32 text-center text-white">
      <div>
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d6ff3f] text-[#0b0d0b]">
          <Utensils size={34} />
        </span>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
          Page not found
        </p>

        <h1 className="mt-5 text-8xl font-black leading-none tracking-[-0.08em] text-white/15 md:text-[11rem]">
          404
        </h1>

        <h2 className="-mt-3 text-3xl font-black uppercase tracking-[-0.04em] md:text-5xl">
          This table is empty.
        </h2>

        <p className="mx-auto mt-5 max-w-md leading-7 text-white/50">
          The page you are looking for may have been moved, removed or was never
          on our menu.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d6ff3f] px-7 py-4 text-sm font-bold text-[#0b0d0b] transition hover:bg-white"
        >
          <ArrowLeft size={18} />
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
