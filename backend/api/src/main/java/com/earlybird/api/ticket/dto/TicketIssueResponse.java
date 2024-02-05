package com.earlybird.api.ticket.dto;

import lombok.Getter;

@Getter
public class TicketIssueResponse {
    private String status;

    public TicketIssueResponse(String status) {
        this.status = status;
    }
}
