package com.metadonate.database.service;

import com.metadonate.database.model.User;
import com.metadonate.database.repository.UserRepository;
import com.metadonate.database.security.JwtUtil;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public boolean registerUser(String username, String email, String password) {
        if (userRepository.existsByEmail(email)) {
            return false;
        }
        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);

        return true;
    }

    public User loginUser(String email, String password) {
        User user = findByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return user;
        }
        return null;
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public ResponseEntity<Map<String, Object>> authenticateAndRespond(User loginDetails) {
        Map<String, Object> response = new HashMap<>();
        try {
            String email = loginDetails.getEmail();
            User user = loginUser(email, loginDetails.getPassword());

            if (user != null) {
                String token = jwtUtil.generateToken(email);

                response.put("success", true);
                response.put("message", "Login successful!");
                response.put("username", user.getUsername());
                response.put("email", user.getEmail());
                response.put("authToken", token);

                return ResponseEntity.ok(response);
            } else {
                response.put("success", false);
                response.put("message", "Invalid email or password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "An error occurred during login. Please try again.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}