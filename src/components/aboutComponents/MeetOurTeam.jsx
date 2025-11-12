import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MeetOurTeamQuery } from "@/hooks/useCMS";
gsap.registerPlugin(ScrollTrigger);

const MeetOurTeam = () => {
const {teamMembersData}=MeetOurTeamQuery();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);

  // ✅ GSAP Animations
  useGSAP(() => {
    gsap.from([titleRef.current, subtitleRef.current, cardRef.current], {
      y: 50,
      opacity: 0,
      duration: 0.8,
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
    <div ref={sectionRef} className="py-6 lg:py-12">
      <h2
        ref={titleRef}
        className="text-[32px] md:text-[40px] font-bold text-[#111827] mb-4 text-center"
      >
        Meet Our Team
      </h2>
      <p
        ref={subtitleRef}
        className="text-[#6B7280] w-full md:w-[30%] mx-auto text-center my-4"
      >
        Passionate professionals dedicated to transforming real estate
        investment.
      </p>

      <Swiper
        loop
        spaceBetween={20}
        slidesPerView={3}
        className="w-full md:w-[80%] mx-auto mt-12"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        ref={cardRef}
      >
        {teamMembersData?.data?.map((member, idx) => (
          <SwiperSlide key={idx} className="my-6">
            <div className="shadow-md hover:shadow-lg transition-all duration-200 ease-in-out rounded-2xl p-8 space-y-4 flex flex-col items-center bg-white">
              {/* ✅ Uniform Image Container */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-42 md:h-42 rounded-full overflow-hidden  bg-gray-100 flex items-center justify-center">
                <img
                  src={member.image || ImageProvider.jorge}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h2 className="md:text-2xl text-lg text-[#111827] font-semibold mt-4 text-center">
                {member.name}
              </h2>
              <p className="text-sm text-[#00474F] font-medium">
                {member.position}
              </p>
              <p
                className="text-[#6B7280] text-center text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: member.description }}
              ></p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetOurTeam;
