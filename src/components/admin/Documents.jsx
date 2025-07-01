import { Filter, Legal, Upload } from "@/assets/icon";
import { Eye } from "lucide-react";
import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { ScrollRestoration } from "react-router-dom";

const Documents = () => {
  return (
    <div>
      <ScrollRestoration />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold my-2">Documents</h2>
          <p className="text-sm text-[#4B5563]">
            Access and manage your investment documents
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-4 border font-medium bg-black text-white text-[14px] rounded px-6 py-2 cursor-pointer">
            <Upload />
            Upload Document
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="my-2">Total Documents</h2>
          <p className="text-lg font-bold">5</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="my-2">Total Documents</h2>
          <p className="text-lg text-[#CA8A04] font-bold">0</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="my-2">Total Documents</h2>
          <p className="text-lg font-bold">8.2 MB</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
          <Legal />
          <p className="font-medium text-black">Legal</p>
          <p className="text-sm text-[#4B5563]">1 docs</p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
          <Legal />
          <p className="font-medium text-black">Financial</p>
          <p className="text-sm text-[#4B5563]">1 docs</p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
          <Legal />
          <p className="font-medium text-black">Tax</p>
          <p className="text-sm text-[#4B5563]">1 docs</p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
          <Legal />
          <p className="font-medium text-black">Due Diligence</p>
          <p className="text-sm text-[#4B5563]">1 docs</p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
          <Legal />
          <p className="font-medium text-black">Updates</p>
          <p className="text-sm text-[#4B5563]">1 docs</p>
        </div>
      </div>
      <div className="flex items-center justify-between my-3">
        <h2 className="text-2xl font-bold">Recent Documents</h2>
        <button className="px-4 py-2 text-[15px] bg-[#FFF] border rounded-lg my-1 cursor-pointer shadow-md">
          View All
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <button className="flex items-center justify-center gap-2 border border-gray-300 cursor-pointer font-medium bg-white rounded-lg px-6 py-2.5 text-sm hover:bg-[#EFEFEF]">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="border border-gray-300 font-medium bg-white rounded-lg px-6 py-2.5 text-sm hover:bg-[#EFEFEF] cursor-pointer  ">
            All Categories
          </button>
        </div>
      </div>

      <div className="space-y-4 mt-4">
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg flex items-center gap-4 justify-between">
          <div className="flex items-center gap-5">
            <Legal />
            <div className="space-y-2">
              <h2 className="text-[#000000] font-bold">
                Investment Agreement - Sunrise Apartments
              </h2>
              <div className="flex gap-4 items-center">
                <p>Contract</p>
                <p>. 2.4 MB</p>
                <p>. 6/15/2024</p>
              </div>
              <div className="flex gap-4 items-center">
                <button className="bg-[#DCFCE7] text-[#166534] text-sm font-medium px-3 py-1 rounded-2xl">
                  Signed
                </button>
                <button className="bg-[#FEE2E2] text-[#991B1B] text-sm font-medium px-3 py-1 rounded-2xl">
                  Legal
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 cursor-pointer">
              <Eye size={18} /> View
            </button>
            <button className="flex items-center gap-1 cursor-pointer">
              <HiArrowDownTray /> Download
            </button>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg flex items-center gap-4 justify-between">
          <div className="flex items-center gap-5">
            <Legal />
            <div className="space-y-2">
              <h2 className="text-[#000000] font-bold">
                Property Inspection Report - Downtown Plaza
              </h2>
              <div className="flex gap-4 items-center">
                <p>Report</p>
                <p>. 1.8 MB</p>
                <p>. 6/12/2024</p>
              </div>
              <div className="flex gap-4 items-center">
                <button className="bg-[#DBEAFE] text-[#1E40AF] text-sm font-medium px-3 py-1 rounded-2xl">
                  Available
                </button>
                <button className="bg-[#FFEDD5] text-[#9A3412] text-sm font-medium px-3 py-1 rounded-2xl">
                  Due Diligence
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 cursor-pointer">
              <Eye size={18} /> View
            </button>
            <button className="flex items-center gap-1 cursor-pointer">
              <HiArrowDownTray /> Download
            </button>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg flex items-center gap-4 justify-between">
          <div className="flex items-center gap-5">
            <Legal />
            <div className="space-y-2">
              <h2 className="text-[#000000] font-bold">
                Tax Document - Q2 2024
              </h2>
              <div className="flex gap-4 items-center">
                <p>Tax Form</p>
                <p>. 0.5 MB</p>
                <p>. 6/12/2024</p>
              </div>
              <div className="flex gap-4 items-center">
                <button className="bg-[#DBEAFE] text-[#1E40AF] text-sm font-medium px-3 py-1 rounded-2xl">
                  Available
                </button>
                <button className="bg-[#F3E8FF] text-[#6B21A8] text-sm font-medium px-3 py-1 rounded-2xl">
                  Tax
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 cursor-pointer">
              <Eye size={18} /> View
            </button>
            <button className="flex items-center gap-1 cursor-pointer">
              <HiArrowDownTray /> Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
