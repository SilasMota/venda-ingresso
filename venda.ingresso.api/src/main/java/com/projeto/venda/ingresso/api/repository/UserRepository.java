package com.projeto.venda.ingresso.api.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projeto.venda.ingresso.api.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,String>{

    @Query("SELECT u FROM User u WHERE u.login = ?1 and u.password = ?2")
    List<User> findByLoginAndPassword(String login, String password);
}