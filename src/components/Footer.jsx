import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0F2A44] text-white px-3 py-4 text-sm rounded-t-lg">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {/* Company */}
          <div>
            <h3 className="font-playfair text-[#C6A35A] text-sm mb-2">
              Talon Cleaning
            </h3>
            <p className="text-white/70 leading-snug text-xs">
              Reliable cleaning for commercial, accommodation, hospitality &
              domestic.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-[#C6A35A] text-sm mb-2">
              Services
            </h3>
            <ul className="space-y-1 text-xs">
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
            <h3 className="font-playfair text-[#C6A35A] text-sm mb-2">
              Company
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="text-white/70 hover:text-[#C6A35A]"
                >
                  About Us
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
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
<div>
  <h3 className="font-playfair text-[#C6A35A] text-sm mb-1">
    Contact
  </h3>

  <ul className="space-y-1 text-xs text-white/70">
    <li>
      <a
        href="tel:07466311134"
        className="flex items-center gap-2 hover:text-[#C6A35A] transition-colors"
      >
        <FaPhoneAlt className="text-red-500 text-[12px] shrink-0" />
        <span>07466 311134</span>
      </a>
    </li>

    <li>
      <a
        href="mailto:customersupport@taloncleaningservices.co.uk"
        className="flex items-center gap-2 hover:text-[#C6A35A] transition-colors"
      >
        <FaEnvelope className="text-[12px] shrink-0" />
        <span className="break-all">
          customersupport@taloncleaningservices.co.uk
        </span>
      </a>
    </li>
  </ul>
</div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-2 pt-2 text-center text-white/50 text-[10px]">
          © 2026 Talon Cleaning Services
        </div>
      </div>
    </footer>
  );
};

export default Footer;
