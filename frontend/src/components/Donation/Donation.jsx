import { useState } from "react";
import DonationForm from "./DonationForm";

export default function DonationPage() {
  const [donations, setDonations] = useState([]);

  const createDonation = (donation) => {
    setDonations((prevDonations) => [...prevDonations, donation]);
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Create Donation Request</h1>
      <DonationForm addDonation={createDonation} />
      <h2 className="text-2xl font-bold mt-8">Donation Requests</h2>
      <ul className="list-disc pl-5">
        {donations.map((donation, index) => (
          <li key={index}>
            <p>
              <strong>Amount:</strong> {donation.amount} ETH
            </p>
            <p>
              <strong>Reason:</strong> {donation.reason}
            </p>
            <p>
              <strong>Ethereum Address:</strong> {donation.ethAddress}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
