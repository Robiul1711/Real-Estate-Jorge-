import { Method } from "@/assets/icon";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, ScrollRestoration } from "react-router-dom";

const AddFunds = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-6">
      <ScrollRestoration />

      {/* Back link */}
      <div className="flex items-center gap-2 self-start mb-6">
        <Link to="/dashboard/payment">
          <IoArrowBackOutline className="text-xl" />
        </Link>
        <p className="font-medium text-sm sm:text-base">Back to Dashboard</p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-1">
          Add Funds to Wallet
        </h2>
        <p className="text-sm text-[#6B7280] mb-4">
          Step 1 of 3: Enter the amount you want to add
        </p>

        {/* Amount Input */}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-[#111827]"
          >
            Amount to Add (USD)
          </label>
          <input
            id="amount"
            placeholder="Enter Amount"
            type="text"
            className="w-full px-4 py-2.5 border border-[#D1D5DB] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black/80"
          />
        </div>

        {/* Method Info Box */}
        <div className="bg-[#F9FAFB] p-5 rounded-lg mb-4">
          <h3 className="text-[#111827] font-medium flex items-center gap-2 mb-2">
            <Method /> Payment Method
          </h3>
          <p className="text-sm text-[#6B7280]">
            Bank transfer only. You'll receive our bank details in the next
            step.
          </p>
        </div>

        {/* CTA Button */}
        <Link to="/dashboard/payment-details">
          <button className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-[#111] transition cursor-pointer">
            Continue to Payment Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddFunds;
