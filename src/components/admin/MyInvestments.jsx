import { Filter, Sort } from "@/assets/icon";
import { Calendar, Eye } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import React, { useState } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
// import residential from "@/assets/images/residential.png"; // Unused in this file
import { useApiQuery } from "@/hooks/getCmsUpdate";
import PaginationComponent from "../common/PaginationComponent";

const MyInvestments = () => {
  const [page, setPage] = useState(1);
  const {
    data: myInvestmentsData,
    isLoading,
    error,
    refetch,
  } = useApiQuery({
    queryKey: ["my-investments", page],
    url: "/investor/my-investments",
    params: { page },
    secure: true,
  });
  const meta = myInvestmentsData?.data?.meta;

  // --- Skeleton Component ---
  const SkeletonCard = () => (
    <div className="bg-white p-5 rounded-lg my-4 animate-pulse">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left: Image & Title */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-16 h-16 bg-gray-200 rounded-md shrink-0"></div>
          <div className="space-y-2">
            <div className="h-5 bg-gray-200 rounded w-40 md:w-64"></div>
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-200 rounded-2xl"></div>
              <div className="h-6 w-16 bg-gray-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
        {/* Right: Button Placeholder */}
        <div className="h-10 w-32 bg-gray-200 rounded-md shrink-0"></div>
      </div>

      {/* Location & Communication Row */}
      <div className="flex items-center justify-between mt-4">
        <div className="h-4 w-48 bg-gray-200 rounded"></div>
        <div className="h-10 w-36 bg-gray-200 rounded-md"></div>
      </div>

      {/* Stats Grid */}
      <div className="w-full md:w-[86%] mt-4">
        <div className="flex items-start justify-between w-[90%] mb-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-3 w-20 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>

        {/* Progress Bar Section */}
        <div className="my-4 space-y-2">
          <div className="flex justify-between">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-4 w-10 bg-gray-200 rounded"></div>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Footer Dates */}
      <div className="my-4 flex items-center gap-4">
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

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

      {/* Content Area: Loading vs Data */}
      {isLoading ? (
        // Render 3 Skeletons while loading
        [...Array(3)].map((_, index) => <SkeletonCard key={index} />)
      ) : (
        myInvestmentsData?.data?.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-lg my-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ">
              {/* Left Side */}
              <div className="flex items-center gap-3 flex-wrap">
                <img
                  src={item?.project?.image}
                  alt={item?.project?.title || "Project Image"}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-[#000000] text-lg font-semibold">
                    {item?.project?.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-[#DCFCE7] text-[#166534] text-xs md:text-sm font-medium px-3 py-1 rounded-2xl">
                      {item?.project?.status}
                    </span>
                    <span className="bg-[#DBEAFE] text-[#1E40AF] text-xs md:text-sm font-medium px-3 py-1 rounded-2xl">
                      {item?.project?.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <Link
                to={`/dashboard/project-view-description/${item?.project?.slug}`}
                className="flex items-center gap-2 border border-gray-300 font-medium text-sm text-gray-700 bg-white rounded-md px-4 py-2 hover:bg-custom-primary hover:text-white transition"
              >
                <Eye size={18} /> View Details
              </Link>
            </div>

            <div className="flex items-center justify-between ">
              <p className="text-sm text-[#4B5563] flex items-center gap-2">
                <CiLocationOn /> {item?.project?.location}
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
                  <p className="text-sm text-[#000000] font-bold">
                    ${item?.your_investment}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[12px] font-medium text-[#4B5563]">
                    %property
                  </h4>
                  <p className="text-sm text-[#000000] font-bold">
                    ${item?.property_percentage}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[12px] font-medium text-[#4B5563]">
                    ROI
                  </h4>
                  <p className="text-sm text-[#16A34A] font-bold">
                    {item?.roi}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[12px] font-medium text-[#4B5563]">
                    Total Revenue
                  </h4>
                  <p className="text-sm text-[#16A34A] font-bold">
                    {" "}
                    +${parseFloat(item?.total_revenue || 0).toFixed(3)}
                  </p>
                </div>
              </div>

              <div className="my-4">
                <div className="flex justify-between text-sm pb-3 font-medium">
                  <h3 className="text-[#4B5563]">Project Progress</h3>
                  <h3 className="text-[#4B5563]">{item?.progress_percent}%</h3>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-custom-primary h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item?.progress_percent}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="my-4 flex items-center gap-4 text-[14px] text-[#4B5563]">
              <div className="flex items-center gap-3">
                <Calendar size={18} />
                <p>Started: {item?.start_date}</p>
              </div>
              <p>Expected Duration: {item?.expected_duration}</p>
            </div>
          </div>
        ))
      )}

      {/* PAGINATION */}
      <div className="flex justify-end mt-4">
        {meta && (
          <PaginationComponent
            pageCount={meta.last_page} // ✅ total pages
            setPageCount={setPage} // ✅ set page
            forcePage={page} // ✅ active page
          />
        )}
      </div>
    </div>
  );
};

export default MyInvestments;