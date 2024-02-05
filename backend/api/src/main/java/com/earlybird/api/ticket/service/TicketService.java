package com.earlybird.api.ticket.service;

import com.earlybird.api.ticket.domain.Ticket;
import com.earlybird.api.ticket.dto.TicketRequest;

public interface TicketService{

    Ticket save(TicketRequest ticketRequest);
}
