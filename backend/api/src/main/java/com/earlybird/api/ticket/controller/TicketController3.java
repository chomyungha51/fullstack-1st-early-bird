package com.earlybird.api.ticket.controller;

import com.earlybird.api.ticket.dto.TicketListResponse;
import com.earlybird.api.ticket.dto.TicketUseResponse;
import com.earlybird.api.ticket.service.TicketService3;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tickets")
public class TicketController3 {
    private final TicketService3 ticketService3;

    @GetMapping
    public TicketListResponse findAll(@RequestParam(name = "status", defaultValue = "all") String status) {
        log.info("find all tickets status = " + status);

        if (status.equals("enable")) {
            return new TicketListResponse(ticketService3.findAllEnable());
        } else if (status.equals("disable")) {
            return new TicketListResponse(ticketService3.findAllDisable());
        } else {
            return new TicketListResponse(ticketService3.findAll());
        }
    }

    @PatchMapping("/{ticketId}")
    public TicketUseResponse useTicket(@PathVariable Long ticketId) {
        try {
            ticketService3.useTicket(ticketId);
            return new TicketUseResponse("success");
        } catch (Exception e) {
            log.error("Exception occured", e);
            return new TicketUseResponse("fail");
        }
    }
}
