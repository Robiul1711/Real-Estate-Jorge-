import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { ImageProvider } from "@/components/common/ImageProvider";
import { useApiQuery } from "@/hooks/getCmsUpdate";
import { useApiMutation } from "@/hooks/useApiMutation"; // ✅ Make sure this is correct location

const SideBar = ({ sidebar, open, setOpen }) => {
  // 🔹 Get Wallet Balance
  const { data: wallet, isLoading } = useApiQuery({
    queryKey: "wallet-balance",
    url: "/wallet/balance",
    secure: true,
  });
// console.log(wallet)
  const [openAddMoneyModal, setOpenAddMoneyModal] = React.useState(false);
  const [amount, setAmount] = React.useState("");

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // 🔥 Add Money Mutation (Stripe Intent)
  const addMoneyMutation = useApiMutation({
    url: "/wallet/stripe-intent",
    method: "post",
    secure: true,
    successMessage: "Money added successfully!",
    invalidateKeys: ["wallet-balance"], // auto refresh
  });

  // Submit Handler
const handleAddMoney = () => {
  if (!amount || Number(amount) <= 0) {
    alert("Enter a valid amount.");
    return;
  }

  addMoneyMutation.mutate(
    { amount: Number(amount) },
    {
      onSuccess: (response) => {
        if (response?.url) {
          window.open(response.url, "_blank");  // 🔥 new tab
        }
      },
    }
  );
};



  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } xl:hidden z-50`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`h-full py-8 bg-[#FFF] backdrop-blur-md lg:px-8 px-4 flex flex-col justify-between shadow-md fixed xl:static transition-all duration-300 z-[1000] ${
          open ? "left-0 top-0 w-[320px]" : "-left-full xl:w-[320px] w-[320px]"
        }`}
      >
        {/* Logo */}
        <Link to={"/"} className="flex justify-center mb-1">
          <img src={ImageProvider.civia} alt="logo" className="w-44" />
        </Link>

        {/* Wallet Card */}
        <div className="rounded-2xl bg-custom-primary p-4 w-full max-w-sm mx-auto shadow-md mb-6">
          <p className="text-white text-xl font-semibold">Digital Wallet</p>
          <p className="text-white text-xs tracking-wide mb-4">
            AVAILABLE BALANCE
          </p>

          <div className="flex items-center justify-between">
            <p className="text-white text-xl font-semibold">
              ${isLoading ? "Loading..." : wallet?.balance || 0}
            </p>

            <button
              onClick={() => setOpenAddMoneyModal(true)}
              className="flex items-center justify-center w-10 h-10 bg-white text-custom-primary font-bold text-xl rounded-full shadow hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-3 flex-grow">
          {sidebar.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? "bg-custom-primary text-white"
                  : "text-black hover:bg-custom-primary hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.text}
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer text-black">
          <IoLogOutOutline />
          <p className="font-medium">Log Out</p>
        </div>
      </div>

      {/* Add Money Modal */}
      {openAddMoneyModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[5000]">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Add Money to Wallet
            </h2>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-custom-primary outline-none"
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpenAddMoneyModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={handleAddMoney}
                disabled={addMoneyMutation.isPending}
                className="px-4 py-2 bg-custom-primary text-white rounded-lg hover:bg-custom-primary/90 disabled:opacity-60"
              >
                {addMoneyMutation.isPending ? "Processing..." : "Add Money"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
