import { useState } from "react";
import {
  ArrowLeft,
  Building,
  Calendar,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function InvestmentConfirmation() {
  const [verificationCode, setVerificationCode] = useState("");

  const handleConfirm = () => {
    if (verificationCode.length === 6) {
      alert("Investment confirmed successfully!");
    } else {
      alert("Please enter a valid 6-digit verification code");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Confirm Your Investment
              </h1>
              <p className="text-gray-600">
                Review and confirm your investment details
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
            Final Step
          </span>
        </div>

        {/* Main Title */}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Investment Summary & Security */}
          <div className="lg:col-span-2 space-y-6">
            {/* Investment Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">$</span>
                <h2 className="text-xl font-semibold text-gray-900">
                  Investment Summary
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    $50,000
                  </div>
                  <div className="text-sm text-gray-500">Investment Amount</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    12-15%
                  </div>
                  <div className="text-sm text-gray-500">
                    Expected Annual Return
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Building className="text-gray-400 mt-1" size={20} />
                  <div>
                    <div className="font-medium text-gray-900">
                      Luxury Residential Complex
                    </div>
                    <div className="text-sm text-gray-500">Manhattan, NY</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-gray-400" size={16} />
                    <span className="text-gray-600">Duration: 18 months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-gray-400" size={16} />
                    <span className="text-gray-600">Return: 12-15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Verification */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
 

              <Link to={"/dashboard/investment-success"}
                onClick={handleConfirm}
                className="w-full bg-custom-primary block text-center text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                Confirm Investment
              </Link>
            </div>
          </div>

          {/* Right Column - Investment Breakdown & Notes */}
          <div className="space-y-6">
            {/* Investment Breakdown */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Investment Breakdown
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Investment Amount</span>
                  <span className="font-medium">$50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-medium">$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-medium">$0</span>
                </div>
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">
                      Total Investment
                    </span>
                    <span className="font-bold text-gray-900">$50,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Important Notes
              </h3>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Investment will be processed within 24 hours</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>You will receive email confirmation</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>14-day cooling-off period applies</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Returns will be distributed quarterly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
