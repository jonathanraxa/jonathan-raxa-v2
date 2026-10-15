import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { routes } from "@/routes/routes";
import { cn, scrollToSection } from "@/lib/utils";

const NAV_LINKS = [
  { id: "about-me", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Fixed nav bar that slides in once the visitor scrolls past the hero
export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const pastHero = window.scrollY > window.innerHeight - 80;
      setIsVisible(pastHero);
      if (!pastHero) setIsMenuOpen(false);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const goTo = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      inert={!isVisible}
      className={cn(
        "fixed inset-x-0 top-0 z-40 bg-gray-900/85 text-gray-100 backdrop-blur-md shadow-lg transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer text-lg font-bold hover:text-yellow-500 transition-colors duration-200"
        >
          Jonathan Raxa
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => goTo(id)}
              className="cursor-pointer text-sm font-medium hover:text-yellow-500 transition-colors duration-200"
            >
              {label}
            </button>
          ))}
          <Link
            to={routes.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-400 transition-colors duration-200"
          >
            Resume
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="cursor-pointer p-2 text-xl hover:text-yellow-500 md:hidden"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-1 border-t border-gray-700 px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => goTo(id)}
              className="cursor-pointer rounded-md px-2 py-3 text-left font-medium hover:bg-gray-800 hover:text-yellow-500"
            >
              {label}
            </button>
          ))}
          <Link
            to={routes.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-md bg-yellow-500 px-4 py-3 text-center font-semibold text-gray-900 hover:bg-yellow-400"
          >
            Resume
          </Link>
        </div>
      )}
    </header>
  );
};
