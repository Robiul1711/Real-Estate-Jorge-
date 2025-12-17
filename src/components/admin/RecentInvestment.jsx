import React from "react";
import residential from "@/assets/images/residential.png";
import { MdOutlineArrowForward } from "react-icons/md";

// Sample Data Array
const investments = [
  {
    id: 1,
    title: "Skyline Residences",
    location: "Manhattan, NY",
    investment: "$25,000",
    totalInvestment: "$255,000",
    roi: "18% ROI",
    status: "Active",
    img: residential,
    progress: 60,
  },
  {
    id: 2,
    title: "Skyline Residences",
    location: "Manhattan, NY",
    investment: "$25,000",
    roi: "18% ROI",
    status: "Active",
    img: residential,
    progress: 50,
  },
  {
    id: 3,
    title: "Skyline Residences",
    location: "Manhattan, NY",
    investment: "$25,000",
    roi: "18% ROI",
    status: "Active",
    img: residential,
    progress: 40,
  },
];

export default function RecentInvestment({data}) {
  console.log(data?.recent_investments)
  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#0F172A]">
            Recent Investments
          </h2>
          <p className="text-sm text-[#666666]">
            Your latest investment activities
          </p>
        </div>
        <button className="bg-custom-primary text-white text-sm md:text-base font-medium px-4 py-2 md:py-2.5 rounded-lg flex items-center gap-2 relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#111827] before:translate-x-[-200px] hover:before:translate-x-0 before:translate-y-12 hover:before:translate-y-0 before:duration-300 before:z-[-1] z-0 cursor-pointer">
          View All <MdOutlineArrowForward size={18} />
        </button>
      </div>

      {/* Investment Cards */}
      <div className="space-y-4 p-4">
        {data?.recent_investments?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 rounded-xl shadow-sm p-4 gap-4"
          >
            {/* Image */}
            <img
              src={item?.project?.image}
              alt={item.title}
              className="w-full sm:w-32 sm:h-24 h-40 object-cover rounded-lg"
            />

            {/* Details */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    {item?.project?.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {item.location}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Investment:{" "}
                    <span className="font-medium">{item.investment_amount}</span>
                  </p>
                </div>

                {/* Status */}
                <span className="text-[10px] md:text-xs px-2 py-1 rounded-md bg-blue-100 text-blue-600 font-medium self-start sm:self-auto">
                  {item.status}
                </span>
              </div>

              {/* Total Investment / ROI */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs md:text-sm mt-2 gap-1">
                {item.total_investment && (
                  <p className="text-gray-600">
                    Total Investment: {item.total_investment}
                  </p>
                )}
                {item.roi && (
                  <p className="text-custom-primary font-medium">{item.roi}</p>
                )}
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-custom-primary h-2 rounded-full"
                  style={{ width: `${item.progress_percent}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
