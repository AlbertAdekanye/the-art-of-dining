import { Heart, Leaf, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We carefully select quality ingredients to create food that tastes fresh and satisfying.",
  },
  {
    icon: Sparkles,
    title: "Creative Cooking",
    description:
      "Our dishes combine familiar flavours with thoughtful presentation and modern ideas.",
  },
  {
    icon: Heart,
    title: "Made With Passion",
    description:
      "Every plate is prepared with care because we believe the smallest details matter.",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    description:
      "We create a welcoming environment where every guest feels comfortable and valued.",
  },
];

function About() {
  return (
    <div className="bg-[#0b0d0b] text-white">
      {/* Page header */}
      <section className="px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
            <span className="h-px w-10 bg-[#d6ff3f]" />
            The story behind every plate
          </p>

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            We turned our love
            <span className="block text-white/30">for food into an art.</span>
          </h1>
        </div>
      </section>

      {/* Main image */}
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] md:min-h-[700px]">
            <img
              src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1800"
              alt="Chef carefully preparing a dish"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <p className="absolute bottom-7 left-7 max-w-md text-lg font-medium leading-7 text-white md:bottom-10 md:left-10 md:text-xl">
              “Great food begins with quality ingredients, but it becomes
              memorable through care.”
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
              Our beginning
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.04em] md:text-6xl">
              A simple idea,
              <span className="block text-white/30">beautifully served.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/55 md:text-lg">
            <p>
              The Art of Dining began with one simple belief: eating should be
              more than satisfying hunger. It should create a moment worth
              remembering.
            </p>

            <p>
              Our kitchen brings together fresh ingredients, bold flavours and
              careful presentation. Every recipe is thoughtfully developed to
              feel familiar while still offering something exciting.
            </p>

            <p>
              Whether you are joining us for a casual meal, a date or an
              important celebration, we want you to leave with a story worth
              sharing.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#d6ff3f] px-6 py-24 text-[#0b0d0b] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-[#0b0d0b]" />
            What guides us
          </p>

          <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
            The values behind
            <span className="block text-black/30">our kitchen.</span>
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-black/15 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="bg-[#d6ff3f] p-7 transition hover:bg-white md:p-9"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b0d0b] text-[#d6ff3f]">
                    <Icon size={21} />
                  </span>

                  <h3 className="mt-8 text-xl font-black uppercase">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-black/60">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="px-6 py-24 text-center lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
            Come experience it yourself
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Your next memorable
            <span className="block text-white/30">meal starts here.</span>
          </h2>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="rounded-full bg-[#d6ff3f] px-7 py-4 text-sm font-bold text-[#0b0d0b] transition hover:bg-white"
            >
              Explore Our Menu
            </Link>

            <Link
              to="/reservations"
              className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold transition hover:border-white hover:bg-white hover:text-black"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
