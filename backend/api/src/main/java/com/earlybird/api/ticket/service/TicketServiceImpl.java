package com.earlybird.api.ticket.service;

import com.earlybird.api.auth.domain.Account;
import com.earlybird.api.auth.repository.AccountRepository;
import com.earlybird.api.ticket.domain.Ticket;
import com.earlybird.api.ticket.dto.TicketRequest;
import com.earlybird.api.ticket.repository.TicketRepository;
import com.earlybird.api.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class TicketServiceImpl implements TicketService{

    private final TicketRepository ticketRepository;

//    @Override
//    public Ticket save(TicketRequest ticketRequest){ return ticketRepository.save(ticketRequest);}

    public Ticket save(TicketRequest ticketRequest){
        User t_User = ticketRequest.getUser();
        String t_Description = ticketRequest.getDescription();
        LocalDate t_expireAt = ticketRequest.getExpireAt();

        Ticket ticket = new Ticket(t_User, t_Description, t_expireAt);
        return ticketRepository.save(ticket);
    }

}
