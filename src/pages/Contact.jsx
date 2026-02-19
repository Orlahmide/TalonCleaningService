import React, { useState } from "react";
import faqHeroImage from "../assets/contact.jpg";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ onGetQuote = () => {} }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setFormSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setFormSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Service locations
  const serviceLocations = [
    "Wisbech",
    "Spalding",
    "Boston",
    "Bourne",
    "Peterborough",
    "Stamford",
    "Sheffield",
    "Holbeach",
  ];

  // PASTE YOUR GOOGLE MY MAPS EMBED URL HERE
  const embedMapUrl =
    "https://www.google.com/maps/d/embed?mid=1cU0OpWhTTJh8gkxcZMWzRx-aXo9pm6E&ehbc=2E312F&noprof=1";

  return (
    <div className="min-h-screen bg-white">
      <style>{`
       @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Jost', 'Helvetica Neue', sans-serif; }

        @keyframes bgZoom {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes lineGrow {
          from { width: 0; opacity: 0; }
          to { width: 60px; opacity: 1; }
        }

        .hero-bg-animate { animation: bgZoom 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-slideDown { animation: slideDown 0.8s ease 0.2s both; }
        .animate-fadeUp-1 { animation: fadeUp 0.9s ease 0.4s both; }
        .animate-fadeUp-2 { animation: fadeUp 0.9s ease 0.6s both; }
        .animate-fadeUp-3 { animation: fadeUp 0.9s ease 0.8s both; }
        .animate-lineGrow { animation: lineGrow 0.8s ease 0.5s both; }

        .breadcrumb-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .breadcrumb-item:last-child {
          color: #C6A35A;
        }

        .feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .feature-pill:hover {
          background: rgba(198, 163, 90, 0.2);
          border-color: rgba(198, 163, 90, 0.4);
          transform: translateY(-2px);
        }

        .gold-divider {
          display: inline-block;
          width: 60px;
          height: 2px;
          background: #C6A35A;
        }
      `}</style>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden px-6 md:px-12"
        style={{
          minHeight: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {/* Background Image with Animation */}
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg-animate"
          style={{ backgroundImage: `url(${faqHeroImage})` }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(15,42,68,0.88) 0%, rgba(15,42,68,0.85) 100%, rgba(26,58,92,0.82) 100%)",
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-16 right-16 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-16 left-16 w-48 h-48 border border-white rounded-full"></div>
        </div>

        {/* Vertical Gold Accent */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #C6A35A 25%, #C6A35A 75%, transparent 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fadeUp-1 mb-6">
            <span className="font-body inline-block text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C6A35A] px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              Premium Cleaning Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fadeUp-1 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready for a Cleaner, <br />
            <span className="italic text-[#C6A35A]">Stress-Free Space?</span>
          </h1>

          {/* Decorative Divider */}
          <div className="animate-fadeUp-2 flex items-center justify-center gap-4 mb-8">
            <span className="gold-divider animate-lineGrow"></span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              className="text-[#C6A35A] opacity-70"
            >
              <path
                fill="currentColor"
                d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z"
              />
            </svg>
            <span className="gold-divider animate-lineGrow"></span>
          </div>

          {/* Description */}
          <p className="animate-fadeUp-2 font-body text-base md:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-6">
            Let us take care of the cleaning so you can focus on what matters
            most.
          </p>
          <p className="animate-fadeUp-2 font-body text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            Whether you need regular cleaning, a deep clean, or professional
            support for your business or property, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Content - Two Columns */}
      {/* Contact & Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE — CONTACT */}
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0F2A44] mb-8">
                Get in <span className="text-[#C6A35A]">Touch</span>
              </h2>

              {/* Contact Cards */}
              <div className="space-y-4 mb-6">
                {/* Phone */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white text-lg">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44] text-sm">
                      Call Us
                    </h3>
                    <a
                      href="tel:07466311134"
                      className="text-gray-700 hover:text-[#C6A35A] transition-colors text-sm"
                    >
                      07466 311134
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white text-lg">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44] text-sm">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/07466311134"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#25D366] transition-colors text-sm"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white text-lg">
                    ✉
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44] text-sm">
                      Email Us
                    </h3>
                    <a
                      href="mailto:customersupport@taloncleaningservices.co.uk"
                      className="text-gray-700 hover:text-[#C6A35A] transition-colors break-all text-sm"
                    >
                      customersupport@taloncleaningservices.co.uk
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#C6A35A] flex items-center justify-center text-white text-lg">
                    🕒
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44] text-sm">
                      Business Hours
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Monday – Sunday: 7:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — MAP */}
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0F2A44] mb-8">
                Our Service <span className="text-[#C6A35A]">Areas</span>
              </h2>

              <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                <iframe
                  src={embedMapUrl}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Talon Cleaning Services Coverage Area"
                />
              </div>
            </div>
          </div>
          {/* Location List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceLocations.map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <span>📍</span>
                <span className="font-medium text-gray-700">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
