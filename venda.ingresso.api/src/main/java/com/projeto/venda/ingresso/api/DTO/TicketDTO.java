package com.projeto.venda.ingresso.api.DTO;

import com.projeto.venda.ingresso.api.model.Bearer;
import com.projeto.venda.ingresso.api.model.Event;
import com.projeto.venda.ingresso.api.model.Ticket;


public class TicketDTO {
    private Long id;
    private Bearer bearer;
    private Event event;

    public TicketDTO(){

    }

    public TicketDTO(Long id, Bearer bearer, Event event){
        this.bearer = bearer;
        this.id = id;
        this.event = event;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Bearer getBearer() {
        return bearer;
    }
    public void setBearer(Bearer bearer) {
        this.bearer = bearer;
    }
    public Event getEvent() {
        return event;
    }
    public void setEvent(Event event) {
        this.event = event;
    }

    public Ticket toTicket(){
        Ticket ticket = new Ticket();
        ticket.setBearerId(this.bearer.getId());
        ticket.setEventId(this.event.getId());
        return ticket;
    }
    
}
