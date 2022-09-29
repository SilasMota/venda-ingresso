package com.projeto.venda.ingresso.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projeto.venda.ingresso.api.model.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket,Long>{

    @Query("SELECT t FROM Ticket t WHERE t.bearerId = ?1")
    List<Ticket> findByBearer(Long bearer_id);
}