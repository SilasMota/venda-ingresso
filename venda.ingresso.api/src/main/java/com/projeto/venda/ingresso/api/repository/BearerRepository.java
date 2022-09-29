package com.projeto.venda.ingresso.api.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projeto.venda.ingresso.api.model.Bearer;

@Repository
public interface BearerRepository extends JpaRepository<Bearer,Long>{
    
    @Query("SELECT b FROM Bearer b WHERE b.rg like concat('%',?1, '%')")
    Optional<Bearer> findByRg(String rg);
}