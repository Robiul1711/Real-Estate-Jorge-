import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, DollarSign, Target, Clock } from "lucide-react";

const FinancialInformation = ({ data }) => {
  // 1. Safely access the nested data structure
  // This checks both your deep structure and a direct prop pass for flexibility
  const financialData = data?.data?.tabs?.financial_information || data?.financial_information || {};

  // 2. Transform the 'financials' array for the Pie Chart
  // We need to strip the "$" and "," from strings like "$12,000,000" to make them numbers
  const COLORS = ["#30B767", "#008156", "#005820", "#00260E", "#86EFAC"];
  
  const formattedPieData = financialData?.financials?.map((item, index) => ({
    name: item.title,
    value: Number(item.cost.toString().replace(/[^0-9.-]+/g, "")) || 0, // Clean string to number
    color: COLORS[index % COLORS.length],
    displayCost: item.cost // Keep original string for display
  })) || [];

  // Note: Your provided JSON did not include 'revenueData', so keeping this 
  // hardcoded for the Bar Chart to prevent the UI from breaking.
  const revenueData = [
    { month: "Month 6", projected: 400000, actual: 350000, target: 200000 },
    { month: "Month 12", projected: 800000, actual: 450000, target: 300000 },
    { month: "Month 15", projected: 1200000, actual: 550000, target: 500000 },
    { month: "Month 18", projected: 1500000, actual: 750000, target: 800000 },
  ];

  return (
    <div className="">
      <div className=" space-y-6">
        {/* Top Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Total Project Cost */}
          <div className="group bg-white rounded-lg p-6 shadow-sm hover:bg-custom-primary transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 group-hover:text-gray-300">
                  Total Project Cost
                </p>
                <p className="text-2xl font-bold text-gray-900 group-hover:text-white">
                  ${(financialData?.summary_cards?.total_project_cost || 0).toLocaleString()}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-gray-400 group-hover:text-white" />
            </div>
          </div>

          {/* Projected Revenue */}
          <div className="group bg-white rounded-lg p-6 shadow-sm hover:bg-custom-primary transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 group-hover:text-gray-300">
                  Projected Revenue
                </p>
                <p className="text-2xl font-bold text-gray-900 group-hover:text-white">
                  ${(financialData?.summary_cards?.project_revenue || 0).toLocaleString()}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-gray-400 group-hover:text-white" />
            </div>
          </div>

          {/* ROI */}
          <div className="group bg-white rounded-lg p-6 shadow-sm hover:bg-custom-primary transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 group-hover:text-gray-300">
                  ROI
                </p>
                <p className="text-2xl font-bold text-gray-900 group-hover:text-white">
                  {financialData?.summary_cards?.roi}%
                </p>
                <p className="text-xs text-gray-500 group-hover:text-gray-400">
                   Margin: {financialData?.summary_cards?.profit_margin}%
                </p>
              </div>
              <Target className="h-8 w-8 text-blue-500 group-hover:text-white" />
            </div>
          </div>

          {/* IRR */}
          <div className="group bg-white rounded-lg p-6 shadow-sm hover:bg-custom-primary transition duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 group-hover:text-gray-300">
                  IRR
                </p>
                <p className="text-2xl font-bold text-gray-900 group-hover:text-white">
                  {financialData?.summary_cards?.irr}%
                </p>
              </div>
              <Clock className="h-8 w-8 text-gray-400 group-hover:text-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Project Cost Breakdown */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Project Cost Breakdown
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={formattedPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {formattedPieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="flex-1 w-full sm:w-auto mt-2 sm:mt-0 ml-8 space-y-4">
                {formattedPieData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {item.displayCost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Revenue Projection */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Revenue Projection
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} barCategoryGap="20%">
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    tickFormatter={(value) => `$${value / 1000}K`}
                  />
                  <Bar
                    dataKey="projected"
                    fill="#30B767"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar dataKey="actual" fill="#6B7280" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="target" fill="#000" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-custom-primary rounded mr-2"></div>
                <span className="text-xs text-gray-600">Projected</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded mr-2"></div>
                <span className="text-xs text-gray-600">Actual</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-black rounded mr-2"></div>
                <span className="text-xs text-gray-600">Target</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Financial Metrics */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Key Financial Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {financialData?.key_metrics?.roi}%
              </div>
              <div className="text-sm text-gray-600">ROI</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                ${(financialData?.key_metrics?.revenue_multiple || 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Revenue Multiple</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {financialData?.key_metrics?.duration_months} mo
              </div>
              <div className="text-sm text-gray-600">Payback Period</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {financialData?.key_metrics?.annual_yield}
              </div>
              <div className="text-sm text-gray-600">Annual Yield</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialInformation;