import React from "react";
import trust from "../../assets/images/jorge.png";
import mann from "../../assets/images/chen.png";
import smart from "../../assets/images/emma.png";

const MeetOurTeam = () => {
  return (
    <div className="py-12">
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#111827] mb-4 text-center">
        Meet Our Team
      </h2>
      <p className="text-[#6B7280] w-full md:w-[30%] mx-auto text-center my-4">
        Passionate professionals dedicated to transforming real estate
        investment.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-full md:w-[65%] mx-auto my-6">
        <div className="shadow-md border hover:shadow-lg transition-all duration-200 ease-in-out rounded-md p-8 space-y-4 flex flex-col items-center">
          <img src={trust} alt="image" />
          <h2 className="md:text-2xl text-[#111827] font-medium my-2">
            Jorge Feanco
          </h2>
          <p className="text-sm text-[#00474F] py-1">CEO & Founder</p>
          <p className="text-[#6B7280] text-center">
            Former real estate executive with 15+ years of experience in
            property development and investment.
          </p>
        </div>
        <div className="shadow-md border hover:shadow-lg transition-all duration-200 ease-in-out rounded-md p-8 space-y-4 flex flex-col items-center">
          <img src={mann} alt="image" />
          <h2 className="md:text-2xl text-[#111827] font-medium my-2">
            Michael Chen
          </h2>
          <p className="text-sm text-[#00474F] py-1">CEO & Founder</p>
          <p className="text-[#6B7280] text-center">
            Tech entrepreneur passionate about using technology to democratize
            real estate investing.
          </p>
        </div>
        <div className="shadow-md border hover:shadow-lg transition-all duration-200 ease-in-out rounded-md p-8 space-y-4 flex flex-col items-center">
          <img src={smart} alt="image" />
          <h2 className="md:text-2xl text-[#111827] font-medium my-2">
            Emma Rodriguez
          </h2>
          <p className="text-sm text-[#00474F] py-1">Head of Investments</p>
          <p className="text-[#6B7280] text-center">
            Investment banking background with expertise in real estate finance
            and risk assessment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
