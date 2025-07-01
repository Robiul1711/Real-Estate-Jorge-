import React, { useState } from 'react';
import { ArrowLeft, User, Wallet, CheckCircle, AlertTriangle, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentVerification = () => {
  const [showWarning, setShowWarning] = useState(true);

  const profileStatus = [
    { title: "PROFILE COMPLETE", subtitle: "COMPLETED", status: "completed" },
    { title: "DOCUMENTS", subtitle: "UPLOADED", status: "completed" },
    { title: "VERIFICATION", subtitle: "VERIFIED", status: "completed" },
    { title: "RISK ASSESSMENT", subtitle: "COMPLETED", status: "completed" }
  ];

  const eligibilityItems = [
    { label: "Profile Complete", status: "completed" },
    { label: "Sufficient Balance", status: "completed" }
  ];

  const warningPoints = [
    "This investment involves risk and you may lose money",
    "Investments are not covered by deposit protection schemes",
    "You should not invest more than you can afford to lose",
    "Past performance is not a guide to future performance",
    "The value of investments can go down as well as up"
  ];

  const handleProceedToInvestment = () => {
    console.log("Proceeding to investment...");
    // In a real app, this would navigate to the investment flow
  };

  const handleBack = () => {
    console.log("Going back...");
    // In a real app, this would navigate back
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard/project-view-description/:id" 
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back</span>
            </Link>
            
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Investment Verification</h1>
              <p className="text-sm text-gray-600">Verifying your investment eligibility</p>
            </div>
          </div>
          
          <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
            <span className="text-sm font-medium text-gray-700">Investment: $50,000</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Investor Profile Status */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <User className="h-5 w-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Investor Profile Status</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profileStatus.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-[#F9FAFB] rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 text-emerald-500" fill="currentColor" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wallet Balance Verification */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Wallet className="h-5 w-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Wallet Balance Verification</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="text-center bg-[#F9FAFB] rounded-xl p-4">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$125,000</div>
                  <div className="text-sm text-gray-600">Available Balance</div>
                </div>
                
                <div className="text-center bg-[#F9FAFB] rounded-xl p-4">
                  <div className="text-3xl font-bold text-gray-900 mb-2">$50,000</div>
                  <div className="text-sm text-gray-600">Investment Amount</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Balance After Investment</span>
                  <span className="text-lg font-semibold text-emerald-600">$75,000</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-emerald-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Sufficient balance available</span>
                </div>
              </div>
            </div>

            {/* Investment Warning */}
            {showWarning && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <h2 className="text-lg font-semibold text-gray-900">Investment Warning</h2>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-4 text-white">
                  <p className="text-sm mb-3 font-medium">Please ensure you understand the following before proceeding:</p>
                  <ul className="space-y-2">
                    {warningPoints.map((point, index) => (
                      <li key={index} className="text-sm flex items-start space-x-2">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Eligibility Check */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Eligibility Check</h2>
              
              {/* Status Icon */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Eligible to Invest</div>
                <div className="text-sm text-gray-600">All requirements met</div>
              </div>
              
              {/* Eligibility Items */}
              <div className="space-y-3 mb-6">
                {eligibilityItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item.label}</span>
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  </div>
                ))}
              </div>
              
              {/* Proceed Button */}
              <Link to={"/dashboard/investment-terms-conditions"}
                onClick={handleProceedToInvestment}
                className="w-full block text-center bg-gray-900 text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Proceed To Investment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentVerification;