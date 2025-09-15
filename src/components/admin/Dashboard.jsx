import { Active, Arrow, Dollar, Return, Time } from "@/assets/icon";
import React from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import { ScrollRestoration } from "react-router-dom";
import RecentInvestment from "./RecentInvestment";
const Dashboard = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white p-5 rounded-2xl space-y-1 shadow-md hover:shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-[#666666] font-medium">Total Invested</h3>
            <Dollar />
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A]">$127,500</h2>
          <p className="text-sm text-[#21C45D] flex items-center">
            <Arrow />
            +12.5% from last month
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl space-y-1 shadow-md hover:shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-[#666666] font-medium">Current Returns</h3>
            <Return />
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A]">$23,850</h2>
          <p className="text-sm text-[#21C45D] flex items-center">
            <Arrow />
            +18.7% from last month
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl space-y-1 shadow-md hover:shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-[#666666] font-medium">Active Investments</h3>
            <Active />
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A]">8</h2>
          <p className="text-sm text-[#21C45D] flex items-center">
            <Arrow />
            +2 from last month
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl space-y-1 shadow-md hover:shadow-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-[#666666] font-medium">Avg. Return Time</h3>
            <Time />
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A]">14 months</h2>
          <p className="text-sm text-[#21C45D] flex items-center">
            <Arrow />
            -2 months from last month
          </p>
        </div>
      </div>
      <div className="flex justify-between items-start gap-12 w-full my-8">
        <div className="w-full md:w-[68%] bg-white p-5 rounded-2xl space-y-1 shadow-md">
  
     <RecentInvestment />
        </div>
        <div className="w-full md:w-[30%] bg-white p-8 rounded-2xl space-y-1 shadow-md">
          <div>
            <h2 className="text-2xl font-semibold text-[#0F172A]">
              New Opportunities
            </h2>
            <p className="text-sm text-[#666666]">
              Latest investment opportunities
            </p>
          </div>
          <div className="my-6 p-5 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#0F172A]">
              Downtown Office Complex
            </h2>
            <p className="text-[#666666]">Chicago, IL</p>
            <div className="flex justify-between py-2  text-sm font-medium">
              <h3 className="text-[#4B5563]">20%</h3>
              <h3 className="text-[#16A34A]">ROI</h3>
            </div>
            <div>
              <div className="flex justify-between pb-3 text-sm font-medium">
                <h3 className="text-[#4B5563]">Min. Investment</h3>
                <h3 className="text-[#16A34A]">$15,000</h3>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-custom-primary h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `20%` }}
                />
              </div>
            </div>
            <p className="text-sm text-[#666666] my-1">65% funded</p>
            <button className="bg-custom-primary text-[#FFF] text-center w-full font-semibold text-sm px-2 py-2 md:py-2.5 rounded my-2 relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#111827] before:translate-x-[-200px] hover:before:translate-x-0 before:translate-y-12 hover:before:translate-y-0 before:duration-300 before:z-[-1] z-0 cursor-pointer">
              View Details
            </button>
          </div>
          <div className="my-6 p-5 border border-gray-200 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#0F172A]">
              Luxury Condominiums
            </h2>
            <p className="text-[#666666]">Seattle, WA</p>
            <div className="flex justify-between py-2  text-sm font-medium">
              <h3 className="text-[#4B5563]">15%</h3>
              <h3 className="text-[#16A34A]">ROI</h3>
            </div>
            <div>
              <div className="flex justify-between text-sm pb-3 font-medium">
                <h3 className="text-[#4B5563]">Min. Investment</h3>
                <h3 className="text-[#16A34A]">$10,000</h3>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-custom-primary h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `30%` }}
                />
              </div>
            </div>
            <p className="text-sm text-[#666666] my-1">30% funded</p>
            <button className="bg-custom-primary text-[#FFF] text-center w-full font-semibold text-sm px-2 py-2 md:py-2.5 rounded my-2 relative overflow-hidden before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#111827] before:translate-x-[-200px] hover:before:translate-x-0 before:translate-y-12 hover:before:translate-y-0 before:duration-300 before:z-[-1] z-0 cursor-pointer">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
