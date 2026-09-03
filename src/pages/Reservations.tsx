import { useState, type FormEvent } from "react";
import {
  CalendarDays,
  Check,
  Clock,
  Mail,
  Phone,
  UserRound,
  UsersRound,
} from "lucide-react";

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  message: string;
}

const initialForm: ReservationForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "",
  message: "",
};

function Reservations() {
  const [formData, setFormData] = useState<ReservationForm>(initialForm);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Reservation submitted:", formData);

    setIsSubmitted(true);
    setFormData(initialForm);
  }

  return (
    <section className="min-h-screen bg-[#0b0d0b] px-6 pb-24 pt-40 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6ff3f]">
            <span className="h-px w-10 bg-[#d6ff3f]" />
            Reserve your experience
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            Your table
            <span className="block text-white/30">is waiting.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
            Tell us when you are coming, and we will prepare an unforgettable
            dining experience for you and your guests.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Information */}
          <aside className="rounded-[2rem] bg-[#d6ff3f] p-7 text-[#0b0d0b] md:p-10">
            <CalendarDays size={40} />

            <h2 className="mt-8 text-3xl font-black uppercase leading-tight">
              Before you reserve
            </h2>

            <div className="mt-9 space-y-7">
              <div className="flex gap-4">
                <Clock className="mt-1 shrink-0" size={20} />

                <div>
                  <h3 className="font-black uppercase">Opening hours</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Monday – Thursday: 10 AM – 10 PM
                    <br />
                    Friday – Sunday: 10 AM – 12 AM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <UsersRound className="mt-1 shrink-0" size={20} />

                <div>
                  <h3 className="font-black uppercase">Group bookings</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    For reservations larger than eight guests, please contact us
                    directly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0" size={20} />

                <div>
                  <h3 className="font-black uppercase">Need assistance?</h3>
                  <a
                    href="tel:+2348000000000"
                    className="mt-2 block text-sm font-bold hover:underline"
                  >
                    +234 800 000 0000
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-[2rem] border border-white/10 bg-[#151815] p-7 md:p-10">
            {isSubmitted ? (
              <div
                role="status"
                className="flex min-h-[550px] flex-col items-center justify-center text-center"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#d6ff3f] text-[#0b0d0b]">
                  <Check size={38} />
                </span>

                <h2 className="mt-7 text-3xl font-black uppercase">
                  Reservation received
                </h2>

                <p className="mt-4 max-w-md leading-7 text-white/55">
                  Thank you! We have received your reservation request and will
                  contact you shortly to confirm your table.
                </p>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-full border border-white/20 px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-black"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-black uppercase">
                  Reservation details
                </h2>

                <p className="mt-2 text-sm text-white/45">
                  Complete the form and we will confirm your booking.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">
                      Full name
                    </span>

                    <div className="relative">
                      <UserRound
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                      />

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] py-4 pl-12 pr-4 outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">
                      Email address
                    </span>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] py-4 pl-12 pr-4 outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">
                      Phone number
                    </span>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+234..."
                        className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] py-4 pl-12 pr-4 outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">Date</span>

                    <input
                      type="date"
                      name="date"
                      min={today}
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition focus:border-[#d6ff3f]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">Time</span>

                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition focus:border-[#d6ff3f]"
                    >
                      <option value="">Select a time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-bold">
                      Number of guests
                    </span>

                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition focus:border-[#d6ff3f]"
                    >
                      {Array.from({ length: 8 }, (_, index) => index + 1).map(
                        (guest) => (
                          <option key={guest} value={guest}>
                            {guest} {guest === 1 ? "Guest" : "Guests"}
                          </option>
                        ),
                      )}
                    </select>
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-bold">Occasion</span>

                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition focus:border-[#d6ff3f]"
                  >
                    <option value="">No special occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Date night">Date night</option>
                    <option value="Business dinner">Business dinner</option>
                    <option value="Celebration">Celebration</option>
                  </select>
                </label>

                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-bold">
                    Special request
                  </span>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Allergies, seating preferences or anything else we should know..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0b0d0b] px-4 py-4 outline-none transition placeholder:text-white/25 focus:border-[#d6ff3f]"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-7 w-full rounded-full bg-[#d6ff3f] px-7 py-4 font-bold text-[#0b0d0b] transition hover:bg-white"
                >
                  Request Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservations;
