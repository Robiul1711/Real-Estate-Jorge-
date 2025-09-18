import { Filter, Location, Sort, Unit } from "@/assets/icon";
import React from "react";
import image from "../../assets/images/project.png";
import { Link, ScrollRestoration } from "react-router-dom";

const BrowserOpportunities = () => {
  return (
    <div>
      <ScrollRestoration />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="sm:text-2xl md:text-3xl font-bold my-2">Investment Opportunities</h2>
          <p className="text-sm text-[#4B5563]">
            Discover your next profitable investment
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center gap-4 border font-medium bg-white text-xs sm:text-sm rounded px-6 py-2">
            <Filter />
            Filter
          </button>
          <button className="flex items-center gap-3 border font-medium bg-white text-xs sm:text-sm rounded px-6 py-2">
            <Sort />
            Sort by ROI
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {[...Array(6)].map((_, index) => {
          return (
            <Link
              to={`/dashboard/project-view-description/${index}`}
              key={index}
              className="bg-[#F3F3F3] p-5 rounded-2xl "
            >
           
              <div className="overflow-hidden rounded-2xl relative">
                <img
                  className="w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
                  src={image}
                  alt="image"
                />
                   <div className="absolute top-0 left-0 p-4 flex justify-between w-full">
                    <div>
              <p className="bg-custom-primary py-1 px-3 rounded-full text-white text-sm md:text-base"> internal investment</p>

                    </div>
              <div className="bg-white rounded-lg text-custom-primary flex-col p-2 ">
              <p className="text-xs sm:text-sm">EST. Profit</p>
              <h1 className="sm:text-2xl font-semibold">12.5%</h1>
              </div>
              </div>
              </div>

              <div className="flex justify-between mt-4 font-bold sm:text-[20px]">
                <h2>The Westwood Residences</h2>
                <h2>$50K - $250K</h2>
              </div>

              <p className="text-[#4B5563] py-2 text-sm sm:text-base">
                Premium apartment complex in downtown Seattle with 120 units and
                high rental demand.
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Location />
                  <p className="text-sm text-[#4B5563]">Seattle, WA</p>
                </div>
                <div className="flex items-center gap-2">
                  <Unit />
                  <p className="text-sm text-[#4B5563]">120 Units</p>
                </div>
              </div>

              <div className="flex justify-between py-3 font-medium text-sm sm:text-base">
                <h3 className="text-[#4B5563]">Funding Progress</h3>
                <h3>68% Complete</h3>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-custom-primary h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `68%` }}
                />
              </div>

              <div className="flex justify-between flex-wrap py-2 gap-y-3">
                <div className="py-3 font-medium">
                  <h3 className="text-[#4B5563]">Total Return</h3>
                  <h2>12% IRR</h2>
                </div>
                <div className="py-3 font-medium">
                  <h3 className="text-[#4B5563]">Min Invesment</h3>
                  <h2>$5000</h2>
                </div>
                <div className="py-3 font-medium">
                  <h3 className="text-[#4B5563]">Terms</h3>
                  <h2>5 Years</h2>
                </div>
              </div>

              <button className="w-full bg-custom-primary text-white py-2 sm:py-3 rounded-xl cursor-pointer relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#111827] before:translate-x-[-200px] hover:before:translate-x-0 before:translate-y-12 hover:before:translate-y-0 before:duration-300 before:z-[-1] z-0">
                <span className="z-[1]">View Property</span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BrowserOpportunities;
