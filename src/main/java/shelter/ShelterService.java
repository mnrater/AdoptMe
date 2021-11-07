package shelter;

import account.Account;
import account.AccountRepository;
import org.springframework.stereotype.Service;
import pet.Pet;

import java.util.Date;
import java.util.List;

@Service
public class ShelterService {

    private final ShelterRepository repository;

    public ShelterService(ShelterRepository repository) {
        this.repository = repository;
    }

    public List<Shelter> getAllshelters() {
        return repository.findAll();
    }

    public Shelter getShelterById(Integer id) {
        return repository.findShelterById(id);
    }

    public List<Pet> getAllPetsForShelter(int id){
        return repository.findAllPetsForShelter(id);
    }

    public void updateShelter(int id, String name, Date creationDate){
        repository.updateShelter(id, name, creationDate);
    }
}
