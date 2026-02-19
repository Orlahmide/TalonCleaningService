import { useState, useRef, useEffect } from "react";
import commercialImg from "../assets/commercial.jpg";
import accommodationImg from "../assets/accommodation.jpg";
import hospitalityImg from "../assets/hospitality.jpg";
import domesticImg from "../assets/domestic.jpg";
import heroImage from "../assets/domestic.jpg";
import aboutImage from "../assets/aboutPicture.png";
import QuoteModal from "../components/QuoteModal";
import ConsultationModal from "../components/ConsultationModal";
import { useNavigate } from "react-router-dom";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [consultSuccess, setConsultSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function useReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        },
        { threshold },
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible];
  }

  // Reusable reveal wrapper
  function Reveal({ children, delay = 0, className = "" }) {
    const [ref, visible] = useReveal();
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div className="font-sans text-[#2E2E2E]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
        
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Jost', 'Helvetica Neue', sans-serif; }

        @keyframes heroScale {
          from { opacity: 0; transform: scale(1.08); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes heroFadeDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .hero-bg { animation: heroScale 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .hero-badge { animation: heroFadeDown 0.9s ease 0.2s both; }
        .hero-title { animation: heroFadeDown 1s ease 0.4s both; }
        .hero-subtitle { animation: heroFadeUp 1s ease 0.6s both; }
        .hero-cta { animation: heroFadeUp 1s ease 0.8s both; }
        .hero-features { animation: heroFadeUp 1s ease 1s both; }

        .btn-shimmer {
          position: relative;
          overflow: hidden;
        }
        .btn-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s;
        }
        .btn-shimmer:hover::before {
          left: 100%;
        }

        .feature-badge {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .gold-line {
          display: inline-block;
          width: 60px;
          height: 2px;
          background: #C6A35A;
          vertical-align: middle;
        }
      `}</style>

      <section
        id="home"
        className="relative min-h-[65vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 pt-8 pb-8 sm:pt-0 sm:pb-0"
      >
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/80 via-[#0F2A44]/80 to-[#1a3a5c]/35" />

        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-white rounded-full"></div>
        </div>

        {/* Vertical accent line - left edge */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, #C6A35A 30%, #C6A35A 70%, transparent 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="hero-title font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mt-20 leading-[1.1] tracking-tight">
            Cleaning That Supports Better
            <br />
            <span className="italic text-[#C6A35A]">Living & Working</span>
          </h1>

          {/* Decorative line divider */}
          <div className="hero-subtitle flex items-center justify-center gap-4 mb-6">
            <span className="gold-line"></span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="text-[#C6A35A] opacity-60"
            >
              <path
                fill="currentColor"
                d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z"
              />
            </svg>
            <span className="gold-line"></span>
          </div>

          {/* Subtitle */}
          <p className="hero-subtitle font-body text-base sm:text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Reliable, detail-focused cleaning for homes, businesses, and
            accommodation spaces — creating clean, calm environments that
            support better living every day.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-row gap-3 justify-center mb-12">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="btn-shimmer group bg-[#C6A35A] text-[#0F2A44] px-4 py-2 rounded-full font-body font-semibold text-xs tracking-wide uppercase transition-all duration-300 hover:bg-[#B89245] hover:shadow-xl hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Your Free Quote</span>
            </button>

            <button
              onClick={() => navigate("/services")}
              className="group bg-transparent text-white px-4 py-2 rounded-full font-body font-semibold text-xs tracking-wide uppercase border border-white/40 hover:border-[#C6A35A] hover:bg-[#C6A35A]/10 transition-all duration-300"
            >
              Explore Services
            </button>
          </div>

          {/* Trust Badges */}
          <div className="hero-features flex flex-wrap gap-6 sm:gap-8 justify-center items-center">
            {[
              { text: "Always Reliable" },
              { text: "Professionally Managed" },
              { text: "Detail-Focused" },
            ].map((item, i) => (
              <span
                key={i}
                className="font-body text-sm font-medium text-white/90"
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="bg-[#e6e1d5] py-3 px-3 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Elegant Heading */}
          <h3 className="font-playfair text-3xl md:text-4xl text-[#0F2A44] mb-2">
            Areas We Currently Serve
          </h3>

          <div className="w-24 h-[2px] bg-[#C6A35A] mx-auto mb-3"></div>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {[
              "Wisbech",
              "Spalding",
              "Boston",
              "Bourne",
              "Peterborough",
              "Stamford",
              "Sheffield",
              "Holbeach",
            ].map((location, index) => (
              <div
                key={index}
                className="group bg-white border border-[#e5e5e5] rounded-md py-3 px-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-[#C6A35A] text-sm block mb-1">✦</span>
                <p className="text-[#0F2A44] font-medium text-sm tracking-normal group-hover:text-[#C6A35A] transition-colors duration-300">
                  {location}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Note */}
        <p className="text-[14px] mt-4 max-w-2xl mx-auto text-[#555]">
          Don’t see your location listed?{" "}
          <span
            onClick={() => navigate("/contact")}
            className="font-semibold text-[#C6A35A] cursor-pointer hover:underline"
          >
            Contact us
          </span>{" "}
          and we’ll discuss if we can arrange service in your area.
        </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="bg-[#F7F6F2] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-center text-4xl md:text-5xl text-[#0F2A44] mb-5">
            Cleaning Services Designed Around Your Needs
          </h2>
          <p className="text-center text-[#5A728A] max-w-3xl mx-auto mb-8 text-lg">
            Every space is different. That's why we provide tailored cleaning
            services designed to meet the specific needs of businesses, property
            operators, and households.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {[
              {
                id: "commercial",
                title: "Commercial Cleaning",
                description:
                  "Maintain a clean, professional environment for your team and visitors with reliable office and workspace cleaning delivered to consistent standards.",
                image: commercialImg,
              },
              {
                id: "accommodation",
                title: "Accommodation Cleaning",
                description:
                  "Efficient and thorough cleaning for serviced accommodation, Airbnb properties, and student turnovers — ensuring every guest arrives to a spotless space.",
                image: accommodationImg,
              },
              {
                id: "hospitality",
                title: "Hospitality Cleaning",
                description:
                  "High-standard cleaning solutions supporting hotels and hospitality environments where presentation and consistency matter most.",
                image: hospitalityImg,
              },
              {
                id: "domestic",
                title: "Domestic Cleaning",
                description:
                  "Dependable home cleaning services that help you enjoy a cleaner, calmer living space without the stress.",
                image: domesticImg,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg transition-all duration-300 border border-[#0F2A44]/10 hover:-translate-y-2 hover:shadow-xl hover:border-[#C6A35A]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="font-playfair text-2xl text-[#0F2A44] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#2E2E2E] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Updated Learn More Button */}
                <button
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="text-[#C6A35A] font-semibold hover:text-[#B89245] transition-colors duration-300 flex items-center gap-2"
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("/services")}
              className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0F2A44] py-10 sm:py-12 px-4 sm:px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-center text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            Why Clients Trust Talon Cleaning Services
          </h2>
          <p className="text-center text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
            We believe cleaning should bring confidence and peace of mind — not
            uncertainty. Our approach focuses on reliability, professionalism,
            and attention to detail in every service we deliver.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "✓",
                title: "Reliability You Can Count On",
                description:
                  "We show up on time and deliver consistent results you can depend on.",
              },
              {
                icon: "◈",
                title: "Attention to Detail",
                description:
                  "We focus on the small details that transform how a space looks and feels.",
              },
              {
                icon: "⚙",
                title: "Professionally Managed Service",
                description:
                  "Clear systems and structured processes ensure quality every time.",
              },
              {
                icon: "◆",
                title: "Peace of Mind",
                description:
                  "We handle the cleaning so you can focus on what matters most.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center px-4 sm:px-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C6A35A]/15 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-3xl sm:text-4xl text-[#C6A35A] transition-all duration-300 hover:bg-[#C6A35A] hover:text-[#0F2A44] hover:scale-110 cursor-pointer">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl mb-2 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative w-full h-60 lg:h-[300px] rounded-xl overflow-hidden shadow-2xl group">
              <img
                src={aboutImage}
                alt="Talon Cleaning team at work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle Brand Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/20 via-transparent to-[#C6A35A]/10"></div>
            </div>

            {/* Text Side */}
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl text-[#0F2A44] mb-6">
                Cleaning with Purpose
              </h2>

              <p className="text-[#2E2E2E] leading-relaxed mb-5 text-lg">
                Talon Cleaning Services was founded on a simple belief — clean
                spaces support better wellbeing, productivity, and everyday
                living.
              </p>

              <p className="text-[#2E2E2E] leading-relaxed mb-8 text-lg">
                We understand that whether at home, at work, or welcoming
                guests, the condition of a space affects how people feel. That’s
                why we go beyond basic cleaning to deliver dependable,
                professionally managed services that create environments people
                feel comfortable and confident in.
              </p>

              <button
                onClick={() => navigate("/about")}
                className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="bg-white py-18 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="block text-sm text-[#C6A35A] font-semibold">
                How It Works
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2A44] mb-3">
                Our <em className="text-[#C6A35A]">Process</em>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg">
                Simple, clear, and reliable — from first contact to ongoing
                support.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Central spine */}
            <div className="absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[#C6A35A]/40 to-transparent transform -translate-x-1/2 hidden md:block" />

            {[
              {
                n: 1,
                title: "Consultation",
                body: "We learn about your needs, space, and cleaning requirements to create a tailored solution.",
              },
              {
                n: 2,
                title: "Custom Plan",
                body: "We design a cleaning schedule and checklist suited to your environment and priorities.",
              },
              {
                n: 3,
                title: "Professional Cleaning",
                body: "Our trained team delivers thorough, detail-focused cleaning using clear standards.",
              },
              {
                n: 4,
                title: "Quality Assurance",
                body: "We ensure consistency through inspections, clear communication, and ongoing feedback.",
              },
              {
                n: 5,
                title: "Ongoing Support",
                body: "We remain flexible and responsive as your needs evolve — a true long-term partner.",
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex flex-col md:flex-row md:justify-between items-start mb-8 relative">
                  {/* Connector dot */}
                  <div className="absolute md:left-1/2 top-6 md:top-6 w-3 h-3 bg-[#C6A35A] rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(198,163,90,0.2)]" />

                  {/* Step box */}
                  <div
                    className={`bg-[#f8f7f4] rounded-lg p-6 border-l-4 border-[#C6A35A] shadow-md w-full md:w-5/12 ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-[#0F2A44] text-[#C6A35A] rounded-full flex items-center justify-center font-bold">
                        {step.n}
                      </div>
                      <h3 className="text-[#0F2A44] font-bold text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#FFF9F0] py-10 px-6"
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

      {/* Modals */}
      <QuoteModal
        showQuoteModal={showQuoteModal}
        setShowQuoteModal={setShowQuoteModal}
        quoteSuccess={quoteSuccess}
        setQuoteSuccess={setQuoteSuccess}
      />

      <ConsultationModal
        showConsultationModal={showConsultationModal}
        setShowConsultationModal={setShowConsultationModal}
        consultSuccess={consultSuccess}
        setConsultSuccess={setConsultSuccess}
      />
    </div>
  );
}
