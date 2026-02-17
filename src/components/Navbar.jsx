import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/icon.png";

const Navbar = ({ onGetQuote = () => {} }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetQuote = () => {
    if (onGetQuote && typeof onGetQuote === "function") onGetQuote();
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const getLinkClasses = (path) =>
    `transition-colors duration-300 ${
      isActive(path)
        ? "text-[#C6A35A] font-semibold"
        : "text-white hover:text-[#C6A35A]"
    }`;

  return (
    <nav
      className={`bg-[#0F2A44] fixed w-full top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-2xl" : "shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center h-20 md:h-24">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <img
            src={logo}
            alt="Talon Cleaning Logo"
            className="h-[90px] sm:h-25 md:h-[100px] w-auto object-contain"
          />
          <span className="hidden md:inline font-playfair text-xl md:text-2xl font-bold text-white tracking-wide">
            TALON <span className="text-[#C6A35A]">CLEANING</span> SERVICES
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center text-sm sm:text-base">
          <button onClick={() => navigate("/")} className={getLinkClasses("/")}>
            Home
          </button>
          <button
            onClick={() => navigate("/services")}
            className={getLinkClasses("/services")}
          >
            Services
          </button>
          <button onClick={() => navigate("/about")} className={getLinkClasses("/about")}>
            About Us
          </button>
          <button
            onClick={() => navigate("/contact")}
            className={getLinkClasses("/contact")}
          >
            Contact
          </button>
          <button onClick={() => navigate("/FAQs")} className={getLinkClasses("/FAQs")}>
            FAQs
          </button>
          <button
            onClick={handleGetQuote}
            className="bg-[#C6A35A] text-[#0F2A44] px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0F2A44] overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 border-t border-[#C6A35A]/20" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 space-y-3 sm:space-y-4">
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
            { label: "FAQs", path: "/FAQs" },
          ].map((link) => (
            <button
              key={link.path}
              onClick={() => {
                navigate(link.path);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left transition-colors duration-300 py-3 sm:py-4 ${
                isActive(link.path)
                  ? "text-[#C6A35A] font-semibold"
                  : "text-white hover:text-[#C6A35A]"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={handleGetQuote}
            className="block w-full bg-[#C6A35A] text-[#0F2A44] px-4 py-3 sm:px-6 sm:py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 mt-2"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
