package com.earlybird.api.ticket.service;

import com.earlybird.api.ticket.domain.Ticket;
import com.earlybird.api.ticket.dto.TicketIssueRequest;
import com.earlybird.api.ticket.repository.TicketRepository;
import com.earlybird.api.user.domain.User;
import com.earlybird.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TicketService {
    private final TicketRepository ticketRepository;
    private final UserRepository userRepository;

    @Transactional
    public void useTicket(Long ticketId) {
        Ticket ticket = getTicket(ticketId);

        ticket.use();
    }

    public Ticket getTicket(Long ticketId) {
        return ticketRepository.findById(ticketId)
                .orElseThrow(() -> new EntityNotFoundException("해당 티켓이 존재하지 않습니다."));
    }

    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    public List<Ticket> findAllEnable() {
        LocalDate today = LocalDate.now();

        return ticketRepository.findEnableTickets(today);
    }

    public List<Ticket> findAllDisable() {
        LocalDate today = LocalDate.now();

        return ticketRepository.findDisabledTickets(today);
    }

    @Transactional
    public Ticket issue(TicketIssueRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("해당 유저가 존재하지 않습니다."));

        String description = request.getDescription();
        LocalDate expiredAt = request.getExpireAt();

        Ticket ticket = new Ticket(user, description, expiredAt);

        return ticketRepository.save(ticket);
    }
}
