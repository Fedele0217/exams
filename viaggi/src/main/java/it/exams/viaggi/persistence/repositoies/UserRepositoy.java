package it.exams.viaggi.persistence.repositoies;

import it.exams.viaggi.persistence.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepositoy  extends JpaRepository<User, Long> {

}
