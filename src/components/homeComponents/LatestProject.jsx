import React, { useEffect, useState } from "react";
import image from "../../assets/images/project.png";
import { Location, Unit } from "@/assets/icon";

const LatestProject = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(68);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="section-padding-x section-padding-y">
      <h2 className="text-[32px] md:text-4xl font-bold mb-4 text-center">
        Our Latest Projects
      </h2>
      <p className="text-lg text-center md:text-[22px] w-full md:w-1/2 mx-auto">
        Our comprehensive services encompass luxury property sales, sustainable
        green building investments, and premium vacation rentals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {[...Array(6)].map((_, index) => {
          return (
            <div key={index} className="bg-[#F3F3F3] p-5 rounded-2xl">
              <div className="overflow-hidden rounded-2xl">
                <img
                  className="w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
                  src={image}
                  alt="image"
                />
              </div>

              <div className="flex justify-between mt-4 font-semibold text-[20px]">
                <h2>The Westwood Residences</h2>
                <h2>$50K - $250K</h2>
              </div>

              <p className="text-[#4B5563] py-2">
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

              <div className="flex justify-between py-3 font-medium text-[17px]">
                <h3 className="text-[#4B5563]">Funding Progress</h3>
                <h3>68% Complete</h3>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-black h-full rounded-full transition-all duration-1000 ease-out"
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

              <button className="w-full bg-black text-white py-3 rounded-xl cursor-pointer">
                View Property
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestProject;
