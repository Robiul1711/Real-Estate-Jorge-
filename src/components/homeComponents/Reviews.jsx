import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Star } from "@/assets/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CommonBtn from "../common/CommonButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const reviewsData = [
  {
    id: 1,
    stars: 5,
    text: "Exceptional service and user-friendly design! Highly recommended.",
    name: "Priya Sharma",
    role: "Product Manager",
    img: ImageProvider.profile1,
  },
  {
    id: 2,
    stars: 5,
    text: "Great support team and smooth experience overall.",
    name: "Rahul Verma",
    role: "Software Engineer",
    img: ImageProvider.profile2,
  },
  {
    id: 3,
    stars: 4,
    text: "Good platform, but could improve in speed.",
    name: "Ananya Gupta",
    role: "UI Designer",
    img: ImageProvider.profile3,
  },
  {
    id: 4,
    stars: 3,
    text: "Made my investment journey super easy!",
    name: "Rohit Kumar",
    role: "Entrepreneur",
    img: ImageProvider.profile4,
  },
  {
    id: 5,
    stars: 4,
    text: "User-friendly and reliable platform.",
    name: "Sneha Iyer",
    role: "Marketing Lead",
    img: ImageProvider.profile5,
  },
  {
    id: 6,
    stars: 3,
    text: "Absolutely love the design and transparency.",
    name: "Amit Singh",
    role: "Investor",
    img: ImageProvider.profile3,
  },
];

const Reviews = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  const buttonRef = useRef(null);
  useGSAP(() => {
    gsap.from(
      [
        titleRef.current,
        subtitleRef.current,
        cardRef.current,
        buttonRef.current,
      ],
      {
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
      }
    );
  });
  return (
    <div ref={sectionRef} className="section-padding-x py-8 lg:py-12">
      <h2
        ref={titleRef}
        className="text-[32px] md:text-4xl lg:text-[40px] font-bold mb-4 text-center"
      >
        Reviews
      </h2>
      <p
        ref={subtitleRef}
        className="text-lg text-center md:text-[22px] w-full md:w-1/2 mx-auto"
      >
        More than 180,000 investments reflect the confidence in our real estate
        crowdfunding platforms
      </p>
      <div
        ref={cardRef}
        className="flex flex-col md:flex-row gap-6 lg:gap-12 mt-8 mb-4"
      >
        {/* Left Summary */}
        <div className="w-full lg:w-[20%]">
          <h2 className="text-[32px] md:text-4xl lg:text-[40px] font-bold text-center">
            Very Good
          </h2>
          <div className="flex gap-1 mt-4">
            <img src={ImageProvider.star} alt="image" />
            <img src={ImageProvider.star} alt="image" />
            <img src={ImageProvider.star} alt="image" />
            <img src={ImageProvider.star} alt="image" />
            <img src={ImageProvider.emptystar} alt="image" />
          </div>
          <p className="text-lg font-semibold py-2 text-center">
            Based on 1708 reviews
          </p>
          <div className="flex items-center justify-center gap-2">
            <MdOutlineStarPurple500 size={44} />
            <h2 className="text-[32px] md:text-4xl font-semibold">
              Trustpilot
            </h2>
          </div>
        </div>

        {/* Right - Swiper Reviews */}
        <div className="w-full lg:w-[80%]">
          <Swiper
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-[#FDFDFD] p-6 rounded-xl border h-[220px]">
                  {/* Stars */}
                  <div className="flex gap-1 my-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={
                          i < review.stars
                            ? review.stars <= 3
                              ? "text-[#73CF11]"
                              : "text-custom-primary"
                            : "text-[#D9D9D9]"
                        }
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[#15141a] my-4 lg:text-lg">
                    {review.text}
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-4 my-2">
                    <img
                      src={review.img}
                      alt="profile"
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="font-semibold">{review.name}</h2>
                      <p className="text-[#6F6C90]">{review.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div ref={buttonRef} className="flex justify-center mt-8">
        <CommonBtn>Start Investing Now</CommonBtn>
      </div>
    </div>
  );
};

export default Reviews;
