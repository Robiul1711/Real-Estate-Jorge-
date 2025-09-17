import {
  ChartIcon,
  DollarIcon,
  HandIcon,
  KeyIcon,
  MeasureIcon,
  SettingIcon,
} from "@/assets/icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 "
      >
        <div className="bg-[#F3F3F3] text-[#2C2C2C] rounded-4xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Icon container */}
          <div className="p-4 bg-white rounded-full w-fit mb-6">
            <DollarIcon className="w-6 h-6 md:w-8 md:h-8 text-black" />
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Verified Investment Properties
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
            Every property is thoroughly vetted to ensure high ROI and legal
            transparency.
          </p>
        </div>
        <div className="bg-[#F3F3F3] text-[#2C2C2C] rounded-4xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Icon container */}
          <div className="p-4 bg-white rounded-full w-fit mb-6">
            <HandIcon className="w-6 h-6 md:w-8 md:h-8 text-black" />
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Competitive Bidding System
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
            Our auction-style platform empowers investors to get the best value
            deals.
          </p>
        </div>
        <div className="bg-[#F3F3F3] text-[#2C2C2C] rounded-4xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Icon container */}
          <div className="p-4 bg-white rounded-full w-fit mb-6">
            <KeyIcon className="w-6 h-6 md:w-8 md:h-8 text-black" />
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Data-Driven Insights
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
            Access detailed property analytics and neighborhood trends before
            you bid.
          </p>
        </div>
        <div className="bg-[#F3F3F3] text-[#2C2C2C] rounded-4xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Icon container */}
          <div className="p-4 bg-white rounded-full w-fit mb-6">
            <ChartIcon className="w-6 h-6 md:w-8 md:h-8 text-black" />
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Secure Transactions
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
            End-to-end encrypted processes to keep your investments safe and
            compliant.
          </p>
        </div>
        <div className="bg-[#F3F3F3] text-[#2C2C2C] rounded-4xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Icon container */}
          <div className="p-4 bg-white rounded-full w-fit mb-6">
            <MeasureIcon className="w-6 h-6 md:w-8 md:h-8 text-black" />
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Investor-Focused Platform
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
            Built specifically for property investors—streamlined, scalable, and
            smart.
          </p>
        </div>
        <div className="bg-[#F3F3F3] text-[#2C2C2C] rounded-4xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
          {/* Icon container */}
          <div className="p-4 bg-white rounded-full w-fit mb-6">
            <SettingIcon className="w-6 h-6 md:w-8 md:h-8 text-black" />
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Flexible Subscription Plans
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
            Choose from tiered pricing models that suit every investor’s need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
