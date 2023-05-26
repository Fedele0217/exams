package it.exams.viaggi.persistence.repositoies;

import it.exams.viaggi.persistence.entities.Travel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TravelRepository extends JpaRepository<Travel, Long> {
}
