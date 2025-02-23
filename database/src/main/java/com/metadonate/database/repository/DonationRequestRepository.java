package com.metadonate.database.repository;

import com.metadonate.database.model.DonationRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface DonationRequestRepository extends JpaRepository<DonationRequest, Long> {
    List<DonationRequest> findByUserId(Long userId);

    Optional<DonationRequest> findById(Long id);

}
