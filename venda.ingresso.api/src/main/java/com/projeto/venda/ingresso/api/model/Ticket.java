package com.projeto.venda.ingresso.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Ticket {

    @Id
    @GeneratedValue
    public Long id;
    public Long eventId;
    public Long bearerId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public Long getBearerId() {
        return bearerId;
    }

    public void setBearerId(Long bearerId) {
        this.bearerId = bearerId;
    }

}
