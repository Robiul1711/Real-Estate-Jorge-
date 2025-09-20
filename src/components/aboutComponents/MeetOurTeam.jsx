import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MeetOurTeam = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
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
  const teamData = [
    {
      name: "Jorge Feanco",
      role: "CEO & Founder",
      desc: "Former real estate executive with 15+ years of experience in property development and investment.",
      image: ImageProvider.jorge,
    },
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      desc: "Tech entrepreneur passionate about using technology to democratize real estate investing.",
      image: ImageProvider.chen,
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Investments",
      desc: "Investment banking background with expertise in real estate finance and risk assessment.",
      image: ImageProvider.emma,
    },
    {
      name: "Sophia Lee",
      role: "Marketing Head",
      desc: "Expert in digital marketing and brand management in real estate.",
      image: ImageProvider.jorge,
    },
    {
      name: "Liam Smith",
      role: "Finance Lead",
      desc: "Handles investment strategy and financial planning for all projects.",
      image: ImageProvider.chen,
    },
    {
      name: "Olivia Brown",
      role: "Operations Manager",
      desc: "Ensures smooth execution of projects and client satisfaction.",
      image: ImageProvider.emma,
    },
  ];

  return (
    <div ref={sectionRef} className="py-12">
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
        {teamData.map((member, idx) => (
          <SwiperSlide key={idx} className="my-6">
            <div className="shadow-md hover:shadow-lg transition-all duration-200 ease-in-out rounded-md p-8 space-y-4 flex flex-col items-center">
              <img src={member.image} alt={member.name} />
              <h2 className="md:text-2xl text-[#111827] font-medium my-2">
                {member.name}
              </h2>
              <p className="text-sm text-[#00474F] py-1">{member.role}</p>
              <p className="text-[#6B7280] text-center">{member.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeetOurTeam;
