import React from "react";

const Banner = () => {
  return (
    <div className="text-white min-h-[40vh] flex flex-col justify-center items-center bg-gradient-to-r from-[#0e0e0e] to-[#8B8B8B] text-center mt-8 md:mt-18">
      <h2 className="text-[26px] md:text-4xl lg:text-[60px] font-bold">
        About Us
      </h2>
      <p className="w-full md:w-[40%] mx-auto mt-6">
        We're revolutionizing real estate investment by connecting smart
        investors with vetted developers, creating opportunities for everyone to
        build their future.
      </p>
    </div>
  );
};

export default Banner;
