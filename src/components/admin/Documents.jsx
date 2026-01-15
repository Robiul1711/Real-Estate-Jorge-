import { Filter, Legal, Upload } from "@/assets/icon";
import { useApiQuery } from "@/hooks/getCmsUpdate";
import { Eye } from "lucide-react";
import React, { useState, useEffect } from "react"; // 1. Import hooks
import { HiArrowDownTray } from "react-icons/hi2";
import { ScrollRestoration } from "react-router-dom";

const Documents = () => {
  // 2. Search State Management
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // 3. Debounce Logic: Only update the API search term after 500ms of inactivity
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const { data: documents, isLoading } = useApiQuery({
    // 4. Update Query Key: Include debouncedSearch so it refetches when changed
    queryKey: ["project-documents", debouncedSearch],
    url: "/project/documents",
    // 5. Pass the dynamic search term to params
    params: { project_title: debouncedSearch },
    secure: true,
  });

  // Safe fallback to empty arrays
  const documentsList = documents?.data?.summary?.document_types || [];
  const recentDocuments = documents?.data?.recent_documents || [];
  const summary = documents?.data?.summary || {};
  const handleDownload = async (fileUrl, fileName) => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      // Set the filename (extract from URL or use project title)
      link.setAttribute("download", fileName || "document.pdf");

      document.body.appendChild(link);
      link.click();

      // Cleanup
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: just open in new tab if fetch fails
      window.open(fileUrl, "_blank");
    }
  };
  // --- SKELETON LOADER COMPONENT ---
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-8">
        {/* Header Skeleton */}
        <div className="flex flex-col gap-2">
          <div className="h-8 bg-gray-200 rounded w-1/3 md:w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 md:w-1/3"></div>
        </div>

        {/* Summary Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-24 flex flex-col justify-center"
            >
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>

        {/* Document Types Grid Skeleton */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-28 flex flex-col items-center justify-center gap-2"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Search & Filter Skeleton */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 h-11 bg-gray-200 rounded-lg"></div>
          <div className="flex gap-3">
            <div className="w-24 h-11 bg-gray-200 rounded-lg"></div>
            <div className="w-32 h-11 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Recent Documents List Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-gray-200 rounded shrink-0"></div>
                <div className="space-y-2 w-full">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="flex gap-2">
                    <div className="h-3 bg-gray-200 rounded w-12"></div>
                    <div className="h-3 bg-gray-200 rounded w-12"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-8 bg-gray-200 rounded"></div>
                <div className="w-20 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- MAIN CONTENT ---
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
          {/* Upload button (commented out in your code) */}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8">
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="my-2 text-gray-600 font-medium">Total Documents</h2>
          <p className="text-lg font-bold text-gray-900">
            {summary?.total_documents || 0}
          </p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="my-2 text-gray-600 font-medium">Pending Signature</h2>
          <p className="text-lg text-[#CA8A04] font-bold">
            {summary?.pending_signature || 0}
          </p>
        </div>
      </div>

      {/* Document Types Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-8 mt-8">
        {documentsList.map((docType, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 justify-center bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <Legal className="text-custom-primary" />
            <p className="font-medium text-black text-center text-sm sm:text-base">
              {docType?.name}
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563]">
              {docType?.count} docs
            </p>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <h1 className="text-lg font-semibold mt-4 sm:mt-8 mb-4">
        Recent Documents
      </h1>
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full ">
        <div className="flex-1 relative">
          {/* 6. Bind Input to State */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search documents by project title..."
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-custom-primary/50 transition-all"
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
          <button className="flex items-center justify-center gap-2 border border-gray-300 cursor-pointer font-medium bg-white rounded-lg px-6 py-2.5 text-sm hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <p className="border border-gray-300 font-medium bg-white rounded-lg px-6 py-2.5 text-sm hover:bg-gray-50 cursor-pointer transition-colors">
            All Categories
          </p>
        </div>
      </div>

      {/* Recent Documents List */}
      <div className="space-y-4 mt-4">
        {recentDocuments.length === 0 ? (
          <div className="text-center py-10 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300">
            {searchTerm
              ? `No documents found matching "${searchTerm}"`
              : "No documents found."}
          </div>
        ) : (
          recentDocuments.map((doc, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-transparent hover:border-gray-100"
            >
              {/* Left Side */}
              <div className="flex items-start sm:items-center gap-3 flex-1">
                <Legal className="shrink-0 text-gray-700" />
                <div className="space-y-2">
                  <h2 className="text-[#000000] font-bold text-sm md:text-base">
                    {doc?.project_title}
                  </h2>

                  <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-600">
                    <p>{doc?.file_size || "Unknown Size"}</p>
                    <p>• {doc?.file_type || "PDF"}</p>
                    <p>• {doc?.created_at}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {doc.is_verified === 1 ? (
                      <span className="bg-green-100 text-green-700 text-xs md:text-sm font-medium px-3 py-1 rounded-full">
                        Verified
                      </span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 text-xs md:text-sm font-medium px-3 py-1 rounded-full">
                        Pending Verification
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side (Buttons) */}
              <div className="flex gap-4 text-sm md:text-base">
                {console.log(doc)}
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 cursor-pointer hover:text-custom-primary transition-colors font-medium"
                >
                  <Eye size={18} /> View
                </a>
                <button
                  onClick={() =>
                    handleDownload(doc.file, `${doc.project_title}.pdf`)
                  }
                  className="flex items-center gap-1 cursor-pointer hover:text-custom-primary transition-colors font-medium bg-transparent border-none outline-none"
                >
                  <HiArrowDownTray size={18} /> Download
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Documents;
