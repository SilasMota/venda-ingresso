package com.projeto.venda.ingresso.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Event {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String date;
    private Long vacancy;
    private Long price;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDate() {
        return date;
    }

    public Long getVacancy() {
        return vacancy;
    }

    public Long getPrice() {
        return price;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setVacancy(Long vacancy) {
        this.vacancy = vacancy;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

}
