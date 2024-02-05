package com.earlybird.api.auth.dto;

import com.earlybird.api.auth.domain.Account;
import com.earlybird.api.auth.domain.Role;
import lombok.Getter;

@Getter
public class AccountDTO {
    private String username;
    private Role role;

    private AccountDTO(String username, Role role) {
        this.username = username;
        this.role = role;
    }

    public static AccountDTO from(Account account) {
        final String username = account.getUsername();
        final Role role = account.getRole();

        return new AccountDTO(username, role);
    }
}
