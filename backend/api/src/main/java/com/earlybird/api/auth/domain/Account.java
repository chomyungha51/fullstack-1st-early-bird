package com.earlybird.api.auth.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@Table(name = "account")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Account {

    @Id
    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role;
}
