package com.earlybird.api.auth.controller;

import com.earlybird.api.auth.domain.Account;
import com.earlybird.api.auth.dto.AuthLoginRequest;
import com.earlybird.api.auth.dto.AuthLoginResponse;
import com.earlybird.api.auth.service.AccountService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@CrossOrigin(origins="http://localhost:8081")
public class AuthController {
    private final AccountService accountService;
    private final ObjectMapper objectMapper;

    @PostMapping("/login")
    public AuthLoginResponse login(HttpServletRequest request) throws IOException {
        BufferedReader reader = request.getReader();
        AuthLoginRequest loginRequest = objectMapper.readValue(reader, AuthLoginRequest.class);

        Account loginedUser = accountService.login(loginRequest);
        if (loginedUser == null) {
            return new AuthLoginResponse("fail", null);
        }

        HttpSession session = request.getSession();
        session.setAttribute("account", loginedUser);

        return new AuthLoginResponse("success", loginRequest.getUsername());
    }

    @GetMapping("/logout")
    public void logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        session.invalidate();
    }
}
