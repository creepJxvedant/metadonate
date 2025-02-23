package com.metadonate.database.dto;

import com.metadonate.database.model.DonationRequest;

public record DonationRequestDTO(
                Long id,
                String title,
                boolean fulfilled,
                double amountNeeded,
                double amountCollected,
                String address) {

        public DonationRequestDTO(DonationRequest donationRequest) {
                this(
                                donationRequest.getId(),
                                donationRequest.getTitle(),
                                donationRequest.isFulfilled(),
                                donationRequest.getAmtRequest(),
                                donationRequest.getAmtReceived(),
                                donationRequest.getAddress());
        }
}
