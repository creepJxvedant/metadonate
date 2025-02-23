const DonationRow = ({ donation }) => {
    return (
      <tr className="hover:bg-gray-50">
        <td className="py-3 px-4 border-b text-sm font-medium text-gray-700">{donation.address}</td>
        <td className="py-3 px-4 border-b text-sm font-medium text-gray-700">{donation.amount}</td>
        <td className="py-3 px-4 border-b text-sm font-medium text-gray-700">{new Date(donation.timestamp).toLocaleString()}</td>
      </tr>
    );
  };
  
  export default DonationRow;
  