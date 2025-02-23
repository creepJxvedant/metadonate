package com.metadonate.database.controller;

import com.metadonate.database.dto.OneDonationRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.metadonate.database.dto.CreateDonationRequestDTO;
import com.metadonate.database.dto.DonationRequestDTO;
import com.metadonate.database.service.DonationService;
import java.util.List;

@RestController
@RequestMapping("/donations")
@CrossOrigin(originPatterns = "http://localhost:5173", allowCredentials = "true")
public class DonationController {

    private final DonationService donationService;

    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }

    /**
     * Endpoint to get a paginated list of donation requests.
     *
     * @return List of DonationRequestDTOs
     */
    @GetMapping
    public ResponseEntity<List<DonationRequestDTO>> getDonationRequests(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        List<DonationRequestDTO> donationRequests = donationService.getDonationRequests(page, size);
        return ResponseEntity.ok(donationRequests);
    }

    /**
     * Endpoint to get a specific donation request by ID.
     *
     * @param id ID of the donation request
     * @return DonationRequestDTO or 404 if not found
     */
    @GetMapping("/{id}")
    public ResponseEntity<OneDonationRequestDTO> getDonationRequestById(@PathVariable Long id) {
        OneDonationRequestDTO donationRequest = donationService.getDonationRequestById(id);
        if (donationRequest != null) {
            return ResponseEntity.ok(donationRequest);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("user/{id}")
    public ResponseEntity<List<DonationRequestDTO>> getDonationRequestByUser(@PathVariable Long id) {
        List<DonationRequestDTO> donationRequests = donationService.getDonationRequestByUser(id);
        if (donationRequests != null) {
            return ResponseEntity.ok(donationRequests);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Endpoint to create a new donation request.
     *
     * @param donationRequestDTO The donation request data
     * @return The created DonationRequestDTO
     */
    @PostMapping("/create")
    public ResponseEntity<ResponseStatus> createDonation(@RequestBody CreateDonationRequestDTO DTO) {
        return donationService.createDonation(DTO);
    }
}