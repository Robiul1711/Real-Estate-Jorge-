import { BankIcon, HammerIcon, ManIcon, SearchIcon } from "@/assets/icon";
import React from "react";

const HowItWork = () => {
  return (
    <div className="section-padding-x pb-12">
      <h2 className="text-[32px] md:text-4xl font-bold mb-4 text-center">
        How It Work
      </h2>
      <p className="text-lg text-center md:text-[22px] w-full md:w-1/2 mx-auto">
        Our platform makes real estate investing simple, accessible, and
        transparent for everyone.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 bg-custom-secondary h-auto md:h-[490px]">
        {/* Card 1 */}
        <div className="group flex flex-col justify-end gap-x-4 pb-22 px-14 text-white hover:bg-custom-primary transform transition-all duration-200 ease-in-out">
          <ManIcon className="duration-200" />
          <h2 className="text-2xl font-bold my-5">Create Account</h2>
          <p className="text-lg mb-6">
            Sign up in minutes with our simple verification process.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col justify-end gap-x-4 pb-2 px-14 text-white hover:bg-custom-primary transform transition-all duration-200 ease-in-out">
          <SearchIcon className="duration-200" />
          <h2 className="text-2xl font-bold my-5">Browse Properties</h2>
          <p className="text-lg mb-6">
            Explore our curated selection of high-quality real estate investment
            opportunities across different markets and property types.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col justify-end gap-x-4 pb-2 px-14 text-white hover:bg-custom-primary transform transition-all duration-200 ease-in-out">
          <HammerIcon className=" duration-200" />
          <h2 className="text-2xl font-bold my-5">Place Your Bid</h2>
          <p className="text-lg mb-6">
            Decide how much you want to invest and place your bid on properties
            that align with your investment goals and risk tolerance.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group flex flex-col justify-end gap-x-4 pb-8 px-14 text-white hover:bg-[#A3DC2F] hover:text-black transform transition-all duration-200 ease-in-out">
          <BankIcon className="text-white group-hover:text-black transition-colors duration-200" />
          <h2 className="text-2xl font-bold my-5">Earn Returns</h2>
          <p className="text-lg mb-6">
            Receive regular dividend payments from rental income and benefit
            from property appreciation when assets are sold.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
