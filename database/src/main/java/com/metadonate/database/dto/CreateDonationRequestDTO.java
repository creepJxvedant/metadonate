package com.metadonate.database.dto;

import com.metadonate.database.model.DonationRequest;

public record CreateDonationRequestDTO(
        String title,
        String reason,
        double amtRequest,
        String address) {

    public CreateDonationRequestDTO(DonationRequest donationRequest) {
        this(
                donationRequest.getTitle(),
                donationRequest.getReason(),
                donationRequest.getAmtRequest(),
                donationRequest.getAddress());
    }
}
