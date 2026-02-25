import { useState } from "react";
import { useApiQuery } from "@/hooks/getCmsUpdate";
import { Download } from "lucide-react";
import { Link, ScrollRestoration } from "react-router-dom";
import PaginationComponent from "../common/PaginationComponent";
import AddMoneyModal from "./DigitalWallet/AddMoneyModal";

const statusClasses = {
  Confirmed: "text-green-600 bg-green-100 border border-green-200",
  Pending: "text-yellow-600 bg-yellow-100 border border-yellow-200",
};

const typeClasses = {
  Deposit: "bg-gray-800 text-white",
  Investment: "bg-blue-900 text-white",
  Payout: "bg-yellow-400 text-white",
};

const Payment = () => {
  const [page, setPage] = useState(1);
  const [openAddMoneyModal, setOpenAddMoneyModal] = useState(false);

  const {
    data: walletData,
    isLoading,
    error,
  } = useApiQuery({
    queryKey: ["investor-wallet", page],
    url: "/investor/wallet",
    secure: true,
    params: { page },
  });

  // --- Skeleton Component ---
  const PaymentSkeleton = () => (
    <div>
      <div className="bg-white rounded-lg shadow p-4 animate-pulse">
        {/* HEADER SKELETON */}
        <div className="mb-6 space-y-2">
          <div className="h-8 bg-gray-200 rounded w-48"></div>
          <div className="h-4 bg-gray-200 rounded w-64"></div>
        </div>

        {/* BALANCE SKELETON */}
        <div className="bg-gray-200 p-6 rounded-lg mb-6 h-28 w-full"></div>

        {/* TABLE SKELETON */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <th key={i} className="px-4 py-2">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {[...Array(10)].map((_, index) => (
                <tr key={index}>
                  <td className="px-4 py-4">
                    <div className="h-3 bg-gray-100 rounded w-20"></div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="h-3 bg-gray-100 rounded w-32"></div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="h-6 bg-gray-100 rounded-full w-20"></div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="h-3 bg-gray-100 rounded w-16"></div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="h-6 bg-gray-100 rounded-full w-24"></div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="h-4 bg-gray-100 rounded w-8"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  if (isLoading) return <PaymentSkeleton />;
  if (error) return <div className="p-6 text-red-500">Error loading data</div>;

  const transactions = walletData?.data?.transactions || [];
  const meta = walletData?.data?.meta;

  return (
    <div>
      <ScrollRestoration />

      <div className="bg-white rounded-lg shadow p-4">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Payment & Billing</h1>
          <p className="text-gray-600">
            Manage your payment methods and transaction history
          </p>
        </div>

        {/* BALANCE */}
        <div className="bg-custom-primary p-6 rounded-lg text-white mb-6 flex item-center justify-between">
          <div className="text-4xl font-bold">
            <h2 className="text-sm text-green-100">Available Balance</h2>$
            {walletData?.data?.balance?.toLocaleString()}
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setOpenAddMoneyModal(true)}
              className="bg-white text-custom-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 w-32 text-center transition-all active:scale-95"
            >
              Deposit
            </button>
            <Link
              to="/dashboard/withdraw-funds"
              className="bg-white text-custom-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 w-32 text-center"
            >
              Withdraw
            </Link>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Type</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Receipt</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {transactions.map((txn) => (
                <tr key={txn.id}>
                  <td className="px-4 py-2">{txn.date}</td>
                  <td className="px-4 py-2">{txn.title}</td>

                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        typeClasses[txn.type_badge]
                      }`}
                    >
                      {txn.type_badge}
                    </span>
                  </td>

                  <td
                    className={`px-4 py-2 font-semibold ${
                      txn.amount < 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {txn.amount < 0 ? "-" : "+"}$
                    {Math.abs(txn.amount).toLocaleString()}
                  </td>

                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        statusClasses[txn.status]
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
{/* {console.log(txn)} */}
                  <td className="px-4 py-2 flex gap-2">
                    {txn.receipt_url ? (
                      <a href={txn.receipt_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"> 
                       Download <Download size={16} />
                      </a>
                    ) : (
                      "No Receipt"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* PAGINATION */}
      <div className="flex justify-end mt-4">
        {meta && (
          <PaginationComponent
            pageCount={meta.last_page} // ✅ total pages
            setPageCount={setPage} // ✅ set page
            forcePage={page} // ✅ active page
          />
        )}
      </div>

      {/* Reusable Add Money Modal */}
      <AddMoneyModal
        isOpen={openAddMoneyModal}
        onClose={() => setOpenAddMoneyModal(false)}
      />
    </div>
  );
};

export default Payment;
