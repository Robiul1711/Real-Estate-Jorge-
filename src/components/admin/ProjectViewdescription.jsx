import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";   // 👈 added useParams
import { IoLocationOutline } from "react-icons/io5";

import OpportunitiesRightSide from "./OpportunitiesRightSide";
import OpportunitiesLeftSide from "./OpportunitiesLeftSide";
import Description from "./Description";
import YourInvestment from "./YourInvestment";
import FinancialInformation from "./FinancialInformation";
import Documentation from "./Documentation";
import { useApiQuery } from "@/hooks/getCmsUpdate";

const ProjectViewdescription = () => {
  // 👉 Get slug from URL
  const { slug } = useParams();

  // 👉 Fetch project details
  const { data: projectDetails, isLoading, error, refetch } = useApiQuery({
    queryKey: ["projectDetails", slug],
    url: `/project/details/slug/${slug}`,
    secure: true,
    enabled: !!slug,
  });
console.log(projectDetails)
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    "Description",
    "Your Investment",
    "Financial Information",
    "Documentation",
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 pb-6">
        <Link
          className="flex items-center gap-2 text-sm sm:text-base mb-2 sm:mb-0"
          to="/dashboard/browse-opportunities"
        >
          <FaArrowLeftLong /> Back
        </Link>

        <div>
          <h1 className="text-xl sm:text-2xl font-bold">
            {projectDetails?.data?.title || "Loading..."}
          </h1>

          <p className="text-[#6B7280] flex items-center gap-2 mt-1 text-sm sm:text-base">
            <IoLocationOutline />
            {projectDetails?.data?.location || "Location unavailable"}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Left Side */}
        <div className="md:w-[70%] w-full">
          <OpportunitiesLeftSide project={projectDetails} />

          {/* Tabs */}
          <div className="bg-[#F3F3F3] rounded-2xl my-5">
            <ul className="flex flex-wrap sm:flex-nowrap overflow-x-auto no-scrollbar gap-2">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer flex-1 text-center px-6 py-3 font-semibold rounded-lg transition duration-200 whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-custom-primary text-white"
                      : "text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="mt-5">
            {activeTab === "Description" && <Description data={projectDetails} />}
            {activeTab === "Your Investment" && <YourInvestment data={projectDetails} />}
            {activeTab === "Financial Information" && <FinancialInformation data={projectDetails} />}
            {activeTab === "Documentation" && <Documentation data={projectDetails} />}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-[30%] w-full">
          <div className="sticky top-6">
            <OpportunitiesRightSide activeTab={activeTab} project={projectDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewdescription;
