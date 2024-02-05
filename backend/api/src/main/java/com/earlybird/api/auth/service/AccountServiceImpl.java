package com.earlybird.api.auth.service;

import com.earlybird.api.auth.domain.Account;
import com.earlybird.api.auth.dto.AuthLoginRequest;
import com.earlybird.api.auth.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    @Override
    public Account findByUsername(String username) {
        return accountRepository.findByUsername(username);
    }

    @Override
    public Account login(AuthLoginRequest request) {
        String username = request.getUsername();
        Account loginUser = findByUsername(username);

        String hashedPassword = loginUser.getPassword(); // DB에 저장된 해시화된 비밀번호
        String inputPassword = request.getPassword(); // 입력한 비밀번호

        if (BCrypt.checkpw(inputPassword, hashedPassword)) {
            return loginUser;
        }
        return null;
    }
}
