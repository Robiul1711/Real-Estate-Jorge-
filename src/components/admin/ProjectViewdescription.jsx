import React, { useState } from "react";
// import house from '@/assets/images/house.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

import OpportunitiesRightSide from "./OpportunitiesRightSide";
import OpportunitiesLeftSide from "./OpportunitiesLeftSide";
import Description from "./Description";
import YourInvestment from "./YourInvestment";
import FinancialInformation from "./FinancialInformation";
import Documentation from "./Documentation";
const ProjectViewdescription = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    "Description",
    "Your Investment",
    "Financial Information",
    "Documentation",
  ];
  return (
    <div>
      <div className="flex items-center gap-8 pb-8">
        <Link className="flex items-center gap-2" to="/dashboard/browse-opportunities">
          <FaArrowLeftLong /> Back
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Luxury Residential Complex</h1>
          <p className="text-[#6B7280] flex items-center gap-2 mt-1">
            <IoLocationOutline />
            Manhattan, NY
          </p>
        </div>
      </div>
      <div className="flex w-full gap-6">
        <div className="w-[70%]">
          <OpportunitiesLeftSide />
          <div className="bg-[#F3F3F3]  rounded-2xl my-5">
            <ul className="flex items-center w-full gap-2">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer w-full text-center px-10 py-4 font-semibold rounded-lg transition duration-200 ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
    <div className="mt-5">
  {activeTab === "Description" && <Description />}
  {activeTab === "Your Investment" && <YourInvestment />}
  {activeTab === "Financial Information" && <FinancialInformation />}
  {activeTab === "Documentation" && <Documentation />}
</div>

        </div>
        <div className="w-[30%]">
          <div className="sticky top-6">

          <OpportunitiesRightSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewdescription;
