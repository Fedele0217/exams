package it.exams.viaggi.presentation.dto;


import java.time.LocalDate;
import java.util.Date;

public class BookingDTO {

    private long id;
    private long idUser;
    private long idTravel;
    private int numberPeople;
    private Date datePrenotation;

    public BookingDTO() {
        this.datePrenotation = java.sql.Date.valueOf(LocalDate.now());
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdUser() {
        return idUser;
    }

    public void setIdUser(long idUser) {
        this.idUser = idUser;
    }

    public long getIdTravel() {
        return idTravel;
    }

    public void setIdTravel(long idTravel) {
        this.idTravel = idTravel;
    }

    public int getNumberPeople() {
        return numberPeople;
    }

    public void setNumberPeople(int numberPeople) {
        this.numberPeople = numberPeople;
    }

    public Date getDatePrenotation() {
        return datePrenotation;
    }

    public void setDatePrenotation(Date datePrenotation) {
        this.datePrenotation = datePrenotation;
    }
}

