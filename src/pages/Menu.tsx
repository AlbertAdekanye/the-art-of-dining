import { useState } from "react";
import MenuCard from "../components/menu/MenuCard";
import { menuItems } from "../data/menu";
import type { MenuCategory } from "../types";

type MenuFilter = "All" | MenuCategory;

const categories: MenuFilter[] = [
  "All",
  "Main Course",
  "Grills",
  "Pasta",
  "Dessert",
  "Drinks",
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<MenuFilter>("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="min-h-screen bg-[#0b0d0b] px-6 pb-24 pt-40 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
            <span className="h-px w-10 bg-[#d6ff3f]" />
            Explore our flavours
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl md:text-8xl">
            Food made
            <span className="block text-white/30">to be remembered.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
            Discover thoughtfully prepared dishes made with fresh ingredients,
            bold flavours and a touch of creativity.
          </p>
        </div>

        {/* Category filters */}
        <div className="my-14 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-bold transition ${
                selectedCategory === category
                  ? "border-[#d6ff3f] bg-[#d6ff3f] text-[#0b0d0b]"
                  : "border-white/15 text-white/60 hover:border-white hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        {filteredItems.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-white/10 bg-[#151815] px-6 py-20 text-center">
            <p className="text-lg font-bold text-white">
              No dishes have been added to this category yet.
            </p>

            <p className="mt-2 text-sm text-white/45">
              More delicious options are coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Menu;
