import { Filter, Legal, Upload } from "@/assets/icon";
import { useApiQuery } from "@/hooks/getCmsUpdate";
import { Eye } from "lucide-react";
import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { ScrollRestoration } from "react-router-dom";

const Documents = () => {
  const { data: documents } = useApiQuery({
    queryKey: "project-documents",
    url: "/project/documents",
    secure: true,
  });

  // Safe fallback to empty arrays
  const documentsList = documents?.data?.summary?.document_types || [];
  const recentDocuments = documents?.data?.recent_documents || [];
  const summary = documents?.data?.summary || {};

  return (
    <div>
      <ScrollRestoration />
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold sm:my-2">
            Documents
          </h2>
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8">
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="my-2">Total Documents</h2>
          <p className="text-lg font-bold">{summary?.total_documents || 0}</p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg">
          <h2 className="my-2">Pending Signature</h2>
          <p className="text-lg text-[#CA8A04] font-bold">
            {summary?.pending_signature || 0}
          </p>
        </div>
        {/* Removed the static 8.2MB card as it wasn't in your API data */}
      </div>

      {/* Document Types Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-8 mt-8">
        {documentsList.map((docType, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 justify-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg"
          >
            <Legal />
            <p className="font-medium text-black text-center">{docType?.name}</p>
            <p className="text-sm text-[#4B5563]">{docType?.count} docs</p>
          </div>
        ))}
      </div>

      {/* Recent Documents Header */}
      <div className="flex items-center justify-between my-3 mt-8">
        <h2 className="text-2xl font-bold">Recent Documents</h2>
        <button className="px-4 py-2 text-[15px] bg-[#FFF] border rounded-lg my-1 cursor-pointer shadow-md">
          View All
        </button>
      </div>

      {/* Search & Filter */}
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
          <button className="border border-gray-300 font-medium bg-white rounded-lg px-6 py-2.5 text-sm hover:bg-[#EFEFEF] cursor-pointer">
            All Categories
          </button>
        </div>
      </div>

      {/* Recent Documents List */}
      <div className="space-y-4 mt-4">
        {recentDocuments.map((doc, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            {/* Left Side */}
            <div className="flex items-start sm:items-center gap-3 flex-1">
              <Legal className="shrink-0" />
              <div className="space-y-2">
                <h2 className="text-[#000000] font-bold text-sm md:text-base">
                  {doc?.project_title}
                </h2>

                <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-600">
                  <p>{doc?.file_size || "Unknown Size"}</p>
                  <p>• {doc?.file_type || "PDF"}</p>
                  <p>• {doc?.created_at}</p>
                </div>

                {/* FIXED: Removed doc.tags map and replaced with static status check */}
                <div className="flex flex-wrap gap-3">
                  {doc.is_verified === 1 ? (
                    <span className="bg-green-100 text-green-700 text-xs md:text-sm font-medium px-3 py-1 rounded-2xl">
                      Verified
                    </span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-700 text-xs md:text-sm font-medium px-3 py-1 rounded-2xl">
                      Pending Verification
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side (Buttons) */}
            <div className="flex gap-4 text-sm md:text-base">
              <a
                href={doc.file}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 cursor-pointer hover:text-custom-primary transition-colors"
              >
                <Eye size={18} /> View
              </a>
              <a
                href={doc.file}
                download
                className="flex items-center gap-1 cursor-pointer hover:text-custom-primary transition-colors"
              >
                <HiArrowDownTray size={18} /> Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;