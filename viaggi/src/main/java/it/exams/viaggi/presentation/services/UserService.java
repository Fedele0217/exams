package it.exams.viaggi.presentation.services;

import it.exams.viaggi.persistence.entities.User;
import it.exams.viaggi.persistence.repositoies.UserRepositoy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepositoy userRepositoy;

    public List<User> getAll() {
        return userRepositoy.findAll();
    }

    public User getById(long id) {
        Optional<User> optionalType = userRepositoy.findById(id);
        if (optionalType.isEmpty()) {
            throw new IllegalStateException("Type not found");
        }
        return optionalType.get();
    }

    public User create(User newUser) {
        newUser = userRepositoy.save(newUser);
        return newUser;
    }

    public User update(long id, User updateUser) {
        Optional<User> optionalUser = userRepositoy.findById(id);
        if (optionalUser.isEmpty()) {
            throw new IllegalStateException("Entity non found");
        }
        User entityToUpdate = optionalUser.get();
        updateUser.setId(entityToUpdate.getId());
        updateUser = userRepositoy.save(updateUser);

        return updateUser;
    }

    public User delete(long id) {
        Optional<User> optionalUser = userRepositoy.findById(id);
        if (optionalUser.isEmpty()) {
            throw new IllegalStateException("Entity non found");
        }
        User entityToDelete = optionalUser.get();
        userRepositoy.delete(entityToDelete);
        return entityToDelete;
    }



}
