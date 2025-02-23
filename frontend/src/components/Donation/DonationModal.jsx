import React, { useState } from "react";

const DonationModal = ({ isOpen, onClose, onDonate, donationFulfilled }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationAmount = parseFloat(amount);
    if (donationAmount <= 0) {
      alert("Donation amount must be greater than 0.");
      return;
    }
    onDonate(donationAmount); // Pass the donation amount to the parent component
    setAmount(""); // Reset the amount input
    onClose(); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center w-full justify-center p-4 z-50">
      <div className="rounded-lg p-6 w-full max-w-md  glass">
        <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Amount (ETH)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full px-3 py-2 border bg-white/15  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={donationFulfilled} // Disable input if the donation is fulfilled
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={donationFulfilled} // Disable button if the donation is fulfilled
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationModal;
