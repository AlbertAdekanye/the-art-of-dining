import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const statistics = [
  { value: "8+", label: "Years of experience" },
  { value: "40+", label: "Signature dishes" },
  { value: "10K+", label: "Happy guests" },
];

function AboutSection() {
  return (
    <section className="overflow-hidden bg-[#d6ff3f] px-6 py-24 text-[#0b0d0b] lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-black/10">
            <img
              src="https://images.pexels.com/photos/4252138/pexels-photo-4252138.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Chef preparing a meal in the kitchen"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-2 flex h-32 w-32 rotate-6 items-center justify-center rounded-full bg-[#0b0d0b] p-5 text-center text-xs font-black uppercase leading-5 tracking-wider text-white md:-right-6 md:h-40 md:w-40">
            Made with passion in every plate
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em]">
            <span className="h-px w-10 bg-[#0b0d0b]" />
            Our story
          </p>

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
            Dining is not
            <span className="block text-black/35">just eating.</span>
            It is an art.
          </h2>

          <p className="mt-7 max-w-xl text-base font-medium leading-7 text-black/65 md:text-lg">
            At The Art of Dining, we transform fresh ingredients into memorable
            experiences. Every dish is carefully prepared to bring together bold
            flavours, beautiful presentation and genuine hospitality.
          </p>

          <p className="mt-4 max-w-xl text-base leading-7 text-black/65">
            From intimate dinners to joyful celebrations, our restaurant is a
            place where food brings people together.
          </p>

          {/* Statistics */}
          <div className="my-10 grid grid-cols-3 gap-4 border-y border-black/20 py-7">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black md:text-4xl">{stat.value}</p>

                <p className="mt-1 text-xs font-semibold text-black/55 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 rounded-full bg-[#0b0d0b] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black"
          >
            Discover Our Story
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
