import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

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
        className="relative overflow-hidden"
        style={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {/* Background Image with Animation */}
        <div
          className="hero-bg-animate absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${commercialImg})` }}
        />

        {/* Refined Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(15, 42, 68, 0.93) 0%, rgba(15, 42, 68, 0.88) 100%, rgba(26, 61, 92, 0.82) 100%)",
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 right-20 w-72 h-72 border border-white rounded-full"></div>
          <div className="absolute bottom-16 left-16 w-56 h-56 border border-white rounded-full"></div>
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
        <div className="relative z-10 w-full px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Main Content - Left Aligned for Editorial Feel */}
            <div className="text-center md:text-center">
              {/* Badge */}
              <div className="animate-fadeUp-1 mb-6">
                <span className="font-body inline-block text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C6A35A] px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  What We Offer
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="animate-fadeUp-1 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Professional Cleaning
                <br />
                <span className="italic text-[#C6A35A]">
                  Tailored to Your Needs
                </span>
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
              <p className="animate-fadeUp-2 font-body text-base md:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
                At Talon Cleaning Services, we deliver reliable, detail-focused
                cleaning solutions tailored to businesses, property operators,
                and households. Our services maintain clean, healthy, and
                welcoming environments through consistent standards and
                professional management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        {serviceOrder.map((serviceId, index) => {
          const service = services[serviceId];
          const isEven = index % 2 === 0;

          return (
            <section
              key={serviceId}
              id={serviceId}
              className={`mb-6 scroll-mt-6 ${selectedService === serviceId ? "animate-fadeIn" : ""}`}
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
                <div className="mt-6 border-b-2 border-[#d4cfc0]"></div>
              )}
            </section>
          );
        })}
      </div>
      <div className="my-2 flex justify-center"></div>
      <BeforeAfterSlider />

       {/* CTA Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#FFF9F0] py-6 px-6"
      >
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-20 left-20 w-40 h-40 border border-[#0F2A44] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-[#0F2A44] rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-[1px] bg-[#0F2A44]/30"></div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              className="text-[#0F2A44]/40"
            >
              <path
                fill="currentColor"
                d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z"
              />
            </svg>
            <div className="w-16 h-[1px] bg-[#0F2A44]/30"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A44] mb-3 leading-tight">
            Ready for a Cleaner,
            <br />
            <span className="italic">Stress-Free Space?</span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#0F2A44]/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Let Talon Cleaning Services take care of the cleaning while you
            focus on running your business, hosting your guests, or enjoying
            your home.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setShowQuoteModal(true)}
            className="group relative inline-flex items-center justify-center bg-[#0F2A44] text-white px-10 py-4 rounded-sm font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#1a3d5c] hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

            <span className="relative">Request Your Free Quote Today</span>
          </button>

          {/* Trust badge */}
          <p className="mt-8 text-sm text-[#0F2A44]/60 font-medium">
            ✓ No obligation · Free consultation · Quick response
          </p>
        </div>
      </section>
    </div>
  );
}
