import { Filter, Location, Sort, Unit } from "@/assets/icon";
import React, { useState } from "react";
// import image from "../../assets/images/project.png"; // Unused in provided snippet
import { Link, ScrollRestoration } from "react-router-dom";
import { useApiQuery } from "@/hooks/getCmsUpdate";

const BrowserOpportunities = () => {
  // 2. Create state for sort order
  const [sortOrder, setSortOrder] = useState("asc");
 const {
    data: project,
    isLoading,
    error,
    refetch,
  } = useApiQuery({
    queryKey: ["project", sortOrder], // 3. Add sortOrder to queryKey to trigger refetch on change
    url: "/investor/opportunities",
    params: {
      sort_by: "project_status", // Tell backend to sort by status
      sort_order: sortOrder, // Pass the dynamic order ('asc' or 'desc')
    },
    secure: true,
  });
  // --- Skeleton Component ---
  const ProjectSkeleton = () => (
    <div className="bg-[#F3F3F3] p-5 rounded-2xl animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-300 rounded-xl relative mb-4">
        {/* Badge Placeholder */}
        <div className="absolute top-2 left-2 w-20 h-6 bg-gray-400 rounded-lg opacity-50"></div>
        <div className="absolute top-2 right-2 w-24 h-14 bg-gray-400 rounded-lg opacity-50"></div>
      </div>

      <div className="flex flex-col flex-1 space-y-4">
        {/* Title and Price Row */}
        <div className="flex justify-between items-center mt-2">
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        </div>

        {/* Description Lines */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          <div className="h-3 bg-gray-300 rounded w-4/6"></div>
        </div>

        {/* Icons Row */}
        <div className="flex gap-4">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>

        {/* Progress Bar Section */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
          </div>
          <div className="w-full h-2 bg-gray-300 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="flex justify-between py-2">
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded w-16"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded w-16"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-300 rounded w-16"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
          </div>
        </div>

        {/* Button */}
        <div className="h-12 bg-gray-300 rounded-lg w-full mt-auto"></div>
      </div>
    </div>
  );
// 4. Toggle Handler
  const handleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };
  return (
    <div>
      <ScrollRestoration />
      <div className="flex items-center justify-between">
        <div>
          <h2 className="sm:text-2xl md:text-3xl font-bold my-2">
            Investment Opportunities
          </h2>
          <p className="text-sm text-[#4B5563]">
            Discover your next profitable investment
          </p>
        </div>
<div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="flex items-center gap-4 border font-medium bg-white text-xs sm:text-sm rounded px-6 py-2">
            <Filter />
            Filter
          </button>
          
          {/* 5. Update Button onClick */}
          <button
            onClick={handleSort}
            className="flex items-center gap-3 border font-medium bg-white text-xs sm:text-sm rounded px-6 py-2 hover:bg-gray-50 transition-colors"
          >
            <Sort />
            Sort by Status ({sortOrder === "asc" ? "Asc" : "Desc"})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {isLoading ? (
          // Render 6 Skeleton cards while loading
          [...Array(6)].map((_, index) => <ProjectSkeleton key={index} />)
        ) : (
          // Render Actual Data
          project?.data?.map((project, index) => {
            return (
              <Link
                to={`/dashboard/project-view-description/${project.slug}`}
                key={index}
                className="bg-[#F3F3F3] p-5 rounded-2xl "
              >
                <div className="overflow-hidden rounded-2xl relative">
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl">
                    <img
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>

                  {/* Top badge + profit */}
                  <div className="absolute top-2 flex justify-between w-full px-2">
                    <button className="bg-custom-primary py-1 px-2 text-white rounded-lg text-sm h-fit">
                      {project.project_status}
                    </button>
                    <div className="bg-white p-2 rounded-lg border">
                      <h2 className="text-custom-primary text-sm">
                        EST. Profit
                      </h2>
                      <p className="text-custom-primary text-lg font-bold">
                        {project.estimated_profit}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="flex flex-col sm:flex-row justify-between mt-4 font-bold text-lg lg:text-[20px]">
                    <h2>{project.title}</h2>
                    <h2>{project.price}</h2>
                  </div>
                  <p
                    className="text-[#4B5563] py-2"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Location />
                      <p className="text-sm text-[#4B5563]">
                        {project.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Unit />
                      <p className="text-sm text-[#4B5563]">{project.units}</p>
                    </div>
                  </div>

                  <div className="flex justify-between py-3 font-medium text-[17px]">
                    <h3 className="text-[#4B5563]">Funding Progress</h3>
                    <h3>{project?.user_investment?.progress_percent}% Complete</h3>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-custom-primary h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${project?.user_investment?.progress_percent}%`,
                      }}
                    />
                  </div>

                  <div className="flex justify-between flex-wrap py-2 gap-y-3">
                    <div className="py-3 font-medium">
                      <h3 className="text-[#4B5563]">Total Return</h3>
                      <h2>{project.total_return}</h2>
                    </div>
                    <div className="py-3 font-medium">
                      <h3 className="text-[#4B5563]">Min Investment</h3>
                      <h2>{project.min_investment}</h2>
                    </div>
                    <div className="py-3 font-medium">
                      <h3 className="text-[#4B5563]">Terms</h3>
                      <h2>{project.term}</h2>
                    </div>
                  </div>

                  <button className="mt-auto py-2.5 lg:py-3 text-[15px] font-medium bg-custom-primary text-white border hover:bg-custom-primary/80 rounded-lg cursor-pointer w-full text-center transform transition-all duration-200 ease-in-out">
                    View Property
                  </button>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BrowserOpportunities;