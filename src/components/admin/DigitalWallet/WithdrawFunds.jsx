import React, { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useApiQuery } from "@/hooks/getCmsUpdate";

export default function WithdrawFunds() {
  const navigate = useNavigate();
  // 🔹 Get Wallet Balance
  const { data: wallet } = useApiQuery({
    queryKey: "wallet-balance",
    url: "/wallet/balance",
    secure: true,
  });

  const [withdrawData, setWithdrawData] = useState({
    amount: "",
    bank_name: "",
    account_name: "",
    account_number: "",
    routing_number: "",
    iban: "",
    swift_code: "",
  });
  const [proofFile, setProofFile] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const withdrawMutation = useApiMutation({
    url: "/withdraw/request",
    method: "post",
    secure: true,
    successMessage: "Withdraw request submitted successfully!",
    invalidateKeys: ["wallet-balance"], // auto refresh
  });

  const quickSelectAmounts = [500, 1000, 2500, 5000, 10000];

  const handleQuickSelect = (amount) => {
    setSelectedAmount(amount);
    setWithdrawData((prev) => ({ ...prev, amount: amount }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWithdrawData((prev) => ({ ...prev, [name]: value }));
    if (name === "amount") setSelectedAmount(null);
  };

  const handleWithdrawSubmit = () => {
    const {
      amount,
      bank_name,
      account_name,
      account_number,
      routing_number,
      iban,
      swift_code,
    } = withdrawData;

    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid amount.");
      return;
    }
    if (!bank_name || !account_name || !account_number || !proofFile) {
      alert(
        "Please fill required fields (Bank, Account Name/Number) and upload proof.",
      );
      return;
    }

    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("bank_name", bank_name);
    formData.append("account_name", account_name);
    formData.append("account_number", account_number);
    formData.append("routing_number", routing_number);
    formData.append("iban", iban);
    formData.append("swift_code", swift_code);
    formData.append("proof", proofFile);

    withdrawMutation.mutate(formData, {
      onSuccess: () => {
        navigate("/dashboard/payment");
      },
    });
  };

  return (
    <div className="bg-gray-50 pb-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center p-6 border-b border-gray-100 bg-white">
          <Link to="/dashboard/payment">
            <ArrowLeft className="w-5 h-5 text-gray-600 mr-4 cursor-pointer hover:text-green-600 transition-colors" />
          </Link>
          <h1 className="text-lg font-bold text-gray-900 tracking-tight">
            Withdraw Funds
          </h1>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Available Balance */}
          <div className="flex items-center p-4 bg-green-50/50 rounded-2xl mb-8 border border-green-100/50">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-green-500/20">
              <span className="text-white font-bold text-xl">$</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-green-700 uppercase tracking-widest mb-0.5">
                Available Balance
              </p>
              <p className="text-2xl font-black text-gray-900">
                ${wallet?.balance || "0.00"}
              </p>
            </div>
          </div>

          {/* Amount Field */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Withdrawal Amount
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold text-lg transition-colors group-focus-within:text-green-500">
                $
              </span>
              <input
                type="number"
                name="amount"
                value={withdrawData.amount}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3.5 text-lg font-bold border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all placeholder:text-gray-300"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Quick Select */}
          <div className="mb-8">
            <div className="grid grid-cols-5 gap-2">
              {quickSelectAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickSelect(amount)}
                  className={`py-2 px-1 rounded-lg border text-[14px] font-bold transition-all ${
                    selectedAmount === amount
                      ? "bg-green-500 border-green-500 text-white shadow-md shadow-green-500/20"
                      : "bg-white border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-600"
                  }`}
                >
                  ${amount >= 1000 ? `${amount / 1000}k` : amount}
                </button>
              ))}
            </div>
          </div>

          {/* Bank Details Table */}
          <div className="mb-8">
            <p className="text-sm sm:text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-green-500 rounded-full"></span>
              Bank Account Details
            </p>

            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm ">
              <div className="grid grid-cols-3 bg-gray-50/80 border-b border-gray-200 py-2.5 px-4 text-sm sm:text-base font-bold text-gray-400 uppercase tracking-widest">
                <div className="col-span-1 border-r border-gray-200">Key</div>
                <div className="col-span-2 pl-4">Value</div>
              </div>

              {/* Bank Name */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
                <div className="col-span-1 bg-gray-50/30 p-3 text-xs sm:text-base font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                  Bank Name
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    name="bank_name"
                    value={withdrawData.bank_name}
                    onChange={handleInputChange}
                    placeholder="e.g. City Bank"
                    className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent placeholder:text-gray-300 font-medium"
                  />
                </div>
              </div>

              {/* Account Name */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
                <div className="col-span-1 bg-gray-50/30 p-3 text-xs font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                  Account Name
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    name="account_name"
                    value={withdrawData.account_name}
                    onChange={handleInputChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent placeholder:text-gray-300 font-medium"
                  />
                </div>
              </div>

              {/* Account Number */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
                <div className="col-span-1 bg-gray-50/30 p-3 text-xs sm:text-base font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                  Account Number
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    name="account_number"
                    value={withdrawData.account_number}
                    onChange={handleInputChange}
                    placeholder="e.g. 0508349629"
                    className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent placeholder:text-gray-300 font-medium"
                  />
                </div>
              </div>

              {/* Routing Number */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
                <div className="col-span-1 bg-gray-50/30 p-3 text-xs sm:text-base font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                  Routing Number
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    name="routing_number"
                    value={withdrawData.routing_number}
                    onChange={handleInputChange}
                    placeholder="e.g. 1208349629"
                    className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent placeholder:text-gray-300 font-medium"
                  />
                </div>
              </div>

              {/* IBAN */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
                <div className="col-span-1 bg-gray-50/30 p-3 text-xs sm:text-base font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                  IBAN
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    name="iban"
                    value={withdrawData.iban}
                    onChange={handleInputChange}
                    placeholder="e.g. iban"
                    className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent placeholder:text-gray-300 font-medium"
                  />
                </div>
              </div>

              {/* Swift Code */}
              <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
                <div className="col-span-1 bg-gray-50/30 p-3 text-xs sm:text-base font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                  Swift Code
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    name="swift_code"
                    value={withdrawData.swift_code}
                    onChange={handleInputChange}
                    placeholder="e.g. swift code"
                    className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent placeholder:text-gray-300 font-medium"
                  />
                </div>
              </div>

              {/* Proof Row */}
              <div className="grid grid-cols-3 hover:bg-gray-50/30 transition-colors">
                <div className="col-span-1 bg-gray-50/30 p-3 text-xs sm:text-base font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                  Proof (PDF/IMG)
                </div>
                <div className="col-span-2 px-4 flex items-center justify-between py-2">
                  <span className="text-[11px] text-gray-500 truncate max-w-[150px] italic">
                    {proofFile ? proofFile.name : "Select proof file..."}
                  </span>
                  <label className="cursor-pointer bg-green-500/10 hover:bg-green-500/20 p-2 rounded-lg transition-all group">
                    <Upload
                      size={16}
                      className="text-green-600 group-hover:scale-110 transition-transform"
                    />
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setProofFile(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-green-50/50 border border-green-100 rounded-2xl p-4 mb-8">
            <p className="text-xs font-bold text-green-800 mb-2 uppercase tracking-wider">
              Important Notes:
            </p>
            <div className="space-y-1.5 text-[11px] text-green-700 font-medium">
              <p>• Withdrawals typically take 1-3 business days</p>
              <p>• Minimum withdrawal amount is $100</p>
              <p>• $5 processing fee applies for withdrawals under $500</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/dashboard/payment")}
              className="flex-1 py-3.5 px-4 text-gray-600 bg-white border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all active:scale-[0.98]"
            >
              Cancel
            </button>
            <button
              onClick={handleWithdrawSubmit}
              disabled={withdrawMutation.isPending}
              className="flex-1 py-3.5 px-4 text-center text-white bg-green-500 rounded-xl font-bold hover:bg-green-600 shadow-lg shadow-green-500/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
            >
              {withdrawMutation.isPending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit Withdrawal"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
