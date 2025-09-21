import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle, FileText, Shield, Clock, User, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentTermsConditions = () => {
  const [riskDisclosureChecked, setRiskDisclosureChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [gdprChecked, setGdprChecked] = useState(false);
  const [coolingOffChecked, setCoolingOffChecked] = useState(false);
  const [investorClassificationChecked, setInvestorClassificationChecked] = useState(false);

  const progressItems = [
    { label: "Risk Disclosure", completed: riskDisclosureChecked },
    { label: "Terms & Conditions", completed: termsChecked },
    { label: "Data Processing", completed: gdprChecked },
    { label: "Cooling Off Period", completed: coolingOffChecked },
    { label: "Investor Classification", completed: investorClassificationChecked }
  ];

  const completedCount = progressItems.filter(item => item.completed).length;
  const allCompleted = completedCount === progressItems.length;

  const handleBack = () => {
    console.log("Going back...");
  };

  const handleAcceptTerms = () => {
    if (allCompleted) {
      console.log("Proceeding with investment...");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back</span>
            </button>
            
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Investment Terms & Conditions</h1>
              <p className="text-sm text-gray-600">Please read and accept all terms before proceeding</p>
            </div>
          </div>
          
          <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
            <span className="text-sm font-medium text-gray-700">Investment: $50,000</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Important Notice */}
            <div className=" text-white rounded-xl p-4 border border-red-500">
              <div className="flex items-start space-x-3 text-red-500">
                <AlertTriangle className="h-5 w-5  mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Important Notice</h3>
                  <p className="text-sm ">This investment is subject to European Union regulations. Please read all terms carefully.</p>
                </div>
              </div>
            </div>

            {/* Risk Disclosure Statement */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h2 className="text-lg font-semibold text-gray-900">Risk Disclosure Statement</h2>
              </div>
              
              <div className="space-y-4 mb-6">
                <h3 className="font-medium text-gray-900">Investment Risks</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Real estate investments carry inherent market risks</li>
                  <li>• Returns are not guaranteed and may vary significantly</li>
                  <li>• Your capital is at risk and you may lose some or all of your investment</li>
                  <li>• Property values can fluctuate due to market conditions</li>
                  <li>• Liquidity may be limited during the investment period</li>
                </ul>
              </div>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={riskDisclosureChecked}
                  onChange={(e) => setRiskDisclosureChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">I Acknowledge And Understand The Investment Risks Outlined Above</span>
              </label>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="h-5 w-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-gray-900">Terms and Conditions</h2>
              </div>
              
              <div className="space-y-4 mb-6">
                <h3 className="font-medium text-gray-900">General Terms</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p>1. Investment Period: Minimum investment period is 36 months from the date of investment.</p>
                  <p>2. Fees: Management fee of 2% annually will be deducted from returns.</p>
                  <p>3. Distributions: Dividends will be distributed quarterly, subject to project performance.</p>
                  <p>4. Exit Strategy: Investors may exit after the minimum period with 90 days notice.</p>
                  <p>5. Compliance: This investment complies with EU MiFID II regulations.</p>
                  <p>6. Dispute Resolution: Any disputes will be resolved through arbitration in accordance with EU law.</p>
                </div>
              </div>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={termsChecked}
                  onChange={(e) => setTermsChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">I Agree To The Terms And Conditions Outlined Above</span>
              </label>
            </div>

            {/* GDPR Data Processing Agreement */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-5 w-5 text-green-500" />
                <h2 className="text-lg font-semibold text-gray-900">GDPR Data Processing Agreement</h2>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-700 mb-4">
                  In Accordance With The General Data Protection Regulation (GDPR), 
                  We Process Your Personal Data For The Purpose Of Managing Your 
                  Investment. Your Data Will Be Stored Securely And Will Not Be Shared 
                  With Third Parties Without Your Explicit Consent, Except Where Required 
                  By Law.
                </p>
              </div>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={gdprChecked}
                  onChange={(e) => setGdprChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">I Consent To The Processing Of My Personal Data As Described</span>
              </label>
            </div>

            {/* Cooling-Off Period */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-5 w-5 text-orange-500" />
                <h2 className="text-lg font-semibold text-gray-900">Cooling-Off Period</h2>
              </div>
              
              <div className="bg-custom-primary text-white rounded-xl p-4 mb-6">
                <p className="text-sm">
                  14-Day Cooling-Off Period: You have the right to cancel your investment 
                  within 14 days of making the investment without giving any reason. During 
                  this period, you can withdraw your investment and receive a full refund.
                </p>
              </div>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={coolingOffChecked}
                  onChange={(e) => setCoolingOffChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">I Understand My Cooling-Off Period Rights</span>
              </label>
            </div>

            {/* Investor Classification */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-5 w-5 text-purple-500" />
                <h2 className="text-lg font-semibold text-gray-900">Investor Classification</h2>
              </div>
              
              <div className="mb-6">
                <p className="text-sm text-gray-700">
                  Based On Your Investment Profile And Regulatory Requirements, You Are 
                  Classified That You May Not Have The Same Level Of Protection As 
                  Professional Investors. You Confirm That This Investment Is Suitable For 
                  Your Financial Situation And Investment Objectives.
                </p>
              </div>
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={investorClassificationChecked}
                  onChange={(e) => setInvestorClassificationChecked(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">I CONFIRM MY INVESTOR CLASSIFICATION AND SUITABILITY ASSESSMENT</span>
              </label>
            </div>
          </div>

          {/* Right Sidebar - Agreement Progress */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Agreement Progress</h2>
              
              <div className="space-y-4 mb-6">
                {progressItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item.label}</span>
                    {item.completed ? (
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <div className="h-4 w-4 border border-gray-300 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <div className="text-center text-sm text-gray-600 mb-2">
                  {completedCount} of 5 agreements completed
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-custom-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedCount / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <Link to={"/dashboard/investment-confirmation"}
                onClick={handleAcceptTerms}
                disabled={!allCompleted}
                className={`w-full py-3 px-4 rounded-xl font-medium transition-colors block text-center duration-200 ${
                  allCompleted
                    ? 'bg-custom-primary text-white hover:bg-gray-800'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Accept All Terms To Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTermsConditions;