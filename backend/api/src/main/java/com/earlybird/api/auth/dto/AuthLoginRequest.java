package com.earlybird.api.auth.dto;

import lombok.Getter;

@Getter
public class AuthLoginRequest {
    private String username;
    private String password;

    public AuthLoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
