import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import CommonBtn from "../common/CommonButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CommonBanner = () => {
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
    <div className="relative my-6">
      {/* Banner Image */}
      <img
        src={ImageProvider.commonbanner}
        alt="banner"
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          ref={sectionRef}
          className="flex flex-col items-center text-center px-4"
        >
          <h2
            ref={titleRef}
            className="text-[32px] md:text-4xl lg:text-[48px] xl:text-[64px] max-w-3xl font-bold text-white leading-tight"
          >
            Join Our Platform and Start Investing
          </h2>
          <p ref={subtitleRef} className="text-lg text-[#D1D5DB] mt-4">
            Choose the investment strategy that best suits your needs
          </p>
          <div ref={cardRef} className="mt-8">
            <CommonBtn>Start Investing Now</CommonBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
