import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const FAQ = () => {
  const accordingData = [
    {
      title: "What is the process for buying a property?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "How do I determine how much I can afford?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What documents are required for renting a property?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },

    {
      title: `Can I terminate a lease agreement early?`,
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },

    {
      title: "What are the risks of investing in real estate?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
    {
      title: "How do I choose the right property to invest in?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
    {
      title: "Do high-end properties support virtual tours?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
    {
      title: "How long does the property transfer process take?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];

  const [isPlusAccording, setIsPlusAccording] = useState(null);

  const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));
  return (
    <div className="section-padding-x section-padding-y">
      <h2 className="text-[32px] md:text-4xl lg:text-[40px] font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-center md:text-[22px] w-full md:w-[60%] mx-auto">
        FAQs cover key questions on real estate, green building, and vacation
        rentals, helping clients make smart choices.
      </p>

      {/* accordian */}
      <div className="flex gap-6 flex-col w-full md:w-2/3 mx-auto mt-8 md:mt-12">
        {accordingData?.map((according, index) => (
          <article key={index} className="border-b dark:border-b-slate-800 p-3">
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleBorderClick(index)}
            >
              <h2 className="text-black font-[500] text-[1.3rem]">
                {according.title}
              </h2>
              <p>
                <FaPlus
                  className={`text-[1.2rem] text-slate-600 text-text transition-all duration-300 ${
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
              <p className="text-[#424242] dark:text-[#abc2d3] text-[0.9rem] overflow-hidden">
                {according.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
