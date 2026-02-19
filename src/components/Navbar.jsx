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
  className={`bg-[#0F2A44] fixed w-full top-0 z-50 rounded-b-lg transition-shadow duration-300 ${scrolled ? "shadow-2xl" : "shadow-lg"}`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-18 md:h-20">

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
        className="h-[75px] sm:h-25 md:h-[90px] w-auto object-contain"
      />
      {/* Hide text on mobile */}
      <span className="hidden lg:inline font-playfair text-lg font-bold text-white tracking-wide">
        TALON <span className="text-[#C6A35A]">CLEANING</span> SERVICES
      </span>
    </a>

    {/* Nav Buttons - always visible */}
    <div className="flex flex-wrap gap-4 items-center text-xs sm:text-base">
      <button onClick={() => navigate("/")} className={getLinkClasses("/")}>
        Home
      </button>
      <button onClick={() => navigate("/services")} className={getLinkClasses("/services")}>
        Services
      </button>
      <button onClick={() => navigate("/about")} className={getLinkClasses("/about")}>
        About Us
      </button>
      <button onClick={() => navigate("/contact")} className={getLinkClasses("/contact")}>
        Contact Us
      </button>
      <button onClick={() => navigate("/FAQs")} className={getLinkClasses("/FAQs")}>
        FAQs
      </button>

       {/* Get a Free Quote - hidden on mobile */}
  <button
    onClick={handleGetQuote}
    className="hidden lg:block bg-[#C6A35A] text-[#0F2A44] px-4 py-2 sm:px-6 sm:py-3 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
  >
    Get a Free Quote
  </button>
    </div>
    
  </div>
</nav>

  );
};

export default Navbar;
