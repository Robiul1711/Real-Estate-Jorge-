import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import blog1 from "../../assets/images/blog.png";
import blog2 from "../../assets/images/blog1.png";
import blog3 from "../../assets/images/blog2.png";
import { MoveLeft, MoveRight } from "lucide-react";

const blogData = [
  {
    image: blog1,
    title: "The Powerful Thinking Skill Nobody Ever Taught You",
    text: "I am writing this series of letters on the art of investing, addressed to a young investor, with the aim to provide timeless wisdom and practical advice that helped me when I was starting out. My goal is to help young investors navigate the complexities of the financial world, avoid misinformation, and harness the power of",
  },
  {
    image: blog2,
    title: "The Powerful Thinking Skill Nobody Ever Taught You",
    text: "I am writing this series of letters on the art of investing, addressed to a young investor, with the aim to provide timeless wisdom and practical advice that helped me when I was starting out. My goal is to help young investors navigate the complexities of the financial world, avoid misinformation, and harness the power of",
  },
  {
    image: blog3,
    title: "The Powerful Thinking Skill Nobody Ever Taught You",
    text: "I am writing this series of letters on the art of investing, addressed to a young investor, with the aim to provide timeless wisdom and practical advice that helped me when I was starting out. My goal is to help young investors navigate the complexities of the financial world, avoid misinformation, and harness the power of",
  },
  {
    image: blog1,
    title: "The Powerful Thinking Skill Nobody Ever Taught You",
    text: "I am writing this series of letters on the art of investing, addressed to a young investor, with the aim to provide timeless wisdom and practical advice that helped me when I was starting out. My goal is to help young investors navigate the complexities of the financial world, avoid misinformation, and harness the power of",
  },
  {
    image: blog3,
    title: "The Powerful Thinking Skill Nobody Ever Taught You",
    text: "I am writing this series of letters on the art of investing, addressed to a young investor, with the aim to provide timeless wisdom and practical advice that helped me when I was starting out. My goal is to help young investors navigate the complexities of the financial world, avoid misinformation, and harness the power of",
  },
  {
    image: blog2,
    title: "The Powerful Thinking Skill Nobody Ever Taught You",
    text: "I am writing this series of letters on the art of investing, addressed to a young investor, with the aim to provide timeless wisdom and practical advice that helped me when I was starting out. My goal is to help young investors navigate the complexities of the financial world, avoid misinformation, and harness the power of",
  },
];

const OurBlog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="section-padding-x py-10 md:pb-20 relative">
      <h2 className="text-[32px] md:text-4xl font-bold mb-4 text-center">
        Our Blog
      </h2>
      <p className="text-lg text-center md:text-[22px] w-full md:w-1/2 mx-auto">
        Explore Our Diverse Offerings: From Luxury Real Estate to Eco-Friendly
        Investments and Exclusive Getaways.
      </p>

      {/* Custom Arrows */}
      <button
        ref={prevRef}
        className="hidden md:flex absolute left-14 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full border border-black hover:scale-105 transform transition-all duration-200 ease-in-out"
      >
        <MoveLeft />
      </button>
      <button
        ref={nextRef}
        className="hidden md:flex absolute right-14 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full border border-black hover:scale-105 transform transition-all duration-200 ease-in-out"
      >
        <MoveRight />
      </button>

      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={24}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Set custom navigation buttons
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-12"
      >
        {blogData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full">
              <img className="w-full" src={item.image} alt="image" />
              <h2 className="text-xl md:text-2xl font-semibold my-4">
                {item.title}
              </h2>
              <p className="text-[#656565]">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurBlog;
