package com.earlybird.api.ticket.repository;

import com.earlybird.api.ticket.domain.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
    // 사용불가능한 티켓들
    public List<Ticket> findByExpiredAtLessThanOrUsedAtIsNotNull(LocalDate now);

    // 사용가능한 티켓들
    public List<Ticket> findByExpiredAtGreaterThanEqualAndUsedAtIsNull(LocalDate now);
}
