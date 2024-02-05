package com.earlybird.api.ticket.controller;

import com.earlybird.api.ticket.dto.TicketListResponse;
import com.earlybird.api.ticket.dto.TicketUseResponse;
import com.earlybird.api.ticket.service.TicketService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tickets")
public class TicketController {
    private final TicketService ticketService;

    @GetMapping
    public TicketListResponse findAll(@RequestParam(name = "status", defaultValue = "all") String status) {
        log.info("find all tickets status = " + status);

        if (status.equals("enable")) {
            return new TicketListResponse(ticketService.findAllEnable());
        } else if (status.equals("disable")) {
            return new TicketListResponse(ticketService.findAllDisable());
        } else {
            return new TicketListResponse(ticketService.findAll());
        }
    }

    @PatchMapping("/{ticketId}")
    public TicketUseResponse useTicket(@PathVariable Long ticketId) {
        try {
            ticketService.useTicket(ticketId);
            return new TicketUseResponse("success", null);
        } catch (Exception e) {
            log.error("Exception occured", e);
            return new TicketUseResponse("fail", e.getMessage());
        }
    }
}
