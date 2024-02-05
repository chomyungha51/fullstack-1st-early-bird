package com.earlybird.api.auth.repository;

import com.earlybird.api.auth.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, String> {
}
