import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Card from '../ui/Card';
import Button from '../ui/Button';

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  // Data for the donation amounts over the last 6 months (example data)
  const donationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
    datasets: [
      {
        label: 'Donation Amounts ($)',
        data: [500, 1000, 1500, 1300, 1800, 2000], // Donation data
        borderColor: '#38bdf8', // Light blue for the line
        backgroundColor: 'rgba(56, 189, 248, 0.2)', // Light blue background
        tension: 0.4, // Line curve smoothness
        fill: true, // Fill the area below the line
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
          color: '#ffffff', // White color for axis title
        },
        ticks: {
          color: '#ffffff', // White color for tick labels
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount ($)',
          color: '#ffffff', // White color for axis title
        },
        ticks: {
          color: '#ffffff', // White color for tick labels
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // White color for legend
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItem) => {
            return `Month: ${tooltipItem[0].label}`;
          },
          label: (tooltipItem) => {
            return `$${tooltipItem.raw.toLocaleString()}`;
          },
        },
        backgroundColor: '#1f2937', // Dark background for tooltips
        titleColor: '#ffffff', // White color for tooltip title
        bodyColor: '#ffffff', // White color for tooltip body
      },
    },
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Track Your Impact
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get detailed analytics and insights about your donations, their impact,
              and the causes you support. Our AI-powered platform ensures maximum
              transparency and efficiency.
            </p>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
          <Card className="p-6 bg-gray-800">
            <div className="aspect-video rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <Line data={donationData} options={chartOptions} />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Analytics;
