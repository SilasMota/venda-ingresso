package com.projeto.venda.ingresso.api.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.venda.ingresso.api.DTO.TicketDTO;
import com.projeto.venda.ingresso.api.model.Bearer;
import com.projeto.venda.ingresso.api.model.Event;
import com.projeto.venda.ingresso.api.model.Ticket;
import com.projeto.venda.ingresso.api.repository.BearerRepository;
import com.projeto.venda.ingresso.api.repository.EventRepository;
import com.projeto.venda.ingresso.api.repository.TicketRepository;

@Service
public class TicketService {
    @Autowired
    TicketRepository repository;

    @Autowired
    BearerRepository bearerRepository;

    @Autowired
    EventRepository eventRepository;

    public TicketService(TicketRepository repository){
        this.repository = repository;
    }

    public List<TicketDTO> findAll(){
        List<Ticket> tickets = repository.findAll();
        List<TicketDTO> ticketDTOs = new ArrayList<TicketDTO>();
        for(Ticket ticket : tickets){
            Bearer bearer = bearerRepository.findById(ticket.getBearerId()).orElse(new Bearer());
            Event  event = eventRepository.findById(ticket.getEventId()).orElse(new Event());

            ticketDTOs.add(new TicketDTO(ticket.getId(), bearer, event));
        }
        return ticketDTOs;
    }

    public List<TicketDTO> findByRg(String rg) {
        Bearer bearer = bearerRepository.findByRg(rg).orElse(new Bearer());
        List<Ticket> tickets = repository.findByBearer(bearer.id);
        List<TicketDTO> ticketDTOs = new ArrayList<TicketDTO>();
        for(Ticket ticket : tickets){
            Event  event = eventRepository.findById(ticket.getEventId()).orElse(new Event());

            ticketDTOs.add(new TicketDTO(ticket.getId(), bearer, event));
        }
        return ticketDTOs;
    }

    public Ticket create(TicketDTO ticketDTO) {        
        Bearer bearer = bearerRepository.findByRg(ticketDTO.getBearer().getRg()).orElse(bearerRepository.save(ticketDTO.getBearer()));
        Event  event = eventRepository.findById(ticketDTO.getEvent().getId()).orElse(eventRepository.save(ticketDTO.getEvent()));
        ticketDTO.setBearer(bearer);
        ticketDTO.setEvent(event);
        return repository.save(ticketDTO.toTicket());        
    }
}
