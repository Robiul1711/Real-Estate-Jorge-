import React from "react";
import found from "../../assets/images/found.png";
import investment from "../../assets/images/investment.png";
import investor from "../../assets/images/investor.png";
import rate from "../../assets/images/rate.png";

const TotalRevenue = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full md:w-[65%] mx-auto my-6">
      <div className="space-y-3 flex flex-col items-center">
        <img src={found} alt="image" />
        <p className="text-[26px] md:text-4xl font-medium">500+</p>
        <p className="md:text-lg text-[#6B7280]">Projects Funded</p>
      </div>
      <div className="space-y-3 flex flex-col items-center">
        <img src={investor} alt="image" />
        <p className="text-[26px] md:text-4xl font-medium">10,000+</p>
        <p className="md:text-lg text-[#6B7280]">Investors</p>
      </div>
      <div className="space-y-3 flex flex-col items-center">
        <img src={investment} alt="image" />
        <p className="text-[26px] md:text-4xl font-medium">$50M+</p>
        <p className="md:text-lg text-[#6B7280]">Total Investment</p>
      </div>
      <div className="space-y-3 flex flex-col items-center">
        <img src={rate} alt="image" />
        <p className="text-[26px] md:text-4xl font-medium">95%</p>
        <p className="md:text-lg text-[#6B7280]">Success Rate</p>
      </div>
    </div>
  );
};

export default TotalRevenue;
