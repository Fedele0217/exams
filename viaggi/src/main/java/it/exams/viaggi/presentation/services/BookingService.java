package it.exams.viaggi.presentation.services;


import it.exams.viaggi.persistence.entities.Booking;
import it.exams.viaggi.persistence.repositoies.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAll() {
        return bookingRepository.findAll();
    }

    public Booking getById(long id) {
        Optional<Booking> optionalBooking = bookingRepository.findById(id);
        if (optionalBooking.isEmpty()) {
            throw new IllegalStateException("Entity not found");
        }
        return optionalBooking.get();
    }

    public Booking create(Booking newBooking) {
        if (newBooking.getUser() == null || newBooking.getTravel() == null) {
            throw new IllegalStateException("Artist and type not be null");
        }
        newBooking = bookingRepository.save(newBooking);
        return newBooking;
    }

    public Booking update(long id, Booking updateBooking) {
        if (updateBooking.getUser() == null || updateBooking.getTravel() == null) {
            throw new IllegalStateException("Artist and type not be null");
        }
        Optional<Booking> optionalBooking = bookingRepository.findById(id);
        if (optionalBooking.isEmpty()) {
            throw new IllegalStateException("Entity not found");
        }
        Booking entityToUpdate = optionalBooking.get();
        updateBooking.setId(entityToUpdate.getId());
        updateBooking = bookingRepository.save(updateBooking);
        return updateBooking;
    }
    public Booking delete(long id) {
        Optional<Booking> optionalBooking = bookingRepository.findById(id);
        if (optionalBooking.isEmpty()) {
            throw new IllegalStateException("Entity not found");

        }
        Booking entityToDelete = optionalBooking.get();
        bookingRepository.delete(entityToDelete);
        return entityToDelete;
    }
}
