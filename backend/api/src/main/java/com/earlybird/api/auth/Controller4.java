package com.earlybird.api.auth;

import com.earlybird.api.auth.domain.Account;
import com.earlybird.api.auth.domain.AccountDTO;
import com.earlybird.api.auth.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/ticket")
public class Controller4 {
    private final AccountService accountService;

    @PostMapping(path = "/login")
    public AccountDTO login(@RequestBody Account account) {
        System.out.println("account = " + account);
        Account loginUser = accountService.findByUsername(account.getUsername());
        System.out.println("loginUser = " + loginUser);

        String hashedPassword = loginUser.getPassword(); // DB에 저장된 해시화된 비밀번호
        String inputPassword = account.getPassword(); // 입력한 비밀번호

        if (BCrypt.checkpw(inputPassword, hashedPassword)) {
                return AccountDTO.from(loginUser);

        }

        return null;
    }
}
