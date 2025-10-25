import React, { useRef } from "react";
import { ImageProvider } from "./ImageProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = ({ title, subtitle, description,image }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  useGSAP(() => {
    gsap.from([titleRef.current, subtitleRef.current, descriptionRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
      stagger: 0.1,
    });
  }, []);
  return (
    <div className="relative section-padding-y">
      {/* Banner Image */}
      <img
        src={image || ImageProvider.banner}
        alt="banner"
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center px-4">
          <h2
            ref={titleRef}
            className="text-[32px] md:text-4xl lg:text-[48px] xl:text-[64px] max-w-3xl font-bold text-white leading-tight"
          >
            {title}
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg xl:text-xl text-[#D1D5DB] my-2 font-medium"
          >
            {subtitle}
          </p>
          <p
            ref={descriptionRef}
            className="text-lg text-[#D1D5DB] mt-2 max-w-3xl mx-auto text-center"
            dangerouslySetInnerHTML={{__html: description}}
          >
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
