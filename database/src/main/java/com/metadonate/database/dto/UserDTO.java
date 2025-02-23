package com.metadonate.database.dto;

import com.metadonate.database.model.User;

public record UserDTO(
        Long user_id,
        String username) {
    public UserDTO(User user) {
        this(user.getId(), user.getUsername());
    }
}
