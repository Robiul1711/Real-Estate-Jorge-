import React from 'react';
import { ArrowLeft, CheckCircle, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConfirmWithdrawal() {
  return (
    <div className=" bg-gray-50 ">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center p-6  border-gray-100">
            <Link to="/dashboard/withdrawal-method">
          <ArrowLeft className="w-5 h-5 text-gray-600 mr-3" />
            </Link>
          <h1 className="text-lg font-semibold text-gray-900">Confirm Withdrawal</h1>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Success Icon and Title */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Review Your Withdrawal</h2>
            <p className="text-gray-500 text-sm">Please review the details before confirming</p>
          </div>

          {/* Withdrawal Details */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Withdrawal Amount</span>
              <span className="font-semibold text-gray-900">$1,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">You'll Receive</span>
              <span className="font-semibold text-gray-900">$1,000</span>
            </div>
          </div>

          {/* Withdrawal Method */}
          <div className="mb-6">
            <h3 className="text-gray-900 font-medium mb-3">Withdrawal Method</h3>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Bank Transfer</div>
                <div className="text-sm text-gray-500">1-3 business days</div>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <div>Sample Bank - ****7890</div>
              <div>John Doe</div>
            </div>
          </div>

          {/* Processing Information */}
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <h4 className="text-green-700 font-medium mb-3">Processing Information</h4>
            <div className="space-y-2 text-sm text-green-700">
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Your withdrawal will be processed within the specified timeframe</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>You'll receive an email confirmation once processing begins</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Contact support if you don't receive funds within the expected time</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>This transaction cannot be cancelled once confirmed</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Back
            </button>
            <Link to="/dashboard/withdrawal-request-successful" className="flex-1 px-4 py-3 text-center text-white bg-green-500 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Confirm Withdrawal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}