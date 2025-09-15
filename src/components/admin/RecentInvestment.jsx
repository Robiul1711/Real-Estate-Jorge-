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
    img: residential, // replace with your image url
    progress: 60,
  },
  {
    id: 2,
    title: "Skyline Residences",
    location: "Manhattan, NY",
    investment: "$25,000",
    roi: "18% ROI",
    status: "Active",
    img: residential ,
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

export default function RecentInvestment() {
  return (
    <>
            <div className="flex items-center justify-between p-4">
                <div>
                  <h2 className="text-2xl font-semibold text-[#0F172A]">
                    Recent Investments
                  </h2>
                  <p className="text-sm text-[#666666]">
                    Your latest investment activities
                  </p>
                </div>
                <button className="bg-custom-primary text-white text-sm font-medium px-4 py-2 md:py-2.5 rounded-lg flex items-center gap-3 relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#111827] before:translate-x-[-200px] hover:before:translate-x-0 before:translate-y-12 hover:before:translate-y-0 before:duration-300 before:z-[-1] z-0 cursor-pointer">
                  View All <MdOutlineArrowForward />
                </button>
              </div>
    <div className="space-y-4 p-4">
      {investments.map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-gray-50 rounded-xl shadow-sm p-3 gap-4"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-32 h-24 object-cover rounded-lg"
          />

          {/* Details */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="text-sm text-gray-600">
                  Investment: <span className="font-medium">{item.investment}</span>
                </p>
              </div>

              {/* Status */}
              <span className="text-xs px-2 py-1 rounded-md bg-blue-100 text-blue-600 font-medium">
                {item.status}
              </span>
            </div>

            {/* Total Investment / ROI */}
            <div className="flex justify-between items-center text-sm mt-1">
              {item.totalInvestment && (
                <p className="text-gray-600">Total Investment: {item.totalInvestment}</p>
              )}
              {item.roi && <p className="text-green-600 font-medium">{item.roi}</p>}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
