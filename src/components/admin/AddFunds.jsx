import { Method } from "@/assets/icon";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddFunds = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-4 mr-84">
        <Link to="/dashboard/payment">
          <IoArrowBackOutline />
        </Link>
        <p className="font-medium">Back to Dashboard</p>
      </div>
      <div className="bg-[#FFF] p-8 rounded-xl">
        <h2 className="text-[24px] text-[#111827]">Add Funds to Wallet</h2>
        <p className="text-[#6B7280]">
          Step 1 of 3: Enter the amount you want to add
        </p>
        <div className="my-3">
          <label className="block my-2 text-[#111827] font-medium">
            Amount to Add (USD)
          </label>
          <input
            placeholder="Enter Amont"
            className="border border-[#D1D5DB] rounded-md w-full px-4 py-2.5"
            type="text"
          />
        </div>

        <div className="my-3 bg-[#F9FAFB] p-5 rounded-lg">
          <h2 className="text-[#111827] font-medium flex items-center gap-2 mb-2">
            <Method /> Payment Method
          </h2>
          <p className="text-[#6B7280] text-sm">
            Bank transfer only. You'll receive our bank details in the next
            step.
          </p>
        </div>
        <Link to={"/dashboard/payment-details"}>
          <button className="bg-[#000000] text-[#FFF] px-4 py-2.5 rounded-lg mt-4 w-full cursor-pointer">
            Continue to Payment Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddFunds;
