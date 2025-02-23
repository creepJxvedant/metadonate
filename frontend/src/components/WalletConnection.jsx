import { useState } from "react";
import { ethers } from "ethers";
import { Wallet, LogOut } from "lucide-react";

const WalletConnection = ({ onWalletConnected }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = signer.address;
        setIsConnected(true);
        setWalletAddress(address);
        onWalletConnected(provider, signer);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.");
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
    onWalletConnected(null, null); // Reset provider and signer to null
  };

  const reconnectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = signer.address;
        setIsConnected(true);
        setWalletAddress(address);
        onWalletConnected(provider, signer);
      } catch (error) {
        console.error("Error reconnecting to wallet:", error);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Wallet Connection
          </h2>
          {isConnected ? (
            <div className="text-center">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Connected: {walletAddress}
              </p>
              <button
                onClick={disconnectWallet}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300 flex items-center justify-center mx-auto"
              >
                <LogOut className="mr-2" size={20} />
                Disconnect Wallet
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Not connected
              </p>
              <button
                onClick={connectWallet}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center mx-auto"
              >
                <Wallet className="mr-2" size={20} />
                Connect Wallet
              </button>
            </div>
          )}
          {!isConnected && (
            <button
              onClick={reconnectWallet}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center mx-auto mt-4"
            >
              Reconnect Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletConnection;
