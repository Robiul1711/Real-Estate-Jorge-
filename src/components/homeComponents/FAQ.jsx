import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const FAQ = () => {
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },

    {
      title: "What is the significance of color theory in design?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];

  const [isPlusAccording, setIsPlusAccording] = useState(null);

  const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));
  return (
    <div className="section-padding-x section-padding-y">
      <h2 className="text-[32px] md:text-4xl font-bold mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-center md:text-[22px] w-full md:w-[70%] mx-auto">
        Lorem ipsum dolor sit amet consectetur. Quis sit quis risus porta. Id
        faucibus interdum ut et elementum. Cras tortor lectus neque vitae
        tristique. Ut eget ac bibendum sed ipsum.
      </p>

      {/* accordian */}
      <div className="flex gap-3 flex-col w-full md:w-2/3 mx-auto mt-8 md:mt-12">
        {accordingData?.map((according, index) => (
          <article key={index} className="border-b dark:border-b-slate-800 p-3">
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleBorderClick(index)}
            >
              <h2 className="text-black font-[600] text-[1.2rem]">
                {according.title}
              </h2>
              <p>
                <FaPlus
                  className={`text-[1.1rem] dark:text-slate-600 text-text transition-all duration-300 ${
                    isPlusAccording === index &&
                    "rotate-[45deg] !text-[#002E33]"
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
