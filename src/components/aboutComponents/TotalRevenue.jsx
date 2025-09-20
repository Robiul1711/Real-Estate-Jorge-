import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TotalRevenue = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  useGSAP(() => {
    gsap.from([cardRef.current], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        toggleActions: "play none none none",
      },
    });
  });
  const revenueData = [
    {
      image: ImageProvider.found,
      value: "500+",
      label: "Projects Funded",
    },
    {
      image: ImageProvider.investor,
      value: "10,000+",
      label: "Investors",
    },
    {
      image: ImageProvider.investment,
      value: "$50M+",
      label: "Total Investment",
    },
    {
      image: ImageProvider.rate,
      value: "95%",
      label: "Success Rate",
    },
  ];

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-[65%] mx-auto"
    >
      {revenueData.map((item, index) => (
        <div
          key={index}
          className="space-y-3 flex flex-col items-center hover:shadow p-5 rounded-lg transition-all duration-200 ease-in-out"
        >
          <img src={item.image} alt="image" />
          <p className="text-[26px] md:text-4xl font-medium">{item.value}</p>
          <p className="md:text-lg text-[#6B7280]">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default TotalRevenue;
