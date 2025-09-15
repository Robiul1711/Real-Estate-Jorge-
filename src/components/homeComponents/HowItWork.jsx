import { BankIcon, HammerIcon, ManIcon, SearchIcon } from "@/assets/icon";
import React from "react";

const steps = [
  {
    id: 1,
    icon: <ManIcon className="duration-200" />,
    title: "Create Account",
    desc: "Sign up in minutes with our simple verification process from property appreciation when assets are sold our property appreciation when assets are sold.",
  },
  {
    id: 2,
    icon: <SearchIcon className="duration-200" />,
    title: "Browse Properties",
    desc: "Explore our curated selection of high-quality real estate investment opportunities across different markets and property types.",
  },
  {
    id: 3,
    icon: <HammerIcon className="duration-200" />,
    title: "Place Your Bid",
    desc: "Decide how much you want to invest and place your bid on properties that align with your investment goals and risk tolerance.",
  },
  {
    id: 4,
    icon: <BankIcon className="duration-200" />,
    title: "Earn Returns",
    desc: "Receive regular dividend payments from rental income and benefit from property appreciation when assets are sold.",
  },
];

const HowItWork = () => {
  return (
    <div className="section-padding-x pb-12">
      <h2 className="text-[32px] md:text-4xl lg:text-[40px] font-bold mb-4 text-center">
        How It Work
      </h2>
      <p className="text-lg text-center md:text-[22px] w-full md:w-1/2 mx-auto">
        Our platform makes real estate investing simple, accessible, and
        transparent for everyone.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 bg-custom-secondary h-auto md:h-[490px]">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group flex flex-col justify-end gap-x-4 pb-8 px-14 text-white hover:bg-custom-primary transform transition-all duration-200 ease-in-out"
          >
            {step.icon}
            <h2 className="text-2xl font-bold my-5">{step.title}</h2>
            <p className="text-lg mb-6">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
