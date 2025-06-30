import { Complete, Process } from "@/assets/icon";
import React from "react";

const Payment = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold my-2 text-[#000000]">
        Payment & Billing
      </h2>
      <p className="text-sm text-[#4B5563]">
        Manage your payment methods and transaction history
      </p>

      <div className="flex items-center justify-between my-4 p-5 rounded-lg bg-black">
        <div className="text-[#FFF]">
          <p>Available Balance</p>
          <h2 className="text-2xl font-bold py-2">$12,450.00</h2>
          <p className="text-sm">Ready for investment</p>
        </div>
        <div className="flex flex-col">
          <button className="px-3 py-2 text-[15px] bg-[#FFF] rounded-lg my-1 cursor-pointer">
            Add Funds
          </button>
          <button className="px-3 py-2 text-[15px] bg-[#FFF] rounded-lg my-1 cursor-pointer">
            Withdraw
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between my-3">
        <h2 className="text-2xl font-bold">Recent Transactions</h2>
        <button className="px-4 py-2 text-[15px] bg-[#FFF] border rounded-lg my-1 cursor-pointer shadow-md">
          View All
        </button>
      </div>

      <div className="space-y-3">
        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center gap-4">
            <h2 className="text-[#000000] text-[16px] font-semibold">
              Investment in Sunrise Apartments
            </h2>
            <button className="text-[#166534] bg-[#DCFCE7] text-sm font-medium px-3 py-1 rounded-2xl flex items-center gap-2">
              <Complete /> Completed
            </button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[#4B5563] text-sm">Jun 15, 2024</p>
            <p className="text-[#000000] text-[16px] font-bold">$25,000</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center gap-4">
            <h2 className="text-[#000000] text-[16px] font-semibold">
              Dividend Payment - Garden View Complex
            </h2>
            <button className="text-[#166534] bg-[#DCFCE7] text-sm font-medium px-3 py-1 rounded-2xl flex items-center gap-2">
              <Complete /> Completed
            </button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[#4B5563] text-sm">Jun 15, 2024</p>
            <p className="text-[#16A34A] text-[16px] font-bold">+$1,250</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center gap-4">
            <h2 className="text-[#000000] text-[16px] font-semibold">
              Investment in Downtown Plaza
            </h2>
            <button className="text-[#EAB308] bg-[#DCFCE7] text-sm font-medium px-3 py-1 rounded-2xl flex items-center gap-2">
              <Process /> Processing
            </button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[#4B5563] text-sm">Jun 15, 2024</p>
            <p className="text-[#000000] text-[16px] font-bold">$25,000</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center gap-4">
            <h2 className="text-[#000000] text-[16px] font-semibold">
              Investment in Sunrise Apartments
            </h2>
            <button className="text-[#166534] bg-[#DCFCE7] text-sm font-medium px-3 py-1 rounded-2xl flex items-center gap-2">
              <Complete /> Completed
            </button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[#4B5563] text-sm">Jun 15, 2024</p>
            <p className="text-[#000000] text-[16px] font-bold">$25,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
