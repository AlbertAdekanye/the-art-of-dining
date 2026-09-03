import { Plus } from "lucide-react";
import type { MenuItem } from "../../types";

interface MenuCardProps {
  item: MenuItem;
}

const currencyFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151815]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-[#d6ff3f] px-4 py-2 text-xs font-bold text-[#0b0d0b]">
          {item.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-black uppercase text-white">
              {item.name}
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/50">
              {item.description}
            </p>
          </div>

          <button
            type="button"
            aria-label={`Add ${item.name} to order`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#d6ff3f] hover:bg-[#d6ff3f] hover:text-black"
          >
            <Plus size={18} />
          </button>
        </div>

        <p className="mt-6 text-lg font-black text-[#d6ff3f]">
          {currencyFormatter.format(item.price)}
        </p>
      </div>
    </article>
  );
}

export default MenuCard;
