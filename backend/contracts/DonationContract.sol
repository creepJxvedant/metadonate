// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
pragma experimental ABIEncoderV2;

contract DonationContract{
    address public owner;
    uint256 public donationCount;

    struct Donation {
        uint256 id;
        address donor;
        uint256 amount;
        uint256 timestamp;
    }

    mapping(uint256 => Donation) public donations;
    mapping(address => uint256[]) public donorDonations;

    event DonationMade(
        uint256 id,
        address indexed donor,
        uint256 amount,
        uint256 timestamp
    );
    event OwnerChanged(address indexed oldOwner, address indexed newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
        donationCount = 0;
    }

    function changeOwner(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner cannot be the zero address");
        emit OwnerChanged(owner, newOwner);
        owner = newOwner;
    }

    function makeDonation(uint256 amt) public payable {
        require(amt > 0, "Donation amount must be greater than zero");

        donationCount++;
        donations[donationCount] = Donation(
            donationCount,
            msg.sender,
            amt,
            block.timestamp
        );
        donorDonations[msg.sender].push(donationCount);

        emit DonationMade(donationCount, msg.sender, amt, block.timestamp);
    }

    function fetchDonation(
        uint256 donationId
    ) public view returns (Donation memory) {
        require(
            donationId > 0 && donationId <= donationCount,
            "Invalid donation ID"
        );
        return donations[donationId];
    }

    function fetchDonationsByUser(
        address user
    ) public view returns (Donation[] memory) {
        uint256[] memory donationIds = donorDonations[user];
        Donation[] memory userDonations = new Donation[](donationIds.length);

        for (uint256 i = 0; i < donationIds.length; i++) {
            userDonations[i] = donations[donationIds[i]];
        }

        return userDonations;
    }

    function fetchPastTransactions() public view returns (Donation[] memory) {
        Donation[] memory allDonations = new Donation[](donationCount);

        for (uint256 i = 0; i < donationCount; i++) {
            allDonations[i] = donations[i + 1];
        }

        return allDonations;
    }

    function fetchDonationDetailsByDonationId(
        uint256 donationId
    ) public view returns (Donation memory, Donation[] memory) {
        require(
            donationId > 0 && donationId <= donationCount,
            "Invalid donation ID"
        );

        Donation memory donationDetail = donations[donationId];
        Donation[] memory allDonations = fetchPastTransactions();

        return (donationDetail, allDonations);
    }
}
