import { useApiMutation } from "@/hooks/useApiMutation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ROICalculator = ({ data }) => {
  console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    mutate,
    isPending,
    data: calculationResult,
  } = useApiMutation({
    url: `/projects/${data?.slug}/calculate-roi`,
    method: "post",
    secure: true,
  });

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  const formatCurrency = (num) =>
    num?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    });

  const totalProfit =
    calculationResult?.data?.returns?.total_profit ||
    data?.roi_calculator?.total_returns;
  const totalValue =
    calculationResult?.data?.returns?.total_value ||
    data?.roi_calculator?.total_value;

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 font-sans">
      {/* Header */}
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        ROI Calculator
      </h1>

      {/* Investment Input Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Investment Amount ($)
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            {...register("investment_amount", { required: true })}
            className="w-full px-4 py-3 text-lg border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50"
            placeholder="50000"
          />
          <button
            type="submit"
            disabled={isPending}
            className="bg-custom-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 whitespace-nowrap"
          >
            {isPending ? "Calculating..." : "Calculate"}
          </button>
        </div>
        {errors.investment_amount && (
          <p className="text-red-500 text-sm mt-1">Amount is required</p>
        )}
      </form>

      {/* Results Section */}
      <div className="flex gap-4">
        {/* Total Returns Card */}
        <div className="flex-1 bg-custom-primary rounded-2xl p-4 text-white">
          <div className="text-2xl font-bold mb-1">
            {formatCurrency(totalProfit)}
          </div>
          <div className="text-green-100 text-sm font-medium">
            Total Returns
          </div>
        </div>

        {/* Total Value Card */}
        <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-4">
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(totalValue)}
          </div>
          <div className="text-gray-500 text-sm font-medium">Total Value</div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
