package com.earlybird.api.ticket.dto;

import com.earlybird.api.ticket.repository.TicketRepository;
import com.earlybird.api.user.domain.User;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@ToString
public class TicketRequest {

    private User user;
    private String description;
    private LocalDate expireAt;

    public TicketRequest(User user, String description, LocalDate expireAt) {
        this.user = user;
        this.description = description;
        this.expireAt = expireAt;
    }
}
