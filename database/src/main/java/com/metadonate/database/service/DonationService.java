package com.metadonate.database.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.metadonate.database.dto.OneDonationRequestDTO;
import com.metadonate.database.dto.CreateDonationRequestDTO;
import com.metadonate.database.dto.DonationRequestDTO;
import com.metadonate.database.model.DonationRequest;
import com.metadonate.database.model.User;
import com.metadonate.database.repository.DonationRequestRepository;
import com.metadonate.database.repository.UserRepository;

@Service
public class DonationService {

    private final DonationRequestRepository donationRequestRepository;
    private final UserRepository userRepository;

    public DonationService(DonationRequestRepository donationRequestRepository, UserRepository userRepository) {
        this.donationRequestRepository = donationRequestRepository;
        this.userRepository = userRepository;
    }

    public List<DonationRequestDTO> getDonationRequests(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<DonationRequest> pageResult = donationRequestRepository.findAll(pageable);

        return pageResult.stream()
                .map(DonationRequestDTO::new)
                .toList();
    }

    public OneDonationRequestDTO getDonationRequestById(Long id) {
        DonationRequest donationRequest = donationRequestRepository.findById(id).orElse(null);
        if (donationRequest == null) {
            return null;
        }
        return new OneDonationRequestDTO(donationRequest);
    }

    public List<DonationRequestDTO> getDonationRequestByUser(Long id) {
        List<DonationRequest> donationRequests = donationRequestRepository.findByUserId(id);
        return donationRequests.stream()
                .map(DonationRequestDTO::new)
                .collect(Collectors.toList());
    }

    public User findUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));
    }

    public ResponseEntity<ResponseStatus> createDonation(CreateDonationRequestDTO donationRequestDTO) {
        // Find user by ID from DTO

        try {
            User user = userRepository
                    .findByEmail(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString())
                    .orElseThrow(() -> new IllegalArgumentException("User not found"));

            DonationRequest donationRequest = new DonationRequest();
            donationRequest.setAmtRequest(donationRequestDTO.amtRequest());
            donationRequest.setAmtReceived(0.0);
            donationRequest.setTitle(donationRequestDTO.title());
            donationRequest.setReason(donationRequestDTO.reason());
            donationRequest.setAddress(donationRequestDTO.address());
            donationRequest.setFulfilled(false);
            donationRequest.setUser(user);
            donationRequestRepository.save(donationRequest);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.status(201).build();
    }
}
