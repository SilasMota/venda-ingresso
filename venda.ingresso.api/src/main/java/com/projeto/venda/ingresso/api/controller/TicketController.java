package com.projeto.venda.ingresso.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.venda.ingresso.api.DTO.TicketDTO;
import com.projeto.venda.ingresso.api.model.Event;
import com.projeto.venda.ingresso.api.model.Ticket;
import com.projeto.venda.ingresso.api.service.EventService;
import com.projeto.venda.ingresso.api.service.TicketService;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/api/v1")
public class TicketController {

	@Autowired
	TicketService service;
	
	@GetMapping("/tickets")
	public List<TicketDTO> findAll() {
		return service.findAll();
	}

	@GetMapping("/tickets/{rg}")
	public List<TicketDTO> findByRg(@PathVariable(value = "rg") String rg) {
		return service.findByRg(rg);
	}

	@PostMapping("/tickets")
	public TicketDTO createTicket(@RequestBody TicketDTO ticket) {
		service.create(ticket);
		return ticket;
	}
}
