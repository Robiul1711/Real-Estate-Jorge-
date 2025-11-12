import { BankIcon, HammerIcon, ManIcon, SearchIcon } from "@/assets/icon";
import { PricessSectionQuery } from "@/hooks/useCMS";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HowItWork = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);
  const { processSection, isLoading, error } = PricessSectionQuery();

  // Convert object -> array
  const processData = processSection?.data?.process_section
    ? Object.values(processSection.data.process_section)
    : [];

    // console.log(processData)
  // --- GSAP animation ---
  useGSAP(() => {
    if (!sectionRef.current) return;
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
  }, [processData]);

  // --- Skeleton Loader ---
  if (isLoading) {
    return (
      <div className="section-padding-x pb-8 lg:pb-12">
        <div className="text-center mb-6">
          <div className="h-8 w-56 bg-gray-300 rounded-lg mx-auto animate-pulse"></div>
          <div className="h-4 w-80 bg-gray-300 rounded-lg mx-auto mt-4 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 bg-gray-100 rounded-lg p-6 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 bg-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- Error state ---
  if (error) {
    return (
      <div className="section-padding-x pb-8 lg:pb-12 text-center text-red-500 font-medium">
        Failed to load process section.
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="section-padding-x pb-8 lg:pb-12">
      <h2
        ref={titleRef}
        className="text-[32px] md:text-4xl lg:text-[40px] font-bold mb-2 lg:mb-4 text-center"
      >
        How It Work
      </h2>
      <p
        ref={subtitleRef}
        className="lg:text-lg text-center md:text-[22px] w-full lg:w-1/2 mx-auto"
      >
        Our platform makes real estate investing simple, accessible, and
        transparent for everyone.
      </p>

      <div
        ref={cardRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 bg-[#003C3594] h-auto md:h-[490px]"
      >
        {processData.map((step, index) => (
          <div
            key={index}
            className="group flex flex-col justify-end gap-x-4 pt-8 lg:pt-0 pb-8 px-6 lg:px-14 text-white hover:bg-custom-primary transform transition-all duration-200 ease-in-out"
          >
            {/* {console.log(step)} */}
            <img
              src={step.image}
              alt={step.title}
              className="w-12 h-12 object-contain mb-4 transition-transform duration-200 group-hover:scale-110"
            />
            <h2 className="text-2xl font-bold my-5">{step.title}</h2>
            <p
              className="text-lg mb-6"
              dangerouslySetInnerHTML={{ __html: step.description }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
