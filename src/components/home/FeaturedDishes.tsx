import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { menuItems } from "../../data/menu";

const currencyFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

function FeaturedDishes() {
  const featuredDishes = menuItems.filter((item) => item.featured);

  return (
    <section className="bg-[#0b0d0b] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
              <span className="h-px w-10 bg-[#d6ff3f]" />
              Crafted with intention
            </p>

            <h2 className="max-w-2xl text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white md:text-6xl">
              Our signature
              <span className="block text-white/30">creations.</span>
            </h2>
          </div>

          <Link
            to="/menu"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-white transition hover:text-[#d6ff3f]"
          >
            View Full Menu
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Dishes */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((dish, index) => (
            <article
              key={dish.id}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#151815]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs font-bold text-white backdrop-blur-md">
                  0{index + 1}
                </span>

                <span className="absolute right-5 top-5 rounded-full bg-[#d6ff3f] px-4 py-2 text-xs font-bold text-[#0b0d0b]">
                  {dish.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black uppercase leading-tight text-white">
                      {dish.name}
                    </h3>

                    <span className="whitespace-nowrap text-sm font-bold text-[#d6ff3f]">
                      {currencyFormatter.format(dish.price)}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-white/60">
                    {dish.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDishes;
