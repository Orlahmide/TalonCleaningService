import React, { useState } from "react";
import faqHeroImage from "../assets/commercial.jpg";

const FAQOption1 = ({ onGetQuote = () => {} }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What areas do you cover?",
      answer:
        "We provide cleaning services across our local service areas, supporting businesses, property managers, and households. We currently cover the following locations: Wisbech, Ely, Spalding, Boston, Bourne, Peterborough, Stamford, Sleaford, and Holbeach. Please contact us to confirm availability in your location.",
    },
    {
      question: "What types of cleaning do you offer?",
      answer:
        "We offer a wide range of services including: Commercial office cleaning, Accommodation turnover cleaning, Hospitality cleaning, Domestic cleaning, Deep cleaning, and General cleaning.",
    },
    {
      question: "Do you provide regular cleaning schedules?",
      answer:
        "Yes. We offer flexible scheduling including daily, weekly, fortnightly, and custom cleaning plans tailored to your needs.",
    },
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes, our team arrives fully equipped with professional cleaning products and equipment. We also accommodate client preferences including offering to provide the products.",
    },
    {
      question: "How do you ensure quality and consistency?",
      answer:
        "We use structured cleaning checklists, clear standards, and quality assurance processes to ensure consistent results.",
    },
    {
      question: "Are your cleaners trustworthy?",
      answer:
        "Absolutely. Our team members are vetted, trained, and committed to professionalism, reliability, and respect.",
    },
    {
      question: "Can I book a one-off clean?",
      answer: "Yes, we provide both one-off and ongoing cleaning services.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Simply contact us with your requirements, and we will provide a tailored quote based on your needs.",
    },
    {
      question:
        "Are your cleaning products safe for humans and the environment?",
      answer:
        "Yes. We use eco-friendly, non-toxic cleaning products that are safe for your staff, customers, and the environment.",
    },
    {
      question: "How do you customise your cleaning services for my business?",
      answer:
        "We assess your premises during an initial consultation and create a cleaning plan that includes specific areas of focus, frequencies, and times that work seamlessly with your schedule.",
    },
  ];

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
        className="relative px-6 md:px-12 overflow-hidden"
        style={{
          minHeight: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {/* Background Image with Scale */}
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg-animate"
          style={{
            backgroundImage: `url(${faqHeroImage})`,
            transform: "scale(1.05)",
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(15,42,68,0.95) 0%, rgba(15,42,68,0.9) 50%, rgba(26,61,92,0.85) 100%)",
          }}
        />

        {/* Decorative Circles */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#C6A35A]/20 rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-24 h-24 border border-[#C6A35A]/20 rounded-full"></div>
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
        <div className="relative z-10 max-w-4xl mx-auto text-center py-10">
          {/* Badge */}
          <div className="animate-fadeUp-1 mb-6">
            <span className="font-body inline-block text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C6A35A] px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              FAQ Section
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fadeUp-1 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Frequently Asked <br />
            <span className="italic text-[#C6A35A]">Questions</span>
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

          {/* Subtitle */}
          <p className="animate-fadeUp-2 font-body text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our cleaning services — clear
            answers, no jargon.
          </p>
        </div>
      </section>

      {/* FAQ Grid - TWO COLUMNS */}
      <section className="py-10 px-6 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section intro */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F2A44] mb-3">
              Quick <span className="italic text-[#C6A35A]">Answers</span>
            </h2>
            <p className="font-body text-gray-600">
              Can't find what you're looking for? Get in touch with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="faq-item bg-white rounded-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#C6A35A]/30"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 focus:outline-none group"
                  >
                    <span className="font-body font-semibold text-[#0F2A44] text-base leading-snug group-hover:text-[#C6A35A] transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#C6A35A] transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-[#C6A35A]" : ""
                      }`}
                    >
                      <span
                        className={`text-xl font-bold transition-colors ${
                          isOpen
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white"
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-1">
                      <div className="w-12 h-0.5 bg-[#C6A35A]/30 mb-4"></div>
                      <p className="font-body text-gray-700 leading-relaxed text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Gold with transition to blue footer */}
      <section className="relative py-6 px-6 bg-gradient-to-b from-white to-[#D4B583]/20">
          <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative gold accent */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-[1px] bg-[#C6A35A]/30"></div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              className="text-[#C6A35A]/40"
            >
              <path
                fill="currentColor"
                d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z"
              />
            </svg>
            <div className="w-16 h-[1px] bg-[#C6A35A]/30"></div>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0F2A44] mb-4">
            Still Have <span className="italic text-[#C6A35A]">Questions?</span>
          </h2>
          <p className="font-body text-lg text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            We're here to help! Get in touch with our team or request a free
            quote — no pressure, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetQuote}
              className="group relative inline-flex items-center justify-center bg-[#C6A35A] text-white px-10 py-4 rounded-sm font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#B8935A] hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative font-body">Get a Free Quote</span>
            </button>

            <a
              href="tel:09037362051"
              className="group inline-flex items-center justify-center bg-[#0F2A44] text-white px-10 py-4 rounded-sm font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#1a3d5c] hover:shadow-xl hover:-translate-y-0.5 border border-[#0F2A44]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="relative font-body">Call Us Now</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-body">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#C6A35A]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#C6A35A]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#C6A35A]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Quick response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQOption1;
