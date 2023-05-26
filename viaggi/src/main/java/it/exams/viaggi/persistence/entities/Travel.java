package it.exams.viaggi.persistence.entities;


import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name="travels")
public class Travel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="destination",nullable = false)
    private String destination;


    @Column(name="date_start",nullable = false)
    private Date dateStart;

    @Column(name="date_return",nullable = false)
    private Date dateReturn;

    @Column(name="means_transport",nullable = false)
    private String meansTransport;

    @Column(name="departure_city",nullable = false)
    private String departureCity;

    @Column(name="price",nullable = false, columnDefinition = "DECIMAL(5,2) NOT NULL DEFAULT 0.0")
    private double price;


    @Column(name = "is_sold_out", nullable = false, columnDefinition = "BOOLEAN NOT NULL DEFAULT false")
    private boolean isDeleted;

    @Column(name = "imageTravel", columnDefinition = "MEDIUMBLOB")
    @Lob
    private byte[] imageTravel;

    @OneToMany
    private List<Booking> bookings;
    public Travel() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Date getDateStart() {
        return dateStart;
    }

    public void setDateStart(Date dateStart) {
        this.dateStart = dateStart;
    }

    public Date getDateReturn() {
        return dateReturn;
    }

    public void setDateReturn(Date dateReturn) {
        this.dateReturn = dateReturn;
    }

    public String getMeansTransport() {
        return meansTransport;
    }

    public void setMeansTransport(String meansTransport) {
        this.meansTransport = meansTransport;
    }

    public String getDepartureCity() {
        return departureCity;
    }

    public void setDepartureCity(String departureCity) {
        this.departureCity = departureCity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }


    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public byte[] getImageTravel() {
        return imageTravel;
    }

    public void setImageTravel(byte[] imageTravel) {
        this.imageTravel = imageTravel;
    }
}
