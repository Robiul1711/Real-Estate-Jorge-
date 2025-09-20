import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function BenefitsDisclaimer() {
  return (
    <div className="max-w-md mx-auto   ">
      {/* Key Benefits Section */}
      <div className="bg-white p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-800 text-sm">Quarterly return distributions</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-800 text-sm">Professional property management</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-800 text-sm">Transparent reporting</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-800 text-sm">EU regulated investment</span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-800 text-sm">14-day cooling off period</span>
          </li>
        </ul>
      </div>

      {/* Risk Disclaimer Section */}
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Risk Disclaimer</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Investments carry risk. The value of investments can go down as well as up and you may get back less than you invested. Past performance is not a guide to future performance.
        </p>
      </div>
    </div>
  );
}