import React from "react";
import { X, Upload } from "lucide-react";
import { useApiMutation } from "@/hooks/useApiMutation";

const AddMoneyModal = ({ isOpen, onClose }) => {
  const [addMoneyData, setAddMoneyData] = React.useState({
    amount: "",
    transaction_id: "",
    wallet_method: "bank",
    wallet_provider: "",
  });
  const [proofFile, setProofFile] = React.useState(null);

  // 🔥 Add Money Mutation (Multipart Form Data)
  const addMoneyMutation = useApiMutation({
    url: "/deposit/request",
    method: "post",
    secure: true,
    successMessage: "Deposit request submitted successfully!",
    invalidateKeys: ["wallet-balance"], // auto refresh
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddMoneyData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler
  const handleAddMoney = () => {
    const { amount, transaction_id, wallet_method, wallet_provider } =
      addMoneyData;

    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid amount.");
      return;
    }
    if (!transaction_id || !wallet_method || !wallet_provider || !proofFile) {
      alert("Please fill all fields and upload proof.");
      return;
    }

    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("transaction_id", transaction_id);
    formData.append("wallet_method", wallet_method);
    formData.append("wallet_provider", wallet_provider);
    formData.append("proof", proofFile);

    addMoneyMutation.mutate(formData, {
      onSuccess: () => {
        onClose();
        setAddMoneyData({
          amount: "",
          transaction_id: "",
          wallet_method: "bank",
          wallet_provider: "",
        });
        setProofFile(null);
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[5000] p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Deposit Request</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-500 mb-6 font-medium">
            Fill in the details below to submit your deposit request.
          </p>

          {/* API-like Field Input Table */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-gray-50/80 border-b border-gray-200 py-2.5 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <div className="col-span-1 border-r border-gray-200">Key</div>
              <div className="col-span-2 pl-4">Value</div>
            </div>

            {/* Amount Row */}
            <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
              <div className="col-span-1 bg-gray-50/30 p-3 text-xs font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                Amount
              </div>
              <div className="col-span-2">
                <input
                  type="number"
                  name="amount"
                  value={addMoneyData.amount}
                  onChange={handleInputChange}
                  placeholder="e.g. 600"
                  className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent placeholder:text-gray-300 transition-all font-medium"
                />
              </div>
            </div>

            {/* Transaction ID Row */}
            <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
              <div className="col-span-1 bg-gray-50/30 p-3 text-xs font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                Transaction ID
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  name="transaction_id"
                  value={addMoneyData.transaction_id}
                  onChange={handleInputChange}
                  placeholder="e.g. TXN12345678"
                  className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent placeholder:text-gray-300 transition-all font-medium"
                />
              </div>
            </div>

            {/* Wallet Method Row */}
            {/* <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
              <div className="col-span-1 bg-gray-50/30 p-3 text-xs font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                Wallet Method
              </div>
              <div className="col-span-2 px-3 flex items-center">
                <select
                  name="wallet_method"
                  value={addMoneyData.wallet_method}
                  onChange={handleInputChange}
                  className="w-full py-3 text-sm focus:outline-none bg-transparent appearance-none cursor-pointer font-medium"
                >
                  <option value="bank">bank</option>

                </select>
              </div>
            </div> */}

            {/* Wallet Provider Row */}
            <div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50/30 transition-colors">
              <div className="col-span-1 bg-gray-50/30 p-3 text-xs font-semibold text-gray-600 border-r border-gray-200 flex items-center">
             Wallet Provider
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  name="wallet_provider"
                  value={addMoneyData.wallet_provider}
                  onChange={handleInputChange}
                  placeholder="e.g. Propertypath bank"
                  className="w-full px-4 py-3 text-sm focus:outline-none bg-transparent placeholder:text-gray-300 transition-all font-medium"
                />
              </div>
            </div>

            {/* Proof Row */}
            <div className="grid grid-cols-3 hover:bg-gray-50/30 transition-colors">
              <div className="col-span-1 bg-gray-50/30 p-3 text-xs font-semibold text-gray-600 border-r border-gray-200 flex items-center">
                Proof
              </div>
              <div className="col-span-2 px-4 flex items-center justify-between">
                <span className="text-xs text-gray-500 truncate max-w-[180px] italic">
                  {proofFile ? proofFile.name : "Select proof file..."}
                </span>
                <label className="cursor-pointer bg-custom-primary/10 hover:bg-custom-primary/20 p-2 rounded-lg transition-all group my-1">
                  <Upload
                    size={16}
                    className="text-custom-primary group-hover:scale-110 transition-transform"
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

          <div className="flex flex-col gap-3 mt-8">
            <button
              onClick={handleAddMoney}
              disabled={addMoneyMutation.isPending}
              className="w-full py-3.5 bg-custom-primary text-white font-bold rounded-xl shadow-lg shadow-custom-primary/20 hover:bg-custom-primary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-2"
            >
              {addMoneyMutation.isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing Request...
                </>
              ) : (
                "Submit Deposit Request"
              )}
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMoneyModal;
