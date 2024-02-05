package com.earlybird.api.ticket.dto;

import lombok.Getter;

@Getter
public class TicketUseResponse {
    private String status;
    private Object data;

    public TicketUseResponse(String status, Object data) {
        this.status = status;
        this.data = data;
    }
}
