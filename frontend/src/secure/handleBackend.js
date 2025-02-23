import { ethers } from "ethers";
import { ABI } from "./abi";
import { CONTRACT_ADDRESS } from "./config.js";
import { data } from "./TempLogin.js";

const abi = ABI.abi;

export const handleRegister = async (username, email, password) => {
  const payload = {
    username: username,
    email: email,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return data;
  } catch (e) {
    const data = {
      success: false,
      message: "some error occured",
    };
    return data;
  }
};

export const handleLogin = async (email, password) => {
  const payload = {
    email: email,
    password: password,
  };

  if (data.email === email && data.password === password) return data;

  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    return {
      success: false,
      message: "Some error occured!.",
    };
  }
};

export const createRequest = async (title, amtRequest, reason, address) => {
  const payload = {
    title,
    amtRequest,
    reason,
    address,
  };
  try {
    const response = await fetch("http://localhost:8080/donations/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch (error) {
    return false;
  }
};

export const getRequest = async () => {
  try {
    const response = await fetch("http://localhost:8080/donations", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const makeDonation = async (signer, donationId, amount) => {
  try {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
    const tx = await contract.makeDonation(donationId, {
      value: ethers.WeiPerEther * BigInt(amount),
    });
    await tx.wait();
    return true;
  } catch (error) {
    console.error("Error making donation:", error);
    return false;
  }
};

export const fetchDonation = async (provider, donationId) => {
  try {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
    const donation = await contract.fetchDonation(donationId);
    return donation;
  } catch (error) {
    console.error("Error fetching donation:", error);
    return null;
  }
};

export const fetchDonationsByUser = async (provider, userAddress) => {
  try {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
    const donations = await contract.fetchDonationsByUser(userAddress);
    return donations;
  } catch (error) {
    console.error("Error fetching donations by user:", error);
    return null;
  }
};

export const fetchPastTransactions = async (provider) => {
  try {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
    const transactions = await contract.fetchPastTransactions();
    return transactions;
  } catch (error) {
    console.error("Error fetching past transactions:", error);
    return null;
  }
};
