import React, { useState, useEffect } from "react";
import DonationModal from "./DonationModal";
import { ArrowRightIcon } from "lucide-react";
import WalletConnection from "../WalletConnection";
import { makeDonation } from "../../secure/handleBackend";

const DonationRequests = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:8080/donations", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch donation requests");
        }

        const data = await response.json();
        setDonations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  const handleDonate = async (amount) => {
    let isSuccess = false;
    if (selectedDonation && signer) {
      isSuccess = await makeDonation(signer, selectedDonation.id, amount);
    }
  };
  const handleDonateButtonClick = (id) => {
    const donation = donations.find((d) => d.id === id);
    if (donation) {
      setSelectedDonation(donation);
      setModalOpen(true);
    }
  };

  const handleWalletConnected = (provider, signer) => {
    setProvider(provider);
    setSigner(signer);
  };

  const filteredDonations = donations.filter((donation) => {
    if (filter === "open") return !donation.fulfilled;
    if (filter === "fulfilled") return donation.fulfilled;
    return true;
  });

  const sortedDonations = [...filteredDonations].sort((a, b) => {
    if (sortBy === "amount") {
      return parseFloat(b.amountNeeded) - parseFloat(a.amountNeeded);
    }
    return b.id - a.id;
  });

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 min-h-screen text-white">
      <WalletConnection onWalletConnected={handleWalletConnected} />
      <h2 className="text-4xl font-bold mb-8 text-center">Donation Requests</h2>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg">
        <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-0">
          {["all", "open", "fulfilled"].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                filter === filterOption
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-gray-300 font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-3 py-2 bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sortedDonations.map((donation) => (
          <div
            key={donation.id}
            className="bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{donation.title}</h3>
              <p className="text-gray-400 mb-4">
                <span className="font-medium">Address:</span> {donation.address}
              </p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-400">
                    <span className="font-medium">Collected:</span>{" "}
                    <span className="text-green-500 font-bold">
                      {donation.amountCollected} ETH
                    </span>
                  </p>
                  <p className="text-gray-400">
                    <span className="font-medium">Needed:</span>{" "}
                    <span className="text-blue-500 font-bold">
                      {donation.amountNeeded} ETH
                    </span>
                  </p>
                </div>
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    donation.fulfilled
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {donation.fulfilled ? "Fulfilled" : "Open"}
                </span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{
                    width: `${Math.min(
                      (donation.amountCollected / donation.amountNeeded) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
              {!donation.fulfilled && (
                <button
                  onClick={() => handleDonateButtonClick(donation.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Donate Now
                  <ArrowRightIcon />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectedDonation && (
        <DonationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onDonate={handleDonate}
          donationFulfilled={selectedDonation.fulfilled}
          remainingAmount={
            selectedDonation.amountNeeded - selectedDonation.amountCollected
          }
        />
      )}
    </div>
  );
};

export default DonationRequests;
