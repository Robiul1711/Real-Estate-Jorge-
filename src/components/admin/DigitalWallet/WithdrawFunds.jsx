import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WithdrawFunds() {
  const [withdrawalAmount, setWithdrawalAmount] = useState('0.00');
  const [selectedAmount, setSelectedAmount] = useState(null);

  const quickSelectAmounts = [500, 1000, 2500, 5000, 10000];

  const handleQuickSelect = (amount) => {
    setSelectedAmount(amount);
    setWithdrawalAmount(amount.toLocaleString());
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    if (!isNaN(value) && value !== '') {
      setWithdrawalAmount(parseFloat(value).toLocaleString());
      setSelectedAmount(null);
    } else if (value === '') {
      setWithdrawalAmount('0.00');
      setSelectedAmount(null);
    }
  };

  return (
    <div className=" bg-gray-50 ">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center p-6 border-b border-gray-100">
            <Link to="/dashboard/payment">
          <ArrowLeft className="w-5 h-5 text-gray-600 mr-4 cursor-pointer" />
            </Link>
          <h1 className="text-lg font-semibold text-gray-900">Withdraw Funds</h1>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Available Balance */}
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-lg">$</span>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Available Balance</p>
              <p className="text-2xl font-bold text-gray-900">$45,000</p>
            </div>
          </div>

          {/* Withdrawal Amount */}
          <div className="mb-6">
            <p className="text-gray-900 font-medium mb-4">How much would you like to withdraw?</p>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Withdrawal Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="text"
                  value={withdrawalAmount}
                  onChange={handleAmountChange}
                  className="w-full pl-8 pr-4 py-3 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          {/* Quick Select */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-4">Quick Select</p>
            <div className="grid grid-cols-3 gap-3">
              {quickSelectAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickSelect(amount)}
                  className={`py-3 px-4 rounded-lg border text-sm font-medium transition-colors ${
                    selectedAmount === amount
                      ? 'bg-green-50 border-green-500 text-green-700'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  ${amount.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <p className="text-sm font-medium text-green-800 mb-3">Important Notes:</p>
            <div className="space-y-2 text-xs text-green-700">
              <p>• Withdrawals typically take 1-3 business days to process</p>
              <p>• Minimum withdrawal amount is $100</p>
              <p>• No fees for withdrawals above $500</p>
              <p>• $5 processing fee applies for withdrawals under $500</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 py-3 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <Link to="/dashboard/withdrawal-method" className="flex-1 py-3 px-4 text-center text-white bg-green-500 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}