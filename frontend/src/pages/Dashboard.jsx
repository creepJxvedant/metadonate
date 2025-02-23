import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDonationList from "../components/Donation/UserDonationList";
import { HandleLogout } from "../secure/IsLoggedIn";
import DonationForm from "../components/Donation/DonationForm";

const Dashboard = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Dashboard Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Welcome to Your Dashboard
          </h1>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
            Manage your donations, view history, and more.
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <DashboardCard
            title="Total Donations"
            content={
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                $1,234.56
              </p>
            }
          />

          <DashboardCard
            title="Past Donations"
            content={
              <>
                <p className="text-lg mb-2">
                  You have made 5 donations in total.
                </p>
                <Link
                  to="/dashboard/past-donations"
                  className="text-blue-600 hover:text-blue-500 transition duration-300 inline-block"
                >
                  View Past Donations →
                </Link>
              </>
            }
          />

          <DashboardCard
            title="Account Settings"
            content={
              <>
                <p className="text-lg mb-2">
                  Manage your account settings and preferences.
                </p>
                <Link
                  to="/dashboard/settings"
                  className="text-blue-600 hover:text-blue-500 transition duration-300 inline-block"
                >
                  Go to Settings →
                </Link>
              </>
            }
          />
        </div>

        {/* Quick Actions */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button
            onClick={() => setShowDonationForm(true)}
            className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Request a Donation
          </button>
          <button
            onClick={HandleLogout}
            className="bg-red-600 text-white py-3 px-8 rounded-full hover:bg-red-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Logout
          </button>
        </div>

        {/* Donation Form Modal */}
        {showDonationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="relative scrollbar-none bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md max-h-full overflow-y-auto shadow-xl">
              {/* Close Button (X) at Top Right */}
              <button
                onClick={() => setShowDonationForm(false)}
                className="absolute top-2 right-4 z-10 text-4xl text-gray-800 dark:text-blue-600 hover:text-gray-600 dark:hover:text-gray-400"
              >
                &times;
              </button>

              <DonationForm />
            </div>
          </div>
        )}

        {/* User Donation List */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Your Donation History
          </h2>
          <UserDonationList />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, content }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
      {title}
    </h3>
    {content}
  </div>
);

export default Dashboard;
