import { ImageProvider } from "@/components/common/ImageProvider";
import { useApiQuery } from "@/hooks/getCmsUpdate";
import { InsvestmentCategoryQuery } from "@/hooks/useCMS";
import { ArrowLeft, ArrowRight, Calendar, Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";

const InvestmentGuide = () => {
  // 1. Fetch Categories
  const { investmentCategoryData } = InsvestmentCategoryQuery();
  
  // 2. State for Selection (Track ID for API, Title for UI)
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // null = "All"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const scrollRef = useRef(null);

  // 3. Fetch Investments (Dependent on selectedCategoryId)
  const {
    data: investmentsData,
    isLoading,
    error,
  } = useApiQuery({
    // Include ID in queryKey to auto-refetch when category changes
    queryKey: ["investments", selectedCategoryId], 
    url: "investments",
    // Only send param if a specific category is selected (not "All")
    params: selectedCategoryId ? { investment_category_id: selectedCategoryId } : {},
    secure: true,
  });

  // 4. Client-side Pagination Logic
  // (Assuming API returns all items for the category. If API is paginated, move page logic to params)
  const allItems = investmentsData?.data || [];
  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

  // Helper to handle Tab Click
  const handleTabClick = (id) => {
    setSelectedCategoryId(id); // Set ID for API
    setCurrentPage(1); // Reset to page 1 on category change
  };

  return (
    <div className="pb-8">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#111827] font-bold mb-4 text-center">
        Investment Guide
      </h2>
      <p className="text-[#64748B] text-base sm:text-lg font-medium my-4 w-full max-w-3xl mx-auto text-center px-4">
        Comprehensive lessons covering everything from basic concepts to
        advanced investment strategies
      </p>

      {/* --- TABS --- */}
      <div
        ref={scrollRef}
        className="overflow-x-auto hide-scrollbar px-4 sm:px-8 cursor-grab active:cursor-grabbing flex items-center text-center justify-start sm:justify-center my-4"
      >
        <div className="flex flex-nowrap min-w-fit gap-3 sm:gap-4">
          {/* 'All' Tab (Static) */}
          <button
            onClick={() => handleTabClick(null)}
            className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-full text-sm md:text-base font-medium transition cursor-pointer ${
              selectedCategoryId === null
                ? "bg-custom-primary text-white"
                : "text-[#0F172A] bg-[#30B7671A] hover:bg-green-200"
            }`}
          >
            All
          </button>

          {/* Dynamic Category Tabs */}
          {investmentCategoryData?.data?.map((category, index) => (
            <button
              key={category.id || index}
              onClick={() => handleTabClick(category.id)}
              className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded-full text-sm md:text-base font-medium transition cursor-pointer ${
                selectedCategoryId === category.id
                  ? "bg-custom-primary text-white"
                  : "text-[#0F172A] bg-[#30B7671A] hover:bg-green-200"
              }`}
            >
              {category.title || category.name}
            </button>
          ))}
        </div>
      </div>

      {/* --- CONTENT --- */}
      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <Loader2 className="animate-spin text-custom-primary" size={32} />
        </div>
      ) : allItems.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No investment guides found for this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-6 max-w-7xl mx-auto px-4">
          {currentItems.map((guide) => (
            <div
              key={guide.id}
              className="relative border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={guide.image || ImageProvider.invest} // Fallback image
                alt={guide.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              
              {/* Optional: Show Category Badge if available in item */}
              {guide.category && (
                <p className="absolute top-2 left-2 p-2 bg-custom-primary text-white text-xs sm:text-sm rounded-full">
                   {/* Handle if category is an object or string */}
                  {typeof guide.category === 'object' ? guide.category.title : guide.category}
                </p>
              )}

              <div className="p-4">
                <h2 className="flex gap-2 items-center text-[#64748B] text-sm sm:text-base md:text-lg">
                  <Calendar size={18} />
                  {/* Format Date Helper */}

                  {guide.created_at}
                </h2>
                <h2 className="text-[#111827] text-lg sm:text-xl md:text-2xl font-bold my-2 line-clamp-2">
                  {guide.title}
                </h2>
                <div 
                  className="text-[#64748B] text-sm sm:text-base my-3 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: guide.description }} // Using HTML in case API returns rich text
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* --- PAGINATION --- */}
      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center items-center gap-1 sm:gap-2 mt-6 px-2">
          {/* Prev Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition"
          >
            <ArrowLeft size={22} />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-medium transition cursor-pointer ${
                currentPage === i + 1
                  ? "bg-custom-primary text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition"
          >
            <ArrowRight size={22} />
          </button>
        </div>
      )}
    </div>
  );
};

export default InvestmentGuide;