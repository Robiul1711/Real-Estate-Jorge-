import React from "react";
import sucess from "../../assets/images/success.png";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center px-4 md:px-6 lg:px-0 py-10 space-y-6">
      <img src={sucess} alt="image" />
      <h1 className="text-lg md:text-2xl font-semibold text-[#111827] my-2">
        Request Submitted Successfully!
      </h1>
      <p className="text-sm text-[#6B7280]">Step 3 of 3: Complete</p>
      <p className="w-full md:w-[40%] text-center text-[#4B5563] mb-2">
        Your fund request of $200 has been submitted for admin review. You'll
        receive a notification once it's approved.
      </p>
      <div className="flex items-center gap-2">
        <Link to={"/dashboard"}>
          <button className="px-4 py-2 text-[14px] bg-black text-white rounded-lg my-1 cursor-pointer">
            Return to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
