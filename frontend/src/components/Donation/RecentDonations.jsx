import DonationRow from './DonationRow'; // Importing the new DonationRow component

const RecentDonations = () => {
 
  const mockDonations = [
    { id: 1, address: '0xabcd...1234', amount: 0.5, timestamp: '2023-05-01T12:00:00Z' },
    { id: 2, address: '0xefgh...5678', amount: 1.2, timestamp: '2023-04-30T15:30:00Z' },
    { id: 3, address: '0xijkl...9012', amount: 0.8, timestamp: '2023-04-29T09:45:00Z' },
  ];
  

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Recent Donations</h2>
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-100 text-gray-600">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium">Address</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Amount (ETH)</th>
                <th className="py-3 px-6 text-left text-sm font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockDonations.map((donation) => (
                <DonationRow key={donation.id} donation={donation} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentDonations;
