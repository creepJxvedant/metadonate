import { useState } from "react";
import DonationForm from "../components/Donation/DonationForm";

function RequestDonation() {
  const [donations, setDonations] = useState([]);

  const addDonation = (newDonation) => {
    setDonations([...donations, newDonation]);
  };

  return (
    <>
      {" "}
      <div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-slate-200 shadow-lg sm:rounded-3xl sm:p-20">
            <h1 className="text-4xl font-bold mb-5 text-center text-gray-800">
              Donation DApp
            </h1>
            <DonationForm addDonation={addDonation} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestDonation;
