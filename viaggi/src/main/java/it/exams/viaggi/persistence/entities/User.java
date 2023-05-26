package it.exams.viaggi.persistence.entities;


import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name= "name", nullable = false)
    private String name;

    @Column(name= "surname", nullable = false)
    private String surname;

    @Column(name= "email", nullable = false)
    private String email;

    @Column(name= "password", nullable = false)
    private String password;

    @Column(name = "is_admin", nullable = false, columnDefinition = "BOOLEAN NOT NULL DEFAULT false")
    private boolean isAdmin;

@OneToMany
    private List<Booking> bookings;

    public User() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }


    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
