package it.exams.viaggi.persistence.entities;

import jakarta.persistence.*;

import java.util.Date;


@Entity
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name="id_user", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name="id_travel", nullable = false)
    private Travel travel;

    private int numberPeople;

    private Date datePrenotation;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Travel getTravel() {
        return travel;
    }

    public void setTravel(Travel travel) {
        this.travel = travel;
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
