import { Quote, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="bg-[#f3f0e8] px-6 py-24 text-[#0b0d0b] lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em]">
              <span className="h-px w-10 bg-[#0b0d0b]" />
              Guest stories
            </p>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
              Loved by people
              <span className="block text-black/30">who love food.</span>
            </h2>
          </div>

          <div>
            <p className="text-4xl font-black">4.9</p>

            <div className="mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill="currentColor"
                  className="text-[#0b0d0b]"
                />
              ))}
            </div>

            <p className="mt-2 text-xs font-semibold text-black/50">
              Based on guest reviews
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex min-h-80 flex-col justify-between rounded-[2rem] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-2 md:p-9"
            >
              <div>
                <Quote
                  size={42}
                  fill="currentColor"
                  className="text-[#d6ff3f]"
                />

                <div className="mt-7 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                        className="text-[#0b0d0b]"
                      />
                    ),
                  )}
                </div>

                <blockquote className="mt-6 text-lg font-medium leading-8 text-black/75">
                  “{testimonial.quote}”
                </blockquote>
              </div>

              <div className="mt-10 border-t border-black/10 pt-5">
                <p className="font-black uppercase">{testimonial.name}</p>

                <p className="mt-1 text-sm text-black/45">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
