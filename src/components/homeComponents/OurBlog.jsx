import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlogQuery } from "@/hooks/useCMS";
gsap.registerPlugin(ScrollTrigger);

const OurBlog = () => {
      const { blogData } = BlogQuery();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  useGSAP(() => {
    gsap.from([titleRef.current, subtitleRef.current, cardRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div id="blog" ref={sectionRef} className="section-padding-x py-4 relative">
      <h2
        ref={titleRef}
        className="text-[32px] md:text-4xl lg:text-[40px] font-bold mb-4 text-center"
      >
        Our Blog
      </h2>
      <p
        ref={subtitleRef}
        className="text-lg text-center md:text-[22px] w-full lg:w-1/2 mx-auto"
      >
        Explore Our Diverse Offerings: From Luxury Real Estate to Eco-Friendly
        Investments and Exclusive Getaways.
      </p>

      {/* Custom Arrows */}
      <button
        ref={prevRef}
        className="hidden md:flex absolute left-14 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full border border-black hover:scale-105 transform transition-all duration-200 ease-in-out cursor-pointer"
      >
        <MoveLeft />
      </button>
      <button
        ref={nextRef}
        className="hidden md:flex absolute right-14 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full border border-black hover:scale-105 transform transition-all duration-200 ease-in-out cursor-pointer"
      >
        <MoveRight />
      </button>

      <Swiper
        ref={cardRef}
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
        {blogData?.data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full border rounded-lg">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  className="w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
                  src={item.image}
                  alt="image"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl line-clamp-1 md:text-2xl font-semibold my-4">
                  {item.title}
                </h2>
                         <p className="text-[#656565] line-clamp-3" dangerouslySetInnerHTML={{__html:item.description}}></p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurBlog;
