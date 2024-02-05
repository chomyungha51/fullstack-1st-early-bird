package com.earlybird.api.ticket.controller;

import com.earlybird.api.ticket.domain.Ticket;
import com.earlybird.api.ticket.dto.TicketRequest;
import com.earlybird.api.ticket.repository.TicketRepository;
import com.earlybird.api.ticket.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/tickets")
@RestController
@RequiredArgsConstructor
public class TicketController1 {

    private final TicketService ticketService;

    @PostMapping
    public String addTicket(@RequestBody TicketRequest ticketRequest){

//        public String status = "fail";
        String status = "success";

        try {
            Ticket ticket = ticketService.save(ticketRequest);
        }catch (Exception e)  {
            status = "fail";
        }
        System.out.println(status);
        return status;

    }
}
