import React, { useState } from "react";

export default function QuoteModal({ showQuoteModal, setShowQuoteModal }) {
  const [quoteMessage, setQuoteMessage] = useState(null); // { type, text }

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setQuoteMessage({
          type: "success",
          text: "Your quote request has been received. Our team will reach out to you soon.",
        });

        // Send the auto-reply
        try {
          await fetch("/api/sendAutoReply", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
            }),
          });
        } catch (err) {
          console.error("Auto-reply failed:", err);
        }

        e.target.reset();
      } else {
        setQuoteMessage({
          type: "error",
          text: "An error occurred. Please try again later, or contact us via email or phone for assistance.",
        });
      }
    } catch (err) {
      setQuoteMessage({
        type: "error",
        text: "An error occurred. Please try again later, or contact us via email or phone for assistance.",
      });
    }

    // Auto-hide and close modal after 5 seconds
    setTimeout(() => {
      setQuoteMessage(null);
      setShowQuoteModal(false); // close the modal whether success or error
    }, 3000);
  };

  if (!showQuoteModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={() => {
        setShowQuoteModal(false);
        setQuoteSuccess(false);
      }}
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
                      @keyframes slideInFromRight {
                    0% { transform: translateX(100%); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                    }
                    .animate-slideInFromRight {
                    animation: slideInFromRight 0.5s ease forwards;
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

                      @keyframes fadeInTop {
                        from { transform: translateY(-20px); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                    .animate-fadeInTop {
                        animation: fadeInTop 0.3s ease forwards;
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
          onClick={() => {
            setShowQuoteModal(false);
            setQuoteSuccess(false);
          }}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl font-light text-[#2E2E2E] hover:text-[#C6A35A] transition-colors z-60"
        >
          &times;
        </button>

        {/* Modal Heading */}
        <h2 className="font-playfair text-2xl md:text-3xl text-[#0F2A44] mb-6 md:mb-8">
          Get a Free Quote
        </h2>
        {/* SUCCESS / ERROR MESSAGE */}
        {quoteMessage && (
          <div
            className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg max-w-xs text-center transition-all duration-500 transform
            ${quoteMessage.type === "success"
                ? "bg-green-100 border border-green-300 text-green-800"
                : "bg-red-100 border border-red-300 text-red-800"
              }
            animate-slideInFromRight
            `}
          >
            <strong>
              {quoteMessage.type === "success" ? "Success!" : "Error!"}
            </strong>
            <br />
            {quoteMessage.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleQuoteSubmit} className="space-y-4 md:space-y-5">
          <FormField label="Full Name *" name="name" type="text" required />
          <FormField
            label="Email Address *"
            name="email"
            type="email"
            required
          />
          <FormField label="Phone Number *" name="phone" type="tel" required />
          <FormSelect
            label="Type of Service Needed *"
            name="service"
            required
            options={[
              { value: "", label: "Select a service" },
              { value: "commercial", label: "Commercial" },
              { value: "accommodation", label: "Accommodation" },
              { value: "hospitality", label: "Hospitality" },
              { value: "domestic", label: "Domestic" },
              { value: "other", label: "Others" },
            ]}
          />
          <FormSelect
            label="Cleaning Frequency *"
            name="frequency"
            required
            options={[
              { value: "", label: "Select frequency" },
              { value: "one-off", label: "One-off" },
              { value: "daily", label: "Daily" },
              { value: "weekly", label: "Weekly" },
              { value: "bi-weekly", label: "Bi-weekly" },
              { value: "monthly", label: "Monthly" },
              { value: "other", label: "Others" },
            ]}
          />
          <FormSelect
            label="Preferred Method of Communication *"
            name="contact"
            required
            options={[
              { value: "", label: "Select method" },
              { value: "phone", label: "Phone call" },
              { value: "email", label: "Email" },
              { value: "text", label: "Text Message" },
              { value: "text", label: "Whatsapp" },

            ]}
          />
          <FormTextarea label="Message / Requirements" name="message" />

          <button
            type="submit"
            className="bg-[#C6A35A] text-[#0F2A44] px-6 py-3 md:px-10 md:py-3 rounded font-semibold hover:bg-[#B89245] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full"
          >
            Submit Quote Request
          </button>
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
          <option key={index} value={option.value}>
            {option.label}
          </option>
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
