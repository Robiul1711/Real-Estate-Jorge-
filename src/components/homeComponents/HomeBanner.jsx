import React from "react";
import image from "../../assets/images/banner.png";
import man1 from "../../assets/images/man.png";
import man2 from "../../assets/images/man1.png";
import man3 from "../../assets/images/man3.png";
import man4 from "../../assets/images/man4.png";
import { Star } from "@/assets/icon";
import { ArrowUpRight } from "lucide-react";
import CommonButton from "../common/CommonButton";

const HomeBanner = () => {
  return (
    <div className="section-padding-x pt-12 relative">
      <div className="relative z-10 rounded-xl overflow-hidden">
        <img src={image} alt="image" className="w-full h-auto object-cover" />

        {/* White gradient overlay at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[rgba(249,252,250,0.95)] to-transparent z-20" />
      </div>
      <div className="absolute top-[16%] section-padding-x text-white z-20">
        <div className="bg-black/20 px-5 py-4 rounded-2xl border border-white flex items-center gap-6 w-auto md:w-[34%]">
          <div className="flex items-center">
            <img
              className="border-2 border-white rounded-full"
              src={man1}
              alt="icon"
            />
            <img
              className="border-2 border-white rounded-full -ml-4"
              src={man2}
              alt="icon"
            />
            <img
              className="border-2 border-white rounded-full -ml-4"
              src={man3}
              alt="icon"
            />
            <img
              className="border-2 border-white rounded-full -ml-4"
              src={man4}
              alt="icon"
            />
          </div>
          <div>
            <p className="text-[20px] font-medium">10+ Featured Agents</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-lg font-medium">5 / 5</p>
            </div>
          </div>
        </div>
        <h2 className="text-[32px] md:text-5xl lg:text-[80px] font-bold md:leading-24 mt-4">
          Invest in Real Estate Like <br /> the Big Players
        </h2>
        <p className="mt-8 w-[80%] text-lg md:text-2xl lg:text-3xl">
          We provide tailored real estate solutions, guiding you through every
          step with personalized experiences that meet your unique needs and
          aspirations.
        </p>
        <button className="py-2 px-4 mt-8 flex bg-white text-black justify-between hover:text-[17px] items-center gap-2 border rounded-xl w-[12.5%] transform transition-all duration-200 ease-in-out">
          Explore Project
          <span className="bg-black p-1 rounded">
            <ArrowUpRight size={20} className="text-white" />
          </span>
        </button>
        <div className="bg-[rgba(95,87,72,0.14)] backdrop-blur-[5px] my-8 p-6 rounded-2xl border border-white flex items-center gap-8 w-auto md:w-[68%]">
          <div>
            <p className="pb-2 md:text-lg text-[#F5F9FF]">Investment Type</p>
            <CommonButton
              defaultText="All Types"
              options={["Residential", "Commercial", "Industrial"]}
            />
          </div>

          <div>
            <p className="pb-2 md:text-lg text-[#F5F9FF]">Location</p>
            <CommonButton
              defaultText="Any Location"
              options={["Dhaka", "Chittagong", "Sylhet", "Khulna"]}
            />
          </div>

          <div>
            <p className="pb-2 md:text-lg text-[#F5F9FF]">Budget</p>
            <CommonButton
              defaultText="Any Budget"
              options={["$10K-$50K", "$50K-$100K", "$100K+"]}
            />
          </div>
          <div>
            <button className="py-2.5 px-6 mt-9  bg-white text-black justify-between cursor-pointer items-center gap-2 border rounded-xl w-full">
              Search Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
