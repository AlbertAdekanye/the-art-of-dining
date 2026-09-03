import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-[#d6ff3f]" : "text-white/70 hover:text-white"
    }`;

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}
        <NavLink
          to="/"
          className="relative z-50 text-xl font-black uppercase tracking-tight text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          The Art
          <span className="block text-[#d6ff3f]">of Dining.</span>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navigationLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClasses}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop reservation button */}
        <NavLink
          to="/reservations"
          className="hidden rounded-full bg-[#d6ff3f] px-6 py-3 text-sm font-bold text-[#0b0d0b] transition hover:bg-white md:inline-flex"
        >
          Book a Table
        </NavLink>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-50 text-white md:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile navigation */}
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center gap-8 bg-[#0b0d0b] transition-transform duration-500 md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-3xl font-black uppercase ${
                  isActive ? "text-[#d6ff3f]" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/reservations"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 rounded-full bg-[#d6ff3f] px-8 py-4 font-bold text-[#0b0d0b]"
          >
            Book a Table
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
