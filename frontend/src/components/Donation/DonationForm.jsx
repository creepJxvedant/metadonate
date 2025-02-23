import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { toast } from "react-toastify";
import MiniLoader from "../ui/MiniLoader";
import { getRequest, createRequest } from "../../secure/handleBackend";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [title, setTitle] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.classList.add("dark");
    return () => {
      document.body.classList.remove("dark");
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (reason.length < 10) {
      newErrors.title = "Title must be at least 10 characters long";
    }
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      newErrors.amount = "Please enter a valid positive number";
    }
    if (reason.length < 10) {
      newErrors.reason = "Reason must be at least 30 characters long";
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(ethAddress)) {
      newErrors.ethAddress = "Invalid Ethereum address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsFailed(false);
    setIsSuccess(false);
    try {
      const ok = await createRequest(title, amount, reason, ethAddress);
      if (ok) {
        setIsSuccess(true);

        setAmount("");
        setReason("");
        setTitle("");
        setEthAddress("");

        toast.success("Donation request created successfully!");
      } else {
        setIsFailed(true);
      }
    } catch (error) {
      toast.error("There was a problem submitting your donation request.");
      setIsSuccess(false);
      setIsFailed(true);
    }
    setIsSubmitting(false);
  };

  const presetAmounts = ["0.1", "0.5", "1", "5"];

  // Determine the button color based on the state
  let buttonColor = "bg-blue-600 hover:bg-blue-700"; // Default for normal state
  let buttonText = "Create Donation Request";

  if (isSubmitting) {
    buttonColor = "bg-blue-600 hover:bg-blue-700"; // Blue when submitting
    buttonText = <MiniLoader />;
  } else if (isSuccess) {
    buttonColor = "bg-green-700 hover:bg-green-700"; // Green when success
    buttonText = (
      <>
        <CheckCircle className="absolute right-4 md:right-20 h-6" />
        Request Created
      </>
    );
  } else if (isFailed) {
    buttonColor = "bg-red-600 hover:bg-red-700"; // Red when failed
    buttonText = "Failed!";
  }

  return (
    <div className="relative w-full max-w-md mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <p className="text-gray-400">
          Fill out the form to create a new donation request
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Title(brief)
          </label>
          <textarea
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={1}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Amount Needed (ETH)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.5"
            className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.amount && (
            <p className="mt-1 text-sm text-red-500">{errors.amount}</p>
          )}
          <div className="flex space-x-2 mt-2">
            {presetAmounts.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className="px-3 py-1.5 text-sm border-gray-800 rounded-md bg-gray-700 text-white hover:bg-gray-600"
              >
                {preset} ETH
              </button>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Reason for Donation(summarise)
          </label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Enter the reason for your donation request"
            className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={4}
          />
          {errors.reason && (
            <p className="mt-1 text-sm text-red-500">{errors.reason}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="ethAddress"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Ethereum Address
          </label>
          <input
            id="ethAddress"
            type="text"
            value={ethAddress}
            onChange={(e) => setEthAddress(e.target.value)}
            placeholder="0x..."
            className="w-full bg-gray-700 text-white border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.ethAddress && (
            <p className="mt-1 text-sm text-red-500">{errors.ethAddress}</p>
          )}
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="submit"
              className={`${buttonColor} w-full relative text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              disabled={isSubmitting || isSuccess}
            >
              {buttonText}
            </button>
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
};

export default DonationForm;
