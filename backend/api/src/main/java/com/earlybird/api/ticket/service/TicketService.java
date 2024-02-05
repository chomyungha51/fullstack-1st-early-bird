package com.earlybird.api.ticket.service;

import com.earlybird.api.ticket.domain.Ticket;
import com.earlybird.api.ticket.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;

    public List<Ticket> findAll(){
        return ticketRepository.findAll();
    }

    public List<Ticket> findAllEnable(){
        return ticketRepository.findByExpiredAtIsNullAndUsedAtIsNull();
    }

    public List<Ticket> findAllDisable(){
        return ticketRepository.findByExpiredAtIsNotNullOrUsedAtIsNotNull();
    }
}
