package com.projeto.venda.ingresso.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.venda.ingresso.api.model.User;
import com.projeto.venda.ingresso.api.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository repository;

    public UserService(UserRepository userRepository){
        this.repository = userRepository;
    }

    public List<User> getUserByLoginAndPassword(String login, String password){
        return repository.findByLoginAndPassword(login, password);
    }

    public User create(User user) {
        return repository.save(user);
    }
}
