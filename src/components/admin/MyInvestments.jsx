import { Filter, Sort } from "@/assets/icon";
import { Calendar, Eye } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import React from "react";
import { IoAdd } from "react-icons/io5";

const MyInvestments = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold my-2 text-[#000000]">
          My Investments
        </h2>
        <p className="text-sm text-[#4B5563]">
          Track and manage your real estate investment portfolio
        </p>
      </div>
      <div className="flex items-center justify-end my-4">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-4 border font-medium bg-white rounded px-6 py-2">
            <Filter />
            Filter
          </button>
          <button className="flex items-center gap-3 border font-medium bg-white rounded px-6 py-2">
            <Sort />
            Sort by ROI
          </button>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg my-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-[#000000] text-[17px] font-semibold">
              Sunrise Apartments
            </h2>
            <button className="bg-[#DCFCE7] text-[#166534] text-sm font-medium px-3 py-1 rounded-2xl">
              Active
            </button>
            <button className="bg-[#DBEAFE] text-[#1E40AF] text-sm font-medium px-3 py-1 rounded-2xl">
              Residential
            </button>
          </div>
          <button className="flex items-center gap-2 border font-medium text-sm bg-white rounded px-4 py-2 cursor-pointer">
            <Eye size={18} /> View Details
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-[#4B5563] flex items-center gap-2">
            <CiLocationOn /> Austin, TX
          </p>
          <button className="flex items-center gap-2 border font-medium text-sm bg-white rounded px-4 py-2 cursor-pointer">
            <IoAdd size={18} /> Add Feature
          </button>
        </div>
        <div className="w-full md:w-[86%]">
          <div className="flex items-start justify-between mt-2 w-[90%]">
            <div className="space-y-2">
              <h4 className="text-[12px] text-[#4B5563] font-medium">
                Invested
              </h4>
              <p className="text-sm text-[#000000] font-bold">$25,000</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">
                Current Values
              </h4>
              <p className="text-sm text-[#000000] font-bold">$28,125</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">ROI</h4>
              <p className="text-sm text-[#16A34A] font-bold">+12.5%</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">
                Gains/Loss
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
                className="bg-black h-full rounded-full transition-all duration-1000 ease-out"
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
      <div className="bg-white p-5 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-[#000000] text-[17px] font-semibold">
              Downtown Plaza
            </h2>
            <button className="bg-[#DBEAFE] text-[#1E40AF] text-sm font-medium px-3 py-1 rounded-2xl">
              Funding
            </button>
            <button className="bg-[#F3E8FF] text-[#6B21A8] text-sm font-medium px-3 py-1 rounded-2xl">
              Commercial
            </button>
          </div>
          <button className="flex items-center gap-2 border font-medium text-sm bg-white rounded px-4 py-2 cursor-pointer">
            <Eye size={18} /> View Details
          </button>
        </div>
        <div className="mt-2">
          <p className="text-sm text-[#4B5563] flex items-center gap-2">
            <CiLocationOn />
            Miami, FL
          </p>
        </div>
        <div className="w-full md:w-[86%]">
          <div className="flex items-start justify-between mt-2 w-[90%]">
            <div className="space-y-2">
              <h4 className="text-[12px] text-[#4B5563] font-medium">
                Invested
              </h4>
              <p className="text-sm text-[#000000] font-bold">$18,500</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">
                Current Values
              </h4>
              <p className="text-sm text-[#000000] font-bold">$20,017</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">ROI</h4>
              <p className="text-sm text-[#16A34A] font-bold">+8.2%</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">
                Gains/Loss
              </h4>
              <p className="text-sm text-[#16A34A] font-bold">+$1,517</p>
            </div>
          </div>

          <div className="my-4">
            <div className="flex justify-between text-sm pb-3 font-medium">
              <h3 className="text-[#4B5563]">Project Progress</h3>
              <h3 className="text-[#4B5563]">85%</h3>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className="bg-black h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `40%` }}
              />
            </div>
          </div>
        </div>

        <div className="my-4 flex items-center gap-4 text-[14px] text-[#4B5563">
          <div className="flex items-center gap-3">
            <Calendar size={18} />
            <p>Started: 3/22/2024</p>
          </div>
          <p>Expected Duration: 18 months</p>
        </div>
      </div>
      <div className="bg-white p-5 rounded-lg my-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-[#000000] text-[17px] font-semibold">
              Sunrise Apartments
            </h2>
            <button className="bg-[#DCFCE7] text-[#166534] text-sm font-medium px-3 py-1 rounded-2xl">
              Active
            </button>
            <button className="bg-[#DBEAFE] text-[#1E40AF] text-sm font-medium px-3 py-1 rounded-2xl">
              Residential
            </button>
          </div>
          <button className="flex items-center gap-2 border font-medium text-sm bg-white rounded px-4 py-2 cursor-pointer">
            <Eye size={18} /> View Details
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-[#4B5563] flex items-center gap-2">
            <CiLocationOn /> Austin, TX
          </p>
          <button className="flex items-center gap-2 border font-medium text-sm bg-white rounded px-4 py-2 cursor-pointer">
            <IoAdd size={18} /> Add Feature
          </button>
        </div>
        <div className="w-full md:w-[86%]">
          <div className="flex items-start justify-between mt-2 w-[90%]">
            <div className="space-y-2">
              <h4 className="text-[12px] text-[#4B5563] font-medium">
                Invested
              </h4>
              <p className="text-sm text-[#000000] font-bold">$25,000</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">
                Current Values
              </h4>
              <p className="text-sm text-[#000000] font-bold">$28,125</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">ROI</h4>
              <p className="text-sm text-[#16A34A] font-bold">+12.5%</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[12px] font-medium text-[#4B5563]">
                Gains/Loss
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
                className="bg-black h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `90%` }}
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
