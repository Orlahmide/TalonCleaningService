import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
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
    <section className="bg-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-center text-4xl md:text-5xl text-[#0F2A44] mb-16">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1000} // smooth transition
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
        </Swiper>
      </div>
    </section>
  );
}
