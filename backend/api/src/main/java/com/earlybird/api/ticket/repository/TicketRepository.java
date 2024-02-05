package com.earlybird.api.ticket.repository;

import com.earlybird.api.ticket.domain.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    // 사용가능한 티켓들
    List<Ticket> findByExpiredAtIsNullAndUsedAtIsNull();

    List<Ticket> findByExpiredAtIsNotNullOrUsedAtIsNotNull();
}
