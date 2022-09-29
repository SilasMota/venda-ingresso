package com.projeto.venda.ingresso.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.venda.ingresso.api.model.User;
import com.projeto.venda.ingresso.api.service.UserService;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(path = "/api/v1")
public class UserController {

	@Autowired
	UserService service;
	
	@GetMapping("/login")
	public List<User> login(@RequestParam(name = "login", value = "login") String login, @RequestParam(name="password", value = "password") String password) {
		return service.getUserByLoginAndPassword(login, password);
	}

	@PostMapping("/login")
	public User createTicket(@RequestBody User user) {
		return service.create(user);
	}
}
