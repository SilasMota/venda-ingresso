package com.projeto.venda.ingresso.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.venda.ingresso.api.model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event,Long>{}