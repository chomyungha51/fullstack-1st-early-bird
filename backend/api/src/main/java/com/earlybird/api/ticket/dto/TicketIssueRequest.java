package com.earlybird.api.ticket.dto;

import com.earlybird.api.user.domain.User;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@ToString
public class TicketIssueRequest {
    private Long userId;
    private String description;
    private LocalDate expireAt;

    public TicketIssueRequest(Long userId, String description, LocalDate expireAt) {
        this.userId = userId;
        this.description = description;
        this.expireAt = expireAt;
    }
}
