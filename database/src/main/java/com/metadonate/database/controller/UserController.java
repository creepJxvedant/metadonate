package com.metadonate.database.controller;

import com.metadonate.database.model.User;
import com.metadonate.database.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> registerUser(@RequestBody User user) {
        boolean status = userService.registerUser(user.getUsername(), user.getEmail(), user.getPassword());

        Map<String, Object> response = new HashMap<>();
        if (!status) {
            response.put("success", false);
            response.put("message", "User registration failed. The username or email might already exist.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        response.put("success", true);
        response.put("message", "User registered successfully.");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody User loginDetails) {
        return userService.authenticateAndRespond(loginDetails);
    }

    @GetMapping("/**")
    public ResponseEntity<Map<String, Object>> handleUnknownGRequest() {
        Map<String, Object> response = new HashMap<>();
        response.put("success", false);
        response.put("message", "The requested resource could not be found.");

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @PostMapping("/**")
    public ResponseEntity<Map<String, Object>> handleUnknownPRequest() {
        Map<String, Object> response = new HashMap<>();
        response.put("success", false);
        response.put("message", "The requested resource could not be found.");

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

}
