import Card from '../ui/Card';
import { FaDonate, FaThumbsUp, FaUsers } from 'react-icons/fa'; // Importing relevant icons

function Stats() {
  const stats = [
    { value: '240K+', label: 'Total Donations', icon: <FaDonate size={40} /> }, // Donation icon
    { value: '99%', label: 'Success Rate', icon: <FaThumbsUp size={40} /> }, // Success icon
    { value: '50K+', label: 'Active Donors', icon: <FaUsers size={40} /> }, // Users icon
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gray-800">
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-4">{stat.icon}</div> {/* Display icon */}
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
