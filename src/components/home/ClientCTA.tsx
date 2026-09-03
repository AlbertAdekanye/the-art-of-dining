import { ArrowUpRight, MessageCircle } from "lucide-react";

function ClientCTA() {
  const whatsappNumber = "2349054019407";

  const message = encodeURIComponent(
    "Hello Albert, I saw The Art of Dining restaurant website. I would like to discuss building a website for my business.",
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="bg-[#d6ff3f] px-6 py-20 text-[#0b0d0b] lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-center">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em]">
            A concept by CodeWithKanye
          </p>

          <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
            Own a restaurant?
            <span className="block text-black/30">Let’s build yours.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-black/65">
            Get a modern website that showcases your menu, accepts table
            reservations and helps customers discover your business.
          </p>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#0b0d0b] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black"
        >
          <MessageCircle size={19} />
          Start Your Project
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default ClientCTA;
