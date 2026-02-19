import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContact() {
  const phoneNumber = "+07466311134";
  const whatsappNumber = "2348067014209";

  const [isMounted, setIsMounted] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(36);

  useEffect(() => {
    setIsMounted(true); // Component now allowed to render

    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop < windowHeight) {
        const overlap = windowHeight - footerTop;
        setBottomOffset(36 + overlap + 16);
      } else {
        setBottomOffset(36);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null; // Don't render on server or before mount

  return (
    <div
      style={{ bottom: `${bottomOffset}px` }}
      className="fixed right-6 flex flex-col gap-4 z-30 transition-all duration-300"
    >
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-green-600 p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      <a
        href={`tel:${phoneNumber}`}
        className="bg-[#C6A35A] hover:bg-yellow-400 p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaPhoneAlt className="text-white text-2xl" />
      </a>
    </div>
  );
}
