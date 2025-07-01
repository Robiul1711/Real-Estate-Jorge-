import React from "react";
import image from "../../assets/images/banner.png";
import man1 from "../../assets/images/man.png";
import man2 from "../../assets/images/man1.png";
import man3 from "../../assets/images/man3.png";
import man4 from "../../assets/images/man4.png";
import { Star } from "@/assets/icon";
import { ArrowUpRight } from "lucide-react";
import CommonButton from "../common/CommonButton";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="section-padding-x pt-6 md:pt-22 relative">
      {/* Banner Image */}
      <div className="relative z-10 rounded-xl overflow-hidden">
        <img
          src={image}
          alt="image"
          className="w-full h-[800px] md:h-auto object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[rgba(249,252,250,0.95)] to-transparent z-20" />
      </div>

      {/* Content */}
      <div className="absolute top-12 md:top-[12%] section-padding-x text-white z-20 w-full">
        {/* Agent Box */}
        <div className="bg-black/20 px-4 md:px-5 py-3 md:py-4 rounded-2xl border border-white flex flex-wrap md:flex-nowrap items-center gap-6 max-w-[94%] md:max-w-[90%] lg:max-w-[34%]">
          <div className="flex items-center">
            <img
              className="border-2 border-white rounded-full w-[60px] md:w-full"
              src={man1}
              alt="icon"
            />
            <img
              className="border-2 border-white rounded-full -ml-4 w-[60px] md:w-full"
              src={man2}
              alt="icon"
            />
            <img
              className="border-2 border-white rounded-full -ml-4 w-[60px] md:w-full"
              src={man3}
              alt="icon"
            />
            <img
              className="border-2 border-white rounded-full -ml-4 w-[60px] md:w-full"
              src={man4}
              alt="icon"
            />
          </div>
          <div>
            <p className="text-base md:text-[20px] font-medium">
              10+ Featured Agents
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-sm md:text-lg font-medium">5 / 5</p>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-5xl lg:text-[80px] font-bold md:leading-[1.2] mt-6 sm:mt-8 max-w-full md:max-w-[80%]">
          Invest in Real Estate Like <br className="hidden md:block" /> the Big
          Players
        </h2>

        {/* Paragraph */}
        <p className="mt-4 md:mt-8 w-[94%] md:w-[80%] text-base md:text-2xl lg:text-3xl">
          We provide tailored real estate solutions, guiding you through every
          step with personalized experiences that meet your unique needs and
          aspirations.
        </p>

        {/* Explore Project Button */}
        <Link to={"/"}>
          <button className="py-2 px-4 mt-6 md:mt-8 flex bg-white text-black justify-between hover:text-secondary items-center gap-2 border rounded-xl w-[94%] sm:w-fit transform transition-all duration-200 ease-in-out relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#111] before:translate-x-[-200px] hover:before:translate-x-0 before:translate-y-12 hover:before:translate-y-0 before:duration-300 before:z-[-1] z-0 cursor-pointer">
            <span className="z-[1] text-sm md:text-base">Explore Project</span>
            <span className="bg-black p-1 rounded z-[1]">
              <ArrowUpRight size={20} className="text-white" />
            </span>
          </button>
        </Link>

        {/* Filter Box */}
        <div className="bg-[rgba(95,87,72,0.14)] backdrop-blur-[5px] my-8 p-4 sm:p-6 rounded-2xl border border-white flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-[94%] md:max-w-[90%] lg:max-w-[68%]">
          <div className="w-full md:w-auto flex-1">
            <p className="pb-2 md:text-lg text-[#F5F9FF]">Investment Type</p>
            <CommonButton
              defaultText="All Types"
              options={["Residential", "Commercial", "Industrial"]}
            />
          </div>
          <div className="w-full md:w-auto flex-1">
            <p className="pb-2 md:text-lg text-[#F5F9FF]">Location</p>
            <CommonButton
              defaultText="Any Location"
              options={["Dhaka", "Chittagong", "Sylhet", "Khulna"]}
            />
          </div>
          <div className="w-full md:w-auto flex-1">
            <p className="pb-2 md:text-lg text-[#F5F9FF]">Budget</p>
            <CommonButton
              defaultText="Any Budget"
              options={["$10K-$50K", "$50K-$100K", "$100K+"]}
            />
          </div>
          <div className="w-full md:w-auto">
            <button className="py-2.5 px-6 mt-2 md:mt-9 bg-white text-black justify-between cursor-pointer items-center gap-2 border rounded-xl w-full md:w-fit relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#111] before:translate-x-[-200px] hover:before:translate-x-0 before:translate-y-12 hover:before:translate-y-0 before:duration-300 before:z-[-1] z-0 hover:text-secondary">
              <span className="z-[1]">Search Projects</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
