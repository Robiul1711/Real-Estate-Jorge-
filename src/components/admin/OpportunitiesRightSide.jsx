import React from "react";
import { MdCorporateFare, MdOutlinePeopleOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { Link } from "react-router-dom";

import ROICalculator from "./ROICalculator";
import BenefitsDisclaimer from "./BenefitsDisclaimer";
import DocumentSummary from "./DocumentSummary";

const OpportunitiesRightSide = ({ activeTab }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Developer Card */}
      <div className="border rounded-2xl p-6 shadow-2xl bg-white">
        <p className="text-sm font-semibold">Developer</p>

        {/* Company Info */}
        <div className="flex items-center gap-4 mt-4">
          <MdCorporateFare className="text-5xl p-2 bg-custom-primary text-white rounded-full" />
          <div>
            <p className="font-semibold">Premium Development Corp</p>
            <p className="text-sm text-gray-500">4.8</p>
          </div>
        </div>

        {/* Experience and Projects */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="font-semibold text-gray-500">Experience</p>
            <p className="text-sm">8 years</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Projects</p>
            <p className="text-sm">15</p>
          </div>
        </div>

        <button className="w-full mt-4 px-4 py-2 text-sm font-medium bg-white border border-black text-black hover:bg-black hover:text-white rounded-lg transition">
          View Profile
        </button>
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
            <span>68% Complete</span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-custom-primary rounded-full transition-all duration-1000 ease-out"
              style={{ width: "68%" }}
            />
          </div>

          <div className="flex justify-between text-sm font-semibold text-gray-500 mt-1">
            <p>$1.9M raised</p>
            <p>$2.5M target</p>
          </div>

          {/* Return and Duration */}
          <div className="grid grid-cols-2 gap-4 my-5">
            <div>
              <p className="font-semibold text-gray-500 flex items-center gap-1">
                <AiOutlineRise className="text-custom-primary" />
                Expected Return
              </p>
              <p className="text-sm text-custom-primary">12-15%</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 flex items-center gap-1">
                <FaCalendarAlt />
                Duration
              </p>
              <p className="text-sm">18 months</p>
            </div>
          </div>

          {/* Investors and Views */}
          <div className="grid grid-cols-2 gap-4 mb-5 border-b pb-4">
            <div>
              <p className="font-semibold text-gray-500 flex items-center gap-1">
                <MdOutlinePeopleOutline />
                Investors
              </p>
              <p className="text-sm">127</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500 flex items-center gap-1">
                <IoEyeOutline /> Views
              </p>
              <p className="text-sm">2,850</p>
            </div>
          </div>

          {/* Min Investment */}
          <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-gray-600 text-base">
              Min. Investment
            </p>
            <p className="font-bold text-base">$50,000</p>
          </div>

          <Link
            to="/dashboard/investment-verification"
            className="block w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-custom-primary border rounded-lg transition duration-200 hover:bg-black hover:text-white text-center"
          >
            Invest Now
          </Link>
        </div>
      )}

      {/* Dynamic Tab Content */}
      <div>
        {activeTab === "Description" && <ROICalculator />}
        {activeTab === "Your Investment" && <BenefitsDisclaimer />}
        {activeTab === "Documentation" && <DocumentSummary />}
      </div>
    </div>
  );
};

export default OpportunitiesRightSide;
