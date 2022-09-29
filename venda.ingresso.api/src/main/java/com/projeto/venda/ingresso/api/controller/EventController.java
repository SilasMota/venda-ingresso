package com.projeto.venda.ingresso.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.venda.ingresso.api.model.Event;
import com.projeto.venda.ingresso.api.service.EventService;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/api/v1")
public class EventController {

	@Autowired
	EventService service;
	
	@GetMapping("/events")
	public List<Event> findAll() {
		return service.findAll();
	}

	@GetMapping("/events/{id}")
	public Event findById(@PathVariable(value = "id") Long id) {
		return service.findById(id);
	}
}
