import { useApiQuery } from "@/hooks/getCmsUpdate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
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
    const { data: faqData } = useApiQuery({
      queryKey: "faqs",
      url: "/faqs",
      secure: true,
    });

  const [isPlusAccording, setIsPlusAccording] = useState(null);

  const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));
  return (
    <div ref={sectionRef} className="section-padding-x section-padding-y">
      <h2
        ref={titleRef}
        className="text-[32px] md:text-4xl lg:text-[40px] font-bold mb-4 text-center"
      >
        Frequently Asked Questions
      </h2>
      <p
        ref={subtitleRef}
        className="lg:text-lg text-center md:text-[22px] w-full lg:w-[60%] mx-auto"
      >
        FAQs cover key questions on real estate, green building, and vacation
        rentals, helping clients make smart choices.
      </p>

      {/* accordian */}
      <div
        ref={cardRef}
        className="flex gap-6 flex-col w-full md:w-2/3 mx-auto mt-8 md:mt-12"
      >
        {faqData?.data?.map((according, index) => (
          <article key={index} className="border-b dark:border-b-slate-800 p-3">
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleBorderClick(index)}
            >
              <h2 className="text-black font-[500] text-[1.3rem]">
                {according?.question}
              </h2>
              <p>
                <FaPlus
                  className={`text-[1rem] lg:text-[1.2rem] text-slate-600 text-text transition-all duration-300 ${
                    isPlusAccording === index &&
                    "rotate-[45deg] !text-custom-secondary"
                  }`}
                />
              </p>
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isPlusAccording === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden" dangerouslySetInnerHTML={{__html:according?.answer}}>
               
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
