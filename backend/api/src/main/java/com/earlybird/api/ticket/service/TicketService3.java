package com.earlybird.api.ticket.service;

import com.earlybird.api.ticket.domain.Ticket;
import com.earlybird.api.ticket.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TicketService3 {
    private final TicketRepository ticketRepository;

    @Transactional
    public void useTicket(Long ticketId) {
        Ticket ticket = getTicket(ticketId);

        ticket.use();
    }

    public Ticket getTicket(Long ticketId) {
        return ticketRepository.findById(ticketId)
                .orElseThrow(() -> new EntityNotFoundException("해당 티켓이 존재하지 않습니다."));
    }
}
