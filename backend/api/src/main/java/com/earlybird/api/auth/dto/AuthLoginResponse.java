package com.earlybird.api.auth.dto;

import lombok.Getter;

@Getter
public class AuthLoginResponse {
    private String status;
    private String username;

    public AuthLoginResponse(String status, String username) {
        this.status = status;
        this.username = username;
    }
}
