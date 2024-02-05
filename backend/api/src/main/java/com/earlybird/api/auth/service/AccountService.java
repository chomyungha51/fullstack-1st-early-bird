package com.earlybird.api.auth.service;

import com.earlybird.api.auth.domain.Account;

public interface AccountService {
    Account findByUsername(String username);
}
