package Pet;

import java.util.List;
import java.util.Optional;

public class PetService {

//    private final PetRepository repository;
//
//    public PetService(PetRepository repository) {
//        this.repository = repository;
//    }
//
//    public List<Pet> getAllPets() {
//        return repository.findAll();
//    }
//
//    public Optional<Pet> getPetById(final long id) {
//        return repository.findById(id);
//    }
//
//    public Pet createPet(final Pet pet) {
//        return repository.save(pet);
//    }
//
//    public Pet updatePet(final long id, final Pet pet) {
//        final Optional<Pet> optionalPet = repository.findById(id);
//        final Pet updatedPet = optionalPet.map(p -> {
//            p.setName(pet.getName());
//            p.setAge(pet.getAge());
//            p.setPhoto(pet.getPhoto());
//            p.setShelterID(pet.getShelterID());
//            return p;
//        }).orElse(pet);
//        return repository.save(updatedPet);
//    }
//
//    public void deletePet(final long id) {
//        repository.deleteById(id);
//    }
}
