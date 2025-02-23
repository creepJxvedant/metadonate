export default function DonationList({ donations }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Donation Requests</h2>
      {donations.length === 0 ? (
        <p className="text-gray-600">No donation requests yet.</p>
      ) : (
        <ul className="space-y-4">
          {donations.map((donation, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg">
              <p className="font-bold">Amount: {donation.amount} ETH</p>
              <p className="text-gray-700">Reason: {donation.reason}</p>
              <p className="text-sm text-gray-500">Address: {donation.ethAddress}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

