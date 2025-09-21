import { ImageProvider } from "@/components/common/ImageProvider";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import React, { useRef, useState } from "react";

const InvestmentGuide = () => {
  const tabs = [
    { label: "All" },
    { label: "Beginner" },
    { label: "Strategy" },
    { label: "Advanced" },
    { label: "Local Market" },
    { label: "Risk Management" },
    { label: "Portfolio" },
  ];

  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const scrollRef = useRef(null);

  // ---- DATA ----
  const guides = [
    {
      id: 1,
      category: "Beginner",
      title: "Investment Guide for Beginners",
      date: "August 20, 2024",
      description: "Learn the fundamentals of real estate investment",
      image: ImageProvider.invest,
    },
    {
      id: 2,
      category: "Strategy",
      title: "Smart Strategies for 2025",
      date: "September 5, 2024",
      description: "Explore key strategies to grow your portfolio effectively",
      image: ImageProvider.invest1,
    },
    {
      id: 3,
      category: "Advanced",
      title: "Advanced Real Estate Tactics",
      date: "October 10, 2024",
      description: "Deep dive into advanced investment opportunities",
      image: ImageProvider.invest2,
    },
    {
      id: 4,
      category: "Local Market",
      title: "Understanding Local Market Trends",
      date: "July 15, 2024",
      description: "Analyze and adapt to local market conditions",
      image: ImageProvider.invest3,
    },
    {
      id: 5,
      category: "Risk Management",
      title: "Risk Management Essentials",
      date: "June 1, 2024",
      description: "Mitigate risks and protect your investments",
      image: ImageProvider.invest4,
    },
    {
      id: 6,
      category: "Portfolio",
      title: "Building a Strong Portfolio",
      date: "May 12, 2024",
      description: "Balance and diversify your real estate assets",
      image: ImageProvider.invest5,
    },
    {
      id: 7,
      category: "Beginner",
      title: "Getting Started with Real Estate",
      date: "April 20, 2024",
      description: "Step-by-step guide for first-time investors",
      image: ImageProvider.invest,
    },
    {
      id: 8,
      category: "Strategy",
      title: "Property Flipping Strategies",
      date: "March 15, 2024",
      description: "Learn how to buy, renovate, and sell for profit",
      image: ImageProvider.invest1,
    },
    {
      id: 9,
      category: "Advanced",
      title: "Tax Benefits in Real Estate",
      date: "February 8, 2024",
      description: "Maximize returns using tax-efficient strategies",
      image: ImageProvider.invest2,
    },
    {
      id: 10,
      category: "Local Market",
      title: "Urban vs. Rural Investments",
      date: "January 25, 2024",
      description: "Compare and choose the right location to invest",
      image: ImageProvider.invest3,
    },
    {
      id: 11,
      category: "Risk Management",
      title: "Crisis-Proof Investments",
      date: "December 10, 2023",
      description: "How to prepare for uncertain market conditions",
      image: ImageProvider.invest4,
    },
    {
      id: 12,
      category: "Portfolio",
      title: "Long-Term Wealth Building",
      date: "November 1, 2023",
      description: "Focus on sustainable growth for decades to come",
      image: ImageProvider.invest5,
    },
  ];

  // ---- FILTER ----
  const filteredGuides =
    activeTab === "All"
      ? guides
      : guides.filter((item) => item.category === activeTab);

  const totalPages = Math.ceil(filteredGuides.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredGuides.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset to page 1 when tab changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // ---- DRAG SCROLL ----
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onMouseUp = () => {
    isDragging.current = false;
  };
  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div className="pb-8">
      <h2 className="text-xl md:text-2xl lg:text-[32px] text-[#111827] font-bold mb-4 text-center">
        Investment Guide for Beginners
      </h2>
      <p className="text-[#64748B] text-lg font-medium my-4 w-full max-w-3xl mx-auto text-center">
        Comprehensive video lessons covering everything from basic concepts to
        advanced investment strategies
      </p>

      {/* Tabs */}
      <div
        ref={scrollRef}
        className="overflow-x-auto hide-scrollbar px-8 cursor-grab active:cursor-grabbing flex items-center text-center justify-center my-4"
        style={{ scrollBehavior: "smooth", userSelect: "none" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex flex-nowrap min-w-fit gap-4">
          {tabs.map((tab, index) => (
            <button
              key={`${tab.label}-${index}`}
              onClick={() => setActiveTab(tab.label)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm md:text-base font-medium transition cursor-pointer ${
                activeTab === tab.label
                  ? "bg-custom-primary text-white"
                  : "text-[#0F172A] bg-[#30B7671A] hover:bg-green-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 max-w-7xl mx-auto">
        {currentItems.map((guide) => (
          <div
            key={guide.id}
            className="relative border rounded-2xl overflow-hidden"
          >
            <img src={guide.image} alt={guide.title} />
            <p className="absolute top-2 left-2 p-2 bg-custom-primary text-white text-sm rounded-full">
              {guide.category}
            </p>
            <div className="p-4">
              <h2 className="flex gap-2 items-center text-[#64748B] text-lg">
                <Calendar size={22} />
                {guide.date}
              </h2>
              <h2 className="text-[#111827] text-2xl font-bold my-2">
                {guide.title}
              </h2>
              <p className="text-[#64748B] my-3">{guide.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {/* Prev Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer transition"
          >
            <ArrowLeft size={16} />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition cursor-pointer ${
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
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 cursor-pointer transition"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default InvestmentGuide;
