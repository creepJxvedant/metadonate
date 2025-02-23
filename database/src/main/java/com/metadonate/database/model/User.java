package com.metadonate.database.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email; // User's email address
    private String password; // User's hashed password

    @OneToMany(mappedBy = "user")
    private List<DonationRequest> donationRequests;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() { // Renamed from getGmail() to getEmail()
        return email;
    }

    public void setEmail(String email) { // Renamed from setGmail() to setEmail()
        this.email = email;
    }

    public String getPassword() {
        return password; // Getter for password
    }

    public void setPassword(String password) {
        this.password = password; // Setter for password
    }

    public List<DonationRequest> getDonationRequests() {
        return donationRequests;
    }

    public void setDonationRequests(List<DonationRequest> donationRequests) {
        this.donationRequests = donationRequests;
    }
}
