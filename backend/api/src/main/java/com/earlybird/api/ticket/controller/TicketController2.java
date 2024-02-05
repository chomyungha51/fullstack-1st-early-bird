package com.earlybird.api.ticket.controller;

import com.earlybird.api.ticket.dto.TicketListResponse;
import com.earlybird.api.ticket.service.TicketService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/tickets")
@RestController
@RequiredArgsConstructor
@Slf4j
public class TicketController2 {
    private final TicketService ticketService;

    @GetMapping
    public TicketListResponse findAll(@RequestParam(name = "status", defaultValue = "all") String status){
        log.info("find all tickets status = "+status);
        if(status.equals("enable")){
            return  new TicketListResponse(ticketService.findAllEnable());
        }else if(status.equals("disable")){
            return  new TicketListResponse(ticketService.findAllDisable());
        }else{
            return  new TicketListResponse(ticketService.findAll());
        }

    }
}
