import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icon.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Service({
  setShowQuoteModal,
  selectedService,
  commercialImg,
  accommodationImg,
  hospitalityImg,
  domesticImg,
}) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // Navigate to home page with the section hash
    navigate("/#" + id);
  };

  const services = {
    commercial: {
      id: "commercial",
      title: "Commercial Cleaning",
      subtitle: "Reliable Cleaning for Professional Environments",
      description:
        "We help businesses maintain clean, safe, and welcoming workplaces through consistent, professionally managed cleaning services.",
      image: commercialImg,
      includes: [
        "Office cleaning",
        "Corporate meeting spaces",
        "Shared workspaces",
        "Contract cleaning schedules",
      ],
      benefits: [
        "Structured processes and reliable scheduling",
        "Professional management and high standards",
        "Consistent quality that reflects professionalism",
        "Flexible contracts for long-term support",
      ],
      idealFor:
        "Businesses seeking dependable, long-term cleaning support for offices and professional environments.",
    },
    accommodation: {
      id: "accommodation",
      title: "Accommodation Turnover Cleaning",
      subtitle: "Guest-Ready Spaces, Every Time",
      description:
        "We help property managers and hosts maintain guest-ready spaces with efficient, checklist-driven cleaning.",
      image: accommodationImg,
      includes: [
        "Airbnb & short-let cleaning",
        "Serviced accommodation turnovers",
        "Student accommodation room changeovers",
        "Linen handling and inspection checks",
      ],
      benefits: [
        "Fast turnaround times between guests",
        "Detailed cleaning checklists",
        "Professional linen service",
        "Consistent 5-star presentation",
      ],
      idealFor:
        "Property managers, Airbnb hosts, and accommodation providers who need reliable turnover cleaning.",
    },
    hospitality: {
      id: "hospitality",
      title: "Hospitality Cleaning",
      subtitle: "Excellence in Every Detail",
      description:
        "We provide high-standard cleaning support for hospitality environments that require consistency, professionalism, and attention to detail.",
      image: hospitalityImg,
      includes: ["Hotels", "Hostels", "Guest facilities", "Public areas"],
      benefits: [
        "Supports reputation and guest satisfaction",
        "Maintains comfort and operational efficiency",
        "Trained staff with hospitality experience",
        "Flexible scheduling around your operations",
      ],
      idealFor:
        "Hotels, hostels, and hospitality venues where presentation and consistency matter most.",
    },
    domestic: {
      id: "domestic",
      title: "Domestic & General Cleaning",
      subtitle: "Making Everyday Living Easier",
      description:
        "We support busy households with dependable cleaning services that make everyday living easier.",
      image: domesticImg,
      includes: [
        "Regular home cleaning",
        "Deep cleaning",
        "General/standard cleaning",
        "One-off or scheduled cleans",
      ],
      benefits: [
        "More time for what matters most",
        "Trusted, professional cleaners",
        "Flexible scheduling to suit your routine",
        "Calm, comfortable living spaces",
      ],
      idealFor:
        "Busy households looking for reliable cleaning services that create peace of mind.",
    },
  };

  const serviceOrder = [
    "commercial",
    "accommodation",
    "hospitality",
    "domestic",
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (selectedService) {
      const element = document.getElementById(selectedService);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [selectedService]);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
            
            .font-playfair {
            font-family: 'Playfair Display', serif;
            }

            @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
            }

            @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
            }

            .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
            }

            .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
            opacity: 0;
            }
        `}</style>

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${commercialImg})` }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/95 via-[#0F2A44]/90 to-[#1a3a5c]/85" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl mb-6 animate-fadeInUp">
            Professional Cleaning Services
          </h1>
          <p
            className="text-xl text-[#C6A35A] mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Tailored to Your Needs
          </p>
          <p
            className="text-lg leading-relaxed max-w-3xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            At Talon Cleaning Services, we deliver reliable, detail-focused
            cleaning solutions tailored to businesses, property operators, and
            households. Our services are designed to maintain clean, healthy,
            and welcoming environments through consistent standards and
            professional management.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {serviceOrder.map((serviceId, index) => {
          const service = services[serviceId];
          const isEven = index % 2 === 0;

          return (
            <section
              key={serviceId}
              id={serviceId}
              className={`mb-12 scroll-mt-12 ${selectedService === serviceId ? "animate-fadeIn" : ""}`}
            >
              <div
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                {/* Image */}
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="font-playfair text-4xl md:text-5xl text-[#0F2A44] mb-4">
                    {service.title}
                  </h2>
                  <h3 className="text-2xl text-[#C6A35A] mb-6 font-semibold">
                    {service.subtitle}
                  </h3>
                  <p className="text-[#2E2E2E] text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Services Include */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-[#0F2A44] text-xl mb-4">
                      Services Include:
                    </h4>
                    <ul className="space-y-3">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#C6A35A] mt-1">✦</span>
                          <span className="text-[#2E2E2E]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-[#0F2A44] text-xl mb-4">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[#C6A35A] mt-1">✓</span>
                          <span className="text-[#2E2E2E]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="bg-[#F7F6F2] p-6 rounded-lg border-l-4 border-[#C6A35A]">
                    <p className="text-[#2E2E2E] italic">
                      <strong className="text-[#0F2A44] not-italic">
                        Ideal for:
                      </strong>{" "}
                      {service.idealFor}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setShowQuoteModal(true)}
                    className="mt-8 bg-[#C6A35A] text-[#0F2A44] px-8 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Get a Free Quote
                  </button>
                </div>
              </div>

              {/* Divider */}
              {index < serviceOrder.length - 1 && (
                <div className="mt-24 border-b-2 border-[#d4cfc0]"></div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
