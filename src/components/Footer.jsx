import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0F2A44] text-white py-2 px-4 text-xs">
  <div className="max-w-6xl mx-auto">

    {/* Footer Top */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">

      {/* Company */}
      <div>
        <h3 className="font-playfair text-[#C6A35A] mb-1 text-sm">
          Talon Cleaning
        </h3>
        <p className="text-white/70 leading-tight">
          Reliable cleaning for commercial, accommodation, hospitality & domestic.
        </p>
      </div>

      {/* Services */}
      <div>
        <h3 className="font-playfair text-[#C6A35A] mb-1 text-sm">
          Services
        </h3>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => navigate("/services/commercial")}
              className="text-white/70 hover:text-[#C6A35A]"
            >
              Commercial
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/services/accommodation")}
              className="text-white/70 hover:text-[#C6A35A]"
            >
              Accommodation
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/services/hospitality")}
              className="text-white/70 hover:text-[#C6A35A]"
            >
              Hospitality
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/services/domestic")}
              className="text-white/70 hover:text-[#C6A35A]"
            >
              Domestic
            </button>
          </li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="font-playfair text-[#C6A35A] mb-1 text-sm">
          Company
        </h3>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => navigate("/about")}
              className="text-white/70 hover:text-[#C6A35A]"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/services")}
              className="text-white/70 hover:text-[#C6A35A]"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/contact")}
              className="text-white/70 hover:text-[#C6A35A]"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Contact (no boxes) */}
      <div>
        <h3 className="font-playfair text-[#C6A35A] mb-1 text-sm">
          Contact
        </h3>
        <ul className="space-y-1 text-white/70 leading-tight">
          <li>
            <a href="tel:07466311134" className="hover:text-[#C6A35A]">
              📞 Call
            </a>
          </li>
          <li>
            <a href="mailto:customersupport@taloncleaningservices.co.uk" className="hover:text-[#C6A35A]">
              ✉ Email
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="text-center border-t border-white/10 pt-1 text-white/50 text-[10px]">
      © 2026 Talon Cleaning Services
    </div>
  </div>
</footer>

  );
};

export default Footer;
