package com.earlybird.api.ticket.dto;

import com.earlybird.api.ticket.domain.Ticket;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@ToString
public class TicketDTO {
    private Long id;
    private Long userId;
    private String description;
    private LocalDate expiredAt;
    private LocalDate usedAt;
    private LocalDateTime createdAt;

    public TicketDTO(Ticket ticket){
        this.id = ticket.getId();
        this.userId = ticket.getUser().getId();
        this.description = ticket.getDescription();
        this.usedAt = ticket.getUsedAt();
        this.expiredAt = ticket.getExpiredAt();
        this.createdAt = ticket.getCreatedAt();
    }
}
