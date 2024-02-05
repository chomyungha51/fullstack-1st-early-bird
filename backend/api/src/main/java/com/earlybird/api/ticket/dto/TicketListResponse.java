package com.earlybird.api.ticket.dto;

import com.earlybird.api.ticket.domain.Ticket;
import lombok.Getter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@ToString
public class TicketListResponse {
    private List<TicketDTO> ticketList;

    public TicketListResponse(List<Ticket> tickets) {
        this.ticketList = tickets.stream()
                .map(TicketDTO::new)
                .collect(Collectors.toList());
    }
}
