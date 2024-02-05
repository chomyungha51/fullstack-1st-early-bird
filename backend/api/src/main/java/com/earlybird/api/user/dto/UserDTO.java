package com.earlybird.api.user.dto;

import com.earlybird.api.user.domain.User;
import lombok.Getter;

@Getter
public class UserDTO {
    private Long id;
    private String name;

    public UserDTO(User user) {
        this.id = user.getId();
        this.name = user.getName();
    }
}
