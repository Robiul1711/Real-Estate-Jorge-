import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhyChooseUsQuery } from "@/hooks/useCMS";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRef = useRef(null);

  const { whyChooseData, isLoading, error } = WhyChooseUsQuery();

  // ✅ Extract array safely
  const cards = whyChooseData?.data || [];

  // --- GSAP Animation ---
  useGSAP(() => {
    if (!sectionRef.current) return;
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
  }, [cards]);

  // --- Skeleton Loader ---
  if (isLoading) {
    return (
      <div className="section-padding-x pb-6">
        <div className="text-center mb-8">
          <div className="h-8 w-56 bg-gray-300 rounded-lg mx-auto animate-pulse"></div>
          <div className="h-4 w-80 bg-gray-300 rounded-lg mx-auto mt-4 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-3xl p-8 animate-pulse h-56"
            />
          ))}
        </div>
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      <div className="section-padding-x pb-6 text-center text-red-500 font-medium">
        Failed to load Why Choose Us section.
      </div>
    );
  }

  // --- Main Content ---
  return (
    <div ref={sectionRef} className="section-padding-x pb-6">
      <h2
        ref={titleRef}
        className="text-[32px] md:text-4xl lg:text-[40px] font-bold mb-4 text-center"
      >
        Why Choose Us
      </h2>

      <p
        ref={subtitleRef}
        className="text-lg text-center md:text-[22px] w-full md:w-1/2 mx-auto"
      >
        Our comprehensive services encompass luxury property sales, sustainable
        green building investments, and premium vacation rentals.
      </p>

      <div
        ref={cardRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8"
      >
        {cards.map((item) => (
          <div
            key={item.id}
            className="bg-[#F3F3F3] text-[#2C2C2C] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Dynamic Icon */}
            {item.icon && (
              <div className="p-4 bg-white rounded-full w-fit mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
            )}

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {item.title}
            </h2>

            {/* Description */}
            <p
              className="text-base md:text-lg text-[#4B5563] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
