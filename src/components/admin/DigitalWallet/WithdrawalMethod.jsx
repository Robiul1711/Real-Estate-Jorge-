import React from "react";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const WithdrawalMethod = () => {
  return (
    <div className="  flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
            <Link to="/dashboard/withdraw-funds">
          <ArrowLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
            </Link>
          <h1 className="text-lg font-semibold text-gray-900">Withdrawal Method</h1>
        </div>

        {/* Amount Box */}
        <div className="bg-gray-100 rounded-lg py-6 text-center mb-6">
          <p className="text-gray-600 text-sm">Withdrawing</p>
          <h2 className="text-3xl font-bold text-gray-900">$5,000</h2>
        </div>

        {/* Bank Transfer Details */}
        <div className="mb-6">
          <h3 className="text-gray-800 font-medium mb-3">Bank Transfer Details</h3>
          <div className="flex items-center justify-between border border-green-500 bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white border border-green-200 rounded-lg">
                <CreditCard className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-gray-900 font-medium">Bank Transfer</p>
                <p className="text-gray-600 text-sm">1–3 business days</p>
              </div>
            </div>
            <span className="text-sm font-medium text-gray-900">No Fee</span>
          </div>
        </div>

        {/* Bank Account Details */}
        <div>
          <h3 className="text-gray-800 font-medium mb-3">Bank Account Details</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter account number"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Enter routing number"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Enter bank name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
            Back
          </button>
          <Link to="/dashboard/confirm-withdrawal" className="flex-1 text-center bg-green-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition">
            Save & Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalMethod;
