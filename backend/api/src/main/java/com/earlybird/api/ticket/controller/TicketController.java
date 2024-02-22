package com.earlybird.api.ticket.controller;

import com.earlybird.api.ticket.domain.Ticket;
import com.earlybird.api.ticket.dto.TicketIssueRequest;
import com.earlybird.api.ticket.dto.TicketIssueResponse;
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

    @PostMapping
    public TicketIssueResponse issueTicket(@RequestBody TicketIssueRequest request) {
        try {
            Ticket ticket = ticketService.issue(request);
            return new TicketIssueResponse("success");
        } catch (Exception e) {
            log.error("Failed to issue ticket.", e);
            return new TicketIssueResponse("fail");
        }
    }

    @GetMapping
    public TicketListResponse findAll(@RequestParam(name = "status", defaultValue = "all") String status) {
        log.info("find all tickets status = " + status);

        if (status.equals("enable")) {
            return new TicketListResponse(ticketService.findAllEnable());
        } else if (status.equals("disable")) {
            return new TicketListResponse(ticketService.findAllDisable());
        }
        return new TicketListResponse(ticketService.findAll());
    }

    @PatchMapping("/{ticketId}")
    public TicketUseResponse useTicket(@PathVariable Long ticketId) {
        try {
            ticketService.useTicket(ticketId);
            return new TicketUseResponse("success", null);
        } catch (Exception e) {
            log.error("Failed to use ticket.", e);
            return new TicketUseResponse("fail", e.getMessage());
        }
    }
}
