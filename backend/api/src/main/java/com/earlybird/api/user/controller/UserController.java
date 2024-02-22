package com.earlybird.api.user.controller;

import com.earlybird.api.user.domain.User;
import com.earlybird.api.user.dto.SearchUserResponse;
import com.earlybird.api.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @GetMapping
    public SearchUserResponse searchUser(@RequestParam(required = false) String name) {
        List<User> users = name == null ? userService.getAllUsers() : userService.searchUser(name);

        return new SearchUserResponse(users);
    }
}
