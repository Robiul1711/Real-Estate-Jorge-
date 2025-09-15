import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock } from 'lucide-react';

export default function YourInvestment() {
  const [investment, setInvestment] = useState(50000);
  const [period, setPeriod] = useState(18);
  
  // Calculate returns (assuming 14% annual return)
  const annualRate = 0.14;
  const monthlyRate = annualRate / 12;
  const totalReturns = investment * Math.pow(1 + monthlyRate, period) - investment;
  const totalValue = investment + totalReturns;
  const monthlyReturns = totalReturns / period;

  return (
    <div className=" bg-white rounded-lg shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <p className="text-gray-600 text-sm mb-2">You don't Invest Yet.</p>
        <p className="text-gray-800 font-medium">Calculate your return Below</p>
      </div>

      {/* Investment Calculator Section */}
      <div className="border rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Investment Calculator</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Investment Amount ($)</label>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Investment Period (Months)</label>
            <input
              type="number"
              value={period}
              onChange={(e) => setPeriod(Number(e.target.value))}
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-2xl  font-bold">${investment.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Your Investment</div>
          </div>
          <div className="bg-custom-primary text-white rounded-lg p-3">
            <div className="text-xl font-bold">${totalReturns.toLocaleString()}</div>
            <div className="text-xs">Total Returns</div>
          </div>
          <div>
            <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Total Value</div>
          </div>
        </div>
      </div>

      {/* Return Breakdown */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Return Breakdown</h2>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Annual Return Rate</span>
            <span className="text-green-500 font-semibold">14.0%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Monthly Returns</span>
            <span className="font-semibold">${monthlyReturns.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Investment Period</span>
            <span className="font-semibold">{period} months</span>
          </div>
        </div>

        <div className="mt-4 bg-custom-primary text-white rounded-lg p-3 flex justify-between items-center">
          <span className="font-semibold">Total Return</span>
          <span className="font-bold">${totalReturns.toLocaleString()}</span>
        </div>
      </div>

      {/* Investment Timeline */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold">Investment Timeline</h2>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div>
              <div className="font-semibold text-sm">Investment Start</div>
              <div className="text-xs text-gray-500">Immediate upon confirmation</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div>
              <div className="font-semibold text-sm">Quarterly Returns</div>
              <div className="text-xs text-gray-500">Returns distributed every 3 months</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div>
              <div className="font-semibold text-sm">Investment Maturity</div>
              <div className="text-xs text-gray-500">Full returns after {period} months</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
