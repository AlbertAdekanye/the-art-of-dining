import { Clock, MapPin, Utensils } from "lucide-react";

const experiences = [
  {
    icon: Utensils,
    title: "Exceptional Food",
    description:
      "Every meal is prepared using carefully selected ingredients and bold flavours.",
  },
  {
    icon: Clock,
    title: "Thoughtful Service",
    description:
      "Warm hospitality and attentive service from the moment you arrive.",
  },
  {
    icon: MapPin,
    title: "Elegant Atmosphere",
    description:
      "A comfortable and stylish space designed for unforgettable moments.",
  },
];

function ExperienceSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0d0b]">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?auto=format&fit=crop&w=2000&q=85"
        alt="The Art of Dining restaurant interior"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="w-full">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
              <span className="h-px w-10 bg-[#d6ff3f]" />
              The complete experience
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
              Come for the food.
              <span className="block text-white/35">Stay for the moment.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              We combine excellent food, thoughtful service and a beautiful
              atmosphere to create an experience worth remembering.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/15 bg-white/15 md:grid-cols-3">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article
                  key={experience.title}
                  className="bg-black/55 p-7 backdrop-blur-md transition hover:bg-black/70 md:p-9"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d6ff3f] text-[#0b0d0b]">
                    <Icon size={21} />
                  </span>

                  <h3 className="mt-7 text-xl font-black uppercase text-white">
                    {experience.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {experience.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
