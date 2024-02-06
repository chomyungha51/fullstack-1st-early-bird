package com.earlybird.api.ticket.repository;

import com.earlybird.api.ticket.domain.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    @Query("SELECT t FROM Ticket t WHERE t.expiredAt < :today OR t.usedAt is not null")
    List<Ticket> findDisabledTickets(LocalDate today);

    @Query("SELECT t FROM Ticket t WHERE t.expiredAt >= :today AND t.usedAt is null")
    List<Ticket> findEnableTickets(LocalDate today);
}
