import React, { useState, useEffect } from 'react';
import commercialImg from '../assets/commercial.jpg'
import accommodationImg from '../assets/accommodation.jpg'
import hospitalityImg from '../assets/hospitality.jpg'
import domesticImg from '../assets/domestic.jpg'
import heroImage from '../assets/domestic.jpg'
import aboutImage from '../assets/accommodation.jpg'



export default function TalonCleaningWebsite() {
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showConsultationModal, setShowConsultationModal] = useState(false);
    const [quoteSuccess, setQuoteSuccess] = useState(false);
    const [consultSuccess, setConsultSuccess] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (showQuoteModal || showConsultationModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showQuoteModal, showConsultationModal]);

    const handleQuoteSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Quote form submitted:', Object.fromEntries(formData));
        setQuoteSuccess(true);
        e.target.reset();
        setTimeout(() => {
            setQuoteSuccess(false);
            setShowQuoteModal(false);
        }, 3000);
    };

    const handleConsultationSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Consultation form submitted:', Object.fromEntries(formData));
        setConsultSuccess(true);
        e.target.reset();
        setTimeout(() => {
            setConsultSuccess(false);
            setShowConsultationModal(false);
        }, 3000);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="font-sans text-[#2E2E2E]">
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

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease;
        }
      `}</style>

            {/* Navigation */}
            <nav className={`bg-[#1a1a33] fixed w-full top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-lg'
                }`}>
                <div className="max-w-7xl mx-auto px-10 flex justify-between items-center h-20">
                    <a href="#" className="font-playfair text-2xl font-bold text-white flex items-center gap-2">
                        <span className="text-3xl">🦅</span>
                        TALON CLEANING
                    </a>

                    <div className="hidden md:flex gap-10 items-center">
                        <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#C6A35A] transition-colors duration-300">
                            Home
                        </button>
                        <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#C6A35A] transition-colors duration-300">
                            Services
                        </button>
                        <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#C6A35A] transition-colors duration-300">
                            About
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#C6A35A] transition-colors duration-300">
                            Contact
                        </button>
                        <button
                            onClick={() => setShowQuoteModal(true)}
                            className="bg-[#C6A35A] text-[#0F2A44] px-7 py-3 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Get a Free Quote
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="relative pt-48 pb-32 px-6 text-center mt-20 overflow-hidden"
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />

                {/* Dark Gradient Overlay (keeps text readable) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A44]/90 via-[#0F2A44]/80 to-[#5A728A]/70" />

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto animate-fadeInUp text-white">
                    <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-5 tracking-tight">
                        Cleaning That Supports Better Living and Working
                    </h1>

                    <p className="text-2xl text-[#C6A35A] mb-4 font-semibold">
                        Clean Spaces. Clear Standards. Total Peace of Mind.
                    </p>

                    <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                        At Talon Cleaning Services, we provide reliable, detail-focused cleaning for homes,
                        businesses, and accommodation spaces — creating clean, calm environments that support
                        better living and working every day.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
                        <button
                            onClick={() => setShowQuoteModal(true)}
                            className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            Get a Free Quote
                        </button>

                        <button
                            onClick={() => scrollToSection('services')}
                            className="bg-transparent text-white px-10 py-4 rounded font-semibold border-2 border-white hover:bg-white hover:text-[#0F2A44] transition-all duration-300"
                        >
                            Explore Our Services
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-10 justify-center text-white/90 text-sm">
                        <span className="flex items-center gap-2">
                            <span className="text-[#C6A35A] font-bold">✓</span> Reliable
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-[#C6A35A] font-bold">✓</span> Professionally Managed
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-[#C6A35A] font-bold">✓</span> Detail-Focused
                        </span>
                    </div>
                </div>
            </section>


            {/* Trust Strip */}
            <section className="bg-white py-16 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h3 className="font-playfair text-3xl text-[#0F2A44] mb-10">
                        Cleaning Solutions You Can Depend On
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {['Commercial Cleaning', 'Accommodation Turnovers', 'Hospitality Cleaning', 'Domestic Cleaning', 'Deep Cleaning Services'].map((item, index) => (
                            <div key={index} className="flex items-center justify-center gap-3 text-[#2E2E2E] font-medium animate-fadeIn opacity-0" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
                                <span className="text-[#C6A35A] text-xl font-bold">✓</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="bg-[#F7F6F2] py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-playfair text-center text-4xl md:text-5xl text-[#0F2A44] mb-5">
                        Cleaning Services Designed Around Your Needs
                    </h2>
                    <p className="text-center text-[#5A728A] max-w-3xl mx-auto mb-16 text-lg">
                        Every space is different. That's why we provide tailored cleaning services designed to meet
                        the specific needs of businesses, property operators, and households.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {[
                            {
                                title: 'Commercial Cleaning',
                                description:
                                    'Maintain a clean, professional environment for your team and visitors with reliable office and workspace cleaning delivered to consistent standards.',
                                image: commercialImg
                            },
                            {
                                title: 'Accommodation Cleaning',
                                description:
                                    'Efficient and thorough cleaning for serviced accommodation, Airbnb properties, and student turnovers — ensuring every guest arrives to a spotless space.',
                                image: accommodationImg
                            },
                            {
                                title: 'Hospitality Cleaning',
                                description:
                                    'High-standard cleaning solutions supporting hotels and hospitality environments where presentation and consistency matter most.',
                                image: hospitalityImg
                            },
                            {
                                title: 'Domestic Cleaning',
                                description:
                                    'Dependable home cleaning services that help you enjoy a cleaner, calmer living space without the stress.',
                                image: domesticImg
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-10 rounded-lg transition-all duration-300 border border-[#0F2A44]/10 hover:-translate-y-2 hover:shadow-xl hover:border-[#C6A35A] cursor-pointer"
                            >
                                {/* Image */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover"
                                />
                                <h3 className="font-playfair text-2xl text-[#0F2A44] mb-4">{service.title}</h3>
                                <p className="text-[#2E2E2E] leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <button
                            onClick={() => setShowConsultationModal(true)}
                            className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            View All Services
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-[#0F2A44] py-24 px-6 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-playfair text-center text-4xl md:text-5xl mb-5">
                        Why Clients Trust Talon Cleaning Services
                    </h2>
                    <p className="text-center text-white/80 max-w-3xl mx-auto mb-16 text-lg">
                        We believe cleaning should bring confidence and peace of mind — not uncertainty. Our approach
                        focuses on reliability, professionalism, and attention to detail in every service we deliver.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { icon: '✓', title: 'Reliability You Can Count On', description: 'We show up on time and deliver consistent results you can depend on.' },
                            { icon: '◈', title: 'Attention to Detail', description: 'We focus on the small details that transform how a space looks and feels.' },
                            { icon: '⚙', title: 'Professionally Managed Service', description: 'Clear systems and structured processes ensure quality every time.' },
                            { icon: '◆', title: 'Peace of Mind', description: 'We handle the cleaning so you can focus on what matters most.' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-[#C6A35A]/15 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl text-[#C6A35A] transition-all duration-300 hover:bg-[#C6A35A] hover:text-[#0F2A44] hover:scale-110 cursor-pointer">
                                    {item.icon}
                                </div>
                                <h3 className="font-playfair text-2xl mb-4">{item.title}</h3>
                                <p className="text-white/85 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-white py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Image Side */}
                        <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
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
                                Talon Cleaning Services was founded on a simple belief — clean spaces
                                support better wellbeing, productivity, and everyday living.
                            </p>

                            <p className="text-[#2E2E2E] leading-relaxed mb-8 text-lg">
                                We understand that whether at home, at work, or welcoming guests,
                                the condition of a space affects how people feel. That’s why we go
                                beyond basic cleaning to deliver dependable, professionally managed
                                services that create environments people feel comfortable and confident in.
                            </p>

                            <button
                                onClick={() => setShowConsultationModal(true)}
                                className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                Learn More About Us
                            </button>
                        </div>

                    </div>
                </div>
            </section>


            {/* How It Works */}
            <section className="bg-[#F7F6F2] py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-playfair text-center text-4xl md:text-5xl text-[#0F2A44] mb-16">
                        Simple. Reliable. Effective.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { number: '1', title: 'Consultation', description: 'We learn about your space and cleaning requirements.' },
                            { number: '2', title: 'Custom Plan', description: 'A tailored cleaning schedule designed around your needs.' },
                            { number: '3', title: 'Professional Cleaning', description: 'Our team delivers thorough, detail-focused service.' },
                            { number: '4', title: 'Quality Assurance', description: 'Ongoing checks ensure consistent, high standards.' }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-18 h-18 bg-[#C6A35A] text-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold font-playfair">
                                    {step.number}
                                </div>
                                <h3 className="font-playfair text-xl text-[#0F2A44] mb-4">{step.title}</h3>
                                <p className="text-[#2E2E2E] leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-playfair text-center text-4xl md:text-5xl text-[#0F2A44] mb-16">
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            'Professional, reliable, and consistently excellent. Talon Cleaning Services has made managing our property completely stress-free.',
                            'The attention to detail is outstanding. Our workspace always feels fresh and welcoming.',
                            'A dependable team we can truly trust — highly recommended.'
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-[#F7F6F2] p-10 rounded-lg relative">
                                <div className="absolute top-5 left-8 text-8xl text-[#C6A35A]/30 font-playfair leading-none">"</div>
                                <p className="italic text-[#2E2E2E] leading-relaxed relative z-10">{testimonial}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="bg-gradient-to-br from-[#0F2A44] to-[#5A728A] py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-playfair text-4xl md:text-5xl mb-5">
                        Ready for a Cleaner, Stress-Free Space?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 leading-relaxed">
                        Let Talon Cleaning Services take care of the cleaning while you focus on running your
                        business, hosting your guests, or enjoying your home.
                    </p>
                    <button
                        onClick={() => setShowQuoteModal(true)}
                        className="bg-[#C6A35A] text-[#0F2A44] px-10 py-4 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Request Your Free Quote Today
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0F2A44] text-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                        <div>
                            <h3 className="font-playfair text-xl mb-5 text-[#C6A35A]">Talon Cleaning Services</h3>
                            <p className="text-white/80">
                                Reliable, detail-focused cleaning for commercial, accommodation, hospitality, and
                                domestic environments.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-playfair text-xl mb-5 text-[#C6A35A]">Services</h3>
                            <ul className="space-y-3">
                                <li><button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-[#C6A35A] transition-colors">Commercial Cleaning</button></li>
                                <li><button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-[#C6A35A] transition-colors">Accommodation Cleaning</button></li>
                                <li><button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-[#C6A35A] transition-colors">Hospitality Cleaning</button></li>
                                <li><button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-[#C6A35A] transition-colors">Domestic Cleaning</button></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-playfair text-xl mb-5 text-[#C6A35A]">Company</h3>
                            <ul className="space-y-3">
                                <li><button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-[#C6A35A] transition-colors">About Us</button></li>
                                <li><button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-[#C6A35A] transition-colors">Our Services</button></li>
                                <li><button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-[#C6A35A] transition-colors">Contact</button></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-playfair text-xl mb-5 text-[#C6A35A]">Contact Us</h3>
                            <ul className="space-y-3 text-white/80">
                                <li>📞 Phone Number</li>
                                <li>✉ Email Address</li>
                                <li>📍 Service Areas</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-8 border-t border-white/10 text-white/60">
                        <p>© 2026 Talon Cleaning Services — All Rights Reserved</p>
                    </div>
                </div>
            </footer>

            {/* Quote Modal */}
            {showQuoteModal && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
                    <div className="bg-white rounded-lg w-full max-w-2xl relative my-8 p-6 md:p-12
                    flex flex-col max-h-[90vh] overflow-y-auto animate-slideUp">

                        {/* Close Button */}
                        <button
                            onClick={() => { setShowQuoteModal(false); setQuoteSuccess(false); }}
                            className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl font-light text-[#2E2E2E] hover:text-[#C6A35A] transition-colors z-50"
                        >
                            &times;
                        </button>

                        {/* Modal Heading */}
                        <h2 className="font-playfair text-2xl md:text-3xl text-[#0F2A44] mb-6 md:mb-8">
                            Get a Free Quote
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleQuoteSubmit} className="space-y-4 md:space-y-5">
                            <FormField label="Full Name *" name="name" type="text" required />
                            <FormField label="Email Address *" name="email" type="email" required />
                            <FormField label="Phone Number *" name="phone" type="tel" required />
                            <FormSelect
                                label="Type of Service Needed *"
                                name="service"
                                required
                                options={[
                                    { value: '', label: 'Select a service' },
                                    { value: 'commercial', label: 'Commercial' },
                                    { value: 'accommodation', label: 'Accommodation' },
                                    { value: 'hospitality', label: 'Hospitality' },
                                    { value: 'domestic', label: 'Domestic' },
                                    { value: 'other', label: 'Others' }
                                ]}
                            />
                            <FormSelect
                                label="Cleaning Frequency *"
                                name="frequency"
                                required
                                options={[
                                    { value: '', label: 'Select frequency' },
                                    { value: 'one-off', label: 'One-off' },
                                    { value: 'daily', label: 'Daily' },
                                    { value: 'weekly', label: 'Weekly' },
                                    { value: 'bi-weekly', label: 'Bi-weekly' },
                                    { value: 'monthly', label: 'Monthly' },
                                    { value: 'other', label: 'Others' }
                                ]}
                            />
                            <FormSelect
                                label="Preferred Method of Communication *"
                                name="contact"
                                required
                                options={[
                                    { value: '', label: 'Select method' },
                                    { value: 'phone', label: 'Phone call' },
                                    { value: 'email', label: 'Email' },
                                    { value: 'text', label: 'Text Message' }
                                ]}
                            />
                            <FormTextarea label="Message / Requirements" name="message" />

                            <button
                                type="submit"
                                className="bg-[#C6A35A] text-[#0F2A44] px-6 py-3 md:px-10 md:py-3 rounded font-semibold
                     hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full"
                            >
                                Submit Quote Request
                            </button>

                            {quoteSuccess && (
                                <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded mt-4">
                                    <strong>Thank you!</strong><br />
                                    Your quote request has been received. Our team will reach out to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}


            {/* Consultation Modal */}
            {showConsultationModal && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
                    <div className="bg-white rounded-lg w-full max-w-2xl relative my-8 p-6 md:p-12
                    flex flex-col max-h-[90vh] overflow-y-auto animate-slideUp">

                        {/* Close Button */}
                        <button
                            onClick={() => { setShowConsultationModal(false); setConsultSuccess(false); }}
                            className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl font-light text-[#2E2E2E] hover:text-[#C6A35A] transition-colors z-50"
                        >
                            &times;
                        </button>

                        {/* Modal Heading */}
                        <h2 className="font-playfair text-2xl md:text-3xl text-[#0F2A44] mb-6 md:mb-8">
                            Book a Free Consultation
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleConsultationSubmit} className="space-y-4 md:space-y-5">
                            <FormField label="Full Name *" name="name" type="text" required />
                            <FormField label="Email Address *" name="email" type="email" required />
                            <FormField label="Phone Number *" name="phone" type="tel" required />
                            <FormSelect
                                label="Type of Service Needed *"
                                name="service"
                                required
                                options={[
                                    { value: '', label: 'Select a service' },
                                    { value: 'commercial', label: 'Commercial' },
                                    { value: 'accommodation', label: 'Accommodation' },
                                    { value: 'hospitality', label: 'Hospitality' },
                                    { value: 'domestic', label: 'Domestic' },
                                    { value: 'other', label: 'Others' }
                                ]}
                            />
                            <FormSelect
                                label="Preferred Method of Communication *"
                                name="contact"
                                required
                                options={[
                                    { value: '', label: 'Select method' },
                                    { value: 'phone', label: 'Phone call' },
                                    { value: 'email', label: 'Email' },
                                    { value: 'text', label: 'Text Message' }
                                ]}
                            />
                            <FormTextarea label="Message / Requirements" name="message" />

                            <button
                                type="submit"
                                className="bg-[#C6A35A] text-[#0F2A44] px-6 py-3 md:px-10 md:py-3 rounded font-semibold
                     hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full"
                            >
                                Book Consultation
                            </button>

                            {consultSuccess && (
                                <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded mt-4">
                                    <strong>Thank you!</strong><br />
                                    Your consultation request has been received. Our team will reach out to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}

// Form Components
function FormField({ label, name, type, required }) {
    return (
        <div>
            <label className="block mb-2 text-[#2E2E2E] font-medium">{label}</label>
            <input
                type={type}
                name={name}
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C6A35A] transition-colors"
            />
        </div>
    );
}

function FormSelect({ label, name, required, options }) {
    return (
        <div>
            <label className="block mb-2 text-[#2E2E2E] font-medium">{label}</label>
            <select
                name={name}
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C6A35A] transition-colors"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

function FormTextarea({ label, name }) {
    return (
        <div>
            <label className="block mb-2 text-[#2E2E2E] font-medium">{label}</label>
            <textarea
                name={name}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C6A35A] transition-colors resize-y"
            />
        </div>
    );
}