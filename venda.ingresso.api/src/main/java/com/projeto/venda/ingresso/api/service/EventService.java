package com.projeto.venda.ingresso.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.venda.ingresso.api.model.Event;
import com.projeto.venda.ingresso.api.repository.EventRepository;

@Service
public class EventService {
    @Autowired
    EventRepository repository;

    public EventService(EventRepository eventRepository){
        this.repository = eventRepository;
    }

    public List<Event> findAll(){
        return repository.findAll();
    }

    public Event findById(Long id) {
        return repository.findById(id).orElse(new Event());
    }
}
