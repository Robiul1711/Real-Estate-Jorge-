import { ArrowLeft, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export default function AddFunds() {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto">
        {/* Back to Dashboard */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <Link to="/dashboard/payment">
            <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-sm font-medium">Back to Dashboard</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Payment Details</h1>
            <p className="text-gray-600 text-sm">
              Step 1 of 2: Complete your bank transfer and submit proof
            </p>
          </div>

          {/* Bank Transfer Details Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Bank Transfer Details</h2>
            </div>

            {/* Bank Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank Name:
                  </label>
                  <p className="text-gray-900 font-medium">PropertyPath Bank Ltd</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Name:
                  </label>
                  <p className="text-gray-900 font-medium">PropertyPath Investment Ltd</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Number:
                  </label>
                  <p className="text-gray-900 font-medium">123456890123</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Routing Number:
                  </label>
                  <p className="text-gray-900 font-medium">123456789</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SWIFT Code:
                  </label>
                  <p className="text-gray-900 font-medium">PPBANKUS</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Client Code:
                  </label>
                  <p className="text-gray-900 font-medium">JHGHUI768</p>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 text-sm">
                <span className="font-medium">Important:</span> Please use the exact Specific code shown above and include this code in the transfer reference.
              </p>
            </div>

            {/* Submit Button */}
            <Link to="/dashboard/request-submitted-successfully" className="w-full text-center flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
              Submit Deposit Request
            </Link>

            {/* Footer Text */}
            <p className="text-center text-gray-600 text-sm mt-4">
              Your request will be reviewed within 24-48 hours. You'll receive a notification once approved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}