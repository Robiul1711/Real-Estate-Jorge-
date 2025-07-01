import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import house from "@/assets/images/home.png";

const OpportunitiesLeftSide = () => {
  const slides = [house, house, house];

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[400px] sm:h-[500px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <p className="absolute top-4 left-4 text-white text-sm sm:text-base font-semibold px-4 py-1.5 bg-black/70 rounded-full">
                Residential
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Position */}
     <style jsx>{`
  .swiper-pagination {
    text-align: left !important;
    bottom: 15px !important;
    left: 15px !important;
    width: auto !important;
  }

  /* White dots */
  .swiper-pagination-bullet {
    background: white !important;
    opacity: 0.5;
  }

  /* Active dot */
  .swiper-pagination-bullet-active {
    background: white !important;
    opacity: 1;
  }
`}</style>

    </div>
  );
};

export default OpportunitiesLeftSide;
