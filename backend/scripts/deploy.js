const hre = require("hardhat");

async function main() {
  const Donation = await hre.ethers.getContractFactory("DonationContract");
  const donation = await Donation.deploy();
  console.log(donation);
}

main().catch((error) => {
  console.error("Error deploying contract:", error);
  process.exitCode = 1;
});
