import { ArrowUpRight, Camera, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Reservations", path: "/reservations" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0b0d0b] px-6 pb-8 pt-20 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="text-3xl font-black uppercase leading-none tracking-tight"
            >
              The Art
              <span className="block text-[#d6ff3f]">of Dining.</span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              Creating memorable dining experiences through bold flavours,
              beautiful presentation and warm hospitality.
            </p>

            {/* Social links */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Visit our Instagram page"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:border-[#d6ff3f] hover:bg-[#d6ff3f] hover:text-black"
              >
                <Camera size={18} />
              </a>

              <a
                href="#"
                aria-label="Visit our Facebook page"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-base font-black transition hover:border-[#d6ff3f] hover:bg-[#d6ff3f] hover:text-black"
              >
                f
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-[#d6ff3f]"
                  >
                    {link.name}
                    <ArrowUpRight size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider">
              Visit Us
            </h3>

            <div className="mt-6 space-y-5 text-sm text-white/50">
              <p className="flex items-start gap-3 leading-6">
                <MapPin size={18} className="mt-1 shrink-0 text-[#d6ff3f]" />

                <span>
                  Victoria Island,
                  <br />
                  Lagos, Nigeria
                </span>
              </p>

              <a
                href="tel:+2348000000000"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone size={18} className="shrink-0 text-[#d6ff3f]" />
                +234 800 000 0000
              </a>

              <div className="leading-6">
                <p>Monday – Thursday: 10 AM – 10 PM</p>
                <p className="mt-2">Friday – Sunday: 10 AM – 12 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} The Art of Dining. All rights reserved.</p>

          <p>
            Designed and developed by{" "}
            <span className="font-semibold text-white/60">CodeWithKanye</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
