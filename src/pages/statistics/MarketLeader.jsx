import { ImageProvider } from "@/components/common/ImageProvider";
import { useApiQuery } from "@/hooks/getCmsUpdate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar } from "lucide-react";
import React, { useRef } from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

gsap.registerPlugin(ScrollTrigger);

const MarketLeader = () => {
      const {
        data: performanceStatsData,
        isLoading,
      } = useApiQuery({
        queryKey: ["performance-stats",],
        url: "/performance/stats",
      });
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);
  const chartRef = useRef(null);
  const bottomRef = useRef(null);
  useGSAP(() => {
    const targets = [
      buttonRef.current,
      cardRef.current,
      sectionRef.current,
      chartRef.current,
      bottomRef.current,
    ].filter(Boolean);

    if (targets.length) {
      gsap.from(targets, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }
  });

  // Data for the revenue chart
  const revenueData = [
    { value: performanceStatsData?.data?.projects_financed_formatted, label: "Projects Financed" },
    { value: performanceStatsData?.data?.capital_financed_formatted, label: "Capital Financed" },
    { value: performanceStatsData?.data?.capital_returned_formatted, label: "Capital Returned" },
    { value: performanceStatsData?.data?.avg_annual_return_formatted, label: "Average Annual Return" },
  ];
  const platformData = [
    { name: "Our Platform", value: 51.7, color: "#19AB9A" },
    { name: "Others", value: 48.3, color: "#F59E0B" },
  ];

  // Data for project type breakdown
  // const projectTypeData = [
  //   { name: "Capital Gains", value: 118, color: "#10B981" },
  //   { name: "Loans", value: 82, color: "#F59E0B" },
  //   { name: "Rentals", value: 11, color: "#8B5CF6" },
  // ];

  // Data for the evolution line chart
  const evolutionData = [
    { month: "Jan", "Capital Gains": 5, Loans: 3, Rentals: 1 },
    { month: "Feb", "Capital Gains": 8, Loans: 5, Rentals: 1 },
    { month: "Mar", "Capital Gains": 12, Loans: 8, Rentals: 2 },
    { month: "Apr", "Capital Gains": 18, Loans: 12, Rentals: 2 },
    { month: "May", "Capital Gains": 25, Loans: 18, Rentals: 3 },
    { month: "Jun", "Capital Gains": 35, Loans: 25, Rentals: 4 },
    { month: "Jul", "Capital Gains": 45, Loans: 35, Rentals: 5 },
    { month: "Aug", "Capital Gains": 58, Loans: 45, Rentals: 6 },
    { month: "Sep", "Capital Gains": 72, Loans: 55, Rentals: 7 },
    { month: "Oct", "Capital Gains": 88, Loans: 68, Rentals: 8 },
    { month: "Nov", "Capital Gains": 105, Loans: 78, Rentals: 10 },
    { month: "Dec", "Capital Gains": 118, Loans: 82, Rentals: 11 },
  ];
  const tableData = [
    {
      projectType: "Capital Gains",
      projectsFinanced: 118,
      projectsReturned: 27,
      avgEstimatedROI: "26.80%",
      avgAchievedROI: "23%",
      weightedEstROI: "25.90%",
      weightedAchievedROI: "22%",
    },
    {
      projectType: "Loans",
      projectsFinanced: 82,
      projectsReturned: 35,
      avgEstimatedROI: "12.70%",
      avgAchievedROI: "11.90%",
      weightedEstROI: "14%",
      weightedAchievedROI: "11%",
    },
    {
      projectType: "Rentals",
      projectsFinanced: 11,
      projectsReturned: 5,
      avgEstimatedROI: "5.40%",
      avgAchievedROI: "5.40%",
      weightedEstROI: "5.50%",
      weightedAchievedROI: "5.50%",
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded shadow-lg">
          <p className="text-gray-600 text-sm">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-sm font-medium"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="section-padding-x relative bg-[#F9FAFB]">
      <div
        ref={cardRef}
        className="hidden absolute -mt-50 left-1/2 -translate-x-1/2 w-full max-w-[88%] mx-auto px-30 xl:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-custom-primary text-white rounded-sm"
      >
        {revenueData.map((value, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 space-y-4 flex flex-col items-center text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-[44px]  font-bold my-2">
              {value.value}
            </h2>
            <p className="uppercase">{value.label}</p>
          </div>
        ))}
      </div>
      <div ref={sectionRef} className="min-h-screen section-padding-x p-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Row - Platform Comparison */}
          <div ref={buttonRef} className="bg-white shadow rounded-lg">
            <div className="bg-custom-primary text-white p-6 rounded-t-lg">
              <h2 className="text-2xl font-semibold">Market Leadership</h2>
              <p className="text-lg font-medium my-2">
                Cumulative financing since 2023
              </p>
              <p>Source: Own elaboration from public data of main platforms</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 p-6 items-center">
              <div className="">
                <div className="flex items-center justify-center mb-4">
                  <ResponsiveContainer width={300} height={300}>
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomLabel}
                        outerRadius={120}
                        fill="#19AB9A"
                        dataKey="value"
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-custom-primary rounded-sm mr-2"></div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-900 ml-1">
                      51.70%
                    </span>
                    <span className=" text-gray-700">Our Platform</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-yellow-500 rounded-sm mr-2"></div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-900 ml-1">
                      48.30%
                    </span>
                    <span className=" text-gray-700">Others</span>
                  </div>
                </div>
                <div className="border-t mt-4 pt-4">
                  <p className="text-lg font-semibold text-gray-700">
                    Total: $709,758,437
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Evolution Chart */}
          <div
            ref={chartRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
          >
            {/* Project Types Breakdown */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                Total Real Estate Projects on Platform
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Distribution by project type
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b-6  border-[#F1F5F9] pb-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-custom-primary rounded-sm mr-3"></div>
                    <span className="text-gray-700">Capital Gains</span>
                  </div>
                  <span className="font-semibold text-gray-900">118</span>
                </div>

                <div className="flex items-center justify-between border-b-6  border-[#F1F5F9] pb-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-yellow-500 rounded-sm mr-3"></div>
                    <span className="text-gray-700">Loans</span>
                  </div>
                  <span className="font-semibold text-gray-900">82</span>
                </div>

                <div className="flex items-center justify-between border-b-6  border-[#F1F5F9] pb-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-purple-500 rounded-sm mr-3"></div>
                    <span className="text-gray-700">Rentals</span>
                  </div>
                  <span className="font-semibold text-gray-900">11</span>
                </div>
              </div>

              <div className="text-center mt-6 pt-4 border-t border-gray-200">
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                  Total: 211
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Evolution by Project Type
              </h3>

              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={evolutionData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    stroke="#666"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#666"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 120]}
                    ticks={[0, 20, 40, 60, 80, 100, 120]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ paddingTop: "20px" }}
                    iconType="line"
                  />
                  <Line
                    type="monotone"
                    dataKey="Capital Gains"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#10B981", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Loans"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#F59E0B", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Rentals"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#8B5CF6", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Financial Table */}
          <div ref={bottomRef} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
              Key Financial Indicators
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm font-medium text-gray-500 border-b">
                    <th className="pb-3">Project Type</th>
                    <th className="pb-3 text-center">Projects Financed</th>
                    <th className="pb-3 text-center">Projects Returned</th>
                    <th className="pb-3 text-center">Avg. Estimated ROI</th>
                    <th className="pb-3 text-center">Avg. Achieved ROI</th>
                    <th className="pb-3 text-center">Weighted Est. ROI</th>
                    <th className="pb-3 text-center">Weighted Achieved ROI</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {tableData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 font-medium text-gray-900">
                        {row.projectType}
                      </td>
                      <td className="py-4 text-center text-gray-700">
                        {row.projectsFinanced}
                      </td>
                      <td className="py-4 text-center text-gray-700">
                        {row.projectsReturned}
                      </td>
                      <td className="py-4 text-center text-yellow-600 font-medium">
                        {row.avgEstimatedROI}
                      </td>
                      <td className="py-4 text-center text-custom-primary font-medium">
                        {row.avgAchievedROI}
                      </td>
                      <td className="py-4 text-center text-yellow-600 font-medium">
                        {row.weightedEstROI}
                      </td>
                      <td className="py-4 text-center text-custom-primary font-medium">
                        {row.weightedAchievedROI}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="bg-[#F9FAFB] text-[#6B7280] mt-4 p-5 rounded-lg">
              Note: Returns are calculated based on completed projects only.
              Weighted averages consider the investment amount of each project.
              Past performance does not guarantee future results.
            </p>
          </div>

          {/* Metrics Cards */}
          <div
            ref={cardRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12"
          >
            {/* Success Rate */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={ImageProvider.value2} alt="image" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">94.2%</div>
              <div className="text-gray-600 mb-4">Success Rate</div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                <div
                  className="bg-custom-primary h-4 rounded-full"
                  style={{ width: "91.2%" }}
                ></div>
              </div>
              <div className="text-sm text-custom-primary font-medium">
                +12% from last quarter
              </div>
            </div>

            {/* Avg Funding Time */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg">
              <div className="w-12 h-12 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                18 days
              </div>
              <div className="text-gray-600 mb-4">Avg. Funding Time</div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                <div
                  className="bg-custom-primary h-4 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="text-sm text-custom-primary font-medium">
                5 days faster than industry
              </div>
            </div>

            {/* Active Investors */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={ImageProvider.investor} alt="image" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2,045</div>
              <div className="text-gray-600 mb-4">Active Investors</div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
                <div
                  className="bg-custom-primary h-4 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <div className="text-sm text-custom-primary font-medium">
                +35% monthly growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketLeader;
