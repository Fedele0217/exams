package it.exams.viaggi.presentation.services;

import it.exams.viaggi.persistence.entities.Travel;
import it.exams.viaggi.persistence.repositoies.TravelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TravelService {

    @Autowired
    private TravelRepository travelRepository;

    public List<Travel> getAll() {
        return travelRepository.findAll();
    }

    public Travel getById(long id) {
        Optional<Travel> optionalTravel = travelRepository.findById(id);
        if (optionalTravel.isEmpty()) {
            throw new IllegalStateException("Type not found");
        }
        return optionalTravel.get();
    }

    public Travel create(Travel newTravel) {
        newTravel = travelRepository.save(newTravel);
        return newTravel;
    }

    public Travel update(long id, Travel updateTravel) {
        Optional<Travel> optionalTravel = travelRepository.findById(id); // cerco entità da aaggiornare tramite id
        if (optionalTravel.isEmpty()) { // se non esiste restituisco vuoto
            throw new IllegalStateException("Entity non found");
        }
        Travel entityToUpdate = optionalTravel.get(); // se esiste lo prendo dall'optioonal
        updateTravel.setId(entityToUpdate.getId()); // valorizzo id nel dto
        updateTravel = travelRepository.save(updateTravel); // salvo entità nel db

        return updateTravel;
    }
    public Travel delete(long id) {
        Optional<Travel> optionalTravel = travelRepository.findById(id);
        if (optionalTravel.isEmpty()) { // se non esiste restituisco vuoto
            throw new IllegalStateException("Entity non found");
        }
        Travel entityToDelete = optionalTravel.get();
        travelRepository.delete(entityToDelete);
        return entityToDelete;
    }

}
