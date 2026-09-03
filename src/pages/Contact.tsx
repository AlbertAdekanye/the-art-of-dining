import { useState, type FormEvent } from "react";
import { Check, Clock, Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="min-h-screen bg-[#0b0d0b] px-6 pb-24 pt-40 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
            <span className="h-px w-10 bg-[#d6ff3f]" />
            Get in touch
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            We would love
            <span className="block text-white/30">to hear from you.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
            Have a question about our menu, reservations or private dining? Send
            us a message and our team will get back to you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact details */}
          <div className="space-y-5">
            <article className="rounded-[1.75rem] bg-[#d6ff3f] p-7 text-[#0b0d0b]">
              <MapPin size={28} />

              <h2 className="mt-6 text-xl font-black uppercase">
                Visit our restaurant
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/60">
                Victoria Island
                <br />
                Lagos, Nigeria
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-[#151815] p-7">
              <Phone size={25} className="text-[#d6ff3f]" />

              <h2 className="mt-6 text-xl font-black uppercase">Call us</h2>

              <a
                href="tel:+2348000000000"
                className="mt-3 block text-sm text-white/50 transition hover:text-[#d6ff3f]"
              >
                +234 800 000 0000
              </a>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-[#151815] p-7">
              <Mail size={25} className="text-[#d6ff3f]" />

              <h2 className="mt-6 text-xl font-black uppercase">Email us</h2>

              <a
                href="mailto:hello@theartofdining.com"
                className="mt-3 block text-sm text-white/50 transition hover:text-[#d6ff3f]"
              >
                hello@theartofdining.com
              </a>
            </article>

            <article className="rounded-[1.75rem] border border-white/10 bg-[#151815] p-7">
              <Clock size={25} className="text-[#d6ff3f]" />

              <h2 className="mt-6 text-xl font-black uppercase">
                Opening hours
              </h2>

              <div className="mt-3 space-y-2 text-sm leading-6 text-white/50">
                <p>Monday – Thursday: 10 AM – 10 PM</p>
                <p>Friday – Sunday: 10 AM – 12 AM</p>
              </div>
            </article>
          </div>

          {/* Contact form */}
          <div className="rounded-[2rem] border border-white/10 bg-[#151815] p-7 md:p-10">
            {isSubmitted ? (
              <div
                role="status"
                className="flex min-h-[620px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#d6ff3f] text-[#0b0d0b]">
                  <Check size={38} />
                </span>

                <h2 className="mt-7 text-3xl font-black uppercase">
                  Message received
                </h2>

                <p className="mt-4 max-w-md leading-7 text-white/55">
                  Thank you for contacting us. Our team will respond to your
                  message as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-full border border-white/20 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-black"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-black uppercase">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm text-white/45">
                  Complete the form below and we will get back to you.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <label>
                    <span className="mb-2 block text-sm font-bold">
                      First name
                    </span>

                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="Your first name"
                      className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]"
                    />
                  </label>

                  <label>
                    <span className="mb-2 block text-sm font-bold">
                      Last name
                    </span>

                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Your last name"
                      className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]"
                    />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-bold">
                    Email address
                  </span>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]"
                  />
                </label>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-bold">
                    Phone number
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234..."
                    className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]"
                  />
                </label>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-bold">Subject</span>

                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition focus:border-[#d6ff3f]"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="General enquiry">General enquiry</option>
                    <option value="Reservation enquiry">
                      Reservation enquiry
                    </option>
                    <option value="Private dining">Private dining</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </label>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-bold">Message</span>

                  <textarea
                    name="message"
                    required
                    rows={7}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d6ff3f] px-7 py-4 font-bold text-[#0b0d0b] transition hover:bg-white"
                >
                  Send Message
                  <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
