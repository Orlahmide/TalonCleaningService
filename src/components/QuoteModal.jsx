import React from 'react';

export default function QuoteModal({ showQuoteModal, setShowQuoteModal, quoteSuccess, setQuoteSuccess }) {
    const handleQuoteSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Email sent successfully
                setQuoteSuccess(true);
                e.target.reset();

                setTimeout(() => {
                    setQuoteSuccess(false);
                    setShowQuoteModal(false);
                }, 3000);
            } else {
                // Handle server error
                const err = await response.json();
                alert(`Error sending quote: ${err.message}`);
            }

        } catch (error) {
            console.error('Quote submission error:', error);
            alert('Something went wrong. Please try again later.');
        }
    };

    if (!showQuoteModal) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
            onClick={() => { setShowQuoteModal(false); setQuoteSuccess(false); }}
        >
            <div
                className="bg-white rounded-lg w-full max-w-2xl relative my-8 p-6 md:p-12 flex flex-col max-h-[90vh] overflow-y-auto animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                <style>{`
                    @keyframes fadeIn {
                      from { opacity: 0; }
                      to { opacity: 1; }
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
                      animation: fadeIn 0.3s ease forwards;
                    }

                    .animate-slideUp {
                      animation: slideUp 0.3s ease;
                    }
                `}</style>

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
                        className="bg-[#C6A35A] text-[#0F2A44] px-6 py-3 md:px-10 md:py-3 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full"
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