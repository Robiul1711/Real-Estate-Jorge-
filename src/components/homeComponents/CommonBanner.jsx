import React from "react";
import { ImageProvider } from "../common/ImageProvider";
import CommonBtn from "../common/CommonButton";

const CommonBanner = () => {
  return (
    <div className="relative my-6">
      {/* Banner Image */}
      <img
        src={ImageProvider.commonbanner}
        alt="banner"
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center px-4">
          <h2 className="text-[32px] md:text-4xl lg:text-[48px] xl:text-[64px] max-w-3xl font-bold text-white leading-tight">
            Join Our Platform and Start Investing
          </h2>
          <p className="text-lg text-[#D1D5DB] mt-4">
            Choose the investment strategy that best suits your needs
          </p>
          <div className="mt-8">
            <CommonBtn>Start Investing Now</CommonBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
