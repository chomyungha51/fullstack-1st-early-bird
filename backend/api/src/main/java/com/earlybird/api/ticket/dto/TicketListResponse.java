package com.earlybird.api.ticket.dto;

import com.earlybird.api.ticket.domain.Ticket;
import lombok.Getter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Getter
@ToString
public class TicketListResponse {
    List<TicketDTO> ticketList;

    public TicketListResponse(List<Ticket> tickets) {
        this.ticketList = new ArrayList<>();
        for(Ticket ticket:tickets){
            ticketList.add(new TicketDTO(ticket));
        }
    }
}
