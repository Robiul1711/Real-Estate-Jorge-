import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurValues = () => {
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
  const values = [
    {
      image: ImageProvider.value,
      title: "Trust & Transparency",
      description:
        "We believe in complete transparency in every investment opportunity, providing detailed project information and regular updates.",
    },
    {
      image: ImageProvider.value1,
      title: "Community First",
      description:
        "Our platform connects investors and developers, creating a thriving community of real estate enthusiasts.",
    },
    {
      image: ImageProvider.value2,
      title: "Smart Investments",
      description:
        "We carefully vet every project and developer to ensure our investors have access to high-quality opportunities.",
    },
  ];

  return (
    <div ref={sectionRef} className="section-padding-y">
      <h2
        ref={titleRef}
        className="text-[32px] md:text-[40px] font-bold text-[#111827] mb-4 text-center"
      >
        Our Values
      </h2>
      <p
        ref={subtitleRef}
        className="text-[#6B7280] w-full md:w-[30%] mx-auto text-center my-4"
      >
        These core principles guide everything we do and shape how we serve our
        community.
      </p>
      <div
        ref={cardRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-full md:w-[65%] mx-auto my-6"
      >
        {values.map((value, index) => (
          <div
            key={index}
            className="shadow-md hover:shadow-lg transition-all duration-200 ease-in-out rounded-md p-8 space-y-4 flex flex-col items-center"
          >
            <img src={value.image} alt="image" />
            <h2 className="md:text-2xl text-[#111827] font-medium my-2">
              {value.title}
            </h2>
            <p className="text-[#6B7280] text-center">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
