import { Download } from "lucide-react";
import { ScrollRestoration } from "react-router-dom";

const transactions = [
  {
    date: "2024-01-15",
    title: "Deposit Fund from Bank",
    type: "Deposit",
    amount: "+$25,000",
    status: "Completed",
    receipt: "INV-2024-001",
  },
  {
    date: "2024-01-10",
    title: "Downtown Loft Project",
    type: "Investment",
    amount: "-$50,000",
    status: "Completed",
    receipt: "INV-2024-002",
  },
  {
    date: "2023-12-28",
    title: "Marina Bay Condos",
    type: "Payout",
    amount: "+$3,200",
    status: "Received",
    receipt: "PAY-2023-045",
  },
  {
    date: "2023-12-20",
    title: "Coastal Townhomes",
    type: "Investment",
    amount: "-$15,000",
    status: "Completed",
    receipt: "INV-2023-156",
  },
  {
    date: "2023-11-15",
    title: "Urban Heights",
    type: "Payout",
    amount: "+$2,800",
    status: "Received",
    receipt: "PAY-2023-032",
  },
];

const statusClasses = {
  Completed: "text-green-600 bg-green-100 border border-green-200",
  Received: "text-green-600 bg-green-100 border border-green-200",
};

const typeClasses = {
  Deposit: "bg-gray-800 text-white",
  Investment: "bg-blue-900 text-white",
  Payout: "bg-yellow-400 text-white",
};

const Payment = () => {
  return (
    <div>
      <ScrollRestoration />
 <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <span className="text-xl">⏱</span> Transaction History
        </h2>
        <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50">
          Export All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
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
            {transactions.map((txn, i) => (
              <tr key={i} className="text-gray-700">
                <td className="px-4 py-2">{txn.date}</td>
                <td className="px-4 py-2">{txn.title}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${typeClasses[txn.type]}`}
                  >
                    {txn.type}
                  </span>
                </td>
                <td
                  className={`px-4 py-2 font-medium ${
                    txn.amount.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {txn.amount}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusClasses[txn.status]}`}
                  >
                    {txn.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex items-center gap-2">
                  {txn.receipt}
                  <Download size={16} className="cursor-pointer text-gray-500 hover:text-gray-700" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Payment;
