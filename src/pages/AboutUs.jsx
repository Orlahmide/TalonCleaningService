import React, { useEffect, useRef, useState } from "react";
import faqHeroImage from "../assets/commercial.jpg";

/* ─────────────────────────────────────────────
   TALON CLEANING SERVICES — ABOUT PAGE
   Palette:  Navy #0F2A44  |  Gold #C6A35A  |  White #FFFFFF
   Tone:     Luxury editorial — refined, trustworthy, premium
───────────────────────────────────────────── */

// Simple intersection-observer hook for scroll reveals
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// Animated counter
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1600;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
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

const AboutUs = ({ onGetQuote = () => {} }) => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", backgroundColor: "#f8f7f4" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body    { font-family: 'Jost', 'Helvetica Neue', sans-serif; }

        @keyframes heroReveal {
          from { opacity: 0; transform: scale(1.06); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes titleDrop {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtitleRise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-bg    { animation: heroReveal 1.4s cubic-bezier(0.22,1,0.36,1) forwards; }
        .hero-title { animation: titleDrop 0.9s ease 0.3s both; }
        .hero-sub   { animation: subtitleRise 0.9s ease 0.6s both; }
        .hero-body  { animation: subtitleRise 0.9s ease 0.85s both; }

        .gold-rule {
          display: block;
          width: 56px;
          height: 2px;
          background: #C6A35A;
          margin: 0 auto 24px;
        }
        .gold-rule-left {
          display: block;
          width: 48px;
          height: 2px;
          background: #C6A35A;
          margin: 0 0 20px;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 24px;
          background: white;
          border-left: 3px solid #C6A35A;
          border-radius: 0 6px 6px 0;
          box-shadow: 0 2px 12px rgba(15,42,68,0.07);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .check-item:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 20px rgba(15,42,68,0.12);
        }

        .serve-card {
          background: linear-gradient(135deg, #0F2A44 0%, #1a3d5c 100%);
          border-radius: 8px;
          padding: 28px 24px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .serve-card::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 60px; height: 60px;
          background: rgba(198,163,90,0.12);
          border-radius: 0 8px 0 60px;
        }
        .serve-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(15,42,68,0.25);
        }

        .step-number {
          width: 48px;
          height: 48px;
          background: #C6A35A;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-center: center;
          font-size: 18px;
          font-weight: 700;
          flex-shrink: 0;
          font-family: 'Cormorant Garamond', serif;
        }

        .pillar-card {
          padding: 32px 28px;
          background: white;
          border-radius: 8px;
          border-top: 3px solid #C6A35A;
          box-shadow: 0 4px 24px rgba(15,42,68,0.08);
          transition: transform 0.3s ease;
        }
        .pillar-card:hover { transform: translateY(-4px); }

        .stat-block {
          text-align: center;
          padding: 32px 20px;
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 700;
          color: #C6A35A;
          line-height: 1;
        }
        .stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-top: 8px;
        }
        .stat-divider {
          width: 1px;
          background: rgba(198,163,90,0.3);
          align-self: stretch;
        }

        .cta-btn {
          display: inline-block;
          padding: 14px 36px;
          background: #C6A35A;
          color: white;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .cta-btn:hover {
          background: #b3913e;
          transform: translateY(-1px);
        }
        .cta-btn-outline {
          display: inline-block;
          padding: 13px 36px;
          background: transparent;
          color: white;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 2px;
          cursor: pointer;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .cta-btn-outline:hover {
          border-color: #C6A35A;
          background: rgba(198,163,90,0.1);
        }

        .section-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C6A35A;
          margin-bottom: 12px;
          display: block;
        }

        .quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 120px;
          line-height: 0.6;
          color: #C6A35A;
          opacity: 0.2;
          position: absolute;
          top: 20px;
          left: 20px;
        }
      `}</style>

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "60vh", display: "flex", alignItems: "center", marginTop: "80px" }}>
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${faqHeroImage})` }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(110deg, rgba(15,42,68,0.92) 0%, rgba(15,42,68,0.80) 50%, rgba(15,42,68,0.55) 100%)"
        }} />

        {/* Decorative gold line */}
        <div className="absolute left-0 top-0 bottom-0" style={{ width: "4px", background: "linear-gradient(180deg, transparent, #C6A35A 30%, #C6A35A 70%, transparent)" }} />

        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24" style={{ maxWidth: "900px" }}>
          <span className="section-label hero-sub" style={{ color: "#C6A35A" }}>About Us</span>
          <h1
            className="font-display hero-title"
            style={{ fontSize: "clamp(42px, 7vw, 82px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: "28px" }}
          >
            Talon Cleaning<br />
            <em style={{ color: "#C6A35A" }}>Services</em>
          </h1>
          <p
            className="hero-body font-body"
            style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, maxWidth: "560px", marginBottom: "40px" }}
          >
            Born from a simple belief: <strong style={{ color: "white" }}>people thrive in clean spaces.</strong>{" "}
            Whether at home, at work, or in places that welcome guests, a clean environment supports focus,
            reduces stress, and contributes to healthier everyday living.
          </p>
        </div>
      </section>

        
      <section className="bg-[#f8f7f4] py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left: text */}
    <Reveal>
      <div>
        <span className="block text-sm text-[#C6A35A] font-semibold mb-2">What We Do</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2A44] leading-tight mb-6">
          More Than Cleaning — <br />
          <em className="text-[#C6A35A] not-italic">We Create Peace of Mind</em>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
          We provide professional cleaning services for businesses, property operators, and households —
          supporting offices, accommodation providers, hospitality venues, and domestic clients.
        </p>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
          From regular workplace cleaning and accommodation turnovers to deep cleaning and general maintenance,
          our goal is consistent, reliable cleaning that people can truly depend on.
        </p>
        <button
          onClick={onGetQuote}
          className="bg-[#C6A35A] text-[#0F2A44] font-semibold px-6 py-3 rounded-lg hover:bg-[#b89347] transition-all duration-300"
        >
          Request a Quote
        </button>
      </div>
    </Reveal>

    {/* Right: pull-quote card */}
    <Reveal delay={150}>
      <div className="relative bg-[#0F2A44] rounded-lg p-12 sm:p-10 shadow-2xl text-white">
        <span className="text-6xl absolute -top-8 -left-6 text-[#C6A35A] font-bold">"</span>
        <p className="font-display text-lg sm:text-xl md:text-2xl italic leading-relaxed z-10 relative mb-6">
          We focus on the details that truly matter — the things people notice when they walk into a space
          and instantly feel comfortable, confident, and cared for.
        </p>
        <span className="block w-10 h-1 bg-[#C6A35A] mb-4" />
        <p className="text-sm sm:text-base tracking-widest uppercase text-[#C6A35A]">
          The Talon Promise
        </p>
      </div>
    </Reveal>
  </div>
</section>


      {/* ── 4. TRUST PILLARS ────────────────────────────────── */}
      <section style={{ background: "white", padding: "30px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="section-label" style={{ textAlign: "center", display: "block" }}>Our Commitment</span>
              <h2 className="font-display" style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: "#0F2A44", marginBottom: "16px" }}>
                Built on Trust, Reliability, and <em style={{ color: "#C6A35A" }}>Care</em>
              </h2>
              <p className="font-body" style={{ fontSize: "16px", color: "#8a8f96", maxWidth: "520px", margin: "0 auto" }}>
                At the heart of our business is a commitment to doing things properly.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              {title: "Always On Time", body: "Showing up when we say we will — every visit, no exceptions." },
              { title: "Consistent Quality", body: "Delivering high standards on every clean, not just the first." },
              {  title: "Clear Communication", body: "Communicating professionally, openly, and without jargon." },
              {title: "Respectful Service", body: "Treating every space — and the people in it — with genuine respect." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="pillar-card">
                  <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 700, color: "#0F2A44", marginBottom: "10px" }}>{item.title}</h3>
                  <p className="font-body" style={{ fontSize: "15px", lineHeight: 1.7, color: "#6b7280" }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div style={{
              marginTop: "48px",
              padding: "28px 36px",
              background: "#f8f7f4",
              borderLeft: "4px solid #C6A35A",
              borderRadius: "0 6px 6px 0"
            }}>
              <p className="font-display" style={{ fontSize: "clamp(16px, 2vw, 19px)", fontStyle: "italic", color: "#0F2A44", lineHeight: 1.7 }}>
                "We believe cleaning is a service built on trust — because our clients invite us into their workplaces,
                their properties, and sometimes their homes. That trust is something we never take lightly."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. WHO WE SERVE ─────────────────────────────────── */}
      <section style={{ background: "#f8f7f4", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="section-label" style={{ display: "block" }}>Our Clients</span>
              <h2 className="font-display" style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: "#0F2A44", marginBottom: "16px" }}>
                Who We <em style={{ color: "#C6A35A" }}>Serve</em>
              </h2>
              <p className="font-body" style={{ fontSize: "16px", color: "#8a8f96", maxWidth: "500px", margin: "0 auto" }}>
                Each space has different needs. We tailor our approach to how the space is used.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {[
              { title: "Offices",           sub: "Corporate workspaces",               },
              { title: "Accommodation",     sub: "Serviced & short-let properties",     },
              { title: "Hospitality",       sub: "Hotels & hospitality venues" },
              { title: "Property Managers", sub: "Landlords & property operators" },
              { title: "Households",        sub: "Busy homeowners" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="serve-card">
                  <h3 className="font-display" style={{ fontSize: "20px", fontWeight: 700, color: "#C6A35A", marginBottom: "6px" }}>{item.title}</h3>
                  <p className="font-body" style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>{item.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MISSION / VISION / VALUES — dark band ────────── */}
      <section style={{ background: "#0F2A44", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="section-label" style={{ display: "block" }}>Our Foundation</span>
              <h2 className="font-display" style={{ fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 700, color: "white" }}>
                Mission, Vision & <em style={{ color: "#C6A35A" }}>Values</em>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px" }}>
            {[
              {
                label: "Mission",
                heading: "What We're Here to Do",
                body: "To make everyday living and working easier by delivering reliable, high-quality cleaning services that create clean, healthy, and welcoming environments — for businesses, property operators, and households alike.",
              },
              {
                label: "Vision",
                heading: "Where We're Headed",
                body: "To redefine cleaning as an essential service that enhances everyday living — creating spaces where people feel confident, focused, and genuinely at their best.",
              },
              {
                label: "Values",
                heading: "How We Operate",
                body: "We provide reliable, detail-focused cleaning for offices, accommodation, and hospitality spaces — helping clients maintain high standards with consistent, professionally managed service.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div style={{
                  padding: "40px 32px",
                  borderTop: "2px solid rgba(198,163,90,0.25)",
                  position: "relative",
                }}>
                  <span className="section-label" style={{ display: "block" }}>{item.label}</span>
                  <h3 className="font-display" style={{ fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "16px" }}>
                    {item.heading}
                  </h3>
                  <p className="font-body" style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(255,255,255,0.72)" }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PROCESS — alternating timeline ───────────────── */}
      <section className="bg-white py-10 px-6">
  <div className="max-w-4xl mx-auto">
    <Reveal>
      <div className="text-center mb-16">
        <span className="block text-sm text-[#C6A35A] font-semibold">How It Works</span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2A44] mb-3">
          Our <em className="text-[#C6A35A]">Process</em>
        </h2>
        <p className="text-gray-500 text-base sm:text-lg">
          Simple, clear, and reliable — from first contact to ongoing support.
        </p>
      </div>
    </Reveal>

    <div className="relative">
      {/* Central spine */}
      <div className="absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[#C6A35A]/40 to-transparent transform -translate-x-1/2 hidden md:block" />

      {[
        { n: 1, title: "Consultation", body: "We learn about your needs, space, and cleaning requirements to create a tailored solution." },
        { n: 2, title: "Custom Plan", body: "We design a cleaning schedule and checklist suited to your environment and priorities." },
        { n: 3, title: "Professional Cleaning", body: "Our trained team delivers thorough, detail-focused cleaning using clear standards." },
        { n: 4, title: "Quality Assurance", body: "We ensure consistency through inspections, clear communication, and ongoing feedback." },
        { n: 5, title: "Ongoing Support", body: "We remain flexible and responsive as your needs evolve — a true long-term partner." },
      ].map((step, i) => (
        <Reveal key={i} delay={i * 100}>
          <div className="flex flex-col md:flex-row md:justify-between items-start mb-8 relative">
            {/* Connector dot */}
            <div className="absolute md:left-1/2 top-6 md:top-6 w-3 h-3 bg-[#C6A35A] rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(198,163,90,0.2)]" />

            {/* Step box */}
            <div className={`bg-[#f8f7f4] rounded-lg p-6 border-l-4 border-[#C6A35A] shadow-md w-full md:w-5/12 ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-[#0F2A44] text-[#C6A35A] rounded-full flex items-center justify-center font-bold">
                  {step.n}
                </div>
                <h3 className="text-[#0F2A44] font-bold text-lg">{step.title}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
