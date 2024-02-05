package com.earlybird.api.ticket.dto;

import lombok.Getter;

@Getter
public class TicketUseResponse {
    private String status;

    public TicketUseResponse(String status) {
        this.status = status;
    }
}
