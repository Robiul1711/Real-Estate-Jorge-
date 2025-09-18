import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RequestSubmittedSuccessfully() {

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-sm max-w-xl w-full p-8 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-white stroke-[3]" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Request Submitted Successfully!
        </h1>

        {/* Step Indicator */}
        <div className="mb-6">
          <p className="text-gray-500 text-sm font-medium">
            Step 1 of 2: Complete
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-600 leading-relaxed">
            Your fund request has been submitted for admin review. You'll receive a notification once it's approved.
          </p>
        </div>

        {/* Return Button */}
        <Link 
          to="/dashboard"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}