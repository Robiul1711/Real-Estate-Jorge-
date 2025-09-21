import { Filter, Sort } from "@/assets/icon";
import { Calendar, Eye } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import React from "react";
import { IoAdd } from "react-icons/io5";
import { Link, ScrollRestoration } from "react-router-dom";
import residential from "@/assets/images/residential.png";

const MyInvestments = () => {
  return (
    <div>
      <ScrollRestoration />
      <div>
        <h2 className="text-xl md:text-3xl font-bold my-2 text-[#000000]">
          My Investments
        </h2>
        <p className="text-sm text-[#4B5563]">
          Track and manage your real estate investment portfolio
        </p>
      </div>
      <div className="flex items-center md:justify-end my-4">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-4 border text-sm font-medium bg-white rounded px-6 py-2">
            <Filter />
            Filter
          </button>
          <button className="flex items-center gap-3 border text-sm font-medium bg-white rounded px-6 py-2">
            <Sort />
            Sort by ROI
          </button>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg my-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ">
          {/* Left Side */}
          <div className="flex items-center gap-3 flex-wrap">
            <img
              src={residential}
              alt="Sunrise Apartments"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h2 className="text-[#000000] text-lg font-semibold">
                Sunrise Apartments
              </h2>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="bg-[#DCFCE7] text-[#166534] text-xs md:text-sm font-medium px-3 py-1 rounded-2xl">
                  Active
                </span>
                <span className="bg-[#DBEAFE] text-[#1E40AF] text-xs md:text-sm font-medium px-3 py-1 rounded-2xl">
                  Residential
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <button className="flex items-center gap-2 border border-gray-300 font-medium text-sm text-gray-700 bg-white rounded-md px-4 py-2 hover:bg-custom-primary hover:text-white transition">
            <Eye size={18} /> View Details
          </button>
        </div>

        <div className="flex items-center justify-between ">
          <p className="text-sm text-[#4B5563] flex items-center gap-2">
            <CiLocationOn /> Austin, TX
          </p>
          <Link
            to="/dashboard/communication"
            className="flex items-center gap-2 border border-gray-300 font-medium text-sm text-gray-700 bg-white rounded-md px-4 py-2 hover:bg-custom-primary hover:text-white transition"
          >
            Communication
          </Link>
        </div>
        <div className="w-full md:w-[86%]">
          <div className="flex items-start justify-between mt-2 w-[90%]">
            <div className="space-y-2">
              <h4 className="text-[12px] text-[#4B5563] font-medium">
                Your Investment
              </h4>
              <p className="text-sm text-[#000000] font-bold">$25,000</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">
                %property
              </h4>
              <p className="text-sm text-[#000000] font-bold">$28,125</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">ROI</h4>
              <p className="text-sm text-[#16A34A] font-bold">+12.5%</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">
                Total Revenue
              </h4>
              <p className="text-sm text-[#16A34A] font-bold">+$3,125</p>
            </div>
          </div>

          <div className="my-4">
            <div className="flex justify-between text-sm pb-3 font-medium">
              <h3 className="text-[#4B5563]">Project Progress</h3>
              <h3 className="text-[#4B5563]">85%</h3>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-custom-primary h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `80%` }}
              />
            </div>
          </div>
        </div>

        <div className="my-4 flex items-center gap-4 text-[14px] text-[#4B5563">
          <div className="flex items-center gap-3">
            <Calendar size={18} />
            <p>Started: 3/22/2024</p>
          </div>
          <p>Expected Duration: 24 months</p>
        </div>
      </div>
    </div>
  );
};

export default MyInvestments;
