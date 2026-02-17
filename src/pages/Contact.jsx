import React, { useState } from "react";
import faqHeroImage from "../assets/contact.jpg";

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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center mt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: `url(${faqHeroImage})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/85 to-[#1a3a5c]/85" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for a Cleaner,{" "}
            <span className="text-[#C6A35A]">Stress-Free Space?</span>
          </h1>

          <p className="text-xl text-white/90 leading-relaxed mb-4">
            Let us take care of the cleaning so you can focus on what matters
            most.
          </p>

          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
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
              <div className="space-y-6 mb-10">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-full bg-[#C6A35A] flex items-center justify-center text-white text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44]">Call Us</h3>
                    <a
                      href="tel:07466311134"
                      className="text-gray-700 hover:text-[#C6A35A] transition-colors text-lg"
                    >
                      07466 311134
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-full bg-[#C6A35A] flex items-center justify-center text-white text-xl">
                    ✉
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44]">Email Us</h3>
                    <a
                      href="mailto:customersupport@taloncleaningservices.co.uk"
                      className="text-gray-700 hover:text-[#C6A35A] transition-colors break-all"
                    >
                      customersupport@taloncleaningservices.co.uk
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[#C6A35A] flex items-center justify-center text-white text-xl">
                    🕒
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F2A44]">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday – Sunday: 6:00 AM – 10:00 PM
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
