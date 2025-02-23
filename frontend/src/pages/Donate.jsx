import DonationRequests from "../components/Donation/DonationRequests";
const Donate = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Make a Donation</h1>
      <DonationRequests></DonationRequests>
    </div>
  );
};

export default Donate;
