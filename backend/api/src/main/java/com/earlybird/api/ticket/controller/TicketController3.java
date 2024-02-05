package com.earlybird.api.ticket.controller;

import com.earlybird.api.ticket.dto.TicketUseResponse;
import com.earlybird.api.ticket.service.TicketService3;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tickets")
public class TicketController3 {
    private final TicketService3 ticketService3;

    @PatchMapping("/{ticketId}")
    public TicketUseResponse useTicket(@PathVariable Long ticketId) {
        ticketService3.useTicket(ticketId);

        return new TicketUseResponse("success");
    }
}
