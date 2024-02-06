package com.earlybird.api.auth.service;

import com.earlybird.api.auth.domain.Account;
import com.earlybird.api.auth.dto.AuthLoginRequest;

public interface AccountService {
    Account findByUsername(String username);

    Account login(AuthLoginRequest request);
}
