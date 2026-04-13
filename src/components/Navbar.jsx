import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Help", path: "/help" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ───────── SCROLL EFFECT ───────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D1B1E]/90 backdrop-blur-xl border-b border-[#D8C3A5]/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-[#F8F4EC] font-serif text-2xl tracking-[0.25em]"
        >
          LUMIÈRE<span className="text-[#D8C3A5]">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="transition-all duration-300 text-white hover:text-[#D8C3A5]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RESERVE BUTTON */}
        <Link
          to="/contact"
          className="hidden md:block px-5 py-2.5 rounded-full bg-[#D8C3A5] text-[#0D1B1E] text-[0.72rem] uppercase tracking-[0.18em] font-semibold hover:scale-105 transition"
        >
          Reserve
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#F8F4EC] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-6 pb-6 bg-[#0D1B1E]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-5 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="uppercase text-[0.72rem] tracking-[0.22em] text-[#F8F4EC]"
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE RESERVE BUTTON */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-6 py-3 rounded-full bg-[#D8C3A5] text-[#0B1517] uppercase tracking-[0.18em] text-[0.72rem] font-semibold"
            >
              Reserve Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}