import React, { useState } from "react";

const ROICalculator = ({data}) => {
  // console.log(data?.roi_calculator)
  const [investment, setInvestment] = useState(data?.roi_calculator?.input_amount);



  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 font-sans">
      {/* Header */}
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        ROI Calculator
      </h1>

      {/* Investment Input Section */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Investment Amount ($)
        </label>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(Number(e.target.value))}
          className="w-full px-4 py-3 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50"
          placeholder="50000"
        />
      </div>

      {/* Results Section */}
      <div className="flex gap-4">
        {/* Total Returns Card */}
        <div className="flex-1 bg-custom-primary rounded-2xl p-4 text-white">
          <div className="text-2xl font-bold mb-1">
            {formatCurrency(data?.roi_calculator?.total_returns)}
          </div>
          <div className="text-green-100 text-sm font-medium">
            Total Returns
          </div>
        </div>

        {/* Total Value Card */}
        <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-4">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(data?.roi_calculator?.total_value)}
          </div>
          <div className="text-gray-500 text-sm font-medium">Total Value</div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
