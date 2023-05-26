package it.exams.viaggi.persistence.repositoies;

import it.exams.viaggi.persistence.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
