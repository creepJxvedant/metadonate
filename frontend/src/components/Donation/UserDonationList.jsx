import React, { useState } from 'react';

const UserDonationList = () => {
  const [expandedId, setExpandedId] = useState(null);

  const transactions = [
    {
      id: 1,
      title: "Donation for Charity A",
      amount: "0.5 ETH",
      fromAddress: "0x6b49b89c49a4b7d1f2c8f4cb91d9bcd99ecfd35c",
      toAddress: "0xAb83e2A60162aD3aF537c1C2b0f5D3e0C4D1A967",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "Donation for Animal Welfare",
      amount: "1.2 ETH",
      fromAddress: "0x3d89Bda4A42f883283E5A9d0de1e9c6E6c0Fdbd2",
      toAddress: "0x826D47e416B440a931A88E5064F9cBBFF4A92F36",
      date: "2023-06-02",
    },
    {
      id: 3,
      title: "Donation for Health Fund",
      amount: "2.0 ETH",
      fromAddress: "0x45b9f85e45aAbF2265dE2829Ae20e58B94537dF9",
      toAddress: "0x3C5bc1D463eBC6ec7EAF17Bf7f3cb87A7621c2b9",
      date: "2023-06-20",
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Your Donation History</h2>
      <div className="space-y-4">
        {transactions.map(transaction => (
          <div
            key={transaction.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <div 
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleExpand(transaction.id)}
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{transaction.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Date: {transaction.date}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{transaction.amount}</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {expandedId === transaction.id ? 'Click to collapse' : 'Click to expand'}
                </span>
              </div>
            </div>
            {expandedId === transaction.id && (
              <div className="px-4 pb-4 pt-2 bg-gray-50 dark:bg-gray-700 transition-all duration-300 ease-in-out">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">From:</span>
                  <span className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                    {truncateAddress(transaction.fromAddress)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">To:</span>
                  <span className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                    {truncateAddress(transaction.toAddress)}
                  </span>
                </div>
                <button 
                  className="mt-3 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    // You would typically implement the logic to view the full transaction details
                    alert(`View full details for transaction ${transaction.id}`);
                  }}
                >
                  View full transaction details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDonationList;
