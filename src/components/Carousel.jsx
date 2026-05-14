import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Carousel = () => {
  const carouselItems = [
    { src: "/home-1.jpg", title: "Innovating the Future" },
    { src: "/home-2.jpg", title: "Collaborative Learning" },
    { src: "/home-3.jpg", title: "Tech Symposium" },
    { src: "/home-4.png", title: "Hackathon Winners" },
    { src: "/home-5.jpg", title: "Alumni Meet & Greet" },
    { src: "/home-6.jpg", title: "Data Science Summit" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="w-full"
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // when window width is >= 868px
          868: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
        }}
      >
        {carouselItems.map((item, index) => {
          // Alternating tilt for a playful polaroid effect
          const hoverTilt = index % 2 === 0 ? "hover:-rotate-2" : "hover:rotate-2";

          return (
            <SwiperSlide key={index} className="py-12 px-3">
              <div 
                className={`group relative bg-white p-3 pb-4 rounded-sm shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.4)] transition-all duration-500 ease-out hover:-translate-y-4 ${hoverTilt} border-2 border-neutral-200/50 group-hover:border-indigo-500 group-hover:ring-4 group-hover:ring-teal-400/50 flex flex-col`}
              >
                <img
                  src={item.src}
                  alt={`Carousel image ${index + 1}`}
                  className="h-[280px] w-full rounded-sm object-cover brightness-95 group-hover:brightness-105 transition-all duration-500"
                  draggable={false}
                />
                <div className="mt-4 mb-2 text-center">
                  <h4 className="text-neutral-800 font-semibold tracking-tight font-handwriting text-lg">{item.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
