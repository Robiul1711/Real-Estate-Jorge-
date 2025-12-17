import { useState } from "react";
import { useApiQuery } from "@/hooks/getCmsUpdate";
import { Download } from "lucide-react";
import { Link, ScrollRestoration } from "react-router-dom";
import PaginationComponent from "../common/PaginationComponent";

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

  const { data: walletData, isLoading, error } = useApiQuery({
    queryKey: ["investor-wallet", page],
    url: "/investor/wallet",
    secure: true,
    params: { page }, // ✅ backend pagination
  });

  if (isLoading) return <div className="p-6">Loading...</div>;
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
        <div className="bg-custom-primary p-6 rounded-lg text-white mb-6">
          <h2 className="text-sm text-green-100">Available Balance</h2>
          <div className="text-4xl font-bold">
            ${walletData?.data?.balance?.toLocaleString()}
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Receipt</th>
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

                  <td className="px-4 py-2 flex gap-2">
                    {txn.receipt}
                    <Download size={16} />
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
            pageCount={meta.last_page}  // ✅ total pages
            setPageCount={setPage}      // ✅ set page
            forcePage={page}            // ✅ active page
          />
        )}
        </div>
    </div>
  );
};

export default Payment;
