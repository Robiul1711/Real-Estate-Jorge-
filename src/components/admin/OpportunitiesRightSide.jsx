import React from "react";
import { MdCorporateFare, MdOutlinePeopleOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { Link } from "react-router-dom";

import ROICalculator from "./ROICalculator";
import BenefitsDisclaimer from "./BenefitsDisclaimer";
import DocumentSummary from "./DocumentSummary";

const OpportunitiesRightSide = ({ activeTab , project}) => {
  // console.log(project?.data?.developer)
  const developer=project?.data?.developer
  const ProjectSummery=project?.data?.investment_summary

  
  return (
    <div className="flex flex-col gap-6">
      {/* Developer Card */}
      <div className="border rounded-2xl p-6 shadow-2xl bg-white">
        <p className="text-sm font-semibold">Developer</p>

        {/* Company Info */}
        <div className="flex items-center gap-4 mt-4">
          <img src={developer?.developer_image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" className="w-12 h-12 rounded-full" />
          {/* <MdCorporateFare className="text-5xl p-2 bg-custom-primary text-white rounded-full" /> */}
          <div>
            <p className="font-semibold">{developer?.developer_name}</p>
            {/* <p className="text-sm text-gray-500">4.8</p> */}
          </div>
        </div>

        {/* Experience and Projects */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="font-semibold text-gray-500">Experience</p>
            <p className="text-sm">{developer?.developer_experience} years</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Projects</p>
            <p className="text-sm">{developer?.developer_projects}</p>
          </div>
        </div>

        {/* <button className="w-full mt-4 px-4 py-2 text-sm font-medium bg-white border border-black text-black hover:bg-black hover:text-white rounded-lg transition">
          View Profile
        </button> */}
      </div>

      {/* Investment Summary Card */}
      {(activeTab === "Description" ||
        activeTab === "Your Investment" ||
        activeTab === "Financial Information") && (
        <div className="border rounded-2xl p-6 shadow-2xl bg-white">
          <p className="text-sm font-semibold">Investment Summary</p>

          {/* Progress Section */}
          <div className="flex justify-between items-center py-4 text-sm font-medium">
            <span className="text-gray-600">Funding Progress</span>
            <span>{ProjectSummery?.funding_progress_percent} Complete</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-custom-primary rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${ProjectSummery?.funding_progress_percent}%` }}
            />
          </div>

          <div className="flex justify-between text-sm font-semibold text-gray-500 mt-1">
            <p>{ProjectSummery?.raised_amount} raised</p>
            <p>{ProjectSummery?.target_amount} target</p>
          </div>

          {/* Return and Duration */}
          <div className="grid grid-cols-2 gap-4 my-5">
            <div>
              <p className="font-semibold text-gray-500 flex items-center gap-1">
                <AiOutlineRise className="text-custom-primary" />
                Expected Return
              </p>
              <p className="text-sm text-custom-primary">{ProjectSummery?.expected_return}%</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 flex items-center gap-1">
                <FaCalendarAlt />
                Duration
              </p>
              <p className="text-sm">{ProjectSummery?.duration_months}</p>
            </div>
          </div>

          {/* Investors and Views */}
          <div className="grid grid-cols-2 gap-4 mb-5 border-b pb-4">
            <div>
              <p className="font-semibold text-gray-500 flex items-center gap-1">
                <MdOutlinePeopleOutline />
                Investors
              </p>
              <p className="text-sm">{ProjectSummery?.investors}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 flex items-center gap-1">
                <IoEyeOutline /> Views
              </p>
              <p className="text-sm">{ProjectSummery?.investors}</p>
            </div>
          </div>

          {/* Min Investment */}
          <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-gray-600 text-base">
              Min. Investment
            </p>
            <p className="font-bold text-base">{ProjectSummery?.min_investment}</p>
          </div>

          <Link
            to={`/dashboard/investment-verification/${project?.data?.slug}`}
            className="block w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-custom-primary border rounded-lg transition duration-200 hover:bg-black hover:text-white text-center"
          >
            Invest Now
          </Link>
        </div>
      )}

      {/* Dynamic Tab Content */}
      <div>
        {activeTab === "Description" && <ROICalculator data={project?.data} />}
        {activeTab === "Your Investment" && <BenefitsDisclaimer data={project} />}
        {activeTab === "Documentation" && <DocumentSummary data={project} />}
      </div>
    </div>
  );
};

export default OpportunitiesRightSide;
