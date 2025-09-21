import { Filter, Legal, Upload } from "@/assets/icon";
import { Eye } from "lucide-react";
import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { ScrollRestoration } from "react-router-dom";

const Documents = () => {
  return (
    <div>
      <ScrollRestoration />
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold sm:my-2">Documents</h2>
          <p className="text-sm text-[#4B5563]">
            Access and manage your investment documents
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-4 border font-medium bg-custom-primary text-white text-[14px] rounded px-6 py-2 cursor-pointer">
            <Upload />
            Upload Document
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8">
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="my-2">Total Documents</h2>
          <p className="text-lg font-bold">5</p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="my-2">Total Documents</h2>
          <p className="text-lg text-[#CA8A04] font-bold">0</p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="my-2">Total Documents</h2>
          <p className="text-lg font-bold">8.2 MB</p>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-8 mt-8">
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
          <Legal />
          <p className="font-medium text-black">Legal</p>
          <p className="text-sm text-[#4B5563]">1 docs</p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
          <Legal />
          <p className="font-medium text-black">Financial</p>
          <p className="text-sm text-[#4B5563]">1 docs</p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
          <Legal />
          <p className="font-medium text-black">Tax</p>
          <p className="text-sm text-[#4B5563]">1 docs</p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
          <Legal />
          <p className="font-medium text-black">Due Diligence</p>
          <p className="text-sm text-[#4B5563]">1 docs</p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
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
  {[
    {
      title: "Investment Agreement - Sunrise Apartments",
      type: "Contract",
      size: "2.4 MB",
      date: "6/15/2024",
      tags: [
        { text: "Signed", bg: "bg-[#DCFCE7]", color: "text-[#166534]" },
        { text: "Legal", bg: "bg-[#FEE2E2]", color: "text-[#991B1B]" },
      ],
    },
    {
      title: "Property Inspection Report - Downtown Plaza",
      type: "Report",
      size: "1.8 MB",
      date: "6/12/2024",
      tags: [
        { text: "Available", bg: "bg-[#DBEAFE]", color: "text-[#1E40AF]" },
        { text: "Due Diligence", bg: "bg-[#FFEDD5]", color: "text-[#9A3412]" },
      ],
    },
    {
      title: "Tax Document - Q2 2024",
      type: "Tax Form",
      size: "0.5 MB",
      date: "6/12/2024",
      tags: [
        { text: "Available", bg: "bg-[#DBEAFE]", color: "text-[#1E40AF]" },
        { text: "Tax", bg: "bg-[#F3E8FF]", color: "text-[#6B21A8]" },
      ],
    },
  ].map((doc, i) => (
    <div
      key={i}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      {/* Left Side */}
      <div className="flex items-start sm:items-center gap-3 flex-1">
        <Legal className="shrink-0" />
        <div className="space-y-2">
          <h2 className="text-[#000000] font-bold text-sm md:text-base">
            {doc.title}
          </h2>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-600">
            <p>{doc.type}</p>
            <p>• {doc.size}</p>
            <p>• {doc.date}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {doc.tags.map((tag, idx) => (
              <button
                key={idx}
                className={`${tag.bg} ${tag.color} text-xs md:text-sm font-medium px-3 py-1 rounded-2xl`}
              >
                {tag.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side (Buttons) */}
      <div className="flex gap-4 text-sm md:text-base">
        <button className="flex items-center gap-1 cursor-pointer hover:text-custom-primary transition-colors">
          <Eye size={18} /> View
        </button>
        <button className="flex items-center gap-1 cursor-pointer hover:text-custom-primary transition-colors">
          <HiArrowDownTray size={18} /> Download
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Documents;
