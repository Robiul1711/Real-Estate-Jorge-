import { Check, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function WithdrawalRequestSuccessful() {
  return (
    <div className=" bg-gray-50 flex items-center justify-center ">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-sm p-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-white stroke-[3]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-900 text-center mb-2">
          Withdrawal Request Successful!
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 text-center mb-8">
          Your withdrawal request has been submitted successfully
        </p>

        {/* Transaction Details */}
        <div className="space-y-6 mb-8">
          {/* Amount and Processing Time */}
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Amount</p>
              <p className="text-sm font-medium text-gray-900">$5,000</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Processing Time</p>
              <p className="text-sm font-medium text-gray-900">1-3 business days</p>
            </div>
          </div>

          {/* Transaction ID and Date */}
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Transaction ID</p>
              <p className="text-sm font-medium text-gray-900">WD21220637</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Date & Time</p>
              <p className="text-sm font-medium text-gray-900">July 7, 2025 at 08:47 PM</p>
            </div>
          </div>
        </div>

        {/* What happens next section */}
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-medium text-green-800 mb-3">What happens next?</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-xs text-green-700">
                You'll receive an email confirmation within 5 minutes
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-xs text-green-700">
                Your funds will be processed within 3 to 5 business days
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-xs text-green-700">
                Track your withdrawal status in the transaction history
              </p>
            </div>
          </div>
        </div>

        {/* Back to Dashboard Button */}
        <Link to="/dashboard" className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors">
          <Home className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        {/* Support Contact */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Need help? Contact our support team at{" "}
          <a href="mailto:support@propertypath.com" className="text-green-500 hover:text-green-600">
            support@propertypath.com
          </a>
        </p>
      </div>
    </div>
  );
}