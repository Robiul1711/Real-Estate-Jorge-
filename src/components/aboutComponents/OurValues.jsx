import React from "react";
import trust from "../../assets/images/trust.png";
import mann from "../../assets/images/mann.png";
import smart from "../../assets/images/smart.png";

const OurValues = () => {
  return (
    <div className="section-padding-y">
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] mb-4 text-center">
        Our Values
      </h2>
      <p className="text-[#6B7280] w-full md:w-[30%] mx-auto text-center my-4">
        These core principles guide everything we do and shape how we serve our
        community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-full md:w-[65%] mx-auto my-6">
        <div className="shadow-md border hover:shadow-lg transition-all duration-200 ease-in-out rounded-md p-8 space-y-4 flex flex-col items-center">
          <img src={trust} alt="image" />
          <h2 className="md:text-2xl text-[#111827] font-medium my-2">
            Trust & Transparency
          </h2>
          <p className="text-[#6B7280] text-center">
            We believe in complete transparency in every investment opportunity,
            providing detailed project information and regular updates.
          </p>
        </div>
        <div className="shadow-md border hover:shadow-lg transition-all duration-200 ease-in-out rounded-md p-8 space-y-4 flex flex-col items-center">
          <img src={mann} alt="image" />
          <h2 className="md:text-2xl text-[#111827] font-medium my-2">
            Community First
          </h2>
          <p className="text-[#6B7280] text-center">
            Our platform connects investors and developers, creating a thriving
            community of real estate enthusiasts.
          </p>
        </div>
        <div className="shadow-md border hover:shadow-lg transition-all duration-200 ease-in-out rounded-md p-8 space-y-4 flex flex-col items-center">
          <img src={smart} alt="image" />
          <h2 className="md:text-2xl text-[#111827] font-medium my-2">
            Smart Investments
          </h2>
          <p className="text-[#6B7280] text-center">
            We carefully vet every project and developer to ensure our investors
            have access to high-quality opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
