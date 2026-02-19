import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // added Navigation
import "swiper/css";
import "swiper/css/navigation"; // import navigation styles
import "swiper/css/autoplay";

const testimonials = [
  { text: "Professional, reliable, and consistently excellent. Talon Cleaning Services has made managing our property completely stress-free.", name: "Olivia Johnson" },
  { text: "The attention to detail is outstanding. Our workspace always feels fresh and welcoming.", name: "Michael Smith" },
  { text: "A dependable team we can truly trust — highly recommended.", name: "Sophia Williams" },
  { text: "Our offices have never looked better. Truly professional service.", name: "Daniel Lee" },
  { text: "Fast, efficient, and thorough cleaning every time.", name: "Emma Davis" },
  { text: "Highly skilled team. They always go above and beyond.", name: "Liam Brown" },
  { text: "Wonderful work done by the team, 5 stars!", name: "Adelina Ajuzazobona" },
  { text: "Highly skilled team. They always go above and beyond.", name: "Liam Brown" },
];

// Fillers to always show multiples of 4
const slides = [...testimonials];
while (slides.length % 4 !== 0) slides.push({ text: "", name: "" });

export default function Testimonials() {
  return (
    <section className="bg-white py-8 px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="font-playfair text-center text-4xl md:text-5xl text-[#0F2A44] mb-16">
          What Our Clients Say
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]} // include Navigation
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {slides.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F7F6F2] p-10 rounded-lg relative h-full flex flex-col justify-center transition-transform duration-700 ease-in-out hover:scale-[1.02] shadow-lg">
                <div className="absolute top-5 left-8 text-8xl text-[#C6A35A]/30 font-playfair leading-none">
                  "
                </div>
                <p className="italic text-[#2E2E2E] leading-relaxed relative z-10">
                  {t.text || "\u00A0"} {/* filler */}
                </p>
                {t.name && (
                  <p className="mt-4 text-right font-semibold text-[#0F2A44] relative z-10">
                    — {t.name}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Gold Arrows */}
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full shadow-md cursor-pointer hover:bg-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full shadow-md cursor-pointer hover:bg-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
