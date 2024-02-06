package com.earlybird.api.user.dto;

import com.earlybird.api.user.domain.User;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class SearchUserResponse {
    private List<UserDTO> users;

    public SearchUserResponse(List<User> users) {
        this.users = users.stream()
                .map(UserDTO::new)
                .collect(Collectors.toList());
    }
}
